'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_78.part.js": "c518971cf675eb9a1799b7b23f99bfdd",
"main.dart.js_64.part.js": "c2643fad8377f4873709597a80e4646b",
"main.dart.js_38.part.js": "659ce0849783c59e646772a99c756bf2",
"main.dart.js_23.part.js": "73620c06a8346c0a1ee1a3a1a33d0603",
"main.dart.js_82.part.js": "5bd52e2615e3a18f260cc425edcf1ade",
"main.dart.js_4.part.js": "867bd7f000e46527b4af334fff59f82f",
"main.dart.js_20.part.js": "f4751b8b7a9e5d7814326eb73cfe642e",
"main.dart.js_1.part.js": "259883d0391d028116092f825030fb78",
"main.dart.js_66.part.js": "8e12a9dc6ee2bd6e1ffea363b9230b35",
"main.dart.js_6.part.js": "0d09ad533f7a162aa9dd9ec623946b36",
"main.dart.js_87.part.js": "08366eec19c91b9d97074acb9af4d62d",
"main.dart.js_50.part.js": "cd56336bce0b9ea1917df0fee8ff93ee",
"main.dart.js_84.part.js": "7cc5e090f00c23365954dc12e3760844",
"main.dart.js_3.part.js": "d19a288fda941e41f018cf3710fd3bea",
"main.dart.js_26.part.js": "c14c2421f75e79b8dde6fd9c90bc7977",
"main.dart.js_8.part.js": "7ed77bbc5defc2cfdafa263be26086f2",
"main.dart.js_55.part.js": "47418a43f39c19b3d08834cb081b9d61",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_31.part.js": "9128e8a370219c7d98a36f264e352b5c",
"main.dart.js_2.part.js": "e006b22fb65a334c83c11924112bc3e5",
"main.dart.js_18.part.js": "9a83c04ac520bf0ab17f12f4cb3d01e8",
"main.dart.js_56.part.js": "cdf7d1e6b53591cf0ed1ac81bd4c0cd8",
"main.dart.js_39.part.js": "17445d8a638d690616a511e862eeb782",
"main.dart.js_90.part.js": "1d62a7ec88f76dfb044c7f021c09ffd1",
"main.dart.js_19.part.js": "001bfe8b3e6154228e37ffa54eb4703e",
"main.dart.js_89.part.js": "33508ec9fbd7f621657125658cdce3bc",
"main.dart.js_76.part.js": "0fc9d731e1ffef4a9c55e2898979f77c",
"main.dart.js_83.part.js": "ac4067fcd3285bcc42a92fdd4ebe0d65",
"main.dart.js_21.part.js": "57ccf57b38f87ff59a21c44b67a0bec1",
"main.dart.js_48.part.js": "bb684e9d5f98b0de5d3a58e4c79cb1b4",
"main.dart.js_36.part.js": "aa3b0224b98c4db97e2e6f3bc756e464",
"main.dart.js_79.part.js": "d77c50a553136f895a24068c189e83e2",
"main.dart.js_49.part.js": "5af902ee22cf2194c73e37df092aec65",
"main.dart.js_67.part.js": "6594add0084682894f31b99ff2ba6094",
"main.dart.js_45.part.js": "c4d17a83e206a9581c17da599e26f599",
"main.dart.js_51.part.js": "05870f42ed665bd0289bd73c8fb4fbe2",
"main.dart.js_9.part.js": "e4c35fb8d6690f9ba1f443ac5a769686",
"main.dart.js_80.part.js": "9dd94f7de5517887f09a364323d7a168",
"main.dart.js_52.part.js": "06e2abbaaec781496ee99337c478a3ec",
"main.dart.js_73.part.js": "841757ba94460ca2efa7a08272346a9d",
"main.dart.js_71.part.js": "bb8fbce27a9c6180bc80a14c610f1ac9",
"main.dart.js_70.part.js": "cdaf3cc8f31eb928b074bd45721d7ed0",
"main.dart.js_74.part.js": "89911d8d163c055fe8339735c790bebb",
"main.dart.js_58.part.js": "481915ae97927591e7dc4ebc3670ffba",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_10.part.js": "3fafbe18c3c15b43172d25866b1d418c",
"main.dart.js_24.part.js": "12d072cfae350b9eefc6ef24bbf25de0",
"main.dart.js_61.part.js": "f6803e31893f3d5b47afc1630ad5dbf2",
"main.dart.js_57.part.js": "85b8107de70646f53764b5b28984ea71",
"main.dart.js_68.part.js": "577bdd04289509bc782c098e384b5282",
"main.dart.js_44.part.js": "c4a48edddf63c5156a7810c7e819a6dd",
"main.dart.js_34.part.js": "48bcec0eff8a84ba6c07fd1ef4233434",
"main.dart.js_16.part.js": "fa7f132dbbba52ff2c3b80d4dac24277",
"main.dart.js_14.part.js": "4f4b0daae04dae4651f31329a8b2a3fe",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_47.part.js": "786da6e39bbbf0e9d718443e4c9a60b3",
"main.dart.js_88.part.js": "6c6972359baba2845165394b27b81435",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"main.dart.js_15.part.js": "547a5c7397e80ef4103b62dd84b1ff91",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"assets/FontManifest.json": "53875f0262dd9428ccea9618c4a0716d",
"assets/assets/image/user/header_default.jpg": "b9f53f41cc6a520563ce6ae72b2c21a9",
"assets/assets/image/novel/cover_default.jpg": "50f974b716adc676b423b08bd691a051",
"assets/assets/image/smiley/2.png": "439e32d773b5847a707a244cebeec520",
"assets/assets/image/smiley/16.png": "cd9486865812ccf5da1daeef59522e1b",
"assets/assets/image/smiley/46.png": "4bc6c4827d62ad63e921a3cdc30f28b1",
"assets/assets/image/smiley/4.png": "17ebd5203e92a1fe9b5ca45f38f688e2",
"assets/assets/image/smiley/33.png": "ea7316cb4d4b2a90b882ad21fe90cdae",
"assets/assets/image/smiley/23.png": "5f3f998fadf656d2a9c1828783fa1b4e",
"assets/assets/image/smiley/50.png": "489c93866ea3a934eee317bfcbc7bcd0",
"assets/assets/image/smiley/21.png": "623d7dfaf0ea7fefc91a1fd8fed423a9",
"assets/assets/image/smiley/14.png": "c1dbde12477d161bd757fc5c9a7308f1",
"assets/assets/image/smiley/28.png": "861e1aa1a36f617efea7e11ef00aecdd",
"assets/assets/image/smiley/24.png": "8205dfbf407c2ddf7339eadc6d181186",
"assets/assets/image/smiley/19.png": "1c07a6e8e0998ccb1110ddc60a32bdd1",
"assets/assets/image/smiley/31.png": "67f173516616a67311d6b3cb261e1458",
"assets/assets/image/smiley/18.png": "91cecf3e4e98cd3d3a766bcdeae2e37b",
"assets/assets/image/smiley/13.png": "6b79d7288dfdf5ec98b21593e2918c36",
"assets/assets/image/smiley/17.png": "108d283e9702aa878f6f100ef6a187e3",
"assets/assets/image/smiley/47.png": "df29631827c00f343360de2a9b9044f5",
"assets/assets/image/smiley/34.png": "14d8b10afe7841e33190682f6cf29c58",
"assets/assets/image/smiley/10.png": "9a8e1ac8c00fbbb1f07691911070ba9e",
"assets/assets/image/smiley/1.png": "55f3faf3709f3e3de286468abf480d0d",
"assets/assets/image/smiley/7.png": "a00e90943a7e83d95c6a656dec9fa3c8",
"assets/assets/image/smiley/9.png": "982cc9814f65206b2f178b2f60fcf05d",
"assets/assets/image/smiley/3.png": "3c989aa3d4c6181ab9038064715e3687",
"assets/assets/image/smiley/32.png": "4f8a1bdec1a4576540b6af1b21be7c22",
"assets/assets/image/smiley/6.png": "3126f5b6298c6cfc6980e69915c58448",
"assets/assets/image/smiley/15.png": "a740b88cc01570f6f3847d022acbdf6d",
"assets/assets/image/smiley/49.png": "871e18a561743981abdf40f4fcbf4524",
"assets/assets/image/smiley/36.png": "78c44cbc9a24bb49d0da295a427966a0",
"assets/assets/image/smiley/8.png": "d8e89128df357a6bf571bdff1fa61ca0",
"assets/assets/image/smiley/11.png": "d0bd514ba44db63e28d49cc1245e4abc",
"assets/assets/image/smiley/35.png": "bdbca794070c2e19a03049232bc7b499",
"assets/assets/image/smiley/25.png": "ecc25f593b968fab2b1a056b98c48836",
"assets/assets/image/smiley/48.png": "d1c46e7d5f885f23116fffb3893027c5",
"assets/assets/image/smiley/30.png": "8435ccf09fbc022fdeaf873af23a1933",
"assets/assets/image/smiley/26.png": "b5c25b2a9f879efc45197b2460ac3ed6",
"assets/assets/image/smiley/22.png": "3e302ef38882bdafe40a39491fdec7fd",
"assets/assets/image/smiley/12.png": "c59383065afdaa3876c84cc92ef38678",
"assets/assets/image/smiley/27.png": "ff051318e791e25283eb64241db911e6",
"assets/assets/image/smiley/29.png": "7bb30c5f4ac2283d8b61f4d52026793b",
"assets/assets/image/smiley/43.png": "4dd0303c301698bea5f022d14e616598",
"assets/assets/image/smiley/5.png": "919639b1527712ab8c5a7f7d66ecd8b4",
"assets/assets/image/system/logo.png": "cbb8e407a4049aa0386d0c03d89cc823",
"assets/assets/image/system/error.png": "501f691a5a68573d20450b43e4d408bd",
"assets/NOTICES": "0f3b208fc0423b507134ab1533564284",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/AssetManifest.json": "311dfece901ebf51e899a28d57221e3e",
"index.html": "201ad23d5cf8251ff9edd13921aa74af",
"/": "201ad23d5cf8251ff9edd13921aa74af",
"main.dart.js_7.part.js": "fce7e130c6e29166cc2394cee5632599",
"main.dart.js_17.part.js": "4f09bb16ce52e6369e21c0056066720b",
"main.dart.js_42.part.js": "9b1f7a06d3b6346240123702e4d84a59",
"main.dart.js_85.part.js": "921c8d8b495bc03592859807564e36d2",
"main.dart.js_11.part.js": "f866e7d28e8d4cc4d469a543607320b2",
"main.dart.js_75.part.js": "9909e66f8ea7d283074374ed295eeca7",
"main.dart.js_13.part.js": "c82fa72f681ac24f2e82b5aeabd6b088",
"main.dart.js_46.part.js": "131e5b748ac25ab1ed65af8828e874bf",
"main.dart.js_59.part.js": "650c169ba76928741ac0bd2c9d5bf32b",
"main.dart.js_65.part.js": "e3ba9643f4ef2eab76d0a5f630a1d125",
"main.dart.js_29.part.js": "77b09e3b9f022784b1f06b6482c63324",
"main.dart.js_81.part.js": "0c366f887dfa501f39140dab867a1fe4",
"main.dart.js_41.part.js": "03a350a0f9c98f8ed8c019526fa7072f",
"main.dart.js_33.part.js": "3c7da4a81710238fa1f76772da828a6d",
"main.dart.js_43.part.js": "641ef5521f9b5b2095bb0a6bad497ac7",
"main.dart.js_22.part.js": "921128bbefbcaf0dfa593142f420eaf2",
"main.dart.js_86.part.js": "59505be03251aa21c46ea25879b43385",
"main.dart.js_28.part.js": "a0a9fde676c8083cfc57ff781e634cfb",
"main.dart.js_77.part.js": "2a63f14087d52b3ed03399ea63b6a863",
"main.dart.js": "580a42a9e2c13dc6f2d197855ed87169",
"main.dart.js_37.part.js": "5e97e61609150d15e10b6788e228ec4a",
"main.dart.js_35.part.js": "53c19cd7a3f784c792c225c1f4f9702d",
"main.dart.js_72.part.js": "c03c8287d12f2c8b614f5416666027b1",
"main.dart.js_91.part.js": "87bd12474893493aeff885c2454fe4fa",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"main.dart.js_40.part.js": "01dfbda218237ee11939e0708479d334",
"main.dart.js_63.part.js": "3d6d5a979ef3c5985c1d7023ff57bb92",
"main.dart.js_54.part.js": "8bb6565623e1be1e74173203b5012fcf",
"main.dart.js_53.part.js": "03c199bc93426c470eeec769278a854e",
"main.dart.js_60.part.js": "d8b64460c2a5feaed548753d8f857065",
"main.dart.js_12.part.js": "9ea8e3f0bcb882308c270451f3cef60e",
"main.dart.js_62.part.js": "58fb0213f53ca6350d2310bc09a8a070"
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
