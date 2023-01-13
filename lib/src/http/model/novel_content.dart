import 'package:json_annotation/json_annotation.dart';

part 'novel_content.g.dart';

/// 小说正文
@JsonSerializable()
class NovelContent {
  final int? id;
  final String? title;
  final int? cid;
  final int? nid;
  final int? translator;
  final String? translatorName;
  final String? content;

  /// 等级限制
  final int? limitLv;

  /// 上一个章节
  final int? preCid;

  /// 下一个章节
  final int? nextCid;

  /// 是否已经支付
  final bool? paid;

  /// 费用
  final int? cost;

  /// 用户持有点数
  final int? userPoint;

  /// 用户当前等级
  final int? userLv;

  NovelContent({
    this.id,
    this.title,
    this.cid,
    this.preCid,
    this.nextCid,
    this.nid,
    this.translator,
    this.translatorName,
    this.content,
    this.limitLv,
    this.paid,
    this.cost,
    this.userPoint,
    this.userLv,
  });

  factory NovelContent.fromJson(Map<String, dynamic> json) =>
      _$NovelContentFromJson(json);

  Map<String, dynamic> toJson() => _$NovelContentToJson(this);
}

/// 小说章节校验
@JsonSerializable()
class NovelContentVerify {
  final bool? paid;
  final int? cost;
  NovelContent? content;

  NovelContentVerify({
    this.paid,
    this.cost,
    this.content,
  });

  factory NovelContentVerify.fromJson(Map<String, dynamic> json) =>
      _$NovelContentVerifyFromJson(json);

  Map<String, dynamic> toJson() => _$NovelContentVerifyToJson(this);
}
