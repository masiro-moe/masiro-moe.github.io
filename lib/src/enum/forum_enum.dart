import 'package:json_annotation/json_annotation.dart';

/// 论坛类型
@JsonEnum(valueField: 'code')
enum ForumType {
  /// 小说
  novel('1'),

  /// 独立
  single('2'),
  ;

  const ForumType(this.code);

  final String code;

  static ForumType parse(String? code) {
    return ForumType.values.firstWhere((e) => e.code == code);
  }
}

/// 论坛帖类型
@JsonEnum(valueField: 'code')
enum ForumPostType {
  /// 杂谈
  talk('1'),

  /// 水贴
  random('2'),

  /// 翻译
  translate('3'),

  /// 撒币
  gold('4'),
  ;

  const ForumPostType(this.code);

  final String code;

  static ForumPostType parse(String? code) {
    return ForumPostType.values.firstWhere((e) => e.code == code);
  }
}
