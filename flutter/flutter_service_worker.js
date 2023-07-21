'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "04d71c4853a2450a67f86f39f9f1f897",
"main.dart.js_60.part.js": "6f15b04cb8558f37e4dfb87fcba27be4",
"main.dart.js_18.part.js": "30b5d188375ea26fd9a6ef14e22e76a4",
"index.html": "e990b698ae4d9df24d8fed19ae919e8e",
"/": "e990b698ae4d9df24d8fed19ae919e8e",
"main.dart.js_95.part.js": "0af89aeded26375c14f6ba5fe81700c7",
"main.dart.js_105.part.js": "9153c9199c284c0626f400e8a1bd6324",
"main.dart.js_64.part.js": "d022f9dfc519851bedcc8c4757123fd9",
"main.dart.js_107.part.js": "9f3c9f452073618c0f9180c0ddd6c4bc",
"main.dart.js_2.part.js": "605a3299e42563c325a38d33d2adefc3",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_45.part.js": "d75366f09cc53415e0d14daa92958264",
"main.dart.js_91.part.js": "44408b89ab78dbe1ec6081cbbbb1bb55",
"main.dart.js_67.part.js": "2279eea1d274e08783c2cef4db269299",
"main.dart.js_103.part.js": "554404c11b26e6dbeecf6dea98e255b9",
"main.dart.js_101.part.js": "6d06aeeba3458c60c455329853fb2b08",
"main.dart.js_4.part.js": "9853db7bebf7211ddaddd60fc076e932",
"main.dart.js_35.part.js": "d5acc73cb5b8a1c5ef9105e40c38137a",
"main.dart.js_59.part.js": "581b501167b0a7f58974eb907efbba19",
"main.dart.js_26.part.js": "3f209fcc2799844a3463a5a3e2ee839c",
"main.dart.js_13.part.js": "7a073d1e0df4b14367f6db6a75a67015",
"main.dart.js_52.part.js": "bfe8a03595ec31f255bf27ce3b842dbd",
"main.dart.js_84.part.js": "611226c5334b75b00d9f071197a1b97c",
"main.dart.js_97.part.js": "e80b0e55aceb214a0cb67160bee7a510",
"main.dart.js_76.part.js": "ca8aa9cdc276a6541fd85eb7f318e6d2",
"main.dart.js_79.part.js": "ae8fc95216bfd857f8f769e1be01eb9f",
"main.dart.js_32.part.js": "9f0cad77e9dca51cd6ff6cc39fa3e5a5",
"main.dart.js_48.part.js": "46ec78585174f1a528432a600254346e",
"main.dart.js_109.part.js": "673f06f6cff4fc5e02fc2aa19708b27b",
"main.dart.js_12.part.js": "3b240b6a0a98075c2d86383a022347fa",
"main.dart.js_61.part.js": "7947491eeee93f15f75d5dfb50f7f32d",
"main.dart.js_94.part.js": "1b13ff163e0a7f94fe8f32af7d80d9b6",
"main.dart.js_86.part.js": "e8c9e04d67e154ba6e70cec3df8d3c52",
"main.dart.js_99.part.js": "69ce3fe673e82be9d10e8e278981376e",
"main.dart.js_71.part.js": "b16b09c84e6c53ff0aa768171c13897a",
"main.dart.js_96.part.js": "c2569ae5b054bcb3f1e9a01297b58be2",
"main.dart.js_108.part.js": "91abd5727bf9153b5412dfe79c341a64",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_58.part.js": "af5ffeb9d82ae6612712f67c3adcd68e",
"main.dart.js_100.part.js": "10dbc58650c3cc91893183eb5b87e6de",
"main.dart.js": "1da91d1b89f7bc44a50687fad7a6faf8",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_3.part.js": "4a08b8faa69f18ecf0c7f6f6581b8e6e",
"main.dart.js_19.part.js": "6b411ca1511d6c1e1da33deab841e6f0",
"main.dart.js_50.part.js": "2262ec8ef8d18d83720ffd705a93eb62",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js_106.part.js": "00bd41075435f6e92f4a0f7ab7728d64",
"main.dart.js_22.part.js": "f8a9d81d633f0deb833c0c5a5f374712",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_85.part.js": "9157b2f8f296a20e1449adaee5a52615",
"main.dart.js_21.part.js": "d971100de9176ed97d7c02c3a6cdaac3",
"main.dart.js_92.part.js": "10a0524e36682b55bcbf5c99e95c4617",
"main.dart.js_68.part.js": "9ae830663d31dbc3c80d113e3d78e8d1",
"main.dart.js_20.part.js": "281a95ee95331b6a864636a52d9c141c",
"main.dart.js_80.part.js": "b246c6f3329dfe67e4047d01e4c6599f",
"main.dart.js_70.part.js": "b74f5525c6a5c430b6878a3352f27310",
"main.dart.js_28.part.js": "77b8fdc4ec6fa5bc0de022a4a766dcc6",
"main.dart.js_29.part.js": "b0b4916f988128fc1a9f22c896fb8ee3",
"main.dart.js_6.part.js": "e903fddcf5149a41c2462819e52471ea",
"main.dart.js_75.part.js": "125e288830b7caa1c53524ff973472d8",
"main.dart.js_56.part.js": "317ce43cc8e46e0c1ea7eb0f5ee45a8e",
"main.dart.js_89.part.js": "49e75e28abf7e3e8f4ddd4ce9961bf8a",
"main.dart.js_66.part.js": "8077f0d8185f7ae477f018dabff2628c",
"main.dart.js_34.part.js": "6fb91dcd8e824e35ec3a0fc195bbb075",
"main.dart.js_41.part.js": "21867128a3ac3d3dda683d0da169b294",
"main.dart.js_87.part.js": "fc59ea964db01199de506c56f747b9e9",
"main.dart.js_31.part.js": "d7631a8f510cf452e562b4b18da6fe37",
"main.dart.js_51.part.js": "6ecc939b9574a4673ccdb022f73d4351",
"main.dart.js_65.part.js": "6b61cefa014800700e2ec185453afa33",
"main.dart.js_93.part.js": "b46ddb0519bb7f5c793a2d018140a352",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "819e08733cf143464ee299c34d6f7bb0",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/AssetManifest.bin": "fac0f61759959ad2d28185f1fb6d05f5",
"assets/AssetManifest.json": "9fa4ed5f619fd5da566d938dd0b74b40",
"assets/NOTICES": "4a82f03ad495f1feaef2babd4a8f8206",
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
"main.dart.js_5.part.js": "cc73a385cddbdb293572d2fa4d93527f",
"main.dart.js_1.part.js": "f8b791f08f87c2a717468a5c67901a42",
"main.dart.js_69.part.js": "e5fae1922a8beb81a740390980051326",
"main.dart.js_25.part.js": "f02e3be1b2fc731a3dec03a93f9470b1",
"main.dart.js_16.part.js": "8444267f8dcdf946cae45dae65f31db4",
"main.dart.js_9.part.js": "10cc4139ec4664c11477153579d4bddd",
"main.dart.js_8.part.js": "4137fec07f30a53e21f69f2d3b36bed2",
"main.dart.js_11.part.js": "814fa8ef8124fed061751da722825c73",
"main.dart.js_82.part.js": "3201aad2181a27111489068afa76cf28",
"main.dart.js_88.part.js": "922a8e6bf021edc21984cd1b8829bd02",
"main.dart.js_77.part.js": "a7237562882c7c9e6cc3b5b64140530c",
"main.dart.js_33.part.js": "68f32d854c34965b0e0d31b464433ee6",
"main.dart.js_55.part.js": "49774fcdd8950ddd20473b5bd90d128c",
"main.dart.js_47.part.js": "943bd534263dbd1270bb87b7a24dfa30",
"main.dart.js_43.part.js": "f97dd11a9a01517ec4a3bff20f8205c0",
"main.dart.js_49.part.js": "153e83a4aa722959e5eec274da665749",
"main.dart.js_44.part.js": "054182416d86cc45284b8272df0f0320",
"main.dart.js_57.part.js": "a6d9ec21e6c448dff2835b400cdbc9c9",
"main.dart.js_72.part.js": "1746747059df7b8cf639f1e940871dd4",
"main.dart.js_54.part.js": "3bb1f1358d496e68dfc2617d5dbf5d3e",
"main.dart.js_42.part.js": "954deca9d0988fc64aff4219dbce90b3",
"main.dart.js_62.part.js": "20513b268ae0f645006769361a978397",
"main.dart.js_14.part.js": "bea193e9f655fb8686103b314878b5d8",
"main.dart.js_24.part.js": "f155d39da907c26109a22b35cdc3eb63",
"main.dart.js_73.part.js": "7aa8ed1e812dc367d4784433e0a9849a",
"main.dart.js_74.part.js": "ea49a583d4cd8a3db692a541a9cb7078",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"main.dart.js_17.part.js": "8030ec47f8f5824ed2517d33768b5170",
"main.dart.js_98.part.js": "c931c1b83951004f023952fe47a8ba51",
"main.dart.js_39.part.js": "ba03b0e101d0e91e40766f531fa053b2",
"main.dart.js_81.part.js": "7a5dc3b58d0900223df22316aa9818fc",
"main.dart.js_23.part.js": "6b51af4745ee276a45a075c7f5f0c451",
"main.dart.js_53.part.js": "82bc39972f003b90b50951b58c5d5b6a",
"main.dart.js_37.part.js": "020876eda907aae84ba5097d72265b28",
"main.dart.js_63.part.js": "6f5575850d029a6d40bed7f9b9103df8"};
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
