import 'dart:collection';

import 'package:flutter/widgets.dart';

class ToTopChangeNotifier with ChangeNotifier {
  final Queue<DateTime> _tapTime = Queue();
  Key? _key;

  void saveClick(Key? key, DateTime dateTime) {
    if (_key == key) {
      _tapTime.addLast(dateTime);
    } else if (_tapTime.isNotEmpty) {
      _tapTime.clear();
    }
    _key = key;
    notifyListeners();
  }

  bool isToTop(Key? key) {
    if (_key != key) {
      return false;
    }
    if (_tapTime.length < 2) {
      return false;
    }
    var first = _tapTime.removeLast();
    var second = _tapTime.removeLast();
    _tapTime.clear();
    // logger.finest('key:$key');
    // logger.finest('first:$first');
    // logger.finest('second:$second');
    // 两秒内
    return first.difference(second).inSeconds < 2;
  }
}
