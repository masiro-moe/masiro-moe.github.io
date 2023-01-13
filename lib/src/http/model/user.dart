import 'package:json_annotation/json_annotation.dart';

import '../../model/common_model.dart';
import '../../utils/common_util.dart';

part 'user.g.dart';

@JsonSerializable()
class User {
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
  final String? name;
  final String? email;
  final int? emailVerifiedAt;
  final String? password;
  final String? rememberToken;
  final String? mobile;
  final String? avatar;
  final int? isActive;
  final String? confirmationToken;
  final int? socialId;
  final int? socialType;
  final String? username;
  final int? point;
  final int? prestige;
  final int? experience;
  final int? level;
  final bool? hasDamnation;
  final int? ninki;
  final int? fansCount;
  final int? postCount;
  final int? followCount;
  final bool? follow;
  final bool? signIn;

  User({
    this.id,
    this.createdAt,
    this.updatedAt,
    this.name,
    this.email,
    this.emailVerifiedAt,
    this.password,
    this.rememberToken,
    this.mobile,
    this.avatar,
    this.isActive,
    this.confirmationToken,
    this.socialId,
    this.socialType,
    this.username,
    this.point,
    this.prestige,
    this.experience,
    this.level,
    this.hasDamnation,
    this.ninki,
    this.fansCount,
    this.postCount,
    this.followCount,
    this.follow,
    this.signIn,
  });

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);

  Map<String, dynamic> toJson() => _$UserToJson(this);
}

/// 分页
class UserPage extends PageGenerics<User> {
  static PageGenerics<User> fromJson(Map<String, dynamic> json) =>
      PageGenerics.fromPageJson(json, (e) => User.fromJson(e));

  Map<String, dynamic> toJson() => toPageJson((e) => e.toJson());
}
