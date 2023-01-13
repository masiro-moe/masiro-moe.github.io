import 'package:json_annotation/json_annotation.dart';

import '../../enum/comment_enum.dart';
import '../../model/common_model.dart';
import '../../utils/common_util.dart';
import '../model/user.dart';
import 'common_comment.dart';

part 'novel_comment.g.dart';

@JsonSerializable()
class NovelComment extends CommonComment {
  final int? id;
  final int? novelId;
  final int? userId;
  final int? parentId;
  final int? topId;
  final int? chapterId;
  final CommentType? type;
  final int? floor;
  final int? thumbUpCount;
  final bool? thumbUp;
  final bool? hotComment;
  final bool? hotCommentPoint;
  final int? replyCount;

  NovelComment({
    this.id,
    this.novelId,
    this.userId,
    this.parentId,
    this.topId,
    this.chapterId,
    this.type,
    this.floor,
    this.thumbUpCount,
    this.thumbUp,
    this.hotComment,
    this.hotCommentPoint,
    this.replyCount,
    super.user,
    super.replyUser,
    super.createdAt,
    super.content,
  });

  factory NovelComment.fromJson(Map<String, dynamic> json) =>
      _$NovelCommentFromJson(json);

  Map<String, dynamic> toJson() => _$NovelCommentToJson(this);
}

/// 小说评论分页
class NovelCommentPage extends PageGenerics<NovelComment> {
  static PageGenerics<NovelComment> fromJson(Map<String, dynamic> json) =>
      PageGenerics.fromPageJson(json, (e) => NovelComment.fromJson(e));

  Map<String, dynamic> toJson() => toPageJson((e) => e.toJson());
}
