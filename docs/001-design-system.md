# 001: デザインシステム

## 概要

プロジェクト全体で使用するデザインシステムを構築します。カラーパレット、タイポグラフィ、共通コンポーネントスタイルを定義し、全ページで一貫したデザインを実現します。

## 依存関係

- **前提**: なし（最初に実装すべきチケット）
- **ブロック**: 002, 003, 004, 005, 006, 007, 008, 009, 010, 011, 012, 013, 014, 015, 016, 017, 018, 019

## Todo

### カラーパレット定義
- [x] CSS変数でカラーパレットを定義
  - [x] プライマリ（信頼）: `#2563eb`
  - [x] セカンダリ（成長）: `#38a169`
  - [x] アクセント（強調）: `#4CAF50`
  - [x] 背景: `#f8f9fa`
  - [x] テキスト: `#333333`

### タイポグラフィ設定
- [x] Google Fonts (Noto Sans JP) のインポート
- [x] 基本フォントスタイルの定義
  - [x] h1: 3.5rem, 700
  - [x] h2: 2.5rem, 700
  - [x] h3: 1.5rem, 400
  - [x] body: 1rem, line-height 1.8

### 共通スタイル
- [x] リセットCSS / Normalize.css
- [x] ボックスモデルの統一 (`box-sizing: border-box`)
- [x] スムーズスクロール設定

### アニメーション基盤
- [x] フェードインアニメーション (`.fade-in`)
- [x] ホバーリフトエフェクト (`.hover-lift`)
- [x] トランジション設定

### ユーティリティクラス
- [x] コンテナクラス (`.container`)
- [x] セクション共通スタイル (`.section`)
- [x] ボタンスタイル (`.cta-button`, `.btn-primary`, `.btn-secondary`)
- [x] カードスタイル (`.card`)

## 実装詳細

### ファイル構成

新規作成:
- `styles/main.css` - グローバルスタイル
- `styles/animations.css` - アニメーション定義

### CSS変数定義例

```css
:root {
  /* Colors */
  --color-primary: #2563eb;
  --color-secondary: #38a169;
  --color-accent: #4CAF50;
  --color-bg: #f8f9fa;
  --color-text: #333333;
  --color-text-light: #666666;
  --color-white: #ffffff;

  /* Typography */
  --font-family: 'Noto Sans JP', sans-serif;
  --font-size-base: 1rem;
  --line-height-base: 1.8;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 15px;
  --radius-lg: 20px;

  /* Shadows */
  --shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 5px 20px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.12);

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.8s ease;
}
```

### タイポグラフィ

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap');

body {
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  color: var(--color-text);
  background-color: var(--color-bg);
}

h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.2;
  margin-bottom: var(--spacing-md);
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.3;
  margin-bottom: var(--spacing-md);
}

h3 {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-text);
  line-height: 1.4;
  margin-bottom: var(--spacing-sm);
}

/* レスポンシブタイポグラフィ */
@media (max-width: 768px) {
  h1 { font-size: 2rem; }
  h2 { font-size: 1.8rem; }
  h3 { font-size: 1.3rem; }
}
```

### アニメーション

```css
/* Fade In Animation */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity var(--transition-slow), transform var(--transition-slow);
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hover Lift Effect */
.hover-lift {
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}
```

### ボタンスタイル

```css
.cta-button {
  display: inline-block;
  padding: 15px 40px;
  border-radius: var(--radius-sm);
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  transition: all var(--transition-base);
  cursor: pointer;
  border: 2px solid transparent;
}

.cta-button.primary {
  background: var(--color-accent);
  color: var(--color-white);
}

.cta-button.primary:hover {
  background: #45a049;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
}

.cta-button.secondary {
  background: var(--color-white);
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.cta-button.secondary:hover {
  background: var(--color-accent);
  color: var(--color-white);
}
```

## 完了条件

- [x] `styles/main.css` が作成され、全CSS変数が定義されている
- [x] `styles/animations.css` が作成され、基本アニメーションが定義されている
- [x] タイポグラフィが正しく設定されている
- [x] レスポンシブ対応のメディアクエリが含まれている
- [x] 共通ボタン・カードスタイルが使用可能
- [x] 他の開発者が参照できるドキュメントコメントが含まれている

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [x] 完了

## 備考

- 既存の `styles.css` からの移行も検討
- CSS変数を活用することで、後のテーマ変更が容易に
- アクセシビリティ（コントラスト比）に配慮したカラー選定

---

最終更新: 2025-01-XX
