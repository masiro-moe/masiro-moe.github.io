'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_81.part.js": "d1e637079112a55a6948c612ddac607e",
"main.dart.js_14.part.js": "fce9ce8b0f2d6796baf10ed27ed359f9",
"main.dart.js_76.part.js": "616f8e692531945f3e3de1bf4b9c1fb2",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"main.dart.js_64.part.js": "c436cf3abf551ced6815887cf8bab962",
"main.dart.js_4.part.js": "6dfb3019680bb88ecffd60b9b143669e",
"main.dart.js_56.part.js": "df6ecaab92d809394c697ae6c3006935",
"main.dart.js_79.part.js": "476ff953ea8f75dbf22e5556308e0467",
"main.dart.js_74.part.js": "e6566c032350f1040f715b9c3b644ab2",
"main.dart.js_47.part.js": "4f151c102ae6deff6246ed7ff7e55a56",
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
"main.dart.js_53.part.js": "7255175266ad29412d9148e6de633221",
"main.dart.js_90.part.js": "79cae6cf76c993b6422ad910272e6b5e",
"main.dart.js": "2c745e5559f56a3046c3ad3202185ac1",
"main.dart.js_41.part.js": "a12d1fddfd8a435a8805f174bfb2e5de",
"main.dart.js_17.part.js": "4588201436607a0aba322b7e1dc12ede",
"main.dart.js_67.part.js": "4cab9453f14474615c60e9cf8e8825aa",
"main.dart.js_65.part.js": "cbc6c8ecd350d97523dfdb367cd0495b",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_88.part.js": "a60de78c6a57470d89806fa933fbf2c4",
"main.dart.js_13.part.js": "68b118be77d21080164ef5b3bd35b04e",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js_48.part.js": "3f859c93dfd110b5c16bde8e55540cf1",
"main.dart.js_66.part.js": "4ab839ee1a338fb9220df04903505fef",
"main.dart.js_77.part.js": "840c82553281d2f87b458cb1299ac819",
"main.dart.js_62.part.js": "3d8e168c7e03e7cafdf827d8dc55968f",
"main.dart.js_72.part.js": "1e82e7352e856cd0a71da1da36f7b582",
"main.dart.js_15.part.js": "66f6582f8bd3a31c1acec515e974be7d",
"main.dart.js_16.part.js": "a703e8733a73535b33c8ef567c9942c4",
"main.dart.js_1.part.js": "8eb565ac5bf815fc53f5c46ffe008b80",
"main.dart.js_57.part.js": "02b6f074dc0a80aa4dce072b4ee1276c",
"main.dart.js_7.part.js": "144b1998f3e8b3977f4f53d0c0c9b1bc",
"main.dart.js_91.part.js": "eb84f5eba6963a01329901ee211abac1",
"main.dart.js_50.part.js": "ca23e261536babcbc65d06ba735f9a85",
"main.dart.js_73.part.js": "126092840003950c94a94a42ebd3b158",
"main.dart.js_38.part.js": "a0d2994c323fc736883ef2ce8482c683",
"main.dart.js_46.part.js": "42d502c836e8878df85b1bc44a7e9d85",
"main.dart.js_78.part.js": "9ff52d18858f6fc5683dfbc16a588a88",
"main.dart.js_89.part.js": "df4785028ce8b02bf48a4927cb7afd85",
"main.dart.js_55.part.js": "49b18876780796c76311f9b07c7c3823",
"main.dart.js_58.part.js": "ad5471f524ddc8c2d7bd2ec117311f15",
"main.dart.js_35.part.js": "eccb910d7b345cfa9245f90ce77e1503",
"main.dart.js_63.part.js": "4f0265f51f3e9e9fe8931aa3e7b8edba",
"main.dart.js_22.part.js": "554608f99eb18d11d6a2b353feea85c5",
"main.dart.js_20.part.js": "631aab7bbf1f0292e7314ddb34370331",
"main.dart.js_85.part.js": "d3852436379c775a31a0668cf533f9e3",
"main.dart.js_37.part.js": "29f58f1b0cff427274734cae0eff51ab",
"main.dart.js_12.part.js": "d56388c73be33fd3b5221fab990adcc4",
"main.dart.js_51.part.js": "5952fc2f7c844489998f6e27fc10ec4f",
"main.dart.js_43.part.js": "b830fdf5e9e32e86a69baded6d69b97d",
"main.dart.js_80.part.js": "125494652591238ca7639fd6eec19c0d",
"main.dart.js_25.part.js": "7ef6a89409cd2223a32ba2812765c083",
"main.dart.js_9.part.js": "0f14467d39fc0521999eb68658bd6f80",
"main.dart.js_84.part.js": "8560b0e6a0d4235e3c11dabeca5e83be",
"main.dart.js_40.part.js": "d194e668e8acd024ec9bfd358939b586",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_34.part.js": "e9b2bcc39ef740f33f86cd7665cd04ed",
"main.dart.js_2.part.js": "f881c34af6ac3f8557b1a66e628d3060",
"main.dart.js_70.part.js": "9b627f7cef12f0a5cacd998d4c63634f",
"main.dart.js_32.part.js": "cdf4b103a048c0665ac8efbf4178b2a7",
"main.dart.js_69.part.js": "b3c998053498de143f423d885281ebb9",
"main.dart.js_42.part.js": "822523d4302c6f13b5637deacfaf92ac",
"main.dart.js_54.part.js": "1469778e779c1cf8dc329d4587ea9b1a",
"main.dart.js_24.part.js": "35a0ab670951db42372c06b4638fb251",
"main.dart.js_3.part.js": "b4fac7f65ddeda2e2b17b32bc4ffc73e",
"main.dart.js_61.part.js": "b19094dca2aa46685277286530d6e0b0",
"main.dart.js_21.part.js": "fe598886c60fe92c03bfd1e113dc8491",
"main.dart.js_28.part.js": "66f98c3685520a26df278bdea8b095d9",
"index.html": "21ed0c175a853d3106d455da296f7a47",
"/": "21ed0c175a853d3106d455da296f7a47",
"main.dart.js_18.part.js": "9b910a3d3d5a8f967312671b7d7087b8",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"main.dart.js_8.part.js": "f73327cdd74298ac3e84212ab5877d21",
"main.dart.js_19.part.js": "91e4c091948effdb137d94c479724a8d",
"main.dart.js_10.part.js": "6ad75ce1d15252f5cb31b1fb23126302",
"main.dart.js_23.part.js": "96e0bad684236771e52e9b785ee4578d",
"main.dart.js_83.part.js": "eddb92aa4863387e41a2c8c3b9dddd7c",
"main.dart.js_45.part.js": "06a39fc2813b5c95f5fcf00fff79af68",
"main.dart.js_6.part.js": "e93c5418ef125a252d74278b86125ea2",
"main.dart.js_44.part.js": "090f39d7c002e69db75af46a85a9b328",
"main.dart.js_93.part.js": "c01de4b63fc013dd8ef1ef1e9aaeaa64",
"main.dart.js_30.part.js": "3293708e1d7908b616cc6a43d87521b2",
"main.dart.js_60.part.js": "5a82c87af39d1e3f9397c0564bd17eb8",
"main.dart.js_27.part.js": "a6715dcc37443a6f9ed9d1d0dc55bfac",
"main.dart.js_92.part.js": "ef308d95a9ba8b5797de84522e09ed42",
"main.dart.js_49.part.js": "9eb19e4e5bd8021227399ffe5aed06aa",
"main.dart.js_75.part.js": "4a4fbf3c2952759b25e4d56bd625c980",
"main.dart.js_86.part.js": "831c3a120f071ef38ed28898042a5c1e",
"main.dart.js_11.part.js": "9ba6db37ccb3e2109700c52c02b61e94",
"main.dart.js_39.part.js": "46722b2826bb3836c13f0421e6af75ff",
"main.dart.js_59.part.js": "64dced2cc768d0087e4fa0c63d4c89db",
"main.dart.js_87.part.js": "cb72656073a0102bed738164b5c84fcf",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_52.part.js": "5467b29a68ba895576899dd34b9af24b",
"main.dart.js_82.part.js": "536872544059f7194f7feda69cee0fb9"
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
