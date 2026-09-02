// ========================================
//   РЕНДЕР ШТУЧНОГО ОРУЖИЯ
// ========================================
function renderConsumableWeapons() {
  const container = document.getElementById('consumable-weapon-list');
  if (!container) return;
  container.innerHTML = '';
  consumableWeapons.forEach(w => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-icon"><img src="${w.image}" alt="${w.name}" loading="lazy"></div>
      <h3>${w.name}</h3>
      <div class="info">${w.type}</div>
      <div class="info">⚔️ ${w.damage}</div>
      <div class="comment">${w.comment}</div>
    `;
    container.appendChild(card);
  });
}

// ========================================
//   РЕНДЕР БЕСКОНЕЧНОГО ОРУЖИЯ
// ========================================
function renderInfiniteWeapons() {
  const container = document.getElementById('infinite-weapon-list');
  if (!container) return;
  container.innerHTML = '';
  infiniteWeapons.forEach(w => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-icon"><img src="${w.image}" alt="${w.name}" loading="lazy"></div>
      <h3>${w.name}</h3>
      <div class="info">${w.type}</div>
      <div class="info">⚔️ ${w.damage}</div>
      <div class="comment">${w.comment}</div>
    `;
    container.appendChild(card);
  });
}

// ========================================
//   ЗАПУСК ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('infinite-weapon-list')) renderInfiniteWeapons();
  if (document.getElementById('consumable-weapon-list')) renderConsumableWeapons();
});
