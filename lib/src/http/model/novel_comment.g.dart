// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'novel_comment.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

NovelComment _$NovelCommentFromJson(Map<String, dynamic> json) => NovelComment(
      id: json['id'] as int?,
      novelId: json['novelId'] as int?,
      userId: json['userId'] as int?,
      parentId: json['parentId'] as int?,
      topId: json['topId'] as int?,
      chapterId: json['chapterId'] as int?,
      type: $enumDecodeNullable(_$CommentTypeEnumMap, json['type']),
      floor: json['floor'] as int?,
      thumbUpCount: json['thumbUpCount'] as int?,
      thumbUp: json['thumbUp'] as bool?,
      hotComment: json['hotComment'] as bool?,
      hotCommentPoint: json['hotCommentPoint'] as bool?,
      replyCount: json['replyCount'] as int?,
      user: json['user'] == null
          ? null
          : User.fromJson(json['user'] as Map<String, dynamic>),
      replyUser: json['replyUser'] == null
          ? null
          : User.fromJson(json['replyUser'] as Map<String, dynamic>),
      createdAt: DateUtil.fromMillisecondsSinceEpoch(json['createdAt'] as int?),
      content: json['content'] as String?,
    );

Map<String, dynamic> _$NovelCommentToJson(NovelComment instance) =>
    <String, dynamic>{
      'user': instance.user?.toJson(),
      'replyUser': instance.replyUser?.toJson(),
      'createdAt': DateUtil.toMillisecondsSinceEpoch(instance.createdAt),
      'content': instance.content,
      'id': instance.id,
      'novelId': instance.novelId,
      'userId': instance.userId,
      'parentId': instance.parentId,
      'topId': instance.topId,
      'chapterId': instance.chapterId,
      'type': _$CommentTypeEnumMap[instance.type],
      'floor': instance.floor,
      'thumbUpCount': instance.thumbUpCount,
      'thumbUp': instance.thumbUp,
      'hotComment': instance.hotComment,
      'hotCommentPoint': instance.hotCommentPoint,
      'replyCount': instance.replyCount,
    };

const _$CommentTypeEnumMap = {
  CommentType.novel: '1',
  CommentType.chapter: '2',
};
