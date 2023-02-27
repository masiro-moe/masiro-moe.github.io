'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_78.part.js": "0347517873c3681cffc16ad7c50f4932",
"main.dart.js_64.part.js": "81d3693d60f04a29d7edc195b2e07d05",
"main.dart.js_38.part.js": "32d22db0f7d67748ef662736545d4300",
"main.dart.js_23.part.js": "20f5699792e58dcf86e1b711e35cc8bd",
"main.dart.js_82.part.js": "a75d51dc45f477019033de70be230a9f",
"main.dart.js_4.part.js": "4eefbd3035e7f0e98eb823347a56ef0b",
"main.dart.js_92.part.js": "8e0d2605700b74538068ad5a6de3ac9c",
"main.dart.js_20.part.js": "c36b1547e5509f4ad4bd4c6ad87cfa2a",
"main.dart.js_1.part.js": "5a62473cef89ca097707b52c83844103",
"main.dart.js_66.part.js": "01a0e6210d7d8208b89f9c17d7c9c0ca",
"main.dart.js_6.part.js": "0e541f9a3d0ff862ff7edabb7960ed2c",
"main.dart.js_87.part.js": "31b88ac8c8a0e35bed7f84cefe5d7956",
"main.dart.js_50.part.js": "6499e40d5aaa53dfb50177378352d491",
"main.dart.js_84.part.js": "9e99c1fd1f5306f7c5f75a276acfc448",
"main.dart.js_3.part.js": "b0b68fca6915e05f55b113b86d916b30",
"main.dart.js_26.part.js": "61b5665a06b4976701159cdd10fcb919",
"main.dart.js_8.part.js": "10ed7903ec353a2ee22328451df34a73",
"main.dart.js_55.part.js": "1bb9ed7d282dd66a13bad90139cb14d6",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_31.part.js": "689a7d109895383063fe74d71a37ddfb",
"main.dart.js_2.part.js": "b76d474a1e70f2de1881cb2418da2dbb",
"main.dart.js_18.part.js": "cdc5d47c4701a43f13705ac3788e38a0",
"main.dart.js_56.part.js": "9cc24f42306d7b4a286ffe9cefe4c715",
"main.dart.js_39.part.js": "b253bb2359b28209cc88954cc4cd43d7",
"main.dart.js_90.part.js": "86b31caf861ce3ad5f4c70e74bb954fa",
"main.dart.js_19.part.js": "72781d39bc791f2a721ed1e3a513e245",
"main.dart.js_89.part.js": "66f5bb7b6cc25fcd70b9dfb730cb5713",
"main.dart.js_76.part.js": "3497ad30a6b1f8f46f64e61d03ec7a02",
"main.dart.js_83.part.js": "f6ba7c2372146aea9c4a9733000b12a7",
"main.dart.js_21.part.js": "d7d4c7a6dc0b1236f43cc9c4e33d9366",
"main.dart.js_48.part.js": "1821bcf58c8f3c3abec8cbd734a3d23d",
"main.dart.js_36.part.js": "99d70bf3a975de7afb05c663be0fe2af",
"main.dart.js_79.part.js": "67834614b95fd3972d18c0ec319de38b",
"main.dart.js_49.part.js": "17869594a97530103a53b2622e15ad21",
"main.dart.js_67.part.js": "116a4a60c9f81369dc464d1de9413830",
"main.dart.js_45.part.js": "3e7341e3f01c58094f51b00ca430846e",
"main.dart.js_51.part.js": "a68a47f3da98ebe90f847f8d2faa0c8b",
"main.dart.js_9.part.js": "597e021778df32850a5528486fdff3cd",
"main.dart.js_80.part.js": "94921733049a0cac51f9306505479264",
"main.dart.js_52.part.js": "84219f412f24d68b94992d23f145a896",
"main.dart.js_73.part.js": "8fe002ba736f804520de1a0219e90297",
"main.dart.js_71.part.js": "4b090cb1ba437c1f6b36c91182e80e58",
"main.dart.js_74.part.js": "f04d9b871b0266a54f1cceec2d6271e2",
"main.dart.js_58.part.js": "2c536828fe553c1f156efae923b172bc",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_10.part.js": "c120305ec25a2b46aa15cfe8c2fc0775",
"main.dart.js_24.part.js": "50814223016f84e12bda62470064d579",
"main.dart.js_61.part.js": "c05b4e928b09bfbee901efbcc67d7631",
"main.dart.js_57.part.js": "3f940aa2bcf06351ba1e9a82d8a93900",
"main.dart.js_68.part.js": "762db89ea3556d301372785566515f36",
"main.dart.js_44.part.js": "b92e6102edb2e4ab6b79fc468bd0b3a9",
"main.dart.js_34.part.js": "294c8ef21bf98c1c4e3e319315dd4cc7",
"main.dart.js_16.part.js": "9db220cc1f952158a155d576982007d8",
"main.dart.js_14.part.js": "db9e5a4676759691ac1ce78d3c310539",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_47.part.js": "2fcbc88e95094f99d4e6c8dc42e9d3b8",
"main.dart.js_88.part.js": "a9f5ed3ee1507a5663c464876f7f3e53",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"main.dart.js_15.part.js": "5bac9f5bf91aeded16d22d21c3f0b336",
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
"index.html": "db53b60ae5423877ca15ebf1d5d49f21",
"/": "db53b60ae5423877ca15ebf1d5d49f21",
"main.dart.js_7.part.js": "68757a31082867b4c435d06b3e76e1f2",
"main.dart.js_17.part.js": "dea5b2c32f1a9cf96ec3bd2cf0e1cb47",
"main.dart.js_42.part.js": "bc18edeac65ba4cf657fa819eddb0c93",
"main.dart.js_85.part.js": "a509996b7594c59a54d39d3a08776ceb",
"main.dart.js_11.part.js": "2b9c0156759b5938de63fec8d26645d0",
"main.dart.js_75.part.js": "800f147e3dff1600984e5fce339ec5a9",
"main.dart.js_13.part.js": "a445aeff89ac9db78931b4c2f938a0e5",
"main.dart.js_46.part.js": "d23003a3024ca9bd5038b1312588adcd",
"main.dart.js_59.part.js": "1d7c353ab656e7a5f75f4eca713f42d1",
"main.dart.js_65.part.js": "8a179947919da26446a2c3668f9237c4",
"main.dart.js_29.part.js": "936d6c3e38ea7d38186f46d1057adf96",
"main.dart.js_81.part.js": "86c4c159f3d431244fcdc879cf755581",
"main.dart.js_41.part.js": "962d089b3f4dda7395f6782e70a25aed",
"main.dart.js_33.part.js": "2036064c27f8862bbe2b9b036d6dd591",
"main.dart.js_43.part.js": "7dabe536c129e35bee7028b3e80de756",
"main.dart.js_22.part.js": "0e993e6221693cbb6a915b8e741ad0e0",
"main.dart.js_86.part.js": "24b6195a95813bd70f6ecb0127f4b67f",
"main.dart.js_28.part.js": "23265866e6991c569ea0125ad5bb3c2e",
"main.dart.js_77.part.js": "735779b2ffce46549ac493ebe1437889",
"main.dart.js": "ec7dcc1d1631dd0c67efba3866e29a02",
"main.dart.js_69.part.js": "a8d91831cb2d252545e6d96fedf87f3b",
"main.dart.js_37.part.js": "05174eea7578cc00029c5e035c2e3d43",
"main.dart.js_35.part.js": "e5f63e6593a5de6ca430e5d714e054a2",
"main.dart.js_72.part.js": "c9a6431c9d174b6b7f4a54acfc3fb8f8",
"main.dart.js_91.part.js": "7607638d399d2a4ad261b7e5d72a31c9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"main.dart.js_40.part.js": "71b24a828e29ef9bb6c15ea32e10a71d",
"main.dart.js_63.part.js": "956e7042c93326d5aef7f0c5be536793",
"main.dart.js_54.part.js": "60bc4f24adb8efe117011c9882fde47c",
"main.dart.js_53.part.js": "e01ae90832533c827c8de4f94bbb1c48",
"main.dart.js_60.part.js": "bbe7e4e76213ef9a8a7af9bf71f39771",
"main.dart.js_12.part.js": "199bc96e80935f5859397f5856bd3f8d",
"main.dart.js_62.part.js": "67fd08ffec47febc3dc2087fcb019567"
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
