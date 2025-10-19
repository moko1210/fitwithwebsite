/* ===================================
   FitWith Carry-Assist Main JavaScript
   メインスクリプト
   =================================== */

'use strict';

// ===== DOM Content Loaded =====
document.addEventListener('DOMContentLoaded', () => {
  initHamburgerMenu();
  initScrollEffects();
  initActiveNav();
  initSmoothScroll();
  initScrollAnimations();
});

// ===== ハンバーガーメニュー =====
function initHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.main-nav');

  if (!hamburger || !nav) return;

  // オーバーレイ作成
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  // ハンバーガークリック
  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    toggleMenu(!isExpanded);
  });

  // オーバーレイクリック
  overlay.addEventListener('click', () => {
    toggleMenu(false);
  });

  // ESCキーでメニューを閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleMenu(false);
    }
  });

  function toggleMenu(open) {
    hamburger.setAttribute('aria-expanded', open);
    nav.classList.toggle('active', open);
    overlay.classList.toggle('active', open);

    // ボディのスクロールを制御
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}

// ===== スクロールエフェクト =====
function initScrollEffects() {
  const header = document.querySelector('.site-header');

  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // スクロール時にヘッダーにクラスを追加
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

// ===== アクティブナビゲーション =====
function initActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');

    if (linkPage === currentPage ||
        (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

// ===== スムーズスクロール =====
function initSmoothScroll() {
  // すべてのアンカーリンクにスムーズスクロールを適用
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // ハッシュのみのリンクはスキップ
      if (href === '#' || !href) return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // URLのハッシュを更新
        history.pushState(null, null, href);

        // モバイルメニューが開いている場合は閉じる
        const nav = document.querySelector('.main-nav');
        const hamburger = document.querySelector('.hamburger');
        const overlay = document.querySelector('.nav-overlay');

        if (nav && nav.classList.contains('active')) {
          hamburger.setAttribute('aria-expanded', 'false');
          nav.classList.remove('active');
          overlay.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  });
}

// ===== スクロールアニメーション (Intersection Observer) =====
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // 一度表示したら監視を解除（パフォーマンス向上）
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // すべての .fade-in 要素を監視
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // empathy-card 要素も監視
  document.querySelectorAll('.empathy-card').forEach(el => {
    observer.observe(el);
  });

  // その他のアニメーション要素
  document.querySelectorAll('.scale-in, .slide-in-up, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
  });
}

// ===== ユーティリティ関数 =====

// デバウンス関数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// スロットル関数
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 外部リンクを新しいタブで開く
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    // 同じドメインは除外
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});

// ページ遷移アニメーション
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-transition');
});

// エクスポート（モジュールとして使用する場合）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    debounce,
    throttle
  };
}
