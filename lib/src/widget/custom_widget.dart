import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../generated/l10n.dart';

typedef IndexedItemWidgetBuilder<T> = Widget Function(
    BuildContext context, int index, T item);

/// 缓存页面组件
/// 参考 https://book.flutterchina.club/chapter6/pageview.html#_6-7-1-pageview
class KeepAliveWrapper extends StatefulWidget {
  const KeepAliveWrapper({
    Key? key,
    this.keepAlive = true,
    required this.child,
  }) : super(key: key);
  final bool keepAlive;
  final Widget child;

  @override
  State<KeepAliveWrapper> createState() => _KeepAliveWrapperState();
}

class _KeepAliveWrapperState extends State<KeepAliveWrapper>
    with AutomaticKeepAliveClientMixin {
  @override
  Widget build(BuildContext context) {
    super.build(context);
    return widget.child;
  }

  @override
  void didUpdateWidget(covariant KeepAliveWrapper oldWidget) {
    if (oldWidget.keepAlive != widget.keepAlive) {
      // keepAlive 状态需要更新，实现在 AutomaticKeepAliveClientMixin 中
      updateKeepAlive();
    }
    super.didUpdateWidget(oldWidget);
  }

  @override
  bool get wantKeepAlive => widget.keepAlive;
}

/// 返回或主页按钮
class BackOrHomeButton extends StatelessWidget {
  const BackOrHomeButton({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return context.canPop()
        ? IconButton(
            icon: const Icon(Icons.arrow_back),
            onPressed: () {
              context.pop();
            },
            tooltip: MaterialLocalizations.of(context).backButtonTooltip,
          )
        : IconButton(
            icon: const Icon(Icons.home),
            onPressed: () {
              context.go('/');
            },
            tooltip: S.of(context).home,
          );
  }
}

/// 加载中界面
class LoadingScreen extends StatelessWidget {
  const LoadingScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: CircularProgressIndicator(),
      ),
    );
  }
}

/// 数据加载界面
abstract class DataLoadingState<T extends StatefulWidget> extends State<T> {
  bool loading = true;

  @override
  void initState() {
    super.initState();
    _initData();
  }

  void _initData() async {
    // 改为加载中
    await loadData();
    setState(() {
      loading = false;
    });
  }

  Future<void> loadData();

  /// 构建内容
  Widget body(BuildContext context);

  @override
  Widget build(BuildContext context) {
    return loading
        ? const Scaffold(
            body: Center(
              child: CircularProgressIndicator(),
            ),
          )
        : body(context);
  }
}

/// 数字下的文本
class TextUnderCount extends StatelessWidget {
  final int? count;
  final String? title;
  final GestureTapCallback? onTap;
  final double? countSize;
  final double? titleSize;

  const TextUnderCount(
      {Key? key,
      this.count,
      this.title,
      this.onTap,
      this.countSize,
      this.titleSize})
      : super(key: key);

  factory TextUnderCount.normal(
          int? count, String? title, GestureTapCallback? onTap) =>
      TextUnderCount(
        count: count,
        title: title,
        onTap: onTap,
        countSize: 20,
        titleSize: 10,
      );

  factory TextUnderCount.large(
          int? count, String? title, GestureTapCallback? onTap) =>
      TextUnderCount(
        count: count,
        title: title,
        onTap: onTap,
        countSize: 25,
        titleSize: 15,
      );

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Column(
        children: [
          Text(
            '${count ?? 0}',
            style: TextStyle(fontSize: countSize),
          ),
          Text(title ?? '', style: TextStyle(fontSize: titleSize)),
        ],
      ),
    );
  }
}
