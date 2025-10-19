# 012: product.html - インタラクティブ機能紹介

## 概要

product.htmlの3つの核心機能をインタラクティブに紹介するセクションを実装します。ボタンクリックで3Dモデルがズーム・ハイライトする機能を提供します。

## 依存関係

- **前提**: 010（製品ヒーロー）, 011（製品詳細3D）
- **ブロック**: なし

## Todo

### HTML構造
- [ ] セクションタイトル
- [ ] 機能選択ボタン（3つ）
- [ ] 3D詳細表示エリア
- [ ] 機能説明コンテンツ

### 機能コンテンツ
- [ ] アシスト機構
- [ ] 3輪タイヤ
- [ ] 安全ブレーキ

### スタイリング
- [ ] 左右2カラムレイアウト
- [ ] アクティブボタンのスタイル
- [ ] レスポンシブ対応

### JavaScript
- [ ] ボタンクリックイベント
- [ ] 3Dズーム呼び出し
- [ ] コンテンツ切り替え

## 実装詳細

### HTML

```html
<section class="interactive-features">
  <div class="container">
    <h2 class="section-title">3つの核心機能</h2>

    <div class="feature-interactive">
      <div class="feature-left">
        <div class="feature-selector">
          <button class="feature-btn active" data-feature="assist">
            <span class="feature-icon">⚡</span>
            <span>アシスト機構</span>
          </button>
          <button class="feature-btn" data-feature="wheel">
            <span class="feature-icon">🎯</span>
            <span>3輪タイヤ</span>
          </button>
          <button class="feature-btn" data-feature="brake">
            <span class="feature-icon">🛡️</span>
            <span>安全ブレーキ</span>
          </button>
        </div>
      </div>

      <div class="feature-right">
        <div class="feature-3d-detail" id="feature-3d">
          <!-- ミニ3Dビューワー（011の機能を利用） -->
          <canvas id="feature-canvas"></canvas>
        </div>

        <div class="feature-description active" data-feature="assist">
          <h3>機械的アシスト機構</h3>
          <p>坂道や階段での負担を大幅に軽減。軽い力で、重い荷物を楽々運べます。</p>
          <img src="images/assist-detail.jpg" alt="アシスト機構詳細" loading="lazy">
        </div>

        <div class="feature-description" data-feature="wheel">
          <h3>多方向移動タイヤ</h3>
          <p>3輪タイヤで段差をスムーズに乗り越え。安定性抜群の設計です。</p>
          <img src="images/wheel-detail.jpg" alt="タイヤ詳細" loading="lazy">
        </div>

        <div class="feature-description" data-feature="brake">
          <h3>安全ブレーキシステム</h3>
          <p>下り坂でも安心。速度を自動制御し、安全に降りられます。</p>
          <img src="images/brake-detail.jpg" alt="ブレーキ詳細" loading="lazy">
        </div>
      </div>
    </div>
  </div>
</section>
```

### CSS

```css
.interactive-features {
  padding: var(--spacing-xl) 0;
  background: var(--color-white);
}

.feature-interactive {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.feature-selector {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.feature-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background: var(--color-bg);
  border: 2px solid transparent;
  border-radius: var(--radius-sm);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  cursor: pointer;
  transition: all var(--transition-base);
}

.feature-btn:hover {
  background: #e9ecef;
}

.feature-btn.active {
  background: var(--color-white);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-sm);
}

.feature-icon {
  font-size: 2rem;
}

.feature-3d-detail {
  width: 100%;
  height: 400px;
  background: radial-gradient(ellipse at center, #ffffff 0%, #f5f5f5 100%);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
}

#feature-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.feature-description {
  display: none;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.feature-description.active {
  display: block;
  opacity: 1;
}

.feature-description h3 {
  font-size: 1.8rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
}

.feature-description p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.feature-description img {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-md);
}

@media (max-width: 768px) {
  .feature-interactive {
    grid-template-columns: 1fr;
  }

  .feature-selector {
    flex-direction: row;
    overflow-x: auto;
  }

  .feature-btn {
    flex-shrink: 0;
    min-width: 150px;
  }
}
```

### JavaScript（`scripts/main.js` に追加）

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const featureBtns = document.querySelectorAll('.feature-btn');
  const featureDescriptions = document.querySelectorAll('.feature-description');

  featureBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const feature = btn.dataset.feature;

      // すべてのボタンの active クラスを削除
      featureBtns.forEach(b => b.classList.remove('active'));
      // クリックされたボタンに active クラスを追加
      btn.classList.add('active');

      // すべての説明を非表示
      featureDescriptions.forEach(desc => desc.classList.remove('active'));
      // 該当する説明を表示
      const activeDesc = document.querySelector(`.feature-description[data-feature="${feature}"]`);
      if (activeDesc) {
        activeDesc.classList.add('active');
      }

      // 3Dモデルのズーム（011で実装した関数を呼び出し）
      if (typeof window.focusOnFeature === 'function') {
        window.focusOnFeature(feature);
      }
    });
  });
});
```

## 完了条件

- [ ] 機能紹介セクションが実装されている
- [ ] 3つの機能ボタンが表示されている
- [ ] ボタンクリックで説明が切り替わる
- [ ] 3Dモデルがズーム・ハイライトする
- [ ] レスポンシブ対応完了

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [ ] 完了

---

最終更新: 2025-01-XX
