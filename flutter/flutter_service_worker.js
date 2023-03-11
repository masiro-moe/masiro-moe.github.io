'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_81.part.js": "af37f6f4f1ced3c94ea1d7887f5ae78d",
"main.dart.js_14.part.js": "fd9ebdbf6fb725378f27f9e1a2928976",
"main.dart.js_76.part.js": "021eae673acd0f0188ec964a70b32a8a",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"main.dart.js_64.part.js": "b771bf6ea3a21b903987edca57d7dfc8",
"main.dart.js_29.part.js": "481ff42f331ca7fa6f705960a9860c12",
"main.dart.js_4.part.js": "486e58e3b51279661a227d239735881e",
"main.dart.js_56.part.js": "beb1ee95f0183612612727c5fa34d7bf",
"main.dart.js_79.part.js": "54f931f3549152040fa865cff8b6a5c3",
"main.dart.js_74.part.js": "3f44c743e707f974049b5bffcb0e657d",
"main.dart.js_47.part.js": "dd58049c3a2d495be9c856e224618246",
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
"main.dart.js_53.part.js": "f46427d1c832d8f485c5c7fd87c1970f",
"main.dart.js_90.part.js": "ea54802db2a6870591726b661a7ac9ac",
"main.dart.js": "b533f946476148cfc849ad306d9bd5ac",
"main.dart.js_68.part.js": "2c1890cfe007b376a125476971a8bb87",
"main.dart.js_41.part.js": "f34587a6e7e893699cc9d8db2800f1af",
"main.dart.js_17.part.js": "1858ccb00e1070446948eb73d1a0b7ea",
"main.dart.js_67.part.js": "8c0ecd993f27a2415e5827f3639f12b5",
"main.dart.js_65.part.js": "793f8f35025709a436ef36f12f6ba24e",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_88.part.js": "eaa3bbebb4f2b1f648180bdb106b1c87",
"main.dart.js_13.part.js": "671aa79b352b9df894cabf90d12d2451",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js_48.part.js": "5c5f111092bfab8eace1c3c9921b1e3e",
"main.dart.js_66.part.js": "9acc20b4d41a3d6b355cb482d50a63e3",
"main.dart.js_77.part.js": "01c511d9ba81c04146a3227451866b4e",
"main.dart.js_62.part.js": "c58aae41ba59730279c380fda2d3af6f",
"main.dart.js_72.part.js": "8a5c494a3f8f8cdf7082602d2fe8e154",
"main.dart.js_15.part.js": "3f5f01255b82dc3ea455057733ac5da1",
"main.dart.js_16.part.js": "8b5646c0b992c92ec95fef296600b2c0",
"main.dart.js_1.part.js": "cb76cf648eda9bd1532983bbd7d60e91",
"main.dart.js_57.part.js": "54726435689b32b640645d9474f81069",
"main.dart.js_36.part.js": "e60cad6cd9a045c978b8825dfb45ab57",
"main.dart.js_7.part.js": "c242ea7ee779627b7973e652280fc58b",
"main.dart.js_91.part.js": "c22c7a3c629cbd00ae9318e8437926ed",
"main.dart.js_50.part.js": "617254abf082ab931f64e8ac0d1687f5",
"main.dart.js_73.part.js": "09e121250ac165b4648727a1f121da5c",
"main.dart.js_38.part.js": "2c90f36cd61f50efcc930c7d712f1ef9",
"main.dart.js_46.part.js": "3ee976028c134deac0b3f8178ead5910",
"main.dart.js_78.part.js": "a6d8764a25fa43aa1a3293721fe1d053",
"main.dart.js_31.part.js": "53e734f6b2feeac236e070b79d6f0048",
"main.dart.js_89.part.js": "dd7b414bcb056201317e5b58b5d03804",
"main.dart.js_55.part.js": "3de8c9e4b2fd3c4126142461db4c2c44",
"main.dart.js_58.part.js": "cad777832de1261bf0cce84c313247cc",
"main.dart.js_35.part.js": "e9bebac418912545eca6e99103ad4e91",
"main.dart.js_63.part.js": "c155f6b28a7b7e351fc1656e324f5bbd",
"main.dart.js_22.part.js": "ffcdb2f639a0730896cb8f661255c362",
"main.dart.js_20.part.js": "dab1a4d4a187d7cb60705d09491fb56d",
"main.dart.js_85.part.js": "063d62db3cc4e1d4f8f19423626d34eb",
"main.dart.js_37.part.js": "ec6494bbec73bf785126c3b85db6509f",
"main.dart.js_12.part.js": "bc85a81ccf9cce38ee1bd7ecd6d31954",
"main.dart.js_51.part.js": "b1efb2b2492372fdf753ccf09676e78e",
"main.dart.js_43.part.js": "d7b7354e08adfc1a47d3353d1faea390",
"main.dart.js_80.part.js": "e5b6c1e0483ec150850c87b596a96385",
"main.dart.js_9.part.js": "4dffe90020b42176491d7801b5bbbe5d",
"main.dart.js_84.part.js": "e8255a8cc9b7f65c8c7ac08a588d8f24",
"main.dart.js_40.part.js": "d4f14a8298ad5b91f194ea175a537335",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_34.part.js": "da2b43cd54da1303b2321f233f599954",
"main.dart.js_2.part.js": "4af795033908bc7cf7a7c07bd53ab556",
"main.dart.js_69.part.js": "44a9ecb0014830ede67a69de03a5ed00",
"main.dart.js_42.part.js": "1280c0bc38f502c5438589950445f6c4",
"main.dart.js_54.part.js": "8fc32876a566894a0ac5f18f0f61dfdb",
"main.dart.js_33.part.js": "8e0431bd2846e07da217d06a1333be89",
"main.dart.js_24.part.js": "a03c8d866d0894fa46d3f5a4fa7ebaec",
"main.dart.js_3.part.js": "fdfbf52834599d64a7433f68ae375c0d",
"main.dart.js_61.part.js": "2ca93213ec5f437285efe74f361bd53f",
"main.dart.js_21.part.js": "cb9fb007ae3a7644e0429b8839669977",
"main.dart.js_28.part.js": "f94257dbc69ad54a01776906c9853a17",
"index.html": "4463ee8f98f05772d2232b5cc69164a1",
"/": "4463ee8f98f05772d2232b5cc69164a1",
"main.dart.js_18.part.js": "54fef14f56e8bef335198748835b9c82",
"main.dart.js_26.part.js": "9693609e5074b231720dfec0c698a57a",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"main.dart.js_8.part.js": "5e1731c6699085dba7513b654e26570f",
"main.dart.js_19.part.js": "bea8365b3370ad093a7d4cbac2c6e688",
"main.dart.js_71.part.js": "ffcbc67dd2ef7249ff70021b50a861a5",
"main.dart.js_10.part.js": "b68431efa5bdb89aa10d5fc7a8258d9e",
"main.dart.js_23.part.js": "8e75557dc67356e123d5c6b714d079e9",
"main.dart.js_83.part.js": "df70d6d38d8aee7ecc6f16ff268f15bd",
"main.dart.js_45.part.js": "ae8f73044deec38ea9c8231f1c3fd229",
"main.dart.js_6.part.js": "00e62d0e8028b53b8b034b1fd34f633e",
"main.dart.js_44.part.js": "1e3cf680754e624c70c459f49bf6b97f",
"main.dart.js_60.part.js": "17a88e92ff11ca264e2e2d7480f7eafc",
"main.dart.js_92.part.js": "d74c44b8ef587cf3d689ec5e1bc0f078",
"main.dart.js_49.part.js": "a7b7bc2fc66823e90c30358407cccb3c",
"main.dart.js_75.part.js": "829185c2aaf450efc7c45fb682273da3",
"main.dart.js_86.part.js": "41ad935b063f3bf32f310a8adb3ea6cf",
"main.dart.js_11.part.js": "715edf767dd240e740c670ab835fc176",
"main.dart.js_39.part.js": "7b2194958cfe157ef7b1d4342f034a74",
"main.dart.js_59.part.js": "5eae5081050627e58c9a03d37df47fbc",
"main.dart.js_87.part.js": "73ba474505163527258f34972ca21e2e",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_52.part.js": "7799203c5c79a38b2ea76201a90de70c",
"main.dart.js_82.part.js": "a6e235a4e23c053b97c7d4d23579a3c7"
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
