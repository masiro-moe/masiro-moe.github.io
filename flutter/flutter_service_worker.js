'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_17.part.js": "2247dfcb5d1e0bb96a29798dba1f8e83",
"main.dart.js_58.part.js": "a8cfb289032ed8c0ed46eeaab202508e",
"main.dart.js_110.part.js": "6f8a2ea6d09040418789c7d1aa85809e",
"main.dart.js_109.part.js": "d3f7699206fd904b1ad9cd9e315623c0",
"main.dart.js_94.part.js": "38512ad97bf242e001bf6cc4ed75b2ba",
"main.dart.js_16.part.js": "829b06dc8d927e75acfcdfdd286371b7",
"main.dart.js_85.part.js": "19298ca116f18a50c6fe9d39781ccea8",
"main.dart.js_18.part.js": "62c04dc35cc07ee28ca5d792cf2e11c4",
"main.dart.js_31.part.js": "3c5ee97883ea8a3ff0917fec681e9d09",
"main.dart.js_14.part.js": "23503c9ed58b53fae8a9f4adf533e345",
"main.dart.js_105.part.js": "6c5da2f7528a289d14083eb93c115d57",
"main.dart.js_120.part.js": "5ab2c07bdfe41305b11d92f2be67bc75",
"main.dart.js_79.part.js": "9d7917e457cccafdb6599351bd6a786e",
"main.dart.js_37.part.js": "d73f9fee2d7c189c65256a610f694354",
"main.dart.js_8.part.js": "422d3427d0100f2b85bac5b134e4dd1f",
"main.dart.js_102.part.js": "ea3bfc6ab7969e1ec83610c4ddcd20b8",
"main.dart.js_83.part.js": "41208eff213d2393cafb01386b91d162",
"main.dart.js_113.part.js": "6a85e0c3e801c76055607c4b1dda4387",
"main.dart.js_36.part.js": "3e367b4a456f383b98e3c432f0a5ce61",
"main.dart.js_114.part.js": "45aecd16b70623b9b2e1962880a22a45",
"main.dart.js_12.part.js": "26bcac20b0b4dc47a149307b75b76039",
"main.dart.js_21.part.js": "9d9cf01a1a50c413a80b95f71191490a",
"main.dart.js_52.part.js": "58078230450e03282a0135f636d93deb",
"main.dart.js_108.part.js": "d67affefdd1c3e8dc095ba92cba87f70",
"main.dart.js_59.part.js": "5a215fab4224bf4cedc4bc08c82552b0",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"main.dart.js_28.part.js": "fec19873bd969485ce142727d4697d51",
"main.dart.js_29.part.js": "ba3a3a71fa6c98c861ceac672f564d84",
"main.dart.js_91.part.js": "6e493943fbc38dec780d9a00a88efaea",
"main.dart.js_45.part.js": "600e36959148aeb649e56c2a6979abe4",
"main.dart.js_20.part.js": "35a369b86e67be7367305cf2eb3afc2f",
"main.dart.js_43.part.js": "c58155d8736d2345d06e1769d5c3d7f8",
"main.dart.js_70.part.js": "c4ef2167fb4b12c3c59265c0ef283407",
"main.dart.js_9.part.js": "e3a88e26db40f65f8ca90902bb0ead41",
"main.dart.js_6.part.js": "6d61cf9c9ad68d996297881d4d2bdc2e",
"main.dart.js_77.part.js": "dbd2093546d6b10ba621c6f485146b05",
"main.dart.js_53.part.js": "8bfed83d75549c7f97daeaccaca3eb3c",
"main.dart.js_80.part.js": "0cac7ddacddd11cc97d1ffe24036a0f4",
"main.dart.js_57.part.js": "7a07770eac784aa9edee476efd7aab43",
"main.dart.js_7.part.js": "6f43220a1e2d77a5e8cb2c0239f031a9",
"main.dart.js_23.part.js": "e54e9b98ded92badc9cca70d24bcddc3",
"index.html": "795276fcb83febe7d0cf0c8bb6372646",
"/": "795276fcb83febe7d0cf0c8bb6372646",
"main.dart.js_40.part.js": "1ed2aaddabd20e18f274e21bab37100b",
"main.dart.js_111.part.js": "a5f028918547dfaeb0dedb0b7031208e",
"main.dart.js_76.part.js": "d32a10e89b89e6d559bedc28b01db1f6",
"main.dart.js_54.part.js": "097fc594078538b35a81fc4b22b90717",
"main.dart.js_95.part.js": "614b877f424ef80d47e738df1520baca",
"main.dart.js_63.part.js": "9356c19d8dab2f77b5b36f248e928a72",
"main.dart.js": "423d5f05ecc35fe6bc848efbaf2288cf",
"main.dart.js_19.part.js": "78a9434bbcd228f0893f1c37727464cd",
"main.dart.js_84.part.js": "1935c8ba8872be49c149968a804e14f8",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_50.part.js": "6d9110079740914c4ea1902a7a4da34d",
"main.dart.js_1.part.js": "1f5fb1f7c84032a2b92b50123c590525",
"main.dart.js_42.part.js": "b65d8270c15dbf1e42c44ae427322b58",
"main.dart.js_49.part.js": "7d121b60492c8d867caeb857b7a4a86c",
"main.dart.js_116.part.js": "3ee6c54086dce09bb15ba955f472cc19",
"main.dart.js_107.part.js": "56247511b264edb7fb8a1f41fe00cf83",
"main.dart.js_56.part.js": "04b2c3f5efbab87554ef3c21b32a42c3",
"main.dart.js_15.part.js": "b8daf5e3d153ebf19576d8455179c1c0",
"main.dart.js_33.part.js": "3a475aae83164ffb033febed09750ee3",
"main.dart.js_89.part.js": "a08ee746033cfee4f655767a5be2bbaa",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_68.part.js": "0f8d2294230887abd81d7f2de8be08a5",
"main.dart.js_48.part.js": "19d510ad4d11e246a1792c3de9b53436",
"main.dart.js_61.part.js": "69f3fcf1d44fc7d3abc58d3da509a684",
"main.dart.js_26.part.js": "ed51a1258d2db51900b1f34b73edb9af",
"main.dart.js_24.part.js": "77a45b3f6ddca786e15919a3b337d3c1",
"main.dart.js_22.part.js": "dc2f86e99ae1d289ace29cf615530110",
"main.dart.js_69.part.js": "d98ea82be1f1cf8e7cd276e743cfc208",
"main.dart.js_92.part.js": "02aa98995d147ee6c96f0216b35d278f",
"main.dart.js_51.part.js": "879ca0336d92d0aa066d50f093857a84",
"main.dart.js_115.part.js": "da750a98bfaaac496134904832412de9",
"main.dart.js_78.part.js": "6e86eeb8c166ce2173f117fa1d5a6b88",
"main.dart.js_10.part.js": "1860c5f4b1d7383d212389b6a83210f5",
"main.dart.js_86.part.js": "9c831ec80f7d9311cc3b61569be27e63",
"main.dart.js_72.part.js": "2755cfa11cdd49d1ed9f27825644ae42",
"main.dart.js_11.part.js": "28b18e1b19fb0d3bccefaa49bfbf037f",
"main.dart.js_73.part.js": "0600103e7a571ba711ac1e2df776cc20",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"main.dart.js_97.part.js": "cc5dcff1c4d551e7267f13ba64ce9225",
"main.dart.js_106.part.js": "115e81d0c94d729a7c670679a4c6e481",
"main.dart.js_67.part.js": "2342c1d9d2633ef7d786a1a1c53ce8fe",
"main.dart.js_3.part.js": "b033034b29b2a9823521315d1e3c1df6",
"main.dart.js_119.part.js": "35b33f7e576d0127597aa194a0d7f1f0",
"main.dart.js_4.part.js": "743b1ce369182aaf581a18d31ae7d525",
"main.dart.js_112.part.js": "153d92c4624e89a0c787ca6a55889393",
"main.dart.js_66.part.js": "76f0c8eb76062803fa95c7e7019a7786",
"main.dart.js_96.part.js": "0c2bdac912f2936e4a532b015d8387eb",
"main.dart.js_117.part.js": "414db25db2c35039cf414a2e1661dcf4",
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
"main.dart.js_55.part.js": "ccf949f4cb392afabd6ef5e448bc5ba3",
"main.dart.js_103.part.js": "722b8d8c0432198d1f312525223dac48",
"main.dart.js_62.part.js": "c7346a68da66c48cd81aa7427f6d89f0",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"main.dart.js_2.part.js": "e7e89aed79782ae4cf35ee8e9515cc83",
"main.dart.js_121.part.js": "a909a60a381d37e6ca9b4a963a995d85",
"main.dart.js_88.part.js": "b555b9f4d26c6951283d8beb9a3bc194",
"main.dart.js_44.part.js": "42cbf1a56020e477da2892d11e889ce4",
"main.dart.js_46.part.js": "e1658345b80b90fec0f9816340905f8d",
"main.dart.js_60.part.js": "fb7babb8b401982f6ef81441566f2c24",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_104.part.js": "71d9c17f662a3a86f897215f8713dd60",
"main.dart.js_100.part.js": "6e66f6779c3f28b0f477e6cb5b68e53f",
"main.dart.js_99.part.js": "bb2673e812249a3a832fee8c82458c8b",
"main.dart.js_118.part.js": "fc4179807c32780beef99bf120b6c615",
"main.dart.js_35.part.js": "cf6794804b3309a52cec1fb1964c9214",
"main.dart.js_41.part.js": "408f40724316aa824269a178bf4a3726",
"main.dart.js_75.part.js": "dab91f7ee3b299bbecb6399cb87181af",
"main.dart.js_101.part.js": "3db6d2bcb49b9aefab9a0e205cd0a3a3",
"main.dart.js_39.part.js": "b19bf0b7973f79630da7766da238f830"
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
