import 'package:json_annotation/json_annotation.dart';

import '../../model/common_model.dart';
import '../../utils/common_util.dart';
import 'common_comment.dart';
import 'user.dart';

part 'forum_post_comment.g.dart';

@JsonSerializable()
class ForumPostComment extends CommonComment {
  final int? id;
  final int? forumId;
  final int? postId;
  final int? userId;
  final int? parentId;

  // final CommentType? type;
  final int? topId;
  final int? replyUserId;
  final int? floor;
  final int? thumbUpCount;
  final bool? thumbUp;
  final bool? hotComment;
  final bool? hotCommentPoint;
  final int? getCoin;

  ForumPostComment({
    this.id,
    this.forumId,
    this.postId,
    this.userId,
    this.parentId,
    // this.type,
    this.topId,
    this.replyUserId,
    this.floor,
    this.thumbUpCount,
    this.thumbUp,
    this.hotComment,
    this.hotCommentPoint,
    this.getCoin,
    super.user,
    super.replyUser,
    super.createdAt,
    super.content,
  });

  factory ForumPostComment.fromJson(Map<String, dynamic> json) =>
      _$ForumPostCommentFromJson(json);

  Map<String, dynamic> toJson() => _$ForumPostCommentToJson(this);
}

/// 分页
class ForumPostCommentPage extends PageGenerics<ForumPostComment> {
  static PageGenerics<ForumPostComment> fromJson(Map<String, dynamic> json) =>
      PageGenerics.fromPageJson(json, (e) => ForumPostComment.fromJson(e));

  Map<String, dynamic> toJson() => toPageJson((e) => e.toJson());
}
