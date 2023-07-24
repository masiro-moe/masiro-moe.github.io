'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_60.part.js": "1cf97551dd57deff1bc34d628db1b47b",
"main.dart.js_18.part.js": "70066e84b2bb0b90c21075a6509991ca",
"index.html": "2caa83e83a42952433cfafe22ff17c96",
"/": "2caa83e83a42952433cfafe22ff17c96",
"main.dart.js_95.part.js": "b1753e9677943638942a69f5ae21ffb9",
"main.dart.js_105.part.js": "b165881963e6e309b59dc798847bd54d",
"main.dart.js_78.part.js": "6570ffb5ab2a7cdde580928ca9cdfbb5",
"main.dart.js_64.part.js": "906822cc6d957e622967a475fe33124b",
"main.dart.js_107.part.js": "bb054b9058bd4876481ee9a7b7c28596",
"main.dart.js_2.part.js": "935f28072ec2e78c1b153098c350c03f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_91.part.js": "0c6556f2f97fad334902e0512608530f",
"main.dart.js_67.part.js": "cd2435c76b8a57f871efeee07743e985",
"main.dart.js_103.part.js": "6c55f2bb0198e9197543b451e919a87d",
"main.dart.js_36.part.js": "664526a5788631112a8a5c4a6c77c785",
"main.dart.js_101.part.js": "194aca5f045e82c8637d803cc2b70927",
"main.dart.js_4.part.js": "2bd5f41815a42cb1a10f390832f951b3",
"main.dart.js_59.part.js": "bb96d9dcd3e512e1aed66bc950d2822f",
"main.dart.js_104.part.js": "a0a88a9dafc927eb2b0e277a4dea2410",
"main.dart.js_13.part.js": "d97963cab3641b34fdf43ff6c048aa19",
"main.dart.js_52.part.js": "83c0ea57a1627725586c5e792afd8313",
"main.dart.js_84.part.js": "64f79cb2d80c76ae8634138fb6acb56a",
"main.dart.js_97.part.js": "a1fe800468a0439431e92a5d17d35106",
"main.dart.js_76.part.js": "6cdf886ebe8985c50371c60113d4f825",
"main.dart.js_79.part.js": "3d4fd2790d0aeb1db6cb1328ecb50288",
"main.dart.js_32.part.js": "1f514189c0aabb624b8b921ab99b5302",
"main.dart.js_38.part.js": "b675f5dec0087cb854ba8477b2979b70",
"main.dart.js_48.part.js": "d3cdae07ef5134114db89865b1fb1f60",
"main.dart.js_12.part.js": "a75e4f6ab0ae12da4d6df89c2d6d772a",
"main.dart.js_61.part.js": "f23456e5f8412de42a58ee226dfbbc05",
"main.dart.js_94.part.js": "7cc520272b6701b131826ef1b7ff9640",
"main.dart.js_86.part.js": "a99098fd9fb1e1eae90104bdbdfaf374",
"main.dart.js_99.part.js": "f5ab1ce94db4f903770cf81fcad3feb5",
"main.dart.js_71.part.js": "a66fcaea28231da7b591f34c820c932d",
"main.dart.js_83.part.js": "13039c02981c130e2b7da967fe0c080b",
"main.dart.js_96.part.js": "828c96c9568736f56c0db75c8bd0b3c8",
"main.dart.js_108.part.js": "78b7e3a08a6c1523c6698ccad68a90c6",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_58.part.js": "ed98daabdc23f2d06e879fcf0bb730c6",
"main.dart.js_100.part.js": "c8d6951ac4df229cb6eaefa9f160ef9d",
"main.dart.js": "4985fc7e9efa52fb2e679ec35691318d",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_3.part.js": "c8b5c675719f3bc50754cc6d809e26a4",
"main.dart.js_19.part.js": "ec53b5f8e235353c3d237f0f5a2721d2",
"main.dart.js_50.part.js": "b52faf9ee0672ee6ea2596546a4194bd",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js_106.part.js": "1b3e4b46236cf7ef71489acf02ccc00f",
"main.dart.js_22.part.js": "b9e75e048c3433eedabedaebf17c6400",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_90.part.js": "1dacef8d097e8472b34b689d17440b42",
"main.dart.js_85.part.js": "3dcec89ae7ac05cd988267509034cb8d",
"main.dart.js_21.part.js": "056110f33a8f3cf907de1964bb6c7e79",
"main.dart.js_92.part.js": "536984f36480bf730696208899399576",
"main.dart.js_68.part.js": "75aadff6977ce71c3542e5980ce0eb8a",
"main.dart.js_27.part.js": "78c5dcd4762ff0c15bca0dce17e23c56",
"main.dart.js_20.part.js": "6dad06abe90b4cea5c60fab3e4c1b20e",
"main.dart.js_70.part.js": "2b9316375c3900bce543bb631248fcb4",
"main.dart.js_28.part.js": "60f80b69c0ededf856cc2c2c82b88087",
"main.dart.js_6.part.js": "51119438013550429d2510d09789ae72",
"main.dart.js_56.part.js": "be9a9f4a29fe7fbfa47e0a8aed8ab258",
"main.dart.js_89.part.js": "a9235415570cb3bb0d2beb05a1a366ef",
"main.dart.js_66.part.js": "9df81fcd1bfb2eea511e8d79962a8e28",
"main.dart.js_41.part.js": "7592f3af08a2afef22d74287071a391a",
"main.dart.js_15.part.js": "6b9965c0997b0aa2d72b3aa8cfb04add",
"main.dart.js_46.part.js": "d3e606932de01f5b3b44301096f482f2",
"main.dart.js_31.part.js": "0d18bfe80fa8ea7798e0b44cdcf42679",
"main.dart.js_51.part.js": "394c97d65ddfe9ce35f753588652d5c0",
"main.dart.js_65.part.js": "adf6cd1ebe4607d685c0f714b5bbcc91",
"main.dart.js_30.part.js": "c39192e433cf1621ef343081a562fdb4",
"main.dart.js_93.part.js": "4f821c71dcae268c58c831004ef23771",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "1e1f220b64ec2e41d67f09fe4848b9e9",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/AssetManifest.bin": "fac0f61759959ad2d28185f1fb6d05f5",
"assets/AssetManifest.json": "9fa4ed5f619fd5da566d938dd0b74b40",
"assets/NOTICES": "017e0d14854ec44929d885178d5e5dd0",
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
"main.dart.js_5.part.js": "aee04b0e457652d10405a7fcb3d326bb",
"main.dart.js_1.part.js": "838fc52bfedad5d7847c727de280905b",
"main.dart.js_69.part.js": "92633b84e703bcbf380c8577891b7b1d",
"main.dart.js_25.part.js": "d73c6f9594e22ec7863f8e9d0fdf9d53",
"main.dart.js_9.part.js": "7e51acb6c1aded156abfe59f5aa489df",
"main.dart.js_8.part.js": "15b2fda91c6d0f32ad48bca58a50c630",
"main.dart.js_11.part.js": "ffdef9656767081213f1f68ea10dd392",
"main.dart.js_82.part.js": "378af69f1aa7eb4bcf7e78e3baa8ea2c",
"main.dart.js_88.part.js": "408e98a2e43780cc9ee8466c682f40b5",
"main.dart.js_77.part.js": "fce5ef697fd5292dc9699e3f49d3b83c",
"main.dart.js_33.part.js": "914507fed52fa4cec12c09db604152c4",
"main.dart.js_55.part.js": "2e8ff9032a55bd3fd0aa3e907dadaad2",
"main.dart.js_47.part.js": "81ab84ac269420781060dc6ba52cd6cf",
"main.dart.js_43.part.js": "9a37012f96e40c344e92c01b3aab96ef",
"main.dart.js_49.part.js": "7dccfa169a030fc345c36be3dfa0e0bf",
"main.dart.js_44.part.js": "1a32d81567607b3c26c57408cc69c591",
"main.dart.js_57.part.js": "d4e492e35b2b5a08e3140a3077fa0b83",
"main.dart.js_72.part.js": "c9cde51402370b86fc89753093f83fd3",
"main.dart.js_54.part.js": "5dd594c3447166731b3bd43ae01064a5",
"main.dart.js_42.part.js": "ec6247d1e609c1af52360dcd60df3e0c",
"main.dart.js_62.part.js": "9102bab6f827168a6eda83322a08186b",
"main.dart.js_14.part.js": "1fc62d2628da3aa57b5f12df62d3d79b",
"main.dart.js_24.part.js": "b6ec7239f74ab8b1359c499ee9093514",
"main.dart.js_73.part.js": "0d0ad29437d9f8e66ae25e9509ca97ec",
"main.dart.js_74.part.js": "febef7c0a45662ff8e35987de019df3c",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"main.dart.js_17.part.js": "6674252607ad05a397d58bf16d93b0eb",
"main.dart.js_98.part.js": "c031ef88760a88594d0cee0d4da950ac",
"main.dart.js_39.part.js": "518d201baecbde8d4845dad225bb28b4",
"main.dart.js_81.part.js": "c5c962ca234ee23a068ca8473941e347",
"main.dart.js_23.part.js": "30dec057bb7c3a0081c02c833d10fa70",
"main.dart.js_53.part.js": "9a4d6538f07547d2d4fde54c0b7d1dc3",
"main.dart.js_37.part.js": "bef8931f43b0c840b9bfb07a362a5b00",
"main.dart.js_63.part.js": "8b92e31c38c712d220614a22eaa05dc1"};
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
