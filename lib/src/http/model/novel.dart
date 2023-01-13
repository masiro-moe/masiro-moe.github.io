import 'package:json_annotation/json_annotation.dart';

import '../../model/common_model.dart';
import '../../utils/common_util.dart';
import 'novel_comment.dart';
import 'tag.dart';
import 'user.dart';

part 'novel.g.dart';

@JsonSerializable()
class Novel {
  final int? id;
  final String? title;
  final int? creator;
  @JsonKey(
    fromJson: DateUtil.fromMillisecondsSinceEpoch,
    toJson: DateUtil.toMillisecondsSinceEpoch,
  )
  final DateTime? createdAt;
  final int? rank;
  @JsonKey(
    fromJson: DateUtil.fromMillisecondsSinceEpoch,
    toJson: DateUtil.toMillisecondsSinceEpoch,
  )
  final DateTime? updatedAt;
  final bool? postStatus;
  final String? coverImg;
  final String? author;
  final int? firstChapterId;
  final int? newUpId;
  @JsonKey(
    fromJson: DateUtil.fromMillisecondsSinceEpoch,
    toJson: DateUtil.toMillisecondsSinceEpoch,
  )
  final DateTime? newUpTime;
  final String? newUpTitle;
  final String? newUpContent;
  final bool? recommend;
  final String? pBg;
  final String? mBg;
  final String? originalTitle;
  final String? originalUrl;
  final bool? status;
  final bool? original;
  final int? styleId;
  final int? lvLimit;
  final bool? readLevelLimit;
  final int? lvLimitHide;
  final String? brief;
  final int? commentCount;
  final int? thumbUpCount;
  final int? collectionCount;
  final int? wordsCount;
  final int? chapterCount;
  final bool? collected;
  final int? forumId;
  final List<User>? translatorList;
  final List<Tag>? tagList;
  final List<NovelComment>? commentList;

  Novel({
    this.id,
    this.title,
    this.creator,
    this.createdAt,
    this.rank,
    this.updatedAt,
    this.postStatus,
    this.coverImg,
    this.author,
    this.firstChapterId,
    this.newUpId,
    this.newUpTime,
    this.newUpTitle,
    this.newUpContent,
    this.recommend,
    this.pBg,
    this.mBg,
    this.originalTitle,
    this.originalUrl,
    this.status,
    this.original,
    this.styleId,
    this.lvLimit,
    this.readLevelLimit,
    this.lvLimitHide,
    this.brief,
    this.commentCount,
    this.thumbUpCount,
    this.collectionCount,
    this.wordsCount,
    this.chapterCount,
    this.collected,
    this.forumId,
    this.translatorList,
    this.tagList,
    this.commentList,
  });

  factory Novel.fromJson(Map<String, dynamic> json) => _$NovelFromJson(json);

  Map<String, dynamic> toJson() => _$NovelToJson(this);
}

/// 小说分页
class NovelPage extends PageGenerics<Novel> {
  static PageGenerics<Novel> fromJson(Map<String, dynamic> json) =>
      PageGenerics.fromPageJson(json, (e) => Novel.fromJson(e));

  Map<String, dynamic> toJson() => toPageJson((e) => e.toJson());
}
