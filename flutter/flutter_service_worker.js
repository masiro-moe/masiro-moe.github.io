'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_81.part.js": "0b060e589e3a0c19bd48611613d5707f",
"main.dart.js_14.part.js": "06b3cfb55657733a27ad178bcc8ebee2",
"main.dart.js_76.part.js": "e4823183e423ca8ddc2d1056944f4539",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"main.dart.js_64.part.js": "4cac2f56ec7ae186e924eaa704924e2e",
"main.dart.js_29.part.js": "090559f0e9df12000bdff3079e2b5f71",
"main.dart.js_4.part.js": "d959dd83ab07e5d9e99e7229b64b20ee",
"main.dart.js_56.part.js": "db031a1bbafcfd821fa73589a1da67dd",
"main.dart.js_79.part.js": "91038e7d260ed03fbab698154bb0c286",
"main.dart.js_74.part.js": "8ce07eeeb12005505fb9dde5b5cd9342",
"main.dart.js_47.part.js": "8e5ffde9140341778df546cf01d92851",
"assets/NOTICES": "3563c65b273afd6dcab85c392df67a1e",
"assets/assets/image/system/logo.png": "cbb8e407a4049aa0386d0c03d89cc823",
"assets/assets/image/system/error.png": "501f691a5a68573d20450b43e4d408bd",
"assets/assets/image/smiley/25.png": "ecc25f593b968fab2b1a056b98c48836",
"assets/assets/image/smiley/43.png": "4dd0303c301698bea5f022d14e616598",
"assets/assets/image/smiley/4.png": "17ebd5203e92a1fe9b5ca45f38f688e2",
"assets/assets/image/smiley/14.png": "c1dbde12477d161bd757fc5c9a7308f1",
"assets/assets/image/smiley/27.png": "ff051318e791e25283eb64241db911e6",
"assets/assets/image/smiley/50.png": "489c93866ea3a934eee317bfcbc7bcd0",
"assets/assets/image/smiley/12.png": "c59383065afdaa3876c84cc92ef38678",
"assets/assets/image/smiley/29.png": "7bb30c5f4ac2283d8b61f4d52026793b",
"assets/assets/image/smiley/36.png": "78c44cbc9a24bb49d0da295a427966a0",
"assets/assets/image/smiley/6.png": "3126f5b6298c6cfc6980e69915c58448",
"assets/assets/image/smiley/21.png": "623d7dfaf0ea7fefc91a1fd8fed423a9",
"assets/assets/image/smiley/48.png": "d1c46e7d5f885f23116fffb3893027c5",
"assets/assets/image/smiley/15.png": "a740b88cc01570f6f3847d022acbdf6d",
"assets/assets/image/smiley/3.png": "3c989aa3d4c6181ab9038064715e3687",
"assets/assets/image/smiley/13.png": "6b79d7288dfdf5ec98b21593e2918c36",
"assets/assets/image/smiley/5.png": "919639b1527712ab8c5a7f7d66ecd8b4",
"assets/assets/image/smiley/46.png": "4bc6c4827d62ad63e921a3cdc30f28b1",
"assets/assets/image/smiley/24.png": "8205dfbf407c2ddf7339eadc6d181186",
"assets/assets/image/smiley/8.png": "d8e89128df357a6bf571bdff1fa61ca0",
"assets/assets/image/smiley/17.png": "108d283e9702aa878f6f100ef6a187e3",
"assets/assets/image/smiley/35.png": "bdbca794070c2e19a03049232bc7b499",
"assets/assets/image/smiley/11.png": "d0bd514ba44db63e28d49cc1245e4abc",
"assets/assets/image/smiley/26.png": "b5c25b2a9f879efc45197b2460ac3ed6",
"assets/assets/image/smiley/32.png": "4f8a1bdec1a4576540b6af1b21be7c22",
"assets/assets/image/smiley/18.png": "91cecf3e4e98cd3d3a766bcdeae2e37b",
"assets/assets/image/smiley/23.png": "5f3f998fadf656d2a9c1828783fa1b4e",
"assets/assets/image/smiley/1.png": "55f3faf3709f3e3de286468abf480d0d",
"assets/assets/image/smiley/22.png": "3e302ef38882bdafe40a39491fdec7fd",
"assets/assets/image/smiley/16.png": "cd9486865812ccf5da1daeef59522e1b",
"assets/assets/image/smiley/2.png": "439e32d773b5847a707a244cebeec520",
"assets/assets/image/smiley/34.png": "14d8b10afe7841e33190682f6cf29c58",
"assets/assets/image/smiley/28.png": "861e1aa1a36f617efea7e11ef00aecdd",
"assets/assets/image/smiley/33.png": "ea7316cb4d4b2a90b882ad21fe90cdae",
"assets/assets/image/smiley/31.png": "67f173516616a67311d6b3cb261e1458",
"assets/assets/image/smiley/7.png": "a00e90943a7e83d95c6a656dec9fa3c8",
"assets/assets/image/smiley/19.png": "1c07a6e8e0998ccb1110ddc60a32bdd1",
"assets/assets/image/smiley/30.png": "8435ccf09fbc022fdeaf873af23a1933",
"assets/assets/image/smiley/49.png": "871e18a561743981abdf40f4fcbf4524",
"assets/assets/image/smiley/10.png": "9a8e1ac8c00fbbb1f07691911070ba9e",
"assets/assets/image/smiley/9.png": "982cc9814f65206b2f178b2f60fcf05d",
"assets/assets/image/smiley/47.png": "df29631827c00f343360de2a9b9044f5",
"assets/assets/image/novel/cover_default.jpg": "50f974b716adc676b423b08bd691a051",
"assets/assets/image/user/header_default.jpg": "b9f53f41cc6a520563ce6ae72b2c21a9",
"assets/FontManifest.json": "53875f0262dd9428ccea9618c4a0716d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/AssetManifest.json": "311dfece901ebf51e899a28d57221e3e",
"main.dart.js_53.part.js": "b50312a837d5daa9f6059e304d417b9b",
"main.dart.js_90.part.js": "6171a36005676323f15e8a6ff8d59a27",
"main.dart.js": "04f84d18502cde5909abcaf17346fa0c",
"main.dart.js_68.part.js": "964dc47f925922cf29732e05c7bc9b70",
"main.dart.js_41.part.js": "14a3294e6997627ca087e458a59ee6fb",
"main.dart.js_17.part.js": "3537dfab411f453c47e4893a4301c305",
"main.dart.js_67.part.js": "3679544e4361f48bd58c00180eba61a1",
"main.dart.js_65.part.js": "841c0e9dd635ad141bcfcbdc84b0c824",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_88.part.js": "538d6f3b81a4299e49dada9dd7c69662",
"main.dart.js_13.part.js": "9d4c899396eeb14b9ecc1f4b8a921cc0",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js_48.part.js": "7313b47a8d15fa378d8a75bf27fd9bc7",
"main.dart.js_66.part.js": "c98459c63e322d964b1fa39ac3e8a023",
"main.dart.js_77.part.js": "70b326c16c0aef8cd811fb72608c1a72",
"main.dart.js_62.part.js": "4094f6c1333f053cbbdb6b1b8728b865",
"main.dart.js_72.part.js": "92f6cd1d870bf5f212eca7773f072a12",
"main.dart.js_15.part.js": "89095c334455402902d8c16f497588da",
"main.dart.js_16.part.js": "43b9343e80504ecf4cd86daa56aaa89f",
"main.dart.js_1.part.js": "745c5c492ce1c98676307b9afb732177",
"main.dart.js_57.part.js": "3144dc11e7d26615ac0535add59497cc",
"main.dart.js_36.part.js": "9936ce7047f15d88edfbf5ffb48f6d78",
"main.dart.js_7.part.js": "e142944fc3903784379d7184287743f3",
"main.dart.js_91.part.js": "30c87cc58435e0658653cced622ad4bb",
"main.dart.js_50.part.js": "2200340604f1aee1133fb56cba448811",
"main.dart.js_73.part.js": "61da6098be8fa0c7a063b186d32500fb",
"main.dart.js_38.part.js": "5a48d62e8fb75b6c3aeb57edc4a11d0a",
"main.dart.js_46.part.js": "86fb6323cc2e92c31626f03881125fb8",
"main.dart.js_78.part.js": "2d80646bbbb7476c0ccba91523fcd4ae",
"main.dart.js_31.part.js": "5a0db569eb5d8ae041f1198df025ada9",
"main.dart.js_89.part.js": "fef86d97595fe92abeea241b8ac9c76b",
"main.dart.js_55.part.js": "6e3750d3a1ef9727576c9ffcfa913355",
"main.dart.js_58.part.js": "87efc2344ce0c8bbb011806599d90fe1",
"main.dart.js_35.part.js": "c06b10f97438513419ee372626dd0ec2",
"main.dart.js_63.part.js": "856cb0f03faebfa2a87d584e082f0a23",
"main.dart.js_22.part.js": "c17ec0e8f861cc6f8591e57e8196975b",
"main.dart.js_20.part.js": "6370000f41f7cf4622966f106319b059",
"main.dart.js_85.part.js": "26310c6c72b471590d1d4568daa30045",
"main.dart.js_37.part.js": "ea2ba6e855d67be89e14e0ded426c9c8",
"main.dart.js_12.part.js": "717f32ec317a9d9dff43b5c5ec625d18",
"main.dart.js_51.part.js": "614deb34e5fef1d9d8c6c79aab932055",
"main.dart.js_43.part.js": "6635db1361f81753f585e2abdb56a178",
"main.dart.js_80.part.js": "1fee70a3d100a675eb207a06e214bc5c",
"main.dart.js_9.part.js": "26cc63ba9a558b1807916ebbf5537eff",
"main.dart.js_84.part.js": "81e37dc64b20ce7d9a6b6cceae625527",
"main.dart.js_40.part.js": "d426ee98d6094263eec5ecf10fb14680",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_34.part.js": "d16dda51a4253a20b6bb668d077b3a82",
"main.dart.js_2.part.js": "25b538fb876af35d537cdc59b4f58075",
"main.dart.js_69.part.js": "1c130894e7fbbd0ce21d8d916e4709ba",
"main.dart.js_42.part.js": "b4776b932157ce04dc3388a309430182",
"main.dart.js_54.part.js": "553800e293e919c479294324b7ce2dd1",
"main.dart.js_33.part.js": "61820c51cc2b5d0ed111c294b6ede2de",
"main.dart.js_24.part.js": "054ddfb6a1b3730c92336a1178a64c7c",
"main.dart.js_3.part.js": "25169588259e2a0f4b5b0915ec4a8ba7",
"main.dart.js_61.part.js": "fa40fdd3543e38e24180999f9019d81a",
"main.dart.js_21.part.js": "7b5edb8807e4bbc28923bc191ef24b37",
"main.dart.js_28.part.js": "daca69a93549b6f30b46b1657761c298",
"index.html": "11d9ada9cd1225b97b7122b8888d0eb9",
"/": "11d9ada9cd1225b97b7122b8888d0eb9",
"main.dart.js_18.part.js": "70c299f17b1dd5cfc6b9ddedb7a991d4",
"main.dart.js_26.part.js": "9c5ed75c3403c26012fd6631c8166eb2",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"main.dart.js_8.part.js": "923d345d03bcf87fdc7c3a3d121db8b1",
"main.dart.js_19.part.js": "6a845eec1d84c0ac10f16e223fe75dda",
"main.dart.js_71.part.js": "1d4351df5227b8ce9cba7b0f1f870ff6",
"main.dart.js_10.part.js": "13aa1a197fa6a86640078f50400ab1c1",
"main.dart.js_23.part.js": "604d0a79c4fa2d0d620479521cb62289",
"main.dart.js_83.part.js": "fe7cfd4c4f0e0ad1575b5843b6a39464",
"main.dart.js_45.part.js": "73974746533d021b7667461b98da37a4",
"main.dart.js_6.part.js": "4ff78e8166be8f375ca0ccb5338c21a4",
"main.dart.js_44.part.js": "08125410f241d66197c72ea77945343f",
"main.dart.js_60.part.js": "20b8f6ac86e96f264334655b8e2685af",
"main.dart.js_92.part.js": "f2d1273748852ba5ce1e98c035cd362b",
"main.dart.js_49.part.js": "32b14862da9d3a6107fdd8639984dd58",
"main.dart.js_75.part.js": "44bb986fb387dbfef082be64a55f7275",
"main.dart.js_86.part.js": "f84f4529074c1bf475ef6422d0f2ccff",
"main.dart.js_11.part.js": "b9c59b9de89272258682e005d25d0755",
"main.dart.js_39.part.js": "7615a4fcaa1de095b9b18ef14629eeba",
"main.dart.js_59.part.js": "1b93a78e25ba1712fbf765d39fe8c02c",
"main.dart.js_87.part.js": "4c1ced529c01b22af023ecede4d38c70",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_52.part.js": "ca1271242086fdaca33a516ae5232a0f",
"main.dart.js_82.part.js": "fb6c04b76ea234a8bc78462d89f5a11a"
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
