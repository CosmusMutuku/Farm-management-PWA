const CACHE_NAME = 'poultry-farm-cache-v2';
const STATIC_CACHE = 'poultry-farm-static-v2';
const DYNAMIC_CACHE = 'poultry-farm-dynamic-v2';
const OFFLINE_PAGE = 'offline.html'; // Create an offline page


const STATIC_FILES = [
  '/',
  'index.html',
  'styles.css',
  'script.js',
  'images/poultry.jpg',
  // Add more assets to cache here
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      cache.addAll(STATIC_FILES);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== STATIC_CACHE && key !== DYNAMIC_CACHE) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
          .then((res) => {
            return caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(event.request.url, res.clone());
              return res;
            });
          })
          .catch((err) => {
            return caches.open(STATIC_CACHE).then((cache) => {
              if (event.request.headers.get('accept').includes('text/html')) {
                return cache.match(OFFLINE_PAGE);
              }
            });
          });
      }
    })
  );
});
