'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "73602686a9a9d124497d5a37839771e2",
"main.dart.js_60.part.js": "1d55f6f570956a8295a78213898d3d21",
"main.dart.js_18.part.js": "46286566dd9f302aef5cdfac3ea7d8ef",
"index.html": "d6d93e68f66d4935cf58f4bc390bb89b",
"/": "d6d93e68f66d4935cf58f4bc390bb89b",
"main.dart.js_95.part.js": "b9580c18b9239ffdf6eabb94774f1e22",
"main.dart.js_64.part.js": "e0db802d5d4776cd251ec8dd60d96392",
"main.dart.js_2.part.js": "caa52367dd48f7f7feffac19add3074d",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_45.part.js": "c7e4280ccc1ec17d0cdf22cb86095f4e",
"main.dart.js_91.part.js": "696515c1eabe905380acb689f9404c4d",
"main.dart.js_67.part.js": "b84d0d16660670669ba73cdde193bad1",
"main.dart.js_103.part.js": "c8953a27db5f52f0f5a4b936730042f6",
"main.dart.js_101.part.js": "aaa901dad8671f6a3d2ec8fbb769e344",
"main.dart.js_4.part.js": "83c2cca11ad1ab6b4892f2128cb78aee",
"main.dart.js_35.part.js": "20591daa833e83d2ed67243d2349d907",
"main.dart.js_59.part.js": "a68b00a34a0957643fa682c650c6f5cd",
"main.dart.js_104.part.js": "a79a0e0242e770309acb4bfee898f097",
"main.dart.js_26.part.js": "92747636408705fac1629549a58050ab",
"main.dart.js_13.part.js": "3b31434985ac2b85a1d51cd1cff3972e",
"main.dart.js_40.part.js": "2263a47d2dd2f876564e9a74282c5bc7",
"main.dart.js_52.part.js": "0ff133d94031f81c285e04023ab02966",
"main.dart.js_84.part.js": "7fed6c164a3f565507ad4138b7b44e6d",
"main.dart.js_97.part.js": "34c1adcce9182d307912f741b947bf98",
"main.dart.js_76.part.js": "798ae408cad87283622836595ff51b29",
"main.dart.js_79.part.js": "91e6bbcccae79da80258b6e39ff0bd83",
"main.dart.js_32.part.js": "90212a1d405f5df39e0f88d1fbd94521",
"main.dart.js_48.part.js": "69e88c09517561a8c2b893f7e949b78e",
"main.dart.js_12.part.js": "13dd04a7dbcd31214d4cddfcc819f5fc",
"main.dart.js_61.part.js": "c28f7414349a28e02a30c298f34657fb",
"main.dart.js_94.part.js": "6b07364bcd0329310422785630fad1b5",
"main.dart.js_86.part.js": "c65512b40a232ce93727328243e2d26f",
"main.dart.js_71.part.js": "ac12bd57fe87c3e66ec442f6f69d360d",
"main.dart.js_83.part.js": "4f57dab6c8b83cea2bd633063290e11f",
"main.dart.js_96.part.js": "af0681a9dda7dccf232522375d4b909d",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_58.part.js": "98e9acfc898b87d608580c7523819f26",
"main.dart.js_100.part.js": "a52d2b7ef2417346710ca63c6bca71e6",
"main.dart.js": "93b84e8cc5ddbf6fecfa26f638b2dfc8",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_3.part.js": "8eca5c79fc061da9afb2b77f8b6ba3fd",
"main.dart.js_19.part.js": "4cb8b789d28e8b8f3af220e6e91c0d0a",
"main.dart.js_50.part.js": "1222f0e996c5a8164ef035ffbce2bb05",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js_22.part.js": "d9abd6a9b9ed087c43c3dfe44052b13e",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_90.part.js": "0a2ef603de1e073dae7214c74a1764f9",
"main.dart.js_21.part.js": "f69da8c5814231d807bc8d9fd05dc7cd",
"main.dart.js_92.part.js": "59713995c677760f8594a9f51d3110f8",
"main.dart.js_68.part.js": "e14849e1b9329198340ce303d500a614",
"main.dart.js_20.part.js": "3be489e3b3f0a6af6b938bf746dd03a7",
"main.dart.js_80.part.js": "46f0c27a8b42f2daaeb9468a12f30113",
"main.dart.js_70.part.js": "283fd188142e7dc9c79f9fea6950aee7",
"main.dart.js_28.part.js": "43df3cb696b7b706c94165e3db297fae",
"main.dart.js_29.part.js": "2ed16c04a7ec83976c04f6688dfeba6a",
"main.dart.js_6.part.js": "673225afde42188f4427b948a00c611e",
"main.dart.js_75.part.js": "cc6ecd1dd915cf343fb526a9bd265b9c",
"main.dart.js_56.part.js": "d3580a97fc7ca24f6b1d00455623add2",
"main.dart.js_89.part.js": "df28f83edb8c4521ef7eeef2b3dd55c6",
"main.dart.js_66.part.js": "dc7d6cb9c0bcaedebf6a42a831615b15",
"main.dart.js_34.part.js": "c5543805753efc7febb136460d7dd295",
"main.dart.js_41.part.js": "2a2282e68e76d5a34cc24be87173f055",
"main.dart.js_15.part.js": "5934d89e24007ccd2d0218f9952ad13c",
"main.dart.js_87.part.js": "a0edbd2d2026c5e6cc9735e6bd43e25c",
"main.dart.js_46.part.js": "d9080a87321e6630867da858798f9174",
"main.dart.js_31.part.js": "831588603ebbab88b414b8c9420074aa",
"main.dart.js_51.part.js": "e6f3c512934e83aeeb390a4dab2acd3a",
"main.dart.js_65.part.js": "d652b2aa96c733483bb0f0eee810e0f1",
"main.dart.js_30.part.js": "3ab47737b9a52a5070b777d60342843c",
"main.dart.js_93.part.js": "7437eb71ab3612820d2d7155c108522c",
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
"main.dart.js_5.part.js": "455dc9f23d6262af29f470ee3030b5a1",
"main.dart.js_1.part.js": "60db144604a9f58e11f70020137528a9",
"main.dart.js_69.part.js": "afcc6bc276c381921a674d32ef0446cd",
"main.dart.js_25.part.js": "f5cc23a00d4bffab5fb5bf0072e271ff",
"main.dart.js_16.part.js": "56acdf361379bc084387e09723966157",
"main.dart.js_9.part.js": "a398a9a5d728248e1ba83bb770474dab",
"main.dart.js_8.part.js": "2075029f6eb5c7fac8c0f8f9e8aaf6f8",
"main.dart.js_11.part.js": "4be6b8f462568a2c7d0bf183f07fc1da",
"main.dart.js_82.part.js": "6ed4b41c887d39bc9aaaaa9a098c9126",
"main.dart.js_88.part.js": "a2518a1161cb833b0ec053748f4d9d42",
"main.dart.js_77.part.js": "2c4aa511e4f96278d6a35254547a587a",
"main.dart.js_33.part.js": "a009c8ea7257fef404cd24b56255c982",
"main.dart.js_55.part.js": "7d2cbdc149a5312107fdafbdeee2061e",
"main.dart.js_47.part.js": "96b9a39ed257f677b74f82412629243a",
"main.dart.js_43.part.js": "4f14a855951d86c6ca15b9ad217c8ced",
"main.dart.js_49.part.js": "deac4125c5ec398ecab41bb2e03c4d86",
"main.dart.js_57.part.js": "7836348654092bfa014c5d1262d911f7",
"main.dart.js_72.part.js": "bf3086503af916fd6e7307d11dab23c5",
"main.dart.js_54.part.js": "8c84a925adeb36d513cfd2168091c551",
"main.dart.js_42.part.js": "f04f01dd0b8b494771fb660724c5f32f",
"main.dart.js_62.part.js": "91c2b764f157031627082d7df86ef17a",
"main.dart.js_14.part.js": "9373e7cc9bbde47d2e2836db09ce6b7a",
"main.dart.js_73.part.js": "b450563b757757b683cd7e4641136b9b",
"main.dart.js_74.part.js": "b2f40e9ce49e932b7c57fe63d1390c97",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"main.dart.js_17.part.js": "0f75c0706606735d04aef8eb57940278",
"main.dart.js_98.part.js": "cb8cfa89e362cb60016bfce86297fcc9",
"main.dart.js_81.part.js": "cd7a99fd20339e40ce3770c4a787734f",
"main.dart.js_23.part.js": "def4b8164ab516e8ff6391d5554fda74",
"main.dart.js_53.part.js": "c2821969310c93ba6a6724a6503218cc",
"main.dart.js_37.part.js": "c934ed7a200d9a264566d1ee0b1c9680",
"main.dart.js_63.part.js": "a359a63714e8146cbfee304be7013736"};
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
