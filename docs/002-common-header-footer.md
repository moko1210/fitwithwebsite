# 002: 共通ヘッダー/フッター/ナビゲーション

## 概要

全ページで共通使用するヘッダー、フッター、ナビゲーションを実装します。一貫したサイト構造とユーザビリティを確保します。

## 依存関係

- **前提**: 001（デザインシステム）
- **ブロック**: 004, 005, 007, 008, 009, 010, 012, 013, 014, 015, 016, 017

## Todo

### ヘッダー実装
- [x] ヘッダーHTML構造の作成
- [x] ロゴ配置エリア
- [x] ナビゲーションメニュー
  - [x] トップ（index.html）
  - [x] 製品詳細（product.html）
  - [x] 開発ストーリー（mission.html）
  - [x] お知らせ（news.html）
  - [x] お問い合わせ（contact.html）
- [x] ハンバーガーメニュー（モバイル対応）
- [x] スクロール時のヘッダー固定（sticky）

### フッター実装
- [x] フッターHTML構造の作成
- [x] 4列グリッドレイアウト
  - [x] 製品情報リンク
  - [x] サポートリンク
  - [x] 企業情報リンク
  - [x] SNSリンク
- [x] コピーライト表記
- [x] 法的情報リンク（プライバシーポリシー、利用規約、特定商取引法）

### レスポンシブ対応
- [x] デスクトップ表示（1200px以上）
- [x] タブレット表示（768px-1199px）
- [x] モバイル表示（768px未満）
- [x] ハンバーガーメニューのアニメーション

## 実装詳細

### ヘッダー構造

```html
<header class="site-header">
  <div class="container">
    <div class="header-content">
      <div class="logo">
        <a href="index.html">
          <h1>Carry-Assist</h1>
        </a>
      </div>

      <nav class="main-nav">
        <ul class="nav-list">
          <li><a href="index.html" class="nav-link">トップ</a></li>
          <li><a href="product.html" class="nav-link">製品詳細</a></li>
          <li><a href="mission.html" class="nav-link">開発ストーリー</a></li>
          <li><a href="news.html" class="nav-link">お知らせ</a></li>
          <li><a href="contact.html" class="nav-link cta">お問い合わせ</a></li>
        </ul>
      </nav>

      <button class="hamburger" aria-label="メニュー" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
</header>
```

### ヘッダースタイル

```css
.site-header {
  background: var(--color-white);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: box-shadow var(--transition-base);
}

.site-header.scrolled {
  box-shadow: var(--shadow-md);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo h1 {
  font-size: 1.5rem;
  margin: 0;
  color: var(--color-primary);
}

.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  transition: color var(--transition-base);
}

.nav-link:hover {
  color: var(--color-accent);
}

.nav-link.cta {
  background: var(--color-accent);
  color: var(--color-white);
  padding: 0.5rem 1.5rem;
  border-radius: var(--radius-sm);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background: var(--color-text);
  transition: all var(--transition-base);
}

/* モバイル対応 */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .main-nav {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--color-white);
    transform: translateY(-100%);
    opacity: 0;
    transition: all var(--transition-base);
    box-shadow: var(--shadow-md);
  }

  .main-nav.active {
    transform: translateY(0);
    opacity: 1;
  }

  .nav-list {
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
  }
}
```

### フッター構造

```html
<footer class="site-footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <h4>製品情報</h4>
        <ul>
          <li><a href="product.html#features">特徴・機能</a></li>
          <li><a href="product.html#specs">製品仕様</a></li>
          <li><a href="product.html#faq">よくある質問</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>サポート</h4>
        <ul>
          <li><a href="manual.html">取扱説明書</a></li>
          <li><a href="warranty.html">保証について</a></li>
          <li><a href="repair.html">修理・メンテナンス</a></li>
          <li><a href="contact.html">お問い合わせ</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>企業情報</h4>
        <ul>
          <li><a href="mission.html">開発ストーリー</a></li>
          <li><a href="news.html">お知らせ</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>フォローする</h4>
        <div class="social-links">
          <a href="#" aria-label="Twitter">Twitter</a>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Instagram">Instagram</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 FitWith Carry-Assist. All rights reserved.</p>
      <div class="footer-links">
        <a href="privacy.html">プライバシーポリシー</a>
        <a href="terms.html">利用規約</a>
        <a href="legal.html">特定商取引法に基づく表記</a>
      </div>
    </div>
  </div>
</footer>
```

### JavaScript（ハンバーガーメニュー）

```javascript
// scripts/main.js に追加
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.main-nav');

  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('active');
  });

  // スクロール時のヘッダー変化
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
```

## 完了条件

- [x] ヘッダーが全5ページで統一表示されている（CSSとJS実装完了）
- [x] ナビゲーションリンクが正しく機能している
- [x] ハンバーガーメニューがモバイルで動作している
- [x] フッターが全ページで統一表示されている（CSS実装完了）
- [x] レスポンシブ対応が完了している
- [x] アクセシビリティ（aria属性）が設定されている
- [x] スクロール時のヘッダー固定が動作している

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [x] 完了

## 備考

- 既存のフッター（`index.html:185-232`）を参考に拡張
- ロゴ画像がある場合は、テキストをimg要素に置き換え
- アクティブページの強調表示（current class）も検討

---

最終更新: 2025-01-XX
