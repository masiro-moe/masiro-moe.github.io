import 'package:flutter/material.dart';

/// SnackBar工具类
class SnackBarUtils {
  /// 私有
  SnackBarUtils._();

  /// 移除已有并创建新SnackBar
  static removeAndShow(BuildContext context, String content) {
    ScaffoldMessenger.of(context)
      ..removeCurrentSnackBar()
      ..showSnackBar(SnackBar(content: Text(content)));
  }
}

class DialogUtils{
  /// 加载
  static loadingShow(BuildContext context) {
    showDialog(
        barrierDismissible: false,
        context: context,
        builder: (ctx) {
          return const Center(
            child: CircularProgressIndicator(),
            // child: Column(
            //   mainAxisSize: MainAxisSize.min,
            //   children: <Widget>[
            //     // 模糊进度条(会执行一个旋转动画)
            //     CircularProgressIndicator(
            //       backgroundColor: Colors.grey[200],
            //       valueColor:
            //           AlwaysStoppedAnimation(Colors.blue),
            //     ),
            //   ],
            // ),
          );
        });
  }

}