import '../../http/api/base_api.dart';
import '../../http/form/common_form.dart';
import '../../model/common_model.dart';
import '../model/announcement.dart';

/// 公告相关API
class AnnouncementApi {
  static final _detail = toUri('/announcement/detail');
  static final _page = toUri('/announcement/page');

  AnnouncementApi._();

  static final AnnouncementApi _instance = AnnouncementApi._();

  factory AnnouncementApi() => _instance;

  /// 详情
  Future<Announcement> detail(IdForm form) {
    return _detail.post(form).map(Announcement.fromJson);
  }

  /// 分页
  Future<PageGenerics<Announcement>> page(PageForm form) {
    return _page.post(form).map(AnnouncementPage.fromJson);
  }
}
