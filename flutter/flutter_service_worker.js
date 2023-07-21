'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "dd98a932a49701863dcad96b8dee12bb",
"main.dart.js_60.part.js": "d8edbad8a23ecbc99b9db95c645832e1",
"main.dart.js_18.part.js": "aeacaad882cce3bf0892050d800248e3",
"index.html": "5b37b47b218a8c79cf97a89852147f6e",
"/": "5b37b47b218a8c79cf97a89852147f6e",
"main.dart.js_95.part.js": "cf25893b079cd295c1811358dbd0c814",
"main.dart.js_78.part.js": "56aa9a11041b391a072ab5e35a441503",
"main.dart.js_64.part.js": "1c18f50745ceb4ea02ed3966639aa440",
"main.dart.js_2.part.js": "1ff6cf0f8d9c0396a488842ed47996a4",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_91.part.js": "df1403846fb12de1796962bd8537d6b1",
"main.dart.js_67.part.js": "116fae4d4a78f794481e928edf3c7db3",
"main.dart.js_36.part.js": "550acfe825209fd447f8fe8b69e7d13b",
"main.dart.js_101.part.js": "5003c41e6e2e841aa6603c68ec405582",
"main.dart.js_4.part.js": "830543f92e31966ccfad2c93e4696b17",
"main.dart.js_59.part.js": "d6188a6164d2632b19e97b0637d92c4b",
"main.dart.js_13.part.js": "2e47a7ca46c10acc796717e010a9554d",
"main.dart.js_40.part.js": "3cb59dcba3c7ca0013f473723edc840f",
"main.dart.js_52.part.js": "07fc5dbbec1904aa051923d1a4c05c00",
"main.dart.js_84.part.js": "17c1b968073ae574727aa7e0fa87ec31",
"main.dart.js_79.part.js": "d9da7c9a37166a99f854e79efc0cbc80",
"main.dart.js_32.part.js": "89ef4820b6426ea0bad32e15b14ebfd9",
"main.dart.js_38.part.js": "ab0eb2b8a6b8e125faac559cbd18a9b8",
"main.dart.js_48.part.js": "c0840c39e3dd0324fb3575b6a9312be2",
"main.dart.js_12.part.js": "69cc39fc40a75fcd85f369ecf8fd7d1a",
"main.dart.js_61.part.js": "da93ad7de77dbcaf263d5b684a0904cb",
"main.dart.js_94.part.js": "044844b8b195f42289a316c6239420dd",
"main.dart.js_86.part.js": "ae477893cec1db42ca386c1ec75efb1d",
"main.dart.js_99.part.js": "7758be9462e2b36432074f59ed210403",
"main.dart.js_96.part.js": "785646da69e3e9320bba64685b2d26c9",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_58.part.js": "2ccf28c9693a5b41586a8cf5999040df",
"main.dart.js_100.part.js": "91a842633cf8e1ae00fe82bd29fdc4c2",
"main.dart.js": "f15f993aadb9eb4a709588a75b55c1b1",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_3.part.js": "be5c3d33340f1a09559a0f4babc87816",
"main.dart.js_19.part.js": "5c63275e781792af21f2b159d7a676df",
"main.dart.js_50.part.js": "76ba0bb669f347843796e87bc5c4992e",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js_22.part.js": "b555e3d62468b81bee29ee8b72bc5a9d",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_90.part.js": "b2c7d51223c55fd999bd468a26900f59",
"main.dart.js_85.part.js": "d3f11b8bdc88dcf4058008bded2af2ff",
"main.dart.js_21.part.js": "d09cf051b16cc4b71d3957054cd1a82f",
"main.dart.js_92.part.js": "c07bb142120f9b5a89a7b155a396c35c",
"main.dart.js_68.part.js": "d5de864c5930c26355eaad98c2f150d3",
"main.dart.js_27.part.js": "ba92e715c815ac697080af8fa059164f",
"main.dart.js_20.part.js": "e5ba4006144d5f0f14141c301fe24985",
"main.dart.js_80.part.js": "62948aa24cadb9ee63c086d4a985fb99",
"main.dart.js_70.part.js": "54a24ea1ef06dd9f1fe82bf14c3c098e",
"main.dart.js_28.part.js": "541eb19d3a0016e7627462306ea150d2",
"main.dart.js_6.part.js": "07b748e194c05684056945926546dad3",
"main.dart.js_75.part.js": "28f37303c2bec4b45094cf4e2e9755db",
"main.dart.js_56.part.js": "fc0bd145be71aca02a2cf57b0cc66772",
"main.dart.js_89.part.js": "6507fdca217db827c80c48251f673ec7",
"main.dart.js_66.part.js": "edf6db470b2a7d4df5b68a189b05cc32",
"main.dart.js_34.part.js": "e8d94f71ca91d3b163a88b12abf686f3",
"main.dart.js_41.part.js": "15d97c5a5833c7106edc3b196e21a2a5",
"main.dart.js_87.part.js": "962c503c4fd600053e7cb13ec05d38a7",
"main.dart.js_46.part.js": "e8acdd58a59ee62d1df7d62e0a98b93c",
"main.dart.js_31.part.js": "dc420b7f02c1775eaa0b30e73bbe066e",
"main.dart.js_51.part.js": "e48a9c0b71852d82f4bec1cc2bbeb125",
"main.dart.js_65.part.js": "577fc2c8a6b264c7e37523e7a4d6f64e",
"main.dart.js_30.part.js": "a17f74ee64221695ab81ab8f87188b88",
"main.dart.js_93.part.js": "98eeb65a386020fcd83f23f41d8b898e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "819e08733cf143464ee299c34d6f7bb0",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/AssetManifest.bin": "fac0f61759959ad2d28185f1fb6d05f5",
"assets/AssetManifest.json": "9fa4ed5f619fd5da566d938dd0b74b40",
"assets/NOTICES": "33d7cb341d41fc298c21f24446ee7374",
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
"assets/assets/opencc/s2hk.json": "a124957ae6e0f6abf06b5de577cd2599",
"assets/assets/opencc/JPShinjitaiCharacters.ocd2": "b872f7f09f098b227f5bc9ee7554ebb5",
"assets/assets/opencc/JPVariantsRev.ocd2": "9b9a30d436359d9b64d9a2aa348e7663",
"assets/assets/opencc/TSCharacters.ocd2": "0b6364a3a19d4997684c9a7f728fb9d9",
"assets/assets/opencc/hk2t.json": "abebab4986605b73abde40cf5c29de8a",
"assets/assets/opencc/HKVariants.ocd2": "0b6fca5a8864298ea9375013af26cd4f",
"assets/assets/opencc/JPVariants.ocd2": "3069464804d3aca91636daee196f8729",
"assets/assets/opencc/STPhrases.ocd2": "4e102c4081df20dbc243bfc402597e0a",
"assets/assets/opencc/jp2t.json": "5b1b415694a6e06e8dece0a0178bdda4",
"assets/assets/opencc/s2tw.json": "da6c0f8e76c753e5063bb9123dd935f9",
"assets/assets/opencc/TWPhrases.ocd2": "caf4b725573128ed2ab74ced5c56d23b",
"assets/assets/opencc/t2jp.json": "56a5f0162c4968cab1a3377085328dbf",
"assets/assets/opencc/hk2s.json": "e3a86167b9d6bdfa2de40def89455735",
"assets/assets/opencc/tw2sp.json": "f39140ee9f9c6178313b10b12afc11fb",
"assets/assets/opencc/s2t.json": "ff902a0b940deffa96fc3c9123448255",
"assets/assets/opencc/s2twp.json": "09ea1543ed773599abde59fe08ac74ea",
"assets/assets/opencc/opencc_assets.txt": "abc189bdac802b0b66cff1c71991fdc9",
"assets/assets/opencc/TSPhrases.ocd2": "361b682d045a0a92d94556ed667fcc4e",
"assets/assets/opencc/HKVariantsRev.ocd2": "a66ad2a2e5f178fa37e037d81de96c88",
"assets/assets/opencc/TWVariantsRevPhrases.ocd2": "d60db75a8c17847f1b18ef1f82c5adb2",
"assets/assets/opencc/t2tw.json": "83dc8fc7a9f6ed33c6aeef30f38d8137",
"assets/assets/opencc/t2hk.json": "65329a0a81e87c7d009e512464f9e979",
"assets/assets/opencc/TWVariants.ocd2": "63e791ce7c277cb66a142efd26c60a49",
"assets/assets/opencc/JPShinjitaiPhrases.ocd2": "e7ed64f9d7bc136034114938c0f8ac6b",
"assets/assets/opencc/t2s.json": "79d50e10a7b6043cafd5943a83e1a58e",
"assets/assets/opencc/STCharacters.ocd2": "cb009d723fb69938788f3cf37d3507ca",
"assets/assets/opencc/TWPhrasesRev.ocd2": "9203e5305089b4a1421fc54dfb8df314",
"assets/assets/opencc/HKVariantsRevPhrases.ocd2": "1d84f2059c64d007a59b5c9f431a599c",
"assets/assets/opencc/tw2t.json": "3811bd55b1c798370f5b93c881315ad4",
"assets/assets/opencc/TWVariantsRev.ocd2": "25f8bc74006107224b4b4292099a4d23",
"assets/assets/opencc/tw2s.json": "1ea16afead7329ae550547fa220e9696",
"main.dart.js_5.part.js": "8418cefd33a14041c0f665606f942a50",
"main.dart.js_1.part.js": "bae35607b2ed160f2fe1034b830a8c16",
"main.dart.js_69.part.js": "3c11450c90d97e0796c44b2e8c88fde7",
"main.dart.js_25.part.js": "4329f85a1004331ff809f01df1f004ee",
"main.dart.js_16.part.js": "88b1de87e91166fe42ab5ffb06726b8a",
"main.dart.js_9.part.js": "dbec93e93d7538c3d4d66a248b46f1bf",
"main.dart.js_8.part.js": "dbf3a78dc3da21ed141e162744d323ff",
"main.dart.js_11.part.js": "51ad1ed65a9721cb45a1c59d00f3180b",
"main.dart.js_82.part.js": "4e67d67d4621d1f72fea88bd2133657b",
"main.dart.js_88.part.js": "01d634e1ef21eae9bccbe19319264f00",
"main.dart.js_77.part.js": "6f6d901fffe93900336b0fab24345291",
"main.dart.js_33.part.js": "24c9073530201dacfee92097ee0b1362",
"main.dart.js_55.part.js": "95911ac2af3607614788e3e45ce3dc1b",
"main.dart.js_47.part.js": "32e41b49313e73d880c8dc77682a19d4",
"main.dart.js_43.part.js": "3bcea9ddb5e8d2d1b8e4d3d78e28c8c4",
"main.dart.js_49.part.js": "4cfe03a4df78c2b298face0332247167",
"main.dart.js_44.part.js": "01239d2fcd7088fc7a7fcdfc1c636170",
"main.dart.js_57.part.js": "80a304d0349090e0d6b04d43a7e8cc98",
"main.dart.js_72.part.js": "1f88057275c2ed0ad1a866ca5f46f82c",
"main.dart.js_54.part.js": "3b6aac6ade330f14a76b341aabd74737",
"main.dart.js_42.part.js": "d72602f7c000e69a05f142c151e8a63f",
"main.dart.js_62.part.js": "6831ccddff321084af4a303eec95ec69",
"main.dart.js_14.part.js": "71514295fd0ee7a4ba58ae41bd591e37",
"main.dart.js_24.part.js": "1b80a21df2466ea88168db85563c87f6",
"main.dart.js_73.part.js": "1ec47d870533f01a7e55d8fad144e931",
"main.dart.js_74.part.js": "0ac8ecbc195906ee2daa99c9c4ab68b1",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"main.dart.js_17.part.js": "86924d0e54e7fc75963e5d75b42cc1b8",
"main.dart.js_98.part.js": "766301952e68aafc7cda2d5872f60cc6",
"main.dart.js_81.part.js": "88194c8c44dda8239e01c3b57b5da72e",
"main.dart.js_23.part.js": "ab33fb894554b7d3d47b1d852846c48a",
"main.dart.js_53.part.js": "1f324a77c0e5a3297e4cb859b5e11bc6",
"main.dart.js_63.part.js": "828bf7852cd856ee286fb99304e1e731"};
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
