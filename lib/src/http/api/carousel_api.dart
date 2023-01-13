import '../form/common_form.dart';
import '../model/carousel.dart';
import 'base_api.dart';

/// 轮播图相关API
class CarouselApi {
  static final _list = toUri('/carousel/list');

  CarouselApi._();

  static final CarouselApi _instance = CarouselApi._();

  factory CarouselApi() => _instance;

  /// 关注列表
  Future<List<Carousel>> list(PageForm form) {
    return _list.post(form).list(Carousel.fromJson);
  }
}
