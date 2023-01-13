// GENERATED CODE - DO NOT MODIFY BY HAND
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'intl/messages_all.dart';

// **************************************************************************
// Generator: Flutter Intl IDE plugin
// Made by Localizely
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, lines_longer_than_80_chars
// ignore_for_file: join_return_with_assignment, prefer_final_in_for_each
// ignore_for_file: avoid_redundant_argument_values, avoid_escaping_inner_quotes

class S {
  S();

  static S? _current;

  static S get current {
    assert(_current != null,
        'No instance of S was loaded. Try to initialize the S delegate before accessing S.current.');
    return _current!;
  }

  static const AppLocalizationDelegate delegate = AppLocalizationDelegate();

  static Future<S> load(Locale locale) {
    final name = (locale.countryCode?.isEmpty ?? false)
        ? locale.languageCode
        : locale.toString();
    final localeName = Intl.canonicalizedLocale(name);
    return initializeMessages(localeName).then((_) {
      Intl.defaultLocale = localeName;
      final instance = S();
      S._current = instance;

      return instance;
    });
  }

  static S of(BuildContext context) {
    final instance = S.maybeOf(context);
    assert(instance != null,
        'No instance of S present in the widget tree. Did you add S.delegate in localizationsDelegates?');
    return instance!;
  }

  static S? maybeOf(BuildContext context) {
    return Localizations.of<S>(context, S);
  }

  /// `Masiro`
  String get appTitle {
    return Intl.message(
      'Masiro',
      name: 'appTitle',
      desc: '',
      args: [],
    );
  }

  /// `Username`
  String get userName {
    return Intl.message(
      'Username',
      name: 'userName',
      desc: '',
      args: [],
    );
  }

  /// `Password`
  String get password {
    return Intl.message(
      'Password',
      name: 'password',
      desc: '',
      args: [],
    );
  }

  /// `log in`
  String get login {
    return Intl.message(
      'log in',
      name: 'login',
      desc: '',
      args: [],
    );
  }

  /// `sign out`
  String get signOut {
    return Intl.message(
      'sign out',
      name: 'signOut',
      desc: '',
      args: [],
    );
  }

  /// `settings`
  String get settings {
    return Intl.message(
      'settings',
      name: 'settings',
      desc: '',
      args: [],
    );
  }

  /// `Language`
  String get language {
    return Intl.message(
      'Language',
      name: 'language',
      desc: '',
      args: [],
    );
  }

  /// `English`
  String get english {
    return Intl.message(
      'English',
      name: 'english',
      desc: '',
      args: [],
    );
  }

  /// `Chinese`
  String get chinese {
    return Intl.message(
      'Chinese',
      name: 'chinese',
      desc: '',
      args: [],
    );
  }

  /// `username or password is empty`
  String get emptyUsernameOrPassword {
    return Intl.message(
      'username or password is empty',
      name: 'emptyUsernameOrPassword',
      desc: '',
      args: [],
    );
  }

  /// `sign in fail`
  String get signInFail {
    return Intl.message(
      'sign in fail',
      name: 'signInFail',
      desc: '',
      args: [],
    );
  }

  /// `sign in success`
  String get signInSuccess {
    return Intl.message(
      'sign in success',
      name: 'signInSuccess',
      desc: '',
      args: [],
    );
  }

  /// `Home`
  String get home {
    return Intl.message(
      'Home',
      name: 'home',
      desc: '',
      args: [],
    );
  }

  /// `Shelf`
  String get shelf {
    return Intl.message(
      'Shelf',
      name: 'shelf',
      desc: '',
      args: [],
    );
  }

  /// `Collect`
  String get collect {
    return Intl.message(
      'Collect',
      name: 'collect',
      desc: '',
      args: [],
    );
  }

  /// `Rank`
  String get rank {
    return Intl.message(
      'Rank',
      name: 'rank',
      desc: '',
      args: [],
    );
  }

  /// `Mine`
  String get mine {
    return Intl.message(
      'Mine',
      name: 'mine',
      desc: '',
      args: [],
    );
  }

  /// `His`
  String get his {
    return Intl.message(
      'His',
      name: 'his',
      desc: '',
      args: [],
    );
  }

  /// `All Novel`
  String get novelAll {
    return Intl.message(
      'All Novel',
      name: 'novelAll',
      desc: '',
      args: [],
    );
  }

  /// `Original Novel`
  String get novelOriginal {
    return Intl.message(
      'Original Novel',
      name: 'novelOriginal',
      desc: '',
      args: [],
    );
  }

  /// `Light Novel`
  String get novelLight {
    return Intl.message(
      'Light Novel',
      name: 'novelLight',
      desc: '',
      args: [],
    );
  }

  /// `Novel Forum`
  String get forumNovel {
    return Intl.message(
      'Novel Forum',
      name: 'forumNovel',
      desc: '',
      args: [],
    );
  }

  /// `Independent Forum`
  String get forumIndependent {
    return Intl.message(
      'Independent Forum',
      name: 'forumIndependent',
      desc: '',
      args: [],
    );
  }

  /// `Author`
  String get author {
    return Intl.message(
      'Author',
      name: 'author',
      desc: '',
      args: [],
    );
  }

  /// `Author: {author}`
  String authorFormat(Object author) {
    return Intl.message(
      'Author: $author',
      name: 'authorFormat',
      desc: '',
      args: [author],
    );
  }

  /// `Translator`
  String get translator {
    return Intl.message(
      'Translator',
      name: 'translator',
      desc: '',
      args: [],
    );
  }

  /// `Translator: {translator}`
  String translatorFormat(Object translator) {
    return Intl.message(
      'Translator: $translator',
      name: 'translatorFormat',
      desc: '',
      args: [translator],
    );
  }

  /// `Tag`
  String get tag {
    return Intl.message(
      'Tag',
      name: 'tag',
      desc: '',
      args: [],
    );
  }

  /// `Tag: {tag}`
  String tagFormat(Object tag) {
    return Intl.message(
      'Tag: $tag',
      name: 'tagFormat',
      desc: '',
      args: [tag],
    );
  }

  /// `Update Time`
  String get updateTime {
    return Intl.message(
      'Update Time',
      name: 'updateTime',
      desc: '',
      args: [],
    );
  }

  /// `Update Time: {updateTime}`
  String updateTimeFormat(Object updateTime) {
    return Intl.message(
      'Update Time: $updateTime',
      name: 'updateTimeFormat',
      desc: '',
      args: [updateTime],
    );
  }

  /// `Catalog`
  String get catalog {
    return Intl.message(
      'Catalog',
      name: 'catalog',
      desc: '',
      args: [],
    );
  }

  /// `Comments Section`
  String get commentsSection {
    return Intl.message(
      'Comments Section',
      name: 'commentsSection',
      desc: '',
      args: [],
    );
  }

  /// `Comments Detail`
  String get commentsDetail {
    return Intl.message(
      'Comments Detail',
      name: 'commentsDetail',
      desc: '',
      args: [],
    );
  }

  /// `Start to read`
  String get startToRead {
    return Intl.message(
      'Start to read',
      name: 'startToRead',
      desc: '',
      args: [],
    );
  }

  /// `Previous`
  String get previousChapter {
    return Intl.message(
      'Previous',
      name: 'previousChapter',
      desc: '',
      args: [],
    );
  }

  /// `Next`
  String get nextChapter {
    return Intl.message(
      'Next',
      name: 'nextChapter',
      desc: '',
      args: [],
    );
  }

  /// `Confirm`
  String get confirm {
    return Intl.message(
      'Confirm',
      name: 'confirm',
      desc: '',
      args: [],
    );
  }

  /// `Cancel`
  String get cancel {
    return Intl.message(
      'Cancel',
      name: 'cancel',
      desc: '',
      args: [],
    );
  }

  /// `Reset`
  String get reset {
    return Intl.message(
      'Reset',
      name: 'reset',
      desc: '',
      args: [],
    );
  }

  /// `Subscribe`
  String get subscribe {
    return Intl.message(
      'Subscribe',
      name: 'subscribe',
      desc: '',
      args: [],
    );
  }

  /// `Subscribe Cost`
  String get subscribeCost {
    return Intl.message(
      'Subscribe Cost',
      name: 'subscribeCost',
      desc: '',
      args: [],
    );
  }

  /// `Subscribe Cost: {subscribeCost} G`
  String subscribeCostFormat(Object subscribeCost) {
    return Intl.message(
      'Subscribe Cost: $subscribeCost G',
      name: 'subscribeCostFormat',
      desc: '',
      args: [subscribeCost],
    );
  }

  /// `Insufficient Balance`
  String get insufficientBalance {
    return Intl.message(
      'Insufficient Balance',
      name: 'insufficientBalance',
      desc: '',
      args: [],
    );
  }

  /// `Success`
  String get subscribeSuccess {
    return Intl.message(
      'Success',
      name: 'subscribeSuccess',
      desc: '',
      args: [],
    );
  }

  /// `Coin`
  String get coin {
    return Intl.message(
      'Coin',
      name: 'coin',
      desc: '',
      args: [],
    );
  }

  /// `Coin: {coin} G`
  String coinFormat(Object coin) {
    return Intl.message(
      'Coin: $coin G',
      name: 'coinFormat',
      desc: '',
      args: [coin],
    );
  }

  /// `Novel`
  String get novel {
    return Intl.message(
      'Novel',
      name: 'novel',
      desc: '',
      args: [],
    );
  }

  /// `Forum`
  String get forum {
    return Intl.message(
      'Forum',
      name: 'forum',
      desc: '',
      args: [],
    );
  }

  /// `Post`
  String get post {
    return Intl.message(
      'Post',
      name: 'post',
      desc: '',
      args: [],
    );
  }

  /// `Post: {postCount}`
  String postCount(Object postCount) {
    return Intl.message(
      'Post: $postCount',
      name: 'postCount',
      desc: '',
      args: [postCount],
    );
  }

  /// `Works`
  String get works {
    return Intl.message(
      'Works',
      name: 'works',
      desc: '',
      args: [],
    );
  }

  /// `Follow`
  String get follow {
    return Intl.message(
      'Follow',
      name: 'follow',
      desc: '',
      args: [],
    );
  }

  /// `Follow: {followCount}`
  String followCount(Object followCount) {
    return Intl.message(
      'Follow: $followCount',
      name: 'followCount',
      desc: '',
      args: [followCount],
    );
  }

  /// `Read`
  String get read {
    return Intl.message(
      'Read',
      name: 'read',
      desc: '',
      args: [],
    );
  }

  /// `Read: {readCount}`
  String readCount(Object readCount) {
    return Intl.message(
      'Read: $readCount',
      name: 'readCount',
      desc: '',
      args: [readCount],
    );
  }

  /// `Followed`
  String get followed {
    return Intl.message(
      'Followed',
      name: 'followed',
      desc: '',
      args: [],
    );
  }

  /// `Fans`
  String get fans {
    return Intl.message(
      'Fans',
      name: 'fans',
      desc: '',
      args: [],
    );
  }

  /// `Friends`
  String get friends {
    return Intl.message(
      'Friends',
      name: 'friends',
      desc: '',
      args: [],
    );
  }

  /// `All`
  String get all {
    return Intl.message(
      'All',
      name: 'all',
      desc: '',
      args: [],
    );
  }

  /// `Refined`
  String get refinement {
    return Intl.message(
      'Refined',
      name: 'refinement',
      desc: '',
      args: [],
    );
  }

  /// `Profile`
  String get profile {
    return Intl.message(
      'Profile',
      name: 'profile',
      desc: '',
      args: [],
    );
  }

  /// `check-in`
  String get checkIn {
    return Intl.message(
      'check-in',
      name: 'checkIn',
      desc: '',
      args: [],
    );
  }

  /// `checked-in`
  String get checkedIn {
    return Intl.message(
      'checked-in',
      name: 'checkedIn',
      desc: '',
      args: [],
    );
  }

  /// `Novel Status`
  String get novelStatus {
    return Intl.message(
      'Novel Status',
      name: 'novelStatus',
      desc: '',
      args: [],
    );
  }

  /// `Serial`
  String get serial {
    return Intl.message(
      'Serial',
      name: 'serial',
      desc: '',
      args: [],
    );
  }

  /// `Finish`
  String get finish {
    return Intl.message(
      'Finish',
      name: 'finish',
      desc: '',
      args: [],
    );
  }

  /// `novel name`
  String get searchNovelKeyWords {
    return Intl.message(
      'novel name',
      name: 'searchNovelKeyWords',
      desc: '',
      args: [],
    );
  }

  /// `forum name`
  String get searchForumKeyWords {
    return Intl.message(
      'forum name',
      name: 'searchForumKeyWords',
      desc: '',
      args: [],
    );
  }

  /// `[img]`
  String get imagePlaceholder {
    return Intl.message(
      '[img]',
      name: 'imagePlaceholder',
      desc: '',
      args: [],
    );
  }

  /// `Under Development`
  String get underDevelopment {
    return Intl.message(
      'Under Development',
      name: 'underDevelopment',
      desc: '',
      args: [],
    );
  }

  /// `No More Chapter`
  String get noMoreChapter {
    return Intl.message(
      'No More Chapter',
      name: 'noMoreChapter',
      desc: '',
      args: [],
    );
  }

  /// `Announcement`
  String get announcement {
    return Intl.message(
      'Announcement',
      name: 'announcement',
      desc: '',
      args: [],
    );
  }

  /// `Insufficient Level\nYour level is {userLv}\nChapter limit level is {limitLv}`
  String insufficientLevelPrompt(Object userLv, Object limitLv) {
    return Intl.message(
      'Insufficient Level\nYour level is $userLv\nChapter limit level is $limitLv',
      name: 'insufficientLevelPrompt',
      desc: '',
      args: [userLv, limitLv],
    );
  }

  /// `A total of {replyCount} replies`
  String totalXReplyCount(Object replyCount) {
    return Intl.message(
      'A total of $replyCount replies',
      name: 'totalXReplyCount',
      desc: '',
      args: [replyCount],
    );
  }

  /// `{userName} reply@{targetName}`
  String userReplyToTarget(Object userName, Object targetName) {
    return Intl.message(
      '$userName reply@$targetName',
      name: 'userReplyToTarget',
      desc: '',
      args: [userName, targetName],
    );
  }

  /// `{x} seconds ago`
  String xSecondsAgo(Object x) {
    return Intl.message(
      '$x seconds ago',
      name: 'xSecondsAgo',
      desc: '',
      args: [x],
    );
  }

  /// `{x} minute ago`
  String xMinuteAgo(Object x) {
    return Intl.message(
      '$x minute ago',
      name: 'xMinuteAgo',
      desc: '',
      args: [x],
    );
  }

  /// `{x} hour ago`
  String xHourAgo(Object x) {
    return Intl.message(
      '$x hour ago',
      name: 'xHourAgo',
      desc: '',
      args: [x],
    );
  }

  /// `{x} day ago`
  String xDayAgo(Object x) {
    return Intl.message(
      '$x day ago',
      name: 'xDayAgo',
      desc: '',
      args: [x],
    );
  }

  /// `{x} week ago`
  String xWeekAgo(Object x) {
    return Intl.message(
      '$x week ago',
      name: 'xWeekAgo',
      desc: '',
      args: [x],
    );
  }

  /// `{x} month ago`
  String xMonthAgo(Object x) {
    return Intl.message(
      '$x month ago',
      name: 'xMonthAgo',
      desc: '',
      args: [x],
    );
  }

  /// `{x} year ago`
  String xYearAgo(Object x) {
    return Intl.message(
      '$x year ago',
      name: 'xYearAgo',
      desc: '',
      args: [x],
    );
  }
}

class AppLocalizationDelegate extends LocalizationsDelegate<S> {
  const AppLocalizationDelegate();

  List<Locale> get supportedLocales {
    return const <Locale>[
      Locale.fromSubtags(languageCode: 'en'),
      Locale.fromSubtags(languageCode: 'zh'),
    ];
  }

  @override
  bool isSupported(Locale locale) => _isSupported(locale);
  @override
  Future<S> load(Locale locale) => S.load(locale);
  @override
  bool shouldReload(AppLocalizationDelegate old) => false;

  bool _isSupported(Locale locale) {
    for (var supportedLocale in supportedLocales) {
      if (supportedLocale.languageCode == locale.languageCode) {
        return true;
      }
    }
    return false;
  }
}
