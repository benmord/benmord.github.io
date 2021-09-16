self.addEventListener('install', function(event) {
 event.waitUntil(
  caches.open('calc-static-v2').then(function (cache) {
   return cache.addAll([
    'https://benmord.github.io/calc.html',
    'https://benmord.github.io/icons/arsia_icon_72x72.png',
    'https://benmord.github.io/icons/arsia_icon_96x96.png',
    'https://benmord.github.io/icons/arsia_icon_128x128.png',
    'https://benmord.github.io/icons/arsia_icon_144x144.png',
    'https://benmord.github.io/icons/arsia_icon_152x152.png',
    'https://benmord.github.io/icons/arsia_icon_192x192.png',
    'https://benmord.github.io/icons/arsia_icon_384x384.png',
    'https://benmord.github.io/icons/arsia_icon_512x512.png'
   ]);
  }),
 );
});
 
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) { return r; }
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});

//made a change
