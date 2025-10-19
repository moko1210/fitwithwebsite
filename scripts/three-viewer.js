/* ===================================
   Three.js 3D Viewer
   3Dキャリーケースビューワー
   =================================== */

'use strict';

let scene, camera, renderer, suitcase, motorHighlight, wheelHighlight;
let mouseX = 0, mouseY = 0;
let targetRotationX = 0, targetRotationY = 0;
let currentRotationX = 0, currentRotationY = 0;

function init() {
    const container = document.getElementById('canvas-container');
    const canvas = document.getElementById('three-canvas');

    if (!container || !canvas) {
        console.error('Canvas container or canvas element not found');
        return;
    }

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

    // SpotLight（緑色 - セカンダリカラー）
    const spotLight = new THREE.SpotLight(0x38a169, 0.5);
    spotLight.position.set(-3, 5, 3);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.5;
    scene.add(spotLight);

    // 3Dモデル作成
    createSuitcase();
    createGround();

    // ローディング非表示
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'none';
    }

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

    updateBackgroundAnimation();
}

function onTouchMove(event) {
    if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((touch.clientY - rect.top) / rect.height) * 2 + 1;

        updateBackgroundAnimation();
    }
}

function updateBackgroundAnimation() {
    const progress = (mouseX + 1) / 2; // 0〜1
    const obstaclePath = document.querySelector('.obstacle-path path');
    const smoothPath = document.querySelector('.smooth-path');

    if (obstaclePath && smoothPath) {
        obstaclePath.style.opacity = 0.3 * (1 - progress);
        smoothPath.style.opacity = 0.7 * progress;
    }
}

function onWindowResize() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

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
