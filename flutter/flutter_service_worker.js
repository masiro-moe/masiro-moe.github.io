'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_64.part.js": "44930a3767c19330aa702df2788906be",
"main.dart.js_17.part.js": "2c1d1c6fcb5ee33b54e08b2e60312884",
"main.dart.js_58.part.js": "5a956044d3581cbf49a8a9eebddae377",
"main.dart.js_16.part.js": "ac9c6fa2e9411b69370615e78fe45a11",
"main.dart.js_85.part.js": "644036fcd2a219a9e60e24360183b8aa",
"main.dart.js_82.part.js": "376ff69a3e8a5135ba21a76a8559ed65",
"main.dart.js_18.part.js": "725dc698e5210270d2e57906a1a30803",
"main.dart.js_14.part.js": "bfb60fca289ba094b5898a3b3855d9a0",
"main.dart.js_79.part.js": "f9863e69259e928782ba6bc2004d45fc",
"main.dart.js_37.part.js": "a4125a03fb84dcb7884fa6ab824553d2",
"main.dart.js_8.part.js": "9c6c736b36a180df6dc0764fe5bea833",
"main.dart.js_83.part.js": "22ddccd4a1f22de989451ad0e4d1f266",
"main.dart.js_36.part.js": "106cebc980a1f6d5b7456227c9b919c8",
"main.dart.js_12.part.js": "1734611d203aaf40f043d8eb7acbc96a",
"main.dart.js_21.part.js": "46c0ad3361437a803e8596cca0fc03a5",
"main.dart.js_52.part.js": "b0e16ff1da1f56a1de3c14749fbe62ac",
"main.dart.js_34.part.js": "7f262bcea8ef7acf27f29d4114c20325",
"main.dart.js_59.part.js": "6d9c53d8455ad3d6e4b661b957baf354",
"main.dart.js_65.part.js": "8f4c019223feac9e305fc6d38f34d4a2",
"main.dart.js_87.part.js": "1ca190d9fc57941d098c1b916eda1657",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"main.dart.js_28.part.js": "12c89c6246defba3bef6577260d20cf5",
"main.dart.js_91.part.js": "63b079157b4944a1bffc164ccb4680a8",
"main.dart.js_45.part.js": "1d716deda69d3a48c615e4478570abe2",
"main.dart.js_20.part.js": "8635da47517e2ee3da5619075218ba07",
"main.dart.js_30.part.js": "878b6b0a7898540203bbfaac6b6d202b",
"main.dart.js_43.part.js": "36537b43bb8b3a3aa6f2e03abeaceb83",
"main.dart.js_70.part.js": "d86e3d75a30a3e850ce1e752e1613cef",
"main.dart.js_9.part.js": "a02789ebb393be4295f9963631608680",
"main.dart.js_6.part.js": "00321e642aedfba163d251ea04a68ce3",
"main.dart.js_77.part.js": "ec76506210a52c8182f08e19c7aa5063",
"main.dart.js_53.part.js": "7ce4773cd4cadd48356900c33b5619e5",
"main.dart.js_80.part.js": "650c05ead9464c36a78ed0e05a67e4b1",
"main.dart.js_57.part.js": "cfc01869246ce0def38a71c6f00354af",
"main.dart.js_7.part.js": "9627401098ee697102f6bc1ec4cd7204",
"main.dart.js_32.part.js": "73fde6dc5641cd7d4ac6850d09a5ff45",
"main.dart.js_23.part.js": "a3d8363bdae871d0fcee9d4fae3af538",
"index.html": "2945f38848f2e4c04d5d78d7693599e5",
"/": "2945f38848f2e4c04d5d78d7693599e5",
"main.dart.js_38.part.js": "457a0ff70bdd45559b1a92eb871206f7",
"main.dart.js_40.part.js": "1a820824853c61be232847b97542cc52",
"main.dart.js_76.part.js": "fd8ca01c520c98388bb9bdfe4532b9dc",
"main.dart.js_54.part.js": "71f9423c3e1fe87d02d8c8926fe98a7e",
"main.dart.js_63.part.js": "bbfc24f55104996362c4ec5310a17655",
"main.dart.js": "b02aace62c55fac0185739c1be802173",
"main.dart.js_19.part.js": "cdb5131e6114a32989ab42cc8748bf19",
"main.dart.js_84.part.js": "5fa24ea5c91cde9e1ee3e94a870d3ac2",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_50.part.js": "d21958fb542c978c1d49a987e4ae1f65",
"main.dart.js_1.part.js": "bed093f8dd71183336c957283ac10676",
"main.dart.js_42.part.js": "348b6e3c5577aaed9517fac100563723",
"main.dart.js_49.part.js": "c26f8fc295108b514a42d039c7d34bca",
"main.dart.js_25.part.js": "bf076699e08a77504be2964136e065a9",
"main.dart.js_56.part.js": "ee80e66321f3da2f4e17f1cd19222e99",
"main.dart.js_15.part.js": "c5de8c3e2fe125dad4c22d30814f6ea3",
"main.dart.js_33.part.js": "b058a685386d8367ea15646aa975e990",
"main.dart.js_89.part.js": "a1c71b2eef8b0eeb879602274a3a9185",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_68.part.js": "1b6d7a9cb9552b26087c3f1bdb247a87",
"main.dart.js_48.part.js": "61758372b2cb1af84a03d137677a41ac",
"main.dart.js_61.part.js": "8828381fff298a0b964a0961a328d14b",
"main.dart.js_22.part.js": "8fd3f11ac86c6750077cbab573bc6729",
"main.dart.js_13.part.js": "87fde044b641a1bec1b93fa24258303c",
"main.dart.js_51.part.js": "f170650b8d4cf5e9ecadc8e5c89543a8",
"main.dart.js_78.part.js": "80c0e55405813046459f706a3ebf1a85",
"main.dart.js_10.part.js": "31b26758d044a017155638ab89c17238",
"main.dart.js_27.part.js": "55be3f9e2c2e0e30e62212d603627c20",
"main.dart.js_90.part.js": "24325783b6c322ed6b659f1fa47909d5",
"main.dart.js_86.part.js": "cfe8424e09e250f6958f8cb744091b03",
"main.dart.js_72.part.js": "ac96d251f843fe95b0a3351f490d1393",
"main.dart.js_11.part.js": "7e4bd597c20643d17aa75e62f12e337d",
"main.dart.js_73.part.js": "a3919e547269467ea6e0228cf4b11aa5",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"main.dart.js_67.part.js": "f7c3ca040f084051f35e4c5a9905d160",
"main.dart.js_3.part.js": "5d86aade410cb0e126e6e4f0d84dbbee",
"main.dart.js_4.part.js": "fcd17d365cc6d33c1122d1e3832ba9e4",
"main.dart.js_66.part.js": "69fd29572a5b5795c9eadeacfe192e96",
"main.dart.js_74.part.js": "09c40d1f2f7ad042b0e1c58969d2f436",
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
"main.dart.js_55.part.js": "9df50c8304551817b26701b6674ae808",
"main.dart.js_62.part.js": "f5a4fc27f72d6a19442c36c25fbaec0a",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"main.dart.js_2.part.js": "625652e74fa17d475b52569af9363d49",
"main.dart.js_88.part.js": "4efd8a0c244fffe69a1f4f7dd7ab2ab8",
"main.dart.js_44.part.js": "36f63ade69ba61e299334a234946542f",
"main.dart.js_46.part.js": "a04aa3d5686410d2d46cb720052f6365",
"main.dart.js_71.part.js": "0c2c50f35e41a54aff5dacd7f0e91ad9",
"main.dart.js_60.part.js": "6525b8e13827d53e754b2ae54d802c1c",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_47.part.js": "06623f704d488d086dc9c8a4efc92b40",
"main.dart.js_35.part.js": "4b326dc585032a9194c68f1f4c243e19",
"main.dart.js_41.part.js": "6f99639bdea5d4203097f1df2806d8d1",
"main.dart.js_81.part.js": "137cd22a31f4dc08a0dc4d07802ca07a",
"main.dart.js_75.part.js": "680ab782f71c6bd2096912c60e8d8ab9",
"main.dart.js_39.part.js": "cc2d20177de0071d010dceaad30c9150"
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
