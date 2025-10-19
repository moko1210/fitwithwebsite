# 010: product.html - 製品ヒーロー

## 概要

product.htmlの製品ヒーローセクションを実装します。ミニ3Dビューワーと製品詳細を左右に配置し、購入検討者に製品の魅力を伝えます。

## 依存関係

- **前提**: 001, 002, 003
- **ブロック**: なし

## Todo

### HTML構造
- [x] product.htmlファイル作成
- [x] ヘッダー・フッター挿入
- [x] 製品ヒーローセクション
  - [x] 左: ミニ3Dビューワー
  - [x] 右: 製品詳細

### 製品詳細コンテンツ
- [x] 製品名・タグライン
- [x] 主要機能リスト（4項目）

### スタイリング
- [x] 2カラムレイアウト
- [x] レスポンシブ対応

## 実装詳細

### HTML

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>製品詳細 - Carry-Assist</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles/main.css">
  <link rel="stylesheet" href="styles/animations.css">
</head>
<body>
  <!-- ヘッダー（002から挿入） -->
  <header class="site-header">
    <!-- ... -->
  </header>

  <!-- 製品ヒーロー -->
  <section class="product-hero">
    <div class="container">
      <div class="product-hero-grid">
        <div class="product-hero-left">
          <div class="mini-3d-viewer" id="product-3d">
            <div class="loading-indicator" id="product-loading">読み込み中...</div>
            <canvas id="product-canvas"></canvas>
          </div>
        </div>

        <div class="product-hero-right">
          <h1 class="product-title">Carry-Assist<br><span class="product-subtitle">製品詳細</span></h1>
          <p class="product-tagline">
            愛用のキャリーケースを、アシスタントに変える後付けユニット
          </p>

          <ul class="key-features">
            <li>✅ 最大20kgの荷物をサポート</li>
            <li>✅ 軽量設計: 約2.0kg</li>
            <li>✅ 工具不要で3分取り付け</li>
            <li>✅ ほとんどのケースに対応</li>
          </ul>

          <div class="hero-cta">
            <a href="#howto" class="cta-button primary">使い方を見る</a>
            <a href="contact.html" class="cta-button secondary">お問い合わせ</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 他のセクション... -->

  <!-- フッター（002から挿入） -->
  <footer class="site-footer">
    <!-- ... -->
  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="scripts/three-viewer.js"></script>
  <script src="scripts/animations.js"></script>
</body>
</html>
```

### CSS

```css
.product-hero {
  padding: var(--spacing-xl) 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.product-hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  align-items: center;
}

.mini-3d-viewer {
  position: relative;
  width: 100%;
  height: 500px;
  background: radial-gradient(ellipse at center, #ffffff 0%, #f5f5f5 100%);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

#product-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

#product-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-text-light);
  z-index: 10;
}

.product-title {
  font-size: clamp(2.5rem, 5vw, 3rem);
  margin-bottom: var(--spacing-sm);
  line-height: 1.2;
}

.product-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 400;
  color: var(--color-text-light);
  display: block;
  margin-top: 0.5rem;
}

.product-tagline {
  font-size: 1.2rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

.key-features {
  list-style: none;
  padding: 0;
  margin-bottom: var(--spacing-lg);
}

.key-features li {
  padding: var(--spacing-sm) 0;
  font-size: 1.1rem;
  color: var(--color-text);
}

.hero-cta {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .product-hero-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .mini-3d-viewer {
    height: 350px;
  }

  .hero-cta {
    flex-direction: column;
  }

  .cta-button {
    width: 100%;
  }
}
```

## 完了条件

- [x] product.htmlが作成されている
- [x] ヘッダー・フッターが挿入されている
- [x] 製品ヒーローセクションが表示されている
- [ ] ミニ3Dビューワーが動作している（011で実装予定）
- [x] 主要機能リストが表示されている
- [x] レスポンシブ対応完了

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [x] 完了（3Dビューワーは011で実装）

---

最終更新: 2025-01-19
