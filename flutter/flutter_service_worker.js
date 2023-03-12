'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_81.part.js": "ec86b29b9c8a3c6f3bcc934c2916dbf8",
"main.dart.js_14.part.js": "da3703ff581426517315fcc25471d350",
"main.dart.js_76.part.js": "87237251e7603ace7f81fc5586e0bc68",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"main.dart.js_64.part.js": "f2eedc21a5bc2f8ac03a218a6fa4f225",
"main.dart.js_4.part.js": "649c79b17a642d875b77406c334caaa0",
"main.dart.js_56.part.js": "df6ecaab92d809394c697ae6c3006935",
"main.dart.js_79.part.js": "17f34fa3032b8b786b76e26cfbab6806",
"main.dart.js_74.part.js": "c9582fbc3a4434b61df447864248486a",
"main.dart.js_47.part.js": "5c5141fe13555d3702cbfe3519dbc432",
"assets/NOTICES": "3563c65b273afd6dcab85c392df67a1e",
"assets/assets/image/system/logo.png": "cbb8e407a4049aa0386d0c03d89cc823",
"assets/assets/image/system/error.png": "501f691a5a68573d20450b43e4d408bd",
"assets/assets/image/smiley/25.png": "ecc25f593b968fab2b1a056b98c48836",
"assets/assets/image/smiley/43.png": "4dd0303c301698bea5f022d14e616598",
"assets/assets/image/smiley/4.png": "17ebd5203e92a1fe9b5ca45f38f688e2",
"assets/assets/image/smiley/14.png": "c1dbde12477d161bd757fc5c9a7308f1",
"assets/assets/image/smiley/27.png": "ff051318e791e25283eb64241db911e6",
"assets/assets/image/smiley/50.png": "489c93866ea3a934eee317bfcbc7bcd0",
"assets/assets/image/smiley/12.png": "c59383065afdaa3876c84cc92ef38678",
"assets/assets/image/smiley/29.png": "7bb30c5f4ac2283d8b61f4d52026793b",
"assets/assets/image/smiley/36.png": "78c44cbc9a24bb49d0da295a427966a0",
"assets/assets/image/smiley/6.png": "3126f5b6298c6cfc6980e69915c58448",
"assets/assets/image/smiley/21.png": "623d7dfaf0ea7fefc91a1fd8fed423a9",
"assets/assets/image/smiley/48.png": "d1c46e7d5f885f23116fffb3893027c5",
"assets/assets/image/smiley/15.png": "a740b88cc01570f6f3847d022acbdf6d",
"assets/assets/image/smiley/3.png": "3c989aa3d4c6181ab9038064715e3687",
"assets/assets/image/smiley/13.png": "6b79d7288dfdf5ec98b21593e2918c36",
"assets/assets/image/smiley/5.png": "919639b1527712ab8c5a7f7d66ecd8b4",
"assets/assets/image/smiley/46.png": "4bc6c4827d62ad63e921a3cdc30f28b1",
"assets/assets/image/smiley/24.png": "8205dfbf407c2ddf7339eadc6d181186",
"assets/assets/image/smiley/8.png": "d8e89128df357a6bf571bdff1fa61ca0",
"assets/assets/image/smiley/17.png": "108d283e9702aa878f6f100ef6a187e3",
"assets/assets/image/smiley/35.png": "bdbca794070c2e19a03049232bc7b499",
"assets/assets/image/smiley/11.png": "d0bd514ba44db63e28d49cc1245e4abc",
"assets/assets/image/smiley/26.png": "b5c25b2a9f879efc45197b2460ac3ed6",
"assets/assets/image/smiley/32.png": "4f8a1bdec1a4576540b6af1b21be7c22",
"assets/assets/image/smiley/18.png": "91cecf3e4e98cd3d3a766bcdeae2e37b",
"assets/assets/image/smiley/23.png": "5f3f998fadf656d2a9c1828783fa1b4e",
"assets/assets/image/smiley/1.png": "55f3faf3709f3e3de286468abf480d0d",
"assets/assets/image/smiley/22.png": "3e302ef38882bdafe40a39491fdec7fd",
"assets/assets/image/smiley/16.png": "cd9486865812ccf5da1daeef59522e1b",
"assets/assets/image/smiley/2.png": "439e32d773b5847a707a244cebeec520",
"assets/assets/image/smiley/34.png": "14d8b10afe7841e33190682f6cf29c58",
"assets/assets/image/smiley/28.png": "861e1aa1a36f617efea7e11ef00aecdd",
"assets/assets/image/smiley/33.png": "ea7316cb4d4b2a90b882ad21fe90cdae",
"assets/assets/image/smiley/31.png": "67f173516616a67311d6b3cb261e1458",
"assets/assets/image/smiley/7.png": "a00e90943a7e83d95c6a656dec9fa3c8",
"assets/assets/image/smiley/19.png": "1c07a6e8e0998ccb1110ddc60a32bdd1",
"assets/assets/image/smiley/30.png": "8435ccf09fbc022fdeaf873af23a1933",
"assets/assets/image/smiley/49.png": "871e18a561743981abdf40f4fcbf4524",
"assets/assets/image/smiley/10.png": "9a8e1ac8c00fbbb1f07691911070ba9e",
"assets/assets/image/smiley/9.png": "982cc9814f65206b2f178b2f60fcf05d",
"assets/assets/image/smiley/47.png": "df29631827c00f343360de2a9b9044f5",
"assets/assets/image/novel/cover_default.jpg": "50f974b716adc676b423b08bd691a051",
"assets/assets/image/user/header_default.jpg": "b9f53f41cc6a520563ce6ae72b2c21a9",
"assets/FontManifest.json": "53875f0262dd9428ccea9618c4a0716d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/AssetManifest.json": "311dfece901ebf51e899a28d57221e3e",
"main.dart.js_53.part.js": "25777ed64ee7a9aa526b7316ec95f7a3",
"main.dart.js_90.part.js": "7e18099b0d8293e65eb69b13270a91ae",
"main.dart.js": "fd545cbc9486920d42c2a3322a153630",
"main.dart.js_41.part.js": "a12d1fddfd8a435a8805f174bfb2e5de",
"main.dart.js_17.part.js": "ab8cc35e560d597d81ec6ac6870d9aa0",
"main.dart.js_67.part.js": "64c75ac2fc932dca4f690b36ad56a4fa",
"main.dart.js_65.part.js": "5ebd7d5f6a5e5ddf3ee5f2b6927fc100",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_88.part.js": "5932805bcd4d8ee0fac7d46a91609658",
"main.dart.js_13.part.js": "18f65cef3b4ae90c2c6105a5d5ce1311",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js_48.part.js": "3f859c93dfd110b5c16bde8e55540cf1",
"main.dart.js_66.part.js": "5c4227e26ac7851edad21e05bac26f01",
"main.dart.js_77.part.js": "1ba4a2ea67e109cc6cbf6f03bfea1a90",
"main.dart.js_62.part.js": "b71f504f6e075bca3e95d1a58af8ae58",
"main.dart.js_72.part.js": "340f8318f81ffb02079e0018bf5c3fc6",
"main.dart.js_15.part.js": "a327d021aa27d28b7f9c648d596b9d4f",
"main.dart.js_16.part.js": "48da129465aba312b90d42440194a74b",
"main.dart.js_1.part.js": "3e91feb5b6c7c941b37624b035feafa2",
"main.dart.js_57.part.js": "4a57393ba3c7ac6fbfed41fab63d79bc",
"main.dart.js_7.part.js": "987651470cf48c1993fdc0275921e493",
"main.dart.js_91.part.js": "70926697640e0294dd4632a6cf75471e",
"main.dart.js_50.part.js": "f698278ab48019435d5b3075b03e9070",
"main.dart.js_73.part.js": "7ccd9ccd473f87a66005f7f12036f68f",
"main.dart.js_38.part.js": "a0d2994c323fc736883ef2ce8482c683",
"main.dart.js_46.part.js": "cd69dd248e081207cf3bfd9744848e0e",
"main.dart.js_78.part.js": "c8be0a60b7f539805d17e01426d7623e",
"main.dart.js_89.part.js": "374c4a3498b4edf4bd54746a6d4023e1",
"main.dart.js_55.part.js": "eb668e7ad6a7dc0b9c33735920b924c1",
"main.dart.js_58.part.js": "03049f9c8d1e7f2e40339dcd2e0a9873",
"main.dart.js_35.part.js": "cffeb4566daa899c2a77eec92b153165",
"main.dart.js_63.part.js": "a5167a7d65a5a0d08e23a6e25c666022",
"main.dart.js_22.part.js": "a6f16b1621ee0615a9d303fc51b022e7",
"main.dart.js_20.part.js": "bb229f8da4e3ae1cee1a9f7454e8fc07",
"main.dart.js_85.part.js": "91e2a7f1d0e94e8d31af3cffca02c971",
"main.dart.js_37.part.js": "29f58f1b0cff427274734cae0eff51ab",
"main.dart.js_12.part.js": "5889e5b4b664ae609621df17c566cd5e",
"main.dart.js_51.part.js": "1d82042c6be2a1fcf0f6cca5b7cf4f89",
"main.dart.js_43.part.js": "0afa34b1f0af8f99a533a994900fff36",
"main.dart.js_80.part.js": "125494652591238ca7639fd6eec19c0d",
"main.dart.js_25.part.js": "7ef6a89409cd2223a32ba2812765c083",
"main.dart.js_9.part.js": "b3d4c67eded1f5301eb33b3260673982",
"main.dart.js_84.part.js": "0eb111b76138c7654f473dd92b3f4bb6",
"main.dart.js_40.part.js": "a4c901e90b14a596dde0580525ea5bba",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_34.part.js": "4d90c1ada23a2c5767235478505dd5c9",
"main.dart.js_2.part.js": "40fa7e7af02ba09ed10154df9c43d885",
"main.dart.js_70.part.js": "ae6e9ce7723bd804845595dcfd0cd827",
"main.dart.js_32.part.js": "4a4908ec0266cce055f09717a09f2974",
"main.dart.js_69.part.js": "b3c998053498de143f423d885281ebb9",
"main.dart.js_42.part.js": "f5e22abc488f44e0991e4553e1a5e235",
"main.dart.js_54.part.js": "4b58c72730d6d1e87fdde247cbb38792",
"main.dart.js_24.part.js": "e0634724551100010c44e5d87a90062f",
"main.dart.js_3.part.js": "bba9a29a56f112641b55fa250bc6f754",
"main.dart.js_61.part.js": "66dbdf8519440e80041aab51331797e4",
"main.dart.js_21.part.js": "b33b0f6e18dfcc23670f234028ab258b",
"main.dart.js_28.part.js": "764af0a03b456bfd29e9cd65a0f4cf9e",
"index.html": "e675d3c5c805600d0c7aa24f95bb4011",
"/": "e675d3c5c805600d0c7aa24f95bb4011",
"main.dart.js_18.part.js": "b22c85604aed408fb922a7c1f80429ba",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"main.dart.js_8.part.js": "69caa04ff585a37e9a48834025439ef1",
"main.dart.js_19.part.js": "7360dbbe2b6f14f68e2883cc82cc7e13",
"main.dart.js_10.part.js": "aeaf67da82cb4272194eaf569a475e56",
"main.dart.js_23.part.js": "c1cdfeab1c7767ef0ab5a0fac432f503",
"main.dart.js_83.part.js": "bfdbefe3eda7e3563f3568e896107924",
"main.dart.js_45.part.js": "487b009a64db87981522479d53bb5b5c",
"main.dart.js_6.part.js": "e93c5418ef125a252d74278b86125ea2",
"main.dart.js_44.part.js": "174939d4ff3951db9a9a0ee5efdba330",
"main.dart.js_93.part.js": "fae64268889a6a0f6720f8426883e654",
"main.dart.js_30.part.js": "3f77982ea19d645eb2ac683d48c1ff12",
"main.dart.js_60.part.js": "dc0858239b562765789c5afd88ea9552",
"main.dart.js_27.part.js": "112dd8efb1891328265a61bce3f0826a",
"main.dart.js_92.part.js": "08cbf40b77cfbcec715dba56d88f6de3",
"main.dart.js_49.part.js": "cc82e4c77a947a7f17bc27d2ae8aa22f",
"main.dart.js_75.part.js": "4a4fbf3c2952759b25e4d56bd625c980",
"main.dart.js_86.part.js": "b151a05567c05f004ed9e8608bfc5288",
"main.dart.js_11.part.js": "c2db9b1945085c3e8fb089ef99b72290",
"main.dart.js_39.part.js": "43cf0ba8c054be314f864378a17e9103",
"main.dart.js_59.part.js": "12b90c5be07c9a3ebf25e964c297bdb3",
"main.dart.js_87.part.js": "23132cf36e5d3a3d25f32875879d8b6d",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_52.part.js": "e4eae0949e6555d92160d1804895703f",
"main.dart.js_82.part.js": "24a5b6c5cdb212f6c5bfbe155dc39ffc"
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
