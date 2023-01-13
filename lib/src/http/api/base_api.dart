import 'dart:convert';
import 'dart:io';

import 'package:bot_toast/bot_toast.dart';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

import '../../config/auth.dart';
import '../../config/environment.dart';
import '../../model/common_model.dart';
import '../../utils/logger.dart';
import '../../utils/platform_util.dart';
import '../form/base_form.dart';

typedef ValueConvert<P, V> = V Function(P p);
typedef TriFunction<F, S, V> = V Function(F headers, S bodyJson);

UriChainWrapper toUri(String uri) {
  var envConfig = EnvConfig.instance();
  Uri res;
  if (envConfig.isHttps) {
    res = Uri.https(envConfig.domain, envConfig.uri(uri));
  } else {
    res = Uri.http(envConfig.domain, envConfig.uri(uri));
  }
  return UriChainWrapper(res);
}

class UriChainWrapper {
  final Uri _uri;

  UriChainWrapper(this._uri);

  /// 请求头
  Future<Map<String, String>> headers(Map<String, dynamic>? body) async {
    // var list = body?.keys.toList()
    //     ?..sort();
    // var fold = list?.where((e) => body?[e] != null && body?[e] is! Iterable)
    //     .fold({}, (previousValue, element) {
    //   return {element: body?[element], ...previousValue};
    // });
    // var json = jsonEncode(fold);
    // var convert = md5.convert(json.codeUnits);
    // logger.finest('bodySortMap:$fold');
    // logger.finest('json:$json');
    // logger.finest('md5Body:${convert.toString()}');
    return {
      HttpHeaders.contentTypeHeader: 'application/json',
      HttpHeaders.authorizationHeader: await UserAuth().token() ?? '',
      'platform': PlatformUtils.platform,
    };
  }

  /// post请求
  BaseApiChain post(BaseForm form) {
    return BaseApiChain(_sendRequest(
      form.toJson(),
      (headers, bodyJson) => http.post(_uri, headers: headers, body: bodyJson),
    ));
  }

  /// delete
  BaseApiChain delete(BaseForm form) {
    return BaseApiChain(_sendRequest(
      form.toJson(),
      (headers, bodyJson) =>
          http.delete(_uri, headers: headers, body: bodyJson),
    ));
  }

  /// 发送请求
  Future<http.Response> _sendRequest(
    Map<String, dynamic> body,
    TriFunction<Map<String, String>, String, Future<http.Response>> req,
  ) async {
    var headersMap = await headers(body);
    var bodyJson = jsonEncode(body);
    return req(headersMap, bodyJson)
        .timeout(const Duration(seconds: 10))
        .onError(
      (error, stackTrace) {
        BotToast.showText(text: 'Http Request Fail');
        throw error as Exception;
      },
    );
  }
}

class BaseApiChain {
  final Future<http.Response> httpResp;

  BaseApiChain(this.httpResp);

  /// 原生结果
  Future<dynamic> raw() async {
    var resp = await httpResp;
    if (resp.statusCode != HttpStatus.ok) {
      BotToast.showText(text: 'Bad Request');
      throw ApiException('Bad Request');
    }
    var bodyDecode = utf8.decode(resp.bodyBytes);
    logger.fine('body:$bodyDecode');
    var globalResp = GlobalResp.fromJson(jsonDecode(bodyDecode));
    if (!globalResp.success) {
      if (globalResp.code == HttpStatus.unauthorized) {
        UserAuth().signOutWithoutReq();
      }
      BotToast.showText(text: globalResp.msg);
      throw ApiException(globalResp.msg);
    }
    return globalResp.data;
  }

  Future<T> map<T>(
    ComputeCallback<Map<String, dynamic>, T> callback,
  ) async {
    Map<String, dynamic> data = await raw();
    return compute(callback, data);
  }

  Future<List<T>> list<T>(
    ValueConvert<Map<String, dynamic>, T> callback,
  ) async {
    var data = await raw() as Iterable;
    return compute(
      (list) => list.map((e) => callback(e as Map<String, dynamic>)).toList(),
      data,
    );
  }
}

class ApiException implements Exception {
  final String? message;

  ApiException(this.message);
}
