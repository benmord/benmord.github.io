self.addEventListener('install', function(event) {
 event.waitUntil(
  caches.open('calc-static-v1').then(function (cache) {
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
 
    
