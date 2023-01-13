import 'dart:ui';

import 'package:bot_toast/bot_toast.dart';
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:provider/provider.dart';

import 'generated/l10n.dart';
import 'src/config/auth.dart';
import 'src/config/router.dart';
import 'src/screen/error.dart';
import 'src/utils/storage_util.dart';
import 'src/widget/current_locale.dart';

final botToastBuilder = BotToastInit();

/// 真白APP
class MasiroApp extends StatelessWidget {
  const MasiroApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider<UserAuth>(create: (_) => UserAuth()),
        ChangeNotifierProvider<CurrentLocale>(create: (_) => CurrentLocale())
      ],
      child: const Application(),
    );
  }
}

class Application extends StatefulWidget {
  const Application({Key? key}) : super(key: key);

  @override
  State<Application> createState() => _ApplicationState();
}

// 参考 https://www.cnblogs.com/ldlx-mars/p/15013932.html
class _ApplicationState extends State<Application> {
  @override
  void initState() {
    super.initState();
    _init();
  }

  void _init() async {
    var languageCode = (await LocalStorage.getString('languageCode'))!;
    if (!mounted) return;
    Provider.of<CurrentLocale>(context, listen: false)
        .setLocale(Locale.fromSubtags(languageCode: languageCode));
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<CurrentLocale>(
      builder: (context, currentLocale, child) {
        return MaterialApp.router(
          builder: (context, widget) {
            ErrorWidget.builder = (errorDetails) => const ServerErrorPage();
            widget = botToastBuilder(context, widget);
            return widget;
          },
          routerConfig: Routers().router,
          scrollBehavior: _AppScrollBehavior(),
          localizationsDelegates: const [
            S.delegate,
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
            GlobalCupertinoLocalizations.delegate,
          ],
          locale: currentLocale.value,
          supportedLocales: S.delegate.supportedLocales,
          onGenerateTitle: (titleContext) => S.of(titleContext).appTitle,
        );
      },
    );
  }

  @override
  void dispose() {
    super.dispose();
  }
}

/// 解决web上无法滑动的问题
class _AppScrollBehavior extends MaterialScrollBehavior {
  @override
  Set<PointerDeviceKind> get dragDevices => {
        PointerDeviceKind.mouse,
        ...<PointerDeviceKind>{
          PointerDeviceKind.touch,
          PointerDeviceKind.stylus,
          PointerDeviceKind.invertedStylus,
          PointerDeviceKind.trackpad,
          // The VoiceAccess sends pointer events with unknown type when scrolling
          // scrollables.
          PointerDeviceKind.unknown,
        }
      };
}
