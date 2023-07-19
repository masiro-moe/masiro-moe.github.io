'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "a750cc169d2fa3a60e62ec3ae024d300",
"main.dart.js_60.part.js": "d71cb9c6567fd48a3850e636e599f865",
"main.dart.js_18.part.js": "25769cce1a6d9a81cc7e9af569323e94",
"index.html": "86a46e74f308aebb700d54024485fd76",
"/": "86a46e74f308aebb700d54024485fd76",
"main.dart.js_95.part.js": "69d1857da31dbe45a12c5e25d030877a",
"main.dart.js_64.part.js": "9146cbf58abf281ea246b43c18220f9e",
"main.dart.js_2.part.js": "83243848587a405f675bd6e95b832bd6",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_45.part.js": "86cc8a05aa8fbec168578bf0053aa089",
"main.dart.js_91.part.js": "b7a34795cb4a80b56828da60be879e22",
"main.dart.js_67.part.js": "7064bb36dcf8f5b68bc98488b194d09e",
"main.dart.js_103.part.js": "544664cc33f5da1d101e41710a980faa",
"main.dart.js_101.part.js": "5ce0a0de3d0e1dad06aea4ac71e7cc8e",
"main.dart.js_4.part.js": "50b4c58f02f33661c2a589fcfbf8124e",
"main.dart.js_35.part.js": "18e841c675b79b3180517bedf325eed5",
"main.dart.js_59.part.js": "d6a116c9465602b97822fa97e16046a1",
"main.dart.js_104.part.js": "d85de37f24fa35c732338b7f4959cf7e",
"main.dart.js_26.part.js": "ea14beeaedd262487067a4ef02b676dd",
"main.dart.js_13.part.js": "11c276d1a3077d901a2f3f9c86307ce3",
"main.dart.js_40.part.js": "0551dcf54f1a64f132b0bb4792aa3f85",
"main.dart.js_52.part.js": "bdfd584346ba5d1ac3a0dc01a5f651b7",
"main.dart.js_84.part.js": "9be80f09b68113f7335d2d47acff0abd",
"main.dart.js_97.part.js": "5da8c7a4e6e258f17ff25f79a3ab8f84",
"main.dart.js_76.part.js": "6fd4d807a0e65c728c226e3010d2ce3e",
"main.dart.js_79.part.js": "ac36a8a9fe6b9307aca1d5ade44ed791",
"main.dart.js_32.part.js": "3198c9b24d5c81817c6b37158704f878",
"main.dart.js_48.part.js": "cc934b70c83bd11e409a9651663aa489",
"main.dart.js_12.part.js": "4a6f07526e6a50a6f2eac311974f9e14",
"main.dart.js_61.part.js": "1e2b5a4f9ca4caccab8d3c959492dbf4",
"main.dart.js_94.part.js": "89842d5ad22be65ee4d8c3fc47812519",
"main.dart.js_86.part.js": "0edf1db70d39eb1a2f4d8d01cff4c921",
"main.dart.js_71.part.js": "640a73071afd6740862e0c9af74ee9f0",
"main.dart.js_83.part.js": "0cde70061e0201502d3565eb44f5da06",
"main.dart.js_96.part.js": "1fb96df58f030701a39b3c31695896aa",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_58.part.js": "6e0c44b4345d19c979bdbc005efdc717",
"main.dart.js_100.part.js": "4243e10d2b241be398527e4706580bbc",
"main.dart.js": "9e88c87c3f734a3c912c8a7cd5dfe371",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_3.part.js": "a1b6c726903af1b3c70f2db1ea70f7fc",
"main.dart.js_19.part.js": "220c462247a1684414a568be7394ab42",
"main.dart.js_50.part.js": "7494f3da02267d24886275d25c50248b",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js_22.part.js": "7c342e2af948eeec78e17aa498982bf2",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_90.part.js": "2ff555ba15377f6204441318da01f969",
"main.dart.js_21.part.js": "2a33c1ac04a986ffa73894988c962949",
"main.dart.js_92.part.js": "4c5a8ab13d3a7890b305eb4a17d9735a",
"main.dart.js_68.part.js": "f056772a09e8bcf8aad3cf7f94131556",
"main.dart.js_20.part.js": "583731e443598e6338453f94bfd6b8fa",
"main.dart.js_80.part.js": "77dc5ddf2c6f1ae3385f8e63ba8a5b25",
"main.dart.js_70.part.js": "9380688651d01fe9896bcdcf8fd38a5a",
"main.dart.js_28.part.js": "fc91251d9e65be00a0cde27e4fb62a6a",
"main.dart.js_29.part.js": "4b0776d30ba231d1177bef7e923ecd0a",
"main.dart.js_6.part.js": "4673ddbe16e4e2e22a996b88a6152744",
"main.dart.js_75.part.js": "8b47a3ce0bc20d905beb51a54b76ce8a",
"main.dart.js_56.part.js": "2643093c568c465589489c9114fc9b27",
"main.dart.js_89.part.js": "6be7bcf942f2696d14fdac47f9f7a43d",
"main.dart.js_66.part.js": "4f21f684bf85dfd10090e414fe41cb8d",
"main.dart.js_34.part.js": "36ea7e8099ae2af09acd145f9d32b6c6",
"main.dart.js_41.part.js": "fc0d865a70b20f479d7bc37741411959",
"main.dart.js_15.part.js": "43efc65a97cc3349b367b63022de0562",
"main.dart.js_87.part.js": "174d4c43d792cf87c5fcdcd6b69355f1",
"main.dart.js_46.part.js": "b3867bbd2abd5afce44eeb9890919467",
"main.dart.js_31.part.js": "6b783945dd700f5a82ce425039e7decb",
"main.dart.js_51.part.js": "9fec692f3dfec79fad921365b7a7024e",
"main.dart.js_65.part.js": "e2f3b90f8ecd6fea5f47830e71139d62",
"main.dart.js_30.part.js": "dc2d37eac938f82f5f7c8cab391d82a9",
"main.dart.js_93.part.js": "3be1493ccd1a1e659d147dffc1809437",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "fdb54be0546d2aa8263576b82e506e1d",
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
"main.dart.js_5.part.js": "3086b5e759305aeba22685224430a116",
"main.dart.js_1.part.js": "952c8067829e87a1d79d801891e6f49f",
"main.dart.js_69.part.js": "355ca3df23ec0eacf65359c4b06a6825",
"main.dart.js_25.part.js": "a195b190b8d782fdfd27cf125e20c851",
"main.dart.js_16.part.js": "d703232275fa4842929caf0c3fe91479",
"main.dart.js_9.part.js": "8d258f61965a191f8233af5cef1f8729",
"main.dart.js_8.part.js": "21a8c01d8592679a4bc9990a62853699",
"main.dart.js_11.part.js": "758f8e9001dac437e9fd7ecf74357bd7",
"main.dart.js_82.part.js": "c29bd76d8ee4f8f44b76a67871b8ddb7",
"main.dart.js_88.part.js": "86e91eb9bd396635045b278c02d8d415",
"main.dart.js_77.part.js": "7b1ed284796bb12603ffc4cfff03f689",
"main.dart.js_33.part.js": "5221b79b8bffbfe35cc7b632d7087950",
"main.dart.js_55.part.js": "56d30aa812b9e048cc0d856d8007c408",
"main.dart.js_47.part.js": "224c6d4aa0ee5b2845c09cfd27e348cd",
"main.dart.js_43.part.js": "4f14a855951d86c6ca15b9ad217c8ced",
"main.dart.js_49.part.js": "9f90eaca25e36befe1bca3ae50492d54",
"main.dart.js_57.part.js": "0d53ce684d38ddd2f219bc0752df62b3",
"main.dart.js_72.part.js": "453e5cc0fcc90005101c624f15246d0f",
"main.dart.js_54.part.js": "89e29890ed5001a0078ebe7a25d0821a",
"main.dart.js_42.part.js": "2c4429da95cde0b05ba8baec27aefece",
"main.dart.js_62.part.js": "2ab5851fa38f02741d264ee00d160c9f",
"main.dart.js_14.part.js": "54ee193861770ffc53c236c426693ed2",
"main.dart.js_73.part.js": "321493169dff0d9f4dfd64eed2e00ed3",
"main.dart.js_74.part.js": "0c03536236db6cc211c05e82b73f8a32",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"main.dart.js_17.part.js": "9ebf01e2ab9a8b8aa11ec929a006d3a6",
"main.dart.js_98.part.js": "563c604cf2e68da8f7ea699e110630d4",
"main.dart.js_81.part.js": "a7470f4c0b18f782ca61aceed34cbecf",
"main.dart.js_23.part.js": "f9354a32dd8fbb57b8c9e54005822d82",
"main.dart.js_53.part.js": "f999362beb051fab7219a773f4446c14",
"main.dart.js_37.part.js": "38c3997c81af42984058b58748a1f61e",
"main.dart.js_63.part.js": "b1f7c901e8ae2443619cb3a39eca9ad5"};
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
