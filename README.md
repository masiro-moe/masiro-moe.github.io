# app

Masiro Flutter project.

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://docs.flutter.dev/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://docs.flutter.dev/cookbook)

For help getting started with Flutter development, view the
[online documentation](https://docs.flutter.dev/), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

# 相关依赖

1. [json_serializable](https://pub.flutter-io.cn/packages/json_serializable)：根据dart对象文件生成json相关方法
   > flutter pub run build_runner build // 一次性生成代码
   > 
   > flutter pub run build_runner watch // 持续性生成代码
   >

# IDEA推荐插件

1. [Dart](https://plugins.jetbrains.com/plugin/6351-dart): Dart支持
1. [Flutter](https://plugins.jetbrains.com/plugin/6351-dart): Flutter支持
1. [Flutter Intl](https://plugins.jetbrains.com/plugin/13666-flutter-intl): Flutter intl自动化
1. [FlutterAssetAutoCompletion](https://plugins.jetbrains.com/plugin/13971-flutterassetautocompletion): assets目录相关支持
1. [FlutterAssetsGenerator](https://plugins.jetbrains.com/plugin/15427-flutterassetsgenerator): assets目录相关支持
1. [FlutterJsonToDart](https://plugins.jetbrains.com/plugin/19409-flutterjsontodart): 把json转为dart对象，自动调用`flutter pub run build_runner build`