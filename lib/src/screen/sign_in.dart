import 'package:bot_toast/bot_toast.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:quiver/strings.dart' as str;

import '../../generated/l10n.dart';
import '../http/form/user_form.dart';

/// 登录界面
class SignInScreen extends StatefulWidget {
  final AsyncValueSetter<UserLoginForm> onSignIn;

  const SignInScreen({Key? key, required this.onSignIn}) : super(key: key);

  @override
  State<SignInScreen> createState() => _SignInScreenState();
}

class _SignInScreenState extends State<SignInScreen> {
  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Card(
          child: Container(
            constraints: BoxConstraints.loose(const Size(600, 600)),
            padding: const EdgeInsets.all(8),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                TextField(
                  controller: _usernameController,
                  decoration:
                      InputDecoration(labelText: S.of(context).userName),
                ),
                TextField(
                  controller: _passwordController,
                  decoration:
                      InputDecoration(labelText: S.of(context).password),
                  obscureText: true,
                  onEditingComplete: _login,
                ),
                Padding(
                  padding: const EdgeInsets.all(16),
                  child: ElevatedButton(
                    onPressed: _login,
                    child: Text(S.of(context).login),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  void _login() async {
    var username = _usernameController.text;
    var password = _passwordController.text;
    if (str.isBlank(username) || str.isEmpty(password)) {
      BotToast.showText(text: S.of(context).emptyUsernameOrPassword);
      return;
    }
    var showLoading = BotToast.showLoading();
    try {
      await widget.onSignIn(UserLoginForm(
        username: username,
        password: password,
      ));
    } catch (e) {
      showLoading.call();
      return;
    }
    if (!mounted) return;
    showLoading.call();
    BotToast.showText(text: S.of(context).signInSuccess);
  }
}
