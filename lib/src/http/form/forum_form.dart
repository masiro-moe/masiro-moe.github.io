import '../../enum/forum_enum.dart';
import 'common_form.dart';

/// 论坛分页请求表单
class ForumPageForm extends PageForm {
  String? name;
  ForumType? type;

  ForumPageForm({
    this.name,
    this.type,
    super.pageNum,
    super.pageSize,
  });

  @override
  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'type': type?.code.toString(),
      ...super.toJson(),
    };
  }
}

/// 论坛帖子分页请求表单
class ForumPostPageForm extends PageForm {
  /// 用户ID
  final int? userId;

  /// 论坛ID
  final int? forumId;

  /// 是否精选
  final bool? refinement;

  ForumPostPageForm({
    this.userId,
    this.forumId,
    this.refinement,
    super.pageNum,
    super.pageSize,
  });

  @override
  Map<String, dynamic> toJson() {
    return {
      'userId': userId,
      'forumId': forumId,
      'refinement': refinement,
      ...super.toJson(),
    };
  }
}

/// 论坛帖子评论分页请求表单
class ForumPostCommentPageForm extends PageForm {
  final int? forumPostId;
  final int? parentId;

  ForumPostCommentPageForm({
    this.forumPostId,
    this.parentId,
    super.pageNum,
    super.pageSize,
  });

  @override
  Map<String, dynamic> toJson() {
    return {
      'forumPostId': forumPostId,
      'parentId': parentId,
      ...super.toJson(),
    };
  }
}
