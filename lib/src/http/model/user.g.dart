// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

User _$UserFromJson(Map<String, dynamic> json) => User(
      id: json['id'] as int?,
      createdAt: DateUtil.fromMillisecondsSinceEpoch(json['createdAt'] as int?),
      updatedAt: DateUtil.fromMillisecondsSinceEpoch(json['updatedAt'] as int?),
      name: json['name'] as String?,
      email: json['email'] as String?,
      emailVerifiedAt: json['emailVerifiedAt'] as int?,
      password: json['password'] as String?,
      rememberToken: json['rememberToken'] as String?,
      mobile: json['mobile'] as String?,
      avatar: json['avatar'] as String?,
      isActive: json['isActive'] as int?,
      confirmationToken: json['confirmationToken'] as String?,
      socialId: json['socialId'] as int?,
      socialType: json['socialType'] as int?,
      username: json['username'] as String?,
      point: json['point'] as int?,
      prestige: json['prestige'] as int?,
      experience: json['experience'] as int?,
      level: json['level'] as int?,
      hasDamnation: json['hasDamnation'] as bool?,
      ninki: json['ninki'] as int?,
      fansCount: json['fansCount'] as int?,
      postCount: json['postCount'] as int?,
      followCount: json['followCount'] as int?,
      follow: json['follow'] as bool?,
      signIn: json['signIn'] as bool?,
    );

Map<String, dynamic> _$UserToJson(User instance) => <String, dynamic>{
      'id': instance.id,
      'createdAt': DateUtil.toMillisecondsSinceEpoch(instance.createdAt),
      'updatedAt': DateUtil.toMillisecondsSinceEpoch(instance.updatedAt),
      'name': instance.name,
      'email': instance.email,
      'emailVerifiedAt': instance.emailVerifiedAt,
      'password': instance.password,
      'rememberToken': instance.rememberToken,
      'mobile': instance.mobile,
      'avatar': instance.avatar,
      'isActive': instance.isActive,
      'confirmationToken': instance.confirmationToken,
      'socialId': instance.socialId,
      'socialType': instance.socialType,
      'username': instance.username,
      'point': instance.point,
      'prestige': instance.prestige,
      'experience': instance.experience,
      'level': instance.level,
      'hasDamnation': instance.hasDamnation,
      'ninki': instance.ninki,
      'fansCount': instance.fansCount,
      'postCount': instance.postCount,
      'followCount': instance.followCount,
      'follow': instance.follow,
      'signIn': instance.signIn,
    };
