// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'novel_content.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

NovelContent _$NovelContentFromJson(Map<String, dynamic> json) => NovelContent(
      id: json['id'] as int?,
      title: json['title'] as String?,
      cid: json['cid'] as int?,
      preCid: json['preCid'] as int?,
      nextCid: json['nextCid'] as int?,
      nid: json['nid'] as int?,
      translator: json['translator'] as int?,
      translatorName: json['translatorName'] as String?,
      content: json['content'] as String?,
      limitLv: json['limitLv'] as int?,
      paid: json['paid'] as bool?,
      cost: json['cost'] as int?,
      userPoint: json['userPoint'] as int?,
      userLv: json['userLv'] as int?,
    );

Map<String, dynamic> _$NovelContentToJson(NovelContent instance) =>
    <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'cid': instance.cid,
      'nid': instance.nid,
      'translator': instance.translator,
      'translatorName': instance.translatorName,
      'content': instance.content,
      'limitLv': instance.limitLv,
      'preCid': instance.preCid,
      'nextCid': instance.nextCid,
      'paid': instance.paid,
      'cost': instance.cost,
      'userPoint': instance.userPoint,
      'userLv': instance.userLv,
    };

NovelContentVerify _$NovelContentVerifyFromJson(Map<String, dynamic> json) =>
    NovelContentVerify(
      paid: json['paid'] as bool?,
      cost: json['cost'] as int?,
      content: json['content'] == null
          ? null
          : NovelContent.fromJson(json['content'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$NovelContentVerifyToJson(NovelContentVerify instance) =>
    <String, dynamic>{
      'paid': instance.paid,
      'cost': instance.cost,
      'content': instance.content?.toJson(),
    };
