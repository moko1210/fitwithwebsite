# 016: news.html - お知らせページ

## 概要

news.htmlのお知らせページを実装します。STAPS賞受賞など、最新情報を掲載します。

## 依存関係

- **前提**: 001, 002, 003
- **ブロック**: なし

## Todo

### HTML構造
- [ ] news.htmlファイル作成
- [ ] ヘッダー・フッター挿入
- [ ] ニュース一覧セクション

### ニュースコンテンツ
- [ ] STAPS賞受賞
- [ ] 製品リリース
- [ ] メディア掲載（3-5記事）

### スタイリング
- [ ] タイムラインデザイン
- [ ] カードレイアウト
- [ ] レスポンシブ対応

## 実装詳細

### HTML

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>お知らせ - Carry-Assist</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles/main.css">
  <link rel="stylesheet" href="styles/animations.css">
</head>
<body>
  <!-- ヘッダー -->
  <header class="site-header">
    <!-- ... -->
  </header>

  <!-- ニュースヒーロー -->
  <section class="news-hero">
    <div class="container">
      <h1>お知らせ</h1>
      <p>Carry-Assistの最新情報をお届けします</p>
    </div>
  </section>

  <!-- ニュース一覧 -->
  <section class="news-list">
    <div class="container">
      <article class="news-card fade-in">
        <div class="news-date">2024.11.15</div>
        <div class="news-category award">受賞</div>
        <h2 class="news-title">STAPS 2024 最終ピッチにて優秀賞を受賞</h2>
        <p class="news-summary">
          STAPS 2024の最終ピッチにおいて、Carry-Assistが優秀賞を受賞いたしました。
          多くの審査員の方々から高い評価をいただき、製品化に向けてさらなる弾みとなりました。
        </p>
        <a href="#" class="news-link">詳しく見る →</a>
      </article>

      <article class="news-card fade-in">
        <div class="news-date">2024.10.01</div>
        <div class="news-category release">製品</div>
        <h2 class="news-title">Carry-Assist プロトタイプ完成</h2>
        <p class="news-summary">
          長期間の開発を経て、ついにCarry-Assistのプロトタイプが完成いたしました。
          実際のユーザーテストでも好評をいただいております。
        </p>
        <a href="#" class="news-link">詳しく見る →</a>
      </article>

      <article class="news-card fade-in">
        <div class="news-date">2024.09.10</div>
        <div class="news-category media">メディア</div>
        <h2 class="news-title">NHKニュースで取り上げられました</h2>
        <p class="news-summary">
          NHKの特集番組「高齢化社会の新技術」にて、Carry-Assistが紹介されました。
        </p>
        <a href="#" class="news-link">詳しく見る →</a>
      </article>

      <article class="news-card fade-in">
        <div class="news-date">2024.08.20</div>
        <div class="news-category event">イベント</div>
        <h2 class="news-title">製品体験会を開催しました</h2>
        <p class="news-summary">
          名古屋市内で製品体験会を開催し、多くの方々に実際にCarry-Assistを体験いただきました。
        </p>
        <a href="#" class="news-link">詳しく見る →</a>
      </article>
    </div>
  </section>

  <!-- フッター -->
  <footer class="site-footer">
    <!-- ... -->
  </footer>

  <script src="scripts/animations.js"></script>
</body>
</html>
```

### CSS

```css
.news-hero {
  padding: var(--spacing-xl) 0 var(--spacing-lg);
  background: linear-gradient(135deg, var(--color-primary) 0%, #1e40af 100%);
  color: var(--color-white);
  text-align: center;
}

.news-hero h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: var(--spacing-sm);
}

.news-hero p {
  font-size: 1.2rem;
  opacity: 0.95;
}

.news-list {
  padding: var(--spacing-xl) 0;
  background: var(--color-bg);
}

.news-card {
  background: var(--color-white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-lg);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  border-left: 4px solid var(--color-accent);
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.news-date {
  font-size: 0.9rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-sm);
}

.news-category {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
}

.news-category.award {
  background: #ffd700;
  color: #333;
}

.news-category.release {
  background: #4CAF50;
  color: var(--color-white);
}

.news-category.media {
  background: #2196F3;
  color: var(--color-white);
}

.news-category.event {
  background: #FF6B6B;
  color: var(--color-white);
}

.news-title {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
}

.news-summary {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.news-link {
  display: inline-block;
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 600;
  transition: color var(--transition-base), transform var(--transition-base);
}

.news-link:hover {
  color: #45a049;
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .news-card {
    padding: var(--spacing-md);
  }

  .news-title {
    font-size: 1.3rem;
  }
}
```

## 完了条件

- [ ] news.htmlが作成されている
- [ ] ニュースカードが表示されている
- [ ] カテゴリバッジが正しく表示されている
- [ ] ホバーエフェクトが動作している
- [ ] レスポンシブ対応完了

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [ ] 完了

---

最終更新: 2025-01-XX
