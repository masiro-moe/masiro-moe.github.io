import 'package:json_annotation/json_annotation.dart';

import '../../utils/common_util.dart';

part 'novel_chapter.g.dart';

@JsonSerializable()
class NovelChapter {
  final int? id;
  final String? title;
  final int? parentId;
  final int? order;
  final bool? status;
  final bool? paid;
  @JsonKey(
    fromJson: DateUtil.fromMillisecondsSinceEpoch,
    toJson: DateUtil.toMillisecondsSinceEpoch,
  )
  final DateTime? updatedAt;
  final List<NovelChapter>? chapterList;

  NovelChapter({
    this.id,
    this.title,
    this.parentId,
    this.order,
    this.status,
    this.paid,
    this.updatedAt,
    this.chapterList,
  });

  factory NovelChapter.fromJson(Map<String, dynamic> json) =>
      _$NovelChapterFromJson(json);

  Map<String, dynamic> toJson() => _$NovelChapterToJson(this);
}
