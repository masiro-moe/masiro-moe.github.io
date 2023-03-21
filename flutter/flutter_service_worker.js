'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_39.part.js": "e3b4db86ebec6222d8db0b47782922aa",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_60.part.js": "0dd104bcb936593fa07522b61d50d54f",
"main.dart.js_25.part.js": "d50a67a4ffc9ca692ed01b85ff8d3972",
"main.dart.js_49.part.js": "ca6e96d4b9b3f1fbd8cb034e0f4d587f",
"main.dart.js_90.part.js": "512f61cadc6af6dbf55722844fccb3a2",
"main.dart.js_83.part.js": "90c11bf3a46ca07592cf62f05ffd21c7",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js_3.part.js": "2efe6e1f504768d43a2c0ec27101f520",
"main.dart.js_66.part.js": "bf37b442bc4c99d6e2114788d2dc0308",
"main.dart.js_52.part.js": "0a156a47be36b8d583ebe898dcc472fd",
"main.dart.js_64.part.js": "7b6a6b0f67b9fbf881ed31a42e721dd1",
"main.dart.js_21.part.js": "44b31554c9cbb5c9252e33badb7d3fa5",
"main.dart.js_43.part.js": "5978c4776a033c549563ab009fb1293c",
"main.dart.js_63.part.js": "c5b7f3550275bfbcc8b5786212b0114d",
"main.dart.js_51.part.js": "aeab34c8f1401938cae7c15602233754",
"main.dart.js_27.part.js": "10db62880a0ecf2f2e235db4498d903a",
"main.dart.js_33.part.js": "4f6087d447109513b37bfce4b38e3549",
"main.dart.js_9.part.js": "4fd9048230bdf0a603dbdb7fef6751d0",
"main.dart.js_40.part.js": "2c90f36cd61f50efcc930c7d712f1ef9",
"main.dart.js_81.part.js": "52904018b6e16cbe85b6e860ffc417bc",
"main.dart.js_13.part.js": "a1c3aa1532c52d39d66d6e8e299166e8",
"main.dart.js_74.part.js": "1fecfad8be4c34a6423bb0dc8acecb91",
"main.dart.js_41.part.js": "40d1255524b40dccb5805d94ca9c554c",
"main.dart.js_62.part.js": "5affe166bc672badc8edf103ceeefe86",
"main.dart.js_16.part.js": "ff98681929e2b7df27a0ec9e0cb0574a",
"main.dart.js_92.part.js": "de384003ca8cbb2173a403a5a6bedd3e",
"main.dart.js_79.part.js": "f622297241ced0ee2f3e165e63332099",
"main.dart.js_57.part.js": "d7e4d10cec39c3ec396fab2d9198ebb5",
"main.dart.js_20.part.js": "2ae7bb886e87445e24d4694e5ca82ae8",
"main.dart.js": "296bcab6a4857b48b5a6d5ae736be112",
"main.dart.js_94.part.js": "5d253f53b12c824c560e415c8b785246",
"main.dart.js_8.part.js": "1cd48d79170dd9fb055850d0cec9ffaf",
"main.dart.js_59.part.js": "50359db11bfed3cad3d05933edc197b3",
"main.dart.js_42.part.js": "14f19053f79bb7a330d33c5fe55f92cb",
"main.dart.js_55.part.js": "8144824297bfd8c86c6fc10dc5618f1b",
"main.dart.js_85.part.js": "5e8a5c3e68bdc2afa696c32dbae1bd31",
"main.dart.js_30.part.js": "cbe9c099ef290add51ba060c4f8567c9",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"main.dart.js_71.part.js": "1d0b2b49aaa6fbbd12db834d3efb25a0",
"main.dart.js_89.part.js": "824896a6e33580c14062007b3ea1d2ed",
"main.dart.js_36.part.js": "19465baadfc6436a461439e0e329e60b",
"main.dart.js_23.part.js": "fb7b974ac5f2c87b8dffaeb529ecc5e0",
"main.dart.js_68.part.js": "c855597901cdf47bd6a719b80407758a",
"main.dart.js_48.part.js": "680f63e149ad9611a36e23df6086060f",
"main.dart.js_87.part.js": "9e5fdcc2e7bd8ce027c130e0c670cf0e",
"main.dart.js_44.part.js": "0b2e578d43e62e38650cac6d44f1b368",
"main.dart.js_91.part.js": "451c897c9f7c3e769ac05572036aaf63",
"main.dart.js_12.part.js": "5660b8c2b12424e7be29988fad20ee10",
"main.dart.js_86.part.js": "8ee3019342ec0d1814b5fe5143a921d1",
"main.dart.js_1.part.js": "7182d29316c30e2f146aeefdf3df8a79",
"main.dart.js_78.part.js": "32fca2f6f7fcdcd9a505974ba3047975",
"main.dart.js_15.part.js": "bcd1d10cf66a8483cf78b9adfd3da3a7",
"main.dart.js_76.part.js": "4dec1006badf3dec13b19d4827ecd51e",
"main.dart.js_77.part.js": "e41a45930ba2d1b8f43bd277a34072f3",
"main.dart.js_4.part.js": "ed3adc4e8911b7a76334fedff03c8ab3",
"main.dart.js_47.part.js": "63c0a568ed289e9d52c1186744611467",
"main.dart.js_11.part.js": "3e56dae784b034d673017b7f8e6e5567",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_70.part.js": "054d6978bc868e7fabd02fad3972ee2a",
"main.dart.js_28.part.js": "2a07aeb32ade36531b1b2727129aeedc",
"main.dart.js_14.part.js": "e291ee50b4cf5d167f515e1af1c95e69",
"main.dart.js_93.part.js": "dd68d212618a487b7602ad53ae266ee8",
"main.dart.js_19.part.js": "f6289a4d093e3c42f1d85d9a79c21ed9",
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
"main.dart.js_7.part.js": "442e0d0552f971cd0403fc5eeeeaf15e",
"main.dart.js_31.part.js": "06b95a60328f8179b2e79c2685dcb098",
"main.dart.js_2.part.js": "b110b4ecddfe87d2b41791796f580370",
"main.dart.js_24.part.js": "498f23d79770a67ff19b66b808b577c4",
"main.dart.js_73.part.js": "e1299cdbe2453f825fa2b5d6a2859e05",
"main.dart.js_6.part.js": "6c5450a7fdbd0122a729cadd58917f96",
"main.dart.js_54.part.js": "74b799a56362270d9aa6a13ad116f3bc",
"main.dart.js_58.part.js": "b84efbd86ab822ffea953fa995112611",
"main.dart.js_88.part.js": "3744aa0514c4eefa6c7eafb0206aec61",
"index.html": "42623eea4b464ac692841dca17bb26f6",
"/": "42623eea4b464ac692841dca17bb26f6",
"main.dart.js_65.part.js": "938b402b6237a0f91e811e4237e82f5e",
"main.dart.js_37.part.js": "8fc38941dad29a2e4711780a50065b9e",
"main.dart.js_18.part.js": "753d5906a2231af4762979d94b4e1060",
"main.dart.js_84.part.js": "4f20978bd1f7b4e2fb471e6183a2b726",
"main.dart.js_80.part.js": "fe1ac99fa508f6416e2148557c7b97ac",
"main.dart.js_45.part.js": "40c198846073db868a305381e8594607",
"main.dart.js_75.part.js": "a66db50d90e51ee94c22720f6922d3f0",
"main.dart.js_35.part.js": "8dcbfec4f66d55083a78ed68fc897615",
"main.dart.js_53.part.js": "e49bb90dcbca6741e0a99b2ec50b58cf",
"main.dart.js_61.part.js": "6408328a82a6111065c3416b5dca9a2d",
"main.dart.js_56.part.js": "fd4ed2981b8070abdece678c293fa99a",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"main.dart.js_26.part.js": "5fe7dfb643b8cda5aa3cfcb295e5bf68",
"main.dart.js_10.part.js": "d2a63f77682227d4f9be37947f4a22aa",
"main.dart.js_82.part.js": "b75289ea4253094bc082f9ebf74ed488",
"main.dart.js_46.part.js": "a869948d0333e224cf60128790efc94e",
"main.dart.js_17.part.js": "df583a7f32fd8f544816b2cd2eb546fb",
"main.dart.js_50.part.js": "cae60a56f7827b9c9632eade4a248b70"
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
