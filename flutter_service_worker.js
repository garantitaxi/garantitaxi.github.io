'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "145311b7be2003d4819705b8610b74ae",
"favicon.ico": "2ab099653cee8a3e82da1d929595df3c",
"index.html": "9743496688ac65fca6cdae4d641ff525",
"/": "9743496688ac65fca6cdae4d641ff525",
"main.dart.js": "35fb4c324325601dcaa02ed67aa5c288",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "334960ea2687604b7decab604c840f01",
"icons/icon-maskable-192.png": "a1c190c8c1a4d3ad234d0ad8fa3606d7",
"icons/icon-maskable-512.png": "300a3cbc2ef470df4e672e5d4dfa3850",
"icons/icon-512.png": "300a3cbc2ef470df4e672e5d4dfa3850",
"manifest.json": "b843bb1e01af94f0a8e14fcc0a88fe86",
".git/config": "c0dc1e4eb3d74f8dbff36ac9245d05c1",
".git/objects/3c/1ee14284f8004e13ed7f55c7ed4d8f3ac424e5": "a2f21741aced9ff9ca4ecd0410beefa1",
".git/objects/67/a36c849f51d1c5c0349403853db3ae35aa0f20": "ad615db5d4065428aeb0a27526f5a2ec",
".git/objects/60/c350f8c0ae5c5d1a4c4356b8b5febcb5456f3d": "c9bcfb6b122b2c993777c4006666a3b2",
".git/objects/5f/86aa05f6fdcefd57a105f080e437546ebb3851": "aa8e6264f0b0299c904046c28eee529d",
".git/objects/33/63ca5342cb66c762c946990ba6aff24ccd6c46": "8197730031d90bf96157885a79ab5fc9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/7407fdfde66ba18bfb6733b3b565d5aaa0d503": "432ce9fa62780ef37034d662a9b68f41",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/94eace0a5f7f32bbf8c15488a4622f7f6fc971": "c3acd76bb039e92cc31dbfb7c4818163",
".git/objects/26/6e8cf861931082e7334a2752a5ee9cde1a1369": "744d65487515ebcde876b59529252058",
".git/objects/81/0ed0a656bf8ab2e1437d2cb98389fbeaf01c07": "66d8ec0c2dd3eb3879b5261ef34f9046",
".git/objects/72/53cdfb72e07f17ae41a216a24970d144c8946b": "b0e312179e346039bb3165330ebc30da",
".git/objects/2a/cdec8469d08a315516abc3bbb842846a7d6577": "6a6b93e84824fdf0245b860d5e6def20",
".git/objects/2f/ef029d031503afef28297f88da75e34678fff2": "bace8d40258bc8f56bf9d53ac3bbd802",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/31/9b2f2b8f09ff7437dd83de2bb4e52f24286fb2": "ce3f0a69ee62c20ec59f35816ec9f37b",
".git/objects/3a/e633c53a4dd387232c6073728c28b9b9e7fe81": "39006bb1837e715ec6dada74fa51e81e",
".git/objects/3f/3d5a6a26aab1fb12ea9e419683d418111e9090": "adc52bb9ecbd4d373e33196ea64c6d6b",
".git/objects/6c/24538f00558efe07410eb5c9c4672a0c1a80b0": "affd7ae46cc21f767925c20b794bb94f",
".git/objects/55/a71f52f923cd78df2b63e3c3952410e9a9fe3c": "21918bafc58ff0906413d3f92d123858",
".git/objects/a0/7deca9c23dfd03f516c909d62ea7563255d860": "9fce8731b6dcf23a87bb406931551a97",
".git/objects/aa/c65bf5d8aa01fb4773be4efc2179d0ff5f09b8": "cba2fc80022553996042908a0453fa76",
".git/objects/b7/ef3610ee9bc754eb08e773f2f3da015fab96df": "cf13e5d315a7ba7cfdb9a14c759e8f01",
".git/objects/ea/8791bd9ce964afb55f376ccff666d5f310a9a4": "b8dea1fe97e3565bbde04bc9b4060381",
".git/objects/cd/28b4889c59459a69620f23dbb195f6f2a541f5": "462622436bd1e983f54edad0ee00fe28",
".git/objects/cc/9066dc47e7f1b5435da6b3a9687e5d24a8af6b": "9eb9c36721dd1ce0a7568e01bd74633c",
".git/objects/fa/6899d787ac6bbcddf19fe66e1d57a67c340e35": "d87ab5126bf488c41714837d75b257df",
".git/objects/cb/0ebd3bbeb2f33bb0e98fc513bc9c377d51b82b": "0b36028cf24249ad515cc058ca80d300",
".git/objects/ce/f0ba50b7523e993fd5f3188a3ba3057d77a318": "68379367ed35895114a65c23c294632f",
".git/objects/e0/bd7dfdbced2015bd4b505acbebd4a0adaa259d": "5c65ad1234ba6542d74105ebef36990a",
".git/objects/2c/778d1e0ac85f5f99082c322288ceea6bcfb551": "be8ab252c263a6cde041a95b3fa852b8",
".git/objects/2c/58d29d08d03c7f81d75e390304a27ed0cc9c7d": "d1a597174e5d17ed0aa83f9f22163db7",
".git/objects/41/8f61648e05bf213c440ec88f5f9e6a6597e3b7": "98e383ce678f338f00f23dfb4e7f7134",
".git/objects/85/5dddc7a1a7958c1fbdf90f37e6a94f12a2b947": "6a6da2106bae634bb0658344e7c6bf37",
".git/objects/2b/c71bdf03da920f90f767384940144ed8b9d2e8": "109dbcd5ac839782cccea40da59c1bab",
".git/objects/7f/58a8d4b17e1ba191b82de831c1610bb19ee179": "1b525d01503a47f4d0317fe4b03950af",
".git/objects/8e/bff8774ba0a4f561a84ec11f703f02fcbd15bc": "f0627e0655e72e5e1868f0edabca4538",
".git/objects/22/327dce48592f572cdf865d56e11795d0512e2c": "04e93a550cf667d9b0e9d315491c9f40",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "648d99a4ad50557bcfadd4dbc5cf2ee7",
".git/logs/refs/heads/main": "5a9cd2d270657a07584fabf3e4be98dd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3fca1126cbfb4bc991a2c1fee78f01d5",
".git/index": "9f60b47d7633a3e7c8b7a09fdacb7d3c",
".git/COMMIT_EDITMSG": "813f7778ad5eef03980a360b42a1ee63",
"assets/images/1.jpeg": "c26132ad0617a6172f3b4e70e1db5aad",
"assets/images/2.jpeg": "466e08b497981a6920d9c608a1531654",
"assets/images/4.png": "ef8a404d33a6f2dc348eca69bf4110fb",
"assets/images/3.jpeg": "be9f9e26bcd1ae5655d76b6df8e5f6cc",
"assets/AssetManifest.json": "e842d7e9ddb578d9a70cf94bf5a97972",
"assets/NOTICES": "ef5056c8b4a44bd2f22432c315581f36",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "e84a18a725c62a7089b1e2d41e1e6fb9",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
