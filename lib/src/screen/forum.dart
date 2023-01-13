import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_html/flutter_html.dart';
import 'package:go_router/go_router.dart';

import '../../generated/assets.dart';
import '../../generated/l10n.dart';
import '../constant/common_constant.dart';
import '../http/api/forum_api.dart';
import '../http/form/common_form.dart';
import '../http/form/forum_form.dart';
import '../http/model/forum.dart';
import '../http/model/forum_post.dart';
import '../http/model/forum_post_comment.dart';
import '../model/common_model.dart';
import '../utils/base_types.dart';
import '../utils/common_util.dart';
import '../widget/custom_widget.dart';
import '../widget/mixin_class.dart';
import '../widget/sliver_widget.dart';
import 'comment.dart';
import 'user.dart';

/// 论坛列表界面
class ForumListScreen extends StatefulWidget {
  final bool showToTopButton;
  final ForumPageForm form;
  final AsyncValueLoad<ForumPageForm, PageGenerics<Forum>> formLoader;

  const ForumListScreen({
    Key? key,
    required this.form,
    required this.formLoader,
    this.showToTopButton = false,
  }) : super(key: key);

  @override
  State<ForumListScreen> createState() => _ForumListScreenState();
}

class _ForumListScreenState extends State<ForumListScreen>
    with
        AutomaticKeepAliveClientMixin,
        PageDataLoading<Forum, ForumPageForm>,
        ToTopFloatingButton,
        _ForumListSearchDialog {
  final scrollController = ScrollController();

  @override
  void initState() {
    super.initState();
    addPageRequestListener();
    if (widget.showToTopButton) addToTopListener(context, scrollController);
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
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
              onTap: () => context.pushNamed('forum', params: {
                'forumId': '${item.id}',
              }),
              child: ForumListItem(item),
            );
          },
        ),
      ),
      floatingActionButton: Wrap(
        children: [
          toTopFloatingActionButton(scrollController),
          ValueListenableBuilder(
              valueListenable: showSearchNotifier,
              builder: (BuildContext context, bool value, Widget? child) {
                if (!value) SizedBox.fromSize();
                return FloatingActionButton(
                  onPressed: () =>
                      searchDialog(context, widget.form, pageRefresh),
                  child: const Icon(Icons.search),
                );
              })
        ],
      ),
    );
  }

  @override
  void dispose() {
    super.dispose();
    scrollController.dispose();
  }

  @override
  bool get wantKeepAlive => true;

  @override
  Future<PageGenerics<Forum>> loadData(ForumPageForm pageForm) =>
      widget.formLoader(pageForm);

  @override
  ForumPageForm get pageForm => widget.form;
}

/// 论坛列表项
class ForumListItem extends StatelessWidget {
  final Forum forum;

  const ForumListItem(this.forum, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Flexible(fit: FlexFit.tight, child: _ForumCover(forum.logo)),
        Expanded(
            flex: 2,
            child: Padding(
                padding: const EdgeInsets.only(left: 10.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      forum.name ?? '',
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(
                        fontSize: 20,
                      ),
                    ),
                    ConstrainedBox(
                      constraints: const BoxConstraints.expand(height: 200),
                      child: SingleChildScrollView(
                        child: Html(data: forum.brief),
                      ),
                    ),
                  ],
                )))
      ],
    );
  }
}

/// 论坛详情页
class ForumDetailPage extends StatefulWidget {
  final int forumId;

  const ForumDetailPage(this.forumId, {Key? key}) : super(key: key);

  @override
  State<ForumDetailPage> createState() => _ForumDetailPageState();
}

// https://stackoverflow.com/a/54696347/20618507
// https://github.com/flutter/flutter/issues/101320#issuecomment-1089194210
// https://blog.csdn.net/yechaoa/article/details/90701321
class _ForumDetailPageState extends State<ForumDetailPage> with BoolAction {
  late final scrollController = ScrollController();

  late final tabBar = TabBar(
    labelColor: Colors.black,
    unselectedLabelColor: Colors.grey,
    tabs: [
      Tab(text: S.of(context).all),
      Tab(text: S.of(context).refinement),
    ],
  );

  Forum? forum;

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  void _loadData() async {
    var forumData = await ForumApi().detail(IdForm(id: widget.forumId));
    initBoolAction(forumData.followed);
    setState(() {
      forum = forumData;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (forum == null) {
      return const LoadingScreen();
    }
    return DefaultTabController(
        length: tabBar.tabs.length,
        child: Scaffold(
          body: NestedScrollView(
            controller: scrollController,
            headerSliverBuilder:
                (BuildContext context, bool innerBoxIsScrolled) {
              return [
                SliverAppBar(
                  leading: const BackOrHomeButton(),
                  title: Text(forum?.name ?? ''),
                  pinned: true,
                  floating: false,
                  snap: false,
                  expandedHeight: 200.0,
                  flexibleSpace: FlexibleSpaceBar(
                    background: Container(
                      // decoration: BoxDecoration(
                      //     image: DecorationImage(
                      //       image: CachedNetworkImageProvider(System.withDomain(forum?.logo)),
                      //   fit: BoxFit.cover,
                      // )),
                      // padding: const EdgeInsets.only(top: kTextTabBarHeight,bottom: 10,left: 20,right: 20),
                      margin: const EdgeInsets.only(
                        top: kTextTabBarHeight,
                        bottom: 10,
                        left: 20,
                        right: 20,
                      ),
                      child: Row(
                        children: [
                          _ForumCover(forum?.logo, fit: BoxFit.cover),
                          Expanded(
                            child: Padding(
                                padding: const EdgeInsets.only(left: 20),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceAround,
                                  children: [
                                    Text(S
                                        .of(context)
                                        .followCount(forum?.followCount ?? 0)),
                                    Text(S
                                        .of(context)
                                        .postCount(forum?.postCount ?? 0)),
                                    Text(S
                                        .of(context)
                                        .readCount(forum?.viewCount ?? 0)),
                                  ],
                                )),
                          ),
                          Align(
                            alignment: AlignmentDirectional.bottomEnd,
                            child: ElevatedButton(
                              style: ElevatedButton.styleFrom(
                                  backgroundColor: Colors.blue[400]),
                              onPressed: voidReversalBool,
                              child: boolValBuild((_, val, __) {
                                return Text(val
                                    ? S.of(context).followed
                                    : S.of(context).follow);
                              }),
                            ),
                          )
                        ],
                      ),
                    ),
                  ),
                ),
                SliverPersistentHeader(
                  delegate: StickyTabBarDelegate(tabBar),
                  pinned: true,
                ),
              ];
            },
            body: TabBarView(children: [
              PostListScreen(
                  parentController: scrollController,
                  forumId: widget.forumId,
                  form: ForumPostPageForm(
                      forumId: widget.forumId, refinement: false),
                  formLoader: ForumPostApi().page),
              PostListScreen(
                  parentController: scrollController,
                  forumId: widget.forumId,
                  form: ForumPostPageForm(
                      forumId: widget.forumId, refinement: true),
                  formLoader: ForumPostApi().page),
            ]),
          ),
        ));
  }

  @override
  Future<void> onFalseVal() =>
      ForumApi().collection(IdForm(id: widget.forumId));

  @override
  Future<void> onTrueVal() =>
      ForumApi().collectionRemove(IdForm(id: widget.forumId));
}

/// 帖子列表界面
class PostListScreen extends StatefulWidget {
  final ScrollController? parentController;
  final int? forumId;
  final ForumPostPageForm form;
  final AsyncValueLoad<ForumPostPageForm, PageGenerics<ForumPost>> formLoader;

  const PostListScreen({
    Key? key,
    this.parentController,
    this.forumId,
    required this.form,
    required this.formLoader,
  }) : super(key: key);

  @override
  State<PostListScreen> createState() => _PostListScreenState();
}

// https://stackoverflow.com/questions/54689594/flutter-tabsview-and-nestedscrollview-scroll-issue
class _PostListScreenState extends State<PostListScreen>
    with
        AutomaticKeepAliveClientMixin,
        PageDataLoading<ForumPost, ForumPostPageForm>,
        ToTopFloatingButton {
  final _scrollController = ScrollController();

  @override
  void initState() {
    super.initState();
    addPageRequestListener();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    addToTopListener(context, _scrollController);
    _scrollController.addListener(() {
      var innerPos = _scrollController.position.pixels;
      var maxOuterPos = widget.parentController?.position.maxScrollExtent ?? 0;
      var currentOutPos = widget.parentController?.position.pixels ?? 0;

      if (innerPos >= 0 && currentOutPos < maxOuterPos) {
        widget.parentController?.position.jumpTo(innerPos + currentOutPos);
      } else {
        var currentParentPos = innerPos + currentOutPos;
        widget.parentController?.position.jumpTo(currentParentPos);
      }
    });
    widget.parentController?.addListener(() {
      var currentOutPos = widget.parentController?.position.pixels ?? 0;
      if (currentOutPos <= 0) {
        _scrollController.position.jumpTo(0);
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    super.build(context);
    return Scaffold(
      body: RefreshIndicator(
        onRefresh: pageRefresh,
        child: pageListView(
          scrollController: _scrollController,
          padding: const EdgeInsets.all(5),
          itemExtent: 200,
          itemBuilder: (context, item, index) {
            return GestureDetector(
                onTap: () => context
                    .pushNamed('forumPost', params: {'postId': '${item.id}'}),
                child: PostListItem(item));
          },
        ),
      ),
      floatingActionButton: toTopFloatingActionButton(_scrollController),
    );
  }

  @override
  bool get wantKeepAlive => true;

  @override
  Future<PageGenerics<ForumPost>> loadData(ForumPostPageForm pageForm) =>
      widget.formLoader(pageForm);

  @override
  ForumPostPageForm get pageForm => widget.form;
}

/// 帖子列表项
class PostListItem extends StatefulWidget {
  final ForumPost post;

  const PostListItem(this.post, {Key? key}) : super(key: key);

  @override
  State<PostListItem> createState() => _PostListItemState();
}

class _PostListItemState extends State<PostListItem> {
  final ValueNotifier<bool> star = ValueNotifier(false);
  final ValueNotifier<bool> thumb = ValueNotifier(false);

  @override
  void initState() {
    super.initState();
    thumb.value = widget.post.thumbUp ?? false;
    // star.value = post.commentCount
  }

  @override
  Widget build(BuildContext context) {
    var post = widget.post;

    var user = post.user!;

    var thumbUpCount = post.thumbUpCount ?? 0;
    return Column(
      children: [
        ListTile(
          onTap: () => context
              .pushNamed('userProfile', params: {'userId': '${user.id}'}),
          leading: UserAvatar.small(user.avatar),
          title: UserNameAndLevel(user, levelSize: 10),
          subtitle: Text(DateUtil.defaultFormat(post.createdAt)),
          trailing: Container(
            padding: const EdgeInsets.all(5),
            decoration: BoxDecoration(
                border:
                    Border.all(color: Theme.of(context).primaryColor, width: 1),
                borderRadius: const BorderRadius.all(Radius.circular(10))),
            child: Text(post.typeName ?? ''),
          ),
        ),
        ListTile(
          title: Text(
            post.title ?? '',
            maxLines: 1,
          ),
          subtitle: ConstrainedBox(
            constraints: const BoxConstraints(maxHeight: 100),
            child: Html(
              data: post.content ?? '',
              customRenders: {
                tagMatcher('img'): CustomRender.widget(
                    widget: (_, __) => Text(S.of(context).imagePlaceholder))
              },
            ),
          ),
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            ValueListenableBuilder(
                valueListenable: star,
                builder: (ctx, val, __) {
                  return IconButton(
                    color: star.value
                        ? Theme.of(ctx).primaryColor
                        : Colors.grey[700],
                    onPressed: () {
                      star.value = !val;
                    },
                    icon: const Icon(Icons.star_outline_outlined),
                  );
                }),
            TextButton.icon(
              style: ButtonStyle(
                  foregroundColor: MaterialStateProperty.all(Colors.grey[700])),
              onPressed: () {},
              icon: Icon(Icons.mode_comment_outlined),
              label: Text('${post.commentCount ?? 0}'),
            ),
            ValueListenableBuilder(
                valueListenable: thumb,
                builder: (_, val, __) {
                  return TextButton.icon(
                    style: ButtonStyle(
                        foregroundColor: thumb.value
                            ? null
                            : MaterialStateProperty.all(Colors.grey[700])),
                    onPressed: () {
                      thumb.value = !val;
                      if (thumb.value) {
                        ForumPostCommentApi().thumbUp(IdForm(id: post.id!));
                        thumbUpCount += 1;
                      } else {
                        ForumPostCommentApi()
                            .thumbUpCancel(IdForm(id: post.id!));
                        thumbUpCount += -1;
                      }
                    },
                    icon: const Icon(Icons.recommend_outlined),
                    label: Text('$thumbUpCount'),
                  );
                }),
          ],
        ),
      ],
    );
  }
}

/// 帖子详情页
class ForumPostDetailPage extends StatefulWidget {
  final int forumPostId;

  const ForumPostDetailPage(this.forumPostId, {Key? key}) : super(key: key);

  @override
  State<ForumPostDetailPage> createState() => _ForumPostDetailPageState();
}

class _ForumPostDetailPageState extends State<ForumPostDetailPage> {
  ForumPost? post;
  PageGenerics<ForumPostComment> page = PageGenerics();

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  void _loadData() async {
    var forumPost = await ForumPostApi().detail(IdForm(id: widget.forumPostId));
    var pageGenerics = await ForumPostCommentApi().page(
        ForumPostCommentPageForm(forumPostId: widget.forumPostId, parentId: 0));
    setState(() {
      post = forumPost;
      page.update(pageGenerics);
    });
  }

  @override
  Widget build(BuildContext context) {
    if (post == null || post?.user == null) {
      return const LoadingScreen();
    }
    var user = post!.user!;
    return Scaffold(
      appBar: AppBar(
        leading: const BackOrHomeButton(),
        title: Text(post!.title ?? ''),
      ),
      body: CustomScrollView(
        slivers: [
          SliverToBoxAdapter(
            child: Column(
              children: [
                ListTile(
                  onTap: () => context.pushNamed('userProfile',
                      params: {'userId': '${post?.userId}'}),
                  leading: UserAvatar.small(user.avatar),
                  title: UserNameAndLevel(user, levelSize: 10),
                  subtitle: Text(DateUtil.defaultFormat(post!.createdAt)),
                  trailing: Container(
                    padding: const EdgeInsets.all(5),
                    decoration: BoxDecoration(
                        border: Border.all(
                            color: Theme.of(context).primaryColor, width: 1),
                        borderRadius:
                            const BorderRadius.all(Radius.circular(10))),
                    child: Text(post?.typeName ?? ''),
                  ),
                ),
                Html(data: post?.content ?? ''),
                const Divider(),
                Text('共${page.total}条回复')
              ],
            ),
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (_, index) {
                return CommentReplyListItem(
                  post!.userId!,
                  page.list[index],
                  onTap: () => context.pushNamed(
                    'forumPostCommentDetail',
                    params: {
                      'forumId': '${page.list[index].forumId}',
                      'postId': '${widget.forumPostId}',
                    },
                    queryParams: {'postCommentId': '${page.list[index].id}'},
                  ),
                );
              },
              childCount: page.list.length,
            ),
          )
        ],
      ),
    );
  }
}

/// 帖子评论详情
class ForumPostCommentDetailPage extends StatefulWidget {
  final int forumPostId;
  final int postCommentId;

  const ForumPostCommentDetailPage(this.forumPostId, this.postCommentId,
      {Key? key})
      : super(key: key);

  @override
  State<ForumPostCommentDetailPage> createState() =>
      _ForumPostCommentDetailPageState();
}

class _ForumPostCommentDetailPageState
    extends State<ForumPostCommentDetailPage> {
  ForumPostComment? comment;
  PageGenerics<ForumPostComment> commentReplyPage = PageGenerics();

  @override
  void initState() {
    super.initState();
    _initData();
  }

  void _initData() async {
    var forumPostComment =
        await ForumPostCommentApi().detail(IdForm(id: widget.postCommentId));
    var pageGenerics = await ForumPostCommentApi().page(
        ForumPostCommentPageForm(
            forumPostId: widget.forumPostId, parentId: widget.postCommentId));
    setState(() {
      comment = forumPostComment;
      commentReplyPage.update(pageGenerics);
    });
  }

  @override
  Widget build(BuildContext context) {
    if (comment == null) {
      return const LoadingScreen();
    }
    var user = comment!.user!;
    return Scaffold(
      appBar: AppBar(
        leading: const BackOrHomeButton(),
        title: Text(S.of(context).commentsDetail),
      ),
      body: CustomScrollView(slivers: [
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
              Text('共${commentReplyPage.total ?? 0}条回复')
            ],
          ),
        ),
        SliverList(
          delegate: SliverChildBuilderDelegate(
            (_, index) {
              return CommentReplyListItem(
                  comment!.userId!, commentReplyPage.list[index]);
            },
            childCount: commentReplyPage.list.length,
          ),
        )
      ]),
    );
  }
}

mixin _ForumListSearchDialog {
  final TextEditingController _searchNameController = TextEditingController();
  final ValueNotifier<bool> showSearchNotifier = ValueNotifier(true);

  void searchDialog(
    BuildContext context,
    ForumPageForm form,
    VoidCallback pageRefresh,
  ) async {
    showSearchNotifier.value = false;
    final result = await showDialog<bool>(
      context: context,
      // barrierDismissible: false,
      builder: (BuildContext context) {
        return AlertDialog(
          contentPadding: const EdgeInsets.all(5.0),
          content: TextField(
            controller: _searchNameController,
            decoration: InputDecoration(
              labelText: S.of(context).searchForumKeyWords,
              border: const OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.white, width: 0.5),
                  borderRadius: BorderRadius.all(Radius.circular(10))),
            ),
          ),
          actionsAlignment: MainAxisAlignment.spaceEvenly,
          actions: <Widget>[
            TextButton(
              child: Text(S.of(context).reset),
              onPressed: () => _searchNameController.clear(),
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
      form.name = _searchNameController.text;
      pageRefresh();
    }
    showSearchNotifier.value = true;
  }
}

/// 论坛封面
class _ForumCover extends StatelessWidget {
  final String? coverUrl;
  final double? width;
  final double? height;
  final BoxFit? fit;

  const _ForumCover(this.coverUrl,
      {Key? key, this.width, this.height, this.fit})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return CachedNetworkImage(
      imageUrl: coverUrl == null ? '' : System.withDomain(coverUrl),
      placeholder: (context, url) => Image.asset(Assets.novelCoverDefault),
      errorWidget: (context, url, error) =>
          Image.asset(Assets.novelCoverDefault),
      width: width,
      height: height,
      fit: fit,
    );
  }
}
