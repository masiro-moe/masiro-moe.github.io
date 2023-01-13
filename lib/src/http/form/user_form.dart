import '../../enum/comment_enum.dart';
import 'base_form.dart';
import 'common_form.dart';

/// 登陆表单
class UserLoginForm implements BaseForm {
  final String username;
  final String password;

  UserLoginForm({required this.username, required this.password});

  @override
  Map<String, dynamic> toJson() {
    return {
      "username": username,
      "password": password,
    };
  }
}

class UserPageForm extends PageForm {
  final int userId;
  final CollectionType collectionType;

  UserPageForm(
      {required this.userId,
      required this.collectionType,
      super.pageNum,
      super.pageSize});

  @override
  Map<String, dynamic> toJson() {
    return {
      "userId": userId,
      "collectionType": collectionType.code,
      ...super.toJson()
    };
  }
}

class UserCollectionPageForm extends PageForm {
  int? userId;
  int? collectionObjId;
  final CollectionType collectionType;

  UserCollectionPageForm({
    this.userId,
    this.collectionObjId,
    required this.collectionType,
    super.pageNum,
    super.pageSize,
  });

  @override
  Map<String, dynamic> toJson() {
    return {
      "userId": userId,
      "collectionObjId": collectionObjId,
      "collectionType": collectionType.code,
      ...super.toJson()
    };
  }
}
