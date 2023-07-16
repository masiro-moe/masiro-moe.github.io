'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_60.part.js": "2ccd05387396c6ef71597a19d9e048f3",
"main.dart.js_18.part.js": "6a6ae3d81e2a883e0f4ac503ca54a0f1",
"index.html": "ca00140a892e47492484d0df29bda585",
"/": "ca00140a892e47492484d0df29bda585",
"main.dart.js_95.part.js": "4e0adfcf0a2b1ce05222f14c343fff30",
"main.dart.js_78.part.js": "5457b0252b04286e5e721c658ef23c4a",
"main.dart.js_64.part.js": "27cab17930a59b830142c5583fa926a6",
"main.dart.js_2.part.js": "298de2a798f7e53b5a3d41cf8bb8d6ad",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_45.part.js": "1982da07e534cd81a623b9db644741b9",
"main.dart.js_91.part.js": "10db20e24aaf2d2fe9da7f00aac13346",
"main.dart.js_67.part.js": "4daf472b48bcb28c286ca4c24b5cb35b",
"main.dart.js_36.part.js": "99b2ee1632b7b78cb4129f4e0dad2484",
"main.dart.js_4.part.js": "d9a598a08a2eafecb8eb94835d91e723",
"main.dart.js_59.part.js": "7f5907113ad4bfddd87cd90fa96fda40",
"main.dart.js_13.part.js": "ef528daeed7ad2c9403e6171bf44a8f9",
"main.dart.js_40.part.js": "6628b7aa253a964bea6c5f10c79c03c5",
"main.dart.js_52.part.js": "2b9ce98113dbc28e32156fcdbb6732b4",
"main.dart.js_84.part.js": "ffac3258a68f11ce40b9c8fa58d51b67",
"main.dart.js_97.part.js": "b02bc9e18e0e2e1cc8fcb1707e0398c1",
"main.dart.js_79.part.js": "6686d74383ab838d963a8809c5b6cea7",
"main.dart.js_32.part.js": "3dcda5153cdace0b3553958dbdff3a39",
"main.dart.js_48.part.js": "88c2a10e6df184be8f246c17c3e7b592",
"main.dart.js_12.part.js": "594b4296e265f10405c6e90419bd892a",
"main.dart.js_61.part.js": "3144878bc773a18e2ce186df96e73685",
"main.dart.js_94.part.js": "8c94368bd51bf632eb28a5651ae309d9",
"main.dart.js_86.part.js": "d15f17a7b3f4c80407f899a7e2a01e3e",
"main.dart.js_71.part.js": "632efd850addfc2e0f84e6f98dca268c",
"main.dart.js_83.part.js": "b9eb9231e6ecf50ef270c3ab25dd298a",
"main.dart.js_96.part.js": "d12ba9d97d0d1f5110727b73ffe63d92",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_58.part.js": "9f07df75b83a3ff2bace25578e502237",
"main.dart.js": "5165308c2af5bd861e3e92accbb7e53e",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_3.part.js": "868c70c4ee1d2991d1773ee40659ac56",
"main.dart.js_19.part.js": "de534587a02755e2e00099699b825004",
"main.dart.js_50.part.js": "823f5875b41d44d69d2266dc2c9e40c2",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js_22.part.js": "cb97fcf5041ecc044015990417196514",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_90.part.js": "4b06f8da7411bfaa5f7e2e954329c6d4",
"main.dart.js_85.part.js": "3b20f4c6a70b49ef83e1e8ac28d5ce6c",
"main.dart.js_21.part.js": "6ace660436a1bd90a1d6284aabd86ba9",
"main.dart.js_92.part.js": "4d30c1f046ad8738cc4b09d54236a84d",
"main.dart.js_68.part.js": "464ca188231845f9e137514e886ccd9e",
"main.dart.js_27.part.js": "4047672919c5de83a906008ff1f3ebe4",
"main.dart.js_20.part.js": "4239435f88b82467648809ca61176dee",
"main.dart.js_80.part.js": "c257633d08eb057ca313481d6808450a",
"main.dart.js_70.part.js": "79da7c035efcfb15931ccd655870424f",
"main.dart.js_28.part.js": "ae91540b861ee56d481259f37c232ff1",
"main.dart.js_29.part.js": "8e9d4a1b8fd1bab1a8d045a00bff2049",
"main.dart.js_6.part.js": "72fa4ad30155a7dbc75cb29535091edc",
"main.dart.js_75.part.js": "aab88e4b56208d4a05e07e47e207e7b5",
"main.dart.js_56.part.js": "67cd38945adc1369864b359cef7eb37e",
"main.dart.js_89.part.js": "9c74e116bc3e346c9bcc9c73694d7d63",
"main.dart.js_66.part.js": "d5dde1e42543c7a2bbff01d5ff241bb1",
"main.dart.js_34.part.js": "aa194ec89be87a49b50281359084f2e4",
"main.dart.js_41.part.js": "e26be24de3d113281e54ced79b582041",
"main.dart.js_15.part.js": "90fe107f1a5c87ff169eacff98c185ad",
"main.dart.js_87.part.js": "ba956c4144f0ff60ba7ab6cae1b91ba0",
"main.dart.js_46.part.js": "825cdd6a6d52817e3d78b28f607cd0e9",
"main.dart.js_31.part.js": "4b34cfc5b60cbb97ba5f19d564333be0",
"main.dart.js_51.part.js": "69b326dfede403d87cf8629ccfcceb78",
"main.dart.js_65.part.js": "26e3e6fe5c1420bc3ae3b4b5fdecb31d",
"main.dart.js_30.part.js": "eb629f820a75c57d15157aee06ffb795",
"main.dart.js_93.part.js": "688339cdb692a757c610d77de0da6efd",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "cc864bb5d45fbc36e8f8822750a32ec1",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/AssetManifest.bin": "fac0f61759959ad2d28185f1fb6d05f5",
"assets/AssetManifest.json": "9fa4ed5f619fd5da566d938dd0b74b40",
"assets/NOTICES": "36225edebbdc61d47b6a91cb9cde012a",
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
"main.dart.js_5.part.js": "f9056d3f8c311fcff26573deb19fd5c3",
"main.dart.js_1.part.js": "57f042521236eefec241dc491dfba40e",
"main.dart.js_69.part.js": "5bf33563ac3636f64eb37c8dce7b7be4",
"main.dart.js_25.part.js": "4e406a38ea02e2c4eb885841c5265142",
"main.dart.js_16.part.js": "9efc98b82e614c52b8ad1579d677d203",
"main.dart.js_9.part.js": "8bb67ae8943c888fd13138e051d131f5",
"main.dart.js_8.part.js": "85863b53590a2964e3c8f9015e22a752",
"main.dart.js_11.part.js": "e65969d7d91624e206ebee6a53f7f24e",
"main.dart.js_82.part.js": "70f1e52e81519943950d8ffe7660abd8",
"main.dart.js_88.part.js": "56bd5440ad008b81540798a682e2f587",
"main.dart.js_77.part.js": "ab91becde6703428b127fcfd9ebf0416",
"main.dart.js_33.part.js": "06fdecec75347cc8a6790767fa093b8a",
"main.dart.js_55.part.js": "9aa9a2a9a7a0c349c11db4ffda03f25c",
"main.dart.js_47.part.js": "c981281d760fad4d8852cfc692e51a28",
"main.dart.js_49.part.js": "1d3d08441eb2f5eadb15d756f172ca42",
"main.dart.js_44.part.js": "10a784b16c45e4823ed9d2c94541914f",
"main.dart.js_57.part.js": "1fa8829fab602d805255156fb49a31f3",
"main.dart.js_72.part.js": "43c53131f570f5aa67c4e6c2e9c96d0b",
"main.dart.js_54.part.js": "da255c33d6737fa95ec3455edc4b6fb3",
"main.dart.js_42.part.js": "ac45244ac657c7de38137ee4d310c502",
"main.dart.js_62.part.js": "dfcd9938a73d243cc7f60ffc87a5d3c5",
"main.dart.js_14.part.js": "7a2be3247d4a3cf1425d97cc79a62586",
"main.dart.js_24.part.js": "260bd2eb83932dfde9f0271772351dc3",
"main.dart.js_73.part.js": "519688a1aae100c15457884c34fba13a",
"main.dart.js_74.part.js": "9706642399d792b37708b80d28b3bd84",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"main.dart.js_17.part.js": "4e07a7e33e0329f7b704eeda8de797b5",
"main.dart.js_98.part.js": "765ab8596f3bf6e161554429e9c288c5",
"main.dart.js_39.part.js": "3a13685a724c45bafd18a9693a892a49",
"main.dart.js_81.part.js": "82c6fd02cbfb05118910723c577a49c2",
"main.dart.js_53.part.js": "8561e70f751a8cac724bd408e42952e0",
"main.dart.js_63.part.js": "7e8fc47179097fe40bd0be9cd71b8613"};
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
