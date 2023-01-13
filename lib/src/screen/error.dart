import 'package:flutter/material.dart';

import '../../generated/assets.dart';

/// 404异常页面
class PageNotFoundPage extends StatelessWidget {
  const PageNotFoundPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const ErrorScreen(code: '4 0 4', desc: '非常抱歉，您访问的页面事与愿违，未能成功加载。');
  }
}

/// 500异常页面
class ServerErrorPage extends StatelessWidget {
  const ServerErrorPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const ErrorScreen(code: '5 0 0', desc: '非常抱歉，您访问的页面事与愿违，未能成功加载。');
  }
}

class ErrorScreen extends StatelessWidget {
  final String code;
  final String desc;

  const ErrorScreen({Key? key, required this.code, required this.desc})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: Colors.black,
        width: double.infinity,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            Text(
              code,
              style: const TextStyle(
                  color: Colors.white, fontSize: 100, fontFamily: 'MSR'),
            ),
            Text(
              desc,
              style: const TextStyle(color: Colors.white, fontSize: 18),
            ),
            Flexible(child: Image.asset(Assets.systemError)),
          ],
        ),
      ),
    );
  }
}
