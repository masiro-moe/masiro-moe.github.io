import 'package:json_annotation/json_annotation.dart';

part 'index.g.dart';

@JsonSerializable()
class IndexAnnouncement {
  final int? id;
  final String? createdAt;
  final String? updatedAt;
  final String? title;
  final String? brief;
  final String? force;
  final String? creator;
  final String? open;
  final String? rank;
  final String? content;

  IndexAnnouncement({
    this.id,
    this.createdAt,
    this.updatedAt,
    this.title,
    this.brief,
    this.force,
    this.creator,
    this.open,
    this.rank,
    this.content,
  });

  factory IndexAnnouncement.fromJson(Map<String, dynamic> json) =>
      _$IndexAnnouncementFromJson(json);

  Map<String, dynamic> toJson() => _$IndexAnnouncementToJson(this);
}

@JsonSerializable()
class IndexBanner {
  final int? id;
  final String? pic;
  final String? mpic;
  final String? url;

  IndexBanner({
    this.id,
    this.pic,
    this.mpic,
    this.url,
  });

  factory IndexBanner.fromJson(Map<String, dynamic> json) =>
      _$IndexBannerFromJson(json);

  Map<String, dynamic> toJson() => _$IndexBannerToJson(this);
}

@JsonSerializable()
class IndexNovel {
  final int? id;
  final String? title;
  final String? coverImg;
  final int? newUpTime;
  final bool? readLevelLimit;

  IndexNovel({
    this.id,
    this.title,
    this.coverImg,
    this.newUpTime,
    this.readLevelLimit,
  });

  factory IndexNovel.fromJson(Map<String, dynamic> json) =>
      _$IndexNovelFromJson(json);

  Map<String, dynamic> toJson() => _$IndexNovelToJson(this);
}
