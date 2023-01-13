import 'dart:io';

typedef FromJson<T> = T Function(Map<String, dynamic> json);
typedef ToJson<T> = Map<String, dynamic> Function(T t);

/// 返回结果
class GlobalResp {
  int code;
  String msg;
  dynamic data;

  GlobalResp({required this.code, required this.msg, required this.data});

  factory GlobalResp.error() {
    return GlobalResp(code: HttpStatus.badRequest, msg: '', data: null);
  }

  /// 成功
  bool get success => code == HttpStatus.ok;

  factory GlobalResp.fromJson(Map<String, dynamic> json) =>
      _$GlobalRespFromJson(json);
}

GlobalResp _$GlobalRespFromJson(Map<String, dynamic> json) {
  var code = json['code'] as int;
  var data =
      code == 200 ? json['data'] ?? <String, dynamic>{} : <String, dynamic>{};
  return GlobalResp(
    code: code,
    msg: json['msg'] as String,
    data: data,
  );
}

/// 分页泛型
class PageGenerics<T> {
  List<T> list = [];
  int total;
  int pages;
  int pageNum;
  int pageSize;

  PageGenerics({
    this.total = 0,
    this.pages = 0,
    this.pageNum = 0,
    this.pageSize = 0,
  });

  void update(PageGenerics<T> page) {
    list.addAll(page.list);
    total = page.total;
    pages = page.pages;
    pageNum = page.pageNum;
    pageSize = page.pageSize;
  }

  factory PageGenerics.fromPageJson(
          Map<String, dynamic> json, FromJson<T> toT) =>
      _$PageGenericsFromJson(json, toT);

  Map<String, dynamic> toPageJson(ToJson<T> toJson) =>
      _$PageGenericsToJson(this, toJson);
}

PageGenerics<T> _$PageGenericsFromJson<T>(
        Map<String, dynamic> json, FromJson<T> toT) =>
    PageGenerics<T>(
      total: (json['total'] ?? 0) as int,
      pages: (json['pages'] ?? 0) as int,
      pageNum: (json['pageNum'] ?? 0) as int,
      pageSize: (json['pageSize'] ?? 0) as int,
    )..list.addAll((json['list'] as List<dynamic>?)
            ?.where((e) => e != null)
            .map((e) => toT(e as Map<String, dynamic>))
            .toList() ??
        []);

Map<String, dynamic> _$PageGenericsToJson<T>(
        PageGenerics instance, ToJson<T> toJson) =>
    <String, dynamic>{
      'total': instance.total,
      'pages': instance.pages,
      'pageNum': instance.pageNum,
      'pageSize': instance.pageSize,
      'list': instance.list.map((e) => toJson(e)).toList(),
    };
