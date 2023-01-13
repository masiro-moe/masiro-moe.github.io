// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'novel.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Novel _$NovelFromJson(Map<String, dynamic> json) => Novel(
      id: json['id'] as int?,
      title: json['title'] as String?,
      creator: json['creator'] as int?,
      createdAt: DateUtil.fromMillisecondsSinceEpoch(json['createdAt'] as int?),
      rank: json['rank'] as int?,
      updatedAt: DateUtil.fromMillisecondsSinceEpoch(json['updatedAt'] as int?),
      postStatus: json['postStatus'] as bool?,
      coverImg: json['coverImg'] as String?,
      author: json['author'] as String?,
      firstChapterId: json['firstChapterId'] as int?,
      newUpId: json['newUpId'] as int?,
      newUpTime: DateUtil.fromMillisecondsSinceEpoch(json['newUpTime'] as int?),
      newUpTitle: json['newUpTitle'] as String?,
      newUpContent: json['newUpContent'] as String?,
      recommend: json['recommend'] as bool?,
      pBg: json['pBg'] as String?,
      mBg: json['mBg'] as String?,
      originalTitle: json['originalTitle'] as String?,
      originalUrl: json['originalUrl'] as String?,
      status: json['status'] as bool?,
      original: json['original'] as bool?,
      styleId: json['styleId'] as int?,
      lvLimit: json['lvLimit'] as int?,
      readLevelLimit: json['readLevelLimit'] as bool?,
      lvLimitHide: json['lvLimitHide'] as int?,
      brief: json['brief'] as String?,
      commentCount: json['commentCount'] as int?,
      thumbUpCount: json['thumbUpCount'] as int?,
      collectionCount: json['collectionCount'] as int?,
      wordsCount: json['wordsCount'] as int?,
      chapterCount: json['chapterCount'] as int?,
      collected: json['collected'] as bool?,
      forumId: json['forumId'] as int?,
      translatorList: (json['translatorList'] as List<dynamic>?)
          ?.map((e) => User.fromJson(e as Map<String, dynamic>))
          .toList(),
      tagList: (json['tagList'] as List<dynamic>?)
          ?.map((e) => Tag.fromJson(e as Map<String, dynamic>))
          .toList(),
      commentList: (json['commentList'] as List<dynamic>?)
          ?.map((e) => NovelComment.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$NovelToJson(Novel instance) => <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'creator': instance.creator,
      'createdAt': DateUtil.toMillisecondsSinceEpoch(instance.createdAt),
      'rank': instance.rank,
      'updatedAt': DateUtil.toMillisecondsSinceEpoch(instance.updatedAt),
      'postStatus': instance.postStatus,
      'coverImg': instance.coverImg,
      'author': instance.author,
      'firstChapterId': instance.firstChapterId,
      'newUpId': instance.newUpId,
      'newUpTime': DateUtil.toMillisecondsSinceEpoch(instance.newUpTime),
      'newUpTitle': instance.newUpTitle,
      'newUpContent': instance.newUpContent,
      'recommend': instance.recommend,
      'pBg': instance.pBg,
      'mBg': instance.mBg,
      'originalTitle': instance.originalTitle,
      'originalUrl': instance.originalUrl,
      'status': instance.status,
      'original': instance.original,
      'styleId': instance.styleId,
      'lvLimit': instance.lvLimit,
      'readLevelLimit': instance.readLevelLimit,
      'lvLimitHide': instance.lvLimitHide,
      'brief': instance.brief,
      'commentCount': instance.commentCount,
      'thumbUpCount': instance.thumbUpCount,
      'collectionCount': instance.collectionCount,
      'wordsCount': instance.wordsCount,
      'chapterCount': instance.chapterCount,
      'collected': instance.collected,
      'forumId': instance.forumId,
      'translatorList':
          instance.translatorList?.map((e) => e.toJson()).toList(),
      'tagList': instance.tagList?.map((e) => e.toJson()).toList(),
      'commentList': instance.commentList?.map((e) => e.toJson()).toList(),
    };
