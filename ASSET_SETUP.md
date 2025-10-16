# 素材変換・配置ガイド

このドキュメントでは、FitWithプロダクトサイトで使用する画像・動画素材の変換と配置手順を説明します。

## 概要

`src/` フォルダにある素材ファイルをWeb用に変換し、`images/` および `videos/` フォルダに配置する必要があります。

## 必要な変換作業

### 📸 画像ファイルの変換

#### 1. プロトタイプ画像の変換
- **元ファイル**: `src/プロトタイプ.heic`
- **変換先**: `images/prototype.jpg`
- **用途**: 製品詳細ページ、トップページの製品紹介セクション

**変換方法（Windows）**:
1. ファイルを右クリック → 「プログラムから開く」→ 「フォト」
2. 「…」メニュー → 「名前を付けて保存」→ JPG形式で `images/prototype.jpg` として保存

**変換方法（オンラインツール）**:
- [Convertio](https://convertio.co/ja/heic-jpg/) などのオンライン変換ツールを使用
- 変換後、`images/prototype.jpg` として保存

#### 2. PDFからの画像抽出

##### 階段転倒ピクトグラム
- **元ファイル**: `src/【完成に向けて】 STAPS最終ピッチ.pdf` のP.13
- **変換先**: `images/pictogram_fall.png`
- **用途**: トップページの「悩みへの共感」セクション

**抽出方法**:
1. PDFをAdobe Acrobat Readerなどで開く
2. P.13の階段で転倒するピクトグラム部分をスクリーンショット
3. 画像編集ツールで切り抜き、PNG形式で `images/pictogram_fall.png` として保存

##### 小代氏の写真
- **元ファイル**: `src/【完成に向けて】 STAPS最終ピッチ.pdf` のP.4
- **変換先**: `images/story_koshiro.jpg`
- **用途**: 開発ストーリーページ

**抽出方法**:
1. PDFをAdobe Acrobat Readerなどで開く
2. P.4の小代氏とキャリーケースの写真をスクリーンショット
3. 画像編集ツールで切り抜き、JPG形式で `images/story_koshiro.jpg` として保存

#### 3. キャラクターアイコン
- **元ファイル**: `src/geminiで作ったキャラクター.png`
- **配置先**: `images/character_icon.png` ✅ **配置済み**

---

### 🎬 動画ファイルの変換

すべての `.MOV` / `.mov` ファイルを `.mp4` 形式に変換します。

#### 変換が必要な動画ファイル一覧

| 元ファイル | 変換先 | 用途 |
|-----------|--------|------|
| `src/体験しているところ.mov` | `videos/hero_demo.mp4` | トップページのヒーローセクション |
| `src/体験しているところ2.mov` | `videos/how_to_use.mp4` | 製品詳細ページの使い方セクション |
| `src/小代階段のぼる様子.MOV` | `videos/story_before_up.mp4` | 開発ストーリーページ |
| `src/小代階段くだる様子.MOV` | `videos/story_before_down.mp4` | 開発ストーリーページ |

#### 変換方法

**方法1: VLC Media Player（無料）**
1. [VLC Media Player](https://www.videolan.org/vlc/) をダウンロード・インストール
2. VLCを起動 → 「メディア」→ 「変換/保存」
3. 「追加」で元ファイルを選択 → 「変換/保存」ボタン
4. プロファイル: 「Video - H.264 + MP3 (MP4)」を選択
5. 変換先ファイル名を指定（例: `videos/hero_demo.mp4`）
6. 「開始」をクリック

**方法2: HandBrake（無料）**
1. [HandBrake](https://handbrake.fr/) をダウンロード・インストール
2. 元ファイルをドラッグ&ドロップ
3. プリセット: 「Fast 1080p30」を選択
4. 保存先を指定（例: `videos/hero_demo.mp4`）
5. 「Start Encode」をクリック

**方法3: オンライン変換ツール**
- [CloudConvert](https://cloudconvert.com/mov-to-mp4) などを使用
- ファイルサイズが大きいため、アップロードに時間がかかる可能性があります

---

## 変換後の確認

すべての変換が完了したら、以下のファイルが配置されているか確認してください：

### images/ フォルダ
- [ ] `character_icon.png` ✅ 配置済み
- [ ] `prototype.jpg`
- [ ] `pictogram_fall.png`
- [ ] `story_koshiro.jpg`

### videos/ フォルダ
- [ ] `hero_demo.mp4`
- [ ] `how_to_use.mp4`
- [ ] `story_before_up.mp4`
- [ ] `story_before_down.mp4`

---

## 注意事項

### ⚠️ 使用しないファイル
- `src/小代愛用キャリーケース（スワニーのだからそのまま載せるのはやばいか？）.heic`
  - 他社製品のロゴが写っているため、ウェブサイトでは使用しません

### 📊 画像最適化（推奨）
変換後、以下のツールで画像を最適化することを推奨します：
- [TinyPNG](https://tinypng.com/) - PNG/JPG圧縮
- [Squoosh](https://squoosh.app/) - 画像最適化

### ♿ アクセシビリティ
HTMLファイル内のすべての画像には、適切な `alt` 属性が設定されています。

---

## トラブルシューティング

### Q: HEICファイルが開けない
**A**: Windows 10/11の場合、Microsoft Storeから「HEIF 画像拡張機能」をインストールしてください。

### Q: 動画ファイルが大きすぎる
**A**: HandBrakeの「Web Optimized」オプションを有効にするか、ビットレートを下げて変換してください。

### Q: 変換したファイルがサイトで表示されない
**A**:
1. ファイル名が正確に一致しているか確認
2. ファイルが正しいフォルダに配置されているか確認
3. ブラウザのキャッシュをクリアして再読み込み

---

## サポート

変換作業でお困りの場合は、CLAUDE.mdを参照するか、開発チームまでお問い合わせください。
