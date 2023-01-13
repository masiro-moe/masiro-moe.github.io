import 'package:json_annotation/json_annotation.dart';

import '../../enum/forum_enum.dart';
import '../../model/common_model.dart';
import '../../utils/common_util.dart';
import '../model/user.dart';

part 'forum_post.g.dart';

@JsonSerializable()
class ForumPost {
  final int? id;
  final int? forumId;
  final int? userId;
  final User? user;
  final ForumPostType? type;
  final String? typeName;
  final String? title;
  @JsonKey(
    fromJson: DateUtil.fromMillisecondsSinceEpoch,
    toJson: DateUtil.toMillisecondsSinceEpoch,
  )
  final DateTime? createdAt;
  @JsonKey(
    fromJson: DateUtil.fromMillisecondsSinceEpoch,
    toJson: DateUtil.toMillisecondsSinceEpoch,
  )
  final DateTime? updatedAt;
  final int? viewCount;
  final bool? refinement;
  final int? topPost;
  final int? limitLv;
  final int? cost;
  final bool? needPay;
  final bool? thumbUp;
  final int? thumbUpCount;
  final bool? hotCommentPoint;
  final int? hb;
  final int? splitNumber;
  final int? rate;
  final int? lastNumber;
  final int? perCoin;
  final bool? closeNotice;
  final String? content;
  final int? commentCount;

  ForumPost({
    this.id,
    this.forumId,
    this.userId,
    this.user,
    this.type,
    this.typeName,
    this.title,
    this.createdAt,
    this.updatedAt,
    this.viewCount,
    this.refinement,
    this.topPost,
    this.limitLv,
    this.cost,
    this.needPay,
    this.thumbUp,
    this.thumbUpCount,
    this.hotCommentPoint,
    this.hb,
    this.splitNumber,
    this.rate,
    this.lastNumber,
    this.perCoin,
    this.closeNotice,
    this.content,
    this.commentCount,
  });

  factory ForumPost.fromJson(Map<String, dynamic> json) =>
      _$ForumPostFromJson(json);

  Map<String, dynamic> toJson() => _$ForumPostToJson(this);
}

/// 分页
class ForumPostPage extends PageGenerics<ForumPost> {
  static PageGenerics<ForumPost> fromJson(Map<String, dynamic> json) =>
      PageGenerics.fromPageJson(json, (e) => ForumPost.fromJson(e));

  Map<String, dynamic> toJson() => toPageJson((e) => e.toJson());
}
