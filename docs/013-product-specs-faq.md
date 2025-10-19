# 013: product.html - スペック表・Q&Aセクション

## 概要

product.htmlの製品仕様セクションとよくある質問（Q&A）セクションを実装します。購入前の疑問を解消し、製品への信頼を構築します。

## 依存関係

- **前提**: 001, 002, 003, 020（キャラクターアイコン）
- **ブロック**: なし

## Todo

### 3ステップ使い方セクション
- [ ] セクションタイトル
- [ ] 3つのステップカード

### スペック表セクション
- [ ] セクションタイトル
- [ ] 6つのスペックカード

### Q&Aセクション
- [ ] セクションタイトル
- [ ] アコーディオン形式のFAQ（5-7個）
- [ ] キャラクターアイコン表示

### スタイリング
- [ ] カードグリッド
- [ ] アコーディオンアニメーション
- [ ] レスポンシブ対応

### JavaScript
- [ ] アコーディオン開閉機能

## 実装詳細

### HTML

```html
<!-- 3ステップの使い方 -->
<section id="howto" class="howto-section">
  <div class="container">
    <h2 class="section-title">工具不要！わずか3分で取り付け</h2>

    <div class="howto-steps">
      <div class="howto-step fade-in">
        <div class="step-number">1</div>
        <img src="images/step1.jpg" alt="ステップ1" loading="lazy">
        <h3>ベルトで固定</h3>
        <p>お持ちのキャリーケースに、本体をベルトで固定します</p>
      </div>

      <div class="howto-step fade-in">
        <div class="step-number">2</div>
        <img src="images/step2.jpg" alt="ステップ2" loading="lazy">
        <h3>位置調整</h3>
        <p>最適な位置に調整して、しっかり固定</p>
      </div>

      <div class="howto-step fade-in">
        <div class="step-number">3</div>
        <img src="images/step3.jpg" alt="ステップ3" loading="lazy">
        <h3>快適な移動</h3>
        <p>あとは普段通り。軽やかに移動できます</p>
      </div>
    </div>
  </div>
</section>

<!-- スペック表 -->
<section class="specs-section">
  <div class="container">
    <h2 class="section-title">製品仕様</h2>

    <div class="specs-grid">
      <div class="spec-card fade-in">
        <div class="spec-icon">📏</div>
        <h3>サイズ</h3>
        <p>W300 × H450 × D150 mm</p>
      </div>

      <div class="spec-card fade-in">
        <div class="spec-icon">⚖️</div>
        <h3>重量</h3>
        <p>約2.0kg</p>
      </div>

      <div class="spec-card fade-in">
        <div class="spec-icon">🎯</div>
        <h3>対応キャリーケース</h3>
        <p>高さ50〜70cm、幅35〜45cm</p>
      </div>

      <div class="spec-card fade-in">
        <div class="spec-icon">💪</div>
        <h3>耐荷重</h3>
        <p>最大20kg</p>
      </div>

      <div class="spec-card fade-in">
        <div class="spec-icon">🛠️</div>
        <h3>材質</h3>
        <p>アルミニウム合金、樹脂</p>
      </div>

      <div class="spec-card fade-in">
        <div class="spec-icon">✅</div>
        <h3>保証</h3>
        <p>1年間製品保証</p>
      </div>
    </div>
  </div>
</section>

<!-- Q&A -->
<section class="faq-section">
  <div class="container">
    <h2 class="section-title">よくあるご質問</h2>

    <div class="faq-list">
      <div class="faq-item">
        <button class="faq-question">
          <img src="images/character_icon.png" alt="キャラクター" class="faq-icon">
          <span>どんなキャリーケースでも使えますか？</span>
          <span class="faq-toggle">+</span>
        </button>
        <div class="faq-answer">
          <p>はい、ほとんどの2輪・4輪キャリーケースに対応しています。
          対応サイズ: 高さ50cm〜70cm、幅35cm〜45cm</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question">
          <img src="images/character_icon.png" alt="キャラクター" class="faq-icon">
          <span>取り付けは難しくありませんか？</span>
          <span class="faq-toggle">+</span>
        </button>
        <div class="faq-answer">
          <p>いいえ、工具不要でベルトで固定するだけです。わずか3分で取り付けられます。</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question">
          <img src="images/character_icon.png" alt="キャラクター" class="faq-icon">
          <span>バッテリーの持続時間はどれくらいですか？</span>
          <span class="faq-toggle">+</span>
        </button>
        <div class="faq-answer">
          <p>連続使用で約6時間です。1日の外出には十分な容量です。</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question">
          <img src="images/character_icon.png" alt="キャラクター" class="faq-icon">
          <span>重い荷物でも大丈夫ですか？</span>
          <span class="faq-toggle">+</span>
        </button>
        <div class="faq-answer">
          <p>最大20kgまでの荷物をサポートします。旅行の荷物も安心です。</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question">
          <img src="images/character_icon.png" alt="キャラクター" class="faq-icon">
          <span>保証はありますか？</span>
          <span class="faq-toggle">+</span>
        </button>
        <div class="faq-answer">
          <p>1年間の製品保証が付いています。故障時は無償で修理・交換いたします。</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### CSS

```css
/* 3ステップ */
.howto-section {
  padding: var(--spacing-xl) 0;
  background: var(--color-bg);
}

.howto-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.howto-step {
  text-align: center;
  background: var(--color-white);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  position: relative;
  transition: transform var(--transition-base);
}

.howto-step:hover {
  transform: translateY(-5px);
}

.step-number {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: var(--color-accent);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: var(--shadow-sm);
}

.howto-step img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  margin: var(--spacing-md) 0;
}

.howto-step h3 {
  font-size: 1.3rem;
  margin-bottom: var(--spacing-sm);
}

.howto-step p {
  color: var(--color-text-light);
  line-height: 1.6;
}

/* スペック表 */
.specs-section {
  padding: var(--spacing-xl) 0;
  background: var(--color-white);
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.spec-card {
  background: var(--color-bg);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  text-align: center;
  transition: transform var(--transition-base);
}

.spec-card:hover {
  transform: scale(1.05);
}

.spec-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-sm);
}

.spec-card h3 {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
}

.spec-card p {
  color: var(--color-text-light);
  font-size: 0.95rem;
}

/* Q&A */
.faq-section {
  padding: var(--spacing-xl) 0;
  background: var(--color-bg);
}

.faq-list {
  max-width: 900px;
  margin: var(--spacing-lg) auto 0;
}

.faq-item {
  background: var(--color-white);
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-sm);
  overflow: hidden;
  transition: box-shadow var(--transition-base);
}

.faq-item:hover {
  box-shadow: var(--shadow-sm);
}

.faq-question {
  width: 100%;
  padding: var(--spacing-md);
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
}

.faq-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex-shrink: 0;
}

.faq-toggle {
  margin-left: auto;
  font-size: 1.5rem;
  color: var(--color-accent);
  transition: transform var(--transition-base);
}

.faq-item.active .faq-toggle {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-base);
}

.faq-item.active .faq-answer {
  max-height: 500px;
}

.faq-answer p {
  padding: 0 var(--spacing-md) var(--spacing-md);
  color: var(--color-text-light);
  line-height: 1.8;
}

@media (max-width: 768px) {
  .howto-steps,
  .specs-grid {
    grid-template-columns: 1fr;
  }
}
```

### JavaScript（`scripts/main.js` に追加）

```javascript
// アコーディオンFAQ
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains('active');

    // すべてのFAQを閉じる
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });

    // クリックされたFAQを開く（既に開いていた場合は閉じる）
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});
```

## 完了条件

- [ ] 3ステップ使い方セクションが実装されている
- [ ] スペック表が表示されている
- [ ] Q&Aセクションが実装されている
- [ ] アコーディオンが動作している
- [ ] キャラクターアイコンが表示されている
- [ ] レスポンシブ対応完了

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [ ] 完了

---

最終更新: 2025-01-XX
