import 'package:intl/intl.dart';

import '../../generated/l10n.dart';
import 'logger.dart';

/// 时间工具类
class DateUtil {
  static const _minuteSeconds = 60;
  static const _hourMinutes = 60;
  static const _dayHours = 24;
  static const _weekDays = 7;
  static const _monthDays = 30;
  static const _yearDays = 365;

  /// 私有
  DateUtil._();

  static const normDatetimePattern = "yyyy-MM-dd HH:mm:ss";
  static final normDatetimeFormat = DateFormat(DateUtil.normDatetimePattern);

  /// 时间默认格式化 yyyy-MM-dd HH:mm:ss
  static defaultFormat(DateTime? dateTime) {
    return dateTime == null ? '' : normDatetimeFormat.format(dateTime);
  }

  /// 时间格式化 XX之前
  static formatRecentAgo(DateTime? dateTime) {
    if (dateTime == null) {
      return '';
    }
    var now = DateTime.now();
    var difference = now.difference(dateTime);
    var inDays = difference.inDays;
    if (inDays > _yearDays) return S.current.xYearAgo(inDays ~/ _yearDays);
    if (inDays > _monthDays) return S.current.xMonthAgo(inDays ~/ _monthDays);
    if (inDays > _weekDays) return S.current.xWeekAgo(inDays ~/ _weekDays);
    if (difference.inHours > _dayHours) return S.current.xDayAgo(inDays);
    if (difference.inMinutes > _hourMinutes) return S.current.xHourAgo(difference.inHours);
    if (difference.inSeconds > _minuteSeconds) return S.current.xMinuteAgo(difference.inMinutes);
    return S.current.xSecondsAgo(difference.inSeconds);
  }

  /// 时间转格式
  static dateTimeFormat(DateFormat? dateFormat, DateTime? dateTime) {
    return dateFormat == null || dateTime == null
        ? ''
        : dateFormat.format(dateTime);
  }

  /// UTC毫秒转日期
  static fromMillisecondsSinceEpoch(int? millisecondsSinceEpoch) {
    return millisecondsSinceEpoch == null
        ? DateTime.utc(1970)
        : DateTime.fromMillisecondsSinceEpoch(millisecondsSinceEpoch);
  }

  /// UTC毫秒转格式化日期
  static millisecondsSinceEpochToString(int? millisecondsSinceEpoch) {
    return millisecondsSinceEpoch == null
        ? ''
        : normDatetimeFormat.format(
            DateTime.fromMillisecondsSinceEpoch(millisecondsSinceEpoch));
  }

  /// 格式化日期转UTC毫秒
  static stringToMillisecondsSinceEpoch(String? dateTime) {
    return dateTime == null
        ? 0
        : normDatetimeFormat.parse(dateTime).millisecondsSinceEpoch;
  }

  /// 日期日期转UTC毫秒
  static toMillisecondsSinceEpoch(DateTime? dateTime) {
    return dateTime == null ? 0 : dateTime.millisecondsSinceEpoch;
  }
}
