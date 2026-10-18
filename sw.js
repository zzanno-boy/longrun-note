// 장기투자 노트 service worker: 앱 껍데기는 캐시, 공유 데이터는 항상 최신
const CACHE='longrun-note-v1';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET')return;
  if(u.origin!==location.origin){return;} // 폰트 등 외부 자원은 브라우저에 맡김
  if(u.pathname.endsWith('updates.json')){
    e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r;}).catch(()=>caches.match(e.request)));
    return;
  }
  // 앱 껍데기: 네트워크 우선, 실패하면 캐시 (오프라인에서도 열림)
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r;}).catch(()=>caches.match(e.request).then(m=>m||caches.match('./index.html'))));
});
