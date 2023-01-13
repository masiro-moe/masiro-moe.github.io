import 'package:flutter/material.dart';
import 'package:quiver/strings.dart' as strings;

import '../http/api/user_api.dart';
import '../http/form/user_form.dart';
import '../utils/storage_util.dart';

class UserAuth extends ChangeNotifier {
  int? _uid;
  String? _token;
  int? _expire;

  UserAuth._();

  static final UserAuth _instance = UserAuth._();

  factory UserAuth() => _instance;

  Future<bool> signedIn() async {
    if (strings.isBlank(_token)) {
      _token = await LocalStorage.getString('token');
    }
    _expire ??= await LocalStorage.getInt('expire');
    _uid ??= await LocalStorage.getInt('uid');
    return strings.isNotBlank(_token) &&
        ((_expire ?? 0) > DateTime.now().millisecondsSinceEpoch);
  }

  void signOut() async {
    await UserApi().logout();
    signOutWithoutReq();
  }

  void signOutWithoutReq() async {
    LocalStorage.remove('uid');
    LocalStorage.remove('token');
    LocalStorage.remove('expire');
    _token = null;
    _expire = null;
    notifyListeners();
  }

  int? get uid => _uid;

  Future<void> login(UserLoginForm form) async {
    // 发送登录请求
    var res = await UserApi().login(form);
    _token = res.token;
    _uid = res.userId;
    _expire = res.expire;
    LocalStorage.setInt('uid', _uid!);
    LocalStorage.setString('token', _token!);
    LocalStorage.setInt('expire', _expire!);
    notifyListeners();
  }

  Future<bool> expired() async {
    var expire = await LocalStorage.getInt('expire');
    return (expire ?? 0) <= DateTime.now().millisecondsSinceEpoch;
  }

  Future<String?> token() async {
    if (strings.isNotBlank(_token)) {
      return _token;
    }
    return LocalStorage.getString('token');
  }
}
