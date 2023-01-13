import 'package:json_annotation/json_annotation.dart';

import '../../utils/common_util.dart';
import 'user.dart';

/// 公共评论
class CommonComment {
  final User? user;
  final User? replyUser;
  @JsonKey(
    fromJson: DateUtil.fromMillisecondsSinceEpoch,
    toJson: DateUtil.toMillisecondsSinceEpoch,
  )
  final DateTime? createdAt;
  final String? content;

  CommonComment({
    this.user,
    this.replyUser,
    this.createdAt,
    this.content,
  });
}
