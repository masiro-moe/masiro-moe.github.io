import 'package:json_annotation/json_annotation.dart';

@JsonEnum(valueField: 'code')
enum UserFriendsType {
  /// 关注
  follow('0'),

  /// 粉丝
  fans('1'),
  ;

  const UserFriendsType(this.code);

  final String code;

  static UserFriendsType parse(String? code) {
    return UserFriendsType.values.firstWhere((e) => e.code == code);
  }
}
