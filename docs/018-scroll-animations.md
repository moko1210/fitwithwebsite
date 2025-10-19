# 018: スクロールアニメーション（Intersection Observer）

## 概要

Intersection Observerを使用して、スクロール時に要素がビューポートに入ったタイミングでフェードインアニメーションを実行します。UXの向上とページの動的な表現を実現します。

## 依存関係

- **前提**: 001（デザインシステム）
- **ブロック**: すべてのコンテンツセクション

## Todo

### JavaScript実装
- [ ] `scripts/animations.js` ファイル作成
- [ ] Intersection Observerの設定
- [ ] `.fade-in` クラスの監視
- [ ] スタガードアニメーション（遅延）の実装

### CSS拡張
- [ ] フェードインアニメーション定義（styles/animations.css）
- [ ] スライドアップアニメーション
- [ ] スライドイン（左右）アニメーション

### 適用対象
- [ ] すべてのセクションタイトル
- [ ] カード要素
- [ ] 画像
- [ ] CTAボタン

### パフォーマンス最適化
- [ ] `threshold` の調整
- [ ] `rootMargin` の設定
- [ ] 一度アニメーション後は監視解除

## 実装詳細

### JavaScript（`scripts/animations.js`）

```javascript
// Intersection Observer でスクロールアニメーション
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.2, // 20%見えたらトリガー
    rootMargin: '0px 0px -100px 0px' // 下から100px手前でトリガー
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // 一度アニメーションしたら監視を解除（パフォーマンス向上）
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // すべての .fade-in 要素を監視
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    observer.observe(el);
  });

  // スタガードアニメーション用
  const staggerElements = document.querySelectorAll('.stagger-item');
  staggerElements.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
  });
});
```

### CSS（`styles/animations.css`）

```css
/* 基本フェードインアニメーション */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* スライドアップアニメーション */
.slide-up {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.slide-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* スライドイン（左から） */
.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.slide-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

/* スライドイン（右から） */
.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.slide-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}

/* スケールアップアニメーション */
.scale-up {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.scale-up.visible {
  opacity: 1;
  transform: scale(1);
}

/* スタガードアニメーション用 */
.stagger-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.stagger-item.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 遅延設定（個別に調整可能） */
.delay-100 {
  transition-delay: 0.1s;
}

.delay-200 {
  transition-delay: 0.2s;
}

.delay-300 {
  transition-delay: 0.3s;
}

.delay-400 {
  transition-delay: 0.4s;
}

.delay-500 {
  transition-delay: 0.5s;
}

/* プリファーモーション対応（モーション軽減） */
@media (prefers-reduced-motion: reduce) {
  .fade-in,
  .slide-up,
  .slide-in-left,
  .slide-in-right,
  .scale-up,
  .stagger-item {
    transition: none;
    opacity: 1;
    transform: none;
  }
}
```

### HTML適用例

```html
<!-- セクションタイトルにフェードイン -->
<section class="empathy-section">
  <h2 class="empathy-title fade-in">
    そのキャリーケース、「怖い」「大変」と感じたことはありませんか？
  </h2>

  <!-- カードにスタガードアニメーション -->
  <div class="empathy-cards">
    <div class="empathy-card stagger-item">...</div>
    <div class="empathy-card stagger-item">...</div>
    <div class="empathy-card stagger-item">...</div>
    <div class="empathy-card stagger-item">...</div>
  </div>
</section>

<!-- 画像にスライドイン -->
<section class="joy-section">
  <div class="joy-card">
    <img src="images/prototype.jpg" class="slide-in-left" alt="プロトタイプ">
    <div class="joy-content slide-in-right">
      <h3>坂道も階段も、まるで平地のように</h3>
      <p>...</p>
    </div>
  </div>
</section>

<!-- CTAボタンにスケールアップ -->
<section class="cta-section">
  <h2 class="fade-in">さあ、あなたも「自由な移動」を体験しませんか？</h2>
  <a href="contact.html" class="cta-button primary scale-up">
    まずは製品について相談してみる
  </a>
</section>
```

### パフォーマンス考慮

```javascript
// レイジーロードされた要素に対しても動作
const lazyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const src = img.getAttribute('data-src');
      if (src) {
        img.src = src;
        img.classList.add('loaded');
        lazyObserver.unobserve(img);
      }
    }
  });
}, {
  rootMargin: '50px' // 少し早めに読み込み
});

document.querySelectorAll('img[data-src]').forEach(img => {
  lazyObserver.observe(img);
});
```

## 完了条件

- [ ] `scripts/animations.css` が作成されている
- [ ] `styles/animations.css` が作成されている
- [ ] すべてのHTMLファイルで `.fade-in` クラスが適用されている
- [ ] スクロール時にアニメーションが動作している
- [ ] スタガードアニメーションが実装されている
- [ ] `prefers-reduced-motion` に対応している
- [ ] パフォーマンスが良好（ジャンクなし）

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [ ] 完了

## 備考

- Intersection Observer API: https://developer.mozilla.org/ja/docs/Web/API/Intersection_Observer_API
- IE11非対応のため、モダンブラウザのみサポート
- アクセシビリティ: `prefers-reduced-motion` への対応必須

---

最終更新: 2025-01-XX
