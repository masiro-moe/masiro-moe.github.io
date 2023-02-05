'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_64.part.js": "e9305b285bf61dbd5a6d0b6f062ccaa5",
"main.dart.js_17.part.js": "77610420f5ab9298018dc320e83a962b",
"main.dart.js_58.part.js": "81356d5bf57d31d718df2f564dcea85a",
"main.dart.js_94.part.js": "fbc9632d4afde0b4058635928ac022b5",
"main.dart.js_16.part.js": "e06ad48c5c7e2f05596bc1dcda526feb",
"main.dart.js_85.part.js": "dbbbb1a8d96d025d73e239f820f0e097",
"main.dart.js_82.part.js": "564464b2e1e75ccb56ae0a3b42af0bb9",
"main.dart.js_18.part.js": "fa725efc946190e9cb14f4fe3ec74a4c",
"main.dart.js_31.part.js": "96781c8cd0e365b086481a89f9829e2b",
"main.dart.js_14.part.js": "95e230fc5ae883ec4abdb6daa04212e6",
"main.dart.js_37.part.js": "fc2cf1b9c7fa72068639126f1a2635fa",
"main.dart.js_8.part.js": "6f2480c15c839ca03bf79ecac9753bc4",
"main.dart.js_83.part.js": "56ff371daf79062880d84b6fffb22a39",
"main.dart.js_36.part.js": "0d551759cfca455fe5c484025fc061b3",
"main.dart.js_21.part.js": "78a8e485c19326be49f96c9b1246dae4",
"main.dart.js_34.part.js": "f0847d2bfb72cb7242d6a6bee51a2c62",
"main.dart.js_65.part.js": "796471d5343c99a896c28d9163a327fd",
"main.dart.js_87.part.js": "91abb6ae471cca1706f3e91fc54d5270",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"main.dart.js_28.part.js": "98b7480e258f8c297499b036e0af4a27",
"main.dart.js_29.part.js": "b0f322297d1ea33f53115ee00f7c8694",
"main.dart.js_91.part.js": "341a93420834c32bd9eb0c017cc5abf8",
"main.dart.js_45.part.js": "0e8ca7ad2146b779cbca0d5ea6ea9c81",
"main.dart.js_20.part.js": "dfa99e82f27597b122515772f9fbe93d",
"main.dart.js_43.part.js": "f21f7d02ca95e9d4fb6ee53a09862578",
"main.dart.js_9.part.js": "d4bff129dd9666981e9c39dc8bbe0e47",
"main.dart.js_6.part.js": "59c5ee44f70048d7ba9c4d91c263b9e0",
"main.dart.js_77.part.js": "98a62455e5bdb4aea7be83e695bc451e",
"main.dart.js_80.part.js": "2c03c806ef471a817a0106eb4b1d363f",
"main.dart.js_7.part.js": "7df58b7103648fc9eabc91788b1b621d",
"main.dart.js_32.part.js": "0499a8e8f32272de38fb1882555d5c90",
"main.dart.js_98.part.js": "d5f50766184f0e38aebf35ccb9b45082",
"main.dart.js_23.part.js": "56505f44d8ef7f4a3499936b48e89827",
"index.html": "7cf582219816f7573dd43ee7a767d9fe",
"/": "7cf582219816f7573dd43ee7a767d9fe",
"main.dart.js_38.part.js": "a0d4b72e5e898bb10b3f7110b8d45ead",
"main.dart.js_40.part.js": "3b1ed508aed7145ad409d98c2f4f1f0f",
"main.dart.js_76.part.js": "f15b82b8b2b508b3b6f49b78d438e920",
"main.dart.js_54.part.js": "580ae45a9df0906ad0a1234c0f6134ed",
"main.dart.js_95.part.js": "dcde1a0296f2de93a72075aaf185a2cf",
"main.dart.js_63.part.js": "56bcf562510c9b40a553cecc1921e370",
"main.dart.js": "5bc3191ba4a57bf52f98e383772b1d3f",
"main.dart.js_19.part.js": "84e664066b7337660417bc5a856b83c5",
"main.dart.js_84.part.js": "2ccf9eb8c52ad41574e74771ad6b646f",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_50.part.js": "8f747a8ed295d2e3bb60bed2944fec7c",
"main.dart.js_1.part.js": "aba41445bf829c92f8a4d619db02b5ad",
"main.dart.js_42.part.js": "09404bf3505ca783176f6d7b2fa64a7b",
"main.dart.js_25.part.js": "324ad13be134f5d87984eac67ff417c3",
"main.dart.js_56.part.js": "fdc223e86e26075c682b7abb2c9449ad",
"main.dart.js_15.part.js": "3e1d8dc3464bc460358b634ca6c0f5b9",
"main.dart.js_33.part.js": "1ae2524d0a5ce6550d516c26816a6847",
"main.dart.js_89.part.js": "d1bb06ea699d9799fad8124aa11a6dce",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_48.part.js": "d556c3364c5b236a29ccb766cb5356a9",
"main.dart.js_61.part.js": "dcd242b094bfbc833e7a7c487ea6e651",
"main.dart.js_26.part.js": "311848dd337a62e64b532e75703fd2d5",
"main.dart.js_22.part.js": "0b41fef1f7e09bdca4b8f926f7a4889a",
"main.dart.js_13.part.js": "36d14b3df2e4c2d32054ab31652b9151",
"main.dart.js_92.part.js": "06780a8575ed165dfff63d97a7bb3497",
"main.dart.js_51.part.js": "0c61627e5b266438e79a034f0b08ea84",
"main.dart.js_78.part.js": "83a88c2c89d4321bca8283074a2376ea",
"main.dart.js_10.part.js": "1ad592a91dbc334e242400add25b7f74",
"main.dart.js_90.part.js": "7b3b9d932952bdb68c203254d0de69c2",
"main.dart.js_86.part.js": "50a00c0ce7808f99ab19c8f46bdbe099",
"main.dart.js_72.part.js": "e83c8758d8490d6cb36fb44326b648c1",
"main.dart.js_11.part.js": "20b30c3ce210deddb0e8c4282ca3d75f",
"main.dart.js_73.part.js": "8d0d0448431a9e9f91a590b126e7eb27",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"main.dart.js_97.part.js": "05eac0c605a0a55531b0bda08dfb59b3",
"main.dart.js_67.part.js": "df2ffab58bbf39e87d652217c918fbd7",
"main.dart.js_3.part.js": "5d7dfe708304dd8255665f47554f9718",
"main.dart.js_4.part.js": "5291f7e63617fa6920212add4e357e44",
"main.dart.js_66.part.js": "b745aafd58fb33c8e77e47ab7035b69c",
"main.dart.js_96.part.js": "c461525b2ab4832b099640f0ae43bdf7",
"main.dart.js_74.part.js": "74069b1bc5893b23b89f763ed5d05ae9",
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
"main.dart.js_55.part.js": "1a0e78f92dfcffe143eedc2f2be09562",
"main.dart.js_62.part.js": "e4b7247a8948308ebaf3c2d220ea645a",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"main.dart.js_2.part.js": "fbc251d3ff8f520d06d93b2ff748beb6",
"main.dart.js_93.part.js": "eab02c62ff80daecffba8e28ca1d9618",
"main.dart.js_88.part.js": "f3f71c6450f9c40a6ec3c2052b1015be",
"main.dart.js_44.part.js": "95b535ab09d770678c62b23c45ed9526",
"main.dart.js_46.part.js": "3a8a91369bd0c1af9a44f9f0804dd997",
"main.dart.js_71.part.js": "55709fe85f33222f963a01af51309528",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_47.part.js": "1643e1816a71e9cd8eef2ea7ae436d97",
"main.dart.js_100.part.js": "c84322506c64c68c2ff11400ccc83099",
"main.dart.js_99.part.js": "f2df7c8a80b535702f37fe82d6501ca5",
"main.dart.js_35.part.js": "40696359ff392fb20990193b3b0753bb",
"main.dart.js_41.part.js": "3bf335422b8007db746bef05a41bb289",
"main.dart.js_81.part.js": "df197f1a5f5c7f784db4a9adabe3d5d0",
"main.dart.js_39.part.js": "f49d59336cbb6d0f51422d37bb1228d6"
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
