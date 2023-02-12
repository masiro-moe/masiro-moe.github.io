'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_64.part.js": "5eb4b3709c9c831f87b0466e6c552e47",
"main.dart.js_17.part.js": "97418f86aa719e434293c15c18e292f1",
"main.dart.js_58.part.js": "9c064893d2064a2e544d04627fe48f39",
"main.dart.js_16.part.js": "8a4fd21fabb02bf0435be7fbbd228825",
"main.dart.js_85.part.js": "b78d88e0349938b655241844bae4abd1",
"main.dart.js_82.part.js": "f91c2b5bbf76437eb1f73b677c423b5a",
"main.dart.js_18.part.js": "4b8ed688374fe62b73f560529fcc1f41",
"main.dart.js_31.part.js": "e475a416da7a01a3497477ef5997a3f2",
"main.dart.js_14.part.js": "77f0de453ac02dc2ba9270976f0e1a2e",
"main.dart.js_79.part.js": "7352c22a15e68b8abefc9600fc042779",
"main.dart.js_37.part.js": "cf8e9678771ac7a60e02616d5143ea51",
"main.dart.js_8.part.js": "1f438f5584ac5f1367b05ddddb713506",
"main.dart.js_83.part.js": "688941f45c22acc195e3a7e46f2333f0",
"main.dart.js_12.part.js": "a694231bc13bcaf0fac05393a4c056dc",
"main.dart.js_21.part.js": "52e73b3c35bf03375dae020a06ab621c",
"main.dart.js_52.part.js": "1ee7f257f80fd2bb8e845f65f6cde816",
"main.dart.js_34.part.js": "18eb863b9851546299fe422c1a2fd8dd",
"main.dart.js_59.part.js": "80d0c52786366b6e9777cf101470e83b",
"main.dart.js_65.part.js": "67ad15ade610b571b0188c90add6a42a",
"main.dart.js_87.part.js": "c8c5e6b9eb698388c5944216ff54c169",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"main.dart.js_28.part.js": "c8d28d90d8819abc549405eeb9ce3e8b",
"main.dart.js_29.part.js": "7405e9a1ba290ea6b1f0da85cc27c189",
"main.dart.js_45.part.js": "a98ad3aee4ea17d7173d89e78d900e7c",
"main.dart.js_20.part.js": "54e03d1001296d72aa0a96a93fffd7b9",
"main.dart.js_43.part.js": "4d939f71cf28a1b15e0e79c0c8f508e5",
"main.dart.js_70.part.js": "b5ff1db8c9aa292ad5af9941db2cf4e5",
"main.dart.js_9.part.js": "a60a904f25adcec8d9a698f603da00d1",
"main.dart.js_6.part.js": "465f51aeb951a5c9e8876a4aa16a71b9",
"main.dart.js_77.part.js": "77b5e632c49effad1137b9e242d80b87",
"main.dart.js_53.part.js": "d0df607bc35d84f65d0c451553727801",
"main.dart.js_80.part.js": "d200a3888d85538dc0e8bbef18a655cb",
"main.dart.js_57.part.js": "a7226fa28407b3717dd786c8fd8f4ced",
"main.dart.js_7.part.js": "451902fcc2120dadd7ede8f533cdaa6f",
"main.dart.js_23.part.js": "6db281d593a7033dd38587dbaddc57e0",
"index.html": "af8495a71adce88948d7bb62367f57d9",
"/": "af8495a71adce88948d7bb62367f57d9",
"main.dart.js_38.part.js": "32d22db0f7d67748ef662736545d4300",
"main.dart.js_40.part.js": "409ca33e5c6221f2974fdd4fb7b3a5ab",
"main.dart.js_76.part.js": "e158ba8d51e4d9470fb8173e44c94c82",
"main.dart.js_54.part.js": "98a92df0e07a86b8ababce92eb062456",
"main.dart.js_63.part.js": "1374f2612a31d8a55da29c0a09dcedd3",
"main.dart.js": "27271319b0b690237dfa1ab95fdf8a8e",
"main.dart.js_19.part.js": "4be4183000d3d555035ecb3e1abe0cdb",
"main.dart.js_84.part.js": "d291a81eaa8dc97033a7cf7d63af2a8e",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_50.part.js": "dc88de2cf16cb17d9b58d27f35f4ffca",
"main.dart.js_1.part.js": "df0d3b74195221b3b991534418554b7d",
"main.dart.js_42.part.js": "08582c2e9feaa207ed3a4a0716cb6dfa",
"main.dart.js_49.part.js": "3fc2610af598e8b70bec877bad22fcb0",
"main.dart.js_56.part.js": "cb2edb6342cc228c448fc59976027575",
"main.dart.js_15.part.js": "f58b08d8114f80bbbca353a0b29f0b65",
"main.dart.js_33.part.js": "20549f716e672e4ec3175bab6e709da8",
"main.dart.js_89.part.js": "caeeead84886d1c304e36d47191b2e2d",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_68.part.js": "0199a1281635c72612f9d1c133e499d6",
"main.dart.js_48.part.js": "e9ca589e2b92e9ec7a49375f3cf8df58",
"main.dart.js_61.part.js": "b6dab3b429e5dcea2bc16c2d0e9b8e78",
"main.dart.js_26.part.js": "d252ce119e8940da24bf2ffeb682cfb9",
"main.dart.js_24.part.js": "4fc3eba4d731ced918039362e394cb79",
"main.dart.js_22.part.js": "10f8fdd52b594e0f4d0e9c4f0273783c",
"main.dart.js_13.part.js": "5fdda95921fb1167217603b8dd8037f3",
"main.dart.js_69.part.js": "1980fa511e95efae17dc4d71096d5de0",
"main.dart.js_51.part.js": "65f82acca38cf2f06414a87c42355536",
"main.dart.js_78.part.js": "f92fdebc4f4a7998ca6a7e82e31b821d",
"main.dart.js_10.part.js": "f08ee6ef3c8a12006177964a4dfd5fb2",
"main.dart.js_90.part.js": "41163f3cecd2014a4ed4afb137d89e87",
"main.dart.js_86.part.js": "5c00abb3caf3c810e4afb9f63e7d3446",
"main.dart.js_72.part.js": "87924f42cd026b9e980468e66d207dfd",
"main.dart.js_11.part.js": "18cefcb74ba69d29e6bb82ce20a73097",
"main.dart.js_73.part.js": "9c02520db5a0ce2465e43a75262be3b1",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"main.dart.js_3.part.js": "bcf8a5e8f8f0cab7907808f6afde2180",
"main.dart.js_4.part.js": "cdfad3f0c7bf7ec1d25aa01d04e79f3b",
"main.dart.js_66.part.js": "c428977f711fd542b053b7687781b82e",
"main.dart.js_74.part.js": "848da100a5235cc41e1b01df8feea438",
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
"main.dart.js_55.part.js": "7f3ca1e7187c343c48968176e2495e94",
"main.dart.js_62.part.js": "138aafa3ff5cc1a6f440166ded871dc3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"main.dart.js_2.part.js": "0a3b2c7374be602867a9c4e5605aaada",
"main.dart.js_88.part.js": "992bb20617f3423b4d6ca09c57b6920c",
"main.dart.js_44.part.js": "8c648ddd4dfe9ed5250930a545603768",
"main.dart.js_46.part.js": "3350e5b36c70dc9adfef3ad3f8f8a525",
"main.dart.js_71.part.js": "0b1f005e8ba43510ea3d2387332f1103",
"main.dart.js_60.part.js": "c84af2dd523af83040b0642f91bef7a4",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_47.part.js": "1d25f9550d6dd5ee5778d8768976f3b2",
"main.dart.js_35.part.js": "2f3fae562b5081134eb01c9c219b1c92",
"main.dart.js_41.part.js": "0184b4cb4a8c9f6e482aee078b362b1f",
"main.dart.js_81.part.js": "4322e89fda8e9736527e79389aa48c3a",
"main.dart.js_75.part.js": "11f9ebbc3ef509decb1960a8b93ceea6",
"main.dart.js_39.part.js": "ba294fb0572c5c16830645b4c560a936"
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
