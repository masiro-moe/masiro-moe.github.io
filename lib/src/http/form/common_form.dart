import 'base_form.dart';

/// 空表单
class EmptyForm implements BaseForm {
  EmptyForm._();

  static final EmptyForm _instance = EmptyForm._();

  factory EmptyForm() => _instance;

  @override
  Map<String, dynamic> toJson() {
    return {};
  }
}

class IdForm implements BaseForm {
  final int id;

  IdForm({required this.id});

  @override
  Map<String, dynamic> toJson() {
    return {
      'id': id,
    };
  }
}

class PageForm implements BaseForm {
  int pageNum;

  int pageSize;

  PageForm({this.pageNum = 1, this.pageSize = 10});

  @override
  Map<String, dynamic> toJson() {
    return {
      'pageNum': pageNum,
      'pageSize': pageSize,
    };
  }
}
