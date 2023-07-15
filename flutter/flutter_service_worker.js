'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_60.part.js": "2330054d3236495b695ed616e763eb66",
"main.dart.js_18.part.js": "17aeea8f3492b5f590be2adf5c015764",
"index.html": "55852c31c604f79bcf4c17ae8c73f3ae",
"/": "55852c31c604f79bcf4c17ae8c73f3ae",
"main.dart.js_95.part.js": "6bf69e9190f47fa1243d83e93bfe57d2",
"main.dart.js_78.part.js": "c8154fd3b8c00a72253ed686010cdf78",
"main.dart.js_64.part.js": "6d7e4e979b783a0a0c12847c10a23cb1",
"main.dart.js_2.part.js": "e0c775ef2202383e0a562617946cc86d",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_45.part.js": "34861297f59f6c966af860cefab1ac75",
"main.dart.js_91.part.js": "181cf404b6575c7797b2f260c3e58c85",
"main.dart.js_67.part.js": "6ee5a9ed6e056619a4318938c068ea33",
"main.dart.js_36.part.js": "8cbf5c738c1878c6a02792a27dae171a",
"main.dart.js_4.part.js": "c2f75cd40b2dac2e76b15858e000b363",
"main.dart.js_59.part.js": "267bb093f23f1a8ba880ee7cae8ebf39",
"main.dart.js_13.part.js": "9ee0069490a374c8326f02e92fc82310",
"main.dart.js_40.part.js": "0c0bdf6f34c8c9d6deeea372f8ce32a8",
"main.dart.js_52.part.js": "bd63ae798a6109783e0fb517d140fbf2",
"main.dart.js_84.part.js": "50cb95a03e1a7e450e7eac9608f9c6c5",
"main.dart.js_97.part.js": "03e641f5fda3e44d5d4d41554d9d8aa4",
"main.dart.js_79.part.js": "849faa1f6208b0445c4dedce895a65ff",
"main.dart.js_32.part.js": "3dcda5153cdace0b3553958dbdff3a39",
"main.dart.js_48.part.js": "5a97581139652836d510fce6c1b19629",
"main.dart.js_12.part.js": "08c0726487660495857744f7fcf3f8e6",
"main.dart.js_61.part.js": "608e19557761185bac4a944f3219b31b",
"main.dart.js_94.part.js": "f451540b63a8e81e5a56a4e10057e6c6",
"main.dart.js_86.part.js": "5d6a88e8220fd63571221d4e253630aa",
"main.dart.js_99.part.js": "9c2ee658ddfba83e31ad75b0da5c0080",
"main.dart.js_71.part.js": "25220eee8f49eb1d341d543e4c342356",
"main.dart.js_83.part.js": "80ba6becedfd14590f2148a424bf6e2e",
"main.dart.js_96.part.js": "3f2fe1247b0e5c6690e355a1e058e2a6",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_58.part.js": "b1df32407436c982700c27b84d289f99",
"main.dart.js_100.part.js": "45c42322145851a42652ecfcacf73aa0",
"main.dart.js": "22607fc3d747fe437a20405bf2e9b79a",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_3.part.js": "b1415717929d4a3a3d5fa04112f32394",
"main.dart.js_19.part.js": "a2b783446c25497f2e5e2afad8480307",
"main.dart.js_50.part.js": "8c0613121f240477e16dfcfd9f3b5bc7",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js_22.part.js": "b77ddec34b7b371ac4b9bb6a04ea348e",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_90.part.js": "67071257544c332a7df7f036c89bbf8f",
"main.dart.js_85.part.js": "59a1c5e8944b20c77bacbc46b4fe32b0",
"main.dart.js_21.part.js": "a2e15fde570ee4919687377267ff017b",
"main.dart.js_92.part.js": "bba4e7a22b74d184c73f2a0276ab9f04",
"main.dart.js_68.part.js": "6ffbba5674cd481395f45f9e6d697955",
"main.dart.js_27.part.js": "32eb16fd582e21e182388ca268fe1d21",
"main.dart.js_20.part.js": "ad1c1ae8eef92f4898e92e5a47271e9d",
"main.dart.js_80.part.js": "e884c78d48595b67db0d0d951800b112",
"main.dart.js_70.part.js": "3eeb84ab6f184a8195f2380594a8c662",
"main.dart.js_28.part.js": "e1590770f412f9388063a447a098cbfa",
"main.dart.js_29.part.js": "31c719e026e57a21feaddb8d2622786b",
"main.dart.js_6.part.js": "ea8710c79edb41844736123c739d4925",
"main.dart.js_75.part.js": "9082235e721bfe05afaa9ffbca9a4046",
"main.dart.js_56.part.js": "efe640722c57d15d2516d0116a205352",
"main.dart.js_89.part.js": "dc19d34fa04c763a587b2d79b0a31571",
"main.dart.js_66.part.js": "f5a2a21508821e02710a9e15f3eee0de",
"main.dart.js_34.part.js": "7d68592945debc653788db12cb56a3cc",
"main.dart.js_41.part.js": "d9042ff1691712a36ecb4b3b2635389a",
"main.dart.js_15.part.js": "eee285316260a20bd383a6d84830ed2b",
"main.dart.js_87.part.js": "c91937530467f1fccd1828af4a86d522",
"main.dart.js_46.part.js": "55e0f897b2245ee98db39102fd90cd73",
"main.dart.js_31.part.js": "c3d97a19ff68e3108fa25aeb97d40f9b",
"main.dart.js_51.part.js": "be18afe680de556f4e6b5bf8935f8c36",
"main.dart.js_65.part.js": "8a30696c17f424b4d0b87285b1938569",
"main.dart.js_30.part.js": "1445ba03abdbb852138906a89874dd8d",
"main.dart.js_93.part.js": "f562674105a235124bcc9d8edaaa8f22",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "cc864bb5d45fbc36e8f8822750a32ec1",
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
"main.dart.js_5.part.js": "653720a9e0764ea2df44a30ab4b418e3",
"main.dart.js_1.part.js": "e424b4de7e9d0e21f987e314918ca886",
"main.dart.js_69.part.js": "f3071ba3cb2a526a2dd49ec0aa41ab8d",
"main.dart.js_25.part.js": "77961239ea04f1177eb0c1596b816b2d",
"main.dart.js_16.part.js": "dcf9b16fb0a0688d94c9a4a9f64e9302",
"main.dart.js_9.part.js": "c45414ba2debbc0c2a1e25bea84b9c62",
"main.dart.js_8.part.js": "8eba78d679a5da39d3356a7eb10fa545",
"main.dart.js_11.part.js": "274ac21087793cfd495d95dd382251f5",
"main.dart.js_82.part.js": "92a01af20229000c6d607f1838f70702",
"main.dart.js_88.part.js": "4cb8917db2ed38885934ea78386da263",
"main.dart.js_77.part.js": "d1a6c3d5c07b11d24d39f60f39eed4e5",
"main.dart.js_33.part.js": "d87314d2c35c0d8ab160fbc24e65ccdb",
"main.dart.js_55.part.js": "e0f64a6eb7fb02c25ede37d18ac409a9",
"main.dart.js_47.part.js": "cb0cf944f43490bcfff89e8450fe91fe",
"main.dart.js_49.part.js": "5ac49871ebdc1e6f3eaf7471402a3c0e",
"main.dart.js_44.part.js": "24c7ca3a5662521d01a790ab3e225e7c",
"main.dart.js_57.part.js": "a55459e3591ebe74de3bc6754e215ef0",
"main.dart.js_54.part.js": "406853ec1a4977802af4e7714aa85e6b",
"main.dart.js_42.part.js": "16e1947e5a7d3cacdc161f8a7d4a9f0a",
"main.dart.js_62.part.js": "41b9d77a1c99d163785e084cee2bd910",
"main.dart.js_14.part.js": "1865fde3a550c9c32655ed94284c99ec",
"main.dart.js_24.part.js": "7978a2c57330f82030df5c8fb51ada3c",
"main.dart.js_73.part.js": "a971a61744582f0d2096284455304f82",
"main.dart.js_74.part.js": "a05822b5006c2efa965c2c51efcc5e4a",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"main.dart.js_17.part.js": "add76780ae4ea62a92ccd2a811868bcd",
"main.dart.js_98.part.js": "4474c41759ecce825f5abdec3a2d0187",
"main.dart.js_39.part.js": "7bfadd536d683b2f9f2073a42b2d15a1",
"main.dart.js_81.part.js": "219b51a2efe5b5d2ab7b241a6a0c17b3",
"main.dart.js_53.part.js": "9438daa0614cb8b01cf652c782b19845",
"main.dart.js_63.part.js": "f36b849e6fffd88f374ffc79fe2dabbe"};
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
