import '../../http/api/base_api.dart';
import '../../http/form/common_form.dart';
import '../model/tag.dart';

class TagApi {
  static final _list = toUri('/tag/list');
  static final _tree = toUri('/tag/tree');

  TagApi._();

  static final TagApi _instance = TagApi._();

  factory TagApi() => _instance;

  /// 列表
  Future<List<Tag>> list() {
    return _list.post(EmptyForm()).list(Tag.fromJson);
  }

  /// 树列表
  Future<List<Tag>> tree() {
    return _tree.post(EmptyForm()).list(Tag.fromJson);
  }
}
