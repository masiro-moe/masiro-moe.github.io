import 'package:json_annotation/json_annotation.dart';

import '../../utils/common_util.dart';

part 'carousel.g.dart';

@JsonSerializable()
class Carousel {
  final int? id;
  final String? title;
  final String? brief;
  final String? pic;
  final String? mpic;
  final String? url;
  final bool? open;
  final int? rank;
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

  Carousel({
    this.id,
    this.title,
    this.brief,
    this.pic,
    this.mpic,
    this.url,
    this.open,
    this.rank,
    this.creator,
    this.createdAt,
    this.updatedAt,
  });

  factory Carousel.fromJson(Map<String, dynamic> json) =>
      _$CarouselFromJson(json);

  Map<String, dynamic> toJson() => _$CarouselToJson(this);
}
