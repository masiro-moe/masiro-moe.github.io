class System {
  System._();

  static const String _domain = 'https://masiro.me';

  /// 用域名包裹地址
  static String withDomain(String? uri) {
    return uri == null ? '' : _domain + uri;
  }
}
