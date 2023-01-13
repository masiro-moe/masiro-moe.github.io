import 'dart:ui';

import 'package:flutter/material.dart';

import 'app.dart';
import 'src/config/environment.dart';
import 'src/enum/environment_enum.dart';

void onErrorDetails(FlutterErrorDetails details) {}

void onError(Object obj, StackTrace stack) {}

void main() {
  EnvConfig.init(EnvConfig(
      env: Env.prod, domain: 'www.masiro.me', baseUrl: '/api', isHttps: true));
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
