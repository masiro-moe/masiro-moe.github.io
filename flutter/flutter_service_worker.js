'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_39.part.js": "a0d2994c323fc736883ef2ce8482c683",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_60.part.js": "5a82c87af39d1e3f9397c0564bd17eb8",
"main.dart.js_25.part.js": "ccba8ba561b4aa25817dca9f53f1d96c",
"main.dart.js_49.part.js": "614d2951dce9875dd5371397a5c0b1e8",
"main.dart.js_90.part.js": "61bedf3d829cebaf2d74bd5650fd6046",
"main.dart.js_29.part.js": "385e5fac6cf3bf3a9236c059f4cc8466",
"main.dart.js_83.part.js": "53a63f70c001bca98656c334f1d254c9",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js_3.part.js": "acfea95b05b7cddd6ca6c210bb8ed037",
"main.dart.js_66.part.js": "373892b358dc89bfe419aaa7b1d43abc",
"main.dart.js_52.part.js": "6edfd524ce0502267f52d4a5ba336f54",
"main.dart.js_64.part.js": "5ae0d404a01e480e4dde897c9dedd02a",
"main.dart.js_43.part.js": "8ee299bca4639a7465def4bdc3fe33df",
"main.dart.js_63.part.js": "1532c851ab5a578f7aae1c9e2b82c9e8",
"main.dart.js_51.part.js": "9c9cf6601493f4a809ec2742f7ae012b",
"main.dart.js_27.part.js": "65b52dcf9bf999f4c2e5aa19a4bc15ab",
"main.dart.js_33.part.js": "1865bffeccf4c46e2dfe5afdd9d7389d",
"main.dart.js_9.part.js": "00912639b73d2e66c350d3854bb72f0d",
"main.dart.js_40.part.js": "f87314ca9e2e5828d4da51719d921db6",
"main.dart.js_81.part.js": "5bcf64910e37d2b23966d5160cc8580b",
"main.dart.js_13.part.js": "fcc002e45579792a84ffff4b11f2b73f",
"main.dart.js_74.part.js": "b8bfb8cb42dc774ca89d3342ea4d158c",
"main.dart.js_41.part.js": "a12d1fddfd8a435a8805f174bfb2e5de",
"main.dart.js_62.part.js": "3286f7946fb1e88d8d0efbfecbf2a05b",
"main.dart.js_16.part.js": "0a3b0ba63f869fb211a5b812f8cd6fb9",
"main.dart.js_92.part.js": "3a528fe7fcdfbdb620ab60221da9d589",
"main.dart.js_79.part.js": "40460457519db1536ca6eb60dd095f7b",
"main.dart.js_57.part.js": "97b6fd1bd57c2601faee5105a8a901af",
"main.dart.js_20.part.js": "11fef8d559fee786fd8eb6b508a2237f",
"main.dart.js": "51195900adf0dd4bea16518cccc8ff46",
"main.dart.js_94.part.js": "5dea316ac2db93ed3e7bf1a86fa53335",
"main.dart.js_8.part.js": "f125bb98f4d68c376eb0dc1647b96450",
"main.dart.js_59.part.js": "8d7722d53df57ce5077f9ccbff35c346",
"main.dart.js_42.part.js": "eb1fd6ba180804f0b4f2427ebc9a9ba8",
"main.dart.js_55.part.js": "898d672e44cba5bf768e0f3e38910fcd",
"main.dart.js_85.part.js": "8a66df63ee7c8503b371dee4b4aa9aff",
"main.dart.js_30.part.js": "8b82aa9a65f0b7fa7434c4e767f5c1f8",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"main.dart.js_71.part.js": "5ae63799dd236b7eeca37fb30c8923d7",
"main.dart.js_89.part.js": "afc257603ec284625baf318765d3962b",
"main.dart.js_36.part.js": "4059b7d2a8e022b5217d3105d7394567",
"main.dart.js_23.part.js": "75e02319a8e35aef938c42f203fc88dd",
"main.dart.js_68.part.js": "6ddb2c00efdd372eb28e6ace33652ce0",
"main.dart.js_48.part.js": "3f859c93dfd110b5c16bde8e55540cf1",
"main.dart.js_87.part.js": "22a19587213dc1b95ef3fe1991a71174",
"main.dart.js_44.part.js": "448f6c831fed6cc847b6fe50ba9b354d",
"main.dart.js_91.part.js": "4d680ac93c184c5a3c93a641b8875664",
"main.dart.js_12.part.js": "dcb5540f2bc252101f3dbe41fd21fdaa",
"main.dart.js_86.part.js": "6b462f7f5c8410e6ce89fa7926b2ce88",
"main.dart.js_1.part.js": "8215739d37148ebcf8a5e0ee1c2cd780",
"main.dart.js_78.part.js": "bc325b0e71862075b8d108d14aa23864",
"main.dart.js_15.part.js": "80616e13aea5b3383b6a2f191cc7283c",
"main.dart.js_76.part.js": "4a4fbf3c2952759b25e4d56bd625c980",
"main.dart.js_77.part.js": "945ab15fcc4a7b430dfdc669c966e7aa",
"main.dart.js_4.part.js": "6a0072ecf1a07714d91b128b51112af0",
"main.dart.js_47.part.js": "e3e3e7b90695ab2e2c7d9fc0bef80f98",
"main.dart.js_11.part.js": "a22e8b78633df323215f0c31c762d9e7",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_70.part.js": "cbdce91280e45b17b8b6eefe77190a4d",
"main.dart.js_14.part.js": "9ff37aa68e967f67235f8fe6966c5500",
"main.dart.js_93.part.js": "8b018b5a2a68b9ebd4e2a674dbcac13a",
"main.dart.js_19.part.js": "082372ff8a3432f0731f801e9d3b555c",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"assets/AssetManifest.json": "311dfece901ebf51e899a28d57221e3e",
"assets/assets/image/smiley/32.png": "4f8a1bdec1a4576540b6af1b21be7c22",
"assets/assets/image/smiley/46.png": "4bc6c4827d62ad63e921a3cdc30f28b1",
"assets/assets/image/smiley/8.png": "d8e89128df357a6bf571bdff1fa61ca0",
"assets/assets/image/smiley/12.png": "c59383065afdaa3876c84cc92ef38678",
"assets/assets/image/smiley/36.png": "78c44cbc9a24bb49d0da295a427966a0",
"assets/assets/image/smiley/16.png": "cd9486865812ccf5da1daeef59522e1b",
"assets/assets/image/smiley/3.png": "3c989aa3d4c6181ab9038064715e3687",
"assets/assets/image/smiley/24.png": "8205dfbf407c2ddf7339eadc6d181186",
"assets/assets/image/smiley/19.png": "1c07a6e8e0998ccb1110ddc60a32bdd1",
"assets/assets/image/smiley/15.png": "a740b88cc01570f6f3847d022acbdf6d",
"assets/assets/image/smiley/10.png": "9a8e1ac8c00fbbb1f07691911070ba9e",
"assets/assets/image/smiley/48.png": "d1c46e7d5f885f23116fffb3893027c5",
"assets/assets/image/smiley/43.png": "4dd0303c301698bea5f022d14e616598",
"assets/assets/image/smiley/4.png": "17ebd5203e92a1fe9b5ca45f38f688e2",
"assets/assets/image/smiley/47.png": "df29631827c00f343360de2a9b9044f5",
"assets/assets/image/smiley/9.png": "982cc9814f65206b2f178b2f60fcf05d",
"assets/assets/image/smiley/1.png": "55f3faf3709f3e3de286468abf480d0d",
"assets/assets/image/smiley/7.png": "a00e90943a7e83d95c6a656dec9fa3c8",
"assets/assets/image/smiley/28.png": "861e1aa1a36f617efea7e11ef00aecdd",
"assets/assets/image/smiley/27.png": "ff051318e791e25283eb64241db911e6",
"assets/assets/image/smiley/23.png": "5f3f998fadf656d2a9c1828783fa1b4e",
"assets/assets/image/smiley/14.png": "c1dbde12477d161bd757fc5c9a7308f1",
"assets/assets/image/smiley/26.png": "b5c25b2a9f879efc45197b2460ac3ed6",
"assets/assets/image/smiley/21.png": "623d7dfaf0ea7fefc91a1fd8fed423a9",
"assets/assets/image/smiley/11.png": "d0bd514ba44db63e28d49cc1245e4abc",
"assets/assets/image/smiley/33.png": "ea7316cb4d4b2a90b882ad21fe90cdae",
"assets/assets/image/smiley/35.png": "bdbca794070c2e19a03049232bc7b499",
"assets/assets/image/smiley/18.png": "91cecf3e4e98cd3d3a766bcdeae2e37b",
"assets/assets/image/smiley/13.png": "6b79d7288dfdf5ec98b21593e2918c36",
"assets/assets/image/smiley/29.png": "7bb30c5f4ac2283d8b61f4d52026793b",
"assets/assets/image/smiley/31.png": "67f173516616a67311d6b3cb261e1458",
"assets/assets/image/smiley/5.png": "919639b1527712ab8c5a7f7d66ecd8b4",
"assets/assets/image/smiley/6.png": "3126f5b6298c6cfc6980e69915c58448",
"assets/assets/image/smiley/49.png": "871e18a561743981abdf40f4fcbf4524",
"assets/assets/image/smiley/22.png": "3e302ef38882bdafe40a39491fdec7fd",
"assets/assets/image/smiley/50.png": "489c93866ea3a934eee317bfcbc7bcd0",
"assets/assets/image/smiley/30.png": "8435ccf09fbc022fdeaf873af23a1933",
"assets/assets/image/smiley/34.png": "14d8b10afe7841e33190682f6cf29c58",
"assets/assets/image/smiley/2.png": "439e32d773b5847a707a244cebeec520",
"assets/assets/image/smiley/17.png": "108d283e9702aa878f6f100ef6a187e3",
"assets/assets/image/smiley/25.png": "ecc25f593b968fab2b1a056b98c48836",
"assets/assets/image/system/logo.png": "cbb8e407a4049aa0386d0c03d89cc823",
"assets/assets/image/system/error.png": "501f691a5a68573d20450b43e4d408bd",
"assets/assets/image/user/header_default.jpg": "b9f53f41cc6a520563ce6ae72b2c21a9",
"assets/assets/image/novel/cover_default.jpg": "50f974b716adc676b423b08bd691a051",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/FontManifest.json": "53875f0262dd9428ccea9618c4a0716d",
"assets/NOTICES": "3563c65b273afd6dcab85c392df67a1e",
"main.dart.js_7.part.js": "5ca02e97d1f19e0956db5ed8bc182c86",
"main.dart.js_31.part.js": "8da2f0ce8956de6f0a169245f3ef1adb",
"main.dart.js_2.part.js": "1a6f757c0987e53128fb083bab981805",
"main.dart.js_24.part.js": "4eaac5e3cf4fd7f5f02f8dd564a449d4",
"main.dart.js_73.part.js": "131fee4f9c0e68a6fee7c1e1b36d6bc9",
"main.dart.js_6.part.js": "aa828b14f02e77dbb43bd47c07dada03",
"main.dart.js_54.part.js": "c77735a1ccbd49761ee80b858c90b567",
"main.dart.js_58.part.js": "0cd412891a4a14cfb1e328c9e3411037",
"main.dart.js_88.part.js": "e9c0efcfb6a05c87f5f925557a714374",
"index.html": "cf5d0bf35a6a15834737910ca4c9a930",
"/": "cf5d0bf35a6a15834737910ca4c9a930",
"main.dart.js_65.part.js": "471ed13bc794aaf69216c5bebef4924f",
"main.dart.js_18.part.js": "b3ab4404ba336a8e74e654a46907687f",
"main.dart.js_84.part.js": "e1b604541be9061998ae2916d16f9216",
"main.dart.js_22.part.js": "c00c2761617bc8fb8772ff14e44fd984",
"main.dart.js_80.part.js": "9a0fc32c4780aa586c39f1dadf0cb118",
"main.dart.js_38.part.js": "29f58f1b0cff427274734cae0eff51ab",
"main.dart.js_45.part.js": "8442fa80b56d802585a0a47d0df1c552",
"main.dart.js_75.part.js": "5339f6a42c9ec4da5015107c7d17d0f9",
"main.dart.js_35.part.js": "d50633462e7a0d9efda2a0cfab9944d1",
"main.dart.js_53.part.js": "a4621d83800324b65ba3945ad6202772",
"main.dart.js_61.part.js": "2cca36911ff0c86ea924b9a84224df1b",
"main.dart.js_56.part.js": "c4c250a483a241e8866e00b29422327d",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"main.dart.js_26.part.js": "15ed4b825aa684c51467edf828ba6a46",
"main.dart.js_10.part.js": "d9429d276278542b0ef7f1eb2252b710",
"main.dart.js_82.part.js": "1d529e71f0c5c220b15040c5ec9849f1",
"main.dart.js_46.part.js": "31c948a08a1cf76ba93323bab2a8a8e4",
"main.dart.js_17.part.js": "bfc3122c50397278a363a9be8d74ce1b",
"main.dart.js_50.part.js": "13dbb605d4a3830a144bf8645df69e02"
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
