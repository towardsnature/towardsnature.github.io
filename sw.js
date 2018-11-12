// https://codelabs.developers.google.com/codelabs/offline/#0
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('towardsnature').then(function (cache) {
      // return cache.put('/', new Response("from the cache!"))
      return cache.addAll([
        '/',
        '/manifest.webmanifest',
        '/media/amsterdam-rainproof.png',
        '/media/towardsnature-logo.png'
      ])
    })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || new Response("nothing in the cache for this request")
    })
  )
})
