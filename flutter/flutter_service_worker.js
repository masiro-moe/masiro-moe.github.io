'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "229c2d311380177643faa5ad343ce682",
"main.dart.js_60.part.js": "4e317866ca6ec47fd96110087a38ed6d",
"main.dart.js_18.part.js": "2cbf5a720092e69bc8953a09a3ab29da",
"index.html": "30f59f3fe57d582778c20d0a3f042c7e",
"/": "30f59f3fe57d582778c20d0a3f042c7e",
"main.dart.js_95.part.js": "3be22fb5c3a69d1d417081d0a1f2d05b",
"main.dart.js_105.part.js": "c26153e57c4154817bcc25cd64f17628",
"main.dart.js_64.part.js": "9d38659d8eb224f67b988d040fe0e3ff",
"main.dart.js_107.part.js": "d149bcf5778ca61659216265fe549fef",
"main.dart.js_2.part.js": "eb308ee37dab1506cda981a623303765",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_45.part.js": "68e7bdd16cc001554e3f4f5dc23f974b",
"main.dart.js_91.part.js": "50d05a7f39d1fce9efb9c99ab6495990",
"main.dart.js_67.part.js": "177448bd3b3c75e2e9316bdb6aaf62aa",
"main.dart.js_103.part.js": "12e6d15dbe368cbfae69cfadb2bec636",
"main.dart.js_36.part.js": "fea243de97c5d30c49e5355b8f51dd7f",
"main.dart.js_101.part.js": "c9cef15eb87e7e4c0b03f2f433a9bf59",
"main.dart.js_4.part.js": "405b34c76aca41f53b18ca9c45bef026",
"main.dart.js_35.part.js": "e7db336f28a71053da53d40e887c8378",
"main.dart.js_59.part.js": "f06baf4f086424fca28cdf8564248e75",
"main.dart.js_26.part.js": "dfa7d717cb373180300a7d170a42ccc4",
"main.dart.js_13.part.js": "d7846bec5b00b2db9c4ec86b2a1eb05a",
"main.dart.js_52.part.js": "452b14269dd1c5d6fe1a4225eb4ae1fc",
"main.dart.js_84.part.js": "8a35122bbbf4c3c83dd48428add97d98",
"main.dart.js_97.part.js": "4660324ddee8402f4523d15b178dc0ac",
"main.dart.js_76.part.js": "018a0ac0b94d06a7f1e36cc5081a712c",
"main.dart.js_79.part.js": "b2fec12e8b2474cb0763243988b0bc1b",
"main.dart.js_32.part.js": "2d720a5dc266189ff7e518bc04fd74da",
"main.dart.js_48.part.js": "230095b1fcde314a7d9301a1c675baab",
"main.dart.js_109.part.js": "028b71c38817151f276901281aad7537",
"main.dart.js_12.part.js": "08ee2de7020d8c9f041c36b5eeed3567",
"main.dart.js_61.part.js": "eccd3dfaf893014ff7cfe6c0691716b9",
"main.dart.js_94.part.js": "d10053ab4103a2732d115f89304662f3",
"main.dart.js_86.part.js": "e4f148106cb86046e05b63fc57bf4c93",
"main.dart.js_99.part.js": "a6880707845b538ba0e35d34fa574559",
"main.dart.js_71.part.js": "548e11fcc62297cbdbd37af189a4e2c8",
"main.dart.js_96.part.js": "2971dd00ce139b861bd845d96bac12d3",
"main.dart.js_108.part.js": "54cd4b54b4fb53d85bf96ceb5668a4d8",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_58.part.js": "02dd865f464b107f0f5fc124999acdd2",
"main.dart.js_100.part.js": "2c98f96bf0d5404c25fdf2117273160f",
"main.dart.js": "078b6a866bd1fec0669a2fd7f38eca8e",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_3.part.js": "fb2731e79a828505aff3210e57ae16c4",
"main.dart.js_19.part.js": "0e8154be9b2e05e44ee0b000f9fe34fa",
"main.dart.js_50.part.js": "3d3cbd93078b7b587c6e6d116d828ecb",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js_106.part.js": "d1f9ee4f7bf4d31965b645abc6bca369",
"main.dart.js_22.part.js": "357367ee5b6e76d69718e32481e6b7cf",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_85.part.js": "ee74424f0100b798d6711c7294eb4a5e",
"main.dart.js_21.part.js": "23c10072dfb86876d182e846b24b59d4",
"main.dart.js_92.part.js": "aea144ff8688e43f770a449109e537e1",
"main.dart.js_68.part.js": "34b76032528783520e1f7de09d77cc12",
"main.dart.js_27.part.js": "c051e7863a813a45f928ddac219cd6f8",
"main.dart.js_20.part.js": "ac15082a739ea5c4169b652d7be16700",
"main.dart.js_80.part.js": "3304080462cddc4dbcbadb3938c6f6e3",
"main.dart.js_70.part.js": "359b97ad76abcbf087745c25f6bc9f76",
"main.dart.js_29.part.js": "3edf7a2fd8cc6b13d6d0d58fcd783b42",
"main.dart.js_6.part.js": "e3c274c50d22266355f762921b114983",
"main.dart.js_75.part.js": "7a64ddfb55e0a44e3e2e14239964471a",
"main.dart.js_56.part.js": "7bba60dd1ed88529f79af3a96ad66c55",
"main.dart.js_89.part.js": "963cd8f58e95a6df175697ecbdfb5943",
"main.dart.js_66.part.js": "50568b7b5cd7aadf1159d50b7b399767",
"main.dart.js_41.part.js": "edfdbb494d2bbda70b74eeba900970bd",
"main.dart.js_87.part.js": "941a887f68c332e968fb6b91b5add1b0",
"main.dart.js_31.part.js": "845bf94a8345dfe72c6765d6057d919d",
"main.dart.js_51.part.js": "fb286c0f4f48899ba91a4735de28d469",
"main.dart.js_65.part.js": "79972968b781674537d168417c7846fd",
"main.dart.js_30.part.js": "22aa7c2b9326b8fc7bff6ae99a46590c",
"main.dart.js_93.part.js": "dd7027aa839bab0f1c81966290b117b8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "5e15f6eb40b7aae3238e21ae43c6cf12",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/AssetManifest.bin": "fac0f61759959ad2d28185f1fb6d05f5",
"assets/AssetManifest.json": "9fa4ed5f619fd5da566d938dd0b74b40",
"assets/NOTICES": "fa3b1eff9c5f65ee30cd5980cd3d31ef",
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
"main.dart.js_5.part.js": "d76e15cb9571a47ef5479b757417998d",
"main.dart.js_1.part.js": "743bd0cbc9eb83d9818bd87b53c635e1",
"main.dart.js_69.part.js": "d808a9078ecbc1d9d0c488e3aaa5e94b",
"main.dart.js_16.part.js": "392b8da81325d4d49dc366b9dd2f6449",
"main.dart.js_9.part.js": "e87fdcbe5b3b64750148545e1c0b74f9",
"main.dart.js_8.part.js": "33b56a7b4f855fe63a4834061a194c4e",
"main.dart.js_11.part.js": "d99b01d5592ca7343eb4e4bf8123a6aa",
"main.dart.js_82.part.js": "a8ebfead86850d1f88d4c95c09d51bc7",
"main.dart.js_88.part.js": "45c61368e75fbe8b9f8590b017522a7f",
"main.dart.js_77.part.js": "0947f04671ecb64880cfe1199d5c86d1",
"main.dart.js_33.part.js": "6626166859215f7b05da797d4b3d4e8c",
"main.dart.js_55.part.js": "571f59094d906abc498ae7813ba72ad9",
"main.dart.js_47.part.js": "d6edb545627e0dfc0462ff09c16fbaf3",
"main.dart.js_43.part.js": "bddf8c4d8065d4d39d2650834947141d",
"main.dart.js_49.part.js": "aeede9f85fe6a29b1da97b6fce5973c9",
"main.dart.js_44.part.js": "1d349059855da1e4ba2c2028447664f7",
"main.dart.js_57.part.js": "d27b3bd88957d3350c3ca11c72ccedb8",
"main.dart.js_72.part.js": "43b78235863de235bf2e57f8d10cb9ea",
"main.dart.js_54.part.js": "722f1c22b81ad5b2d5738a4fe2d22168",
"main.dart.js_42.part.js": "20bc7e9bc0266c73618a451051b87187",
"main.dart.js_62.part.js": "210908d76f27c10f04cc92bc4c1f8ca3",
"main.dart.js_14.part.js": "6b767d0e8d2da0808925d1bdb1fb037b",
"main.dart.js_24.part.js": "8b18ed47738b89994da0bfdbcc61b191",
"main.dart.js_73.part.js": "0c785f6e6d085a06128a583fa95d0797",
"main.dart.js_74.part.js": "27d9693222a4265f524adf23ff1da64b",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"main.dart.js_17.part.js": "efbac86a571cac65df710ef729ea9a01",
"main.dart.js_98.part.js": "b1aa991f2c2dac1c1081e4d1e5a1bec4",
"main.dart.js_39.part.js": "e2fb3edb41e22e18044dd8ae0a52f3f9",
"main.dart.js_81.part.js": "454bf0852643309626f98ca393268923",
"main.dart.js_23.part.js": "548fa73ac247095420b79b8f6d0f7ef7",
"main.dart.js_53.part.js": "b174181381eea695663e30373b2eb7a0",
"main.dart.js_37.part.js": "5cff9100750d7b334002d88a963322fe",
"main.dart.js_63.part.js": "0f3b7bb6c740bdc96b1a4338543f2736"};
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
