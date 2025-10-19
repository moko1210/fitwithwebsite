# 017: contact.html - お問い合わせページ

## 概要

contact.htmlの問い合わせページを実装します。ユーザー向けのシンプルな問い合わせフォームを提供します。

## 依存関係

- **前提**: 001, 002, 003
- **ブロック**: なし

## Todo

### HTML構造
- [ ] contact.htmlファイル作成
- [ ] ヘッダー・フッター挿入
- [ ] 問い合わせフォーム

### フォーム要素
- [ ] お名前
- [ ] メールアドレス
- [ ] 問い合わせ種別（3種類）
- [ ] メッセージ
- [ ] 送信ボタン

### バリデーション
- [ ] 必須項目チェック
- [ ] メールアドレス形式チェック

### スタイリング
- [ ] フォームデザイン
- [ ] レスポンシブ対応

## 実装詳細

### HTML

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>お問い合わせ - Carry-Assist</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles/main.css">
  <link rel="stylesheet" href="styles/animations.css">
</head>
<body>
  <!-- ヘッダー -->
  <header class="site-header">
    <!-- ... -->
  </header>

  <!-- コンタクトヒーロー -->
  <section class="contact-hero">
    <div class="container">
      <h1>お問い合わせ</h1>
      <p>製品に関するご質問、デモンストレーションのご希望など、お気軽にお問い合わせください</p>
    </div>
  </section>

  <!-- コンタクトフォーム -->
  <section class="contact-form-section">
    <div class="container">
      <div class="contact-grid">
        <!-- 問い合わせ情報 -->
        <div class="contact-info">
          <div class="contact-item fade-in">
            <div class="contact-icon">📧</div>
            <h3>メールでのお問い合わせ</h3>
            <p>info@carry-assist.jp</p>
            <p class="contact-note">24時間受付</p>
          </div>

          <div class="contact-item fade-in">
            <div class="contact-icon">📍</div>
            <h3>所在地</h3>
            <p>愛知県名古屋市</p>
            <p class="contact-note">※詳細はお問い合わせください</p>
          </div>

          <div class="contact-item fade-in">
            <div class="contact-icon">⏰</div>
            <h3>営業時間</h3>
            <p>平日 9:00-18:00</p>
            <p class="contact-note">土日祝日はメール対応のみ</p>
          </div>
        </div>

        <!-- フォーム -->
        <form class="contact-form fade-in" id="contact-form">
          <div class="form-group">
            <label for="name">お名前 <span class="required">*</span></label>
            <input type="text" id="name" name="name" required>
          </div>

          <div class="form-group">
            <label for="email">メールアドレス <span class="required">*</span></label>
            <input type="email" id="email" name="email" required>
          </div>

          <div class="form-group">
            <label for="category">お問い合わせ種別 <span class="required">*</span></label>
            <select id="category" name="category" required>
              <option value="">選択してください</option>
              <option value="product">製品について</option>
              <option value="demo">デモンストレーション希望</option>
              <option value="other">その他</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">メッセージ <span class="required">*</span></label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>

          <button type="submit" class="submit-button">送信する</button>

          <div class="form-message" id="form-message"></div>
        </form>
      </div>
    </div>
  </section>

  <!-- フッター -->
  <footer class="site-footer">
    <!-- ... -->
  </footer>

  <script src="scripts/animations.js"></script>
  <script src="scripts/contact.js"></script>
</body>
</html>
```

### CSS

```css
.contact-hero {
  padding: var(--spacing-xl) 0 var(--spacing-lg);
  background: linear-gradient(135deg, var(--color-accent) 0%, #45a049 100%);
  color: var(--color-white);
  text-align: center;
}

.contact-hero h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: var(--spacing-sm);
}

.contact-hero p {
  font-size: 1.2rem;
  opacity: 0.95;
}

.contact-form-section {
  padding: var(--spacing-xl) 0;
  background: var(--color-bg);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-xl);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.contact-item {
  background: var(--color-white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.contact-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
}

.contact-item h3 {
  font-size: 1.2rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
}

.contact-item p {
  color: var(--color-text-light);
  line-height: 1.6;
}

.contact-note {
  font-size: 0.9rem;
  margin-top: var(--spacing-xs);
}

.contact-form {
  background: var(--color-white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

.form-group {
  margin-bottom: var(--spacing-md);
}

.form-group label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
  color: var(--color-text);
}

.required {
  color: #f44336;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: var(--radius-sm);
  font-size: 1rem;
  font-family: 'Noto Sans JP', sans-serif;
  transition: border-color var(--transition-base);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

.submit-button {
  width: 100%;
  padding: 15px 30px;
  background: var(--color-accent);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-sm);
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background var(--transition-base);
}

.submit-button:hover {
  background: #45a049;
}

.form-message {
  margin-top: var(--spacing-md);
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  text-align: center;
  display: none;
}

.form-message.success {
  background: #d4edda;
  color: #155724;
  display: block;
}

.form-message.error {
  background: #f8d7da;
  color: #721c24;
  display: block;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
```

### JavaScript（`scripts/contact.js`）

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // フォームデータ取得
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // バリデーション
    if (!data.name || !data.email || !data.category || !data.message) {
      showMessage('すべての必須項目を入力してください', 'error');
      return;
    }

    // メールアドレス形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showMessage('正しいメールアドレスを入力してください', 'error');
      return;
    }

    // 送信処理（実際のバックエンドに置き換え）
    // ここでは仮の成功メッセージを表示
    setTimeout(() => {
      showMessage('お問い合わせを受け付けました。ご連絡までしばらくお待ちください。', 'success');
      form.reset();
    }, 500);
  });

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    setTimeout(() => {
      formMessage.className = 'form-message';
    }, 5000);
  }
});
```

## 完了条件

- [ ] contact.htmlが作成されている
- [ ] 問い合わせフォームが表示されている
- [ ] バリデーションが動作している
- [ ] 送信ボタンが動作している（仮処理）
- [ ] レスポンシブ対応完了

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [ ] 完了

---

最終更新: 2025-01-XX
