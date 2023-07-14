'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_60.part.js": "f17c60faabb369e753a5db45c59e7f54",
"main.dart.js_18.part.js": "6bd1a83959a433be0bb7e98375e07c98",
"index.html": "283f8c7907abe613238b1ef53f2ea300",
"/": "283f8c7907abe613238b1ef53f2ea300",
"main.dart.js_95.part.js": "dcb4886a56967ec8546c0a028b7d9048",
"main.dart.js_78.part.js": "e5da68bcf8f64d5c76dc5699e54a16f2",
"main.dart.js_64.part.js": "9b0f20f03556606160d9d5d1cebb0fc5",
"main.dart.js_2.part.js": "8f907099ffedc718d6ef456c8c44076f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_45.part.js": "e54a10a669b949c36d41917296b25edb",
"main.dart.js_91.part.js": "a4f279931035a4009b14ed95609ead8e",
"main.dart.js_67.part.js": "d3ee7fe9e9d755d55050350380eb18b0",
"main.dart.js_36.part.js": "e003e3e3330b0366c159df3b1f934b23",
"main.dart.js_4.part.js": "ee7685d821b8644bae621cae1bee0bff",
"main.dart.js_59.part.js": "c4bb931d93d1660cbe6d57b6ae8d5df6",
"main.dart.js_13.part.js": "de67b56a6cef97b05c4785fe2580d4f0",
"main.dart.js_40.part.js": "31e658ad4c2fe2b2c64879799807a717",
"main.dart.js_52.part.js": "f501dc619ea8570f336570bd23559dc9",
"main.dart.js_84.part.js": "23eea5d861bc20a47ba5e8969ba93cd3",
"main.dart.js_97.part.js": "2b32ae6598ca6fe3f14e16ce87b2275d",
"main.dart.js_79.part.js": "8134311d04232ab7b8c1e4816ce60a81",
"main.dart.js_32.part.js": "2a62d57e916bfcedbf07edf0e2366c76",
"main.dart.js_48.part.js": "60e2cdeaccd8854e70f21a0b086dcd77",
"main.dart.js_12.part.js": "15b5552d367e9ac6c2a7f4d838fca240",
"main.dart.js_61.part.js": "6de092b744929a2c961c27160d86e6fa",
"main.dart.js_94.part.js": "56a4a10fdb79525da493dbbd4f0fec18",
"main.dart.js_86.part.js": "6eaac044133e9e55ae4f6b169713217d",
"main.dart.js_99.part.js": "a73bc81fcfaf833387f8610643cb7712",
"main.dart.js_71.part.js": "1a2d2d502a1b2fc032d30353d3dbd97d",
"main.dart.js_83.part.js": "0b1c21349cc0a5ef32b04738bfd693ca",
"main.dart.js_96.part.js": "8a2b71426478f5f8dbeb810eab35f635",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_58.part.js": "1f6f6a6f38d10de802e0b66a1df22213",
"main.dart.js": "8255e3e6c15b9207d02c93e7ea83f743",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_3.part.js": "41f5ea82dc4689ea394442529c9a6e1d",
"main.dart.js_19.part.js": "3171730363de187557d3e5c3f600601d",
"main.dart.js_50.part.js": "222d85150ee29a4ae588116eb163dd19",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js_22.part.js": "f9ff7ed3429abf527d09e5ceb276b93f",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_90.part.js": "a1bc3e6eb8babd4f32c1c4bc512e2f39",
"main.dart.js_85.part.js": "e3261d84efaffab0bfce381a9954f5e0",
"main.dart.js_21.part.js": "107c62e819071c275b4fdcc5ad82a6b1",
"main.dart.js_92.part.js": "ae3ba262cb646a7455b5795a5151f594",
"main.dart.js_68.part.js": "7f13f65440489e8eb1585a97e92c5b0a",
"main.dart.js_27.part.js": "e90c29bdbf3f3460dcad0325ae8a252e",
"main.dart.js_20.part.js": "39217b7f4afcdbd498d9e268b13a247d",
"main.dart.js_80.part.js": "59265eb56e40eba8e4943a9c22d8d22e",
"main.dart.js_70.part.js": "7991f9687ad28e71e77058e930ada6db",
"main.dart.js_28.part.js": "e4163cc59ec36b3a0f2275018f077fe3",
"main.dart.js_29.part.js": "86b3edb71be8126fe1ec1ec96ffebf39",
"main.dart.js_6.part.js": "f5936d1f7c2703fc9ffb539da128f02b",
"main.dart.js_75.part.js": "4f5e230e66fe2f6b4dcca96195de4326",
"main.dart.js_56.part.js": "f68d13fdf457c884f3c35b190fc13901",
"main.dart.js_89.part.js": "7cc57da1db0dc210532c6ecb95369a37",
"main.dart.js_66.part.js": "7b9233275fa2c2f01ba742118c72c03d",
"main.dart.js_34.part.js": "08968b9ee9f1406e240db23fec2622b1",
"main.dart.js_41.part.js": "fb6d5afdb64c8267760d90a4e32487be",
"main.dart.js_15.part.js": "688028b166717bfcd77d56b715ade5b7",
"main.dart.js_87.part.js": "ef03b8eb8e668048f85403cf4cf4dc7d",
"main.dart.js_46.part.js": "9e65064e66a51a59324e13b9ce62c422",
"main.dart.js_31.part.js": "994425511c9980f70fc90ab7dc3147ab",
"main.dart.js_51.part.js": "0deb45eff72d9d34e28994ae78686e7c",
"main.dart.js_65.part.js": "b976b71c18259269aedbb31ac1b42ca5",
"main.dart.js_30.part.js": "c07aa3bbff47b296958752edc5150822",
"main.dart.js_93.part.js": "4c1d8c52ff4ebc5494118358133a2c08",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "b5331541360260451dee8775dda5e6f3",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/AssetManifest.bin": "63592ba2fc6fce5c15c3dcc1c86bac34",
"assets/AssetManifest.json": "311dfece901ebf51e899a28d57221e3e",
"assets/NOTICES": "da52fda1e9a9ae495d9be5ccd365d897",
"assets/FontManifest.json": "53875f0262dd9428ccea9618c4a0716d",
"assets/assets/image/system/logo.png": "cbb8e407a4049aa0386d0c03d89cc823",
"assets/assets/image/system/error.png": "501f691a5a68573d20450b43e4d408bd",
"assets/assets/image/smiley/7.png": "a00e90943a7e83d95c6a656dec9fa3c8",
"assets/assets/image/smiley/9.png": "982cc9814f65206b2f178b2f60fcf05d",
"assets/assets/image/smiley/11.png": "d0bd514ba44db63e28d49cc1245e4abc",
"assets/assets/image/smiley/10.png": "9a8e1ac8c00fbbb1f07691911070ba9e",
"assets/assets/image/smiley/3.png": "3c989aa3d4c6181ab9038064715e3687",
"assets/assets/image/smiley/31.png": "67f173516616a67311d6b3cb261e1458",
"assets/assets/image/smiley/26.png": "b5c25b2a9f879efc45197b2460ac3ed6",
"assets/assets/image/smiley/36.png": "78c44cbc9a24bb49d0da295a427966a0",
"assets/assets/image/smiley/50.png": "489c93866ea3a934eee317bfcbc7bcd0",
"assets/assets/image/smiley/17.png": "108d283e9702aa878f6f100ef6a187e3",
"assets/assets/image/smiley/46.png": "4bc6c4827d62ad63e921a3cdc30f28b1",
"assets/assets/image/smiley/16.png": "cd9486865812ccf5da1daeef59522e1b",
"assets/assets/image/smiley/2.png": "439e32d773b5847a707a244cebeec520",
"assets/assets/image/smiley/13.png": "6b79d7288dfdf5ec98b21593e2918c36",
"assets/assets/image/smiley/21.png": "623d7dfaf0ea7fefc91a1fd8fed423a9",
"assets/assets/image/smiley/30.png": "8435ccf09fbc022fdeaf873af23a1933",
"assets/assets/image/smiley/15.png": "a740b88cc01570f6f3847d022acbdf6d",
"assets/assets/image/smiley/47.png": "df29631827c00f343360de2a9b9044f5",
"assets/assets/image/smiley/28.png": "861e1aa1a36f617efea7e11ef00aecdd",
"assets/assets/image/smiley/23.png": "5f3f998fadf656d2a9c1828783fa1b4e",
"assets/assets/image/smiley/18.png": "91cecf3e4e98cd3d3a766bcdeae2e37b",
"assets/assets/image/smiley/34.png": "14d8b10afe7841e33190682f6cf29c58",
"assets/assets/image/smiley/4.png": "17ebd5203e92a1fe9b5ca45f38f688e2",
"assets/assets/image/smiley/1.png": "55f3faf3709f3e3de286468abf480d0d",
"assets/assets/image/smiley/48.png": "d1c46e7d5f885f23116fffb3893027c5",
"assets/assets/image/smiley/27.png": "ff051318e791e25283eb64241db911e6",
"assets/assets/image/smiley/49.png": "871e18a561743981abdf40f4fcbf4524",
"assets/assets/image/smiley/8.png": "d8e89128df357a6bf571bdff1fa61ca0",
"assets/assets/image/smiley/5.png": "919639b1527712ab8c5a7f7d66ecd8b4",
"assets/assets/image/smiley/19.png": "1c07a6e8e0998ccb1110ddc60a32bdd1",
"assets/assets/image/smiley/35.png": "bdbca794070c2e19a03049232bc7b499",
"assets/assets/image/smiley/12.png": "c59383065afdaa3876c84cc92ef38678",
"assets/assets/image/smiley/32.png": "4f8a1bdec1a4576540b6af1b21be7c22",
"assets/assets/image/smiley/43.png": "4dd0303c301698bea5f022d14e616598",
"assets/assets/image/smiley/22.png": "3e302ef38882bdafe40a39491fdec7fd",
"assets/assets/image/smiley/33.png": "ea7316cb4d4b2a90b882ad21fe90cdae",
"assets/assets/image/smiley/6.png": "3126f5b6298c6cfc6980e69915c58448",
"assets/assets/image/smiley/24.png": "8205dfbf407c2ddf7339eadc6d181186",
"assets/assets/image/smiley/25.png": "ecc25f593b968fab2b1a056b98c48836",
"assets/assets/image/smiley/29.png": "7bb30c5f4ac2283d8b61f4d52026793b",
"assets/assets/image/smiley/14.png": "c1dbde12477d161bd757fc5c9a7308f1",
"assets/assets/image/novel/cover_default.jpg": "50f974b716adc676b423b08bd691a051",
"assets/assets/image/user/header_default.jpg": "b9f53f41cc6a520563ce6ae72b2c21a9",
"main.dart.js_5.part.js": "200b7ada2cbd9007e92caa79c26ab709",
"main.dart.js_1.part.js": "22307d69a9e636cc947c70f2c8334cc3",
"main.dart.js_69.part.js": "bbda45fe454940c587f5746ae8e4ad1a",
"main.dart.js_25.part.js": "1044de18b593140df98a4f6fb2e1282c",
"main.dart.js_16.part.js": "151692a6accd066924d66d49ead64541",
"main.dart.js_9.part.js": "666cd0959b623f890d03767ef1428d90",
"main.dart.js_8.part.js": "65d90ec5255e8176e06d291f83f574a9",
"main.dart.js_11.part.js": "ef5d1b74f83d864dc47a8bcca82276af",
"main.dart.js_82.part.js": "933ca45d6e9b0be4ef39b5ad7a91024e",
"main.dart.js_88.part.js": "a273fb8cf10ae9c18ef28bc7ab81541a",
"main.dart.js_77.part.js": "d6ade8039942da2e02d5339d97a77235",
"main.dart.js_33.part.js": "cee3cf2cc7683a9ed7f3adbd86d1d58f",
"main.dart.js_55.part.js": "5411f811b37249375cc9d20b62668264",
"main.dart.js_47.part.js": "1ce280a1b16811f4af30557ce01e95b2",
"main.dart.js_49.part.js": "6918116f0999b7a259e39d804166e52a",
"main.dart.js_44.part.js": "78d8b27a648b5cfa8a6fab65b3ee9c17",
"main.dart.js_57.part.js": "dcef377082ba02a89aac37a9887281e7",
"main.dart.js_54.part.js": "277870d10cb45e7be37b2761cb5b3fd5",
"main.dart.js_42.part.js": "23fda1942a02cb101103d80f62558bdc",
"main.dart.js_62.part.js": "cb1c047daf5db9770c8abde508793ceb",
"main.dart.js_14.part.js": "c1746fce8a7bcad14d8c01776b40c9fc",
"main.dart.js_24.part.js": "9afd43096f24885a1912c22bb5b11b60",
"main.dart.js_73.part.js": "54c5755835fb4bb9199383b2895151d9",
"main.dart.js_74.part.js": "cf999a3228589e2a60e574a5d5a65a2d",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"main.dart.js_17.part.js": "513cda96b389c851e92a731764485c58",
"main.dart.js_98.part.js": "a5b273462f009184a8b5e7eee1bbdea4",
"main.dart.js_39.part.js": "597a432c72159deffe6fde5bfbf6c536",
"main.dart.js_81.part.js": "3d8f9b1fd488581fbab2389c4d69408a",
"main.dart.js_53.part.js": "c290d4bb7c3df130a0eb0e19a705c993",
"main.dart.js_63.part.js": "ff1f6fa14937d0a739d40c51896e4228"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
