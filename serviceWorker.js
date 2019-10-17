
var cacheName = 'v1'
var filesTocache = [
  '/',
  'index.html',
  'index.css',
  'index.js'
]

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        cache.addAll(filesTocache)
        console.log(filesTocache)
      })
      .then(() => self.skipWaiting())
  )
  console.log('service worker installed')
})

self.addEventListener('activate', (e) => {
  console.log('serviceWorker activated')
})

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(function (response) {
        if (response) {
          return response
        }
        return fetch(e.request)
          .then(res => {
            if (!res || res.status !== 200 || res.type !== 'basic') {
              return res
            }
            const clone = res.clone()
            caches
              .open(cacheName)
              .then((cache) => {
                cache.put(e.request, clone)
                return res
              })
          })
          .catch(err => console.log(err).then(res => res))
      })
  )
})
