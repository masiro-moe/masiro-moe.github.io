import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';

import '../enum/user_enum.dart';
import '../screen/announcement.dart';
import '../screen/error.dart';
import '../screen/forum.dart';
import '../screen/index.dart';
import '../screen/novel.dart';
import '../screen/settings.dart';
import '../screen/sign_in.dart';
import '../screen/user.dart';
import 'auth.dart';

final GlobalKey<NavigatorState> navigatorKey = GlobalKey<NavigatorState>();

class Routers {
  final UserAuth _auth = UserAuth();

  Future<String?> _guard(BuildContext context, GoRouterState state) async {
    final bool signedIn = await _auth.signedIn();
    final bool signingIn = state.subloc == '/sign_in';

    // Go to /sign_in if the user is not signed in
    if (!signedIn && !signingIn) {
      return '/sign_in';
    } else if (signedIn && signingIn) {
      // Go to /books if the user is signed in and tries to go to /signin.
      return '/index';
    }

    // no redirect
    return null;
  }

  late GoRouter router = GoRouter(
    navigatorKey: navigatorKey,
    routes: <RouteBase>[
      GoRoute(
        path: '/',
        redirect: (_, __) => '/index',
      ),
      GoRoute(
        path: '/sign_in',
        pageBuilder: (BuildContext context, GoRouterState state) =>
            _FadeTransitionPage(
          key: state.pageKey,
          child: SignInScreen(
            onSignIn: Provider.of<UserAuth>(context).login,
          ),
        ),
      ),
      GoRoute(
        path: '/settings',
        name: 'settings',
        builder: (_, GoRouterState state) => const SettingsCenterScreen(),
      ),
      GoRoute(
        path: '/index',
        pageBuilder: (BuildContext context, GoRouterState state) =>
            _FadeTransitionPage(child: const IndexPage()),
      ),
      GoRoute(
        path: '/announcement',
        name: 'announcementPage',
        builder: (_, GoRouterState state) => const AnnouncementListPage(),
      ),
      GoRoute(
        path: '/announcement/:announcementId',
        name: 'announcementDetail',
        builder: (_, GoRouterState state) =>
            AnnouncementDetailPage(int.parse(state.params['announcementId']!)),
      ),
      GoRoute(
          path: '/novel/:novelId',
          name: 'novel',
          builder: (BuildContext context, GoRouterState state) {
            return NovelDetailPage(int.parse(state.params['novelId']!));
          },
          routes: [
            GoRoute(
                path: 'chapter',
                name: 'novelChapter',
                builder: (BuildContext context, GoRouterState state) {
                  return NovelChapterPage(int.parse(state.params['novelId']!));
                }),
            GoRoute(
                path: 'comment/detail',
                name: 'novelCommentDetail',
                builder: (BuildContext context, GoRouterState state) {
                  return NovelCommentDetailPage(
                      int.parse(state.params['novelId']!),
                      int.parse(state.queryParams['novelCommentId']!));
                }),
            GoRoute(
                path: 'comment/page',
                name: 'novelCommentPage',
                builder: (BuildContext context, GoRouterState state) {
                  return NovelCommentListPage(
                      int.parse(state.params['novelId']!));
                }),
          ]),
      GoRoute(
          path: '/novel/content',
          name: 'novelContent',
          builder: (BuildContext context, GoRouterState state) {
            return NovelContentPage(int.parse(state.queryParams['chapterId']!));
          }),
      GoRoute(
        path: '/forum/:forumId',
        name: 'forum',
        builder: (BuildContext context, GoRouterState state) {
          return ForumDetailPage(int.parse(state.params['forumId']!));
        },
      ),
      GoRoute(
          path: '/forum/post/:postId',
          name: 'forumPost',
          builder: (BuildContext context, GoRouterState state) {
            var postId = state.params['postId'];
            return ForumPostDetailPage(int.parse(postId!));
          },
          routes: [
            GoRoute(
                path: 'comment/detail',
                name: 'forumPostCommentDetail',
                builder: (_, GoRouterState state) {
                  var postId = state.params['postId'];
                  var postCommentId =
                      state.queryParams['postCommentId'] as String;
                  return ForumPostCommentDetailPage(
                      int.parse(postId!), int.parse(postCommentId));
                })
          ]),
      GoRoute(
          path: '/user/:userId/friends',
          name: 'userFriends',
          builder: (BuildContext context, GoRouterState state) {
            return UserFriendPage(
              userId: int.parse(state.params['userId']!),
              type: UserFriendsType.parse(state.queryParams['type']!),
            );
          }),
      GoRoute(
          path: '/user/:userId/profile',
          name: 'userProfile',
          builder: (BuildContext context, GoRouterState state) {
            var userId = state.params['userId'];
            return UserProfilePage(int.parse(userId!));
          }),
      // 真白萌主站重定向
      // https://masiro.me/admin/novelView?novel_id=9
      GoRoute(
        path: '/admin/novelView',
        redirect: (_, state) => '/novel/${state.queryParams['novel_id']}',
      ),
      GoRoute(
        path: '/n:novelId',
        redirect: (_, state) => '/novel/${state.queryParams['novel_id']}',
      ),
      // // https://masiro.me/admin/novelApplyAudit
      // GoRoute(
      //   path: '/admin/novelApplyAudit',
      //   redirect: (_, state) => '/novel/${state.queryParams['novel_id']}',
      // ),
      // GoRoute(
      //   path: '/a:novelId',
      //   redirect: (_, state) => '/novel/${state.queryParams['novel_id']}',
      // ),
      // https://masiro.me/admin/novelReading?cid=9
      GoRoute(
        path: '/admin/novelReading',
        redirect: (_, state) => '/novel/content/${state.queryParams['cid']}',
      ),
      GoRoute(
        path: '/c:cid',
        redirect: (_, state) => '/novel/content/${state.queryParams['cid']}',
      ),
      // https://masiro.me/admin/forum?forum_id=34
      GoRoute(
        path: '/admin/forum',
        redirect: (_, state) => '/forum/${state.queryParams['forum_id']}',
      ),
      GoRoute(
        path: '/f:forum_id',
        redirect: (_, state) => '/forum/${state.queryParams['forum_id']}',
      ),
      // https://masiro.me/admin/post?post_id=12991
      GoRoute(
        path: '/admin/post',
        redirect: (_, state) => '/forum/post/${state.queryParams['post_id']}',
      ),
      GoRoute(
        path: '/p:post_id',
        redirect: (_, state) => '/forum/post/${state.queryParams['post_id']}',
      ),
      GoRoute(
        path: '/admin/userCenterShow',
        redirect: (_, state) => '/user/${state.queryParams['user_id']}/profile',
      ),
      GoRoute(
        path: '/u:user_id',
        redirect: (_, state) => '/user/${state.queryParams['user_id']}',
      ),
    ],
    errorBuilder: (_, __) => const PageNotFoundPage(),
    redirect: _guard,
    refreshListenable: _auth,
    debugLogDiagnostics: true,
  );
}

/// A page that fades in an out.
class _FadeTransitionPage extends CustomTransitionPage<void> {
  /// Creates a [_FadeTransitionPage].
  _FadeTransitionPage({
    LocalKey? key,
    required Widget child,
  }) : super(
            key: key,
            transitionsBuilder: (BuildContext context,
                    Animation<double> animation,
                    Animation<double> secondaryAnimation,
                    Widget child) =>
                FadeTransition(
                  opacity: animation.drive(_curveTween),
                  child: child,
                ),
            child: child);

  static final CurveTween _curveTween = CurveTween(curve: Curves.easeIn);
}
