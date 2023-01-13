// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'carousel.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Carousel _$CarouselFromJson(Map<String, dynamic> json) => Carousel(
      id: json['id'] as int?,
      title: json['title'] as String?,
      brief: json['brief'] as String?,
      pic: json['pic'] as String?,
      mpic: json['mpic'] as String?,
      url: json['url'] as String?,
      open: json['open'] as bool?,
      rank: json['rank'] as int?,
      creator: json['creator'] as int?,
      createdAt: DateUtil.fromMillisecondsSinceEpoch(json['createdAt'] as int?),
      updatedAt: DateUtil.fromMillisecondsSinceEpoch(json['updatedAt'] as int?),
    );

Map<String, dynamic> _$CarouselToJson(Carousel instance) => <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'brief': instance.brief,
      'pic': instance.pic,
      'mpic': instance.mpic,
      'url': instance.url,
      'open': instance.open,
      'rank': instance.rank,
      'creator': instance.creator,
      'createdAt': DateUtil.toMillisecondsSinceEpoch(instance.createdAt),
      'updatedAt': DateUtil.toMillisecondsSinceEpoch(instance.updatedAt),
    };
