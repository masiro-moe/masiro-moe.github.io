'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_64.part.js": "e1af37067a9180f05e8c4dacc00290f6",
"main.dart.js_17.part.js": "1280b3e7853ed207415a31d81dcaee42",
"main.dart.js_94.part.js": "c8b9eeb24ffbd527cbc7930b0a5929dd",
"main.dart.js_16.part.js": "daa3734ef2a5b4cd7ba224face20a139",
"main.dart.js_85.part.js": "262af362d1cb544d1de2ed8ac53766d8",
"main.dart.js_82.part.js": "db2624bdd59a5a69d2e7f31548144eb1",
"main.dart.js_18.part.js": "c52895f4c606d8d1e82a1211b33a0377",
"main.dart.js_31.part.js": "17c43471d32d4aa28b642ad089ae68fc",
"main.dart.js_14.part.js": "c24015f98d195f41429d702bc2d7ced6",
"main.dart.js_79.part.js": "80574a81d971ce90bd078532a2e6b810",
"main.dart.js_37.part.js": "da81c2bafaba5b07bddac347d96bbce9",
"main.dart.js_8.part.js": "7f458c2fedbc950df9684b1e02e59ddd",
"main.dart.js_102.part.js": "c2b36e68998b6e225391a8d907472ddc",
"main.dart.js_36.part.js": "fd9b85ef39241aca4ce28dbe2e3b443d",
"main.dart.js_21.part.js": "24b9f88191a03ea118684b23997b4368",
"main.dart.js_52.part.js": "b93dbedcf9923ce63e61cafadab34bff",
"main.dart.js_34.part.js": "95838b83d25f39464f2ee8fcf7602f8b",
"main.dart.js_59.part.js": "e855f1ad1e5f346a82dbaed192c30009",
"main.dart.js_65.part.js": "3a3015507e11cb558905acabad14b29c",
"main.dart.js_87.part.js": "66e04fc136f1c8a0014e0619dff09d1a",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"main.dart.js_28.part.js": "824d8865b341fac0f019aa2a370429a4",
"main.dart.js_29.part.js": "219ec0b946e468c636ac88f5713c811a",
"main.dart.js_91.part.js": "474d3da4b6a8339b837d724e2f693fda",
"main.dart.js_45.part.js": "4607e9395af39713068d734968313eba",
"main.dart.js_20.part.js": "d2f76dbfce84abc5eb131428983f50ca",
"main.dart.js_43.part.js": "9f3deb9bf6c682a2acb1631b837ea6e0",
"main.dart.js_9.part.js": "8d4fe1f1ed37aa47ef73d796a115902c",
"main.dart.js_6.part.js": "425004293ea5362c487b7eecd2d666ef",
"main.dart.js_80.part.js": "a9463e117ff6ad32e77ae611f2559a0e",
"main.dart.js_57.part.js": "bd4521d98c330112c20ee594f647523d",
"main.dart.js_7.part.js": "062a7000d766319559f89e2cf8dd2235",
"main.dart.js_32.part.js": "bbcb89e797bf9caaee98c8f30bb56c35",
"main.dart.js_98.part.js": "9c00c6c285143491e74bbea43621b42c",
"main.dart.js_23.part.js": "3d3a7131fb5f8d6c1513340d760e1c9d",
"index.html": "de49136eba1c6fc07bd4164291a8dfa2",
"/": "de49136eba1c6fc07bd4164291a8dfa2",
"main.dart.js_38.part.js": "50e7faa98b4840577c8a0ddfcb7d9913",
"main.dart.js_40.part.js": "3998d783628f1c12cc58692496878dc9",
"main.dart.js_76.part.js": "d211036b646245f240f5195a584001ff",
"main.dart.js_95.part.js": "dd1b4958375200d5b3ec317c8e7fa4f5",
"main.dart.js_63.part.js": "e9d62b5a1f1d0b469630d9a9f2516b61",
"main.dart.js": "af3c598765b75bb60103db5b7e269644",
"main.dart.js_19.part.js": "932814e32908329bc1717a549f552b52",
"main.dart.js_84.part.js": "4c36306ce359d5bb0f81ecdb269dc946",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_1.part.js": "28e39382586a7856bd94a041e07e1b82",
"main.dart.js_42.part.js": "d539d7ae6547f9c55c25643cc668610b",
"main.dart.js_49.part.js": "a9c2270e7b359cd640889741976a9d59",
"main.dart.js_25.part.js": "c9a3a5bf0f7254f3438f668ac2dfcbe4",
"main.dart.js_56.part.js": "14c36a0a1a94b7bcd9b02d59be93f8b3",
"main.dart.js_15.part.js": "c59ff0c60af049f154230e76b9e4aa63",
"main.dart.js_33.part.js": "fb7cd42e1200d9dedbdf5ce1c6463aef",
"main.dart.js_89.part.js": "41d365badff9af9d27577d47fd9e10bf",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_68.part.js": "f7aaf623e0d3853b3fcdcb82d66f24af",
"main.dart.js_48.part.js": "e06b29f32d8e75f3ee148cbbdacd660b",
"main.dart.js_26.part.js": "9ae7e8f7e33e3e4b2eda4b4c76529629",
"main.dart.js_22.part.js": "5db636af3915a2fbd6318d588c3f5dff",
"main.dart.js_13.part.js": "69316d94543b8ecf6354887560d319ea",
"main.dart.js_92.part.js": "933176407890f3b96bd5a0761aeb2815",
"main.dart.js_51.part.js": "79dc138572b55a6c1d5d3f10a31dc7e9",
"main.dart.js_78.part.js": "2281c7b35a6946e6d1cccb4921de9223",
"main.dart.js_10.part.js": "d4896eb9ed1368122d54394049bfc2e3",
"main.dart.js_90.part.js": "70aae45b7ab762b0996e5e4a89af4ba6",
"main.dart.js_86.part.js": "2e919d1d247d14a84c4edf94475e3c3e",
"main.dart.js_11.part.js": "fff3b7fb9b9332650ddd20170b95a20e",
"main.dart.js_73.part.js": "71d94b1d0ce0a2f04d3e8e42250ba69e",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"main.dart.js_97.part.js": "4cded224603979271d3d768668c0a6e7",
"main.dart.js_67.part.js": "e69f13b8458e761dc4e186402fdcf4b8",
"main.dart.js_3.part.js": "9bcdad025ab7918a0a1436354d87637d",
"main.dart.js_4.part.js": "302bde8b596958b56435620666e3d418",
"main.dart.js_66.part.js": "ed59757bfc0909b549b068896604eb53",
"main.dart.js_96.part.js": "ac52762b366632a45a22b2e123641edb",
"main.dart.js_74.part.js": "d0cc0bc5e12d939ad521b7b0a759fd81",
"assets/FontManifest.json": "53875f0262dd9428ccea9618c4a0716d",
"assets/NOTICES": "0f3b208fc0423b507134ab1533564284",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/image/user/header_default.jpg": "b9f53f41cc6a520563ce6ae72b2c21a9",
"assets/assets/image/system/logo.png": "cbb8e407a4049aa0386d0c03d89cc823",
"assets/assets/image/system/error.png": "501f691a5a68573d20450b43e4d408bd",
"assets/assets/image/novel/cover_default.jpg": "50f974b716adc676b423b08bd691a051",
"assets/assets/image/smiley/15.png": "a740b88cc01570f6f3847d022acbdf6d",
"assets/assets/image/smiley/3.png": "3c989aa3d4c6181ab9038064715e3687",
"assets/assets/image/smiley/21.png": "623d7dfaf0ea7fefc91a1fd8fed423a9",
"assets/assets/image/smiley/22.png": "3e302ef38882bdafe40a39491fdec7fd",
"assets/assets/image/smiley/17.png": "108d283e9702aa878f6f100ef6a187e3",
"assets/assets/image/smiley/27.png": "ff051318e791e25283eb64241db911e6",
"assets/assets/image/smiley/26.png": "b5c25b2a9f879efc45197b2460ac3ed6",
"assets/assets/image/smiley/19.png": "1c07a6e8e0998ccb1110ddc60a32bdd1",
"assets/assets/image/smiley/12.png": "c59383065afdaa3876c84cc92ef38678",
"assets/assets/image/smiley/8.png": "d8e89128df357a6bf571bdff1fa61ca0",
"assets/assets/image/smiley/13.png": "6b79d7288dfdf5ec98b21593e2918c36",
"assets/assets/image/smiley/35.png": "bdbca794070c2e19a03049232bc7b499",
"assets/assets/image/smiley/48.png": "d1c46e7d5f885f23116fffb3893027c5",
"assets/assets/image/smiley/7.png": "a00e90943a7e83d95c6a656dec9fa3c8",
"assets/assets/image/smiley/34.png": "14d8b10afe7841e33190682f6cf29c58",
"assets/assets/image/smiley/47.png": "df29631827c00f343360de2a9b9044f5",
"assets/assets/image/smiley/1.png": "55f3faf3709f3e3de286468abf480d0d",
"assets/assets/image/smiley/14.png": "c1dbde12477d161bd757fc5c9a7308f1",
"assets/assets/image/smiley/2.png": "439e32d773b5847a707a244cebeec520",
"assets/assets/image/smiley/9.png": "982cc9814f65206b2f178b2f60fcf05d",
"assets/assets/image/smiley/11.png": "d0bd514ba44db63e28d49cc1245e4abc",
"assets/assets/image/smiley/16.png": "cd9486865812ccf5da1daeef59522e1b",
"assets/assets/image/smiley/10.png": "9a8e1ac8c00fbbb1f07691911070ba9e",
"assets/assets/image/smiley/30.png": "8435ccf09fbc022fdeaf873af23a1933",
"assets/assets/image/smiley/23.png": "5f3f998fadf656d2a9c1828783fa1b4e",
"assets/assets/image/smiley/36.png": "78c44cbc9a24bb49d0da295a427966a0",
"assets/assets/image/smiley/46.png": "4bc6c4827d62ad63e921a3cdc30f28b1",
"assets/assets/image/smiley/24.png": "8205dfbf407c2ddf7339eadc6d181186",
"assets/assets/image/smiley/5.png": "919639b1527712ab8c5a7f7d66ecd8b4",
"assets/assets/image/smiley/31.png": "67f173516616a67311d6b3cb261e1458",
"assets/assets/image/smiley/28.png": "861e1aa1a36f617efea7e11ef00aecdd",
"assets/assets/image/smiley/50.png": "489c93866ea3a934eee317bfcbc7bcd0",
"assets/assets/image/smiley/29.png": "7bb30c5f4ac2283d8b61f4d52026793b",
"assets/assets/image/smiley/33.png": "ea7316cb4d4b2a90b882ad21fe90cdae",
"assets/assets/image/smiley/18.png": "91cecf3e4e98cd3d3a766bcdeae2e37b",
"assets/assets/image/smiley/43.png": "4dd0303c301698bea5f022d14e616598",
"assets/assets/image/smiley/4.png": "17ebd5203e92a1fe9b5ca45f38f688e2",
"assets/assets/image/smiley/49.png": "871e18a561743981abdf40f4fcbf4524",
"assets/assets/image/smiley/25.png": "ecc25f593b968fab2b1a056b98c48836",
"assets/assets/image/smiley/32.png": "4f8a1bdec1a4576540b6af1b21be7c22",
"assets/assets/image/smiley/6.png": "3126f5b6298c6cfc6980e69915c58448",
"assets/AssetManifest.json": "311dfece901ebf51e899a28d57221e3e",
"main.dart.js_55.part.js": "db31fe381301753aab07eced8b70dce6",
"main.dart.js_103.part.js": "08ddf50e7c8b585c9ebb0160b071601c",
"main.dart.js_62.part.js": "ed01297f0892de90d0763fde4fcebdd1",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"main.dart.js_2.part.js": "5d4067685cdba9d2fa4472903abcd30c",
"main.dart.js_93.part.js": "06ff7ddc109898a041a07e762bec608a",
"main.dart.js_88.part.js": "75e429d25fa1194ad41686b8b4119b13",
"main.dart.js_44.part.js": "1ef9707d042c5174fc260d7c898d9544",
"main.dart.js_46.part.js": "a5746334e8380d6b90368f4929292edc",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_104.part.js": "8e1636aa79d68d2ca2cbe5de3663424f",
"main.dart.js_47.part.js": "f77066e2638953ac134cf2804d3b7e64",
"main.dart.js_100.part.js": "be54c68620471add5f7b31404f6be7bd",
"main.dart.js_99.part.js": "15fc58b8f233cfe09cd940f867e2322a",
"main.dart.js_35.part.js": "83ec5fda8eb76bf900963d6516aecdea",
"main.dart.js_41.part.js": "bd5badb5ba4d58242b1585767ddc1c9c",
"main.dart.js_81.part.js": "c7b8ffbb206075f8427afdaf85f7aed1",
"main.dart.js_75.part.js": "dd799d500aaa3099c4ce6d3f21970462",
"main.dart.js_101.part.js": "45219fff7d5eaf1495f9164ef5c76518",
"main.dart.js_39.part.js": "9aacc8ae02b68bfc5f4d27d318641b08"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
