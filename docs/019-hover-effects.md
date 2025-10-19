# 019: ホバーエフェクト・各種インタラクション

## 概要

サイト全体のホバーエフェクトとマイクロインタラクションを実装します。UXの向上とページの動的な表現を実現します。

## 依存関係

- **前提**: 001（デザインシステム）
- **ブロック**: なし（全ページに適用）

## Todo

### ホバーエフェクト
- [ ] カードのリフトエフェクト
- [ ] ボタンのホバー状態
- [ ] リンクのアンダーライン
- [ ] 画像のズーム効果

### マイクロインタラクション
- [ ] ローディングアニメーション
- [ ] ボタンクリックのリップルエフェクト
- [ ] トグルスイッチ
- [ ] ツールチップ

### トランジション
- [ ] ページ遷移アニメーション
- [ ] モーダルの開閉
- [ ] ドロップダウンメニュー

## 実装詳細

### CSS（`styles/main.css` に追加）

```css
/* ===== ホバーエフェクト ===== */

/* カードリフトエフェクト */
.card-lift {
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.card-lift:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

/* ボタンホバー */
.btn-hover-grow {
  transition: transform var(--transition-base);
}

.btn-hover-grow:hover {
  transform: scale(1.05);
}

/* リンクアンダーライン */
.link-underline {
  position: relative;
  text-decoration: none;
  color: var(--color-text);
}

.link-underline::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background: var(--color-accent);
  transition: width var(--transition-base);
}

.link-underline:hover::after {
  width: 100%;
}

/* 画像ズーム */
.img-zoom-container {
  overflow: hidden;
  border-radius: var(--radius-md);
}

.img-zoom {
  transition: transform var(--transition-slow);
}

.img-zoom-container:hover .img-zoom {
  transform: scale(1.1);
}

/* ===== マイクロインタラクション ===== */

/* ローディングスピナー */
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: var(--color-accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* リップルエフェクト */
.ripple {
  position: relative;
  overflow: hidden;
}

.ripple::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.ripple:active::before {
  width: 300px;
  height: 300px;
}

/* ツールチップ */
.tooltip {
  position: relative;
  cursor: help;
}

.tooltip::before {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.9);
  color: var(--color-white);
  font-size: 0.85rem;
  white-space: nowrap;
  border-radius: 4px;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-base);
  margin-bottom: 5px;
}

.tooltip::after {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.9);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-base);
}

.tooltip:hover::before,
.tooltip:hover::after {
  opacity: 1;
}

/* プログレスバー */
.progress-bar {
  width: 100%;
  height: 6px;
  background: #e9ecef;
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent) 0%, #45a049 100%);
  transition: width var(--transition-slow);
}

/* ===== タッチデバイス対応 ===== */

@media (hover: hover) {
  /* ホバー可能なデバイスでのみ適用 */
  .hover-only:hover {
    /* ホバー専用スタイル */
  }
}

@media (hover: none) {
  /* タッチデバイス用 */
  .card-lift:active {
    transform: scale(0.98);
  }
}

/* ===== フォーカススタイル（アクセシビリティ） ===== */

.focus-visible:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* ===== ページ遷移アニメーション ===== */

.page-transition {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== スムーズスクロール ===== */

html {
  scroll-behavior: smooth;
}

/* スクロールバーカスタマイズ（Webkit） */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: var(--color-accent);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #45a049;
}

/* ===== セレクション色 ===== */

::selection {
  background: var(--color-accent);
  color: var(--color-white);
}
```

### JavaScript（`scripts/main.js` に追加）

```javascript
// スムーズスクロール
document.addEventListener('DOMContentLoaded', () => {
  // すべてのアンカーリンクにスムーズスクロール
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // リップルエフェクト
  document.querySelectorAll('.ripple').forEach(button => {
    button.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      ripple.style.left = e.clientX - rect.left + 'px';
      ripple.style.top = e.clientY - rect.top + 'px';
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // ページ遷移アニメーション
  document.body.classList.add('page-transition');

  // 外部リンクを新しいタブで開く
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
```

## 完了条件

- [ ] ホバーエフェクトが全ページに適用されている
- [ ] カードリフトエフェクトが動作している
- [ ] リンクアンダーラインアニメーションが動作している
- [ ] 画像ズームエフェクトが動作している
- [ ] ツールチップが表示される
- [ ] タッチデバイスで適切に動作している
- [ ] アクセシビリティ（フォーカス）が設定されている

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [ ] 完了

---

最終更新: 2025-01-XX
