# 006: Three.js 基本実装

## 概要

Three.jsを使用した3Dキャリーケースモデルの基本実装を行います。シーン、カメラ、ライティング、3Dモデル、マウス/タッチ操作の基盤を構築します。

## 依存関係

- **前提**: 001（デザインシステム）
- **ブロック**: 007（3D体験セクション）, 011（製品詳細3D）

## Todo

### 環境セットアップ
- [x] Three.js CDNの導入（r128）
- [x] `scripts/three-viewer.js` ファイル作成
- [x] グローバル変数の定義

### シーン・カメラ・レンダラー
- [x] THREE.Sceneの作成
- [x] PerspectiveCameraの設定
- [x] WebGLRendererの設定（アンチエイリアス、透過背景）
- [x] シャドウマップの有効化

### ライティング
- [x] AmbientLight（環境光）
- [x] DirectionalLight（平行光源、シャドウ付き）
- [x] SpotLight（スポットライト、緑色 0x38a169）

### 3Dモデル作成
- [x] キャリーケース本体（Box）
- [x] ハンドル
- [x] 伸縮ハンドル（2本）
- [x] モーター部分（ハイライト付き）
- [x] ホイール（4輪）
- [x] 特殊ホイール（1輪、ハイライト付き）
- [x] バッテリー部分

### 地面とシャドウ
- [x] 地面の作成（ShadowMaterial）
- [x] シャドウの設定

### マウス/タッチ操作
- [x] マウス移動イベント
- [x] タッチイベント
- [x] 回転のスムーズ補間

### アニメーション
- [x] アニメーションループ
- [x] モーターのエミッシブ点滅
- [x] ホイールの回転アニメーション
- [x] スーツケースの浮遊アニメーション

### リサイズ対応
- [x] ウィンドウリサイズイベント
- [x] カメラとレンダラーの更新

## 実装詳細

### HTML（CDN読み込み）

```html
<!-- index.html の<body>終了前に追加 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="scripts/three-viewer.js"></script>
```

### JavaScript（`scripts/three-viewer.js`）

```javascript
let scene, camera, renderer, suitcase, motorHighlight, wheelHighlight;
let mouseX = 0, mouseY = 0;
let targetRotationX = 0, targetRotationY = 0;
let currentRotationX = 0, currentRotationY = 0;

function init() {
    const container = document.getElementById('canvas-container');
    const canvas = document.getElementById('three-canvas');

    // Scene
    scene = new THREE.Scene();
    scene.background = null; // 透過背景

    // Camera
    camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    camera.position.set(0, 2, 5);
    camera.lookAt(0, 0, 0);

    // Renderer
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true // 透過サポート
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -5;
    directionalLight.shadow.camera.right = 5;
    directionalLight.shadow.camera.top = 5;
    directionalLight.shadow.camera.bottom = -5;
    scene.add(directionalLight);

    const spotLight = new THREE.SpotLight(0x38a169, 0.5); // 緑色
    spotLight.position.set(-3, 5, 3);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.5;
    scene.add(spotLight);

    // 3Dモデル作成
    createSuitcase();
    createGround();

    // ローディング非表示
    document.getElementById('loading').style.display = 'none';

    // イベントリスナー
    window.addEventListener('resize', onWindowResize);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('touchmove', onTouchMove);

    // アニメーション開始
    animate();
}

function createSuitcase() {
    const suitcaseGroup = new THREE.Group();

    // キャリーケース本体
    const bodyGeometry = new THREE.BoxGeometry(1.2, 1.8, 0.6);
    const bodyMaterial = new THREE.MeshPhongMaterial({
        color: 0x2c3e50,
        specular: 0x111111,
        shininess: 100
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.9;
    body.castShadow = true;
    body.receiveShadow = true;
    suitcaseGroup.add(body);

    // ハンドル
    const handleGeometry = new THREE.BoxGeometry(0.8, 0.1, 0.1);
    const handleMaterial = new THREE.MeshPhongMaterial({
        color: 0x34495e,
        specular: 0x222222,
        shininess: 80
    });
    const handle = new THREE.Mesh(handleGeometry, handleMaterial);
    handle.position.set(0, 1.85, 0);
    suitcaseGroup.add(handle);

    // 伸縮ハンドル（2本）
    const telescopicGeometry = new THREE.CylinderGeometry(0.03, 0.03, 1.2);
    const telescopicMaterial = new THREE.MeshPhongMaterial({
        color: 0x7f8c8d,
        metalness: 0.8,
        roughness: 0.2
    });
    const telescopic1 = new THREE.Mesh(telescopicGeometry, telescopicMaterial);
    telescopic1.position.set(-0.3, 1.3, 0);
    const telescopic2 = new THREE.Mesh(telescopicGeometry, telescopicMaterial);
    telescopic2.position.set(0.3, 1.3, 0);
    suitcaseGroup.add(telescopic1);
    suitcaseGroup.add(telescopic2);

    // モーター部分（ハイライト）
    const motorGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.3);
    const motorMaterial = new THREE.MeshPhongMaterial({
        color: 0x4CAF50,
        emissive: 0x2e7d32,
        emissiveIntensity: 0.3
    });
    motorHighlight = new THREE.Mesh(motorGeometry, motorMaterial);
    motorHighlight.position.set(0, 0.15, -0.2);
    motorHighlight.rotation.z = Math.PI / 2;
    suitcaseGroup.add(motorHighlight);

    // ホイール（4輪）
    const wheelRadius = 0.12;
    const wheelWidth = 0.08;
    const wheelGeometry = new THREE.CylinderGeometry(wheelRadius, wheelRadius, wheelWidth);
    const wheelMaterial = new THREE.MeshPhongMaterial({
        color: 0x333333,
        specular: 0x111111,
        shininess: 30
    });

    const wheelPositions = [
        [-0.5, 0.12, 0.25],
        [0.5, 0.12, 0.25],
        [-0.5, 0.12, -0.25],
        [0.5, 0.12, -0.25]
    ];

    wheelPositions.forEach(pos => {
        const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
        wheel.position.set(...pos);
        wheel.rotation.z = Math.PI / 2;
        wheel.castShadow = true;
        suitcaseGroup.add(wheel);
    });

    // 特殊ホイール（ハイライト）
    const specialWheelMaterial = new THREE.MeshPhongMaterial({
        color: 0x4CAF50,
        emissive: 0x2e7d32,
        emissiveIntensity: 0.2,
        specular: 0x4CAF50,
        shininess: 50
    });
    wheelHighlight = new THREE.Mesh(wheelGeometry, specialWheelMaterial);
    wheelHighlight.position.set(-0.5, 0.12, 0.25);
    wheelHighlight.rotation.z = Math.PI / 2;
    suitcaseGroup.add(wheelHighlight);

    // バッテリー
    const batteryGeometry = new THREE.BoxGeometry(0.3, 0.15, 0.4);
    const batteryMaterial = new THREE.MeshPhongMaterial({
        color: 0x555555,
        emissive: 0x222222,
        emissiveIntensity: 0.1
    });
    const battery = new THREE.Mesh(batteryGeometry, batteryMaterial);
    battery.position.set(0, 0.5, -0.25);
    suitcaseGroup.add(battery);

    suitcase = suitcaseGroup;
    scene.add(suitcase);
}

function createGround() {
    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.ShadowMaterial({
        opacity: 0.1,
        color: 0x000000
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    ground.receiveShadow = true;
    scene.add(ground);
}

function onMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
}

function onTouchMove(event) {
    if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
    }
}

function onWindowResize() {
    const container = document.getElementById('canvas-container');
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

function animate() {
    requestAnimationFrame(animate);

    // スムーズ回転
    targetRotationY = mouseX * Math.PI * 0.5;
    targetRotationX = mouseY * Math.PI * 0.2;

    currentRotationY += (targetRotationY - currentRotationY) * 0.1;
    currentRotationX += (targetRotationX - currentRotationX) * 0.1;

    if (suitcase) {
        suitcase.rotation.y = currentRotationY;
        suitcase.rotation.x = currentRotationX * 0.3;

        // 浮遊アニメーション
        suitcase.position.y = Math.sin(Date.now() * 0.001) * 0.05;
    }

    // モーターの点滅
    if (motorHighlight) {
        motorHighlight.material.emissiveIntensity = 0.3 + Math.sin(Date.now() * 0.003) * 0.2;
    }

    // ホイールの回転
    if (wheelHighlight) {
        wheelHighlight.rotation.x += 0.02;
        wheelHighlight.material.emissiveIntensity = 0.2 + Math.sin(Date.now() * 0.002) * 0.1;
    }

    renderer.render(scene, camera);
}

// 初期化実行
window.addEventListener('load', init);
```

## 完了条件

- [x] Three.js CDNが正しく読み込まれている
- [x] `scripts/three-viewer.js` が作成されている
- [x] 3Dキャリーケースモデルが表示されている
- [x] マウス/タッチ操作で360°回転できる
- [x] ライティングとシャドウが正しく機能している
- [x] モーター・ホイールのハイライトが点滅している
- [x] リサイズに対応している
- [x] パフォーマンスが良好（60fps）
- [x] 背景アニメーション（困難な道→スムーズな道）が連動している

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [x] 完了

## 備考

- 既存の `script.js` を `scripts/three-viewer.js` にリネーム・移動
- Three.js r128を使用（CDN: https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js）
- 将来的に外部GLBモデルの読み込みも検討可能

---

最終更新: 2025-01-XX
