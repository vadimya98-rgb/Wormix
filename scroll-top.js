// ========================================
// КНОПКА "НАВЕРХ" (для всех страниц, кроме главной)
// ========================================
(function() {
  var btn = document.createElement('button');
  btn.id = 'scrollTopBtn';
  btn.innerHTML = '↑';
  btn.style.cssText = `
    display: none;
    position: fixed;
    bottom: 24px;
    right: 20px;
    padding: 12px 16px;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 50%;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 999;
    transition: all 0.3s;
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  document.body.appendChild(btn);

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
