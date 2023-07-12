'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_60.part.js": "8e5786518ff5d16579fb673e3e8f614f",
"main.dart.js_18.part.js": "3510bd7da4e2a52bd7b2db0aab9e20a0",
"index.html": "985d8da4cef51952ff38d6498006627a",
"/": "985d8da4cef51952ff38d6498006627a",
"main.dart.js_95.part.js": "926fe1d4924f9012e93e571685a012ef",
"main.dart.js_78.part.js": "cc3881892dc172ee6dd0ea5e38b7cf6f",
"main.dart.js_64.part.js": "4c9a9f62918c6d3f98d9d0df268e4d39",
"main.dart.js_2.part.js": "a3a83edf3b9ce1301fb6a86022382bdb",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_45.part.js": "e54a10a669b949c36d41917296b25edb",
"main.dart.js_91.part.js": "bbce3b85d5cdfabad7ea05f982b76bed",
"main.dart.js_67.part.js": "f5cd0aacbf4cc23ffdb3bd3758ffb1c4",
"main.dart.js_36.part.js": "ed18db3cd5c169c92fab21670d8a8a9f",
"main.dart.js_4.part.js": "b9019a8d6ce7ca73bcf820ed641a6c99",
"main.dart.js_59.part.js": "927a340749b107fac9e5414c1d78c301",
"main.dart.js_13.part.js": "8781130d2cbd261159698b57188556c8",
"main.dart.js_40.part.js": "705495e1d1bf80dd4d40a6db761e3bd2",
"main.dart.js_52.part.js": "85979eeadfd6eb4b8311b596ad6e7ff9",
"main.dart.js_84.part.js": "95977b0bed8f925e8e0a8b02f415f89b",
"main.dart.js_97.part.js": "f71b3334076e18667b3eae96e8cac84a",
"main.dart.js_76.part.js": "cab7a6772c63448bcd2765cf81c335ff",
"main.dart.js_79.part.js": "52a68dc2fed7bbea2f4ab6905b76919d",
"main.dart.js_32.part.js": "2a62d57e916bfcedbf07edf0e2366c76",
"main.dart.js_48.part.js": "6d733e5ff85641ba61992c6ea468d8ed",
"main.dart.js_12.part.js": "2355c270a2032564c2575ab686b19d46",
"main.dart.js_61.part.js": "9b07eed54c7d0cd677cb0e70426c5428",
"main.dart.js_94.part.js": "9e600fc9f4884d2aa09dc6cd531b222b",
"main.dart.js_86.part.js": "9446d2d1f7d6711ff3f2ce2744205ad7",
"main.dart.js_99.part.js": "2a0fcf01849a7d2aafa567ed0af7e662",
"main.dart.js_71.part.js": "a54a843877e533be28a034948adc03c7",
"main.dart.js_83.part.js": "c506d503b50824748a5e80cbd95aa1ae",
"main.dart.js_96.part.js": "a4ebfd140ffe78ed55afb7de638b35bf",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_58.part.js": "28fcb2d19b225a8a1f0a6d4c2871d031",
"main.dart.js": "213924c6ec7f8749aebafe7901cb02d7",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_3.part.js": "e2a763eed7e607fff12b2c66bed73d42",
"main.dart.js_19.part.js": "4e6c553670a7da673a1d79a367d0c91b",
"main.dart.js_50.part.js": "e23798f3074349d3f62d92f0ede58d6a",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js_22.part.js": "ce91760ad3bb383d2d03a43019c83660",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_90.part.js": "2e06f94ec05dfd60ce3cc879fc010203",
"main.dart.js_85.part.js": "bf8e7368b841b5356dd327a6092e8509",
"main.dart.js_21.part.js": "2e6e514dc1066d1f78315b8c9552de58",
"main.dart.js_92.part.js": "a0afc49d3d164281c8d3dd983d62b8e5",
"main.dart.js_68.part.js": "d3a0b749b000283c0e34e225135b6289",
"main.dart.js_27.part.js": "29bc3fab470b6112f012bb5726790c59",
"main.dart.js_20.part.js": "5c4c4d93ddf14855c772ccd23014e9e5",
"main.dart.js_80.part.js": "9888dee6f976c31cd99a7215dfdc3fed",
"main.dart.js_70.part.js": "7e37f845b8d80bb6465ec59e99b2ed00",
"main.dart.js_28.part.js": "05a505fbbca72be04bd773ea5f5e3ea9",
"main.dart.js_29.part.js": "6f63f5f3f478888807f568a5b0d0e14e",
"main.dart.js_6.part.js": "bc8c1bd9659327a3de3933adce1828e1",
"main.dart.js_75.part.js": "65c7b6567d18108d4f28c5048ed74059",
"main.dart.js_56.part.js": "a9d5161436035421eacf2e42275a4e98",
"main.dart.js_89.part.js": "a635fd60f6f13e030852aa9a608e0178",
"main.dart.js_66.part.js": "7b9233275fa2c2f01ba742118c72c03d",
"main.dart.js_34.part.js": "eddc6f64c8db36a091ba9cc1ba1f774f",
"main.dart.js_41.part.js": "928edb1f5851b7ae0fa319ed78a71d12",
"main.dart.js_15.part.js": "014356e1ad735127f6d6f53391ee2840",
"main.dart.js_87.part.js": "c08c775573200b346cccf5af1381cbc3",
"main.dart.js_46.part.js": "fb1518e8b40651acfe86ca88dfa0da22",
"main.dart.js_31.part.js": "f3666b6bd1b96a4646c1a84ce853503f",
"main.dart.js_51.part.js": "b9b2136ec0e4d930a455263a1288755d",
"main.dart.js_65.part.js": "6607faf095876572167c9876610c7471",
"main.dart.js_30.part.js": "1c05717cf69beef84cb77881c6828fe9",
"main.dart.js_93.part.js": "4d6a696fb5b5e5b85abefbdcabe0bc19",
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
"main.dart.js_5.part.js": "6fa10aff8b6335ab6b55778f39cb34c1",
"main.dart.js_1.part.js": "3f1b012ced5a1b5182d9ecf19516aa25",
"main.dart.js_69.part.js": "8ef7edbdbf494105ed0044400eaa1c26",
"main.dart.js_25.part.js": "456dc22823cd30e17dfbf632df78d1f4",
"main.dart.js_16.part.js": "37874301ea1ad72e9a0ca6a51945213f",
"main.dart.js_9.part.js": "f6466920c0f16f62ae72275f246730e0",
"main.dart.js_8.part.js": "65d90ec5255e8176e06d291f83f574a9",
"main.dart.js_11.part.js": "e16b6d0c6d1ae5c58ae989b45339596a",
"main.dart.js_82.part.js": "fc3790ec862ef16909cb93e85d48e621",
"main.dart.js_88.part.js": "3dc91b9f01c0fb9156a32bcad85faf25",
"main.dart.js_33.part.js": "00d8feefb5c8f755e927993df9629e87",
"main.dart.js_55.part.js": "d6288ab304133a6e77d33dd02a30092f",
"main.dart.js_47.part.js": "1ce280a1b16811f4af30557ce01e95b2",
"main.dart.js_49.part.js": "606d25038192bd2dcb7949bfb811ced0",
"main.dart.js_44.part.js": "78d8b27a648b5cfa8a6fab65b3ee9c17",
"main.dart.js_57.part.js": "3c21a71105778e97a5095a932204d35e",
"main.dart.js_72.part.js": "bca956f5bcc7d1e56678a2cf83fcbce7",
"main.dart.js_54.part.js": "96053c0ed8641d54c5d06798353a1fb9",
"main.dart.js_42.part.js": "b0388646bc70144e2968f3f459592d0e",
"main.dart.js_62.part.js": "046dbd32a6ba307e96fbdfa719b4eac8",
"main.dart.js_14.part.js": "a5aacbd322c9b1f433e0d34db9c82969",
"main.dart.js_24.part.js": "565f8d21d718b320b2780235ac15b6d5",
"main.dart.js_74.part.js": "7e0c5e3f36ddd8dfedd516c22faf4658",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"main.dart.js_17.part.js": "5ccbde0c45b71fb3c52ef10a34f05317",
"main.dart.js_98.part.js": "174102a8c2be8a7872ca1cd77006b448",
"main.dart.js_39.part.js": "ea59ef93d0a7740d1db6e06753613a93",
"main.dart.js_81.part.js": "3d8f9b1fd488581fbab2389c4d69408a",
"main.dart.js_53.part.js": "bbd1c3e587c0f2304427c58efc352a23",
"main.dart.js_63.part.js": "195a3124d045b34426577be7efb023b0"};
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
