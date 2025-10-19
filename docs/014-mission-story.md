# 014: mission.html - 開発ストーリー

## 概要

mission.htmlの開発ストーリーページを実装します。代表の原体験を伝え、製品への信頼と共感を深めます。

## 依存関係

- **前提**: 001, 002, 003, 020（画像素材変換）
- **ブロック**: なし

## Todo

### HTML構造
- [ ] mission.htmlファイル作成
- [ ] ヘッダー・フッター挿入
- [ ] ストーリーヒーロー
- [ ] 原体験セクション

### コンテンツ
- [ ] 代表の写真とストーリー
- [ ] 開発の動機
- [ ] ビジョン

### スタイリング
- [ ] ストーリーテリングデザイン
- [ ] レスポンシブ対応

## 実装詳細

### HTML

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>開発ストーリー - Carry-Assist</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles/main.css">
  <link rel="stylesheet" href="styles/animations.css">
</head>
<body>
  <!-- ヘッダー -->
  <header class="site-header">
    <!-- ... -->
  </header>

  <!-- ストーリーヒーロー -->
  <section class="story-hero">
    <div class="container">
      <div class="story-grid">
        <div class="story-image fade-in">
          <img src="images/story_koshiro.jpg" alt="代表 小代氏とキャリーケース">
        </div>
        <div class="story-content fade-in">
          <h1>「自力で移動したい」<br>その想いから、すべてが始まった</h1>
          <p class="story-lead">
            代表・小代の切実な原体験が、この製品を生み出しました。<br>
            「階段が怖い」「人に迷惑をかけたくない」<br>
            そんな想いを抱える方々に、自由な移動を届けたい。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 原体験セクション -->
  <section class="origin-section">
    <div class="container">
      <h2 class="section-title fade-in">なぜ、この製品を作ったのか</h2>

      <div class="origin-story">
        <p class="origin-text fade-in">
          代表の小代は、日常的にキャリーケースを使用する中で、
          階段や坂道での困難さを痛感していました。
          特に、階段での転倒リスクは命に関わる問題であり、
          多くの人が同じ悩みを抱えていることを知りました。
        </p>

        <blockquote class="origin-quote fade-in">
          「自分の力で、自分のタイミングで移動したい。
          人に頼らず、自由に動ける世界を作りたい」
        </blockquote>

        <p class="origin-text fade-in">
          この想いが、Carry-Assistの開発の原動力となりました。
        </p>
      </div>
    </div>
  </section>

  <!-- ビジョンセクション -->
  <section class="vision-section">
    <div class="container">
      <h2 class="section-title fade-in">私たちのビジョン</h2>
      <p class="vision-text fade-in">
        すべての人が、自分のタイミングで・自力で・自由に移動できる世界を実現する。
        Carry-Assistは、その第一歩です。
      </p>

      <div class="vision-cards">
        <div class="vision-card fade-in">
          <div class="vision-icon">🌍</div>
          <h3>グローバル展開</h3>
          <p>日本だけでなく、世界中の人々に自由な移動を</p>
        </div>

        <div class="vision-card fade-in">
          <div class="vision-icon">🔬</div>
          <h3>技術革新</h3>
          <p>より軽く、より強く、より使いやすく</p>
        </div>

        <div class="vision-card fade-in">
          <div class="vision-icon">🤝</div>
          <h3>共創</h3>
          <p>ユーザーの声を聞き、共に進化する</p>
        </div>
      </div>
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
.story-hero {
  padding: var(--spacing-xl) 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  align-items: center;
}

.story-image img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
}

.story-content h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: var(--spacing-md);
  line-height: 1.3;
}

.story-lead {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--color-text-light);
}

.origin-section {
  padding: var(--spacing-xl) 0;
  background: var(--color-white);
}

.origin-story {
  max-width: 800px;
  margin: var(--spacing-lg) auto 0;
}

.origin-text {
  font-size: 1.1rem;
  line-height: 2;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text);
}

.origin-quote {
  background: var(--color-bg);
  padding: var(--spacing-lg);
  border-left: 4px solid var(--color-accent);
  margin: var(--spacing-xl) 0;
  font-size: 1.3rem;
  font-style: italic;
  line-height: 1.8;
  color: var(--color-text);
}

.vision-section {
  padding: var(--spacing-xl) 0;
  background: var(--color-bg);
  text-align: center;
}

.vision-text {
  font-size: 1.3rem;
  line-height: 1.8;
  margin: var(--spacing-lg) 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: var(--color-text);
}

.vision-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.vision-card {
  background: var(--color-white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base);
}

.vision-card:hover {
  transform: translateY(-10px);
}

.vision-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-md);
}

.vision-card h3 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
}

.vision-card p {
  color: var(--color-text-light);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .story-grid {
    grid-template-columns: 1fr;
  }

  .vision-cards {
    grid-template-columns: 1fr;
  }
}
```

## 完了条件

- [ ] mission.htmlが作成されている
- [ ] ストーリーヒーローが実装されている
- [ ] 代表の写真が表示されている
- [ ] 原体験セクションが実装されている
- [ ] ビジョンセクションが実装されている
- [ ] レスポンシブ対応完了

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [ ] 完了

---

最終更新: 2025-01-XX
