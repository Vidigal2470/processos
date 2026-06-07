// Service worker mínimo do app Soares Pacheco.
// Estratégia: rede primeiro (sempre busca a versão mais nova online).
// Não guarda cache agressivo, pra não servir tela antiga depois de uma atualização.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
