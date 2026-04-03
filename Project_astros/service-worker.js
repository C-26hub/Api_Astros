const CACHE_NAME = "astros-cache-v3";
const urlsToCache = [
    "/",
    "./index.html",
    "./style.css",
    "./script.js",
    "./assets/Astros logo (branca).png",
    "./icons/astro_icon 48x48.png",
    "./icons/astro_icon 72x72.png",
    "./icons/astro_icon 96x96.png",
    "./icons/astro_icon 144x144.png",
    "./icons/astro_icon 192x192.png",
];

// instalação
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    );
    self.skipWaiting();
});

// ativação
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then(keys => 
            Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            )
        )
    )
    self.clients.claim();
});

// fetch
self.addEventListener("fetch", (event) => {
    const request = event.request;

    // API da NASA
    if (request.url.includes("api.nasa.gov")) {
        event.respondWith(
            fetch(request)
            .then(response => {
                const responseClone = response.clone();
                
                caches.open(CACHE_NAME)
                .then(cache => cache.put(request, responseClone));

                return response;
            })
            .catch(() => caches.match(request))
        );
        return;
}
   // arquivos do site
    event.respondWith(
        caches.match(request)
        .then(response => response || fetch(request))
    );

});