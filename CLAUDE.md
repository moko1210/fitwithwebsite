# FitWith コーポレートサイト モダン化改修 指示書

## 1. プロジェクトの目的
現在制作済みの5ページ構成のコーポレートWebサイトに対し、**アニメーション、タイポグラフィ、レイアウト、リッチコンテンツ**の要素を全面的に導入し、より洗練された現代的なデザインへと進化させます。

## 2. ゴール
- スクロールエフェクトやホバーエフェクトにより、ユーザー体験を向上させる。
- Webフォントの導入と余白の調整により、プロフェッショナルな印象と可読性を高める。
- 実際の写真や動画を配置できる構造にし、コンテンツの魅力を最大化する。

---

## 3. 全体的な改修指示（全ページ共通）

### 【A. Webフォントの導入】
- **Google Fontsの「Noto Sans JP」**をサイト全体に適用します。
- **すべてのHTMLファイル**（`index.html`, `mission.html`, `product.html`, `news.html`, `contact.html`）の`<head>`タグ内に、以下の`<link>`タグを追加してください。
    ```html
    <link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)">
    <link rel="preconnect" href="[https://fonts.gstatic.com](https://fonts.gstatic.com)" crossorigin>
    <link href="[https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap](https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap)" rel="stylesheet">
    ```
- **すべてのHTMLファイル**の`<style>`タグ内で、`body`のCSSを以下のように変更してください。
    ```css
    body {
        font-family: 'Noto Sans JP', sans-serif;
        line-height: 1.8; /* 行間を少し広げて読みやすくする */
        color: #333;
        background-color: #ffffff; /* 背景色を明示 */
    }
    ```

### 【B. スクロールアニメーションの実装】
- ページをスクロールした際に、各セクションが**下から上へふわっと**表示されるエフェクトを実装します。
- **すべてのHTMLファイル**の`<style>`タグ内に、以下のCSSを追加してください。
    ```css
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    .fade-in.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
    ```
- **すべてのHTMLファイル**の`<body>`の閉じタグ直前に、以下の`<script>`タグを追加してください。
    ```html
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const targets = document.querySelectorAll('.fade-in');
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            targets.forEach(target => {
                observer.observe(target);
            });
        });
    </script>
    ```
- 各ページの主要なセクション（例: `<section class="problem">`）に、`fade-in`クラスを追記してください。（例: `<section class="problem fade-in">`）

### 【C. ホバーエフェクトの強化と余白調整】
- **すべてのHTMLファイル**の`<style>`タグ内で、以下のCSS変更・追加を行ってください。
    - **ナビゲーションリンク**: `nav a` に `transform: scale(1.05);` をホバー時効果として追加し、`transition`を調整してください。
    - **ボタン**: 各ページのボタン（`.cta-button`など）にも同様のホバーエフェクトを追加してください。
    - **余白**: 主要セクションの`padding`を `80px 20px` から `100px 20px` に増やし、よりゆとりのあるレイアウトにしてください。

---

## 4. 各ページの更新指示

### 【`index.html` (トップページ)】
- **ヒーローセクションの動画化**:
    - `<div class="hero-image">` の部分を、背景で動画が自動再生される`<video>`タグに置き換えてください。動画ファイルは `videos/hero_demo.mp4` を参照するように設定してください。（※実際のファイルは後で配置）
    - 動画の上にタイトルが表示されるよう、CSSで`position`を調整してください。
- **お知らせセクションのデザイン変更**:
    - `news-highlight`セクションの背景色を `#f7fafc` から `#ffffff` に変更し、代わりに上下に細い罫線（`border-top`, `border-bottom`）を追加して、他のセクションとの区切りを明確にしてください。

### 【`mission.html` (私たちの想い)】
- **チームメンバーの写真表示**:
    - チームメンバー紹介セクション（`.team-members`）の`<div class="member-photo">顔写真</div>`の部分を、実際の画像を表示する`<img>`タグに置き換えてください。
    - 画像パスはそれぞれ`images/odai.jpg`, `images/inayoshi.jpg`, `images/watanabe.jpg`のように設定してください。（※画像ファイルは後で配置）
    - 画像が丸く表示されるように`border-radius: 50%;`と`object-fit: cover;`をCSSで指定してください。

### 【`product.html` (製品情報)】
- **機能紹介アイコンのSVG化準備**:
    - 製品の3機能を紹介するセクション（`.product-features`）のCSSで描画しているアイコン（`.feature-icon::before`など）を削除してください。
    - 代わりに、各`<div class="feature-icon">`の中に、SVGアイコンを後から挿入するためのプレースホルダーコメント``を記述してください。

### 【`news.html` (お知らせ)】
- **お知らせアイテムのデザイン**:
    - `.news-item`に`border-left: 5px solid #2563eb;`を追加して、デザインのアクセントを加えてください。

### 【`contact.html` (お問い合わせ)】
- **レイアウト調整**:
    - 連絡先メールアドレスのボタン（`.contact-email`）と、その下の補足情報（`.contact-info`）が、PC表示時に横並びになるようなレイアウトを検討・実装してください。

---
以上の指示に基づき、サイト全体のモダン化改修を行ってください。