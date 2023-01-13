import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';

import '../../generated/assets.dart';
import '../../generated/l10n.dart';
import '../config/auth.dart';
import '../constant/common_constant.dart';
import '../enum/comment_enum.dart';
import '../enum/user_enum.dart';
import '../http/api/forum_api.dart';
import '../http/api/user_api.dart';
import '../http/form/common_form.dart';
import '../http/form/forum_form.dart';
import '../http/form/user_form.dart';
import '../http/model/user.dart';
import '../model/common_model.dart';
import '../utils/logger.dart';
import '../widget/custom_widget.dart';
import '../widget/mixin_class.dart';
import '../widget/sliver_widget.dart';
import 'forum.dart';

/// 用户个人中心
class UserCenterScreen extends StatefulWidget {
  const UserCenterScreen({Key? key}) : super(key: key);

  @override
  State<UserCenterScreen> createState() => _UserCenterScreenState();
}

// 参考 https://stackoverflow.com/questions/51155208/make-container-widget-fill-parent-vertically
class _UserCenterScreenState extends State<UserCenterScreen> with BoolAction {
  User? user;

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  void _loadData() async {
    var userInfo = await UserApi().center();
    initBoolAction(userInfo.signIn);
    setState(() {
      user = userInfo;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(80),
          child: Container(
            height: 120,
            padding: const EdgeInsets.only(left: 20, bottom: 10),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                UserAvatar.normal(user?.avatar),
                const SizedBox(width: 20),
                Expanded(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          UserNameAndLevel.large(user),
                          const SizedBox(height: 5),
                          Text(S.of(context).coinFormat(user?.point ?? 0)),
                        ],
                      ),
                      userProfileWidget(context)
                    ],
                  ),
                )
              ],
            ),
          ),
        ),
      ),
      body: bodyBuild(context),
    );
  }

  Column bodyBuild(BuildContext context) {
    return Column(
      children: [
        Card(
          child: Padding(
            padding: const EdgeInsets.only(top: 10, bottom: 10),
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    TextUnderCount.large(
                        user?.postCount ?? 0,
                        S.of(context).post,
                        () => context.pushNamed('userProfile',
                            params: {'userId': '${user?.id}'})),
                    TextUnderCount.large(
                        user?.followCount ?? 0,
                        S.of(context).follow,
                        () => context.pushNamed('userFriends', params: {
                              'userId': '${user?.id}'
                            }, queryParams: {
                              'type': UserFriendsType.follow.code
                            })),
                    TextUnderCount.large(
                        user?.fansCount ?? 0,
                        S.of(context).fans,
                        () => context.pushNamed('userFriends', params: {
                              'userId': '${user?.id}'
                            }, queryParams: {
                              'type': UserFriendsType.fans.code
                            })),
                  ],
                ),
              ],
            ),
          ),
        ),
        Card(
          child: ListTile(
              leading: const Icon(Icons.settings),
              title: Text(S.of(context).settings),
              onTap: () =>context.pushNamed('settings')),
        ),
      ],
    );
  }

  // 用户资料页按钮
  Widget userProfileWidget(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      crossAxisAlignment: CrossAxisAlignment.end,
      children: [
        const SizedBox.shrink(),
        GestureDetector(
            child: Row(children: [
              SizedBox(
                  width: 50,
                  height: 50,
                  child: Align(
                    alignment: Alignment.centerRight,
                    child: Text(S.of(context).profile),
                  )),
              const Icon(Icons.navigate_next_rounded)
            ]),
            onTap: () => context
                .pushNamed('userProfile', params: {'userId': '${user?.id}'})),
        boolValBuild((_, val, __) {
          return TextButton(
              style: ButtonStyle(
                  backgroundColor: MaterialStateProperty.all(Colors.white)),
              onPressed: val ? null : voidReversalBool,
              child: val
                  ? Text(S.of(context).checkedIn)
                  : Text(S.of(context).checkIn));
        }),
      ],
    );
  }

  @override
  bool blockOnTrue() => true;

  @override
  Future<void> onFalseVal() => UserApi().checkIn();
}

/// 用户资料页
class UserProfilePage extends StatefulWidget {
  final int userId;

  const UserProfilePage(this.userId, {Key? key}) : super(key: key);

  @override
  State<UserProfilePage> createState() => _UserProfilePageState();
}

class _UserProfilePageState extends State<UserProfilePage> with BoolAction {
  late final _tabs = [
    Tab(text: S.of(context).post),
    Tab(text: S.of(context).works),
  ];

  User? user;

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  void _loadData() async {
    var user = await UserApi().detail(IdForm(id: widget.userId));
    initBoolAction(user.follow);
    setState(() {
      this.user = user;
    });
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: _tabs.length,
        child: Scaffold(
          body: NestedScrollView(
            headerSliverBuilder:
                (BuildContext context, bool innerBoxIsScrolled) {
              var tabBar = TabBar(
                labelColor: Colors.black,
                unselectedLabelColor: Colors.grey,
                tabs: _tabs,
              );
              return [
                buildSliverAppBar(tabBar),
                SliverPersistentHeader(
                  delegate: StickyTabBarDelegate(tabBar),
                  pinned: true,
                ),
              ];
            },
            body: TabBarView(children: [
              PostListScreen(
                  form: ForumPostPageForm(userId: widget.userId),
                  formLoader: ForumPostApi().page),
              Center(child: Text(S.of(context).underDevelopment)),
            ]),
          ),
        ));
  }

  // 参考链接 https://blog.csdn.net/a646639956/article/details/113619277
  SliverAppBar buildSliverAppBar(TabBar tabBar) {
    return SliverAppBar(
      leading: const BackOrHomeButton(),
      floating: false,
      pinned: true,
      snap: false,
      // backgroundColor: Colors.orange,
      expandedHeight: 180.0,
      flexibleSpace: LayoutBuilder(
        builder: (_, BoxConstraints boxConstraints) {
          return FlexibleSpaceBar(
            centerTitle: true,
            title: boxConstraints.biggest.height <
                    (kToolbarHeight + tabBar.preferredSize.height + 30)
                ? Text(user?.name ?? '')
                : null,
            background: Container(
              // margin: const EdgeInsets.only(top: kToolbarHeight),
              // decoration: BoxDecoration(color: Colors.white),
              padding: const EdgeInsets.only(
                  left: 20, top: 10, right: 20, bottom: 10),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  Row(children: [
                    UserAvatar.normal(user?.avatar),
                    Expanded(
                        child: Column(children: [
                      buildFansAndFollow(),
                      buildButton(),
                    ]))
                  ]),
                  UserNameAndLevel.large(user)
                ],
              ),
            ),
          );
        },
      ),
      // bottom: tabBar,
    );
  }

  // 粉丝、关注
  Row buildFansAndFollow() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        TextUnderCount.normal(
            user?.fansCount,
            S.of(context).fans,
            () => context.pushNamed('userFriends',
                params: {'userId': '${user?.id}'},
                queryParams: {'type': UserFriendsType.fans.code})),
        TextUnderCount.normal(
            user?.followCount,
            S.of(context).follow,
            () => context.pushNamed('userFriends',
                params: {'userId': '${user?.id}'},
                queryParams: {'type': UserFriendsType.follow.code})),
      ],
    );
  }

  // 按钮
  Widget buildButton() {
    if (UserAuth().uid == user?.id) {
      return const SizedBox.shrink();
    }
    return Padding(
      padding: const EdgeInsets.only(top: 10),
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(backgroundColor: Colors.blue[400]),
        onPressed: voidReversalBool,
        child: SizedBox(
          width: 100,
          child: boolValBuild((_, val, __) {
            return Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: val
                  ? [
                      const Icon(Icons.done_outlined),
                      Text(S.of(context).followed)
                    ]
                  : [Text(S.of(context).follow)],
            );
          }),
        ),
      ),
    );
  }

  @override
  Future<void> onFalseVal() => UserApi().follow(IdForm(id: widget.userId));

  @override
  Future<void> onTrueVal() => UserApi().followRemove(IdForm(id: widget.userId));
}

/// 用户朋友页面
class UserFriendPage extends StatefulWidget {
  final int userId;
  final UserFriendsType type;

  const UserFriendPage({Key? key, required this.userId, required this.type})
      : super(key: key);

  @override
  State<UserFriendPage> createState() => _UserFriendPageState();
}

class _UserFriendPageState extends State<UserFriendPage> {
  late var s = S.of(context);

  @override
  Widget build(BuildContext context) {
    var uid = UserAuth().uid;
    var isMine = uid != null && uid == widget.userId;
    var tabs = [
      Tab(text: (isMine ? s.mine : s.his) + s.follow),
      Tab(text: (isMine ? s.mine : s.his) + s.fans),
    ];
    return DefaultTabController(
        initialIndex: int.parse(widget.type.code),
        length: tabs.length,
        child: Scaffold(
          appBar: AppBar(
            leading: const BackOrHomeButton(),
            title: Text((isMine ? s.mine : s.his) + s.friends),
            bottom: TabBar(tabs: tabs),
          ),
          body: TabBarView(children: [
            UserListScreen(
                UserFriendsType.follow,
                () async => UserApi().followPage(UserCollectionPageForm(
                    userId: widget.userId,
                    collectionType: CollectionType.user))),
            UserListScreen(
                UserFriendsType.fans,
                () async => UserApi().fansPage(UserCollectionPageForm(
                    collectionObjId: widget.userId,
                    collectionType: CollectionType.user))),
          ]),
        ));
  }
}

/// 用户列表界面
class UserListScreen extends StatefulWidget {
  final UserFriendsType type;
  final AsyncValueGetter<PageGenerics<User>> userPageGetter;

  const UserListScreen(this.type, this.userPageGetter, {Key? key})
      : super(key: key);

  @override
  State<UserListScreen> createState() => _UserListScreenState();
}

class _UserListScreenState extends State<UserListScreen> {
  PageGenerics<User> page = PageGenerics();

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  void _loadData() async {
    var userPage = await widget.userPageGetter();
    setState(() {
      page.update(userPage);
    });
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
        itemCount: page.list.length ?? 0,
        itemBuilder: (_, index) {
          return UserListItem(page.list[index]);
        });
  }
}

/// 用户列表项
class UserListItem extends StatefulWidget {
  final User user;

  const UserListItem(this.user, {Key? key}) : super(key: key);

  @override
  State<UserListItem> createState() => _UserListItemState();
}

class _UserListItemState extends State<UserListItem> with BoolAction {
  @override
  void initState() {
    super.initState();
    initBoolAction(widget.user.follow);
  }

  @override
  Widget build(BuildContext context) {
    var user = widget.user;
    return Card(
      child: ListTile(
        onTap: () =>
            context.pushNamed('userProfile', params: {'userId': '${user.id}'}),
        leading: UserAvatar.small(user.avatar),
        title: Text(user.name ?? ''),
        trailing: TextButton(
            onPressed: voidReversalBool,
            child: boolValBuild((_, val, __) {
              return val
                  ? Text(S.of(context).followed)
                  : Text(S.of(context).follow);
            })),
      ),
    );
  }

  @override
  Future<void> onFalseVal() => UserApi().follow(IdForm(id: widget.user.id!));

  @override
  Future<void> onTrueVal() =>
      UserApi().followRemove(IdForm(id: widget.user.id!));
}

/// 用户头像
class UserAvatar extends StatelessWidget {
  final String? avatarUrl;
  final double? width;
  final double? height;

  const UserAvatar(this.avatarUrl, {Key? key, this.width, this.height})
      : super(key: key);

  /// width=height=50
  factory UserAvatar.small(String? avatarUrl) => UserAvatar(
        avatarUrl,
        width: 50,
        height: 50,
      );

  /// width=height=100
  factory UserAvatar.normal(String? avatarUrl) => UserAvatar(
        avatarUrl,
        width: 100,
        height: 100,
      );

  /// width=height=150
  factory UserAvatar.large(String? avatarUrl) => UserAvatar(
        avatarUrl,
        width: 150,
        height: 150,
      );

  @override
  Widget build(BuildContext context) {
    return CachedNetworkImage(
      imageUrl: System.withDomain(avatarUrl),
      imageBuilder: (context, imageProvider) =>
          CircleAvatar(backgroundImage: imageProvider),
      placeholder: (context, url) => const CircularProgressIndicator(),
      errorWidget: (context, url, error) => const CircleAvatar(
        backgroundImage: AssetImage(Assets.userHeaderDefault),
      ),
      width: width,
      height: height,
    );
  }
}

/// 用户名称与级别
class UserNameAndLevel extends StatelessWidget {
  final User? user;
  final double? nameSize;
  final double? levelSize;

  const UserNameAndLevel(this.user, {Key? key, this.nameSize, this.levelSize})
      : super(key: key);

  factory UserNameAndLevel.large(User? user) =>
      UserNameAndLevel(user, nameSize: 25, levelSize: 20);

  @override
  Widget build(BuildContext context) {
    return Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
      Text(
        user?.name ?? '',
        style: TextStyle(fontSize: nameSize),
      ),
      const SizedBox(width: 5),
      Text(
        'lv${user?.level ?? 0}',
        style: TextStyle(fontSize: levelSize),
      ),
    ]);
  }
}
