// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'forum_post_comment.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ForumPostComment _$ForumPostCommentFromJson(Map<String, dynamic> json) =>
    ForumPostComment(
      id: json['id'] as int?,
      forumId: json['forumId'] as int?,
      postId: json['postId'] as int?,
      userId: json['userId'] as int?,
      parentId: json['parentId'] as int?,
      topId: json['topId'] as int?,
      replyUserId: json['replyUserId'] as int?,
      floor: json['floor'] as int?,
      thumbUpCount: json['thumbUpCount'] as int?,
      thumbUp: json['thumbUp'] as bool?,
      hotComment: json['hotComment'] as bool?,
      hotCommentPoint: json['hotCommentPoint'] as bool?,
      getCoin: json['getCoin'] as int?,
      user: json['user'] == null
          ? null
          : User.fromJson(json['user'] as Map<String, dynamic>),
      replyUser: json['replyUser'] == null
          ? null
          : User.fromJson(json['replyUser'] as Map<String, dynamic>),
      createdAt: DateUtil.fromMillisecondsSinceEpoch(json['createdAt'] as int?),
      content: json['content'] as String?,
    );

Map<String, dynamic> _$ForumPostCommentToJson(ForumPostComment instance) =>
    <String, dynamic>{
      'user': instance.user?.toJson(),
      'replyUser': instance.replyUser?.toJson(),
      'createdAt': DateUtil.toMillisecondsSinceEpoch(instance.createdAt),
      'content': instance.content,
      'id': instance.id,
      'forumId': instance.forumId,
      'postId': instance.postId,
      'userId': instance.userId,
      'parentId': instance.parentId,
      'topId': instance.topId,
      'replyUserId': instance.replyUserId,
      'floor': instance.floor,
      'thumbUpCount': instance.thumbUpCount,
      'thumbUp': instance.thumbUp,
      'hotComment': instance.hotComment,
      'hotCommentPoint': instance.hotCommentPoint,
      'getCoin': instance.getCoin,
    };
