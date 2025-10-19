# 008: index.html - 喜びの体験セクション

## 概要

製品を使用することで得られる喜びの体験を、実写画像とともに紹介するセクションを実装します。3Dセクションへのリンクも設置し、ページ内回遊を促進します。

## 依存関係

- **前提**: 001, 002, 003, 020（画像素材変換）
- **ブロック**: なし

## Todo

### HTML構造
- [x] 喜びセクションのHTML作成
- [x] セクションタイトル
- [x] 3つの喜びカード
  - [x] 坂道も階段も楽々
  - [x] 安心のブレーキ
  - [x] 工具不要で簡単取り付け

### カードコンテンツ
- [x] カード画像（実写 - prototype.jpg、他2つはプレースホルダー）
- [x] カードタイトル（絵文字付き）
- [x] カード説明文
- [x] リンク（3D体験 / product.html）

### スタイリング
- [x] カードグリッドレイアウト
- [x] ホバーエフェクト
- [x] レスポンシブ対応

### アニメーション
- [x] スクロールフェードイン（Intersection Observer使用）
- [x] 画像のズームエフェクト

## 実装詳細

### HTML

```html
<section class="joy-section">
  <div class="container">
    <h2 class="section-title fade-in">
      その悩み、愛用のカートに「付けるだけ」で、驚くほど軽やかに。
    </h2>

    <div class="joy-cards">
      <div class="joy-card fade-in">
        <div class="joy-image">
          <img src="images/prototype.jpg" alt="Carry-Assist プロトタイプ">
        </div>
        <div class="joy-content">
          <h3>🚶‍♀️ 坂道も階段も、まるで平地のように</h3>
          <p>
            3輪タイヤとアシスト機構で、坂道も楽々。<br>
            「今まで避けていた場所に、行けるようになった」
          </p>
          <a href="#3d-experience" class="view-3d-link">3Dで機能を確認 →</a>
        </div>
      </div>

      <div class="joy-card fade-in">
        <div class="joy-image">
          <img src="images/brake-demo.jpg" alt="ブレーキ機能デモ">
        </div>
        <div class="joy-content">
          <h3>🛡️ 安心のブレーキで、下り坂も怖くない</h3>
          <p>
            速度をコントロールするブレーキ機能。急な坂でも、安全に降りられます。
          </p>
          <a href="product.html#brake" class="detail-link">ブレーキ詳細 →</a>
        </div>
      </div>

      <div class="joy-card fade-in">
        <div class="joy-image">
          <img src="images/easy-install.jpg" alt="簡単取り付け">
        </div>
        <div class="joy-content">
          <h3>🔧 工具不要！わずか3分で取り付け</h3>
          <p>
            お持ちのキャリーケースに、ベルトで固定するだけ。<br>
            専門知識は一切不要です。
          </p>
          <a href="product.html#howto" class="detail-link">使い方を見る →</a>
        </div>
      </div>
    </div>
  </div>
</section>
```

### CSS

```css
.joy-section {
  padding: var(--spacing-xl) 0;
  background: var(--color-white);
}

.section-title {
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: var(--spacing-lg);
  color: var(--color-text);
}

.joy-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
}

.joy-card {
  background: var(--color-bg);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.joy-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.joy-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.joy-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.joy-card:hover .joy-image img {
  transform: scale(1.1);
}

.joy-content {
  padding: var(--spacing-md);
}

.joy-content h3 {
  font-size: 1.3rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.joy-content p {
  font-size: 1rem;
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.view-3d-link,
.detail-link {
  display: inline-block;
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 600;
  transition: color var(--transition-base), transform var(--transition-base);
}

.view-3d-link:hover,
.detail-link:hover {
  color: #45a049;
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .joy-cards {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .joy-image {
    height: 200px;
  }
}
```

## 完了条件

- [x] 喜びセクションが実装されている
- [x] 3つのカードが表示されている
- [x] 実写画像が配置されている（prototype.jpg使用、他2つはプレースホルダー - 020で置き換え予定）
- [x] リンクが正しく機能している
- [x] ホバーエフェクトが動作している
- [x] レスポンシブ対応完了
- [x] スクロールアニメーション実装済み

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [x] 完了（画像2枚は020で置き換え予定）

---

最終更新: 2025-01-XX
