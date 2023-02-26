'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_78.part.js": "0347517873c3681cffc16ad7c50f4932",
"main.dart.js_64.part.js": "81d3693d60f04a29d7edc195b2e07d05",
"main.dart.js_38.part.js": "32d22db0f7d67748ef662736545d4300",
"main.dart.js_23.part.js": "20f5699792e58dcf86e1b711e35cc8bd",
"main.dart.js_82.part.js": "2ed71321e3605259fbd2d798f4fc836c",
"main.dart.js_4.part.js": "c4f2c531269abf6f451f506851f2a31b",
"main.dart.js_92.part.js": "885a2aa3f4729c306627b3256d5576cb",
"main.dart.js_20.part.js": "c36b1547e5509f4ad4bd4c6ad87cfa2a",
"main.dart.js_1.part.js": "f7940beebb061900f2b4545c358b7c59",
"main.dart.js_66.part.js": "9f287c801ff0c70148530f6a2a080631",
"main.dart.js_6.part.js": "0e541f9a3d0ff862ff7edabb7960ed2c",
"main.dart.js_87.part.js": "c18f20e83712ccf10a2d4ad5e5071c2f",
"main.dart.js_50.part.js": "dd8e56212f4ef33b9e86d637337eab6d",
"main.dart.js_84.part.js": "9e99c1fd1f5306f7c5f75a276acfc448",
"main.dart.js_3.part.js": "6436c0c0e0ee4f2bbd9ac4ec0e1a2cfb",
"main.dart.js_26.part.js": "6e310f3f03e0417b96c239e6f6acd0a2",
"main.dart.js_8.part.js": "4f5242f28ac46e2efdc1e8eeca0e86b9",
"main.dart.js_55.part.js": "267215ae488f0bfb3f996fcf42a78623",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_31.part.js": "ded5833b3845e4f36f746027db101d2c",
"main.dart.js_2.part.js": "cb595b7ec0d9415ecc8665d148ba9518",
"main.dart.js_18.part.js": "39c4814c0ba0100e0d2884640dd89aad",
"main.dart.js_56.part.js": "9cc24f42306d7b4a286ffe9cefe4c715",
"main.dart.js_39.part.js": "91993742d6918975871f12a68b0693d8",
"main.dart.js_90.part.js": "4d5545b7d429770f3cccbb26beb6a0e6",
"main.dart.js_19.part.js": "72781d39bc791f2a721ed1e3a513e245",
"main.dart.js_89.part.js": "e09f27429e711d23a3eff6c55b1db298",
"main.dart.js_76.part.js": "3bcc5115fc7dfad16c5ca391f688a93d",
"main.dart.js_83.part.js": "7b2bddd92d206355a13a1908b280d241",
"main.dart.js_21.part.js": "b87d3b0cf5507c7e06fe69107611b92f",
"main.dart.js_48.part.js": "f271c30fb3d8d10a39ab8a53e8b7bf38",
"main.dart.js_36.part.js": "99d70bf3a975de7afb05c663be0fe2af",
"main.dart.js_79.part.js": "bf3203dc78653ea709916f6ff20a6d75",
"main.dart.js_49.part.js": "964a1ce7a03dcd245df710ccbd9a1bf7",
"main.dart.js_67.part.js": "7fb2c4fe82a03f61277b2b0fbf1efe80",
"main.dart.js_45.part.js": "d833445347b30d49f982ca6056ee32e8",
"main.dart.js_51.part.js": "a4e2916fc3aec1e02fc5d7d7d9541b3d",
"main.dart.js_9.part.js": "74a4fa8bb48d4427ddc649a9f6ae99cb",
"main.dart.js_80.part.js": "a6204cf054ce1d4e716ae0ec391fb851",
"main.dart.js_52.part.js": "3d82e15e47ad5793b40e549f433e0fe3",
"main.dart.js_73.part.js": "493b1eaea89759366c688e6902cd8bc3",
"main.dart.js_71.part.js": "fb528dfb50eac6cae017f256c6dbe2c2",
"main.dart.js_74.part.js": "f04d9b871b0266a54f1cceec2d6271e2",
"main.dart.js_58.part.js": "6d19de402de8b458e8e1df15e41e9ef0",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_10.part.js": "8ba34e851f2377091a5ef948291815af",
"main.dart.js_24.part.js": "50814223016f84e12bda62470064d579",
"main.dart.js_61.part.js": "618eb66fa7263b906293b9a1ac248ed0",
"main.dart.js_57.part.js": "5e9103d8a2f7e2e1c6076128176e5dc7",
"main.dart.js_68.part.js": "5f3d11cb55a4e589622d785972e85b22",
"main.dart.js_44.part.js": "a2dae98a87442ec2f7923e22f690cd0f",
"main.dart.js_34.part.js": "294c8ef21bf98c1c4e3e319315dd4cc7",
"main.dart.js_16.part.js": "d81ff0d8d88befdc3e04bb5d906468cd",
"main.dart.js_14.part.js": "aaf943e03f520ab1bda43c37a7922dcb",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_47.part.js": "a32b662b90413a22586aab59a78f6fe4",
"main.dart.js_88.part.js": "a6086a7776da7aed868f9c71abd686d6",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"main.dart.js_15.part.js": "2fba325fee2069158c8a1e3d3913a036",
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
"index.html": "b3e39780291a096853dd38409883cdcd",
"/": "b3e39780291a096853dd38409883cdcd",
"main.dart.js_7.part.js": "5884d5f07478d61d03f82bc12bb5ca9f",
"main.dart.js_17.part.js": "81b5a90a7627ba74a96992441d394598",
"main.dart.js_42.part.js": "f91f558fce4213608f0a3e056be781ca",
"main.dart.js_85.part.js": "05b801bf64b8acf67c0f832dfb5ecee4",
"main.dart.js_11.part.js": "daf38dceb790c18ca25c414f6594c8ad",
"main.dart.js_75.part.js": "26281202bf05d05c68d4ae152a11daff",
"main.dart.js_13.part.js": "0bceb88e7154505ee7a95e347e387500",
"main.dart.js_46.part.js": "65153ec30c9ab619276922850f05a739",
"main.dart.js_59.part.js": "858048e7e5891627ffaa45a6c62862ca",
"main.dart.js_65.part.js": "d33174df19aaa2410673773081b52a29",
"main.dart.js_29.part.js": "4cbb4c3b6ebfcaf2e16731d9ad523f3d",
"main.dart.js_81.part.js": "d6b47be787cb124b0756fc27b45a6f82",
"main.dart.js_41.part.js": "962d089b3f4dda7395f6782e70a25aed",
"main.dart.js_33.part.js": "765859e51fefa60f3c96af4687bd0a3d",
"main.dart.js_43.part.js": "af76bbc293519be0d32a61e80728597d",
"main.dart.js_22.part.js": "2fcc2eed8d5262ba0d0e56540bbe1578",
"main.dart.js_86.part.js": "691fc950b6e74f8ab08971e4e6c3578b",
"main.dart.js_28.part.js": "23265866e6991c569ea0125ad5bb3c2e",
"main.dart.js_77.part.js": "ca514c47bb8e307389de63b8c779283a",
"main.dart.js": "8fe1c3b0252e348e45a9873848cf78b3",
"main.dart.js_69.part.js": "ebaa1347c7d75be61e4a7be00f0c9366",
"main.dart.js_37.part.js": "05174eea7578cc00029c5e035c2e3d43",
"main.dart.js_35.part.js": "e5f63e6593a5de6ca430e5d714e054a2",
"main.dart.js_72.part.js": "499b3242bf7d18cd3546bbd52a02ad80",
"main.dart.js_91.part.js": "ce620e2edf3a68daa894e10fc10af090",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"main.dart.js_40.part.js": "67ac608b8d8d0d57c9727ed80f14022b",
"main.dart.js_63.part.js": "8d347d2cb15743ddfeb8337c7bd3b317",
"main.dart.js_54.part.js": "52fb6b7dd24b789a511793ab3803c969",
"main.dart.js_53.part.js": "88d26c1e897c26ee02f030a1b4685b16",
"main.dart.js_60.part.js": "bbe7e4e76213ef9a8a7af9bf71f39771",
"main.dart.js_12.part.js": "9302cc948cdaef54ae49e5d4594188ff",
"main.dart.js_62.part.js": "c1e2b6424cdcc621ba30ca1963cf374f"
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
