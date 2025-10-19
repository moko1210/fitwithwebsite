# 020: 画像素材変換

## 概要

プロジェクトで使用する画像素材の変換を実施します。HEIC形式からJPGへの変換、PDFからの画像抽出、MOV動画のMP4変換を行います。

## 依存関係

- **前提**: なし（並行実施可能）
- **ブロック**: 004, 005, 008, 010, 013, 014, 015

## Todo

### HEIC → JPG変換
- [ ] `プロトタイプ.heic` → `images/prototype.jpg`
- [ ] 画像圧縮（1MB以下）
- [ ] WebP形式への変換（`images/prototype.webp`）

### PDF画像抽出
- [ ] P.13のピクトグラム → `images/pictogram_fall.png`
- [ ] P.4の代表写真 → `images/story_koshiro.jpg`
- [ ] その他必要な画像の抽出

### 動画変換（MOV → MP4）
- [ ] `小代階段くだる様子.MOV` → `videos/stairs-down.mp4`
- [ ] `小代階段のぼる様子.MOV` → `videos/stairs-up.mp4`
- [ ] `体験しているところ.mov` → `videos/demo-1.mp4`
- [ ] `体験しているところ2.mov` → `videos/demo-2.mp4`
- [ ] 動画圧縮・最適化（H.264、5MB以下推奨）

### 追加画像作成
- [ ] ヒーロー背景画像（`images/hero-background.jpg`）
  - デスクトップ: 1920x1080px
  - タブレット: 1024x768px
  - モバイル: 750x1334px
- [ ] ブレーキ機能デモ（`images/brake-demo.jpg`）
- [ ] 簡単取り付け（`images/easy-install.jpg`）
- [ ] アシスト機構詳細（`images/assist-detail.jpg`）
- [ ] 使い方3ステップ
  - `images/step1.jpg`
  - `images/step2.jpg`
  - `images/step3.jpg`
- [ ] 顧客の声シーン（`images/testimonial-scene.jpg`）
- [ ] Before/After比較
  - `images/before-stairs.jpg`
  - `images/after-stairs.jpg`

### 画像最適化
- [ ] すべての画像を圧縮（TinyPNG等を使用）
- [ ] WebP形式への変換（フォールバック用にJPGも保持）
- [ ] レスポンシブ用の複数サイズ作成
  - 小（400px幅）
  - 中（800px幅）
  - 大（1200px幅）

## 実装詳細

### 変換ツール

#### ImageMagick（推奨）

```bash
# HEIC → JPG変換
magick convert "src/プロトタイプ.heic" "images/prototype.jpg"

# JPG → WebP変換
magick convert "images/prototype.jpg" -quality 85 "images/prototype.webp"

# 画像リサイズ
magick convert "images/prototype.jpg" -resize 800x "images/prototype-800.jpg"
magick convert "images/prototype.jpg" -resize 400x "images/prototype-400.jpg"

# PDF画像抽出（特定ページ）
magick convert "src/【完成に向けて】 STAPS最終ピッチ.pdf[12]" "images/pictogram_fall.png"
magick convert "src/【完成に向けて】 STAPS最終ピッチ.pdf[3]" "images/story_koshiro.jpg"
```

#### FFmpeg（動画変換）

```bash
# MOV → MP4変換（H.264エンコード）
ffmpeg -i "src/小代階段くだる様子.MOV" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "videos/stairs-down.mp4"

ffmpeg -i "src/小代階段のぼる様子.MOV" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "videos/stairs-up.mp4"

ffmpeg -i "src/体験しているところ.mov" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "videos/demo-1.mp4"

ffmpeg -i "src/体験しているところ2.mov" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "videos/demo-2.mp4"
```

#### オンラインツール

HEIC変換:
- https://convertio.co/ja/heic-jpg/

画像圧縮:
- https://tinypng.com/
- https://squoosh.app/

WebP変換:
- https://cloudconvert.com/jpg-to-webp

### 一括変換スクリプト（Bash）

```bash
#!/bin/bash
# convert-assets.sh

echo "=== 画像変換開始 ==="

# HEIC → JPG
echo "1. HEIC → JPG変換中..."
magick convert "src/プロトタイプ.heic" -quality 90 "images/prototype.jpg"

# PDF抽出
echo "2. PDF画像抽出中..."
magick convert "src/【完成に向けて】 STAPS最終ピッチ.pdf[12]" "images/pictogram_fall.png"
magick convert "src/【完成に向けて】 STAPS最終ピッチ.pdf[3]" "images/story_koshiro.jpg"

# WebP変換
echo "3. WebP変換中..."
for file in images/*.jpg; do
  magick convert "$file" -quality 85 "${file%.jpg}.webp"
done

# レスポンシブ画像作成
echo "4. レスポンシブ画像作成中..."
for file in images/*.jpg; do
  magick convert "$file" -resize 1200x "${file%.jpg}-1200.jpg"
  magick convert "$file" -resize 800x "${file%.jpg}-800.jpg"
  magick convert "$file" -resize 400x "${file%.jpg}-400.jpg"
done

echo "=== 画像変換完了 ==="

echo "=== 動画変換開始 ==="

# MOV → MP4
echo "1. 動画変換中..."
ffmpeg -i "src/小代階段くだる様子.MOV" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "videos/stairs-down.mp4"
ffmpeg -i "src/小代階段のぼる様子.MOV" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "videos/stairs-up.mp4"
ffmpeg -i "src/体験しているところ.mov" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "videos/demo-1.mp4"
ffmpeg -i "src/体験しているところ2.mov" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "videos/demo-2.mp4"

echo "=== 動画変換完了 ==="
echo "=== すべての変換が完了しました ==="
```

### 必要な画像一覧チェックリスト

```
images/
├── ✅ character_icon.png (既存)
├── [ ] hero-background.jpg (+ WebP, responsive)
├── [ ] prototype.jpg (+ WebP, responsive)
├── [ ] pictogram_fall.png
├── [ ] story_koshiro.jpg (+ WebP, responsive)
├── [ ] brake-demo.jpg (+ WebP, responsive)
├── [ ] easy-install.jpg (+ WebP, responsive)
├── [ ] assist-detail.jpg (+ WebP, responsive)
├── [ ] step1.jpg (+ WebP, responsive)
├── [ ] step2.jpg (+ WebP, responsive)
├── [ ] step3.jpg (+ WebP, responsive)
├── [ ] testimonial-scene.jpg (+ WebP, responsive)
├── [ ] before-stairs.jpg (+ WebP, responsive)
└── [ ] after-stairs.jpg (+ WebP, responsive)

videos/
├── [ ] stairs-down.mp4
├── [ ] stairs-up.mp4
├── [ ] demo-1.mp4
└── [ ] demo-2.mp4
```

## 完了条件

- [ ] すべてのHEIC画像がJPGに変換されている
- [ ] PDFから必要な画像が抽出されている
- [ ] すべてのMOV動画がMP4に変換されている
- [ ] すべての画像がWebP形式でも用意されている
- [ ] レスポンシブ用の複数サイズ画像が作成されている
- [ ] 画像サイズが1MB以下に圧縮されている
- [ ] 動画サイズが5MB以下に最適化されている
- [ ] `images/` フォルダに全14種類の画像が揃っている
- [ ] `videos/` フォルダに全4種類の動画が揃っている

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [ ] 完了

## 備考

- **注意**: `小代愛用キャリーケース（スワニーのだからそのまま載せるのはやばいか？）.heic` は使用禁止（他社ロゴ）
- ImageMagickのインストール: https://imagemagick.org/script/download.php
- FFmpegのインストール: https://ffmpeg.org/download.html
- 画像のalt属性用のテキストも準備すること
- ファイル名は英数字とハイフンのみ使用（日本語NG）

---

最終更新: 2025-01-XX
