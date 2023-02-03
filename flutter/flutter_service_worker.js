'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_64.part.js": "a6a2ceb30df1cfc3ee51d6ccfffc5c3b",
"main.dart.js_17.part.js": "820c1dcd4edb1e3e8fceed402915323e",
"main.dart.js_58.part.js": "72c9196a191bd2c9c4b3f9234af8608c",
"main.dart.js_110.part.js": "a13c850487723f97579f41ef0690413d",
"main.dart.js_109.part.js": "9af2c2dfd015e7c839b18b62f770763d",
"main.dart.js_94.part.js": "0c4ade2a3ff760daa4e72218f69b1cdf",
"main.dart.js_16.part.js": "e247cc078b602c15ba0ed764af5726bb",
"main.dart.js_85.part.js": "f3bf176df9de0ea9d7d1b6aae4544e39",
"main.dart.js_82.part.js": "933a27a0d9f12bf97a39cf8335fd61bf",
"main.dart.js_18.part.js": "2c46ce4db59133f699a9442373971899",
"main.dart.js_31.part.js": "c9bd9341dff27eca244d12c57689ef3a",
"main.dart.js_105.part.js": "1bd55d29be6d98a5e86c140c3000dcaf",
"main.dart.js_79.part.js": "5d07634468489d5ce1040491a8baf34e",
"main.dart.js_8.part.js": "33c516a3c74038d68c60facdae3a98e6",
"main.dart.js_102.part.js": "272ecb8c0d58ff95feb511915a49d90a",
"main.dart.js_113.part.js": "f3cdcfe4a42b9d9eecba6928e9826847",
"main.dart.js_36.part.js": "59cb9e2d6be5422ab68018da25671c02",
"main.dart.js_21.part.js": "fa0e17e1ff9306e5bf99c4ac66cbcb9e",
"main.dart.js_52.part.js": "831da5acd0751350f14e88fa17c452e2",
"main.dart.js_34.part.js": "8666c29a5784e678a150117fbd0f5bf7",
"main.dart.js_108.part.js": "4d12babd3ae0942dce904cd71ab71e7a",
"main.dart.js_65.part.js": "d526ea635d7f8af7fb0dbf26a70887ac",
"main.dart.js_87.part.js": "bc31bb6b53b831fe1d2bb47cd16ffad3",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"main.dart.js_29.part.js": "01f538baf9de9f10afba8f416c3be593",
"main.dart.js_91.part.js": "6c4d1fc4de1b7beec5df98fad59eace8",
"main.dart.js_45.part.js": "d0c1c9d1eae75be372769cb21558ba66",
"main.dart.js_20.part.js": "a6357272ce0698a16cfdf0b2a3142c65",
"main.dart.js_30.part.js": "af80b70150c114d1baa1dd5bbb719584",
"main.dart.js_9.part.js": "f4fe820bd7a7b0b01cb91fe728495f76",
"main.dart.js_6.part.js": "6f36995c738d473ae0dba9d413d84c91",
"main.dart.js_77.part.js": "2f63a2299057a26abfa9f1a8203021d9",
"main.dart.js_53.part.js": "afba1b443e724c2f93f21e63226be4c1",
"main.dart.js_80.part.js": "4baf033bc9fb0c49fe0a20badd1c7ed3",
"main.dart.js_57.part.js": "12b532c79510968630c62f28fee43512",
"main.dart.js_7.part.js": "2b5a102b9d04fdda159264e1c7f27502",
"main.dart.js_32.part.js": "9787eb6cbb39123a623b775d5b04f2e0",
"main.dart.js_98.part.js": "db51adf8774a54759a50b05dae4c9b89",
"main.dart.js_23.part.js": "8ef2ddd5a9e0dc4364467c70a40f0fe2",
"index.html": "ea13f7d0f1c3fc1ef1be2128bab3e01c",
"/": "ea13f7d0f1c3fc1ef1be2128bab3e01c",
"main.dart.js_38.part.js": "d2ec4583fbd34728b887a398a370e726",
"main.dart.js_111.part.js": "34bb9f8905ee3471a306088f7d116781",
"main.dart.js_76.part.js": "a65223c071d68d993edc1f9c00758f8e",
"main.dart.js_54.part.js": "7e5fdd8dcabc751f0d8335f777b88594",
"main.dart.js_95.part.js": "cc922496efae2836fc1cdff44dc21486",
"main.dart.js": "adb1e88488f2000682aaf4d3f0b06a07",
"main.dart.js_19.part.js": "34f3084d17a581a70cc410781868ad70",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_50.part.js": "00127dab91cd6f9c051b2fe799b0ac32",
"main.dart.js_1.part.js": "442da0676d7a76ad6a53c9f5fb163872",
"main.dart.js_42.part.js": "9bd15a9759f3b2ee49b7fd49c2de132f",
"main.dart.js_49.part.js": "0b24418a62c37f91779f167c65ed52fc",
"main.dart.js_25.part.js": "0c97ba7aaadf4d290c5ccbe6c12922b1",
"main.dart.js_107.part.js": "8f9447df62d96268eb0eed80fc49b2ce",
"main.dart.js_56.part.js": "2cd4143e34c4fa0fcf44f4723858506d",
"main.dart.js_33.part.js": "182b547ba78dde0dc79b80b37a804d97",
"main.dart.js_89.part.js": "2a8c00f9061e3deafbcc73a0746c0c68",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_68.part.js": "1377c059f32a75724a8a711dfb31028e",
"main.dart.js_48.part.js": "9b8c9628b26fe53cd1d9b91cc3e08936",
"main.dart.js_61.part.js": "38223f3c050eef04a3cda2e6ea133959",
"main.dart.js_26.part.js": "22db434fc7a6fafc7451dc4afbd0ec02",
"main.dart.js_24.part.js": "329e73bfbf3287f33cce35c18ee360db",
"main.dart.js_22.part.js": "09e262930a0792e59a61f3d0aae347f9",
"main.dart.js_13.part.js": "b410fedf174c62533e78e8cb01983ffe",
"main.dart.js_69.part.js": "661419e8842e3cddf42ed5e6902948f9",
"main.dart.js_51.part.js": "c1b3375a05706c6d6eccbd61d24c590f",
"main.dart.js_78.part.js": "fd2b28d17cc6b1cabcb7d4077e7c2e4d",
"main.dart.js_10.part.js": "e12acd22e649fd08159fd454742fe75a",
"main.dart.js_27.part.js": "06e745b7577626b10e58174e634a62ed",
"main.dart.js_90.part.js": "2f489a1acb399a78573c1105aa5b7883",
"main.dart.js_86.part.js": "d839107f1ed319151ebdc7e71c03762e",
"main.dart.js_11.part.js": "20af2c57eb9740c2b2308663db71515d",
"main.dart.js_73.part.js": "3ee931c29b37b269a68b5571223edc87",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"main.dart.js_97.part.js": "037b050d7297f54a59aa87d81e722a5c",
"main.dart.js_106.part.js": "68e2aff9242e696a52278c19f2c2c019",
"main.dart.js_67.part.js": "c186c7dcfa393ecf721ef3205e98f07c",
"main.dart.js_3.part.js": "12963d8343635f6e57803a06cbe94b38",
"main.dart.js_4.part.js": "b1eb54ce0aebf54c295299c7ec8eea83",
"main.dart.js_112.part.js": "453afea782117c5367bd19cf57e2cbf6",
"main.dart.js_96.part.js": "af0768118740f635a0459b3346d07953",
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
"main.dart.js_55.part.js": "d74be1ec84857cde740d82c0115ee4dd",
"main.dart.js_103.part.js": "003988a99f2f071b68e583f92f780a45",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"main.dart.js_2.part.js": "90f79e0a9eecead5a0b08247cb6423a8",
"main.dart.js_93.part.js": "8d7e88897fa1cac3ed62db9d7601380d",
"main.dart.js_88.part.js": "9209aa67fdc6f2ba6aed80a1891fecc3",
"main.dart.js_44.part.js": "2943570fb6a442ef8ecff4ca0a442815",
"main.dart.js_46.part.js": "8cce9a6769d5fefab615d650a8749bd7",
"main.dart.js_71.part.js": "9921b595b1aa2708de1fe8403acbb0d9",
"main.dart.js_60.part.js": "10438b4e8b13e44884338d7e1ef1c758",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_104.part.js": "748e648054183ee90ff48f469821843a",
"main.dart.js_47.part.js": "1a497510090e4876eab734614cf27582",
"main.dart.js_100.part.js": "fa73dd403daceffc3bd2deac58508a91",
"main.dart.js_99.part.js": "5f827728dce6881fa301cae7de87af1d",
"main.dart.js_35.part.js": "2aa281c8bdb206c61794898e048e917d",
"main.dart.js_41.part.js": "4c99336dcbcab77c14f941423c304898",
"main.dart.js_81.part.js": "14b99ef8930b6d757245bf7c76254d42",
"main.dart.js_101.part.js": "15d0b4683946504f22fe19ac857741a5",
"main.dart.js_39.part.js": "17a67e47a3ee3ab02fc0f5971da758f1"
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
