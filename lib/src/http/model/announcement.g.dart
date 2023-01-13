// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'announcement.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Announcement _$AnnouncementFromJson(Map<String, dynamic> json) => Announcement(
      id: json['id'] as int?,
      createdAt: DateUtil.fromMillisecondsSinceEpoch(json['createdAt'] as int?),
      updatedAt: DateUtil.fromMillisecondsSinceEpoch(json['updatedAt'] as int?),
      title: json['title'] as String?,
      brief: json['brief'] as String?,
      force: json['force'] as bool?,
      creator: json['creator'] as int?,
      creatorName: json['creatorName'] as String?,
      open: json['open'] as bool?,
      rank: json['rank'] as int?,
      content: json['content'] as String?,
    );

Map<String, dynamic> _$AnnouncementToJson(Announcement instance) =>
    <String, dynamic>{
      'id': instance.id,
      'createdAt': DateUtil.toMillisecondsSinceEpoch(instance.createdAt),
      'updatedAt': DateUtil.toMillisecondsSinceEpoch(instance.updatedAt),
      'title': instance.title,
      'brief': instance.brief,
      'force': instance.force,
      'creator': instance.creator,
      'creatorName': instance.creatorName,
      'open': instance.open,
      'rank': instance.rank,
      'content': instance.content,
    };
