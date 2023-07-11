'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_60.part.js": "b7db8676f6ca35a8fd86fbbe7c28feb4",
"main.dart.js_18.part.js": "f2165668463d01ac9488bcf6c5132c5f",
"index.html": "8ea343b427666c9821988e695b3cc261",
"/": "8ea343b427666c9821988e695b3cc261",
"main.dart.js_95.part.js": "bcfb32f54ca0bbddde58afc096c6022a",
"main.dart.js_78.part.js": "fbeeea391d02a27adef6e928e9b44dd3",
"main.dart.js_64.part.js": "86c8dad72ddb4f971f218b7c1fa20660",
"main.dart.js_2.part.js": "7d33bb99dc282bb5db5124b889e524de",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_45.part.js": "e54a10a669b949c36d41917296b25edb",
"main.dart.js_91.part.js": "febf976bfe9d278426674a1a82d52bff",
"main.dart.js_67.part.js": "7f40ab30915e883f6192ccca07124bd7",
"main.dart.js_36.part.js": "7a55a63f6d474597b00af1924d88cf01",
"main.dart.js_4.part.js": "b9019a8d6ce7ca73bcf820ed641a6c99",
"main.dart.js_59.part.js": "036e73b48a37858ee42e4767573283a3",
"main.dart.js_13.part.js": "2d2bce570d73ff1628482114b2363812",
"main.dart.js_40.part.js": "ecfe5be280e82b37075e3dbded437ccf",
"main.dart.js_52.part.js": "18cb63417a65908c7f31c1722a9de8e4",
"main.dart.js_84.part.js": "7c00646c2f76d2e99cd273bd2f1ff821",
"main.dart.js_97.part.js": "5046e62ab677796c08af607acafc4ce9",
"main.dart.js_76.part.js": "6d57df4c7b36bbaf73e5ac5efd98ed8b",
"main.dart.js_79.part.js": "5de09a8043741a26ec2a039e201f5545",
"main.dart.js_32.part.js": "2a62d57e916bfcedbf07edf0e2366c76",
"main.dart.js_48.part.js": "be8d843ba77b113b959b0eae7752d18b",
"main.dart.js_12.part.js": "49b1368a606cbbcb981fe2c09443a566",
"main.dart.js_61.part.js": "9b07eed54c7d0cd677cb0e70426c5428",
"main.dart.js_94.part.js": "bc585fa01dabf71825ca6cded0a60f42",
"main.dart.js_86.part.js": "9446d2d1f7d6711ff3f2ce2744205ad7",
"main.dart.js_99.part.js": "f86a2e65018477f635ba6a3978a55740",
"main.dart.js_71.part.js": "dc93f0127661f90a23d30e72d3be9b8b",
"main.dart.js_83.part.js": "3796f87f254dda4fbad48a7fdf5ae579",
"main.dart.js_96.part.js": "472ea44adf7666c6d3298e6365336768",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_58.part.js": "270b48ca4f1ad16437f09727272873c6",
"main.dart.js": "e89336ec0df673dd06e60321e74e6853",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_3.part.js": "4785af4dc1e000b76c6e21457e0a9386",
"main.dart.js_19.part.js": "e956e927d7931dea26c7eb1e994ea9d2",
"main.dart.js_50.part.js": "da5c4f2e6b80170171d8610e9b5b8304",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js_22.part.js": "36d59437d97bee9296ca49ec75ec7464",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_90.part.js": "54d9df025fb9328f0909caaf927cf6b9",
"main.dart.js_85.part.js": "bf8e7368b841b5356dd327a6092e8509",
"main.dart.js_21.part.js": "b7db7fbf376d79db380240ac9fb10415",
"main.dart.js_92.part.js": "e2481c39a6bc9677e36fc387cb26767e",
"main.dart.js_68.part.js": "3cfb676a30b028dac1e5b8bac9d46b94",
"main.dart.js_27.part.js": "6a7c8fe687e4b29157e45e74d8b4d569",
"main.dart.js_20.part.js": "e7fe7a62788e90d6041271ec4549b404",
"main.dart.js_80.part.js": "df8a1a9fabbde48ed5717b7c30c96f1b",
"main.dart.js_70.part.js": "7e37f845b8d80bb6465ec59e99b2ed00",
"main.dart.js_28.part.js": "55a6052432fe45532efce0327bcbfd5f",
"main.dart.js_29.part.js": "16947d366d46d831e2fb8b28a20325e6",
"main.dart.js_6.part.js": "b501afba8dd89a94432fb51ff02032b4",
"main.dart.js_75.part.js": "65c7b6567d18108d4f28c5048ed74059",
"main.dart.js_56.part.js": "a5fb8a114f8ec23c2443c732885406cb",
"main.dart.js_89.part.js": "a5b03b9c05cba16380d932bbac0f87d8",
"main.dart.js_66.part.js": "7b9233275fa2c2f01ba742118c72c03d",
"main.dart.js_34.part.js": "6eb9f39e609c7beaa0d21d508b60b0e3",
"main.dart.js_41.part.js": "3a05051f6a7e852beefbaf0a0b4b07ee",
"main.dart.js_15.part.js": "9c69670a5ab23a7562916703f0f1dcb2",
"main.dart.js_87.part.js": "3791f4bf8cb0b58329918f0de7b75c45",
"main.dart.js_46.part.js": "7a28c382844fdfad7fd2e32bc04eabf9",
"main.dart.js_31.part.js": "79d9773137d9b9caf63115f03b00d5b4",
"main.dart.js_51.part.js": "a2a6bbd72f042dda5b0a293db7184726",
"main.dart.js_65.part.js": "0fb336e028734afbb041473f5a906c6e",
"main.dart.js_30.part.js": "f040c8ec94c854e68cd0046b530cbd46",
"main.dart.js_93.part.js": "a0979c5f190707822cb28fd30f69150a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "b5331541360260451dee8775dda5e6f3",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/AssetManifest.bin": "63592ba2fc6fce5c15c3dcc1c86bac34",
"assets/AssetManifest.json": "311dfece901ebf51e899a28d57221e3e",
"assets/NOTICES": "f24f6e6298a4b66c2ccfa8d8ccf4124e",
"assets/FontManifest.json": "53875f0262dd9428ccea9618c4a0716d",
"assets/assets/image/system/logo.png": "cbb8e407a4049aa0386d0c03d89cc823",
"assets/assets/image/system/error.png": "501f691a5a68573d20450b43e4d408bd",
"assets/assets/image/smiley/7.png": "a00e90943a7e83d95c6a656dec9fa3c8",
"assets/assets/image/smiley/9.png": "982cc9814f65206b2f178b2f60fcf05d",
"assets/assets/image/smiley/11.png": "d0bd514ba44db63e28d49cc1245e4abc",
"assets/assets/image/smiley/10.png": "9a8e1ac8c00fbbb1f07691911070ba9e",
"assets/assets/image/smiley/3.png": "3c989aa3d4c6181ab9038064715e3687",
"assets/assets/image/smiley/31.png": "67f173516616a67311d6b3cb261e1458",
"assets/assets/image/smiley/26.png": "b5c25b2a9f879efc45197b2460ac3ed6",
"assets/assets/image/smiley/36.png": "78c44cbc9a24bb49d0da295a427966a0",
"assets/assets/image/smiley/50.png": "489c93866ea3a934eee317bfcbc7bcd0",
"assets/assets/image/smiley/17.png": "108d283e9702aa878f6f100ef6a187e3",
"assets/assets/image/smiley/46.png": "4bc6c4827d62ad63e921a3cdc30f28b1",
"assets/assets/image/smiley/16.png": "cd9486865812ccf5da1daeef59522e1b",
"assets/assets/image/smiley/2.png": "439e32d773b5847a707a244cebeec520",
"assets/assets/image/smiley/13.png": "6b79d7288dfdf5ec98b21593e2918c36",
"assets/assets/image/smiley/21.png": "623d7dfaf0ea7fefc91a1fd8fed423a9",
"assets/assets/image/smiley/30.png": "8435ccf09fbc022fdeaf873af23a1933",
"assets/assets/image/smiley/15.png": "a740b88cc01570f6f3847d022acbdf6d",
"assets/assets/image/smiley/47.png": "df29631827c00f343360de2a9b9044f5",
"assets/assets/image/smiley/28.png": "861e1aa1a36f617efea7e11ef00aecdd",
"assets/assets/image/smiley/23.png": "5f3f998fadf656d2a9c1828783fa1b4e",
"assets/assets/image/smiley/18.png": "91cecf3e4e98cd3d3a766bcdeae2e37b",
"assets/assets/image/smiley/34.png": "14d8b10afe7841e33190682f6cf29c58",
"assets/assets/image/smiley/4.png": "17ebd5203e92a1fe9b5ca45f38f688e2",
"assets/assets/image/smiley/1.png": "55f3faf3709f3e3de286468abf480d0d",
"assets/assets/image/smiley/48.png": "d1c46e7d5f885f23116fffb3893027c5",
"assets/assets/image/smiley/27.png": "ff051318e791e25283eb64241db911e6",
"assets/assets/image/smiley/49.png": "871e18a561743981abdf40f4fcbf4524",
"assets/assets/image/smiley/8.png": "d8e89128df357a6bf571bdff1fa61ca0",
"assets/assets/image/smiley/5.png": "919639b1527712ab8c5a7f7d66ecd8b4",
"assets/assets/image/smiley/19.png": "1c07a6e8e0998ccb1110ddc60a32bdd1",
"assets/assets/image/smiley/35.png": "bdbca794070c2e19a03049232bc7b499",
"assets/assets/image/smiley/12.png": "c59383065afdaa3876c84cc92ef38678",
"assets/assets/image/smiley/32.png": "4f8a1bdec1a4576540b6af1b21be7c22",
"assets/assets/image/smiley/43.png": "4dd0303c301698bea5f022d14e616598",
"assets/assets/image/smiley/22.png": "3e302ef38882bdafe40a39491fdec7fd",
"assets/assets/image/smiley/33.png": "ea7316cb4d4b2a90b882ad21fe90cdae",
"assets/assets/image/smiley/6.png": "3126f5b6298c6cfc6980e69915c58448",
"assets/assets/image/smiley/24.png": "8205dfbf407c2ddf7339eadc6d181186",
"assets/assets/image/smiley/25.png": "ecc25f593b968fab2b1a056b98c48836",
"assets/assets/image/smiley/29.png": "7bb30c5f4ac2283d8b61f4d52026793b",
"assets/assets/image/smiley/14.png": "c1dbde12477d161bd757fc5c9a7308f1",
"assets/assets/image/novel/cover_default.jpg": "50f974b716adc676b423b08bd691a051",
"assets/assets/image/user/header_default.jpg": "b9f53f41cc6a520563ce6ae72b2c21a9",
"main.dart.js_5.part.js": "d51b840b8ca21dc9e606f4233f93e90f",
"main.dart.js_1.part.js": "36d39bd8179a7910ffc25e5171d02ca6",
"main.dart.js_69.part.js": "3a285b840fa0111e8e4bdc92ac11fc51",
"main.dart.js_25.part.js": "0239beb8f51911863db13c2dfdaa4c37",
"main.dart.js_16.part.js": "bdd704c03e32ad7b177363fb49b27a2a",
"main.dart.js_9.part.js": "40702074bcc2c950e0c63605951b87fc",
"main.dart.js_8.part.js": "65d90ec5255e8176e06d291f83f574a9",
"main.dart.js_11.part.js": "41ea4cd6d83eaf53998b9b6fbf730b4d",
"main.dart.js_82.part.js": "1637e7e0370776ba9c2c25b7ac8bbd17",
"main.dart.js_88.part.js": "910461514a53ea5ef67834b60ad234aa",
"main.dart.js_33.part.js": "cabf5d25aed2b80c144e4ff4367676fc",
"main.dart.js_55.part.js": "d6288ab304133a6e77d33dd02a30092f",
"main.dart.js_47.part.js": "1ce280a1b16811f4af30557ce01e95b2",
"main.dart.js_49.part.js": "d44c7f165de8aacdee9aae49289639f2",
"main.dart.js_44.part.js": "78d8b27a648b5cfa8a6fab65b3ee9c17",
"main.dart.js_57.part.js": "d77b82fa585df056a5b78426e325f637",
"main.dart.js_72.part.js": "b7c022d4f09d988611db3c87bd2cc8bc",
"main.dart.js_54.part.js": "a821b9b5db044c95a7387ad3c7f350ed",
"main.dart.js_42.part.js": "b0388646bc70144e2968f3f459592d0e",
"main.dart.js_62.part.js": "ece6acf3680a3ee792977dff9f045719",
"main.dart.js_14.part.js": "3a84466e3da5ce2054278b8c47e433d0",
"main.dart.js_24.part.js": "565f8d21d718b320b2780235ac15b6d5",
"main.dart.js_74.part.js": "94ef0194d3bd4fb455db490a041b8141",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"main.dart.js_17.part.js": "31ecee043dd1b6023b753e80fb1412f0",
"main.dart.js_98.part.js": "da601a429e512b230af914e45446397d",
"main.dart.js_39.part.js": "0b6b142fb05dd8eb21fc7f43f13e1896",
"main.dart.js_81.part.js": "3d8f9b1fd488581fbab2389c4d69408a",
"main.dart.js_53.part.js": "a3816bf782b2fff06fd463c578118426",
"main.dart.js_63.part.js": "aa6c33c7ad60bcbb07b21d988fb61cff"};
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
