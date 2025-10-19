# 022: SEO・アクセシビリティ対応

## 概要

SEO最適化とアクセシビリティ対応を実施します。検索エンジンでの発見性向上と、すべてのユーザーが利用できるサイトを実現します。

## 依存関係

- **前提**: 021（パフォーマンス最適化）
- **ブロック**: 023（ブラウザ互換性テスト）

## Todo

### SEO対策
- [ ] メタタグの設定（全ページ）
- [ ] OGPタグの設定
- [ ] 構造化データ（JSON-LD）
- [ ] sitemap.xml作成
- [ ] robots.txt作成

### アクセシビリティ
- [ ] セマンティックHTML
- [ ] alt属性の設定（全画像）
- [ ] aria属性の追加
- [ ] キーボード操作対応
- [ ] コントラスト比の確認

### コンテンツ最適化
- [ ] 見出し構造の最適化（h1-h6）
- [ ] 内部リンクの設定
- [ ] パンくずリストの追加（オプション）

## 実装詳細

### メタタグ（各HTMLファイルに追加）

```html
<head>
  <!-- 基本メタタグ -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Carry-Assistは、キャリーケースに後付けできるアシストユニット。階段や坂道も楽々、自由な移動を実現します。">
  <meta name="keywords" content="キャリーケース,電動アシスト,階段,坂道,高齢者,移動補助,バリアフリー">
  <meta name="author" content="FitWith Carry-Assist">

  <!-- OGPタグ -->
  <meta property="og:title" content="Carry-Assist - 自由な移動を、すべての人に">
  <meta property="og:description" content="キャリーケースに後付けできるアシストユニット。階段や坂道も楽々移動。">
  <meta property="og:image" content="https://carry-assist.jp/images/og-image.jpg">
  <meta property="og:url" content="https://carry-assist.jp/">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Carry-Assist">

  <!-- Twitterカード -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Carry-Assist - 自由な移動を、すべての人に">
  <meta name="twitter:description" content="キャリーケースに後付けできるアシストユニット">
  <meta name="twitter:image" content="https://carry-assist.jp/images/og-image.jpg">

  <!-- Canonical URL -->
  <link rel="canonical" href="https://carry-assist.jp/">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/favicon.png">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <title>Carry-Assist - 自由な移動を、すべての人に</title>
</head>
```

### 構造化データ（JSON-LD）

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Carry-Assist",
  "description": "キャリーケースに後付けできる電動アシストユニット",
  "brand": {
    "@type": "Brand",
    "name": "FitWith"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "JPY",
    "price": "78000",
    "availability": "https://schema.org/PreOrder"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "120"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FitWith",
  "url": "https://carry-assist.jp",
  "logo": "https://carry-assist.jp/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@carry-assist.jp",
    "contactType": "Customer Service",
    "areaServed": "JP",
    "availableLanguage": "Japanese"
  },
  "sameAs": [
    "https://twitter.com/carryassist",
    "https://facebook.com/carryassist"
  ]
}
</script>
```

### sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://carry-assist.jp/</loc>
    <lastmod>2024-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://carry-assist.jp/product.html</loc>
    <lastmod>2024-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://carry-assist.jp/mission.html</loc>
    <lastmod>2024-11-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://carry-assist.jp/news.html</loc>
    <lastmod>2024-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://carry-assist.jp/contact.html</loc>
    <lastmod>2024-11-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

### robots.txt

```
User-agent: *
Allow: /

Sitemap: https://carry-assist.jp/sitemap.xml
```

### アクセシビリティ改善

```html
<!-- セマンティックHTML -->
<main role="main">
  <article>
    <header>
      <h1>...</h1>
    </header>
    <section aria-labelledby="section-title">
      <h2 id="section-title">...</h2>
    </section>
  </article>
</main>

<!-- ARIA属性 -->
<nav aria-label="メインナビゲーション">
  <ul role="list">
    <li role="listitem"><a href="/">トップ</a></li>
  </ul>
</nav>

<!-- キーボード操作 -->
<button
  class="hamburger"
  aria-label="メニューを開く"
  aria-expanded="false"
  aria-controls="main-nav">
  <!-- ... -->
</button>

<!-- スキップリンク -->
<a href="#main-content" class="skip-link">メインコンテンツへスキップ</a>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-accent);
  color: var(--color-white);
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
</style>

<!-- 画像のalt属性 -->
<img src="images/prototype.jpg"
     alt="Carry-Assistプロトタイプ。キャリーケースに取り付けられた電動アシストユニット"
     loading="lazy">

<!-- フォームのラベル -->
<label for="email">メールアドレス</label>
<input type="email" id="email" name="email" required aria-required="true">

<!-- エラーメッセージ -->
<input
  type="email"
  id="email"
  aria-describedby="email-error"
  aria-invalid="true">
<span id="email-error" role="alert">正しいメールアドレスを入力してください</span>
```

### コントラスト比チェック

```css
/* WCAG AA準拠（コントラスト比 4.5:1以上） */
:root {
  --color-text: #333333;        /* on white: 12.6:1 ✓ */
  --color-text-light: #666666;  /* on white: 5.7:1 ✓ */
  --color-accent: #4CAF50;      /* on white: 3.0:1 ✗ */
  /* アクセント色はテキストに使わず、背景やボーダーに使用 */
}

/* ボタンのコントラスト */
.cta-button.primary {
  background: #4CAF50;
  color: #ffffff; /* on #4CAF50: 3.3:1 - 大きいテキストならOK */
}
```

### 見出し構造の最適化

```html
<!-- 正しい見出し階層 -->
<h1>Carry-Assist - トップページ</h1> <!-- ページに1つだけ -->
  <h2>製品の特徴</h2>
    <h3>アシスト機構</h3>
    <h3>3輪タイヤ</h3>
  <h2>お客様の声</h2>
    <h3>70代女性</h3>
```

## 完了条件

- [ ] すべてのページにメタタグが設定されている
- [ ] OGPタグが設定されている
- [ ] 構造化データが実装されている
- [ ] sitemap.xmlが作成されている
- [ ] robots.txtが作成されている
- [ ] すべての画像にalt属性が設定されている
- [ ] ARIA属性が適切に設定されている
- [ ] キーボード操作が可能
- [ ] コントラスト比がWCAG AA準拠
- [ ] Lighthouse Accessibilityスコア90以上

## SEOチェックリスト

- [ ] ページタイトルが適切（50-60文字）
- [ ] メタディスクリプションが適切（120-160文字）
- [ ] h1タグがページに1つ
- [ ] 見出し階層が正しい
- [ ] 内部リンクが適切
- [ ] 画像にalt属性
- [ ] モバイルフレンドリー
- [ ] ページ速度が良好

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [ ] 完了

---

最終更新: 2025-01-XX
