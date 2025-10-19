/* ===================================
   Hotspots Functionality
   ホットスポット機能
   =================================== */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initHotspots();
});

function initHotspots() {
  const hotspots = document.querySelectorAll('.hotspot');

  if (!hotspots.length) {
    console.log('No hotspots found');
    return;
  }

  hotspots.forEach(hotspot => {
    const marker = hotspot.querySelector('.hotspot-marker');

    // タブインデックスを設定（キーボード操作対応）
    hotspot.setAttribute('tabindex', '0');
    hotspot.setAttribute('role', 'button');

    const feature = hotspot.dataset.feature;
    hotspot.setAttribute('aria-label', `${feature}の詳細を表示`);

    // クリックでポップアップ表示/非表示を切り替え（モバイル対応）
    hotspot.addEventListener('click', (e) => {
      e.stopPropagation();

      // 他のホットスポットのactiveを解除
      hotspots.forEach(other => {
        if (other !== hotspot) {
          other.classList.remove('active');
        }
      });

      // 現在のホットスポットをトグル
      hotspot.classList.toggle('active');
    });

    // Enterキーでも開閉可能に（アクセシビリティ）
    hotspot.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        hotspot.click();
      }
    });
  });

  // 背景クリックで全てのホットスポットを閉じる
  document.addEventListener('click', (e) => {
    const isHotspot = e.target.closest('.hotspot');
    if (!isHotspot) {
      hotspots.forEach(hotspot => {
        hotspot.classList.remove('active');
      });
    }
  });

  // ESCキーで全てのホットスポットを閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hotspots.forEach(hotspot => {
        hotspot.classList.remove('active');
      });
    }
  });
}

// 背景アニメーション更新（three-viewer.jsから呼び出される）
function updateBackgroundAnimation() {
  // mouseXはthree-viewer.jsで定義されているグローバル変数
  if (typeof mouseX === 'undefined') return;

  const progress = (mouseX + 1) / 2; // 0〜1
  const difficultPath = document.getElementById('difficult-path');
  const smoothPath = document.getElementById('smooth-path');

  if (difficultPath && smoothPath) {
    difficultPath.style.opacity = 0.3 * (1 - progress);
    smoothPath.style.opacity = 0.7 * progress;
  }
}

// エクスポート（グローバルで使用可能に）
if (typeof window !== 'undefined') {
  window.updateBackgroundAnimation = updateBackgroundAnimation;
}
