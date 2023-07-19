'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "302ee19427f3883391ea5a7886a929cb",
"main.dart.js_60.part.js": "1745b961bcae78e784a024a32cc30e60",
"main.dart.js_18.part.js": "4bbe3b307f547af83b653af94f527ba5",
"index.html": "69dc3855dd33dc8a3fc098c78fbe95e0",
"/": "69dc3855dd33dc8a3fc098c78fbe95e0",
"main.dart.js_95.part.js": "4142cf2f02a15dc88b304ec75bbf5a6b",
"main.dart.js_105.part.js": "a43b68e8b8152931937374a1b809483c",
"main.dart.js_64.part.js": "2efe0e46d29cc7bc466ea8ff5e89f946",
"main.dart.js_107.part.js": "89a5d77509e83dc878bc13a1c9f22c71",
"main.dart.js_2.part.js": "160ec544b4793a056f2f1f4eb0f7f725",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_45.part.js": "25db697bafeaaa505b3bca62b8127e1f",
"main.dart.js_91.part.js": "db0965cb71e9606956c70ca903ff8a35",
"main.dart.js_67.part.js": "2d0589c3ac935cd892c1fc4425dc56fa",
"main.dart.js_103.part.js": "476d0aac968d1545bcf9e60d45e705d0",
"main.dart.js_36.part.js": "69dba8db517d8fc97d75af854ddb75cf",
"main.dart.js_101.part.js": "62fb9cd44481f68051118ccf9982aaf1",
"main.dart.js_4.part.js": "78537a081a8d6fcaaceb6c3f16b1cbf6",
"main.dart.js_35.part.js": "c127dab235a0ea30389709b221ab56ea",
"main.dart.js_59.part.js": "0eca892a30e2c2eb9ea92973ab56d337",
"main.dart.js_26.part.js": "56d17093981ba367051fdb820e7b83fc",
"main.dart.js_13.part.js": "7951d7ba9d3fd6250ffbc1d7d7d52632",
"main.dart.js_52.part.js": "5a4bb2d6a04175cefed40c758607aabf",
"main.dart.js_84.part.js": "28d5b315f726393b9824addb9710dce0",
"main.dart.js_97.part.js": "2807229fa9934a85c045a40bfbb32a43",
"main.dart.js_76.part.js": "19074149243b90d470acc01e8e62b97b",
"main.dart.js_79.part.js": "0aa6c512af6b566f9aaf7eaacb680148",
"main.dart.js_32.part.js": "f7fcb9b044645f83dcb238e0ad18b241",
"main.dart.js_48.part.js": "be4386eb1438e07ac0e0ac505bc02799",
"main.dart.js_109.part.js": "5fd57ca04268afcac239394f964d8949",
"main.dart.js_12.part.js": "5596916b87f246ad69badcb339b23352",
"main.dart.js_61.part.js": "e9e2d0c5a58b9d802981c9f9a45c705c",
"main.dart.js_94.part.js": "300ee83fdfad5cd6779d014b8846b27f",
"main.dart.js_86.part.js": "42329482be9dd24658008b1c12cb2d03",
"main.dart.js_99.part.js": "29ae95a14241a6dbc84a28a739a2240a",
"main.dart.js_71.part.js": "17b1898db4c97b6d99a6c32a95f4772b",
"main.dart.js_96.part.js": "0f95ca4474e21fafc3fec24d69e4e4d0",
"main.dart.js_108.part.js": "093e5f8f5f0398fa07d77fd21d80fa9d",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_58.part.js": "b8b36e689dc49438a64fd3116d296783",
"main.dart.js_100.part.js": "4059068ad97db602df9bc51e76758794",
"main.dart.js": "b0c3bf7ba54ee8d4ff94361d6969ddc8",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_3.part.js": "705bf3a123c0009897dcba5219222458",
"main.dart.js_19.part.js": "89eba8fd2def2e394d2b7fd3eb20a538",
"main.dart.js_50.part.js": "a235eb665bd6bd0707cc23d29f7f6ae8",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js_106.part.js": "0ef9cce5f80ad88868b5f3942bf3bb3c",
"main.dart.js_22.part.js": "d97246da7c62113d28f79b015a16f530",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_85.part.js": "7631b88c3225cde5f566e10e3c588bd4",
"main.dart.js_21.part.js": "f7b072fc127302a70d499f1f86a8e758",
"main.dart.js_92.part.js": "e7952c604eb2f1fe6cbf4f5ce9fa50f1",
"main.dart.js_68.part.js": "4d64d7efaf0b40480e784f7e17d2662a",
"main.dart.js_27.part.js": "5c2d36e69f0d54bf754bf7859cf01ec9",
"main.dart.js_20.part.js": "273c4a25de4688befe60dcce0344bed7",
"main.dart.js_80.part.js": "777ee1dc7f192c50b7d8f50a278ba117",
"main.dart.js_70.part.js": "95a360019383c8d9c860d9bfa300473c",
"main.dart.js_29.part.js": "1882f6182b97277d18fd86b46e69a5f3",
"main.dart.js_6.part.js": "a326cf3e3ca7bb1ce523173144f8ccf4",
"main.dart.js_75.part.js": "7d0e8b6eaf5781474b088f7f2ac7aa4b",
"main.dart.js_56.part.js": "593e85031877891c680da1eda4476fd2",
"main.dart.js_89.part.js": "813b2202fede1bcfc7abe77bcf9eb54a",
"main.dart.js_66.part.js": "9b5e28afb22b85b165f65497d5a46543",
"main.dart.js_41.part.js": "93ddbc00d2418d63fc2798105dacc2a3",
"main.dart.js_87.part.js": "48c784c8deed4f6258c3f9793bbf2a5a",
"main.dart.js_31.part.js": "ca67f5677fc6dd506dab2e4a1b7b8bae",
"main.dart.js_51.part.js": "d9b1b287e5bc09fd336951536e033892",
"main.dart.js_65.part.js": "0435ebdd835c59b2c58fa01999554d6b",
"main.dart.js_30.part.js": "6ac29312ff17151de63ffc9a09f111ab",
"main.dart.js_93.part.js": "005e003765f226258b81576c422d5ed5",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "5e15f6eb40b7aae3238e21ae43c6cf12",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/AssetManifest.bin": "fac0f61759959ad2d28185f1fb6d05f5",
"assets/AssetManifest.json": "9fa4ed5f619fd5da566d938dd0b74b40",
"assets/NOTICES": "00311ab131a5aeac019bbb5377a0a6ac",
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
"main.dart.js_5.part.js": "9f712c3ede020a1e9e70e6a08630dda8",
"main.dart.js_1.part.js": "9c55a00e42f05ad755c0462bf37f4e06",
"main.dart.js_69.part.js": "0aada17ba4fbf0f34532668e23db5cb4",
"main.dart.js_16.part.js": "5c81997eec460761ca71ef58bc3210d7",
"main.dart.js_9.part.js": "d2fac4a511a29dcc33a58857f8682406",
"main.dart.js_8.part.js": "175f2ed6cbe44d2e5a83bd2fe51e9a1b",
"main.dart.js_11.part.js": "cdac56305f49c2c2b5a4180f0a973988",
"main.dart.js_82.part.js": "30d5ce6d8424d2bc3766a28c83374529",
"main.dart.js_88.part.js": "db9b1ab0a73e91602744445a47bd7b03",
"main.dart.js_77.part.js": "3dbfa63dfb1ad2265740ea3fc58df4cc",
"main.dart.js_33.part.js": "ac602cdf81ffe51639cb1ed749927aaf",
"main.dart.js_55.part.js": "eb30e12cc59d847231c1e606bf048232",
"main.dart.js_47.part.js": "9fbceedc56065aa4e5f1bc0d5ed60b5e",
"main.dart.js_43.part.js": "97643988f2d1e97da57444870a75923f",
"main.dart.js_49.part.js": "b69f8c71016c4fa571a0d79e8abce0de",
"main.dart.js_44.part.js": "5b5dac4435cdd98320ebff73d0281719",
"main.dart.js_57.part.js": "691365b8a90807c6c0c26c3138019848",
"main.dart.js_72.part.js": "a53b380667ea2cfa303178947957bf27",
"main.dart.js_54.part.js": "a91705003a99fd1f3c15a768e599bee7",
"main.dart.js_42.part.js": "1c31305451a2ac65772d28fb8c18de80",
"main.dart.js_62.part.js": "6c73b9dd23a9afb636f6144c28a940a1",
"main.dart.js_14.part.js": "2ae6183cfa92bf9347bd4b5e3bef6f65",
"main.dart.js_24.part.js": "86e5401d1a7e309029bb54829611c164",
"main.dart.js_73.part.js": "7b3b35917a4d9278ed245d661b701a7d",
"main.dart.js_74.part.js": "88dfa02cfc8e06775e31f37b5084fc16",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"main.dart.js_17.part.js": "49354a412d5cdedd891a97975ad6a21c",
"main.dart.js_98.part.js": "a5229e4120a59f87133f76a05271cc4d",
"main.dart.js_39.part.js": "c09986f197f6e1b9caef6a678333a452",
"main.dart.js_81.part.js": "d7cfad911909d7e34edc6848e03c2dfd",
"main.dart.js_23.part.js": "f9e94ec4034d127d7a064aeb7d388ead",
"main.dart.js_53.part.js": "717a03579ad0d36f9515ed869042406c",
"main.dart.js_37.part.js": "260e08af069359646346e252e5c52230",
"main.dart.js_63.part.js": "941cc6427b6131e8d830f8ed3e621469"};
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
