'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_64.part.js": "7c15c81be495d5718ae3f116f7ba415e",
"main.dart.js_17.part.js": "d87b7717c6dac5847e5e6b00f3e3709e",
"main.dart.js_58.part.js": "96d71ad231fe25e9e1b876b339573dbc",
"main.dart.js_16.part.js": "ec71134a60ab534d3ee2fba183359ed5",
"main.dart.js_85.part.js": "c639b03a190b7b718a4b36c98541a320",
"main.dart.js_82.part.js": "6f2e1324e51fc6cdcb7b7dce709cd7a0",
"main.dart.js_18.part.js": "bd4a7f984fda03fd6b861c1ad7bbed4f",
"main.dart.js_14.part.js": "c3a65b15bd0e9f0f3d9dae40df0fa23b",
"main.dart.js_79.part.js": "2ff439b9bec10a89a8d022dc131e44a3",
"main.dart.js_37.part.js": "a4125a03fb84dcb7884fa6ab824553d2",
"main.dart.js_8.part.js": "2e2ec26fd4d9074bef145a352d12aa2c",
"main.dart.js_83.part.js": "77601a5c9aa1d94f11b4aed0bb6c67b3",
"main.dart.js_36.part.js": "106cebc980a1f6d5b7456227c9b919c8",
"main.dart.js_12.part.js": "18f144e0b8cd992815d0e818aa07d0b6",
"main.dart.js_21.part.js": "5421a28eb1fdfda5b8837861b55a1e4e",
"main.dart.js_52.part.js": "8393b7e82811f74855b766bd3b2d8577",
"main.dart.js_34.part.js": "7f262bcea8ef7acf27f29d4114c20325",
"main.dart.js_59.part.js": "123161d0f9cbcfe77d94865b956e0a6c",
"main.dart.js_65.part.js": "1374f2612a31d8a55da29c0a09dcedd3",
"main.dart.js_87.part.js": "98100cc226ff27f871ca3fc976939606",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"main.dart.js_28.part.js": "8a093c9df6e42f5ec01dcd832f3861bc",
"main.dart.js_91.part.js": "9cca74069adc122c5f6f9c6c9b94dd53",
"main.dart.js_45.part.js": "ac30b2c5532d326763393d7ef2ecc37e",
"main.dart.js_20.part.js": "2669fb178d7231c999ef43957f12abe6",
"main.dart.js_30.part.js": "a2ab31b440e93bb7dcb56936edf51601",
"main.dart.js_43.part.js": "7cb75e958121c66e03409d9f4dfe6755",
"main.dart.js_70.part.js": "ec4fa5893ae7d2e30bc26d8f7962c28e",
"main.dart.js_9.part.js": "5e99687d47b6c6bd01a20d2d6d64734c",
"main.dart.js_6.part.js": "37ca6c197aa4fe4cdfd9535638f40aba",
"main.dart.js_77.part.js": "ec76506210a52c8182f08e19c7aa5063",
"main.dart.js_53.part.js": "d0df607bc35d84f65d0c451553727801",
"main.dart.js_80.part.js": "f82f3dbd2c03fe3fb0d708889316e0d3",
"main.dart.js_57.part.js": "465ad2bd8c039a321997d88416490133",
"main.dart.js_7.part.js": "5680d469122a83b57d77f529c381a555",
"main.dart.js_32.part.js": "22647deea0213d4e43228318336cd5ae",
"main.dart.js_23.part.js": "a3d8363bdae871d0fcee9d4fae3af538",
"index.html": "94cb510590ebb6c345afbd1c7ac1b268",
"/": "94cb510590ebb6c345afbd1c7ac1b268",
"main.dart.js_38.part.js": "4bb3ea892216ae672e6b2ff6ab2071f7",
"main.dart.js_40.part.js": "b99db8e17855552b610cea6894835786",
"main.dart.js_76.part.js": "b3a5552daeae053a5753068c89da0c09",
"main.dart.js_54.part.js": "71c394a60c1dfb7aa3dce0f395ee42be",
"main.dart.js_63.part.js": "6691f15fd8985599de10ccc221ac7b96",
"main.dart.js": "983f0710726238edc3ef49cbbcf78e93",
"main.dart.js_19.part.js": "be2b0bee187013573a5467701d3609c5",
"main.dart.js_84.part.js": "9648cacd9d073424c98fa545ce3a0689",
"manifest.json": "13af23d566b75a592ab6b25d54ea9a17",
"main.dart.js_50.part.js": "7218dbc4b42fa7303ed1e312e1ad39c1",
"main.dart.js_1.part.js": "344a8a742d3d7c5eade8a8ee29159217",
"main.dart.js_42.part.js": "0ea8a2d80d537775cd0d884186659063",
"main.dart.js_49.part.js": "e13bad9f7641b82b96e9ca61d2481b48",
"main.dart.js_25.part.js": "dc7460e155d1ccd0a16404356b971a28",
"main.dart.js_56.part.js": "c328254e809cbe4e5063b3842fe8c3fa",
"main.dart.js_15.part.js": "da811807a791b799ea94904e4f785be5",
"main.dart.js_33.part.js": "fa57c3c96df2beb9cc3a6a08076f1e5e",
"main.dart.js_89.part.js": "34015a59bcd2028fe47255527bb2124f",
"favicon.webp": "5308586dec554fef51ccfed40f79076e",
"main.dart.js_68.part.js": "31035cd259333fe39723f8361b8c21c9",
"main.dart.js_48.part.js": "354d5781a95a2b8711679eb0fc4e084b",
"main.dart.js_61.part.js": "c677ed64193731e14449c90ebf52566b",
"main.dart.js_22.part.js": "f551c322717511a82406e502f352936d",
"main.dart.js_13.part.js": "6cb925f5a7dec3b6b3c846a467796c87",
"main.dart.js_51.part.js": "aecf636a0a55058628676bb82c330047",
"main.dart.js_78.part.js": "ef4c2e21b5d179aa42321cc232f49ad6",
"main.dart.js_10.part.js": "fc7165a21b3d45e9420497c785483139",
"main.dart.js_27.part.js": "a6a233cde4ec45169abcfb2b1bcfe69d",
"main.dart.js_90.part.js": "41ed103992e4e29a89b1960095b9d43e",
"main.dart.js_86.part.js": "d6f930ebadaf33549104be9331c4cd63",
"main.dart.js_72.part.js": "250fecceb9e31dff106e2b95b28c71b9",
"main.dart.js_11.part.js": "b5657104a91eb08c35532582885f7e44",
"main.dart.js_73.part.js": "a3919e547269467ea6e0228cf4b11aa5",
"icons/Icon-512.png": "c269774b5453d4281a6007863c104224",
"icons/Icon-maskable-512.png": "6e04a38614229f804e13b29aa2d0f703",
"icons/Icon-maskable-192.png": "ce6f6dd31083bfdeedf9a408abc530d6",
"icons/Icon-192.png": "66cf863a474391e39f5ab3e64dbbbee9",
"main.dart.js_67.part.js": "4724dae645c80cd557e2ea14efae0859",
"main.dart.js_3.part.js": "051a5e0fec8d424858d6eb52f7fb0618",
"main.dart.js_4.part.js": "56cd36145febd9721124fcb86fdff363",
"main.dart.js_66.part.js": "7f8906c4826b458fcc95b15271404b00",
"main.dart.js_74.part.js": "acbdf58afbf230ed9fb5ca9c291b2bb4",
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
"main.dart.js_55.part.js": "9df50c8304551817b26701b6674ae808",
"main.dart.js_62.part.js": "261eeed5d1f2d638da2443c697ff01f4",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"main.dart.js_2.part.js": "1a1337d0cc3d4ebb867aa9b087971add",
"main.dart.js_88.part.js": "dae41cde99cf3a50230216c59929c52b",
"main.dart.js_44.part.js": "d199af93c1fea83e898066975248b5a1",
"main.dart.js_46.part.js": "ebb9e6881a4238a0dd4d3863c29d5d9f",
"main.dart.js_71.part.js": "0fcc52b541d835809d66096e698f8fef",
"main.dart.js_60.part.js": "e2e0ff2fd014ea75698bab97e5dc1b37",
"version.json": "092d0cd4393bccdb08f2fcd7290d6a1f",
"main.dart.js_47.part.js": "06623f704d488d086dc9c8a4efc92b40",
"main.dart.js_35.part.js": "4b326dc585032a9194c68f1f4c243e19",
"main.dart.js_41.part.js": "fb2860cfc1105fac74da74fa2c9f130c",
"main.dart.js_81.part.js": "17ff9fd8da965ea5fa527c0e6cf43dfe",
"main.dart.js_75.part.js": "9a8cc850fa36ae632332867125e2bff6",
"main.dart.js_39.part.js": "ecb7c20113981b1827e30c47ce4a0353"
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
