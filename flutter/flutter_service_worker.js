'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_64.part.js": "f7fcdda5c744dec794d501e1856a5c40",
"main.dart.js_17.part.js": "e3ccf5c7490a71967de225eebfba1544",
"main.dart.js_58.part.js": "e20eb6a65ad6e51741f0f04c59dadfba",
"main.dart.js_94.part.js": "ffedc8798f32c1e4311dc6896e9f4220",
"main.dart.js_16.part.js": "571cd01619e7409ba4523f929c817330",
"main.dart.js_85.part.js": "dbbbb1a8d96d025d73e239f820f0e097",
"main.dart.js_82.part.js": "564464b2e1e75ccb56ae0a3b42af0bb9",
"main.dart.js_18.part.js": "fa725efc946190e9cb14f4fe3ec74a4c",
"main.dart.js_31.part.js": "b41fef95dd8d4111ff09d1f351fb7273",
"main.dart.js_14.part.js": "95e230fc5ae883ec4abdb6daa04212e6",
"main.dart.js_37.part.js": "bedbd90aa2bfb79725f952f28ce030af",
"main.dart.js_8.part.js": "35b059b7f8a69dc259a86e997dc31365",
"main.dart.js_83.part.js": "8ef87a9404f7c2ca958f0bef2667101b",
"main.dart.js_36.part.js": "0d551759cfca455fe5c484025fc061b3",
"main.dart.js_21.part.js": "e78fc1aca5945f74cc9d650597c54e14",
"main.dart.js_34.part.js": "b49b255c6e609df1d5fd21c89a1583ce",
"main.dart.js_65.part.js": "e14ceda9dd167571667b9e37727ce577",
"main.dart.js_87.part.js": "9a2d65bb4a3d202ea405afcd17e8a35f",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"main.dart.js_28.part.js": "0aaeb876d22107ed75d4f65984636735",
"main.dart.js_29.part.js": "b0f322297d1ea33f53115ee00f7c8694",
"main.dart.js_91.part.js": "b0a79f283ccf1f69bcc4accb2a9382f8",
"main.dart.js_45.part.js": "0e8ca7ad2146b779cbca0d5ea6ea9c81",
"main.dart.js_20.part.js": "cfd23931baaa5161642d433a9a6a1f41",
"main.dart.js_43.part.js": "df89c5260658824fe7d0b40cb97f3285",
"main.dart.js_9.part.js": "d4bff129dd9666981e9c39dc8bbe0e47",
"main.dart.js_6.part.js": "59c5ee44f70048d7ba9c4d91c263b9e0",
"main.dart.js_77.part.js": "78dca227ef827f7790be17852a9c320a",
"main.dart.js_80.part.js": "02a09b8cbed3c880095356fcd0d3ad62",
"main.dart.js_7.part.js": "7df58b7103648fc9eabc91788b1b621d",
"main.dart.js_32.part.js": "5dfbcefdc2135922db5df350395beffb",
"main.dart.js_98.part.js": "6a46cdde5ff87a00829846dcd199e4ea",
"main.dart.js_23.part.js": "56505f44d8ef7f4a3499936b48e89827",
"index.html": "3ba5b129a828bed85f335c176076ab45",
"/": "3ba5b129a828bed85f335c176076ab45",
"main.dart.js_38.part.js": "495c9fef9f4d9d81a8d47a5c3948df41",
"main.dart.js_40.part.js": "3b1ed508aed7145ad409d98c2f4f1f0f",
"main.dart.js_76.part.js": "f15b82b8b2b508b3b6f49b78d438e920",
"main.dart.js_54.part.js": "c38c8288708b7292a9bcd6abdf35adb2",
"main.dart.js_95.part.js": "9f5c4a7da6d2d70c41aaddf3d32ec1dd",
"main.dart.js_63.part.js": "24f8facef7f28d20989748450387ba9f",
"main.dart.js": "cba8a11b16a1610db214c22edcfa8b71",
"main.dart.js_19.part.js": "f6f7d01be4640564395dcc6bd0ad4dac",
"main.dart.js_84.part.js": "5800eafcc58dd77ce28c3c9c1d4a7c21",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_50.part.js": "8f747a8ed295d2e3bb60bed2944fec7c",
"main.dart.js_1.part.js": "6429162dcc8333a999fc6332d637f09e",
"main.dart.js_42.part.js": "e89d73dee729d80b41635177cd3bde75",
"main.dart.js_25.part.js": "caf2fe13fa7c050e81dcfd893fd3d807",
"main.dart.js_56.part.js": "37a59d926c9cfee0d8770f0561d65c07",
"main.dart.js_15.part.js": "64599dc1fac78253b40daa8b0f649a17",
"main.dart.js_33.part.js": "8569c90c6caf1700393f687bf244185c",
"main.dart.js_89.part.js": "f6923d34eb9db566124ee3879e8ff65f",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_48.part.js": "d556c3364c5b236a29ccb766cb5356a9",
"main.dart.js_61.part.js": "01e03048b07bb1b2e4c2ff0f75c5d03f",
"main.dart.js_26.part.js": "20df6257ff98853467cf3046164d14e0",
"main.dart.js_22.part.js": "dc8638cff069cb257a5304225a87ae1f",
"main.dart.js_13.part.js": "36d14b3df2e4c2d32054ab31652b9151",
"main.dart.js_92.part.js": "06780a8575ed165dfff63d97a7bb3497",
"main.dart.js_51.part.js": "3129f137b24c9c940b6beed5bd7e4ee2",
"main.dart.js_78.part.js": "efcbb9b6615da04eeb010671ab824f7a",
"main.dart.js_10.part.js": "f41c45ce1cecfafed86da8b08f37ce64",
"main.dart.js_90.part.js": "dbf7fc865bcd1d4467a0125a9038d586",
"main.dart.js_86.part.js": "50a00c0ce7808f99ab19c8f46bdbe099",
"main.dart.js_72.part.js": "e83c8758d8490d6cb36fb44326b648c1",
"main.dart.js_11.part.js": "4d1c9c19ddb2fd773b34937f4a44fa39",
"main.dart.js_73.part.js": "06c6471b88e90ae83da58c310861fd09",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"main.dart.js_97.part.js": "a8b9168ee9b70320f07860733442c174",
"main.dart.js_67.part.js": "df2ffab58bbf39e87d652217c918fbd7",
"main.dart.js_3.part.js": "c2345a41788fa72f561ef426ffb47c7b",
"main.dart.js_4.part.js": "5176fcbf8f9a5ed291b74e0b83a9e687",
"main.dart.js_66.part.js": "b745aafd58fb33c8e77e47ab7035b69c",
"main.dart.js_96.part.js": "4e020be567230315bdfbf83aca0a5c2d",
"main.dart.js_74.part.js": "74069b1bc5893b23b89f763ed5d05ae9",
"assets/FontManifest.json": "53875f0262dd9428ccea9618c4a0716d",
"assets/NOTICES": "0f3b208fc0423b507134ab1533564284",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/image/user/header_default.jpg": "b9f53f41cc6a520563ce6ae72b2c21a9",
"assets/assets/image/system/logo.png": "cbb8e407a4049aa0386d0c03d89cc823",
"assets/assets/image/system/error.png": "501f691a5a68573d20450b43e4d408bd",
"assets/assets/image/novel/cover_default.jpg": "50f974b716adc676b423b08bd691a051",
"assets/assets/image/smiley/15.png": "a740b88cc01570f6f3847d022acbdf6d",
"assets/assets/image/smiley/3.png": "3c989aa3d4c6181ab9038064715e3687",
"assets/assets/image/smiley/21.png": "623d7dfaf0ea7fefc91a1fd8fed423a9",
"assets/assets/image/smiley/22.png": "3e302ef38882bdafe40a39491fdec7fd",
"assets/assets/image/smiley/17.png": "108d283e9702aa878f6f100ef6a187e3",
"assets/assets/image/smiley/27.png": "ff051318e791e25283eb64241db911e6",
"assets/assets/image/smiley/26.png": "b5c25b2a9f879efc45197b2460ac3ed6",
"assets/assets/image/smiley/19.png": "1c07a6e8e0998ccb1110ddc60a32bdd1",
"assets/assets/image/smiley/12.png": "c59383065afdaa3876c84cc92ef38678",
"assets/assets/image/smiley/8.png": "d8e89128df357a6bf571bdff1fa61ca0",
"assets/assets/image/smiley/13.png": "6b79d7288dfdf5ec98b21593e2918c36",
"assets/assets/image/smiley/35.png": "bdbca794070c2e19a03049232bc7b499",
"assets/assets/image/smiley/48.png": "d1c46e7d5f885f23116fffb3893027c5",
"assets/assets/image/smiley/7.png": "a00e90943a7e83d95c6a656dec9fa3c8",
"assets/assets/image/smiley/34.png": "14d8b10afe7841e33190682f6cf29c58",
"assets/assets/image/smiley/47.png": "df29631827c00f343360de2a9b9044f5",
"assets/assets/image/smiley/1.png": "55f3faf3709f3e3de286468abf480d0d",
"assets/assets/image/smiley/14.png": "c1dbde12477d161bd757fc5c9a7308f1",
"assets/assets/image/smiley/2.png": "439e32d773b5847a707a244cebeec520",
"assets/assets/image/smiley/9.png": "982cc9814f65206b2f178b2f60fcf05d",
"assets/assets/image/smiley/11.png": "d0bd514ba44db63e28d49cc1245e4abc",
"assets/assets/image/smiley/16.png": "cd9486865812ccf5da1daeef59522e1b",
"assets/assets/image/smiley/10.png": "9a8e1ac8c00fbbb1f07691911070ba9e",
"assets/assets/image/smiley/30.png": "8435ccf09fbc022fdeaf873af23a1933",
"assets/assets/image/smiley/23.png": "5f3f998fadf656d2a9c1828783fa1b4e",
"assets/assets/image/smiley/36.png": "78c44cbc9a24bb49d0da295a427966a0",
"assets/assets/image/smiley/46.png": "4bc6c4827d62ad63e921a3cdc30f28b1",
"assets/assets/image/smiley/24.png": "8205dfbf407c2ddf7339eadc6d181186",
"assets/assets/image/smiley/5.png": "919639b1527712ab8c5a7f7d66ecd8b4",
"assets/assets/image/smiley/31.png": "67f173516616a67311d6b3cb261e1458",
"assets/assets/image/smiley/28.png": "861e1aa1a36f617efea7e11ef00aecdd",
"assets/assets/image/smiley/50.png": "489c93866ea3a934eee317bfcbc7bcd0",
"assets/assets/image/smiley/29.png": "7bb30c5f4ac2283d8b61f4d52026793b",
"assets/assets/image/smiley/33.png": "ea7316cb4d4b2a90b882ad21fe90cdae",
"assets/assets/image/smiley/18.png": "91cecf3e4e98cd3d3a766bcdeae2e37b",
"assets/assets/image/smiley/43.png": "4dd0303c301698bea5f022d14e616598",
"assets/assets/image/smiley/4.png": "17ebd5203e92a1fe9b5ca45f38f688e2",
"assets/assets/image/smiley/49.png": "871e18a561743981abdf40f4fcbf4524",
"assets/assets/image/smiley/25.png": "ecc25f593b968fab2b1a056b98c48836",
"assets/assets/image/smiley/32.png": "4f8a1bdec1a4576540b6af1b21be7c22",
"assets/assets/image/smiley/6.png": "3126f5b6298c6cfc6980e69915c58448",
"assets/AssetManifest.json": "311dfece901ebf51e899a28d57221e3e",
"main.dart.js_55.part.js": "8d774409004b4bf4e5a4bcfd02d85f54",
"main.dart.js_62.part.js": "defd698a76254cb0eccbbf984794f353",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"main.dart.js_2.part.js": "c9a30f0d15866c754a7227455e6e97e5",
"main.dart.js_93.part.js": "499fffeacbbbe9b0f28e66e1ec9e3c17",
"main.dart.js_88.part.js": "4ff3820b4755337a5b986870970dc0f7",
"main.dart.js_44.part.js": "95b535ab09d770678c62b23c45ed9526",
"main.dart.js_46.part.js": "3a8a91369bd0c1af9a44f9f0804dd997",
"main.dart.js_71.part.js": "9c4c53c3aadb033261313eb77c19d791",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_47.part.js": "86c651b9dd1b6757c568adb4d6267196",
"main.dart.js_100.part.js": "6b9b1a6db2ed7b6e43891afee8ce0519",
"main.dart.js_99.part.js": "d2ef94b0c717262cb1fdd93291e5a6d8",
"main.dart.js_35.part.js": "ccc76c0aa3eb58f5cec4470c371d2b8b",
"main.dart.js_41.part.js": "743ee6099b0df60311d6b50436beda90",
"main.dart.js_81.part.js": "6d35f2867970e5b0d3b6584580d33c93",
"main.dart.js_39.part.js": "068e9ab54c2eb4137ca3f3d8d8a598ed"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
