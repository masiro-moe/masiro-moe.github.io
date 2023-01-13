import 'common_form.dart';

class NovelPageForm extends PageForm {
  String? title;
  bool? original;
  List<int>? includeTags;
  List<int>? excludeTags;

  NovelPageForm({
    this.original,
    this.includeTags,
    this.excludeTags,
    super.pageNum,
    super.pageSize,
  });

  @override
  Map<String, dynamic> toJson() {
    return {
      'title': title,
      'original': original,
      'includeTags': includeTags,
      'excludeTags': excludeTags,
      ...super.toJson(),
    };
  }
}

class NovelCommentPageForm extends PageForm {
  final int novelId;
  int? topId;

  NovelCommentPageForm({
    required this.novelId,
    this.topId,
    super.pageNum,
    super.pageSize,
  });

  @override
  Map<String, dynamic> toJson() {
    return {
      "novelId": novelId,
      "topId": topId,
      ...super.toJson(),
    };
  }
}
