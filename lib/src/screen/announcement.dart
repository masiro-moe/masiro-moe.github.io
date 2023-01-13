import 'package:flutter/material.dart';
import 'package:flutter_html/flutter_html.dart';
import 'package:go_router/go_router.dart';

import '../../generated/l10n.dart';
import '../http/api/announcement_api.dart';
import '../http/form/common_form.dart';
import '../http/model/announcement.dart';
import '../model/common_model.dart';
import '../utils/common_util.dart';
import '../widget/custom_widget.dart';

/// 公告详情界面
class AnnouncementDetailPage extends StatefulWidget {
  final int announcementId;

  const AnnouncementDetailPage(this.announcementId, {Key? key})
      : super(key: key);

  @override
  State<AnnouncementDetailPage> createState() => _AnnouncementDetailPageState();
}

class _AnnouncementDetailPageState extends State<AnnouncementDetailPage> {
  Announcement? announcement;

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  void _loadData() async {
    var announcement =
        await AnnouncementApi().detail(IdForm(id: widget.announcementId));
    setState(() {
      this.announcement = announcement;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: const BackOrHomeButton(),
        title: Text(announcement?.title ?? ''),
      ),
      body: SingleChildScrollView(
        child: Html(data: announcement?.content ?? ''),
      ),
    );
  }
}

/// 公告列表页面
class AnnouncementListPage extends StatefulWidget {
  const AnnouncementListPage({Key? key}) : super(key: key);

  @override
  State<AnnouncementListPage> createState() => _AnnouncementListPageState();
}

class _AnnouncementListPageState extends State<AnnouncementListPage> {
  PageGenerics<Announcement> page = PageGenerics();

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  void _loadData() async {
    var pageGenerics = await AnnouncementApi().page(PageForm());
    setState(() {
      page.update(pageGenerics);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: const BackOrHomeButton(),
        title: Text(S.of(context).announcement),
      ),
      body: ListView.builder(
          itemCount: page.list.length,
          itemBuilder: (_, index) {
            var data = page.list[index];
            return GestureDetector(
              onTap: () => context.pushNamed('announcementDetail',
                  params: {'announcementId': '${data.id}'}),
              child: Container(
                padding: const EdgeInsets.all(10),
                decoration: index + 1 == page.list.length
                    ? null
                    : BoxDecoration(
                        border: Border(
                            bottom: BorderSide(color: Colors.grey[400]!))),
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      AnnouncementItem(
                        title: data.title,
                        dateTime: data.createdAt,
                      ),
                      if (data.brief != null) ...[
                        const SizedBox(height: 20),
                        Text(
                          data.brief ?? '',
                          style: const TextStyle(color: Colors.grey),
                        )
                      ]
                    ]),
              ),
            );
          }),
    );
  }
}

class AnnouncementItem extends StatelessWidget {
  final String? title;
  final DateTime? dateTime;

  const AnnouncementItem({Key? key, this.title, this.dateTime})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
      Expanded(
          child: Text(
        title ?? '',
        style: const TextStyle(fontSize: 18),
        overflow: TextOverflow.ellipsis,
        maxLines: 2,
      )),
      Text(DateUtil.formatRecentAgo(dateTime)),
    ]);
  }
}
