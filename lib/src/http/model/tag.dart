import 'package:json_annotation/json_annotation.dart';

part 'tag.g.dart';

@JsonSerializable()
class Tag {
  final int? id;
  final String? name;
  final int? parentId;
  final List<Tag>? children;

  Tag({
    this.id,
    this.name,
    this.parentId,
    this.children,
  });

  factory Tag.fromJson(Map<String, dynamic> json) => _$TagFromJson(json);

  Map<String, dynamic> toJson() => _$TagToJson(this);
}
