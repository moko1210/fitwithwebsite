# 003: レスポンシブ設計基盤

## 概要

モバイル、タブレット、デスクトップすべてのデバイスで美しく表示されるレスポンシブ設計の基盤を構築します。

## 依存関係

- **前提**: 001（デザインシステム）
- **ブロック**: 004, 005, 007, 008, 009, 010, 012, 013, 014, 015, 016, 017

## Todo

### ブレークポイント定義
- [x] CSS変数でブレークポイントを定義
  - [x] モバイル: 0-767px
  - [x] タブレット: 768px-1199px
  - [x] デスクトップ: 1200px以上

### グリッドシステム
- [x] Flexboxベースのグリッド実装
- [x] Grid CSSの活用
- [x] コンテナ幅の設定（max-width: 1200px）

### レスポンシブ画像
- [x] `srcset` / `picture` 要素の活用方針
- [x] 画像の遅延読み込み（Lazy Loading）
- [x] レスポンシブ動画プレイヤー

### タッチデバイス対応
- [x] タッチイベントのサポート
- [x] ホバー効果の代替（`:active` など）
- [x] 最小タップ領域（44x44px）の確保

### フォントサイズ調整
- [x] `rem` / `em` 単位の使用
- [x] `clamp()` によるフルードタイポグラフィ
- [x] デバイスごとのフォントサイズ最適化

## 実装詳細

### ブレークポイント定義

```css
/* styles/main.css */
:root {
  --breakpoint-mobile: 768px;
  --breakpoint-tablet: 1200px;
}

/* モバイルファースト設計 */
/* デフォルト: モバイル */

/* タブレット */
@media (min-width: 768px) {
  /* タブレット用スタイル */
}

/* デスクトップ */
@media (min-width: 1200px) {
  /* デスクトップ用スタイル */
}
```

### コンテナシステム

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 40px;
  }
}

@media (min-width: 1200px) {
  .container {
    padding: 0 60px;
  }
}
```

### レスポンシブグリッド

```css
.grid {
  display: grid;
  gap: var(--spacing-md);
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Auto-fit Grid */
.grid-auto-fit {
  display: grid;
  gap: var(--spacing-md);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

### フルードタイポグラフィ

```css
h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
}

h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
}

h3 {
  font-size: clamp(1.3rem, 3vw, 1.5rem);
}

body {
  font-size: clamp(0.9rem, 2vw, 1rem);
}
```

### レスポンシブ画像

```html
<!-- srcsetを使った例 -->
<img
  src="images/prototype-800.jpg"
  srcset="
    images/prototype-400.jpg 400w,
    images/prototype-800.jpg 800w,
    images/prototype-1200.jpg 1200w
  "
  sizes="
    (max-width: 768px) 100vw,
    (max-width: 1200px) 50vw,
    800px
  "
  alt="Carry-Assist プロトタイプ"
  loading="lazy"
>

<!-- pictureを使った例 -->
<picture>
  <source media="(min-width: 1200px)" srcset="images/hero-desktop.jpg">
  <source media="(min-width: 768px)" srcset="images/hero-tablet.jpg">
  <img src="images/hero-mobile.jpg" alt="ヒーロー画像" loading="lazy">
</picture>
```

### レスポンシブ動画

```html
<div class="video-container">
  <video
    class="responsive-video"
    autoplay loop muted playsinline
    poster="images/video-poster.jpg">
    <source src="videos/demo.mp4" type="video/mp4">
    お使いのブラウザは動画タグをサポートしていません。
  </video>
</div>
```

```css
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
}

.responsive-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### タッチデバイス対応

```css
/* タッチデバイスではホバー効果を無効化 */
@media (hover: hover) {
  .hover-lift:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
}

/* タッチデバイス用のアクティブ状態 */
@media (hover: none) {
  .hover-lift:active {
    transform: scale(0.98);
  }
}

/* 最小タップ領域の確保 */
.tap-target {
  min-width: 44px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

### ビューポート設定

```html
<!-- 全HTMLファイルの<head>に追加 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 完了条件

- [x] ブレークポイントが定義されている
- [x] コンテナシステムが実装されている
- [x] レスポンシブグリッドが使用可能
- [x] フルードタイポグラフィが設定されている
- [x] レスポンシブ画像の方針が決定している
- [x] タッチデバイス対応が完了している
- [ ] 実際のデバイスでテストが完了している（実装後にテスト予定）
  - [ ] iPhone（Safari）
  - [ ] Android（Chrome）
  - [ ] iPad（Safari）
  - [ ] デスクトップ（Chrome, Firefox, Safari, Edge）

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [x] 完了

## テスト項目

### モバイル（375px - 767px）
- [ ] テキストが読みやすい
- [ ] ボタンがタップしやすい（44px以上）
- [ ] 横スクロールが発生しない
- [ ] 画像が適切にリサイズされる

### タブレット（768px - 1199px）
- [ ] レイアウトが崩れない
- [ ] 2カラムグリッドが適切に表示される
- [ ] ナビゲーションが使いやすい

### デスクトップ（1200px以上）
- [ ] 最大幅が1200pxに制限されている
- [ ] 3-4カラムグリッドが適切に表示される
- [ ] 画像が高解像度で表示される

## 備考

- Chrome DevToolsのデバイスモードで各ブレークポイントを確認
- 既存の `styles.css` のレスポンシブ設定（483-531行目）を参考に
- パフォーマンス向上のため、不要なメディアクエリは削減

---

最終更新: 2025-01-XX
