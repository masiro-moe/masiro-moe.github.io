import 'package:json_annotation/json_annotation.dart';

import '../../enum/forum_enum.dart';
import '../../model/common_model.dart';
import '../../utils/common_util.dart';
import 'forum_post.dart';

part 'forum.g.dart';

@JsonSerializable()
class Forum {
  final int? id;
  final String? name;
  final int? rank;
  final String? logo;
  final ForumType? type;
  final int? novelId;
  final int? creator;
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
  final String? bgMobile;
  final String? bgPc;
  final int? followCount;
  final bool? followed;
  final int? styleId;
  final String? brief;
  final int? viewCount;
  final int? postCount;
  final List<ForumPost>? topList;

  Forum({
    this.id,
    this.name,
    this.rank,
    this.logo,
    this.type,
    this.novelId,
    this.creator,
    this.createdAt,
    this.updatedAt,
    this.bgMobile,
    this.bgPc,
    this.followCount,
    this.followed,
    this.styleId,
    this.brief,
    this.viewCount,
    this.postCount,
    this.topList,
  });

  factory Forum.fromJson(Map<String, dynamic> json) => _$ForumFromJson(json);

  Map<String, dynamic> toJson() => _$ForumToJson(this);
}

/// 分页
class ForumPage extends PageGenerics<Forum> {
  static PageGenerics<Forum> fromJson(Map<String, dynamic> json) =>
      PageGenerics.fromPageJson(json, (e) => Forum.fromJson(e));

  Map<String, dynamic> toJson() => toPageJson((e) => e.toJson());
}
