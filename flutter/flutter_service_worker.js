'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_68.part.js": "07c37efeb98b12934f0696a672a8614b",
"main.dart.js_86.part.js": "26fece19c8d83e839dd56627eb532929",
"main.dart.js_65.part.js": "4270ab8a04304d0fb88350e94b81bdaa",
"main.dart.js_78.part.js": "7c0a4a79451d4a7b49e03ab4cd07a5b8",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"main.dart.js_25.part.js": "7eaa743da8bdb6263f97e58034bd7d58",
"assets/assets/image/system/error.png": "501f691a5a68573d20450b43e4d408bd",
"assets/assets/image/system/logo.png": "cbb8e407a4049aa0386d0c03d89cc823",
"assets/assets/image/novel/cover_default.jpg": "50f974b716adc676b423b08bd691a051",
"assets/assets/image/user/header_default.jpg": "b9f53f41cc6a520563ce6ae72b2c21a9",
"assets/assets/image/smiley/25.png": "ecc25f593b968fab2b1a056b98c48836",
"assets/assets/image/smiley/35.png": "bdbca794070c2e19a03049232bc7b499",
"assets/assets/image/smiley/12.png": "c59383065afdaa3876c84cc92ef38678",
"assets/assets/image/smiley/13.png": "6b79d7288dfdf5ec98b21593e2918c36",
"assets/assets/image/smiley/43.png": "4dd0303c301698bea5f022d14e616598",
"assets/assets/image/smiley/16.png": "cd9486865812ccf5da1daeef59522e1b",
"assets/assets/image/smiley/18.png": "91cecf3e4e98cd3d3a766bcdeae2e37b",
"assets/assets/image/smiley/9.png": "982cc9814f65206b2f178b2f60fcf05d",
"assets/assets/image/smiley/8.png": "d8e89128df357a6bf571bdff1fa61ca0",
"assets/assets/image/smiley/15.png": "a740b88cc01570f6f3847d022acbdf6d",
"assets/assets/image/smiley/48.png": "d1c46e7d5f885f23116fffb3893027c5",
"assets/assets/image/smiley/46.png": "4bc6c4827d62ad63e921a3cdc30f28b1",
"assets/assets/image/smiley/22.png": "3e302ef38882bdafe40a39491fdec7fd",
"assets/assets/image/smiley/2.png": "439e32d773b5847a707a244cebeec520",
"assets/assets/image/smiley/29.png": "7bb30c5f4ac2283d8b61f4d52026793b",
"assets/assets/image/smiley/5.png": "919639b1527712ab8c5a7f7d66ecd8b4",
"assets/assets/image/smiley/33.png": "ea7316cb4d4b2a90b882ad21fe90cdae",
"assets/assets/image/smiley/31.png": "67f173516616a67311d6b3cb261e1458",
"assets/assets/image/smiley/23.png": "5f3f998fadf656d2a9c1828783fa1b4e",
"assets/assets/image/smiley/50.png": "489c93866ea3a934eee317bfcbc7bcd0",
"assets/assets/image/smiley/7.png": "a00e90943a7e83d95c6a656dec9fa3c8",
"assets/assets/image/smiley/32.png": "4f8a1bdec1a4576540b6af1b21be7c22",
"assets/assets/image/smiley/28.png": "861e1aa1a36f617efea7e11ef00aecdd",
"assets/assets/image/smiley/10.png": "9a8e1ac8c00fbbb1f07691911070ba9e",
"assets/assets/image/smiley/27.png": "ff051318e791e25283eb64241db911e6",
"assets/assets/image/smiley/17.png": "108d283e9702aa878f6f100ef6a187e3",
"assets/assets/image/smiley/21.png": "623d7dfaf0ea7fefc91a1fd8fed423a9",
"assets/assets/image/smiley/11.png": "d0bd514ba44db63e28d49cc1245e4abc",
"assets/assets/image/smiley/6.png": "3126f5b6298c6cfc6980e69915c58448",
"assets/assets/image/smiley/4.png": "17ebd5203e92a1fe9b5ca45f38f688e2",
"assets/assets/image/smiley/36.png": "78c44cbc9a24bb49d0da295a427966a0",
"assets/assets/image/smiley/30.png": "8435ccf09fbc022fdeaf873af23a1933",
"assets/assets/image/smiley/24.png": "8205dfbf407c2ddf7339eadc6d181186",
"assets/assets/image/smiley/14.png": "c1dbde12477d161bd757fc5c9a7308f1",
"assets/assets/image/smiley/1.png": "55f3faf3709f3e3de286468abf480d0d",
"assets/assets/image/smiley/19.png": "1c07a6e8e0998ccb1110ddc60a32bdd1",
"assets/assets/image/smiley/26.png": "b5c25b2a9f879efc45197b2460ac3ed6",
"assets/assets/image/smiley/47.png": "df29631827c00f343360de2a9b9044f5",
"assets/assets/image/smiley/49.png": "871e18a561743981abdf40f4fcbf4524",
"assets/assets/image/smiley/34.png": "14d8b10afe7841e33190682f6cf29c58",
"assets/assets/image/smiley/3.png": "3c989aa3d4c6181ab9038064715e3687",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/fonts/MaterialIcons-Regular.otf": "b5331541360260451dee8775dda5e6f3",
"assets/NOTICES": "72a659964a2c614b780a1a3849510d90",
"assets/FontManifest.json": "53875f0262dd9428ccea9618c4a0716d",
"assets/AssetManifest.bin": "c59eb04267abcf8934ef96faf6e6bf2e",
"assets/AssetManifest.json": "311dfece901ebf51e899a28d57221e3e",
"main.dart.js_14.part.js": "26c223c57c245c3b26f407cb12ece950",
"index.html": "023aeda703bff2c2a4e2c1923b938fda",
"/": "023aeda703bff2c2a4e2c1923b938fda",
"main.dart.js_1.part.js": "4901f96397d33488d9b4c62bd0feaa43",
"main.dart.js_81.part.js": "5ca77868fe080f320202666356918c99",
"main.dart.js_40.part.js": "a1a5658b6f706cdf28639575527bd524",
"main.dart.js_46.part.js": "88f6f3da3c19bf827ffc9fbf999bb341",
"main.dart.js_34.part.js": "92f2311ee67d7ba35890ac4203e08e22",
"main.dart.js_50.part.js": "ba556569bdd2d4fe5eb86e21d52c9a66",
"main.dart.js_16.part.js": "27865bf61ae3371b2ce276f6a8c481d9",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_27.part.js": "85f97c9aaac2a2ee72705a67d2721088",
"main.dart.js_29.part.js": "5f93ffa0a60caf0d85cfacc62643a3f3",
"main.dart.js_28.part.js": "5c51d603245cd9b53a9b2f2335caba3b",
"main.dart.js_90.part.js": "7d2e74b5ba136d5701e4d1f17c1aa406",
"main.dart.js_92.part.js": "43265f28dddf6135afd3230e9f469dcb",
"main.dart.js_72.part.js": "5334d4a4e71739e58bcad190f1669a88",
"main.dart.js_39.part.js": "26b57d4b3584eca3b48fd2e965e60451",
"main.dart.js_97.part.js": "d9802fe49f30d92f45ed0d325fb99226",
"main.dart.js_54.part.js": "3f1e86511f7daeea02b52b7198233e8a",
"main.dart.js_47.part.js": "64df97c6a313fc826e3c95957dd16be6",
"main.dart.js_42.part.js": "8ae3649668378bf704abe6357392bd32",
"main.dart.js_88.part.js": "87dd2d32adc4f60168cf0c1588212267",
"main.dart.js_76.part.js": "2799a242079c512da6984ed55f50f94e",
"main.dart.js_94.part.js": "70700228e450792324e086c6f5ecb72e",
"main.dart.js_64.part.js": "7df285cf0cec9f81aaca8f534d581e85",
"main.dart.js_41.part.js": "6e9ca132498ae9d7eeb80af28f01bd1a",
"main.dart.js_45.part.js": "540a5fe574562877f2183f7267ce5366",
"main.dart.js_70.part.js": "b4ff99b9c07c5f3b1d273108f0375716",
"main.dart.js_98.part.js": "20761292fdae671122e9ef05bd3a3056",
"main.dart.js_53.part.js": "d601ef03ef7c7539f412eb0c0cd91cee",
"main.dart.js_63.part.js": "71306d0f272e2ab0c036cc95d5934cbb",
"main.dart.js_32.part.js": "7a8d7657bda8e873b2a0b5fe39f210d2",
"main.dart.js_11.part.js": "7646b7ca1a0eaa5deb14c58389819bd0",
"main.dart.js_4.part.js": "2471075f1175130338d206f92324327a",
"main.dart.js_44.part.js": "453a0c0526ad5762110334f34c1e5a0d",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_12.part.js": "799b4b9243ee1c2113c756567d6824d6",
"main.dart.js_61.part.js": "9c8b2b1b23db9ac7ab531e02e8b804bb",
"main.dart.js_24.part.js": "7b925d7a7c3ec620ed3e4ea6e526c1a4",
"main.dart.js_6.part.js": "68f6312f500adc78e8cd2b3ebac35f41",
"main.dart.js_21.part.js": "bbf5f1ba5515f17dbffbc7141f709c41",
"main.dart.js_79.part.js": "df9937200fac9e51cb68ffc6ea0ffcad",
"main.dart.js_96.part.js": "ceee7f5255d130aa670cba55551d816e",
"main.dart.js_87.part.js": "17091d5e961118e651020e45cd4f133c",
"main.dart.js_84.part.js": "e8dd99e8d48f075d5f3a319a7ade97d5",
"main.dart.js_20.part.js": "f34c50067ce7ba168efafed795208b80",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"main.dart.js_73.part.js": "1cd96230e0d00c9a377cd5db6cf0c3f9",
"main.dart.js_60.part.js": "481cb6fb214f4101dbf01ecaf85fb18e",
"main.dart.js_89.part.js": "e64ea99319c9d9e709ef0b22013d5dcb",
"main.dart.js_57.part.js": "4a42cfcbc64ff1521749b266b4f69bab",
"main.dart.js_52.part.js": "656a11e04b1a9e1c8fe09d12450d7f00",
"main.dart.js_31.part.js": "301ede97d4bc9e4bda4aa462813d1736",
"main.dart.js_62.part.js": "2d9426748d95dbd9bd3b5a38d5173327",
"main.dart.js_17.part.js": "e7eccd9e6bf5d0ee1b1f038e1322ac71",
"main.dart.js_93.part.js": "929d0b12aef3932c10ce2d872dcc355d",
"main.dart.js_48.part.js": "b08552bd2163cc7b406db4646c323d2f",
"main.dart.js_5.part.js": "453892ec080a52068f0f02a668733c5c",
"main.dart.js_58.part.js": "f5df5dcad82964465252bbab2ae90da7",
"main.dart.js_59.part.js": "414edec12022b6c6b68d2217b3d4900a",
"main.dart.js_18.part.js": "95495eb9035a5098c7c707b53d9c022a",
"main.dart.js_22.part.js": "c1b70f9dfcd00268882928c6ed7cd547",
"main.dart.js_95.part.js": "7707773529fe4c2261c564df88f76721",
"main.dart.js_2.part.js": "2b88cc9180e577b72dfe6b12ca6ab726",
"main.dart.js_80.part.js": "dba2ca6f6b173648a31699ebaf56ef73",
"main.dart.js_56.part.js": "2f8b7f0df4d5ad60b24a7174dd687aea",
"main.dart.js_91.part.js": "9b4e8584ce25269dba474c1ee13798f0",
"main.dart.js_71.part.js": "f452e683873294ab6c6665cda08da45a",
"main.dart.js_51.part.js": "4a3218d41c6c9816b0bb811565bafde6",
"main.dart.js_66.part.js": "96793c7f0215f1a70a8c6e1b1dcf5afc",
"main.dart.js_13.part.js": "911701edf1ad04ac4c2def885d7c921d",
"main.dart.js_15.part.js": "776076d552ed26776b5db2a20174aa6f",
"main.dart.js_36.part.js": "c289934bb9d0c33c3035cae7489b4fd2",
"main.dart.js_82.part.js": "accd599609fe0cc97d00edb7f05007d0",
"main.dart.js_33.part.js": "1f3100b6dfc7b30b1a84ad48a1e5e880",
"main.dart.js_55.part.js": "425e40ab8d04734f4908967b9573118f",
"main.dart.js_8.part.js": "0535513b8a0cf5b9d83179b96b3b351e",
"main.dart.js_83.part.js": "2e0843dadcadfa4c5964c804cf2132db",
"main.dart.js_99.part.js": "cf459718c677a90803d2da5278df0e92",
"main.dart.js_19.part.js": "c2aea6ccee0520633cf0287eba68fb5d",
"main.dart.js_85.part.js": "07a1abb42403b267837c9868529d964c",
"main.dart.js_67.part.js": "ce042e25646c90367c8fa8e7e1519f8b",
"main.dart.js_69.part.js": "82d1afff2f16193045aa0302fdeddc9e",
"main.dart.js_9.part.js": "bb9472436996887e1b7f2374a1f620dd",
"main.dart.js_75.part.js": "6e20e2b728cfb673b6115a526c1ed877",
"main.dart.js": "c2fe7a26df287dab557e53c3ac4127bd",
"main.dart.js_49.part.js": "b0c54f13dd8e839334bda8131fb3e62e",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_30.part.js": "7d6421711d205ae5f450437248651bfc",
"main.dart.js_3.part.js": "dc703a0d914028247baac05d1dac77bb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
