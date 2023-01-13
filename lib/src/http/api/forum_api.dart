import '../../model/common_model.dart';
import '../form/common_form.dart';
import '../form/forum_form.dart';
import '../model/forum.dart';
import '../model/forum_post.dart';
import '../model/forum_post_comment.dart';
import 'base_api.dart';

/// 论坛相关API
class ForumApi {
  static final _page = toUri('/forum/page');
  static final _collection = toUri('/forum/collection');
  static final _collectionPage = toUri('/forum/collection/page');
  static final _detail = toUri('/forum/detail');

  ForumApi._();

  static final ForumApi _instance = ForumApi._();

  factory ForumApi() => _instance;

  /// 分页
  Future<PageGenerics<Forum>> page(ForumPageForm form) {
    return _page.post(form).map(ForumPage.fromJson);
  }

  /// 收藏分页
  Future<PageGenerics<Forum>> collectionPage(ForumPageForm form) {
    return _collectionPage.post(form).map(ForumPage.fromJson);
  }

  /// 详情
  Future<Forum> detail(IdForm form) {
    return _detail.post(form).map(Forum.fromJson);
  }

  /// 收藏
  Future<void> collection(IdForm form) {
    return _collection.post(form).raw();
  }

  /// 收藏移除
  Future<void> collectionRemove(IdForm form) {
    return _collection.delete(form).raw();
  }
}

/// 论坛帖子相关API
class ForumPostApi {
  static final _page = toUri('/forum/post/page');
  static final _collectionPage = toUri('/forum/post/collection/page');
  static final _detail = toUri('/forum/post/detail');
  static final _thumbUp = toUri('/forum/post/thumbUp');

  ForumPostApi._();

  static final ForumPostApi _instance = ForumPostApi._();

  factory ForumPostApi() => _instance;

  /// 分页
  Future<PageGenerics<ForumPost>> page(ForumPostPageForm form) {
    return _page.post(form).map(ForumPostPage.fromJson);
  }

  /// 收藏分页
  Future<PageGenerics<ForumPost>> collectionPage(ForumPostPageForm form) {
    return _collectionPage.post(form).map(ForumPostPage.fromJson);
  }

  /// 详情
  Future<ForumPost> detail(IdForm form) {
    return _detail.post(form).map(ForumPost.fromJson);
  }

  /// 点赞
  Future<void> thumbUp(IdForm form) {
    return _thumbUp.post(form).raw();
  }

  /// 点赞取消
  Future<void> thumbUpCancel(IdForm form) {
    return _thumbUp.delete(form).raw();
  }
}

/// 论坛帖子评论API
class ForumPostCommentApi {
  static final _page = toUri('/forum/post/comment/page');
  static final _detail = toUri('/forum/post/comment/detail');
  static final _thumbUp = toUri('/forum/post/comment/thumbUp');

  ForumPostCommentApi._();

  static final ForumPostCommentApi _instance = ForumPostCommentApi._();

  factory ForumPostCommentApi() => _instance;

  /// 详情
  Future<ForumPostComment> detail(IdForm form) {
    return _detail.post(form).map(ForumPostComment.fromJson);
  }

  /// 分页
  Future<PageGenerics<ForumPostComment>> page(ForumPostCommentPageForm form) {
    return _page.post(form).map(ForumPostCommentPage.fromJson);
  }

  /// 点赞
  Future<void> thumbUp(IdForm form) {
    return _thumbUp.post(form).raw();
  }

  /// 点赞取消
  Future<void> thumbUpCancel(IdForm form) {
    return _thumbUp.delete(form).raw();
  }
}
