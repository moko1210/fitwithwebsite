# 005: index.html - 悩みへの共感セクション

## 概要

ユーザーの悩みに共感し、製品の解決策を提示するBefore/After形式のカードセクションを実装します。絵文字とピクトグラムを組み合わせた視覚的なデザインで、感情に訴えかけます。

## 依存関係

- **前提**: 001（デザインシステム）, 002（ヘッダー/フッター）, 003（レスポンシブ設計）, 020（画像素材変換 - ピクトグラム）
- **ブロック**: なし

## Todo

### HTML構造
- [x] 共感セクションのHTML作成
- [x] セクションタイトル
- [x] 4つの共感カード
  - [x] 階段での恐怖
  - [x] 坂道・段差の悩み
  - [x] 人混み・買い物の悩み
  - [x] 精神的な悩み

### カードコンテンツ
- [x] 問題サイド（Problem）
  - [x] 絵文字アイコン
  - [ ] ピクトグラム画像（020で追加予定）
  - [x] 悩みのタイトル
  - [x] 悩みの説明文
- [x] 解決サイド（Solution）
  - [x] 解決アイコン（絵文字）
  - [x] 解決策のタイトル
  - [x] 解決策の説明文

### スタイリング
- [x] カードのレイアウト（グリッド）
- [x] Before/Afterの視覚的な対比
- [x] ホバーエフェクト（既存styles.cssで実装済み）
- [x] レスポンシブ対応

### アニメーション
- [x] スクロール時のフェードインアニメーション（Intersection Observer実装）
- [x] カードのスタガードアニメーション（順次表示）

## 実装詳細

### HTML構造

```html
<section class="empathy-section">
  <div class="container">
    <h2 class="empathy-title">
      そのキャリーケース、「怖い」「大変」と感じたことはありませんか？
    </h2>

    <div class="empathy-cards">
      <!-- カード1: 階段での恐怖 -->
      <div class="empathy-card fade-in">
        <div class="problem-side">
          <div class="problem-icon">😰</div>
          <img src="images/pictogram_fall.png" alt="階段での転倒リスク" class="pictogram">
          <h3>階段での恐怖</h3>
          <p>重いキャリーケースが階段で制御できず、転倒しそうになった経験…</p>
        </div>
        <div class="solution-side">
          <div class="solution-icon">✨</div>
          <h3>こう変わります</h3>
          <p>3輪タイヤとブレーキが段差をスムーズにサポート。恐怖から解放されます。</p>
        </div>
      </div>

      <!-- カード2: 坂道・段差の悩み -->
      <div class="empathy-card fade-in">
        <div class="problem-side">
          <div class="problem-icon">😥</div>
          <h3>坂道・段差の悩み</h3>
          <p>ちょっとした坂道や段差で、キャリーケースが急に牙をむく…</p>
        </div>
        <div class="solution-side">
          <div class="solution-icon">💪</div>
          <h3>こう変わります</h3>
          <p>モーターが強力にアシスト。坂道を「坂」だと意識させません。</p>
        </div>
      </div>

      <!-- カード3: 人混み・買い物の悩み -->
      <div class="empathy-card fade-in">
        <div class="problem-side">
          <div class="problem-icon">😔</div>
          <h3>人混み・買い物の悩み</h3>
          <p>友達との買い物、荷物の重さで周りのペースに合わせるのが大変…</p>
        </div>
        <div class="solution-side">
          <div class="solution-icon">🛍️</div>
          <h3>こう変わります</h3>
          <p>荷物のことは忘れ、会話やショッピングに心の底から集中できます。</p>
        </div>
      </div>

      <!-- カード4: 精神的な悩み -->
      <div class="empathy-card fade-in">
        <div class="problem-side">
          <div class="problem-icon">😟</div>
          <h3>精神的な悩み</h3>
          <p>「迷惑をかけたくない」という気持ちが、外出そのものを億劫にさせる…</p>
        </div>
        <div class="solution-side">
          <div class="solution-icon">✨</div>
          <h3>こう変わります</h3>
          <p>移動の負担が自信に変わり、行きたい場所に、行きたい時に行けるように。</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### CSS

```css
.empathy-section {
  padding: var(--spacing-xl) 0;
  background: var(--color-bg);
}

.empathy-title {
  text-align: center;
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
}

.empathy-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-md);
}

.empathy-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.empathy-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.problem-side {
  padding: var(--spacing-md);
  background: #f0f0f0;
  text-align: center;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.problem-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-sm);
  opacity: 0.7;
}

.pictogram {
  width: 80px;
  height: 80px;
  margin-bottom: var(--spacing-sm);
  object-fit: contain;
}

.problem-side h3 {
  font-size: 1.3rem;
  color: #666;
  margin-bottom: var(--spacing-sm);
}

.problem-side p {
  color: #777;
  line-height: 1.6;
  font-size: 0.95rem;
}

.solution-side {
  padding: var(--spacing-md);
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  text-align: center;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.solution-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-sm);
}

.solution-side h3 {
  font-size: 1.3rem;
  color: #2e7d32;
  margin-bottom: var(--spacing-sm);
}

.solution-side p {
  color: #1b5e20;
  line-height: 1.6;
  font-size: 0.95rem;
  font-weight: 500;
}

/* スタガードアニメーション */
.empathy-card:nth-child(1) {
  transition-delay: 0.1s;
}

.empathy-card:nth-child(2) {
  transition-delay: 0.2s;
}

.empathy-card:nth-child(3) {
  transition-delay: 0.3s;
}

.empathy-card:nth-child(4) {
  transition-delay: 0.4s;
}

/* レスポンシブ */
@media (max-width: 768px) {
  .empathy-section {
    padding: var(--spacing-lg) 0;
  }

  .empathy-title {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-md);
  }

  .empathy-cards {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }

  .problem-side,
  .solution-side {
    padding: var(--spacing-sm);
    min-height: 200px;
  }

  .problem-icon,
  .solution-icon {
    font-size: 2.5rem;
  }
}
```

## 完了条件

- [x] 共感セクションが実装されている
- [x] 4つのカードが正しく表示されている
- [x] Before/Afterの対比が視覚的に明確
- [ ] ピクトグラム画像が表示されている（020で実装予定）
- [x] ホバーエフェクトが動作している
- [x] スクロールアニメーションが動作している（Intersection Observer）
- [x] レスポンシブ対応が完了している
- [x] アクセシビリティ（alt属性）が設定されている

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [x] 完了（ピクトグラム画像は020で追加予定）

## 備考

- 既存の `index.html` の empathy-section（18-76行目）を改良
- ピクトグラム画像は `020-asset-conversion.md` で作成
- 感情に訴えかける文言を工夫

---

最終更新: 2025-01-XX
