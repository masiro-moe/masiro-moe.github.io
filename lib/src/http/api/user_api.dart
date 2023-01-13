import '../../http/api/base_api.dart';
import '../../http/form/common_form.dart';
import '../../http/form/user_form.dart';
import '../../model/common_model.dart';
import '../model/login_result.dart';
import '../model/user.dart';

class UserApi {
  static final _login = toUri('/user/login');
  static final _logout = toUri('/user/logout');
  static final _signIn = toUri('/dailyTask/signIn');
  static final _center = toUri('/user/center');
  static final _detail = toUri('/user/detail');
  static final _page = toUri('/user/page');
  static final _follow = toUri('/user/follow');
  static final _followPage = toUri('/user/follow/page');
  static final _fansPage = toUri('/user/fans/page');

  UserApi._();

  static final UserApi _instance = UserApi._();

  factory UserApi() => _instance;

  /// 登录
  Future<LoginResult> login(UserLoginForm form) {
    return _login.post(form).map(LoginResult.fromJson);
  }

  /// 登出
  Future<void> logout() {
    return _logout.delete(EmptyForm()).raw();
  }

  /// 中心
  Future<User> center() {
    return _center.post(EmptyForm()).map(User.fromJson);
  }

  /// 签到
  Future<void> checkIn() {
    return _signIn.post(EmptyForm()).raw();
  }

  /// 资料
  Future<User> detail(IdForm form) {
    return _detail.post(form).map(User.fromJson);
  }

  /// 关注
  Future<PageGenerics<User>> page(UserPageForm form) {
    return _page.post(form).map(UserPage.fromJson);
  }

  /// 关注
  Future<void> follow(IdForm form) {
    return _follow.post(form).raw();
  }

  /// 关注移除
  Future<void> followRemove(IdForm form) {
    return _follow.post(form).raw();
  }

  /// 关注列表
  Future<PageGenerics<User>> followPage(UserCollectionPageForm form) {
    return _followPage.post(form).map(UserPage.fromJson);
  }

  /// 粉丝列表
  Future<PageGenerics<User>> fansPage(UserCollectionPageForm form) {
    return _fansPage.post(form).map(UserPage.fromJson);
  }
}
