import 'package:json_annotation/json_annotation.dart';

@JsonEnum(valueField: 'code')
enum CommentType {
  /// 小说评论
  novel('1'),

  /// 章节评论
  chapter('2'),
  ;

  const CommentType(this.code);

  final String code;
}

@JsonEnum(valueField: 'code')
enum CollectionType {
  /// 小说
  novel('1'),

  /// 帖子
  post('2'),

  /// 论坛
  forum('3'),

  /// 用户
  user('4');

  const CollectionType(this.code);

  final String code;
}
