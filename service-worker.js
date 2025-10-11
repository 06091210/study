/*
const CACHE_NAME = "quiz-app-v1";
const urlsToCache = [
  "./index.html",
  "./SocialStudies.html"
  "./manifest.json",
  "./IMG_6612.jpeg"
];

// インストール時にキャッシュ
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// オフライン対応（キャッシュから返す）
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// 古いキャッシュ削除
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});
*/
const CACHE_NAME = "quiz-app-v1";
const urlsToCache = [
  "/", // index.html のパス
  "index.html",
  "SocialStudies.html",
  "IMG_6612.jpeg",
  "manifest.json",
  "style.css",
  "script.js"
  // 他に必要な画像や音声ファイルもここに追加！
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // キャッシュがあればそれを返し、なければネットワークから取得
      return response || fetch(event.request);
    })
  );
});
