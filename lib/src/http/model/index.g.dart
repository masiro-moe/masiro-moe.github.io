// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'index.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

IndexAnnouncement _$IndexAnnouncementFromJson(Map<String, dynamic> json) =>
    IndexAnnouncement(
      id: json['id'] as int?,
      createdAt: json['createdAt'] as String?,
      updatedAt: json['updatedAt'] as String?,
      title: json['title'] as String?,
      brief: json['brief'] as String?,
      force: json['force'] as String?,
      creator: json['creator'] as String?,
      open: json['open'] as String?,
      rank: json['rank'] as String?,
      content: json['content'] as String?,
    );

Map<String, dynamic> _$IndexAnnouncementToJson(IndexAnnouncement instance) =>
    <String, dynamic>{
      'id': instance.id,
      'createdAt': instance.createdAt,
      'updatedAt': instance.updatedAt,
      'title': instance.title,
      'brief': instance.brief,
      'force': instance.force,
      'creator': instance.creator,
      'open': instance.open,
      'rank': instance.rank,
      'content': instance.content,
    };

IndexBanner _$IndexBannerFromJson(Map<String, dynamic> json) => IndexBanner(
      id: json['id'] as int?,
      pic: json['pic'] as String?,
      mpic: json['mpic'] as String?,
      url: json['url'] as String?,
    );

Map<String, dynamic> _$IndexBannerToJson(IndexBanner instance) =>
    <String, dynamic>{
      'id': instance.id,
      'pic': instance.pic,
      'mpic': instance.mpic,
      'url': instance.url,
    };

IndexNovel _$IndexNovelFromJson(Map<String, dynamic> json) => IndexNovel(
      id: json['id'] as int?,
      title: json['title'] as String?,
      coverImg: json['coverImg'] as String?,
      newUpTime: json['newUpTime'] as int?,
      readLevelLimit: json['readLevelLimit'] as bool?,
    );

Map<String, dynamic> _$IndexNovelToJson(IndexNovel instance) =>
    <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'coverImg': instance.coverImg,
      'newUpTime': instance.newUpTime,
      'readLevelLimit': instance.readLevelLimit,
    };
