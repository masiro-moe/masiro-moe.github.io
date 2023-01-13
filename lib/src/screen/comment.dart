import 'package:flutter/material.dart';
import 'package:flutter_html/flutter_html.dart';

import '../../generated/l10n.dart';
import '../http/model/common_comment.dart';
import 'user.dart';

/// 回复列表项
class CommentReplyListItem extends StatelessWidget {
  final int commentUserId;
  final CommonComment comment;
  final GestureTapCallback? onTap;

  const CommentReplyListItem(this.commentUserId, this.comment,
      {Key? key, this.onTap})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    var user = comment.user;
    Widget replyUserInfo;
    if (comment.replyUser?.id == null ||
        commentUserId == comment.replyUser?.id) {
      replyUserInfo = Text(user?.name ?? '');
    } else {
      replyUserInfo = Text(S
          .of(context)
          .userReplyToTarget(user?.name ?? '', comment.replyUser?.name ?? ''));
    }

    return GestureDetector(
      onTap: onTap,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const SizedBox(
                width: 18,
              ),
              UserAvatar.small(user?.avatar),
              const SizedBox(
                width: 10,
              ),
              replyUserInfo
            ],
          ),
          Padding(
            padding: const EdgeInsets.only(left: 10, right: 10),
            child: Html(data: comment.content ?? ''),
          ),
          // Text(DateUtil.defaultFormat(comment.createdAt)),
          const SizedBox(height: 15),
          Divider(
              thickness: 2.0,
              indent: 10.0,
              endIndent: 10.0,
              color: Colors.grey[200]),
        ],
      ),
    );
  }
}
