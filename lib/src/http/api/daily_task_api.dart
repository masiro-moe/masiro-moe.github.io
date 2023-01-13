import '../../http/api/base_api.dart';
import '../../http/form/common_form.dart';

class DailyTaskApi {
  static final _signIn = toUri('/dailyTask/signIn');

  /// 签到
  Future<void> signIn() {
    return _signIn.post(EmptyForm()).raw();
  }
}
