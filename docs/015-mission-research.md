# 015: mission.html - Before/After比較・調査結果

## 概要

mission.htmlにBefore/After画像比較と調査結果セクションを追加します。製品の効果を視覚的に示します。

## 依存関係

- **前提**: 014（開発ストーリー）, 020（画像素材変換）
- **ブロック**: なし

## Todo

### Before/Afterセクション
- [ ] セクションタイトル
- [ ] 画像比較（2カラム）
- [ ] 説明文

### 調査結果セクション
- [ ] セクションタイトル
- [ ] 調査データの可視化
- [ ] チャート表示

## 実装詳細

### HTML（mission.htmlに追加）

```html
<!-- Before/After比較 -->
<section class="before-after">
  <div class="container">
    <h2 class="section-title fade-in">製品がない場合 vs ある場合</h2>

    <div class="comparison-images">
      <div class="comparison-image fade-in">
        <h3>Before: 製品なし</h3>
        <img src="images/before-stairs.jpg" alt="製品なしでの階段移動" loading="lazy">
        <p class="comparison-caption">階段を上るだけで、これだけの労力が…</p>
      </div>

      <div class="comparison-image fade-in">
        <h3>After: Carry-Assist使用</h3>
        <img src="images/after-stairs.jpg" alt="製品使用時の階段移動" loading="lazy">
        <p class="comparison-caption">スムーズに、安全に昇降できます</p>
      </div>
    </div>
  </div>
</section>

<!-- 調査結果 -->
<section class="research-section">
  <div class="container">
    <h2 class="section-title fade-in">80%の方が「自力で移動したい」</h2>

    <div class="research-chart fade-in">
      <div class="chart-bar">
        <div class="chart-bar-fill" style="width: 80%;">
          <span class="chart-label">80%</span>
        </div>
      </div>
      <p class="chart-description">自力で移動したいと回答</p>
    </div>

    <p class="research-text fade-in">
      同じ悩みを持つ多くの方々の声が、開発の原動力になりました。<br>
      私たちは、これからも皆様の声に耳を傾け、より良い製品を提供し続けます。
    </p>

    <div class="research-stats">
      <div class="stat-card fade-in">
        <div class="stat-number">87.6%</div>
        <p class="stat-label">ポジティブな感想</p>
      </div>

      <div class="stat-card fade-in">
        <div class="stat-number">92%</div>
        <p class="stat-label">再購入意向</p>
      </div>

      <div class="stat-card fade-in">
        <div class="stat-number">4.5/5</div>
        <p class="stat-label">総合満足度</p>
      </div>
    </div>
  </div>
</section>
```

### CSS

```css
.before-after {
  padding: var(--spacing-xl) 0;
  background: var(--color-white);
}

.comparison-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.comparison-image {
  text-align: center;
}

.comparison-image h3 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-text);
}

.comparison-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-sm);
}

.comparison-caption {
  font-size: 1rem;
  color: var(--color-text-light);
  font-style: italic;
}

.research-section {
  padding: var(--spacing-xl) 0;
  background: var(--color-bg);
  text-align: center;
}

.research-chart {
  max-width: 600px;
  margin: var(--spacing-lg) auto;
}

.chart-bar {
  width: 100%;
  height: 60px;
  background: #e9ecef;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: var(--spacing-sm);
}

.chart-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent) 0%, #45a049 100%);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: var(--spacing-md);
  transition: width 1.5s ease;
}

.chart-label {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-white);
}

.chart-description {
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin-top: var(--spacing-sm);
}

.research-text {
  font-size: 1.2rem;
  line-height: 2;
  margin: var(--spacing-lg) auto;
  max-width: 700px;
  color: var(--color-text);
}

.research-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.stat-card {
  background: var(--color-white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.stat-number {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: var(--color-accent);
  margin-bottom: var(--spacing-sm);
}

.stat-label {
  font-size: 1.1rem;
  color: var(--color-text-light);
}

@media (max-width: 768px) {
  .comparison-images {
    grid-template-columns: 1fr;
  }

  .comparison-image img {
    height: 300px;
  }

  .research-stats {
    grid-template-columns: 1fr;
  }
}
```

### JavaScript（アニメーション）

```javascript
// チャートバーのアニメーション
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.chart-bar-fill');
        if (fill) {
          const targetWidth = fill.style.width;
          fill.style.width = '0%';
          setTimeout(() => {
            fill.style.width = targetWidth;
          }, 300);
        }
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('.research-chart').forEach(chart => {
    observer.observe(chart);
  });
});
```

## 完了条件

- [ ] Before/After比較セクションが実装されている
- [ ] 比較画像が表示されている
- [ ] 調査結果セクションが実装されている
- [ ] チャートバーアニメーションが動作している
- [ ] 統計カードが表示されている
- [ ] レスポンシブ対応完了

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [ ] 完了

---

最終更新: 2025-01-XX
