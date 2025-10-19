# 009: index.html - 顧客の声・CTAセクション

## 概要

顧客の声（Social Proof）と最終的なCTA（Call to Action）セクションを実装します。購入検討者の背中を押す重要なセクションです。

## 依存関係

- **前提**: 001, 002, 003, 020（画像素材変換）
- **ブロック**: なし

## Todo

### 顧客の声セクション
- [ ] セクションタイトル
- [ ] 満足度表示（87.6%）
- [ ] 実際の利用シーン画像
- [ ] 顧客の声カード（3-4個）

### CTAセクション
- [ ] セクションタイトル
- [ ] 説明文
- [ ] 2つのCTAボタン
  - [ ] プライマリ: contact.html
  - [ ] セカンダリ: product.html

### スタイリング
- [ ] カードデザイン
- [ ] アバターアイコン
- [ ] CTAボタンのデザイン

### アニメーション
- [ ] スクロールフェードイン
- [ ] CTAボタンのパルスエフェクト

## 実装詳細

### HTML

```html
<!-- 顧客の声セクション -->
<section class="testimonial-section">
  <div class="container">
    <h2 class="section-title fade-in">
      先に体験した方々から、喜びの声が届いています。
    </h2>

    <div class="satisfaction-rate fade-in">
      <span class="rate-number">87.6%</span>
      <span class="rate-text">の方が<br>ポジティブな感想</span>
    </div>

    <div class="testimonial-image fade-in">
      <img src="images/testimonial-scene.jpg" alt="実際の利用シーン" loading="lazy">
      <p class="image-caption">実際の利用シーン：階段をスムーズに昇降</p>
    </div>

    <div class="testimonial-cards">
      <div class="testimonial-card fade-in">
        <div class="testimonial-avatar">👵</div>
        <p class="testimonial-text">
          「買い物の帰り道、坂道が怖くなくなりました」
        </p>
        <span class="testimonial-author">70代女性</span>
      </div>

      <div class="testimonial-card fade-in">
        <div class="testimonial-avatar">👨‍🦽</div>
        <p class="testimonial-text">
          「自分のペースで移動できるようになり、外出が楽しくなりました」
        </p>
        <span class="testimonial-author">60代男性</span>
      </div>

      <div class="testimonial-card fade-in">
        <div class="testimonial-avatar">👩</div>
        <p class="testimonial-text">
          「母へのプレゼントに。とても喜んでくれました」
        </p>
        <span class="testimonial-author">40代女性</span>
      </div>
    </div>
  </div>
</section>

<!-- CTAセクション -->
<section class="cta-section">
  <div class="container">
    <h2 class="cta-title fade-in">
      さあ、あなたも「自由な移動」を体験しませんか？
    </h2>
    <p class="cta-description fade-in">
      製品に関するご質問、デモンストレーションのご希望など、お気軽にお問い合わせください
    </p>

    <div class="cta-buttons">
      <a href="contact.html" class="cta-button primary scale-up">
        まずは製品について相談してみる
      </a>
      <a href="product.html" class="cta-button secondary scale-up">
        詳しい機能を見る
      </a>
    </div>
  </div>
</section>
```

### CSS

```css
/* 顧客の声セクション */
.testimonial-section {
  padding: var(--spacing-xl) 0;
  background: var(--color-bg);
}

.satisfaction-rate {
  text-align: center;
  margin: var(--spacing-lg) 0;
}

.rate-number {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  color: var(--color-accent);
  display: block;
}

.rate-text {
  font-size: clamp(1rem, 3vw, 1.3rem);
  color: var(--color-text);
  display: block;
  margin-top: var(--spacing-sm);
  line-height: 1.6;
}

.testimonial-image {
  text-align: center;
  margin: var(--spacing-lg) 0;
}

.testimonial-image img {
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

.image-caption {
  font-size: 0.9rem;
  color: var(--color-text-light);
  margin-top: var(--spacing-sm);
  font-style: italic;
}

.testimonial-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.testimonial-card {
  background: var(--color-white);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  text-align: center;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.testimonial-avatar {
  font-size: 3rem;
  margin-bottom: var(--spacing-sm);
}

.testimonial-text {
  font-size: 1.1rem;
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: var(--spacing-sm);
  font-style: italic;
}

.testimonial-author {
  font-size: 0.9rem;
  color: var(--color-text-light);
  font-weight: 600;
}

/* CTAセクション */
.cta-section {
  padding: var(--spacing-xl) 0;
  background: linear-gradient(135deg, var(--color-primary) 0%, #1e40af 100%);
  color: var(--color-white);
  text-align: center;
}

.cta-title {
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: var(--spacing-md);
}

.cta-description {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.95;
}

.cta-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button.primary {
  background: var(--color-accent);
  color: var(--color-white);
  animation: pulse 2s infinite;
}

.cta-button.secondary {
  background: var(--color-white);
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .testimonial-cards {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .cta-button {
    width: 100%;
  }
}
```

## 完了条件

- [ ] 顧客の声セクションが実装されている
- [ ] 満足度（87.6%）が表示されている
- [ ] 利用シーン画像が配置されている
- [ ] 顧客の声カードが表示されている
- [ ] CTAセクションが実装されている
- [ ] CTAボタンが正しくリンクしている
- [ ] レスポンシブ対応完了

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [ ] 完了

---

最終更新: 2025-01-XX
