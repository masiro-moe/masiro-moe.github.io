'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_60.part.js": "94949f1c8d9308bb26445fd56b00b433",
"main.dart.js_18.part.js": "08666a021742e258c601f51dfa228922",
"index.html": "620951f4a951dd6e6f0adc1c1fd82143",
"/": "620951f4a951dd6e6f0adc1c1fd82143",
"main.dart.js_95.part.js": "9cac12df0f5f644a00738a551af029d7",
"main.dart.js_78.part.js": "3264826e2a705e2b2612bc100212a28a",
"main.dart.js_64.part.js": "c871a4402a52a1b9f9f3cc5ae54e6432",
"main.dart.js_2.part.js": "fdbf65c3bcef9d5d83b7faa7402a96d7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_45.part.js": "2623a2db7212afa5db2109a8121661fc",
"main.dart.js_91.part.js": "280845ad90d7098cf988126d3e5c6dd1",
"main.dart.js_67.part.js": "fddb44aa69ee2a8ec1d522525998c6f2",
"main.dart.js_4.part.js": "180d630b1a34931d85e92b6cae2ae780",
"main.dart.js_35.part.js": "2c1c55ac3b42c60a4d4a30c821b3e6c5",
"main.dart.js_59.part.js": "0770d447a48c71cd691cdbdc95d36a35",
"main.dart.js_26.part.js": "2d5e39148b3829de03dfa4b8237bbc94",
"main.dart.js_13.part.js": "31aa44d9df1bd5819a454706a40be52e",
"main.dart.js_40.part.js": "0a24de33a6019c0cca8bad78313d94ab",
"main.dart.js_52.part.js": "c58e1994909c352f5df6c88c4fe1b61e",
"main.dart.js_84.part.js": "e97ec4f16a1c8b4d7177f20d8d063b69",
"main.dart.js_97.part.js": "8614a218fcd680de898d83d690263790",
"main.dart.js_76.part.js": "33583be1d43787f7a19872c96fb2517b",
"main.dart.js_79.part.js": "110ce4e03918ea47a0f2142127916bf4",
"main.dart.js_32.part.js": "a0fe0226d5b1c6f99d2b9655414d1a72",
"main.dart.js_48.part.js": "33f4fdb3084331d3d3e193eab6c8bf42",
"main.dart.js_12.part.js": "8150e10d977a0c2bd2fb9eb737d4a98b",
"main.dart.js_61.part.js": "d62950fb6427f077b5cabbb68b34ab34",
"main.dart.js_94.part.js": "de33494083ba54965d1547bee4a74971",
"main.dart.js_86.part.js": "d59ab9b64feebacceea7c0fc1b788051",
"main.dart.js_99.part.js": "347d688d5cce8e447f344e9751620c90",
"main.dart.js_71.part.js": "332b6e0740fd328a7209880ddd161bef",
"main.dart.js_83.part.js": "b7225260991f85b6fc5b9a3efd0d64f6",
"main.dart.js_96.part.js": "91496fa9a1f0829f0451c81be11f51d7",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_58.part.js": "afaac2d5c72ce29cb075891ec953f3ad",
"main.dart.js_100.part.js": "090926d36ec03fa97b73a180f4d4eec0",
"main.dart.js": "450a91831ecfb5dda0cb84c6a082c0c7",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_3.part.js": "7eae41d463503559ec763dbb7bdc71d2",
"main.dart.js_19.part.js": "0cbb62635dff8f694ab6f2d0851a14f9",
"main.dart.js_50.part.js": "82a851ded9356ea491a4088cd8f1d3c4",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js_22.part.js": "79856de6312bcfa4ae1ca39a9567aa48",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_90.part.js": "30de107fe4c5587414be35f1267ee9fc",
"main.dart.js_85.part.js": "aa80526c4914b5e3f213d701dc70b4a1",
"main.dart.js_21.part.js": "14279caf97d98bbed0777eccbe62bcd5",
"main.dart.js_92.part.js": "cdadd950fe440afcf493210ef80d5f06",
"main.dart.js_68.part.js": "3a5ecb1c4b93dccd03f98197df214cac",
"main.dart.js_20.part.js": "5083768be27aeac5842d1942b9f733b7",
"main.dart.js_80.part.js": "a12c3fbd30923c46145e3194e6c4276a",
"main.dart.js_70.part.js": "b77048781db3bdbc9db5309c34f54e8c",
"main.dart.js_28.part.js": "7a251e9f9af3ca19bf36b0594284abd5",
"main.dart.js_29.part.js": "1c17bd55032ee757ffd1d2adeed757a3",
"main.dart.js_6.part.js": "b85cfb3759347fd95a122f1e2ca5572b",
"main.dart.js_75.part.js": "96a113a23ebf7c7b2602ef18bf0a1767",
"main.dart.js_56.part.js": "6b420134016d94cf8c79813210052ffb",
"main.dart.js_89.part.js": "fbb832b4a83cc4de36ccd148fd178191",
"main.dart.js_66.part.js": "f7c9b36bf6259159cf8eff53eaa252d7",
"main.dart.js_34.part.js": "049173e84478b01b7cd1359569496ec8",
"main.dart.js_41.part.js": "298c49e8937deeebede064652435b2cc",
"main.dart.js_15.part.js": "a6ade0bf2f965a089af592fc007e1b63",
"main.dart.js_87.part.js": "913563714c75848339b3b0d7ceca4694",
"main.dart.js_46.part.js": "d9080a87321e6630867da858798f9174",
"main.dart.js_31.part.js": "acc87fe3a80f2dcece6f5b83f7f076a0",
"main.dart.js_51.part.js": "ffd28b7c6bda27dd30a7429726a955c8",
"main.dart.js_65.part.js": "2bb230eb43aa04ddca88e09ed0c65064",
"main.dart.js_30.part.js": "ed3c11fd1f793ba5a9478fe6e9a87cb0",
"main.dart.js_93.part.js": "49bfe95e48c16b75d8b9c860b95b465b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "cc864bb5d45fbc36e8f8822750a32ec1",
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
"main.dart.js_5.part.js": "f863476a525da64fa0686e285899951d",
"main.dart.js_1.part.js": "33eaffd9c04f3674f1e17408c3e14d14",
"main.dart.js_69.part.js": "89fabebf57a822512b0717ac6dc21ecb",
"main.dart.js_25.part.js": "517dd90943214a7658ef8e0b3d728f79",
"main.dart.js_16.part.js": "d75167445d2aa10ef8278e595555bcba",
"main.dart.js_9.part.js": "0ae37e05a95c0f12236a398b1ec56b8e",
"main.dart.js_8.part.js": "01cf81d59165cf58c3895b91b27c9849",
"main.dart.js_11.part.js": "bc805a02fd2a63772f90796bf95a76d1",
"main.dart.js_82.part.js": "a08667d34ecaf97cfd4265eeaba29212",
"main.dart.js_88.part.js": "14ff522fee0ebea71d2ece6da690cfd1",
"main.dart.js_33.part.js": "a009c8ea7257fef404cd24b56255c982",
"main.dart.js_55.part.js": "503d354ad91628a59ea3aa974eeb023e",
"main.dart.js_47.part.js": "63c37d614f05524f260d18ff6a3882b6",
"main.dart.js_43.part.js": "0e6b381e3b0e28cf0f784f9b45bcf51e",
"main.dart.js_49.part.js": "4527c02af62d4874b1ce7444acbc4de4",
"main.dart.js_57.part.js": "5f41adf1ece1c69c0c46522c301073d1",
"main.dart.js_72.part.js": "f0fe8d60a5098156f53aa880c9c4d2fc",
"main.dart.js_54.part.js": "ed928247fbd5580d75d9b91f1b103932",
"main.dart.js_42.part.js": "b4a3c8be94ddaeae9f8a69781ee46bf3",
"main.dart.js_62.part.js": "318f28bf193da79a81cb46514e334eb1",
"main.dart.js_14.part.js": "7a2adfdc4196f28252f9b71a6ae0a086",
"main.dart.js_73.part.js": "03b523ea87f29f664729670778f032aa",
"main.dart.js_74.part.js": "f627a1af78bc40ec3517c6015f580d28",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"main.dart.js_17.part.js": "0a33bbfae6bb4fee17ebf012e457da43",
"main.dart.js_98.part.js": "0d63ed7f9715d06569fdce4e63566116",
"main.dart.js_81.part.js": "a5bb35db32da9747d646fd128fea184b",
"main.dart.js_23.part.js": "f1e19995722cfded7c61a8c0fe8cc2f1",
"main.dart.js_53.part.js": "4a2dc589f5fbf524d82b52bad6d56c5e",
"main.dart.js_37.part.js": "69a3474789121ff217ace762b607d0ee",
"main.dart.js_63.part.js": "2a516e4f873872615577741f1a734c77"};
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
