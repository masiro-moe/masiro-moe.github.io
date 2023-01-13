import 'package:bot_toast/bot_toast.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:card_swiper/card_swiper.dart';
import 'package:flutter/material.dart';
import 'package:flutter_html/flutter_html.dart';
import 'package:go_router/go_router.dart';
import 'package:sticky_headers/sticky_headers.dart';

import '../../generated/assets.dart';
import '../../generated/l10n.dart';
import '../constant/common_constant.dart';
import '../enum/novel_enum.dart';
import '../http/api/novel_api.dart';
import '../http/api/tag_api.dart';
import '../http/form/common_form.dart';
import '../http/form/novel_form.dart';
import '../http/model/novel.dart';
import '../http/model/novel_chapter.dart';
import '../http/model/novel_comment.dart';
import '../http/model/novel_content.dart';
import '../http/model/tag.dart';
import '../model/common_model.dart';
import '../model/wrapper.dart';
import '../utils/base_types.dart';
import '../utils/common_util.dart';
import '../widget/custom_widget.dart';
import '../widget/mixin_class.dart';
import 'comment.dart';
import 'user.dart';

typedef VoidCallback = void Function();

/// 小说列表界面
class NovelListScreen extends StatefulWidget {
  final bool showToTopButton;
  final bool doubleClickToScreenTop;
  final NovelPageForm form;
  final AsyncValueLoad<NovelPageForm, PageGenerics<Novel>> formLoader;

  const NovelListScreen({
    Key? key,
    required this.form,
    required this.formLoader,
    this.showToTopButton = false,
    this.doubleClickToScreenTop = false,
  }) : super(key: key);

  @override
  State<NovelListScreen> createState() => _NovelListScreenState();
}

class _NovelListScreenState extends State<NovelListScreen>
    with
        AutomaticKeepAliveClientMixin,
        PageDataLoading<Novel, NovelPageForm>,
        ToTopFloatingButton,
        DoubleClickToScreenConsumer,
        _NovelListSearchDialog {
  final scrollController = ScrollController();
  final List<TreeWrapper<Tag, IncludeOrExcludeWrapper<Tag>>> _tags = [];

  @override
  void initState() {
    super.initState();
    addPageRequestListener();
    if (widget.showToTopButton) addToTopListener(context, scrollController);
    _loadData();
  }

  void _loadData() async {
    // 初始化标签
    _tags.addAll((await TagApi().tree())
        .map((e) => TreeWrapper<Tag, IncludeOrExcludeWrapper<Tag>>(e,
            e.children?.map((c) => IncludeOrExcludeWrapper(c)).toList() ?? []))
        .toList());
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    addToScreenListener(widget.doubleClickToScreenTop, context, widget.key,
        () => toTop(scrollController));
  }

  @override
  Widget build(BuildContext context) {
    super.build(context);
    return Scaffold(
      body: RefreshIndicator(
        onRefresh: pageRefresh,
        child: pageListView(
          scrollController: scrollController,
          padding: const EdgeInsets.all(5),
          itemExtent: 240.0,
          itemBuilder: (context, item, index) {
            return GestureDetector(
              onTap: () => context.pushNamed('novel', params: {
                'novelId': '${item.id}',
              }),
              child: NovelListItem(novel: item),
            );
          },
        ),
      ),
      floatingActionButton: Wrap(
        direction: Axis.vertical,
        spacing: 5.0,
        children: [
          toTopFloatingActionButton(scrollController),
          ValueListenableBuilder(
              valueListenable: showSearchNotifier,
              builder: (BuildContext context, bool value, Widget? child) {
                if (!value) SizedBox.fromSize();
                return FloatingActionButton(
                  onPressed: () =>
                      searchDialog(context, widget.form, _tags, pageRefresh),
                  child: const Icon(Icons.search),
                );
              })
        ],
      ),
    );
  }

  @override
  bool get wantKeepAlive => true;

  @override
  Future<PageGenerics<Novel>> loadData(NovelPageForm pageForm) =>
      widget.formLoader(pageForm);

  @override
  NovelPageForm get pageForm => widget.form;
}

/// 小说列表项
class NovelListItem extends StatelessWidget {
  final Novel novel;

  const NovelListItem({Key? key, required this.novel}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
      constraints: const BoxConstraints(maxHeight: 240),
      child: Row(
        children: [
          Flexible(fit: FlexFit.tight, child: _NovelCover(novel.coverImg)),
          Expanded(
              flex: 2,
              child: Padding(
                  padding: const EdgeInsets.only(left: 10.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      Text(novel.title ?? '',
                          maxLines: 2,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(fontSize: 20)),
                      if (novel.author != null)
                        Text(S.of(context).authorFormat(novel.author!)),
                      if (novel.translatorList != null &&
                          novel.translatorList!.isNotEmpty)
                        Text(
                            S.of(context).translatorFormat(novel.translatorList!
                                .map((e) => e.name)
                                .join(' ')),
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis),
                      if (novel.tagList != null && novel.tagList!.isNotEmpty)
                        Text(
                            S.of(context).tagFormat(
                                novel.tagList!.map((e) => e.name).join(' ')),
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis),
                      if (novel.newUpTime != null)
                        Text(S.of(context).updateTimeFormat(
                            DateUtil.defaultFormat(novel.newUpTime)))
                    ],
                  )))
        ],
      ),
    );
  }
}

/// 小说详情页
class NovelDetailPage extends StatefulWidget {
  final int novelId;

  const NovelDetailPage(this.novelId, {Key? key}) : super(key: key);

  @override
  State<NovelDetailPage> createState() => _NovelDetailPageState();
}

// 参考 https://stackoverflow.com/questions/53372276/flutter-how-to-check-if-sliver-appbar-is-expanded-or-collapsed/53380630#53380630
// 参考 https://stackoverflow.com/questions/57911502/how-to-add-one-bottomnavigationbaritem-only
// 参考 https://stackoverflow.com/questions/54512171/horizontal-listview-inside-a-vertical-scrollview-in-flutter
// 参考 https://github.com/TheAnkurPanchani/card_swiper/issues/24
// 参考 https://github.com/TheAnkurPanchani/card_swiper/issues/26#issue-1105856027
class _NovelDetailPageState extends State<NovelDetailPage> with BoolAction {
  Novel? novel;
  PageGenerics<NovelComment> commentPage = PageGenerics();

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  void _loadData() async {
    var novelData = await NovelApi().detail(IdForm(id: widget.novelId));
    var pageGenerics = await NovelCommentApi()
        .page(NovelCommentPageForm(novelId: widget.novelId, pageSize: 5));
    initBoolAction(novelData.collected);
    setState(() {
      novel = novelData;
      commentPage.update(pageGenerics);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: CustomScrollView(
          slivers: [
            appBarBuild(),
            tagsBuild(),
            briefBuild(),
            chapterBuild(),
            commentBuild(),
          ],
        ),
        bottomNavigationBar: bottomButtonBuild());
  }

  SliverAppBar appBarBuild() {
    return SliverAppBar(
      leading: const BackOrHomeButton(),
      flexibleSpace: LayoutBuilder(
          builder: (BuildContext buildContext, BoxConstraints boxConstraints) {
        return FlexibleSpaceBar(
          centerTitle: true,
          title: boxConstraints.biggest.height < (kToolbarHeight + 30)
              ? Text(novel?.title ?? '')
              : null,
          background: Padding(
              padding: const EdgeInsets.only(
                  left: 20, top: 10, right: 20, bottom: 10),
              child: Row(
                children: [
                  CachedNetworkImage(
                    imageUrl: System.withDomain(novel?.coverImg),
                    // width: 120,
                    // height: 164,
                    fit: BoxFit.cover,
                    placeholder: (context, url) =>
                        Image.asset(Assets.novelCoverDefault),
                    errorWidget: (context, url, error) =>
                        Image.asset(Assets.novelCoverDefault),
                  ),
                  Expanded(
                    child: Padding(
                        padding: const EdgeInsets.only(left: 20),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.spaceAround,
                          children: [
                            Text(
                              novel?.title ?? '',
                              style: const TextStyle(fontSize: 20),
                            ),
                            if (novel?.author != null)
                              Text(S.of(context).authorFormat(novel!.author!)),
                            if (novel?.translatorList != null &&
                                (novel?.translatorList?.isNotEmpty ?? false))
                              Text(
                                  S.of(context).translatorFormat(novel!
                                      .translatorList!
                                      .map((e) => e.name)
                                      .join(' ')),
                                  maxLines: 2,
                                  overflow: TextOverflow.ellipsis),
                          ],
                        )),
                  ),
                ],
              )),
        );
      }),
      expandedHeight: 250.0,
      floating: false,
      pinned: true,
      snap: false,
    );
  }

  SliverToBoxAdapter tagsBuild() {
    return SliverToBoxAdapter(child: Builder(builder: (_) {
      if (novel?.tagList == null) {
        return const SizedBox.shrink();
      }
      return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            const SizedBox(
              height: 10,
            ),
            SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                    children: novel!.tagList!.map((e) {
                  return Container(
                    margin: const EdgeInsets.only(left: 5.0, right: 5.0),
                    padding: const EdgeInsets.all(5.0),
                    decoration: ShapeDecoration(
                      color: Colors.white,
                      shape: RoundedRectangleBorder(
                          side:
                              BorderSide(color: Theme.of(context).primaryColor),
                          borderRadius:
                              const BorderRadius.all(Radius.circular(10))),
                    ),
                    child: Text(e.name ?? '', textAlign: TextAlign.center),
                  );
                }).toList()))
          ]);
    }));
  }

  SliverToBoxAdapter briefBuild() {
    return SliverToBoxAdapter(
      child: Card(
          child:
              Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Padding(
            padding: const EdgeInsets.all(10),
            child: Html(data: novel?.brief?.replaceAll('\n', '<br>') ?? ''))
      ])),
    );
  }

  SliverToBoxAdapter chapterBuild() {
    return SliverToBoxAdapter(
      child: GestureDetector(
          onTap: () => context
              .pushNamed('novelChapter', params: {'novelId': '${novel?.id}'}),
          child: Card(
            child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Padding(
                      padding: const EdgeInsets.all(10),
                      child: Text(
                        S.of(context).catalog,
                        style: const TextStyle(
                            fontSize: 20.0, fontWeight: FontWeight.bold),
                      )),
                  Row(children: [
                    Text(
                        '${novel?.newUpTitle ?? ''}\n${DateUtil.defaultFormat(novel?.newUpTime)}',
                        textAlign: TextAlign.end),
                    const Icon(Icons.navigate_next_rounded)
                  ]),
                ]),
          )),
    );
  }

  SliverToBoxAdapter commentBuild() {
    var size = MediaQuery.of(context).size;
    return SliverToBoxAdapter(
      child: GestureDetector(
        onTap: () => context.pushNamed('novelCommentPage',
            params: {'novelId': '${widget.novelId}'}),
        child: Card(
          child: Column(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Padding(
                      padding: const EdgeInsets.all(10),
                      child: Text(
                        S.of(context).commentsSection,
                        style: const TextStyle(
                            fontSize: 20.0, fontWeight: FontWeight.bold),
                      )),
                  // SizedBox.expand(),
                  const Icon(Icons.navigate_next_rounded),
                ],
              ),
              ConstrainedBox(
                constraints: BoxConstraints.loose(Size(size.width - 20, 270.0)),
                child: commentPage.list.isEmpty
                    ? const Center(child: CircularProgressIndicator())
                    : Swiper(
                        onTap: (index) => context
                            .pushNamed('novelCommentDetail', params: {
                          'novelId': '${widget.novelId}'
                        }, queryParams: {
                          'novelCommentId': '${commentPage.list[index].id}'
                        }),
                        itemBuilder: (_, int index) {
                          var comment = commentPage.list[index];
                          return Container(
                              padding: const EdgeInsets.all(10),
                              decoration: BoxDecoration(
                                  color: Colors.grey[200]!,
                                  borderRadius: BorderRadius.circular(10)),
                              margin: const EdgeInsets.only(
                                  left: 5, right: 5, bottom: 5),
                              child: Column(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Expanded(
                                      child: Html(data: comment.content ?? '')),
                                  const SizedBox(
                                    height: 15,
                                  ),
                                  Row(
                                    children: [
                                      UserAvatar.small(comment.user?.avatar),
                                      const SizedBox(
                                        width: 10,
                                      ),
                                      Text(comment.user?.name ?? ''),
                                    ],
                                  )
                                ],
                              ));
                        },
                        itemCount: commentPage.list.length,
                        pagination: const SwiperPagination(
                            alignment: Alignment.bottomRight),
                      ),
              )
            ],
          ),
        ),
      ),
    );
  }

  Container bottomButtonBuild() {
    return Container(
        height: 65,
        decoration: const BoxDecoration(
            border: Border(top: BorderSide(width: 1, color: Colors.black38))),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            GestureDetector(
              onTap: () {
                if (novel?.forumId != null) {
                  context.pushNamed('forum',
                      params: {'forumId': '${novel?.forumId}'});
                }
              },
              child: Center(
                  child: Text(S.of(context).forum,
                      style: novel?.forumId == null
                          ? const TextStyle(color: Colors.grey)
                          : const TextStyle())),
            ),
            GestureDetector(
                onTap: voidReversalBool,
                child:
                    Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                  boolValBuild((_, val, __) {
                    return val
                        ? const Icon(Icons.playlist_add_check_rounded,
                            color: Colors.grey)
                        : const Icon(Icons.playlist_add_rounded);
                  }),
                  const SizedBox(width: 5),
                  boolValBuild((_, val, __) {
                    return Text(
                      S.of(context).collect,
                      style: val
                          ? const TextStyle(color: Colors.grey)
                          : const TextStyle(),
                    );
                  })
                ])),
            OutlinedButton(
                onPressed: () => context.pushNamed('novelContent',
                    params: {'novelId': '${novel?.id}'},
                    queryParams: {'chapterId': '${novel?.firstChapterId}'}),
                style: ButtonStyle(
                  //圆角
                  shape: MaterialStateProperty.all(RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20))),
                  padding: MaterialStateProperty.all(const EdgeInsets.only(
                      left: 25, right: 25, top: 20, bottom: 20)),
                ),
                child: Text(S.of(context).startToRead)),
          ],
        ));
  }

  @override
  Future<void> onFalseVal() =>
      NovelApi().collection(IdForm(id: widget.novelId));

  @override
  Future<void> onTrueVal() =>
      NovelApi().collectionRemove(IdForm(id: widget.novelId));
}

/// 小说章节页
class NovelChapterPage extends StatefulWidget {
  final int novelId;

  const NovelChapterPage(this.novelId, {Key? key}) : super(key: key);

  @override
  State<NovelChapterPage> createState() => _NovelChapterPageState();
}

class _NovelChapterPageState extends State<NovelChapterPage> {
  List<NovelChapter> list = [];

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  void _loadData() async {
    var chapterList = await NovelApi().chapterList(IdForm(id: widget.novelId));
    setState(() {
      list.addAll(chapterList);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          ListView.builder(
              itemBuilder: (_, index) {
                final chapter = list[index];
                return StickyHeader(
                  header: Stack(alignment: Alignment.center, children: [
                    Container(
                      height: 50.0,
                      color: Colors.blueGrey[700],
                      padding: const EdgeInsets.symmetric(horizontal: 16.0),
                      alignment: Alignment.center,
                      child: Text(chapter.title ?? '',
                          style: const TextStyle(color: Colors.white)),
                    ),
                  ]),
                  content: ListView.builder(
                    itemExtent: 60,
                    physics: const NeverScrollableScrollPhysics(),
                    shrinkWrap: true,
                    itemBuilder: (_, index) {
                      if (chapter.chapterList == null) const SizedBox.shrink();
                      final subChapter = chapter.chapterList![index];
                      return ListTile(
                        title: Text(subChapter.title ?? ''),
                        subtitle: Text(
                            '${DateUtil.defaultFormat(subChapter.updatedAt)}'),
                        trailing: subChapter.paid ?? false
                            ? null
                            : const Icon(Icons.lock_outlined),
                        onTap: () => context.replaceNamed('novelContent',
                            params: {'novelId': '${widget.novelId}'},
                            queryParams: {'chapterId': '${subChapter.id}'}),
                      );
                    },
                    itemCount: chapter.chapterList?.length ?? 0,
                  ),
                );
              },
              itemCount: list.length),
          Container(
              height: 50.0,
              alignment: Alignment.centerLeft,
              child: const BackOrHomeButton()),
        ],
      ),
    );
  }
}

/// 小说内容
class NovelContentPage extends StatefulWidget {
  /// 章节ID
  final int chapterId;

  const NovelContentPage(this.chapterId, {Key? key}) : super(key: key);

  @override
  State<NovelContentPage> createState() => _NovelContentPageState();
}

// https://stackoverflow.com/questions/59062264/how-to-make-gesturedetector-also-work-when-touch-empty-space-in-flutter
class _NovelContentPageState extends State<NovelContentPage> with BoolAction {
  final scrollController = ScrollController();

  bool? paid;
  NovelContent? content;

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  void _loadData() async {
    var novelContent = await NovelApi().content(IdForm(id: widget.chapterId));
    setState(() {
      content = novelContent;
      paid = (novelContent.paid ?? false) || (novelContent.cost ?? 0) == 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: Text(content?.title ?? '')),
        body: GestureDetector(
          onTap: voidReversalBool,
          behavior: HitTestBehavior.opaque,
          child: Stack(children: [
            GestureDetector(
              child: Builder(builder: (_) {
                if ((content?.userLv ?? 0) < (content?.limitLv ?? 0)) {
                  return Center(
                      child: Text(
                    S.of(context).insufficientLevelPrompt(
                        content?.userLv ?? 0, content?.limitLv ?? 0),
                    style: const TextStyle(
                        fontSize: 20, fontWeight: FontWeight.bold),
                    textAlign: TextAlign.center,
                  ));
                }
                if (paid == null) return const SizedBox.shrink();
                if (!paid!) {
                  return subscribeButtonBuild(context);
                }
                return SingleChildScrollView(
                    child: Column(children: [
                  Html(data: content?.content ?? ''),
                  GestureDetector(
                      onTap: () => toChapter(content?.nextCid),
                      child: Container(
                        height: 50,
                        decoration: const BoxDecoration(
                            border: Border(
                                top: BorderSide(
                                    width: 1, color: Colors.black38))),
                        alignment: Alignment.center,
                        width: double.infinity,
                        child: Text(S.of(context).nextChapter),
                      )),
                ]));
              }),
            ),
            Align(
                alignment: Alignment.bottomCenter,
                child: boolValBuild((_, val, __) {
                  return val
                      ? bottomButtonBuild(context)
                      : const SizedBox.shrink();
                }))
          ]),
        ));
  }

  /// 订阅按钮
  Widget subscribeButtonBuild(BuildContext context) {
    return Center(
      child: TextButton(
        onPressed: subscribe,
        style: ButtonStyle(
          padding: MaterialStateProperty.all(const EdgeInsets.all(20)),
          side: MaterialStateProperty.all(
            BorderSide(color: Theme.of(context).primaryColor),
          ),
        ),
        child: Text(
          S.of(context).subscribe,
          style: const TextStyle(fontSize: 20),
        ),
      ),
    );
  }

  void subscribe() async {
    int? userPoint = content?.userPoint;
    int? cost = content?.cost;
    final result = await showDialog<bool>(
      context: context,
      barrierDismissible: false,
      builder: (BuildContext dialogContext) {
        return AlertDialog(
          title: (userPoint ?? 0) < (cost ?? 0)
              ? Text(S.of(context).insufficientBalance)
              : const SizedBox.shrink(),
          content: Text(S.of(context).subscribeCostFormat(cost ?? 0)),
          actions: <Widget>[
            TextButton(
              child: Text(S.of(context).cancel),
              onPressed: () {
                Navigator.of(dialogContext).pop(false);
              },
            ),
            (userPoint ?? 0) > (cost ?? 0)
                ? TextButton(
                    child: Text(S.of(context).confirm),
                    onPressed: () {
                      Navigator.of(dialogContext).pop(true);
                    },
                  )
                : const SizedBox.shrink(),
          ],
        );
      },
    );
    if (result == true) {
      await NovelApi().contentPay(IdForm(id: widget.chapterId));
      _loadData();
    }
  }

  Container bottomButtonBuild(BuildContext context) {
    return Container(
      height: 50,
      decoration: const BoxDecoration(
          color: Colors.white,
          border: Border(top: BorderSide(width: 1, color: Colors.black38))),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          GestureDetector(
            onTap: () => toChapter(content?.preCid),
            child: Text(S.of(context).previousChapter),
          ),
          Container(
            decoration: const BoxDecoration(
                border:
                    Border(left: BorderSide(width: 1, color: Colors.black38))),
          ),
          GestureDetector(
            onTap: () => toChapter(content?.nextCid),
            child: Text(S.of(context).nextChapter),
          ),
        ],
      ),
    );
  }

  /// 去当前小说的指定章节
  void toChapter(int? chapterId) {
    if (chapterId == null) {
      BotToast.showText(text: S.of(context).noMoreChapter);
      return;
    }
    context.replaceNamed('novelContent', queryParams: {
      'chapterId': ['$chapterId']
    });
  }
}

/// 小说评论列表页
class NovelCommentListPage extends StatefulWidget {
  final int novelId;

  const NovelCommentListPage(this.novelId, {Key? key}) : super(key: key);

  @override
  State<NovelCommentListPage> createState() => _NovelCommentListPageState();
}

class _NovelCommentListPageState extends State<NovelCommentListPage>
    with
        PageDataLoading<NovelComment, NovelCommentPageForm>,
        ToTopFloatingButton {
  final scrollController = ScrollController();
  late NovelCommentPageForm form =
      NovelCommentPageForm(novelId: widget.novelId);

  @override
  void initState() {
    super.initState();
    addPageRequestListener();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    addToTopListener(context, scrollController);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: const BackOrHomeButton(),
        title: Text(S.of(context).commentsSection),
      ),
      body: RefreshIndicator(
        onRefresh: pageRefresh,
        child: pageListView(
          scrollController: scrollController,
          padding: const EdgeInsets.all(5),
          itemExtent: 200,
          itemBuilder: (context, item, index) {
            return GestureDetector(
                onTap: () => context.pushNamed('novelCommentDetail',
                    params: {'novelId': '${widget.novelId}'},
                    queryParams: {'novelCommentId': '${item.id}'}),
                child: NovelCommentItem(item));
          },
        ),
      ),
      floatingActionButton: toTopFloatingActionButton(scrollController),
    );
  }

  @override
  Future<PageGenerics<NovelComment>> loadData(NovelCommentPageForm pageForm) =>
      NovelCommentApi().page(pageForm);

  @override
  NovelCommentPageForm get pageForm => form;
}

/// 小说评论列表项
class NovelCommentItem extends StatelessWidget {
  final NovelComment comment;

  const NovelCommentItem(this.comment, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var user = comment.user!;
    return Column(
      children: [
        ListTile(
          onTap: () => context
              .pushNamed('userProfile', params: {'userId': '${user.id}'}),
          leading: UserAvatar.small(user.avatar),
          title: UserNameAndLevel(user, levelSize: 10),
          subtitle: Text(DateUtil.defaultFormat(comment.createdAt)),
        ),
        ConstrainedBox(
          constraints: const BoxConstraints(maxHeight: 100),
          child: Html(
            data: comment.content ?? '',
            customRenders: {
              tagMatcher('img'): CustomRender.widget(
                  widget: (_, __) => Text(S.of(context).imagePlaceholder))
            },
          ),
        ),
      ],
    );
  }
}

/// 小说评论详情页
class NovelCommentDetailPage extends StatefulWidget {
  final int novelId;
  final int novelCommentId;

  const NovelCommentDetailPage(this.novelId, this.novelCommentId, {Key? key})
      : super(key: key);

  @override
  State<NovelCommentDetailPage> createState() => _NovelCommentDetailPageState();
}

class _NovelCommentDetailPageState extends State<NovelCommentDetailPage>
    with
        PageDataLoading<NovelComment, NovelCommentPageForm>,
        ToTopFloatingButton {
  final scrollController = ScrollController();
  late final NovelCommentPageForm form = NovelCommentPageForm(
      novelId: widget.novelId, topId: widget.novelCommentId);

  NovelComment? comment;

  @override
  void initState() {
    super.initState();
    _initData();
    addPageRequestListener();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    addToTopListener(context, scrollController);
  }

  Future<void> _initData() async {
    var novelComment =
        await NovelCommentApi().detail(IdForm(id: widget.novelCommentId));
    setState(() {
      comment = novelComment;
    });
  }

  @override
  Widget build(BuildContext context) {
    var user = comment?.user;
    if (user == null) {
      return const LoadingScreen();
    }
    return Scaffold(
      appBar: AppBar(
        leading: const BackOrHomeButton(),
        title: Text(S.of(context).commentsDetail),
      ),
      body: RefreshIndicator(
        onRefresh: pageRefresh,
        child: CustomScrollView(controller: scrollController, slivers: [
          SliverToBoxAdapter(
            child: Column(
              children: [
                ListTile(
                  onTap: () => context.pushNamed('userProfile',
                      params: {'userId': '${comment?.userId}'}),
                  leading: UserAvatar.small(user.avatar),
                  title: UserNameAndLevel(user, levelSize: 10),
                  subtitle: Text(DateUtil.defaultFormat(comment?.createdAt)),
                ),
                Html(data: comment?.content ?? ''),
                const Divider(),
                Text('共${comment?.replyCount ?? 0}条回复')
              ],
            ),
          ),
          pageSliverListView(
            itemBuilder: (context, item, index) =>
                CommentReplyListItem(comment!.userId!, item),
          ),
        ]),
      ),
      floatingActionButton: toTopFloatingActionButton(scrollController),
    );
  }

  @override
  Future<PageGenerics<NovelComment>> loadData(NovelCommentPageForm pageForm) =>
      NovelCommentApi().replyPage(pageForm);

  @override
  NovelCommentPageForm get pageForm => form;
}

mixin _NovelListSearchDialog {
  final TextEditingController _searchNameController = TextEditingController();
  final ValueNotifier<NovelStatus?> _novelStatus =
      ValueNotifier(NovelStatus.non);
  final ValueNotifier<bool> showSearchNotifier = ValueNotifier(true);

  /// 搜索弹窗
  void searchDialog(
    BuildContext context,
    NovelPageForm form,
    List<TreeWrapper<Tag, IncludeOrExcludeWrapper<Tag>>> tags,
    VoidCallback pageRefresh,
  ) async {
    showSearchNotifier.value = false;
    final result = await showDialog<bool>(
      context: context,
      // barrierDismissible: false,
      builder: (BuildContext context) {
        return AlertDialog(
          contentPadding: const EdgeInsets.all(5.0),
          content: SingleChildScrollView(
              child: Column(children: [
            TextField(
              controller: _searchNameController,
              decoration: InputDecoration(
                labelText: S.of(context).searchNovelKeyWords,
                border: const OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.white, width: 0.5),
                    borderRadius: BorderRadius.all(Radius.circular(10))),
              ),
            ),
            const SizedBox(height: 10),
            Container(
                padding: const EdgeInsets.all(5.0),
                decoration: BoxDecoration(
                    border: Border.all(color: Colors.grey[300]!, width: 1),
                    borderRadius: const BorderRadius.all(Radius.circular(10))),
                child: Row(children: [
                  Text('${S.of(context).novelStatus}：'),
                  ValueListenableBuilder(
                      valueListenable: _novelStatus,
                      builder: (ctx, val, child) {
                        return Radio<NovelStatus>(
                          value: NovelStatus.serial,
                          groupValue: val,
                          onChanged: (NovelStatus? value) =>
                              _novelStatus.value = value,
                        );
                      }),
                  Text(S.of(context).serial),
                  ValueListenableBuilder(
                      valueListenable: _novelStatus,
                      builder: (ctx, val, child) {
                        return Radio<NovelStatus>(
                          value: NovelStatus.finish,
                          groupValue: val,
                          onChanged: (NovelStatus? value) =>
                              _novelStatus.value = value,
                        );
                      }),
                  Text(S.of(context).finish),
                ])),
            const SizedBox(height: 10),
            Container(
                padding: const EdgeInsets.all(5.0),
                decoration: BoxDecoration(
                    border: Border.all(color: Colors.grey[300]!, width: 1),
                    borderRadius: const BorderRadius.all(Radius.circular(10))),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: tags
                      .map((e) => Wrap(children: [
                            Text('${e.data.name}：'),
                            ...e.children.map((c) {
                              return ValueListenableBuilder(
                                  valueListenable: c.state,
                                  builder: (ctx, state, child) {
                                    return TextButton(
                                        onPressed: () => c.toNextState(state),
                                        child: Text(
                                          c.data.name!,
                                          style: TextStyle(color: state.color),
                                        ));
                                  });
                            }).toList(),
                          ]))
                      .toList(),
                )),
          ])),
          actionsAlignment: MainAxisAlignment.spaceEvenly,
          actions: <Widget>[
            TextButton(
              child: Text(S.of(context).reset),
              onPressed: () {
                for (var p in tags) {
                  for (var c in p.children) {
                    c.reset();
                  }
                }
                _searchNameController.clear();
                _novelStatus.value = NovelStatus.non;
              },
            ),
            TextButton(
              child: Text(S.of(context).cancel),
              onPressed: () => Navigator.of(context).pop(),
            ),
            TextButton(
              child: Text(S.of(context).confirm),
              onPressed: () => Navigator.of(context).pop(true),
            ),
          ],
        );
      },
    );
    if (result == true) {
      form.includeTags = [];
      form.excludeTags = [];
      for (var p in tags) {
        for (var c in p.children) {
          if (c.state.value == IncludeOrExcludeState.include) {
            form.includeTags?.add(c.data.id!);
          } else if (c.state.value == IncludeOrExcludeState.exclude) {
            form.excludeTags?.add(c.data.id!);
          }
        }
      }
      form.title = _searchNameController.text;
      pageRefresh();
    }
    showSearchNotifier.value = true;
  }
}

/// 小说封面
class _NovelCover extends StatelessWidget {
  final String? coverUrl;
  final double? width;
  final double? height;
  final BoxFit? fit;

  const _NovelCover(this.coverUrl,
      {Key? key, this.width, this.height, this.fit})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return CachedNetworkImage(
      imageUrl: System.withDomain(coverUrl),
      placeholder: (context, url) => Image.asset(Assets.novelCoverDefault),
      errorWidget: (context, url, error) =>
          Image.asset(Assets.novelCoverDefault),
      width: width,
      height: height,
      fit: fit,
    );
  }
}
