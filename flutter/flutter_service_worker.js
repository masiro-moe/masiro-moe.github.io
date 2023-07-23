'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "0eee503ee9e7daa3cdfeafc33b3c85ee",
"main.dart.js_60.part.js": "81f7a3e366925172b4b8b0fc6415f3c1",
"main.dart.js_18.part.js": "7ed12fbb7ee459f3b503bf3ab03cac67",
"index.html": "200231d783500efbc37acfbb71275c28",
"/": "200231d783500efbc37acfbb71275c28",
"main.dart.js_95.part.js": "36294dfb2a5e05cb066410d4439bf566",
"main.dart.js_78.part.js": "b96c2a7b40a3c7b96924ba02e00bc368",
"main.dart.js_64.part.js": "07f3477af0199db8a9a217fc523a1d4a",
"main.dart.js_2.part.js": "0c7fa593ad03590590e7e2fb23b23a78",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_91.part.js": "35991f333a1febbef2c03f05e25019d6",
"main.dart.js_67.part.js": "df634602be3b1df9258d5bc3050b0ab9",
"main.dart.js_36.part.js": "6782ba07d11242bf98ea1ef0a5aa36e0",
"main.dart.js_101.part.js": "0c8085998b3d2db75db5b010d838bcf5",
"main.dart.js_4.part.js": "edf81c0f288ae15bdbf22f8cb7c514c2",
"main.dart.js_35.part.js": "550acfe825209fd447f8fe8b69e7d13b",
"main.dart.js_59.part.js": "2fb86cec4f9d732281a4a565e6613207",
"main.dart.js_26.part.js": "3c41fceba6d38197c46a7751f98ca59a",
"main.dart.js_13.part.js": "ba6331f4bd54ccb3ba6d0d79d46112d9",
"main.dart.js_40.part.js": "fc6cf882024ee50e53295cb5a78f7b0d",
"main.dart.js_52.part.js": "7334d26f06428591c685afe9bfc7cab6",
"main.dart.js_84.part.js": "c6c64338e62dff05792457d4f3793f71",
"main.dart.js_79.part.js": "955af1f8ad4552cfce43fd8b96a4a7d9",
"main.dart.js_32.part.js": "e98cfe40a6d46b2aedf30f2c36b7b87d",
"main.dart.js_38.part.js": "d49b9294af955d9cf219e9b57fd52402",
"main.dart.js_48.part.js": "be939610891f91d91c34b8841af2f061",
"main.dart.js_12.part.js": "c2b51b9ef9db7ba2604483f274946ea8",
"main.dart.js_61.part.js": "ad233758edb66374d72f4351d8d16d0f",
"main.dart.js_94.part.js": "8b69249dd930f5e58fbdf3bb758eae60",
"main.dart.js_86.part.js": "a062ec80707e1842386aacee079584e4",
"main.dart.js_99.part.js": "e868f4b4c2c8c3c99be9e4fbec8e2877",
"main.dart.js_96.part.js": "23c1941fbae4a082a28bbd6a51d4b412",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_58.part.js": "fc650e57f0943944be890de1714390d8",
"main.dart.js_100.part.js": "4fa79d546be7e8b7d273d487f42ae34b",
"main.dart.js": "5ed4d01391032f8a893c1b5950192872",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_3.part.js": "6d7ed0bfbb46cc61d86d5e03cb8af439",
"main.dart.js_19.part.js": "3285dcb143f53b7b3abdd5a38dc5cfff",
"main.dart.js_50.part.js": "48fb99e6c8f0f0361cfb6cfe6a699f8a",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js_22.part.js": "ab3bced0f5c3c6066143da00c942fe5d",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_90.part.js": "fe5c4d3d6767a636236c1f175ba54c18",
"main.dart.js_85.part.js": "c775430dc1deec89f8e22948a33390ea",
"main.dart.js_21.part.js": "2cd9b52af26edaa205d96bf05462fbd2",
"main.dart.js_92.part.js": "508277494c15c84e40d4853a86563dd4",
"main.dart.js_68.part.js": "2e748ee42b80e4d9ee7eb08c7ec89559",
"main.dart.js_27.part.js": "f4d7bb0fdf3569a1944d3d717192e0c8",
"main.dart.js_20.part.js": "866f64ff41f3bca0e118a59b381e2521",
"main.dart.js_80.part.js": "62948aa24cadb9ee63c086d4a985fb99",
"main.dart.js_70.part.js": "c7f34e2dfe88910333d5092e780e3d3e",
"main.dart.js_29.part.js": "a359bcb431b3e8e9e5e01e7de4eb8dfd",
"main.dart.js_6.part.js": "7f0c2966eb8b08f047cb0fe774256288",
"main.dart.js_75.part.js": "1b543457d5f21931c969f33af3b118ac",
"main.dart.js_56.part.js": "ba669d6fcc07580e1981058809651617",
"main.dart.js_89.part.js": "67cb0d76ac98eb29d23c361f625d1b19",
"main.dart.js_66.part.js": "739c0b3030d5b41ce2f61a408fced33d",
"main.dart.js_41.part.js": "786cfc377139592beb7603dcca4979d8",
"main.dart.js_87.part.js": "3f94d6d7fdff2cc0466d48a05bda22c7",
"main.dart.js_46.part.js": "e8acdd58a59ee62d1df7d62e0a98b93c",
"main.dart.js_31.part.js": "56a03e5fe426c585ec81d2751a2567fd",
"main.dart.js_51.part.js": "ab79ee4e841c2467f9eba8bb9d71ecf5",
"main.dart.js_65.part.js": "d22260d2409b40c3b09754f53dcc6263",
"main.dart.js_30.part.js": "b1d755af238de554f4cf78eaab9a9337",
"main.dart.js_93.part.js": "7d50bf5973c8ea953c32f6ecb21fc6db",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "819e08733cf143464ee299c34d6f7bb0",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/AssetManifest.bin": "fac0f61759959ad2d28185f1fb6d05f5",
"assets/AssetManifest.json": "9fa4ed5f619fd5da566d938dd0b74b40",
"assets/NOTICES": "05a96f9913a3f9512bf44c203577188e",
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
"main.dart.js_5.part.js": "14a213ae2be334080c7809711e51ea96",
"main.dart.js_1.part.js": "8da69bbc470a032984715615628a834e",
"main.dart.js_69.part.js": "f41c372e83413a415a7ef7a591b180b2",
"main.dart.js_16.part.js": "2bcb7a2cd4613a30a5403e73fbf64d87",
"main.dart.js_9.part.js": "b099973e307b8e1bc82dd090328e4000",
"main.dart.js_8.part.js": "de3ebbe506dd2b86788534636fef37b8",
"main.dart.js_11.part.js": "2ccd95645e417f9ae22ac648efa3bde7",
"main.dart.js_82.part.js": "131d3e585ff7b82ab940ee9bb966a8ac",
"main.dart.js_88.part.js": "7a08cb0e5631950944e31a665d5ba14c",
"main.dart.js_77.part.js": "787cbfacfa85d34b08b42ef93b6e8266",
"main.dart.js_33.part.js": "741dff4a50e53c0f00aa4a077cff405c",
"main.dart.js_55.part.js": "1c3237a2a1500d77e529b128c073af71",
"main.dart.js_47.part.js": "32e41b49313e73d880c8dc77682a19d4",
"main.dart.js_43.part.js": "f5bdb817e25e80b482f19be6676deeec",
"main.dart.js_49.part.js": "f74bb21665f5c68089ef7d8f7ab90524",
"main.dart.js_44.part.js": "7f42813ffcceac0020db90c5919811c6",
"main.dart.js_57.part.js": "80a304d0349090e0d6b04d43a7e8cc98",
"main.dart.js_72.part.js": "548f31c32349fca76978cf09ccfc5af9",
"main.dart.js_54.part.js": "4919fec79b5f2f2cb3ba68f50920c876",
"main.dart.js_42.part.js": "cfc45011090fbd878fc9bdcd1be97305",
"main.dart.js_62.part.js": "f7e32ce6ca6996faceb347713b526b71",
"main.dart.js_14.part.js": "7f3af07de63a5752fc67bae38844e1bc",
"main.dart.js_24.part.js": "15aff8845f7923af91a902edf084cace",
"main.dart.js_73.part.js": "b5d6e5ac4017ee0c677538c17079d0bd",
"main.dart.js_74.part.js": "31ebef16b9151de66862653c98db4bd1",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"main.dart.js_17.part.js": "c1718eb6502e5e4b1fe8e048fb8c9d03",
"main.dart.js_98.part.js": "3ed74be21873a782c1f2234507fb31dc",
"main.dart.js_81.part.js": "9c335198c826139711a18c31f88674b7",
"main.dart.js_23.part.js": "e658b60989ce0230cc7e50c477b587e4",
"main.dart.js_53.part.js": "53bfeb9ac76b5b7b70fe83590597c050",
"main.dart.js_63.part.js": "9c06ce33b91de8e591ea4f8e2136add7"};
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
