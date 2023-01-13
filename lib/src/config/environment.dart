import '../enum/environment_enum.dart';

/// 环境配置
class EnvConfig {
  final Env env;
  final String domain;
  final String baseUrl;
  final bool isHttps;

  EnvConfig({
    required this.env,
    required this.domain,
    this.baseUrl = '',
    required this.isHttps,
  });

  static late EnvConfig _instance;

  factory EnvConfig.instance() => _instance;

  /// 初始化环境
  static void init(EnvConfig conf) {
    _instance = conf;
  }

  String uri(uri) => baseUrl + uri;
}
