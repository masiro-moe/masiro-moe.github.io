import 'package:json_annotation/json_annotation.dart';

import '../../model/common_model.dart';
import '../../utils/common_util.dart';

part 'announcement.g.dart';

@JsonSerializable()
class Announcement {
  final int? id;
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
  final String? title;
  final String? brief;
  final bool? force;
  final int? creator;
  final String? creatorName;
  final bool? open;
  final int? rank;
  final String? content;

  Announcement({
    this.id,
    this.createdAt,
    this.updatedAt,
    this.title,
    this.brief,
    this.force,
    this.creator,
    this.creatorName,
    this.open,
    this.rank,
    this.content,
  });

  factory Announcement.fromJson(Map<String, dynamic> json) =>
      _$AnnouncementFromJson(json);

  Map<String, dynamic> toJson() => _$AnnouncementToJson(this);
}

/// 分页
class AnnouncementPage extends PageGenerics<Announcement> {
  static PageGenerics<Announcement> fromJson(Map<String, dynamic> json) =>
      PageGenerics.fromPageJson(json, (e) => Announcement.fromJson(e));

  Map<String, dynamic> toJson() => toPageJson((e) => e.toJson());
}
