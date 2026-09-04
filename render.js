// ===========================================
// РЕНДЕР КАРТОЧЕК (БЕЗ МОДАЛЬНОГО ОКНА)
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
  // Без клика – модальное окно не нужно
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
// ЗАПУСК
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('infinite-weapon-list')) renderInfiniteWeapons();
  if (document.getElementById('consumable-weapon-list')) renderConsumableWeapons();
  if (document.getElementById('upgrade-weapon-list')) renderUpgradeWeapons();
});
