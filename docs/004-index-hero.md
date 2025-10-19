# 004: index.html - ヒーローセクション

## 概要

トップページの第一印象を決定づけるヒーローセクションを実装します。背景画像、強力なメッセージ、CTAボタンで訪問者を惹きつけます。

## 依存関係

- **前提**: 001（デザインシステム）, 002（ヘッダー/フッター）, 003（レスポンシブ設計）, 020（画像素材変換）
- **ブロック**: なし

## Todo

### HTML構造
- [x] ヒーローセクションのHTML作成
- [x] 背景画像コンテナ
- [x] オーバーレイレイヤー
- [x] メインメッセージエリア
- [x] CTAボタン（3D体験セクションへのアンカーリンク）

### スタイリング
- [x] 背景画像の配置とレスポンシブ対応
- [x] オーバーレイでテキストの可読性確保
- [x] タイポグラフィの調整
- [x] CTAボタンのホバーエフェクト
- [x] モバイル対応のレイアウト調整

### アニメーション
- [x] ページロード時のフェードインアニメーション
- [x] CTAボタンのパルスエフェクト（オプション）

### 画像最適化
- [ ] 背景画像の圧縮（1MB以下）※020で実装予定
- [ ] WebP形式への変換（フォールバック付き）※020で実装予定
- [x] レスポンシブ画像の設定（モバイル/タブレット/デスクトップ）- picture要素で実装済み

## 実装詳細

### HTML構造

```html
<section class="hero-section">
  <div class="hero-image-container">
    <picture>
      <source media="(min-width: 1200px)" srcset="images/hero-background-desktop.webp" type="image/webp">
      <source media="(min-width: 1200px)" srcset="images/hero-background-desktop.jpg">
      <source media="(min-width: 768px)" srcset="images/hero-background-tablet.webp" type="image/webp">
      <source media="(min-width: 768px)" srcset="images/hero-background-tablet.jpg">
      <source srcset="images/hero-background-mobile.webp" type="image/webp">
      <img src="images/hero-background-mobile.jpg" alt="Carry-Assist 使用イメージ" class="hero-image">
    </picture>
    <div class="hero-overlay"></div>
  </div>

  <div class="hero-content">
    <h1 class="hero-title fade-in">
      すべての人が、自分のタイミングで・自力で・自由に移動できる世界へ
    </h1>
    <p class="hero-subtitle fade-in">
      愛用のキャリーケースに後付けできる『Carry-Assist』<br>
      段差・階段の昇降をもっと楽に、もっと安全に。
    </p>
    <a href="#3d-experience" class="cta-button primary fade-in">
      製品を360°体験する
    </a>
  </div>
</section>
```

### CSS

```css
.hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
  padding: 2rem;
  color: var(--color-white);
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.3;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: clamp(1rem, 3vw, 1.3rem);
  font-weight: 300;
  margin-bottom: 2.5rem;
  line-height: 1.8;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.cta-button {
  display: inline-block;
  padding: 18px 50px;
  background: var(--color-accent);
  color: var(--color-white);
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: var(--radius-sm);
  transition: all var(--transition-base);
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4);
}

.cta-button:hover {
  background: #45a049;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.6);
}

/* アニメーション（遅延設定） */
.hero-content .fade-in:nth-child(1) {
  animation-delay: 0.2s;
}

.hero-content .fade-in:nth-child(2) {
  animation-delay: 0.4s;
}

.hero-content .fade-in:nth-child(3) {
  animation-delay: 0.6s;
}

/* モバイル対応 */
@media (max-width: 768px) {
  .hero-section {
    min-height: 80vh;
  }

  .hero-content {
    padding: 1.5rem;
  }

  .hero-subtitle br {
    display: none;
  }

  .cta-button {
    padding: 15px 35px;
    font-size: 1rem;
  }
}
```

### JavaScript（スムーススクロール）

```javascript
// scripts/main.js に追加
document.addEventListener('DOMContentLoaded', () => {
  // CTAボタンのスムーススクロール
  const ctaButton = document.querySelector('.hero-section .cta-button');

  ctaButton.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = ctaButton.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });

  // フェードインアニメーションのトリガー
  const fadeElements = document.querySelectorAll('.hero-content .fade-in');
  setTimeout(() => {
    fadeElements.forEach(el => el.classList.add('visible'));
  }, 100);
});
```

## 完了条件

- [x] ヒーローセクションが実装されている
- [x] 背景画像が美しく表示されている（プレースホルダー使用中）
- [x] オーバーレイによりテキストが読みやすい
- [x] CTAボタンが正しくリンクしている
- [x] スムーススクロールが動作している（scripts/main.jsで実装済み）
- [x] レスポンシブ対応が完了している（モバイル/タブレット/デスクトップ）
- [x] フェードインアニメーションが動作している
- [ ] 画像が最適化されている（WebP対応、圧縮済み）※020で実装予定

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [x] 完了

## 備考

- **画像素材**: `images/hero-background.jpg` が必要
  - デスクトップ: 1920x1080px
  - タブレット: 1024x768px
  - モバイル: 750x1334px
- 既存の `index.html` のヒーローセクション（13-16行目）を置き換え
- アクセシビリティ: 画像のalt属性を適切に設定

---

最終更新: 2025-01-XX
