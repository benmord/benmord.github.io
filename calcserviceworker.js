self.addEventListener('install', function(event) {
 event.waitUntil(
  caches.open('calc-static-v1').then(function (cache) {
   return cache.addAll([
    'calc.html',
    'icons/arsia_icon_72x72.png',
    'icons/arsia_icon_96x96.png',
    'icons/arsia_icon_128x128.png',
    'icons/arsia_icon_144x144.png',
    'icons/arsia_icon_152x152.png',
    'icons/arsia_icon_192x192.png',
    'icons/arsia_icon_384x384.png',
    'icons/arsia_icon_512x512.png'
   ]);
  });
 );
});
 
    
