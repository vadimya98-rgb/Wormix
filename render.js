// ===========================================
// РЕНДЕР КАРТОЧЕК С КЛИКАБЕЛЬНОСТЬЮ
// ===========================================
function createCard(w) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-icon"><img src="${w.image}" alt="${w.name}" loading="lazy"></div>
    <h3>${w.name}</h3>
    <div class="info">${w.type}</div>
    <div class="info">⚔️ ${w.damage}</div>
    <div class="comment">${w.comment || ''}</div>
  `;
  card.addEventListener('click', function() {
    openModal(w);
  });
  return card;
}

function renderInfiniteWeapons() {
  const container = document.getElementById('infinite-weapon-list');
  if (!container) return;
  container.innerHTML = '';
  if (typeof infiniteWeapons === 'undefined' || infiniteWeapons.length === 0) {
    container.innerHTML = '<p style="color:#94a3b8; text-align:center;">⚔️ Скоро здесь появится бесконечное оружие</p>';
    return;
  }
  infiniteWeapons.forEach(w => {
    container.appendChild(createCard(w));
  });
}

function renderConsumableWeapons() {
  const container = document.getElementById('consumable-weapon-list');
  if (!container) return;
  container.innerHTML = '';
  if (typeof consumableWeapons === 'undefined' || consumableWeapons.length === 0) {
    container.innerHTML = '<p style="color:#94a3b8; text-align:center;">💥 Штучное оружие скоро появится</p>';
    return;
  }
  consumableWeapons.forEach(w => {
    container.appendChild(createCard(w));
  });
}

// ===== ГЛАВНОЕ: функция для апгрейдов =====
function renderUpgradeWeapons() {
  const container = document.getElementById('upgrade-weapon-list');
  if (!container) return;
  container.innerHTML = '';
  if (typeof upgradeWeapons === 'undefined' || upgradeWeapons.length === 0) {
    container.innerHTML = '<p style="color:#94a3b8; text-align:center;">🔥 Скоро здесь появятся лучшие улучшения</p>';
    return;
  }
  upgradeWeapons.forEach(w => {
    container.appendChild(createCard(w));
  });
}

// ===========================================
// МОДАЛЬНОЕ ОКНО (без изменений)
// ===========================================
function openModal(w) {
  let modal = document.getElementById('weapon-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'weapon-modal';
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.8); backdrop-filter: blur(8px);
      display: flex; align-items: center; justify-content: center;
      z-index: 9999; padding: 20px; opacity: 0; transition: opacity 0.3s;
    `;
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeModal();
    });
    document.body.appendChild(modal);
  }
  
  modal.innerHTML = `
    <div style="
      background: linear-gradient(145deg, #1a1a3e, #0a0a1a);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
      max-width: 420px;
      width: 100%;
      padding: 28px 24px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.8);
      position: relative;
      max-height: 90vh;
      overflow-y: auto;
    ">
      <button onclick="closeModal()" style="
        position: absolute; top: 12px; right: 16px;
        background: none; border: none; color: #94a3b8;
        font-size: 1.8rem; cursor: pointer;
        transition: 0.2s;
      ">✕</button>
      
      <div style="text-align: center; margin-bottom: 16px;">
        <img src="${w.image}" alt="${w.name}" style="
          width: 80px; height: 80px; object-fit: contain;
          background: rgba(0,0,0,0.3); border-radius: 16px; padding: 8px;
        ">
        <h2 style="color: #fff; margin: 12px 0 4px;">${w.name}</h2>
        <span style="color: #94a3b8; font-size: 0.9rem;">${w.type}</span>
      </div>
      
      <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 16px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span style="color: #94a3b8;">⚔️ Урон</span>
          <span style="color: #fff; font-weight: 600;">${w.damage}</span>
        </div>
        ${w.maxUpgrade && w.maxUpgrade !== '—' ? `
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span style="color: #94a3b8;">⬆ Макс. урон</span>
          <span style="color: #fcd34d; font-weight: 600;">${w.maxUpgrade}</span>
        </div>
        ` : ''}
        ${w.price && w.price !== '—' ? `
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span style="color: #94a3b8;">💰 Цена</span>
          <span style="color: #fff; font-weight: 600;">${w.price}</span>
        </div>
        ` : ''}
        ${w.upgradeCost && w.upgradeCost !== '—' ? `
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span style="color: #94a3b8;">⬆ Улучшение</span>
          <span style="color: #fcd34d; font-weight: 600;">${w.upgradeCost}</span>
        </div>
        ` : ''}
        ${w.level && w.level !== '—' ? `
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span style="color: #94a3b8;">📈 Уровень доступа</span>
          <span style="color: #fff; font-weight: 600;">${w.level}</span>
        </div>
        ` : ''}
      </div>
      
      ${w.comment ? `
      <div style="
        margin-top: 16px;
        background: rgba(79, 70, 229, 0.1);
        border-left: 4px solid #818cf8;
        padding: 12px 16px;
        border-radius: 8px;
      ">
        <p style="color: #cbd5e1; font-size: 0.9rem; margin: 0;">
          💡 ${w.comment}
        </p>
      </div>
      ` : ''}
      
      <button onclick="closeModal()" style="
        width: 100%; margin-top: 20px;
        padding: 12px;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 40px;
        color: #94a3b8;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.2s;
      ">Закрыть</button>
    </div>
  `;
  
  modal.style.opacity = '1';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('weapon-modal');
  if (modal) {
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }, 300);
  }
}

// ===========================================
// ЗАПУСК
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('infinite-weapon-list')) renderInfiniteWeapons();
  if (document.getElementById('consumable-weapon-list')) renderConsumableWeapons();
  if (document.getElementById('upgrade-weapon-list')) renderUpgradeWeapons(); // ВЫЗОВ ДЛЯ АПГРЕЙДОВ
});
