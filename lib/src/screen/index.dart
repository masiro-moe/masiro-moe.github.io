import 'package:cached_network_image/cached_network_image.dart';
import 'package:card_swiper/card_swiper.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:url_launcher/url_launcher_string.dart';

import '../../generated/assets.dart';
import '../../generated/l10n.dart';
import '../constant/common_constant.dart';
import '../enum/forum_enum.dart';
import '../http/api/announcement_api.dart';
import '../http/api/carousel_api.dart';
import '../http/api/forum_api.dart';
import '../http/api/novel_api.dart';
import '../http/form/common_form.dart';
import '../http/form/forum_form.dart';
import '../http/form/novel_form.dart';
import '../http/model/announcement.dart';
import '../http/model/carousel.dart';
import '../widget/custom_widget.dart';
import '../widget/mixin_class.dart';
import 'announcement.dart';
import 'forum.dart';
import 'novel.dart';
import 'user.dart';

/// 主页面
class IndexPage extends StatefulWidget {
  const IndexPage({Key? key}) : super(key: key);

  @override
  State<IndexPage> createState() => _IndexPageState();
}

// 参考https://gist.github.com/Sunbreak/d128306cb25e0476704358afa380a961
class _IndexPageState extends State<IndexPage> with RestorationMixin {
  final RestorableInt _currentIndex = RestorableInt(0);
  final PageController _pageController = PageController();

  @override
  String? get restorationId => 'index_page_restoration_id';

  @override
  void restoreState(RestorationBucket? oldBucket, bool initialRestore) {
    registerForRestoration(_currentIndex, 'index_page_tab_index');
  }

  @override
  void dispose() {
    _currentIndex.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: PageView(
          controller: _pageController,
          physics: const NeverScrollableScrollPhysics(),
          children: const [
            // Center(child: Text(S.of(context).underDevelopment)),
            KeepAliveWrapper(child: HomeScreen()),
            KeepAliveWrapper(child: ShelfScreen()),
            KeepAliveWrapper(child: CollectionScreen()),
            KeepAliveWrapper(child: UserCenterScreen()),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        items: <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: const Icon(Icons.home),
            label: S.of(context).home,
          ),
          BottomNavigationBarItem(
            icon: const Icon(Icons.book),
            label: S.of(context).shelf,
          ),
          BottomNavigationBarItem(
            icon: const Icon(Icons.collections),
            label: S.of(context).collect,
          ),
          // BottomNavigationBarItem(
          //   icon: const Icon(Icons.trending_up),
          //   label: S.of(context).rank,
          // ),
          BottomNavigationBarItem(
            icon: const Icon(Icons.person),
            label: S.of(context).mine,
          ),
        ],
        // currentIndex: indexVal.value,
        currentIndex: _currentIndex.value,
        onTap: (int idx) => _onItemTapped(idx, context),
      ),
    );
  }

  void _onItemTapped(int index, BuildContext context) {
    _pageController.jumpToPage(index);
    setState(() {
      _currentIndex.value = index;
    });
  }
}

/// 主页
class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final SwiperControl swiperControl = const SwiperControl();
  final SwiperPagination swiperPagination = const SwiperPagination();
  List<Carousel> carouselList = [];
  List<Announcement> announcementList = [];

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  void _loadData() async {
    var carouselListData =
        await CarouselApi().list(PageForm(pageNum: 1, pageSize: 10));
    var announcementPage =
        await AnnouncementApi().page(PageForm(pageNum: 1, pageSize: 10));
    setState(() {
      carouselList.addAll(carouselListData);
      announcementList.addAll(announcementPage.list);
    });
  }

  // https://blog.csdn.net/qq_42362997/article/details/111208498
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return CustomScrollView(
      slivers: [
        SliverToBoxAdapter(
            child: ConstrainedBox(
                constraints: BoxConstraints.loose(Size(size.width - 20, 270.0)),
                child: carouselList.isEmpty
                    ? const Center(child: CircularProgressIndicator())
                    : Swiper(
                        onTap: (index) async {
                          var carousel = carouselList[index];
                          if (carousel.url == null) {
                            return;
                          }
                          if (await canLaunchUrlString(carousel.url!)) {
                            // await launchUrlString(carousel.url!);
                            context.push(carousel.url!);
                          }
                        },
                        itemBuilder: (BuildContext context, int index) {
                          var carousel = carouselList[index];
                          return CachedNetworkImage(
                            imageUrl: System.withDomain(carousel.pic),
                            errorWidget: (context, url, error) =>
                                Image.asset(Assets.novelCoverDefault),
                            placeholder: (context, url) => const Center(
                              child: CircularProgressIndicator(),
                            ),
                            fit: BoxFit.cover,
                          );
                        },
                        itemCount: carouselList.length,
                        autoplay: true,
                        autoplayDelay: 5000,
                        pagination: swiperPagination,
                        control: swiperControl,
                      ))),
        SliverToBoxAdapter(
          child: Card(
            child: Column(
              children: [
                GestureDetector(
                    onTap: () => context.pushNamed('announcementPage'),
                    child: Text(
                      S.of(context).announcement,
                      style: const TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    )),
                Divider(
                  color: Theme.of(context).primaryColor,
                  height: 20.0,
                  thickness: 2.0,
                  indent: 10.0,
                  endIndent: 10.0,
                ),
                ListView.builder(
                    shrinkWrap: true,
                    physics: const NeverScrollableScrollPhysics(),
                    padding: const EdgeInsets.only(left: 10, right: 10),
                    itemExtent: 60.0,
                    itemCount: announcementList.length,
                    itemBuilder: (_, index) {
                      return GestureDetector(
                          onTap: () => context.pushNamed('announcementDetail',
                                  params: {
                                    'announcementId':
                                        '${announcementList[index].id}'
                                  }),
                          child: Container(
                            decoration: index + 1 == announcementList.length
                                ? null
                                : BoxDecoration(
                                    border: Border(
                                        bottom: BorderSide(
                                            color: Colors.grey[400]!))),
                            child: AnnouncementItem(
                              title: announcementList[index].title,
                              dateTime: announcementList[index].createdAt,
                            ),
                          ));
                    })
              ],
            ),
          ),
        ),
      ],
    );
  }
}

/// 书架展示界面
class ShelfScreen extends StatefulWidget {
  const ShelfScreen({super.key});

  @override
  State<ShelfScreen> createState() => _ShelfScreenState();
}

class _ShelfScreenState extends State<ShelfScreen>
    with DoubleClickToScreenTopNotifier {
  late final _tabs = [
    Tab(text: S.of(context).novelAll),
    Tab(text: S.of(context).novelLight),
    Tab(text: S.of(context).novelOriginal),
    Tab(text: S.of(context).forumNovel),
    Tab(text: S.of(context).forumIndependent),
  ];
  late final _tabBarViews = [
    NovelListScreen(
      key: UniqueKey(),
      form: NovelPageForm(),
      formLoader: NovelApi().page,
      doubleClickToScreenTop: true,
    ),
    NovelListScreen(
      key: UniqueKey(),
      form: NovelPageForm(original: false),
      formLoader: NovelApi().page,
      doubleClickToScreenTop: true,
    ),
    NovelListScreen(
      key: UniqueKey(),
      form: NovelPageForm(original: true),
      formLoader: NovelApi().page,
      doubleClickToScreenTop: true,
    ),
    ForumListScreen(
      key: UniqueKey(),
      form: ForumPageForm(type: ForumType.novel),
      formLoader: ForumApi().page,
    ),
    ForumListScreen(
      key: UniqueKey(),
      form: ForumPageForm(type: ForumType.single),
      formLoader: ForumApi().page,
    ),
  ];

  // 参考 https://github.com/flutter/flutter/issues/17459#issuecomment-387984398
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: _tabs.length,
        child: Scaffold(
          appBar: AppBar(
            flexibleSpace: SafeArea(
                child: Column(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                TabBar(
                  tabs: _tabs,
                  isScrollable: true,
                  onTap: (index) =>
                      saveClick(_tabBarViews[index].key, DateTime.now()),
                )
              ],
            )),
          ),
          body: toTopNotifier(TabBarView(children: _tabBarViews)),
        ));
  }
}

/// 收藏界面
class CollectionScreen extends StatefulWidget {
  const CollectionScreen({Key? key}) : super(key: key);

  @override
  State<CollectionScreen> createState() => _CollectionScreenState();
}

class _CollectionScreenState extends State<CollectionScreen>
    with DoubleClickToScreenTopNotifier {
  late final _tabs = [
    Tab(text: S.of(context).novel),
    Tab(text: S.of(context).forum),
    Tab(text: S.of(context).post),
  ];
  late final _tabBarViews = [
    NovelListScreen(
      key: UniqueKey(),
      form: NovelPageForm(),
      formLoader: NovelApi().collectionPage,
      doubleClickToScreenTop: true,
    ),
    ForumListScreen(
      key: UniqueKey(),
      form: ForumPageForm(),
      formLoader: ForumApi().collectionPage,
    ),
    PostListScreen(
      key: UniqueKey(),
      form: ForumPostPageForm(),
      formLoader: ForumPostApi().collectionPage,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: _tabs.length,
        child: Scaffold(
          appBar: AppBar(
            flexibleSpace: SafeArea(
                child: Column(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                TabBar(
                  tabs: _tabs,
                  isScrollable: true,
                  onTap: (index) =>
                      saveClick(_tabBarViews[index].key, DateTime.now()),
                )
              ],
            )),
          ),
          body: toTopNotifier(TabBarView(children: _tabBarViews)),
        ));
  }
}
