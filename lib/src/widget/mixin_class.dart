import 'package:flutter/material.dart';
import 'package:infinite_scroll_pagination/infinite_scroll_pagination.dart';
import 'package:provider/provider.dart';

import '../http/form/common_form.dart';
import '../model/change_notifier.dart';
import '../model/common_model.dart';

/// 分页加载
/// <P>PageData
/// <F>From
mixin PageDataLoading<P, F extends PageForm> {
  final PagingController<int, P> _pagingController =
      PagingController(firstPageKey: 1);

  void addPageRequestListener() {
    _pagingController.addPageRequestListener((pageKey) {
      _fetchPage(pageKey);
    });
  }

  Future<void> pageRefresh() async {
    _pagingController.refresh();
  }

  Future<void> _fetchPage(int pageKey) async {
    try {
      pageForm.pageNum = pageKey;
      final pageRes = await loadData(pageForm);

      final isLastPage = pageRes.pages < pageKey;
      if (isLastPage) {
        _pagingController.appendLastPage(pageRes.list);
      } else {
        final nextPageKey = pageKey + 1;
        _pagingController.appendPage(pageRes.list, nextPageKey);
      }
    } catch (error) {
      _pagingController.error = error;
    }
  }

  Widget pageListView({
    required ItemWidgetBuilder<P> itemBuilder,
    ScrollController? scrollController,
    IndexedWidgetBuilder? separatorBuilder,
    EdgeInsetsGeometry? padding,
    double? itemExtent,
  }) =>
      PagedListView<int, P>.separated(
        scrollController: scrollController,
        pagingController: _pagingController,
        builderDelegate: PagedChildBuilderDelegate<P>(
          animateTransitions: true,
          itemBuilder: itemBuilder,
        ),
        separatorBuilder: separatorBuilder ?? _defaultSeparator,
        padding: padding,
        itemExtent: itemExtent,
      );

  Widget pageSliverListView({
    required ItemWidgetBuilder<P> itemBuilder,
    IndexedWidgetBuilder? separatorBuilder,
    double? itemExtent,
  }) =>
      PagedSliverList<int, P>.separated(
        pagingController: _pagingController,
        builderDelegate: PagedChildBuilderDelegate<P>(
          animateTransitions: true,
          itemBuilder: itemBuilder,
        ),
        separatorBuilder: separatorBuilder ?? _defaultSeparator,
        itemExtent: itemExtent,
      );

  /// 默认分行
  Widget _defaultSeparator(BuildContext context, int index) => Divider(
        thickness: 2.0,
        indent: 10.0,
        endIndent: 10.0,
        color: Colors.grey[200],
      );

  F get pageForm;

  Future<PageGenerics<P>> loadData(F pageForm);
}

/// 返回顶部悬浮按钮
mixin ToTopFloatingButton {
  final ValueNotifier<bool> _showToTopButton = ValueNotifier(false);

  /// 添加返回顶部监听
  void addToTopListener(
      BuildContext context, ScrollController scrollController) async {
    scrollController.addListener(() {
      // 滚动超过一屏
      _showToTopButton.value =
          scrollController.position.pixels > MediaQuery.of(context).size.height;
    });
  }

  /// 回到顶部按钮
  Widget toTopFloatingActionButton(ScrollController scrollController) {
    return ValueListenableBuilder(
        valueListenable: _showToTopButton,
        builder: (BuildContext context, bool value, Widget? child) {
          return value
              ? FloatingActionButton(
                  heroTag: 'ToTopFloatingActionButton',
                  onPressed: () => toTop(scrollController),
                  child: const Icon(Icons.arrow_upward_rounded),
                )
              : const SizedBox.shrink();
        });
  }

  void toTop(ScrollController scrollController) {
    scrollController.jumpTo(0.0);
  }
}

/// bool动作
mixin BoolAction {
  final ValueNotifier<bool> boolVal = ValueNotifier<bool>(false);

  initBoolAction(bool? data) {
    boolVal.value = data ?? false;
  }

  Future<void> voidReversalBool() async {
    if (blockOnTrue() && boolVal.value) {
      return;
    }
    if (blockOnFalse() && !boolVal.value) {
      return;
    }
    if (boolVal.value) {
      await onTrueVal();
    } else {
      await onFalseVal();
    }
    boolVal.value = !boolVal.value;
  }

  ValueListenableBuilder<bool> boolValBuild(ValueWidgetBuilder<bool> builder) {
    return ValueListenableBuilder<bool>(
      valueListenable: boolVal,
      builder: builder,
    );
  }

  bool blockOnTrue() => false;

  bool blockOnFalse() => false;

  Future<void> onFalseVal() async {}

  Future<void> onTrueVal() async {}
}

/// 双击返回顶部
mixin DoubleClickToScreenTopNotifier {
  final _toScreenTop = ToTopChangeNotifier();

  Widget toTopNotifier(Widget? child) {
    return ChangeNotifierProvider.value(
      value: _toScreenTop,
      child: child,
    );
  }

  void saveClick(Key? key, DateTime dateTime) {
    _toScreenTop.saveClick(key, dateTime);
  }
}

/// 双击返回顶部
mixin DoubleClickToScreenConsumer {
  void addToScreenListener(
    bool doubleClickToScreenTop,
    BuildContext context,
    Key? key,
    VoidCallback onToTop,
  ) {
    if (!doubleClickToScreenTop) {
      return;
    }
    var toListTop = context.read<ToTopChangeNotifier>();
    toListTop.addListener(() {
      if (toListTop.isToTop(key)) {
        onToTop();
      }
    });
  }
}
