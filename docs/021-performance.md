# 021: パフォーマンス最適化

## 概要

サイト全体のパフォーマンスを最適化します。画像圧縮、Lazy Loading、コード最適化を実施し、高速なページ表示を実現します。

## 依存関係

- **前提**: すべてのコンテンツページが完成
- **ブロック**: 022（SEO・アクセシビリティ）

## Todo

### 画像最適化
- [ ] すべての画像を圧縮（1MB以下）
- [ ] WebP形式への変換
- [ ] レスポンシブ画像の設定
- [ ] Lazy Loading実装

### コード最適化
- [ ] CSS/JSの圧縮（minify）
- [ ] 不要なCSSの削除
- [ ] クリティカルCSSのインライン化

### ローディング最適化
- [ ] フォントの最適化
- [ ] 画像のpreload
- [ ] Three.jsの遅延読み込み

### キャッシュ戦略
- [ ] Service Workerの実装（オプション）
- [ ] ブラウザキャッシュの活用

## 実装詳細

### Lazy Loading

```html
<!-- すべての画像にloading="lazy"を追加 -->
<img src="images/prototype.jpg" alt="プロトタイプ" loading="lazy">

<!-- Intersection Observerによる画像遅延読み込み（polyfill） -->
<script>
if ('loading' in HTMLImageElement.prototype) {
  // ネイティブサポート
} else {
  // polyfill実装
  const images = document.querySelectorAll('img[loading="lazy"]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}
</script>
```

### WebP画像の活用

```html
<picture>
  <source type="image/webp" srcset="images/hero-background.webp">
  <source type="image/jpeg" srcset="images/hero-background.jpg">
  <img src="images/hero-background.jpg" alt="ヒーロー背景" loading="lazy">
</picture>
```

### フォント最適化

```html
<!-- preconnectでフォント読み込みを高速化 -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- font-displayでFOITを防止 -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap" rel="stylesheet">
```

### クリティカルCSS

```html
<head>
  <!-- クリティカルCSSをインライン化 -->
  <style>
    /* Above-the-fold用の最小限のCSS */
    body { margin: 0; font-family: 'Noto Sans JP', sans-serif; }
    .hero-section { min-height: 100vh; }
    /* ... */
  </style>

  <!-- 残りのCSSは遅延読み込み -->
  <link rel="preload" href="styles/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles/main.css"></noscript>
</head>
```

### Three.jsの遅延読み込み

```javascript
// Three.jsは3Dセクションに入ったときのみ読み込み
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadThreeJS();
      observer.unobserve(entry.target);
    }
  });
});

const canvas3D = document.getElementById('canvas-container');
if (canvas3D) {
  observer.observe(canvas3D);
}

function loadThreeJS() {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  script.onload = () => {
    // Three.js読み込み後に初期化
    init();
  };
  document.head.appendChild(script);
}
```

### 画像圧縮チェックリスト

```bash
# ImageMagickで一括圧縮
for file in images/*.jpg; do
  magick convert "$file" -quality 85 -strip "$file"
done

for file in images/*.png; do
  pngquant --quality=65-80 --ext .png --force "$file"
done

# WebP変換
for file in images/*.{jpg,png}; do
  magick convert "$file" -quality 85 "${file%.*}.webp"
done
```

### パフォーマンス測定

```javascript
// Performance APIで測定
window.addEventListener('load', () => {
  const perfData = performance.getEntriesByType('navigation')[0];
  console.log('DOM読み込み時間:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart);
  console.log('ページ読み込み時間:', perfData.loadEventEnd - perfData.fetchStart);

  // Largest Contentful Paint（LCP）
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
  }).observe({ type: 'largest-contentful-paint', buffered: true });
});
```

### Service Worker（オプション）

```javascript
// sw.js
const CACHE_NAME = 'carry-assist-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js',
  '/images/logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

## 完了条件

- [ ] すべての画像が圧縮されている（1MB以下）
- [ ] WebP形式の画像が用意されている
- [ ] Lazy Loadingが実装されている
- [ ] フォントが最適化されている
- [ ] CSS/JSが圧縮されている
- [ ] Lighthouseスコアが90以上
  - [ ] Performance: 90+
  - [ ] Accessibility: 90+
  - [ ] Best Practices: 90+
  - [ ] SEO: 90+

## パフォーマンス目標

- **First Contentful Paint (FCP)**: < 1.8秒
- **Largest Contentful Paint (LCP)**: < 2.5秒
- **Time to Interactive (TTI)**: < 3.8秒
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Total Blocking Time (TBT)**: < 200ms

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [ ] 完了

---

最終更新: 2025-01-XX
