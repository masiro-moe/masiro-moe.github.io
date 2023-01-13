// DO NOT EDIT. This is code generated via package:intl/generate_localized.dart
// This is a library that provides messages for a zh locale. All the
// messages from the main program should be duplicated here with the same
// function name.

// Ignore issues from commonly used lints in this file.
// ignore_for_file:unnecessary_brace_in_string_interps, unnecessary_new
// ignore_for_file:prefer_single_quotes,comment_references, directives_ordering
// ignore_for_file:annotate_overrides,prefer_generic_function_type_aliases
// ignore_for_file:unused_import, file_names, avoid_escaping_inner_quotes
// ignore_for_file:unnecessary_string_interpolations, unnecessary_string_escapes

import 'package:intl/intl.dart';
import 'package:intl/message_lookup_by_library.dart';

final messages = new MessageLookup();

typedef String MessageIfAbsent(String messageStr, List<dynamic> args);

class MessageLookup extends MessageLookupByLibrary {
  String get localeName => 'zh';

  static String m0(author) => "作者：${author}";

  static String m1(coin) => "真白币：${coin} G";

  static String m2(followCount) => "关注：${followCount}";

  static String m3(userLv, limitLv) =>
      "等级过低\n你的当前等级是 ${userLv}\n章节等级限制为 ${limitLv}";

  static String m4(postCount) => "帖子：${postCount}";

  static String m5(readCount) => "阅读：${readCount}";

  static String m6(subscribeCost) => "订阅费用：${subscribeCost} G";

  static String m7(tag) => "标签：${tag}";

  static String m8(replyCount) => "共${replyCount}条回复";

  static String m9(translator) => "翻译：${translator}";

  static String m10(updateTime) => "更新时间：${updateTime}";

  static String m11(userName, targetName) => "${userName} 回复@${targetName}";

  static String m12(x) => "${x} 天前";

  static String m13(x) => "${x} 小时";

  static String m14(x) => "${x} 分钟";

  static String m15(x) => "${x} 月前";

  static String m16(x) => "${x} 秒前";

  static String m17(x) => "${x} 周前";

  static String m18(x) => "${x} 年前";

  final messages = _notInlinedMessages(_notInlinedMessages);
  static Map<String, Function> _notInlinedMessages(_) => <String, Function>{
        "all": MessageLookupByLibrary.simpleMessage("全部"),
        "announcement": MessageLookupByLibrary.simpleMessage("公告"),
        "appTitle": MessageLookupByLibrary.simpleMessage("真白萌"),
        "author": MessageLookupByLibrary.simpleMessage("作者"),
        "authorFormat": m0,
        "cancel": MessageLookupByLibrary.simpleMessage("取消"),
        "catalog": MessageLookupByLibrary.simpleMessage("目录"),
        "checkIn": MessageLookupByLibrary.simpleMessage("签到"),
        "checkedIn": MessageLookupByLibrary.simpleMessage("已签到"),
        "chinese": MessageLookupByLibrary.simpleMessage("中文"),
        "coin": MessageLookupByLibrary.simpleMessage("真白币"),
        "coinFormat": m1,
        "collect": MessageLookupByLibrary.simpleMessage("收藏"),
        "commentsDetail": MessageLookupByLibrary.simpleMessage("评论详情"),
        "commentsSection": MessageLookupByLibrary.simpleMessage("评论区"),
        "confirm": MessageLookupByLibrary.simpleMessage("确定"),
        "emptyUsernameOrPassword":
            MessageLookupByLibrary.simpleMessage("用户名或密码为空"),
        "english": MessageLookupByLibrary.simpleMessage("英语"),
        "fans": MessageLookupByLibrary.simpleMessage("粉丝"),
        "finish": MessageLookupByLibrary.simpleMessage("已完结"),
        "follow": MessageLookupByLibrary.simpleMessage("关注"),
        "followCount": m2,
        "followed": MessageLookupByLibrary.simpleMessage("已关注"),
        "forum": MessageLookupByLibrary.simpleMessage("论坛"),
        "forumIndependent": MessageLookupByLibrary.simpleMessage("独立论坛"),
        "forumNovel": MessageLookupByLibrary.simpleMessage("小说论坛"),
        "friends": MessageLookupByLibrary.simpleMessage("朋友"),
        "his": MessageLookupByLibrary.simpleMessage("他的"),
        "home": MessageLookupByLibrary.simpleMessage("首页"),
        "imagePlaceholder": MessageLookupByLibrary.simpleMessage("[图片]"),
        "insufficientBalance": MessageLookupByLibrary.simpleMessage("余额不足"),
        "insufficientLevelPrompt": m3,
        "language": MessageLookupByLibrary.simpleMessage("语言"),
        "login": MessageLookupByLibrary.simpleMessage("登录"),
        "mine": MessageLookupByLibrary.simpleMessage("我的"),
        "nextChapter": MessageLookupByLibrary.simpleMessage("下一章"),
        "noMoreChapter": MessageLookupByLibrary.simpleMessage("没有更多章节"),
        "novel": MessageLookupByLibrary.simpleMessage("小说"),
        "novelAll": MessageLookupByLibrary.simpleMessage("全部小说"),
        "novelLight": MessageLookupByLibrary.simpleMessage("日轻小说"),
        "novelOriginal": MessageLookupByLibrary.simpleMessage("原创小说"),
        "novelStatus": MessageLookupByLibrary.simpleMessage("小说状态"),
        "password": MessageLookupByLibrary.simpleMessage("密码"),
        "post": MessageLookupByLibrary.simpleMessage("帖子"),
        "postCount": m4,
        "previousChapter": MessageLookupByLibrary.simpleMessage("上一章"),
        "profile": MessageLookupByLibrary.simpleMessage("空间"),
        "rank": MessageLookupByLibrary.simpleMessage("排行"),
        "read": MessageLookupByLibrary.simpleMessage("阅读"),
        "readCount": m5,
        "refinement": MessageLookupByLibrary.simpleMessage("精选"),
        "reset": MessageLookupByLibrary.simpleMessage("重置"),
        "searchForumKeyWords": MessageLookupByLibrary.simpleMessage("论坛名称关键词"),
        "searchNovelKeyWords": MessageLookupByLibrary.simpleMessage("小说名称关键词"),
        "serial": MessageLookupByLibrary.simpleMessage("连载中"),
        "settings": MessageLookupByLibrary.simpleMessage("设置"),
        "shelf": MessageLookupByLibrary.simpleMessage("书架"),
        "signInFail": MessageLookupByLibrary.simpleMessage("登录失败"),
        "signInSuccess": MessageLookupByLibrary.simpleMessage("登录成功"),
        "signOut": MessageLookupByLibrary.simpleMessage("退出登录"),
        "startToRead": MessageLookupByLibrary.simpleMessage("开始阅读"),
        "subscribe": MessageLookupByLibrary.simpleMessage("订阅"),
        "subscribeCost": MessageLookupByLibrary.simpleMessage("订阅费用"),
        "subscribeCostFormat": m6,
        "subscribeSuccess": MessageLookupByLibrary.simpleMessage("订阅成功"),
        "tag": MessageLookupByLibrary.simpleMessage("标签"),
        "tagFormat": m7,
        "totalXReplyCount": m8,
        "translator": MessageLookupByLibrary.simpleMessage("翻译"),
        "translatorFormat": m9,
        "underDevelopment": MessageLookupByLibrary.simpleMessage("正在开发中"),
        "updateTime": MessageLookupByLibrary.simpleMessage("更新时间"),
        "updateTimeFormat": m10,
        "userName": MessageLookupByLibrary.simpleMessage("用户名"),
        "userReplyToTarget": m11,
        "works": MessageLookupByLibrary.simpleMessage("作品"),
        "xDayAgo": m12,
        "xHourAgo": m13,
        "xMinuteAgo": m14,
        "xMonthAgo": m15,
        "xSecondsAgo": m16,
        "xWeekAgo": m17,
        "xYearAgo": m18
      };
}
