import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:simple_logger/simple_logger.dart';

import 'app.dart';
import 'src/config/environment.dart';
import 'src/enum/environment_enum.dart';
import 'src/utils/logger.dart';
import 'src/utils/platform_util.dart';

void main() {
  logger.setLevel(
    Level.FINEST,
    includeCallerInfo: true,
  );
  var domain = '127.0.0.1:10701';
  if (PlatformUtils.isAndroid) {
    domain = '10.0.2.2:10701';
    // }else if(Platform.isIOS){
    // }else if(Platform.isFuchsia){
    // }else if(Platform.isWindows){
    // }else if(Platform.isMacOS){
    // }else if(Platform.isLinux){
  }
  logger.finest('domain:$domain');
  EnvConfig.init(EnvConfig(env: Env.local, domain: domain, isHttps: false));

  FlutterError.onError = (FlutterErrorDetails details) {
    FlutterError.presentError(details);
  };
  PlatformDispatcher.instance.onError = (error, stack) {
    return true;
  };
  runApp(const MasiroApp());
}
