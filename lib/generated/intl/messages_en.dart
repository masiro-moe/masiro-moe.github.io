// DO NOT EDIT. This is code generated via package:intl/generate_localized.dart
// This is a library that provides messages for a en locale. All the
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
  String get localeName => 'en';

  static String m0(author) => "Author: ${author}";

  static String m1(coin) => "Coin: ${coin} G";

  static String m2(followCount) => "Follow: ${followCount}";

  static String m3(userLv, limitLv) =>
      "Insufficient Level\nYour level is ${userLv}\nChapter limit level is ${limitLv}";

  static String m4(postCount) => "Post: ${postCount}";

  static String m5(readCount) => "Read: ${readCount}";

  static String m6(subscribeCost) => "Subscribe Cost: ${subscribeCost} G";

  static String m7(tag) => "Tag: ${tag}";

  static String m8(replyCount) => "A total of ${replyCount} replies";

  static String m9(translator) => "Translator: ${translator}";

  static String m10(updateTime) => "Update Time: ${updateTime}";

  static String m11(userName, targetName) => "${userName} reply@${targetName}";

  static String m12(x) => "${x} day ago";

  static String m13(x) => "${x} hour ago";

  static String m14(x) => "${x} minute ago";

  static String m15(x) => "${x} month ago";

  static String m16(x) => "${x} seconds ago";

  static String m17(x) => "${x} week ago";

  static String m18(x) => "${x} year ago";

  final messages = _notInlinedMessages(_notInlinedMessages);
  static Map<String, Function> _notInlinedMessages(_) => <String, Function>{
        "all": MessageLookupByLibrary.simpleMessage("All"),
        "announcement": MessageLookupByLibrary.simpleMessage("Announcement"),
        "appTitle": MessageLookupByLibrary.simpleMessage("Masiro"),
        "author": MessageLookupByLibrary.simpleMessage("Author"),
        "authorFormat": m0,
        "cancel": MessageLookupByLibrary.simpleMessage("Cancel"),
        "catalog": MessageLookupByLibrary.simpleMessage("Catalog"),
        "checkIn": MessageLookupByLibrary.simpleMessage("check-in"),
        "checkedIn": MessageLookupByLibrary.simpleMessage("checked-in"),
        "chinese": MessageLookupByLibrary.simpleMessage("Chinese"),
        "coin": MessageLookupByLibrary.simpleMessage("Coin"),
        "coinFormat": m1,
        "collect": MessageLookupByLibrary.simpleMessage("Collect"),
        "commentsDetail":
            MessageLookupByLibrary.simpleMessage("Comments Detail"),
        "commentsSection":
            MessageLookupByLibrary.simpleMessage("Comments Section"),
        "confirm": MessageLookupByLibrary.simpleMessage("Confirm"),
        "emptyUsernameOrPassword": MessageLookupByLibrary.simpleMessage(
            "username or password is empty"),
        "english": MessageLookupByLibrary.simpleMessage("English"),
        "fans": MessageLookupByLibrary.simpleMessage("Fans"),
        "finish": MessageLookupByLibrary.simpleMessage("Finish"),
        "follow": MessageLookupByLibrary.simpleMessage("Follow"),
        "followCount": m2,
        "followed": MessageLookupByLibrary.simpleMessage("Followed"),
        "forum": MessageLookupByLibrary.simpleMessage("Forum"),
        "forumIndependent":
            MessageLookupByLibrary.simpleMessage("Independent Forum"),
        "forumNovel": MessageLookupByLibrary.simpleMessage("Novel Forum"),
        "friends": MessageLookupByLibrary.simpleMessage("Friends"),
        "his": MessageLookupByLibrary.simpleMessage("His"),
        "home": MessageLookupByLibrary.simpleMessage("Home"),
        "imagePlaceholder": MessageLookupByLibrary.simpleMessage("[img]"),
        "insufficientBalance":
            MessageLookupByLibrary.simpleMessage("Insufficient Balance"),
        "insufficientLevelPrompt": m3,
        "language": MessageLookupByLibrary.simpleMessage("Language"),
        "login": MessageLookupByLibrary.simpleMessage("log in"),
        "mine": MessageLookupByLibrary.simpleMessage("Mine"),
        "nextChapter": MessageLookupByLibrary.simpleMessage("Next"),
        "noMoreChapter":
            MessageLookupByLibrary.simpleMessage("No More Chapter"),
        "novel": MessageLookupByLibrary.simpleMessage("Novel"),
        "novelAll": MessageLookupByLibrary.simpleMessage("All Novel"),
        "novelLight": MessageLookupByLibrary.simpleMessage("Light Novel"),
        "novelOriginal": MessageLookupByLibrary.simpleMessage("Original Novel"),
        "novelStatus": MessageLookupByLibrary.simpleMessage("Novel Status"),
        "password": MessageLookupByLibrary.simpleMessage("Password"),
        "post": MessageLookupByLibrary.simpleMessage("Post"),
        "postCount": m4,
        "previousChapter": MessageLookupByLibrary.simpleMessage("Previous"),
        "profile": MessageLookupByLibrary.simpleMessage("Profile"),
        "rank": MessageLookupByLibrary.simpleMessage("Rank"),
        "read": MessageLookupByLibrary.simpleMessage("Read"),
        "readCount": m5,
        "refinement": MessageLookupByLibrary.simpleMessage("Refined"),
        "reset": MessageLookupByLibrary.simpleMessage("Reset"),
        "searchForumKeyWords":
            MessageLookupByLibrary.simpleMessage("forum name"),
        "searchNovelKeyWords":
            MessageLookupByLibrary.simpleMessage("novel name"),
        "serial": MessageLookupByLibrary.simpleMessage("Serial"),
        "settings": MessageLookupByLibrary.simpleMessage("settings"),
        "shelf": MessageLookupByLibrary.simpleMessage("Shelf"),
        "signInFail": MessageLookupByLibrary.simpleMessage("sign in fail"),
        "signInSuccess":
            MessageLookupByLibrary.simpleMessage("sign in success"),
        "signOut": MessageLookupByLibrary.simpleMessage("sign out"),
        "startToRead": MessageLookupByLibrary.simpleMessage("Start to read"),
        "subscribe": MessageLookupByLibrary.simpleMessage("Subscribe"),
        "subscribeCost": MessageLookupByLibrary.simpleMessage("Subscribe Cost"),
        "subscribeCostFormat": m6,
        "subscribeSuccess": MessageLookupByLibrary.simpleMessage("Success"),
        "tag": MessageLookupByLibrary.simpleMessage("Tag"),
        "tagFormat": m7,
        "totalXReplyCount": m8,
        "translator": MessageLookupByLibrary.simpleMessage("Translator"),
        "translatorFormat": m9,
        "underDevelopment":
            MessageLookupByLibrary.simpleMessage("Under Development"),
        "updateTime": MessageLookupByLibrary.simpleMessage("Update Time"),
        "updateTimeFormat": m10,
        "userName": MessageLookupByLibrary.simpleMessage("Username"),
        "userReplyToTarget": m11,
        "works": MessageLookupByLibrary.simpleMessage("Works"),
        "xDayAgo": m12,
        "xHourAgo": m13,
        "xMinuteAgo": m14,
        "xMonthAgo": m15,
        "xSecondsAgo": m16,
        "xWeekAgo": m17,
        "xYearAgo": m18
      };
}
