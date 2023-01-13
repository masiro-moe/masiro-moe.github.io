// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'forum_post.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ForumPost _$ForumPostFromJson(Map<String, dynamic> json) => ForumPost(
      id: json['id'] as int?,
      forumId: json['forumId'] as int?,
      userId: json['userId'] as int?,
      user: json['user'] == null
          ? null
          : User.fromJson(json['user'] as Map<String, dynamic>),
      type: $enumDecodeNullable(_$ForumPostTypeEnumMap, json['type']),
      typeName: json['typeName'] as String?,
      title: json['title'] as String?,
      createdAt: DateUtil.fromMillisecondsSinceEpoch(json['createdAt'] as int?),
      updatedAt: DateUtil.fromMillisecondsSinceEpoch(json['updatedAt'] as int?),
      viewCount: json['viewCount'] as int?,
      refinement: json['refinement'] as bool?,
      topPost: json['topPost'] as int?,
      limitLv: json['limitLv'] as int?,
      cost: json['cost'] as int?,
      needPay: json['needPay'] as bool?,
      thumbUp: json['thumbUp'] as bool?,
      thumbUpCount: json['thumbUpCount'] as int?,
      hotCommentPoint: json['hotCommentPoint'] as bool?,
      hb: json['hb'] as int?,
      splitNumber: json['splitNumber'] as int?,
      rate: json['rate'] as int?,
      lastNumber: json['lastNumber'] as int?,
      perCoin: json['perCoin'] as int?,
      closeNotice: json['closeNotice'] as bool?,
      content: json['content'] as String?,
      commentCount: json['commentCount'] as int?,
    );

Map<String, dynamic> _$ForumPostToJson(ForumPost instance) => <String, dynamic>{
      'id': instance.id,
      'forumId': instance.forumId,
      'userId': instance.userId,
      'user': instance.user?.toJson(),
      'type': _$ForumPostTypeEnumMap[instance.type],
      'typeName': instance.typeName,
      'title': instance.title,
      'createdAt': DateUtil.toMillisecondsSinceEpoch(instance.createdAt),
      'updatedAt': DateUtil.toMillisecondsSinceEpoch(instance.updatedAt),
      'viewCount': instance.viewCount,
      'refinement': instance.refinement,
      'topPost': instance.topPost,
      'limitLv': instance.limitLv,
      'cost': instance.cost,
      'needPay': instance.needPay,
      'thumbUp': instance.thumbUp,
      'thumbUpCount': instance.thumbUpCount,
      'hotCommentPoint': instance.hotCommentPoint,
      'hb': instance.hb,
      'splitNumber': instance.splitNumber,
      'rate': instance.rate,
      'lastNumber': instance.lastNumber,
      'perCoin': instance.perCoin,
      'closeNotice': instance.closeNotice,
      'content': instance.content,
      'commentCount': instance.commentCount,
    };

const _$ForumPostTypeEnumMap = {
  ForumPostType.talk: '1',
  ForumPostType.random: '2',
  ForumPostType.translate: '3',
  ForumPostType.gold: '4',
};
