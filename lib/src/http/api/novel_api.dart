import '../../model/common_model.dart';
import '../form/common_form.dart';
import '../form/novel_form.dart';
import '../model/novel.dart';
import '../model/novel_chapter.dart';
import '../model/novel_comment.dart';
import '../model/novel_content.dart';
import 'base_api.dart';

/// 小说相关API
class NovelApi {
  static final _index = toUri('/novel/index');
  static final _page = toUri('/novel/page');
  static final _detail = toUri('/novel/detail');
  static final _chapterList = toUri('/novel/chapter/list');
  static final _content = toUri('/novel/content');
  static final _contentPay = toUri('/novel/content/pay');
  static final _collection = toUri('/novel/collection');
  static final _collectionPage = toUri('/novel/collection/page');

  NovelApi._();

  static final NovelApi _instance = NovelApi._();

  factory NovelApi() => _instance;

  /// 首页
  Future<List<Novel>> index(PageForm form) {
    return _index.post(EmptyForm()).list(Novel.fromJson);
  }

  /// 分页
  Future<PageGenerics<Novel>> page(NovelPageForm form) {
    return _page.post(form).map(NovelPage.fromJson);
  }

  /// 详情
  Future<Novel> detail(IdForm form) {
    return _detail.post(form).map(Novel.fromJson);
  }

  /// 章节目录
  Future<List<NovelChapter>> chapterList(IdForm form) {
    return _chapterList.post(form).list(NovelChapter.fromJson);
  }

  /// 正文
  Future<NovelContent> content(IdForm form) {
    return _content.post(form).map(NovelContent.fromJson);
  }

  /// 正文订阅
  Future<void> contentPay(IdForm form) {
    return _contentPay.post(form).raw();
  }

  /// 收藏分页
  Future<PageGenerics<Novel>> collectionPage(NovelPageForm form) {
    return _collectionPage.post(form).map(NovelPage.fromJson);
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

/// 小说评论相关API
class NovelCommentApi {
  static final _page = toUri('/novel/comment/page');
  static final _detail = toUri('/novel/comment/detail');
  static final _replyPage = toUri('/novel/comment/reply/page');

  NovelCommentApi._();

  static final NovelCommentApi _instance = NovelCommentApi._();

  factory NovelCommentApi() => _instance;

  /// 分页
  Future<PageGenerics<NovelComment>> page(NovelCommentPageForm form) {
    return _page.post(form).map(NovelCommentPage.fromJson);
  }

  /// 详情
  Future<NovelComment> detail(IdForm form) {
    return _detail.post(form).map(NovelComment.fromJson);
  }

  /// 回复分页
  Future<PageGenerics<NovelComment>> replyPage(NovelCommentPageForm form) {
    return _replyPage.post(form).map(NovelCommentPage.fromJson);
  }
}
