import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../generated/l10n.dart';
import '../config/auth.dart';
import '../utils/logger.dart';
import '../utils/storage_util.dart';
import '../widget/current_locale.dart';
import '../widget/custom_widget.dart';

class SettingsCenterScreen extends StatefulWidget {
  const SettingsCenterScreen({Key? key}) : super(key: key);

  @override
  State<SettingsCenterScreen> createState() => _SettingsCenterScreenState();
}

class _SettingsCenterScreenState extends State<SettingsCenterScreen> {
  late Map<String, String> localeMap = {
    S.of(context).english: 'en',
    S.of(context).chinese: 'zh',
  };

  ValueNotifier<String> dropdownValue = ValueNotifier('');

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    var currentLocale = Provider.of<CurrentLocale>(context).value;
    localeMap.forEach((key, value) {
      if (value == currentLocale.languageCode) {
        dropdownValue.value = key;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: const BackOrHomeButton(),
        title: Text(S.of(context).settings),
      ),
      body: ListView(
        children: [
          Card(
            child: ListTile(
              title: Text(S.of(context).language),
              trailing: ValueListenableBuilder<String>(
                valueListenable: dropdownValue,
                builder: (ctx, value, child) {
                  return DropdownButton<String>(
                    value: dropdownValue.value,
                    icon: const Icon(Icons.arrow_downward),
                    elevation: 16,
                    onChanged: (String? value) {
                      var languageCode = localeMap[value]!;
                      LocalStorage.setString('languageCode', languageCode);
                      Provider.of<CurrentLocale>(ctx, listen: false).setLocale(
                          Locale.fromSubtags(languageCode: languageCode));
                    },
                    items: localeMap.keys
                        .map<DropdownMenuItem<String>>((String value) {
                      return DropdownMenuItem<String>(
                        value: value,
                        child: Text(value),
                      );
                    }).toList(),
                  );
                },
              ),
            ),
          ),
          Card(
            child: ListTile(title: Center(child: Text(S.of(context).signOut))),
          ),
        ],
      ),
    );
  }
}
