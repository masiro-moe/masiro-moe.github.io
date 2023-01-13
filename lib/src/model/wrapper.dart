import 'package:flutter/material.dart';

class SelectWrapper<T> {
  ValueNotifier<bool> selected = ValueNotifier(false);
  T data;

  SelectWrapper(this.data);
}

class TreeWrapper<D, T> {
  D data;
  List<T> children;

  TreeWrapper(this.data, this.children);
}

enum IncludeOrExcludeState {
  /// 未选中
  non(color: Colors.blue),

  /// 包含
  include(color: Colors.orange),

  /// 排除
  exclude(color: Colors.grey),
  ;

  final Color color;

  const IncludeOrExcludeState({required this.color});
}

class IncludeOrExcludeWrapper<T> {
  ValueNotifier<IncludeOrExcludeState> state =
      ValueNotifier(IncludeOrExcludeState.non);
  T data;

  IncludeOrExcludeWrapper(this.data);

  void toNextState(IncludeOrExcludeState newState) {
    switch (newState) {
      case IncludeOrExcludeState.non:
        state.value = IncludeOrExcludeState.include;
        break;
      case IncludeOrExcludeState.include:
        state.value = IncludeOrExcludeState.exclude;
        break;
      case IncludeOrExcludeState.exclude:
        state.value = IncludeOrExcludeState.non;
        break;
    }
  }

  void reset() {
    state.value = IncludeOrExcludeState.non;
  }
}
