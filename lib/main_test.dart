import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:simple_logger/simple_logger.dart';

import 'app.dart';
import 'src/config/environment.dart';
import 'src/enum/environment_enum.dart';
import 'src/utils/logger.dart';

void onErrorDetails(FlutterErrorDetails details) {}

void onError(Object obj, StackTrace stack) {}

void main() {
  logger.setLevel(Level.INFO);
  EnvConfig.init(EnvConfig(
      env: Env.test,
      domain: 'masiro.cofedream.ml',
      baseUrl: '/api',
      isHttps: true));
  FlutterError.onError = (FlutterErrorDetails details) {
    FlutterError.presentError(details);
    onErrorDetails(details); //上报
  };
  PlatformDispatcher.instance.onError = (error, stack) {
    onError(error, stack);
    return true;
  };
  runApp(const MasiroApp());
}
