'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_78.part.js": "fa56b720e56067d0abc5642aebe17f98",
"main.dart.js_64.part.js": "3554fed37497f942382d81cdf71a6160",
"main.dart.js_38.part.js": "ccb70fb6d476e63ee5a719bc8bd80ed7",
"main.dart.js_23.part.js": "02a76d72871d5605bb0b6e73a6a55b7b",
"main.dart.js_82.part.js": "a597c2c38ec3af3b7e3c37f619e56866",
"main.dart.js_4.part.js": "4acc1e2dbc9817fa87f662a98f7d20f0",
"main.dart.js_20.part.js": "76ac79c8ee9bdc0808ca37a929c312bc",
"main.dart.js_1.part.js": "c214bd5fd5f37c365415c3513ab2d3cd",
"main.dart.js_66.part.js": "13e02842c6cc7e8198b13142231a91dc",
"main.dart.js_6.part.js": "178d42c4ce2ddd178fb2e3054cfec52d",
"main.dart.js_87.part.js": "2c47644b3d234cf80b00756237147b3b",
"main.dart.js_50.part.js": "ece25e3a9f5ea4bdadc53b4181571032",
"main.dart.js_84.part.js": "0222e5b9f9242d19987a44b3f5130715",
"main.dart.js_3.part.js": "de556eaf08b7cf71da969ca3d5cd8956",
"main.dart.js_26.part.js": "9b9f525e3e8988705a539bb0a0001dd4",
"main.dart.js_8.part.js": "cf2f99f0601658329c84b624dfc6934b",
"main.dart.js_55.part.js": "47418a43f39c19b3d08834cb081b9d61",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_31.part.js": "e31f380f1c3062525db7f8860ffc428d",
"main.dart.js_2.part.js": "d11abdbb81dd8ee2ef03060df7dc75a6",
"main.dart.js_18.part.js": "3302c2e9930a5e39db14f308ee2cbc82",
"main.dart.js_56.part.js": "da7656f8325302a4bcada55ec61ca1a4",
"main.dart.js_39.part.js": "b34720c86b926717577d1377d97eb61e",
"main.dart.js_90.part.js": "33c7a098b35f9f39446ccb11910bf7d0",
"main.dart.js_19.part.js": "6a845eec1d84c0ac10f16e223fe75dda",
"main.dart.js_89.part.js": "f13f03f623fab848c071918290bdfbcc",
"main.dart.js_76.part.js": "da8fa22f48065b448f962f48e04518b8",
"main.dart.js_83.part.js": "1c0a21f47c4be93bbd4dd911d3ad1f98",
"main.dart.js_21.part.js": "f199055003935cc5ed8a1a25d010c45f",
"main.dart.js_48.part.js": "9b14538c2c1768d2844793d3fed49a1f",
"main.dart.js_36.part.js": "aa3b0224b98c4db97e2e6f3bc756e464",
"main.dart.js_79.part.js": "60695c3c368e7319cb178d4465373531",
"main.dart.js_49.part.js": "b4486156f0ea9b4a5e73d00cd112a35f",
"main.dart.js_67.part.js": "929e723259a526fd463f26dd86889639",
"main.dart.js_45.part.js": "444c9998cf19466815003c8aaf645324",
"main.dart.js_51.part.js": "6313bd34703e2c23349cd39d653e9c65",
"main.dart.js_9.part.js": "300108de163714c3afc3f9c4d3444012",
"main.dart.js_80.part.js": "5b0678ba38d8a1e4497e3fc7bacc2a1c",
"main.dart.js_52.part.js": "57dc231d1a8926b80f932d9146cc975a",
"main.dart.js_73.part.js": "841757ba94460ca2efa7a08272346a9d",
"main.dart.js_71.part.js": "712ffed54ac00403923130684073713d",
"main.dart.js_70.part.js": "d16aca920252b8a02cd659bc1f2fccb4",
"main.dart.js_74.part.js": "560ba81e5e6dd54aef12d9a4702a03e8",
"main.dart.js_58.part.js": "51e3ce41087c980f0220fb541299b590",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_10.part.js": "d12c6530c6225c66af0b11b9837119c1",
"main.dart.js_24.part.js": "12d072cfae350b9eefc6ef24bbf25de0",
"main.dart.js_61.part.js": "1f0e0d0c95c18f0e7c4a0f371bc8a7e0",
"main.dart.js_57.part.js": "87efc2344ce0c8bbb011806599d90fe1",
"main.dart.js_68.part.js": "e3707cbfbe3679ee55f9675c140e72e6",
"main.dart.js_44.part.js": "90db37ff8b3a371cfc3f048e142c5adc",
"main.dart.js_34.part.js": "48bcec0eff8a84ba6c07fd1ef4233434",
"main.dart.js_16.part.js": "67193a863320d0035422bdb42f3623c3",
"main.dart.js_14.part.js": "06b3cfb55657733a27ad178bcc8ebee2",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_47.part.js": "786da6e39bbbf0e9d718443e4c9a60b3",
"main.dart.js_88.part.js": "75ae64c2f8dba4e166aba6d732ed78d3",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"main.dart.js_15.part.js": "3d60bab757e13f07ad419ce52cf745a7",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"assets/FontManifest.json": "53875f0262dd9428ccea9618c4a0716d",
"assets/assets/image/user/header_default.jpg": "b9f53f41cc6a520563ce6ae72b2c21a9",
"assets/assets/image/novel/cover_default.jpg": "50f974b716adc676b423b08bd691a051",
"assets/assets/image/smiley/2.png": "439e32d773b5847a707a244cebeec520",
"assets/assets/image/smiley/16.png": "cd9486865812ccf5da1daeef59522e1b",
"assets/assets/image/smiley/46.png": "4bc6c4827d62ad63e921a3cdc30f28b1",
"assets/assets/image/smiley/4.png": "17ebd5203e92a1fe9b5ca45f38f688e2",
"assets/assets/image/smiley/33.png": "ea7316cb4d4b2a90b882ad21fe90cdae",
"assets/assets/image/smiley/23.png": "5f3f998fadf656d2a9c1828783fa1b4e",
"assets/assets/image/smiley/50.png": "489c93866ea3a934eee317bfcbc7bcd0",
"assets/assets/image/smiley/21.png": "623d7dfaf0ea7fefc91a1fd8fed423a9",
"assets/assets/image/smiley/14.png": "c1dbde12477d161bd757fc5c9a7308f1",
"assets/assets/image/smiley/28.png": "861e1aa1a36f617efea7e11ef00aecdd",
"assets/assets/image/smiley/24.png": "8205dfbf407c2ddf7339eadc6d181186",
"assets/assets/image/smiley/19.png": "1c07a6e8e0998ccb1110ddc60a32bdd1",
"assets/assets/image/smiley/31.png": "67f173516616a67311d6b3cb261e1458",
"assets/assets/image/smiley/18.png": "91cecf3e4e98cd3d3a766bcdeae2e37b",
"assets/assets/image/smiley/13.png": "6b79d7288dfdf5ec98b21593e2918c36",
"assets/assets/image/smiley/17.png": "108d283e9702aa878f6f100ef6a187e3",
"assets/assets/image/smiley/47.png": "df29631827c00f343360de2a9b9044f5",
"assets/assets/image/smiley/34.png": "14d8b10afe7841e33190682f6cf29c58",
"assets/assets/image/smiley/10.png": "9a8e1ac8c00fbbb1f07691911070ba9e",
"assets/assets/image/smiley/1.png": "55f3faf3709f3e3de286468abf480d0d",
"assets/assets/image/smiley/7.png": "a00e90943a7e83d95c6a656dec9fa3c8",
"assets/assets/image/smiley/9.png": "982cc9814f65206b2f178b2f60fcf05d",
"assets/assets/image/smiley/3.png": "3c989aa3d4c6181ab9038064715e3687",
"assets/assets/image/smiley/32.png": "4f8a1bdec1a4576540b6af1b21be7c22",
"assets/assets/image/smiley/6.png": "3126f5b6298c6cfc6980e69915c58448",
"assets/assets/image/smiley/15.png": "a740b88cc01570f6f3847d022acbdf6d",
"assets/assets/image/smiley/49.png": "871e18a561743981abdf40f4fcbf4524",
"assets/assets/image/smiley/36.png": "78c44cbc9a24bb49d0da295a427966a0",
"assets/assets/image/smiley/8.png": "d8e89128df357a6bf571bdff1fa61ca0",
"assets/assets/image/smiley/11.png": "d0bd514ba44db63e28d49cc1245e4abc",
"assets/assets/image/smiley/35.png": "bdbca794070c2e19a03049232bc7b499",
"assets/assets/image/smiley/25.png": "ecc25f593b968fab2b1a056b98c48836",
"assets/assets/image/smiley/48.png": "d1c46e7d5f885f23116fffb3893027c5",
"assets/assets/image/smiley/30.png": "8435ccf09fbc022fdeaf873af23a1933",
"assets/assets/image/smiley/26.png": "b5c25b2a9f879efc45197b2460ac3ed6",
"assets/assets/image/smiley/22.png": "3e302ef38882bdafe40a39491fdec7fd",
"assets/assets/image/smiley/12.png": "c59383065afdaa3876c84cc92ef38678",
"assets/assets/image/smiley/27.png": "ff051318e791e25283eb64241db911e6",
"assets/assets/image/smiley/29.png": "7bb30c5f4ac2283d8b61f4d52026793b",
"assets/assets/image/smiley/43.png": "4dd0303c301698bea5f022d14e616598",
"assets/assets/image/smiley/5.png": "919639b1527712ab8c5a7f7d66ecd8b4",
"assets/assets/image/system/logo.png": "cbb8e407a4049aa0386d0c03d89cc823",
"assets/assets/image/system/error.png": "501f691a5a68573d20450b43e4d408bd",
"assets/NOTICES": "3563c65b273afd6dcab85c392df67a1e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/MSR-WebFont.woff2": "f9202815dfd15df65d740bd148b9062d",
"assets/fonts/MSR-WebFont.woff": "cad06c87853028876f7cba6ed4fb060a",
"assets/AssetManifest.json": "311dfece901ebf51e899a28d57221e3e",
"index.html": "f989caa14f0ec77638b996678e6ef0d8",
"/": "f989caa14f0ec77638b996678e6ef0d8",
"main.dart.js_7.part.js": "7e5ae839393279786184e24f28ca9c9d",
"main.dart.js_17.part.js": "87f7c56fcb8170f8883c7d0aa64e2202",
"main.dart.js_42.part.js": "c66e361e7f469ec571c3546b3903476b",
"main.dart.js_85.part.js": "0b13f7991f9a7a7371ad33a42c0fed67",
"main.dart.js_11.part.js": "93e07b4dd19b486dedd437d53fa8aa87",
"main.dart.js_75.part.js": "063a1c3cc426242207406cab734d089f",
"main.dart.js_13.part.js": "2d1d2dd3f7f6de2131d3820936280dbb",
"main.dart.js_46.part.js": "e36360f9de82287061dbac59cc1e3760",
"main.dart.js_59.part.js": "65418a345e07cdcfe97f426e2d11d53e",
"main.dart.js_65.part.js": "4b9cc43da050dd9c7996870936e32e4a",
"main.dart.js_29.part.js": "ac63ec6760c7f35126254e61331520cf",
"main.dart.js_81.part.js": "d6a702d8eac7e1e20e31e35f507a37d7",
"main.dart.js_41.part.js": "c20c42ae2160822dec419359eeb27efd",
"main.dart.js_33.part.js": "c8ef5fb4494b8a1d5980fdafbecdb266",
"main.dart.js_43.part.js": "e535c47fda2dce6c476d93f0c34f36a8",
"main.dart.js_22.part.js": "a85d33d6e4bab0e7e8cf580ca107aa1f",
"main.dart.js_86.part.js": "4cf5b9ff888eae1c90c3c03c31944b77",
"main.dart.js_28.part.js": "240660b32220931122c32d207ae14044",
"main.dart.js_77.part.js": "c9bde054804003107af8a67d02749663",
"main.dart.js": "745f45c3fa45af8d3c31d2b2e3b04c8e",
"main.dart.js_37.part.js": "7c16c82ea63fbdc5e8bdabf533d119d7",
"main.dart.js_35.part.js": "53c19cd7a3f784c792c225c1f4f9702d",
"main.dart.js_72.part.js": "bcd392b3bbc163f5a84ac4491d1c7be5",
"main.dart.js_91.part.js": "2000d4c3ec6a610c134d8a22ed1c467b",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"main.dart.js_40.part.js": "71c0628053a0ba4651c30e16f5643ffb",
"main.dart.js_63.part.js": "f3bb933e5a4070735e06dc149c339f36",
"main.dart.js_54.part.js": "6e3750d3a1ef9727576c9ffcfa913355",
"main.dart.js_53.part.js": "553800e293e919c479294324b7ce2dd1",
"main.dart.js_60.part.js": "cf77bbfc0c25a59d2256a8a5cd49f627",
"main.dart.js_12.part.js": "c17286c4a1944e7df6a7d41b443628bc",
"main.dart.js_62.part.js": "df8f4fbcf65722b266f2a46dc3d310ba"
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
