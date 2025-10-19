# FitWith Carry-Assist プロダクトマーケティングサイト

> すべての人が、自分のタイミングで・自力で・自由に移動できる世界へ

## 📋 プロジェクト概要

Carry-Assistは、愛用のキャリーケースに後付けできる電動アシスト装置です。階段や坂道での移動を楽に、安全にするための革新的な製品です。

このプロジェクトは、Carry-Assistの**プロダクトマーケティングサイト**であり、ターゲット顧客（足腰に不安のある方やそのご家族）への**共感と信頼の獲得**、そして**購入行動への導線**を目的としています。

### プロジェクトの特徴

- ✅ **Three.js 3D可視化**: 製品を360°インタラクティブに体験
- ✅ **ユーザー視点の共感設計**: 悩みに寄り添うコンテンツ
- ✅ **モバイルファースト**: レスポンシブデザインで全デバイス対応
- ✅ **アクセシビリティ重視**: キーボード操作、ARIA属性完備
- ✅ **パフォーマンス最適化**: Intersection Observer、遅延読み込み

---

## 🎯 プロジェクトの目的

1. **ターゲットユーザー**
   - 階段や段差の移動に不安を感じる高齢者
   - 障がいをお持ちの方
   - キャリーケースを日常的に使用される方
   - そのご家族や介護者

2. **ビジネス目標**
   - 問い合わせ率 20%向上
   - 平均滞在時間 2倍
   - 直帰率 30%削減
   - コンバージョン率 15%向上

---

## 🏗️ サイト構成

### 実装済みページ

1. **`index.html`** - トップページ（LP）
   - Hero Section（ヒーロー）
   - Empathy Section（悩みへの共感）
   - 3D Experience Section（360°製品体験）
   - Joy Section（喜びの体験）
   - Features Section（特徴）
   - Pricing Section（価格）

2. **`product.html`** - 製品詳細（未実装）
3. **`mission.html`** - 開発ストーリー（未実装）
4. **`news.html`** - お知らせ（未実装）
5. **`contact.html`** - お問い合わせ（未実装）

---

## 🚀 環境構築

### 必要な環境

- **Webブラウザ**: Chrome, Firefox, Safari, Edge（最新2バージョン）
- **開発環境**: VS Code推奨
- **ローカルサーバー**: Live Server拡張機能 または `python -m http.server`

### セットアップ手順

```bash
# 1. リポジトリのクローン
git clone https://github.com/moko1210/fitwithwebsite.git
cd fitwithwebsite

# 2. ローカルサーバーで起動（Python使用の場合）
python -m http.server 8000

# または VS Code Live Server拡張機能を使用
# index.htmlを右クリック → "Open with Live Server"
```

ブラウザで `http://localhost:8000` にアクセスすると、サイトが表示されます。

---

## 📂 プロジェクト構成

```
FitWith_CarryAssist/
├── index.html                  # トップページ ✅
├── product.html               # 製品詳細 ⏸️
├── mission.html               # 開発ストーリー ⏸️
├── news.html                  # お知らせ ⏸️
├── contact.html               # お問い合わせ ⏸️
├── README.md                  # このファイル
├── CLAUDE.md                  # 統合開発指示書
├── ASSET_SETUP.md             # 素材変換ガイド
│
├── styles/                    # スタイルシート
│   ├── main.css              # デザインシステム + Joy Section ✅
│   ├── animations.css        # 30+アニメーション定義 ✅
│   ├── header-footer.css     # ヘッダー/フッター ✅
│   ├── hero.css              # ヒーローセクション ✅
│   ├── three-viewer.css      # 3Dビューワー専用 ✅
│   └── styles.css            # 既存スタイル（統合予定）
│
├── scripts/                   # JavaScript
│   ├── main.js               # メイン機能 ✅
│   ├── three-viewer.js       # Three.js 3D実装 ✅
│   └── hotspots.js           # ホットスポット機能 ✅
│
├── images/                    # 画像素材
│   ├── character_icon.png    # キャラクターアイコン ✅
│   ├── prototype.jpg         # プロトタイプ写真 ✅
│   └── (その他、020で追加予定)
│
├── docs/                      # チケット管理
│   ├── 000-ticket-overview.md
│   ├── 001-design-system.md   ✅
│   ├── 002-common-header-footer.md ✅
│   ├── 003-responsive-design.md ✅
│   ├── 004-index-hero.md      ✅
│   ├── 005-index-empathy.md   ✅
│   ├── 006-threejs-core.md    ✅
│   ├── 007-index-3d-experience.md ✅
│   ├── 008-index-joy.md       ✅
│   └── ... (009-023)
│
└── src/                       # 変換前素材
    ├── プロトタイプ.heic
    ├── geminiで作ったキャラクター.jpg
    └── 【完成に向けて】 STAPS最終ピッチ.pdf
```

---

## 🎨 技術スタック

### フロントエンド

- **HTML5**: セマンティックマークアップ
- **CSS3**: CSS Grid, Flexbox, CSS Variables
- **JavaScript (ES6+)**: モダンなバニラJS
- **Three.js r128**: 3Dグラフィックスライブラリ（CDN）

### デザインシステム

```css
/* カラーパレット */
--color-primary: #2563eb;      /* プライマリ（信頼） */
--color-secondary: #38a169;    /* セカンダリ（成長） */
--color-accent: #4CAF50;       /* アクセント（強調） */
--color-bg: #f8f9fa;           /* 背景 */
--color-text: #333333;         /* テキスト */

/* タイポグラフィ */
--font-family: 'Noto Sans JP', sans-serif;
--font-size-base: 1rem;
--line-height-base: 1.8;

/* スペーシング */
--spacing-xs: 0.5rem;  /* 8px */
--spacing-sm: 1rem;    /* 16px */
--spacing-md: 2rem;    /* 32px */
--spacing-lg: 4rem;    /* 64px */
--spacing-xl: 6rem;    /* 96px */
```

### レスポンシブブレークポイント

- **モバイル**: `< 768px`
- **タブレット**: `768px - 1199px`
- **デスクトップ**: `≥ 1200px`

---

## ✅ 実装済み機能（チケット 001-008）

### 001: デザインシステム ✅

**ファイル**: `styles/main.css` (886行)

- CSS Variables（カラー、タイポグラフィ、スペーシング、シャドウ）
- グリッドシステム（grid-2, grid-3, grid-4, grid-auto-fit）
- ボタンスタイル（primary, secondary, outline）
- カードコンポーネント
- ユーティリティクラス（flex, text, spacing）
- レスポンシブヘルパー
- アクセシビリティ対応

### 002: 共通ヘッダー/フッター ✅

**ファイル**: `styles/header-footer.css`, `scripts/main.js`

- **ヘッダー**
  - Stickyヘッダー（スクロール時に影追加）
  - レスポンシブナビゲーション
  - ハンバーガーメニュー（モバイル対応）
  - オーバーレイ + ESCキー対応
  - 現在ページのハイライト

- **フッター**
  - 4カラムグリッドレイアウト
  - ソーシャルリンク
  - 著作権表示

### 003: レスポンシブ設計基盤 ✅

**ファイル**: `styles/main.css`

- モバイルファーストアプローチ
- タッチデバイス対応（`@media (hover: none)`）
- レスポンシブ画像コンテナ
- 最小タップ領域確保（44x44px）
- Picture要素によるレスポンシブ画像

### 004: ヒーローセクション ✅

**ファイル**: `styles/hero.css`, `index.html` (56-79行目)

- 背景画像 + オーバーレイ
- レスポンシブ画像（desktop/tablet/mobile）
- フルビューポート高さ（100vh）
- フェードインアニメーション（遅延設定）
- CTAボタン（3D体験セクションへのアンカー）

```html
<section class="hero-section">
  <div class="hero-image-container">
    <picture>
      <source media="(min-width: 1200px)" srcset="...">
      <img src="..." alt="Carry-Assist 使用イメージ">
    </picture>
  </div>
  <div class="hero-content">
    <h1>すべての人が、自分のタイミングで...</h1>
    <a href="#3d-experience">製品を360°体験する</a>
  </div>
</section>
```

### 005: 共感セクション ✅

**ファイル**: `index.html` (82-140行目), `scripts/main.js`

- 4つの悩みカード（Before/After形式）
- 絵文字アイコン付き
- Intersection Observerによるスクロールアニメーション
- ホバーエフェクト
- レスポンシブグリッド

**Intersection Observer実装**:
```javascript
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // パフォーマンス向上
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in, .empathy-card').forEach(el => {
    observer.observe(el);
  });
}
```

### 006: Three.js コア実装 ✅

**ファイル**: `scripts/three-viewer.js` (280行), `index.html` (309行目: CDN)

**実装内容**:
- シーン・カメラ・レンダラー設定
- ライティング（Ambient, Directional, SpotLight）
- 3Dキャリーケースモデル
  - 本体（Box）
  - ハンドル
  - 伸縮ハンドル（2本）
  - モーター部分（エミッシブ）
  - ホイール（4輪 + 特殊ホイール1輪）
  - バッテリー
- 地面 + シャドウマップ
- マウス/タッチ操作で360°回転
- スムーズ補間アニメーション
- モーター/ホイールのパルスエフェクト
- 浮遊アニメーション
- ウィンドウリサイズ対応

**3Dモデル構造**:
```javascript
createSuitcase() {
  // 本体: 1.2x1.8x0.6m
  // モーター: 緑色エミッシブ（点滅）
  // ホイール: 4輪 + 特殊ホイール（回転アニメーション）
  // 全体: スムーズな回転 + 浮遊効果
}
```

### 007: 3D体験セクション ✅

**ファイル**: `styles/three-viewer.css`, `scripts/hotspots.js`, `index.html` (143-191行目)

**実装機能**:

1. **ホットスポット機能**
   - モーター（⚡ アシスト機構）
   - ホイール（🎯 多方向移動タイヤ）
   - ブレーキ（🛡️ 安全ブレーキ）
   - クリック/ホバーでポップアップ表示
   - キーボード操作対応（Enter, ESC）
   - パルスアニメーション
   - ARIAラベル（アクセシビリティ）

2. **背景アニメーション**
   - SVGパス（困難な道 → スムーズな道）
   - マウス移動に連動した透明度変化

3. **インタラクションヒント**
   - フェードイン/アウトアニメーション
   - モバイル/デスクトップ別表示

**ホットスポットJavaScript**:
```javascript
hotspot.addEventListener('click', (e) => {
  e.stopPropagation();
  // 他のホットスポットを閉じる
  hotspots.forEach(other => {
    if (other !== hotspot) other.classList.remove('active');
  });
  hotspot.classList.toggle('active');
});

// ESCキーで全て閉じる
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hotspots.forEach(h => h.classList.remove('active'));
  }
});
```

### 008: 喜びの体験セクション ✅

**ファイル**: `styles/main.css` (745-885行目), `index.html` (194-244行目)

**実装内容**:
- 3つの喜びカード
  - 🚶‍♀️ 坂道も階段も、まるで平地のように
  - 🛡️ 安心のブレーキで、下り坂も怖くない
  - 🔧 工具不要！わずか3分で取り付け
- 実写画像（prototype.jpg + プレースホルダー2枚）
- ホバー時の画像ズームエフェクト
- 3D体験/製品詳細へのリンク
- レスポンシブグリッド（auto-fit）

**カードホバーエフェクト**:
```css
.joy-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.joy-card:hover .joy-image img {
  transform: scale(1.1);
}

.view-3d-link:hover::after {
  width: 100%; /* 下線アニメーション */
}
```

---

## 🎬 アニメーションシステム

**ファイル**: `styles/animations.css` (540+行)

### 実装済みアニメーション（30+種類）

```css
/* フェードイン系 */
.fade-in, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right

/* スケール系 */
.scale-in, .scale-in-up, .scale-in-down

/* スライド系 */
.slide-in-up, .slide-in-down, .slide-in-left, .slide-in-right

/* 回転系 */
.rotate-in, .rotate-scale-in

/* 特殊系 */
.flip-in-x, .flip-in-y, .pulse, .bounce, .shake, .heartbeat, .shimmer, .gradient-animate
```

### 遅延クラス
```css
.delay-100, .delay-200, .delay-300, .delay-400, .delay-500, .delay-600, .delay-700, .delay-800
```

### 速度調整
```css
.animation-fast, .animation-slow
```

### アクセシビリティ対応
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🎯 パフォーマンス最適化

### 実装済み

1. **Intersection Observer**
   - スクロールアニメーションの遅延実行
   - 表示後の自動unobserve（メモリ節約）

2. **画像最適化**
   - `loading="lazy"` 属性
   - Picture要素によるレスポンシブ画像
   - WebP形式への変換予定（チケット020）

3. **CSS最適化**
   - CSS Variablesで一元管理
   - モジュール化されたスタイルシート
   - メディアクエリの効率的な使用

4. **JavaScript最適化**
   - イベントリスナーの適切な管理
   - デバウンス/スロットル関数（main.js）
   - `passive: true` によるスクロールパフォーマンス向上

---

## 🔧 開発の進め方

### チケット駆動開発

このプロジェクトは**23個のチケット**で管理されています（`docs/`フォルダ）。

```
000-ticket-overview.md     # 全体概要と依存関係図
001-design-system.md       ✅ 完了
002-common-header-footer.md ✅ 完了
003-responsive-design.md   ✅ 完了
004-index-hero.md          ✅ 完了
005-index-empathy.md       ✅ 完了
006-threejs-core.md        ✅ 完了
007-index-3d-experience.md ✅ 完了
008-index-joy.md           ✅ 完了
009-index-testimonial-cta.md ⏸️ 未着手
010-product-page.md        ⏸️ 未着手
...
023-browser-testing.md     ⏸️ 未着手
```

### 開発フロー

1. **チケット選択**: `docs/`から次のチケットを選択
2. **実装**: HTML/CSS/JavaScriptを実装
3. **テスト**: ブラウザで動作確認
4. **ドキュメント更新**: チケット内のTodoを[x]に更新
5. **コミット**: Gitでコミット・プッシュ

### Git運用

```bash
# 作業ブランチで開発
git checkout -b feature/ticket-XXX

# 実装後にコミット
git add .
git commit -m "実装: チケットXXX - 機能名"

# メインブランチにマージ
git checkout main
git merge feature/ticket-XXX
git push origin main
```

---

## 🎨 デザインガイドライン

### カラー使用方針

- **プライマリ（青 #2563eb）**: ナビゲーション、見出し
- **セカンダリ（緑 #38a169）**: アクセント、ハイライト
- **アクセント（緑 #4CAF50）**: CTA、ボタン、3Dエミッシブ

### タイポグラフィ

```
h1: clamp(2rem, 5vw, 3.5rem)
h2: clamp(1.8rem, 4vw, 2.5rem)
h3: clamp(1.3rem, 3vw, 1.5rem)
本文: 1rem (16px)
行間: 1.8
```

### スペーシング

```
セクション間: 6rem (96px)
要素間（大）: 4rem (64px)
要素間（中）: 2rem (32px)
要素間（小）: 1rem (16px)
```

---

## 🧪 テスト環境

### 推奨ブラウザ

- ✅ Chrome（最新2バージョン）
- ✅ Firefox（最新2バージョン）
- ✅ Safari（最新2バージョン）
- ✅ Edge（最新2バージョン）
- ⚠️ IE11は非対応

### テスト項目

- [ ] モバイル（375px, 414px）
- [ ] タブレット（768px, 1024px）
- [ ] デスクトップ（1920px, 2560px）
- [ ] キーボード操作
- [ ] スクリーンリーダー対応
- [ ] パフォーマンス（Lighthouse）

---

## 📦 今後の実装予定

### 高優先度（チケット009-012）

- **009**: index.html - 顧客の声 + CTAセクション
- **010**: product.html - 製品詳細ページ
- **011**: product.html - インタラクティブ機能紹介
- **012**: mission.html - 開発ストーリーページ

### 中優先度（チケット013-019）

- **013-015**: news.html, contact.html
- **016-019**: スクロールアニメーション、ホバーエフェクト

### 低優先度（チケット020-023）

- **020**: 画像素材変換（HEIC→JPG, PDF抽出）
- **021-023**: パフォーマンス最適化、SEO、ブラウザテスト

---

## 🐛 既知の課題

1. **画像素材**
   - `brake-demo.jpg`, `easy-install.jpg` はプレースホルダー使用中
   - チケット020で実画像に置き換え予定

2. **動画素材**
   - MOVファイルのMP4変換が未完了
   - `ffmpeg`による変換作業が必要

3. **SEO対策**
   - meta description未設定
   - OGP未設定
   - チケット022で実装予定

---

## 📚 参考資料

### プロジェクトドキュメント

- `CLAUDE.md` - 統合開発指示書（技術仕様）
- `ASSET_SETUP.md` - 素材変換ガイド
- `docs/000-ticket-overview.md` - チケット一覧と依存関係

### 外部ライブラリ

- [Three.js r128 Documentation](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Google Fonts - Noto Sans JP](https://fonts.google.com/specimen/Noto+Sans+JP)

---

## 👥 開発チーム

- **企画**: 小代氏（代表）
- **開発支援**: Claude Code（Anthropic）

---

## 📝 ライセンス

© 2025 FitWith Carry-Assist. All Rights Reserved.

---

## 🚀 クイックスタート

```bash
# 1. クローン
git clone https://github.com/moko1210/fitwithwebsite.git
cd fitwithwebsite

# 2. ローカルサーバー起動
python -m http.server 8000

# 3. ブラウザで確認
# http://localhost:8000

# 4. 開発開始
# VS CodeでフォルダーをOpen
# index.htmlを編集してリロード
```

---

## 📞 お問い合わせ

プロジェクトに関する質問は、GitHubのIssuesでお願いします。

https://github.com/moko1210/fitwithwebsite/issues

---

**最終更新**: 2025-01-19
**バージョン**: v0.8.0（チケット001-008完了）
