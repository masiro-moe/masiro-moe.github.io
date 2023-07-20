'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "a97afcd7b79f65fe15d98992cdec25fc",
"main.dart.js_60.part.js": "51714fa3454486f48b0538e58060f10d",
"main.dart.js_18.part.js": "6f6e3d04d2cae882692a8df4d2c27dd5",
"index.html": "3beb2922b9f00865e9173014224e816c",
"/": "3beb2922b9f00865e9173014224e816c",
"main.dart.js_95.part.js": "5fd48ff31c2f4732f62393864aa734b1",
"main.dart.js_105.part.js": "0f1d47a2fd2d3c44ea166015d83861b0",
"main.dart.js_64.part.js": "f386c0e4a3344a1a02eb3e76bb71139a",
"main.dart.js_107.part.js": "bd7a77731495d4780303dfaa57dc8aa5",
"main.dart.js_2.part.js": "f2b4717f1eb563a0512992aa7b61a7b6",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_45.part.js": "5a66382cd085aa1969bd359f69ecdf02",
"main.dart.js_91.part.js": "9806e5c885c7162624874b1e103e22a9",
"main.dart.js_67.part.js": "315174e78a8068cf005e063334ec14d1",
"main.dart.js_103.part.js": "1ebe8c16069b01673f1406a30314ca89",
"main.dart.js_101.part.js": "455809c64b69f7975b3cb4fdc25117bc",
"main.dart.js_4.part.js": "d7b59953551a04d576e606fe89a2f47c",
"main.dart.js_35.part.js": "0b8f54a262f1172e6dadcc4980b59f79",
"main.dart.js_59.part.js": "10fd3dbf32603e2c83d88b6ddd06813d",
"main.dart.js_26.part.js": "a484d6c3f51f15f05cc5b82341008fe0",
"main.dart.js_13.part.js": "8b84a98f9155b9613d839c2e1d18506b",
"main.dart.js_52.part.js": "f751e28fe6cace365591b88eec1bc14d",
"main.dart.js_84.part.js": "e42f4b0bd5bc6b0c107e5d01e25a5115",
"main.dart.js_97.part.js": "318005ca00d6719435262eb2bcea170a",
"main.dart.js_76.part.js": "dc4174bf4b79153e2c57cd6122492b85",
"main.dart.js_79.part.js": "de566f514b2c51e78785297cc523fb5c",
"main.dart.js_32.part.js": "359dca2f4ea34b3095ab33e5707f5e7b",
"main.dart.js_48.part.js": "01dc9263346e82346284321f9a261139",
"main.dart.js_109.part.js": "61a2d2d1c3cbfa35956db38d5fd15bd2",
"main.dart.js_12.part.js": "744555c90f274129687001577a669f68",
"main.dart.js_61.part.js": "dc1855b25555dce8eb8048c446354ccb",
"main.dart.js_94.part.js": "61040a1c0727777db9f6d8bd1af1c080",
"main.dart.js_86.part.js": "32ff70d5ffdd7b214adfbf18a5e5db9b",
"main.dart.js_99.part.js": "54e2169aed68249b529e717b57603f0e",
"main.dart.js_71.part.js": "a66143714b57918e0092ee45f9a580fc",
"main.dart.js_96.part.js": "55a6afce86768b59e926690d26daff61",
"main.dart.js_108.part.js": "218fa07cd2e9309765c7c4f4eaa56a3b",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_58.part.js": "5f99b111746101e584441bacd8760b89",
"main.dart.js_100.part.js": "ba7a27c30993a11e245900c0c314253e",
"main.dart.js": "4dc51291ec786d05a50aecd51fcad697",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_3.part.js": "e2f875ab46a75a6ff82d7899632e9aa2",
"main.dart.js_19.part.js": "fc75bcbe7ff797cf37093e4af6368d50",
"main.dart.js_50.part.js": "51c0fb88720e7dd6b46633ee4a322789",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js_106.part.js": "7e4629a0d5738c592378f0e3018b3cd4",
"main.dart.js_22.part.js": "be7716c4965942b6be037a32ea0e5568",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_85.part.js": "4997d252c9398416d0666e8d8aaeb280",
"main.dart.js_21.part.js": "7a6964ad8b1cb0623e6088bb2815bd8c",
"main.dart.js_92.part.js": "eb051e98f6b92972f284b448a1b787d2",
"main.dart.js_68.part.js": "54ef4fbe9ff073750a86dfd27842fb85",
"main.dart.js_27.part.js": "9d648cb029a9f67402edc6e1a83d75d2",
"main.dart.js_20.part.js": "226eabd16a9eaff209cac9d55a24bdfc",
"main.dart.js_80.part.js": "5bf770c7039d4b79f7c89f08cb22ee36",
"main.dart.js_70.part.js": "cb742c5cd6af2068763fe95f4613ba0f",
"main.dart.js_29.part.js": "7c9710359a9fee9520c04771cf88e51b",
"main.dart.js_6.part.js": "b0bc9a094c99563115e1e0a5c9f24dd1",
"main.dart.js_75.part.js": "a584ac3354e3974e09cbbf5d828b528b",
"main.dart.js_56.part.js": "931cf4961825d41a22a3f16350145835",
"main.dart.js_89.part.js": "5612d72f8711b777a68b73f69a85c593",
"main.dart.js_66.part.js": "4ebc3190e38959851fb085310f2b221f",
"main.dart.js_34.part.js": "ed33cacf69e3f20c21bf17f9d4503973",
"main.dart.js_41.part.js": "79b8079a6d903749e3241d47b97b675a",
"main.dart.js_87.part.js": "cdafc7724f945b464eba8431177f6a5f",
"main.dart.js_51.part.js": "2d7b3cbd2c00933172ba38ed08d81310",
"main.dart.js_65.part.js": "b56e3d739a2fe4f534e9f38fe6ac7a3b",
"main.dart.js_30.part.js": "ef1be8835f2291feeb402a84a3f3cab8",
"main.dart.js_93.part.js": "7354acd029b49e443d2092257f5f17e1",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "5e15f6eb40b7aae3238e21ae43c6cf12",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/AssetManifest.bin": "fac0f61759959ad2d28185f1fb6d05f5",
"assets/AssetManifest.json": "9fa4ed5f619fd5da566d938dd0b74b40",
"assets/NOTICES": "b78969ac17ef319c3736b85e54d255f5",
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
"main.dart.js_5.part.js": "0ce278c19a38dfae78f3c5f4ac69e931",
"main.dart.js_1.part.js": "28f3661137fe1326be29d975560bb886",
"main.dart.js_69.part.js": "0e886614a64345f784df6eeecd336fbd",
"main.dart.js_25.part.js": "34e5ea248dcea4619c78ae773c2b48e6",
"main.dart.js_16.part.js": "7f1d8e7fb49a1d90d7102f39dad25350",
"main.dart.js_9.part.js": "9fc6df2d57fe1b7d3cd926e8e1351bfb",
"main.dart.js_8.part.js": "b4b2e7c81d3ccd514be4dedf1f942d06",
"main.dart.js_11.part.js": "798e3bc45c46aeecdf830365ad290431",
"main.dart.js_82.part.js": "06f226938bc036108193548b4386596f",
"main.dart.js_88.part.js": "294bc7838e341705547252d3df5cc4a0",
"main.dart.js_77.part.js": "fbf31fd425b12b8631bbe8d4e040dd06",
"main.dart.js_33.part.js": "d8a513187abf157299b9ceed4719d5b3",
"main.dart.js_55.part.js": "2ad9684d012ce80f7580d1476829492f",
"main.dart.js_47.part.js": "2c3df4bc1530f5a16ac8ed6b29e5ef6f",
"main.dart.js_43.part.js": "ea500b63253f2dceb2fb8125e74b70b9",
"main.dart.js_49.part.js": "edd8d5be0bd52957a7205a704039c7d1",
"main.dart.js_44.part.js": "c0570a128daf41235af042e641c3eac3",
"main.dart.js_57.part.js": "174fd8bf3932e03ca853c884c8b3ec00",
"main.dart.js_72.part.js": "12cc183ca6cad5250c18ccd7668c4458",
"main.dart.js_54.part.js": "c7f63941d6e2a97ab64efc16923411c0",
"main.dart.js_42.part.js": "0d217f638c2fa90b31a14400b2c6f0bc",
"main.dart.js_62.part.js": "223ecc7584d327ead4448c42e111da96",
"main.dart.js_14.part.js": "24d0b3c67fe1783688d529cd3262bf80",
"main.dart.js_24.part.js": "69c5c18628e6667c461a816fb40bfd93",
"main.dart.js_73.part.js": "8ab34c6ce40896ec74a61816cebb6c57",
"main.dart.js_74.part.js": "2d86ae7371e249bc5249ef9d800e8970",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"main.dart.js_17.part.js": "e3dc45ce09aff54b7aa3c6fafa822676",
"main.dart.js_98.part.js": "2cad38ece87e221f0aeaf6a9583b0642",
"main.dart.js_39.part.js": "20b7cc921222308b1bda1f88169f6dff",
"main.dart.js_81.part.js": "f10859f2f55dbe2451df3fb0607e9039",
"main.dart.js_23.part.js": "70dbf4baaf9bac42b10ad0a2904fab4a",
"main.dart.js_53.part.js": "38f9e45c3f4ed0772f8ca9b23d103fb8",
"main.dart.js_37.part.js": "daadf9f3c2dcb667f2dd6fd14608d106",
"main.dart.js_63.part.js": "b1c28aec7d8ed7aa14ad375e761e3da9"};
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
