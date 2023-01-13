// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'forum.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Forum _$ForumFromJson(Map<String, dynamic> json) => Forum(
      id: json['id'] as int?,
      name: json['name'] as String?,
      rank: json['rank'] as int?,
      logo: json['logo'] as String?,
      type: $enumDecodeNullable(_$ForumTypeEnumMap, json['type']),
      novelId: json['novelId'] as int?,
      creator: json['creator'] as int?,
      createdAt: DateUtil.fromMillisecondsSinceEpoch(json['createdAt'] as int?),
      updatedAt: DateUtil.fromMillisecondsSinceEpoch(json['updatedAt'] as int?),
      bgMobile: json['bgMobile'] as String?,
      bgPc: json['bgPc'] as String?,
      followCount: json['followCount'] as int?,
      followed: json['followed'] as bool?,
      styleId: json['styleId'] as int?,
      brief: json['brief'] as String?,
      viewCount: json['viewCount'] as int?,
      postCount: json['postCount'] as int?,
      topList: (json['topList'] as List<dynamic>?)
          ?.map((e) => ForumPost.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$ForumToJson(Forum instance) => <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'rank': instance.rank,
      'logo': instance.logo,
      'type': _$ForumTypeEnumMap[instance.type],
      'novelId': instance.novelId,
      'creator': instance.creator,
      'createdAt': DateUtil.toMillisecondsSinceEpoch(instance.createdAt),
      'updatedAt': DateUtil.toMillisecondsSinceEpoch(instance.updatedAt),
      'bgMobile': instance.bgMobile,
      'bgPc': instance.bgPc,
      'followCount': instance.followCount,
      'followed': instance.followed,
      'styleId': instance.styleId,
      'brief': instance.brief,
      'viewCount': instance.viewCount,
      'postCount': instance.postCount,
      'topList': instance.topList?.map((e) => e.toJson()).toList(),
    };

const _$ForumTypeEnumMap = {
  ForumType.novel: '1',
  ForumType.single: '2',
};
