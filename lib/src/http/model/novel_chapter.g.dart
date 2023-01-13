// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'novel_chapter.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

NovelChapter _$NovelChapterFromJson(Map<String, dynamic> json) => NovelChapter(
      id: json['id'] as int?,
      title: json['title'] as String?,
      parentId: json['parentId'] as int?,
      order: json['order'] as int?,
      status: json['status'] as bool?,
      paid: json['paid'] as bool?,
      updatedAt: DateUtil.fromMillisecondsSinceEpoch(json['updatedAt'] as int?),
      chapterList: (json['chapterList'] as List<dynamic>?)
          ?.map((e) => NovelChapter.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$NovelChapterToJson(NovelChapter instance) =>
    <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'parentId': instance.parentId,
      'order': instance.order,
      'status': instance.status,
      'paid': instance.paid,
      'updatedAt': DateUtil.toMillisecondsSinceEpoch(instance.updatedAt),
      'chapterList': instance.chapterList?.map((e) => e.toJson()).toList(),
    };
