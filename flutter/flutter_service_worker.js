'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_64.part.js": "716b370e1f37b0e6bf46346cf343b07e",
"main.dart.js_17.part.js": "a02ea7558df8f23d6d35f63cf71454fc",
"main.dart.js_58.part.js": "70fa7e59aeb3312dc8cb2559d2a8f012",
"main.dart.js_110.part.js": "27bd6b55ab8e4a5a172fc2285e0a0893",
"main.dart.js_109.part.js": "d42caafdc6b400d4d11b8658729dfae2",
"main.dart.js_94.part.js": "7e8104a184cea3620773c4d018271907",
"main.dart.js_16.part.js": "48af95f6cb3af863b40946eaafcc0f87",
"main.dart.js_85.part.js": "f3bf176df9de0ea9d7d1b6aae4544e39",
"main.dart.js_82.part.js": "933a27a0d9f12bf97a39cf8335fd61bf",
"main.dart.js_18.part.js": "a10ae89915c916ea5c3346579038bc13",
"main.dart.js_31.part.js": "5df485ce3cb93f25d174ad016313fe0e",
"main.dart.js_105.part.js": "1bd55d29be6d98a5e86c140c3000dcaf",
"main.dart.js_79.part.js": "665fb91f9f0dcbbb05c0099c1b2bfb35",
"main.dart.js_8.part.js": "aa390b9c9ede54af6579218e87799ebe",
"main.dart.js_102.part.js": "0a45852f51dbdcfb665f39e2528ed5af",
"main.dart.js_113.part.js": "1764b0f094c1d9a0c2a05bbdf0f46288",
"main.dart.js_36.part.js": "6a8ce1a89ca0078aa7862cfd45c04ae3",
"main.dart.js_21.part.js": "9f19bbe45ac7ab914b19c9351a7741a3",
"main.dart.js_52.part.js": "f165b64c724b9561b0c22f44164ad679",
"main.dart.js_34.part.js": "8666c29a5784e678a150117fbd0f5bf7",
"main.dart.js_108.part.js": "7eda26a4af25828b97ebfa8670f2de07",
"main.dart.js_65.part.js": "39cdcd4803758b88a8f018fdbcb14195",
"main.dart.js_87.part.js": "bc31bb6b53b831fe1d2bb47cd16ffad3",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"main.dart.js_29.part.js": "e77b7140feb823c5576ed1e1c78acf64",
"main.dart.js_91.part.js": "6c4d1fc4de1b7beec5df98fad59eace8",
"main.dart.js_45.part.js": "ed1b457e1106deab57324277f0b8ddce",
"main.dart.js_20.part.js": "816aa23a8a6c2ce8a130a30a6d0bc017",
"main.dart.js_30.part.js": "af80b70150c114d1baa1dd5bbb719584",
"main.dart.js_9.part.js": "c40a28829124a8d9fe73b8b432336934",
"main.dart.js_6.part.js": "6f36995c738d473ae0dba9d413d84c91",
"main.dart.js_77.part.js": "852ebc075c41a4c7358cde3480ee7692",
"main.dart.js_53.part.js": "40886b32972d4f7952a8cb194202588b",
"main.dart.js_80.part.js": "4baf033bc9fb0c49fe0a20badd1c7ed3",
"main.dart.js_57.part.js": "0cd669e91a44079fddf585b48bd35f11",
"main.dart.js_7.part.js": "fae962a2830ef84ff53893d2fa68a962",
"main.dart.js_32.part.js": "32a6e69b389ac569ec54e9e9b1bd28c5",
"main.dart.js_98.part.js": "5da2abde176a55bb80ebf87a88aae42d",
"main.dart.js_23.part.js": "8ef2ddd5a9e0dc4364467c70a40f0fe2",
"index.html": "db76b968587f44d9649156e896f893ee",
"/": "db76b968587f44d9649156e896f893ee",
"main.dart.js_38.part.js": "d2ec4583fbd34728b887a398a370e726",
"main.dart.js_111.part.js": "9eb07eabce52036825477875d1d1c98e",
"main.dart.js_76.part.js": "0d5fda10be4bc28f706efd3d8eea37dd",
"main.dart.js_54.part.js": "52a63ab6080c5792e3ea68669463faed",
"main.dart.js_95.part.js": "cc922496efae2836fc1cdff44dc21486",
"main.dart.js": "9067e6c8b7497cac603b935f05b8f73b",
"main.dart.js_19.part.js": "a573aa3c64f5f3a526c044c7b496f23f",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_50.part.js": "88c95939e81354bb3a12a4e5d167a935",
"main.dart.js_1.part.js": "cc35f509bc7a11783e04695b29494b56",
"main.dart.js_42.part.js": "9bd15a9759f3b2ee49b7fd49c2de132f",
"main.dart.js_49.part.js": "54660683f57262ec006347c76a0a27e8",
"main.dart.js_25.part.js": "a98b6d57e806a25de9456daa6e8a454b",
"main.dart.js_107.part.js": "e437f953a793ec06c7bc0cd0363b3b74",
"main.dart.js_56.part.js": "2cd4143e34c4fa0fcf44f4723858506d",
"main.dart.js_33.part.js": "2982411c4527513da84be3b076241bff",
"main.dart.js_89.part.js": "9a3478b8ee06facfbb41027bae9ad140",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_68.part.js": "32a4c094b45e61657ac9e64b5f7ba4e4",
"main.dart.js_48.part.js": "3ac7844dc913f083a773275b8a6b13ed",
"main.dart.js_61.part.js": "750c168bd193839589e3333873d64837",
"main.dart.js_26.part.js": "8e8dc4b5ad67746e0f414aba4b13e167",
"main.dart.js_24.part.js": "9a903a256751c365db0df1057c40d41e",
"main.dart.js_22.part.js": "d6c977dba39ed2d7f34cf06a91ce6c31",
"main.dart.js_13.part.js": "e745ecd330f3d6c9fbc7686da597ea34",
"main.dart.js_69.part.js": "6226a8f8e55869d5264dd5efbda493d9",
"main.dart.js_51.part.js": "1b2ea1963c741d0ee547e92abc059eea",
"main.dart.js_78.part.js": "ede7366dac698a32f3dc4355bc13ffe4",
"main.dart.js_10.part.js": "2908c868f7b044257fe874a855669f5d",
"main.dart.js_27.part.js": "0314cb09a61bdd2226cb9c20693a6eee",
"main.dart.js_90.part.js": "0ecc6176a99c93842e050b121b31adf7",
"main.dart.js_86.part.js": "294bbfda7942240b97c30cdf46f68b3a",
"main.dart.js_11.part.js": "a855c25d7f97a6d6ef6d6d4107fa02fa",
"main.dart.js_73.part.js": "f6cb34d45ea0c4893e9c54a948c38678",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"main.dart.js_97.part.js": "8641c2964339e9dc2ce1554a71eb6a86",
"main.dart.js_106.part.js": "b955298ecd90bfb302b74f7187756c99",
"main.dart.js_67.part.js": "7d4b2268ac6f0ee64d2816ca4daaaf10",
"main.dart.js_3.part.js": "a0eb24e1cfffd9b190e845cf37eb26f8",
"main.dart.js_4.part.js": "8cc09e2639db3d937174a35f23ae2ae7",
"main.dart.js_112.part.js": "dda9d23202267ed4aad4a69224b5d504",
"main.dart.js_96.part.js": "af6a6e924124829192a57a0e1237afe7",
"assets/FontManifest.json": "5a5d740bbe4e0ec97b4b7afe4eacb8d0",
"assets/NOTICES": "f417b5dc465d5a217604424701babc3b",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/fonts/MSR-WebFont.ttf": "9d50ea06fa5f5f02d2f99d8acca85d6d",
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
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "25bd83c1f44249e7df3fb167f9b62082",
"main.dart.js_55.part.js": "cdcdb67bf4d4d8032c16361ffb1568b7",
"main.dart.js_103.part.js": "6ed7c0438f9bdff41cd23ea900833c4e",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"main.dart.js_2.part.js": "781153d3b6a2e809f96f12a7de33d209",
"main.dart.js_93.part.js": "1f0369736a886a4e14a7cfb0d73fe0f3",
"main.dart.js_88.part.js": "4ae2a7b054f5e14fc27a9d5f06e000e4",
"main.dart.js_44.part.js": "02048b1237bf23dd57a9903a85f4ef6d",
"main.dart.js_46.part.js": "8cce9a6769d5fefab615d650a8749bd7",
"main.dart.js_71.part.js": "c47bba6a4f52d43e040800210a6008fa",
"main.dart.js_60.part.js": "10438b4e8b13e44884338d7e1ef1c758",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_104.part.js": "84b8e39f8628ae928e8a0090008e9465",
"main.dart.js_47.part.js": "3ada6932e7a63598bf8094549bc7b2d7",
"main.dart.js_100.part.js": "a9c07e256ce24ac6121abdd2ccbcccf0",
"main.dart.js_99.part.js": "f0dce9626018907d8cb611b596b2b7ef",
"main.dart.js_35.part.js": "d37470ec37cd87be436c6dc14f330572",
"main.dart.js_41.part.js": "88286787070abeb979b032b8f88008f1",
"main.dart.js_81.part.js": "741435784d436a05ee8adfab8ffd050c",
"main.dart.js_101.part.js": "15d0b4683946504f22fe19ac857741a5",
"main.dart.js_39.part.js": "fd56e1370197c3f17f9f4b39a76347e1"
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
