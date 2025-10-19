# 011: product.html - 製品詳細3D実装

## 概要

product.htmlのミニ3Dビューワーを実装します。製品の機能別にズーム・ハイライトできる機能を追加します。

## 依存関係

- **前提**: 006（Three.js基本実装）, 010（製品ヒーロー）
- **ブロック**: 012（インタラクティブ機能紹介）

## Todo

### 3Dビューワー実装
- [ ] `product-canvas` 用の初期化関数
- [ ] カメラ位置の調整
- [ ] 小型化されたモデル

### ズーム機能
- [ ] カメラの焦点機能
- [ ] パーツごとのズーム座標定義
  - [ ] モーター: (0, 1, 2)
  - [ ] ホイール: (-1, 0.5, 1.5)
  - [ ] ブレーキ: (0, 0.3, 1.8)

### ハイライト機能
- [ ] パーツのエミッシブ強度変更
- [ ] スムーズなカメラトランジション

## 実装詳細

### JavaScript（`scripts/three-viewer.js` に追加）

```javascript
// 製品詳細ページ用の3Dビューワー
function initProductViewer() {
  const container = document.getElementById('product-3d');
  const canvas = document.getElementById('product-canvas');

  if (!container || !canvas) return;

  const scene = new THREE.Scene();
  scene.background = null;

  const camera = new THREE.PerspectiveCamera(
    35,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 1.5, 4);
  camera.lookAt(0, 0.5, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true;

  // ライト設定
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight.position.set(3, 5, 3);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  // 3Dモデル作成（簡易版）
  const suitcaseGroup = createSimpleSuitcase();
  scene.add(suitcaseGroup);

  // ローディング非表示
  const loading = document.getElementById('product-loading');
  if (loading) loading.style.display = 'none';

  // リサイズ
  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  // アニメーション
  function animate() {
    requestAnimationFrame(animate);
    suitcaseGroup.rotation.y += 0.003; // ゆっくり回転
    renderer.render(scene, camera);
  }
  animate();

  // 機能別ズーム関数（外部から呼び出し可能）
  window.focusOnFeature = (feature) => {
    const positions = {
      motor: { x: 0, y: 1, z: 2 },
      wheel: { x: -1, y: 0.5, z: 1.5 },
      brake: { x: 0, y: 0.3, z: 1.8 }
    };

    const targetPos = positions[feature];
    if (targetPos) {
      // カメラのスムーズ移動
      gsap.to(camera.position, {
        x: targetPos.x,
        y: targetPos.y,
        z: targetPos.z,
        duration: 1,
        ease: 'power2.inOut'
      });

      // パーツのハイライト
      highlightPart(feature);
    }
  };

  function highlightPart(feature) {
    // 全パーツのハイライトをリセット
    // 特定パーツのエミッシブを強化
    // 実装詳細は省略
  }
}

function createSimpleSuitcase() {
  const group = new THREE.Group();

  // 本体
  const bodyGeometry = new THREE.BoxGeometry(1, 1.5, 0.5);
  const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0x2c3e50 });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.castShadow = true;
  body.position.y = 0.75;
  group.add(body);

  // モーター
  const motorGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.25);
  const motorMaterial = new THREE.MeshPhongMaterial({
    color: 0x4CAF50,
    emissive: 0x2e7d32,
    emissiveIntensity: 0.3
  });
  const motor = new THREE.Mesh(motorGeometry, motorMaterial);
  motor.rotation.z = Math.PI / 2;
  motor.position.set(0, 0.12, -0.15);
  group.add(motor);

  // ホイール等...

  return group;
}

// ページロード時
window.addEventListener('load', () => {
  if (document.getElementById('product-canvas')) {
    initProductViewer();
  }
});
```

## 完了条件

- [ ] ミニ3Dビューワーが動作している
- [ ] ゆっくり回転している
- [ ] ズーム機能が実装されている
- [ ] ハイライト機能が実装されている
- [ ] 機能ボタンからの呼び出しが可能

## ステータス

- [ ] 未着手
- [ ] 作業中
- [ ] レビュー待ち
- [ ] 完了

## 備考

- GSAP（GreenSock Animation Platform）を使用するとスムーズなカメラ移動が実現可能
- CDN: https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js

---

最終更新: 2025-01-XX
