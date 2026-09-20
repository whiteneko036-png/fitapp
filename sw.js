/* Service Worker — офлайн-кеш и уведомления */
const CACHE = "fitapp-v1";
const FILES = ["./", "./index.html", "./style.css", "./app.js"];

self.addEventListener("install", (e)=>{
  e.waitUntil(
    caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate", (e)=>{
  e.waitUntil(
    caches.keys().then(keys=>
      Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))
    ).then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch", (e)=>{
  if(e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(cached=>{
      return cached || fetch(e.request).then(res=>{
        const copy = res.clone();
        caches.open(CACHE).then(c=>c.put(e.request, copy)).catch(()=>{});
        return res;
      }).catch(()=>caches.match("./index.html"));
    })
  );
});

self.addEventListener("notificationclick", (e)=>{
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({type:"window"}).then(list=>{
      for(const c of list){ if("focus" in c) return c.focus(); }
      if(self.clients.openWindow) return self.clients.openWindow("./");
    })
  );
});
