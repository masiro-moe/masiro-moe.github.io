'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "677c29c44677fa66ae05aefdc6cad229",
"main.dart.js_60.part.js": "4a8193166f91746efc9b0e8648fea933",
"main.dart.js_18.part.js": "032ad2b322911794fc5e86bf719ada9e",
"index.html": "22b22db442d1eb1bd1c0829af1d4d554",
"/": "22b22db442d1eb1bd1c0829af1d4d554",
"main.dart.js_95.part.js": "a6bee2d0abf0cb4bfcc5b7739593145c",
"main.dart.js_78.part.js": "f88f669f164319088b3dc76515fb73b1",
"main.dart.js_64.part.js": "b256d44d8c6cb8559b5144a90afa659f",
"main.dart.js_2.part.js": "b3265a940d9c04cc0c67d81c87215b37",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_45.part.js": "4b9a79ea3890d7f1b1efb78c6f5c014b",
"main.dart.js_91.part.js": "bd652a769c310908a51df5a83b3f070d",
"main.dart.js_67.part.js": "262dde4be2cffb7bb2b10896aeb76d37",
"main.dart.js_36.part.js": "4fe45058e2ce22c9cd4f15667c2c6d97",
"main.dart.js_101.part.js": "8dde7289061efbd583d9bc8440ebc7c3",
"main.dart.js_4.part.js": "99d9ffbac95f49edb514578c106cfd86",
"main.dart.js_35.part.js": "3caf77e60f3d6bc3d83232f8da5edeb5",
"main.dart.js_59.part.js": "be150291202790f1defb53e26337613c",
"main.dart.js_13.part.js": "d57f0c75b12f3e8ea4aed1942ce064c0",
"main.dart.js_40.part.js": "b52749839ce95fd14fb17130dc5e9ba1",
"main.dart.js_52.part.js": "2855fe384a74891ad7b49fbd3df6b295",
"main.dart.js_84.part.js": "680d660aae13ffa08300a189676eb71c",
"main.dart.js_97.part.js": "8810ce896bef585e3662ed8a6fa29ba9",
"main.dart.js_76.part.js": "e4b0fda13ce3dcf8fde499dc73ae1f95",
"main.dart.js_79.part.js": "44c0d10606dd9675f87e8bd0f209db8f",
"main.dart.js_32.part.js": "b0de409c2d25b12383dcde04eb886e28",
"main.dart.js_48.part.js": "a01a6d29218d8bfac39946f3afa2aa9a",
"main.dart.js_12.part.js": "20255cd09a18847fb7fa3e95f10a58d6",
"main.dart.js_61.part.js": "c154ca8594268104f56c4fd57abd0d3f",
"main.dart.js_94.part.js": "b8929478e9359d0c3068fbe71514340c",
"main.dart.js_86.part.js": "663e99b1dbfe07bdf022413e35fe7d2e",
"main.dart.js_99.part.js": "c8d69958d63106d679c2022171508e2c",
"main.dart.js_71.part.js": "869db00db577324e507704eee5184d50",
"main.dart.js_83.part.js": "948be7e11978934217b6aabfc47f5eda",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_58.part.js": "276217627e703295f760c71eefb07bf1",
"main.dart.js_100.part.js": "d4c9682d7df53e7cc2def097a01471ee",
"main.dart.js": "1b9b80e683d63a12a34cb803b19fc762",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_3.part.js": "3b914151ab50047be307eaf2e3324ece",
"main.dart.js_19.part.js": "a0225ff0474c24a822226e82a89d5282",
"main.dart.js_50.part.js": "2d32d0ea0829ad10e473d06c9c630cf6",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js_22.part.js": "df4c065c353b2874e4963dbb02c8b083",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_90.part.js": "175a8d5044db90bc77148d28dee03c62",
"main.dart.js_85.part.js": "ee97ab5f082e174b4f2789f497b6d8ec",
"main.dart.js_21.part.js": "89f63ee633efdbf0ba7593e024229416",
"main.dart.js_92.part.js": "dc9f5b67922511a487b081c64311b4e4",
"main.dart.js_27.part.js": "a8e5df5656b25dab8a3e00de722a5165",
"main.dart.js_20.part.js": "69654852efe45205c252a73d36395ea0",
"main.dart.js_80.part.js": "ce5175e6d7352025d18d23fc6454b87a",
"main.dart.js_70.part.js": "6f856a7760f1d5ebc9dfd510f8166bc4",
"main.dart.js_29.part.js": "e02032e6cd0f330040e43b5eea579c8a",
"main.dart.js_6.part.js": "d5dca51bee298fafea2e8a029b6c20ed",
"main.dart.js_75.part.js": "3a280faae88c851fe9f569f4a847d0f1",
"main.dart.js_56.part.js": "ba9cb80d5ceef593eb38cd77fce421c8",
"main.dart.js_89.part.js": "5f0752204ff617e1816860a085638c56",
"main.dart.js_66.part.js": "275b149607789ee358c5ceec01632ef5",
"main.dart.js_87.part.js": "c05b87f07c64fa53b27c29f5ae133342",
"main.dart.js_46.part.js": "962a6f15e58036813afe99e7fd694c72",
"main.dart.js_31.part.js": "26ac61e2ad55e3fc6a31281007966a7f",
"main.dart.js_51.part.js": "62ababfb9631e48c864b6f92df68f9e2",
"main.dart.js_65.part.js": "d7e01943f57af27fb6a76f6e8641e4e7",
"main.dart.js_30.part.js": "3d2e2e2b529e5663709fe9ff3e179a0e",
"main.dart.js_93.part.js": "6f619e1a3c2d39a8819393d810684676",
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
"main.dart.js_5.part.js": "ae97efb2807557880cd235880fb276a6",
"main.dart.js_1.part.js": "648b9b03c8b280d5da5660611ada043f",
"main.dart.js_69.part.js": "763a11a6ffddce87c9a99f2fa93cc129",
"main.dart.js_25.part.js": "c41fba154ac98e5b009e915e4bfa1f5b",
"main.dart.js_16.part.js": "e2f57c33346b31bcb2852381b02e3824",
"main.dart.js_9.part.js": "f7ca2709b1123f5d79af9a241931332b",
"main.dart.js_8.part.js": "ff903940cfa51bbbaa20aecf39f1140e",
"main.dart.js_11.part.js": "c6871920ea88620714d605599a0ac43c",
"main.dart.js_82.part.js": "c2d3bc23c56d14297a44ea960b0cbdf4",
"main.dart.js_88.part.js": "a30a80a4c435d428e9ef9b50b709c1d9",
"main.dart.js_55.part.js": "43daeace1a3d4b89e6e7ffbd7078556a",
"main.dart.js_47.part.js": "d0c2f31ad4b4a7ddfa43b10526ab3a81",
"main.dart.js_43.part.js": "754134ce8b190f8383babbcd0c022b0b",
"main.dart.js_49.part.js": "511fe9b13c1f3ce0a71e3ed98e26e51c",
"main.dart.js_44.part.js": "c2fae7aad502220399bee25d2f9007ec",
"main.dart.js_57.part.js": "12c20b4379e380169e4d1750beb06b4c",
"main.dart.js_72.part.js": "1c91c9aa511076b64f98d3210d6c82dd",
"main.dart.js_54.part.js": "6985ff6d6a6362e7e759c5bfc0bed484",
"main.dart.js_42.part.js": "1e9403d200a2fe2be2b1807ab651b4ae",
"main.dart.js_62.part.js": "27bf9c5b9cb61f78099af45b309e72bc",
"main.dart.js_14.part.js": "627d9b4da9bd435b792be450025f121e",
"main.dart.js_24.part.js": "954dd9fcbbe077d84a4a0618cca79a99",
"main.dart.js_74.part.js": "a3c5d7d178ea327a0d75c1fc8e880cc3",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"main.dart.js_17.part.js": "4ac2119394278cafe2e0c47f44762776",
"main.dart.js_98.part.js": "a8e1e001bcf0c208f61095b78175ccc1",
"main.dart.js_39.part.js": "def509861fb76affd6c1c74ab4a185a5",
"main.dart.js_23.part.js": "f96812141893f5040a22d4dd6bff521b",
"main.dart.js_53.part.js": "7b80622668f2e788f0ebf346f1d9ed08",
"main.dart.js_37.part.js": "ae936a0ad9139786f18986d187066161",
"main.dart.js_63.part.js": "8ca7c22339294c71f49b4e1a45cea5e2"};
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
