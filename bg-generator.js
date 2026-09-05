// ============================================
// ГЕНЕРАТОР ФОНА ИЗ ИКОНОК
// ============================================

// Список иконок – вы можете добавить сюда любые ссылки из ваших данных
const iconUrls = [
  // Оружие (несколько примеров)
  "https://i.ibb.co/XrwwvSSx/Screenshot-20260902-195424-Wormix.jpg",
  "https://i.ibb.co/N209mRyG/Screenshot-20260902-195428-Wormix.jpg",
  "https://i.ibb.co/39LpCgmh/Screenshot-20260902-195438-Wormix.jpg",
  "https://i.ibb.co/kV1nXDBT/Screenshot-20260902-195445-Wormix.jpg",
  "https://i.ibb.co/TMZCZMhh/Screenshot-20260902-195451-Wormix.jpg",
  "https://i.ibb.co/q62krJp/Screenshot-20260902-195456-Wormix.jpg",
  "https://i.ibb.co/931VkTCH/Screenshot-20260902-195501-Wormix.jpg",
  "https://i.ibb.co/wFhwTpSb/Screenshot-20260902-195506-Wormix.jpg",
  "https://i.ibb.co/Gfgkz9Ls/Screenshot-20260902-195511-Wormix.jpg",
  "https://i.ibb.co/1fsC1DCP/Screenshot-20260902-195517-Wormix.jpg",
  // Шапки
  "https://i.ibb.co/TxNz9f2s/Screenshot-20260903-114356-Wormix.jpg",
  "https://i.ibb.co/21MV1W6X/Screenshot-20260903-114400-Wormix.jpg",
  "https://i.ibb.co/xSmH8NNC/Screenshot-20260903-114403-Wormix.jpg",
  "https://i.ibb.co/s9WYzvhd/Screenshot-20260903-114406-Wormix.jpg",
  "https://i.ibb.co/GvwLLCW3/Screenshot-20260903-114417-Wormix.jpg",
  "https://i.ibb.co/j9v9wC9h/Screenshot-20260903-114412-Wormix.jpg",
  "https://i.ibb.co/QFC1gyMC/Screenshot-20260903-114409-Wormix.jpg",
  "https://i.ibb.co/WN86X4D0/Screenshot-20260903-114429-Wormix.jpg",
  // Артефакты
  "https://i.ibb.co/nNHGmC46/Screenshot-20260903-133700-Wormix.jpg",
  "https://i.ibb.co/j9WWf4vx/Screenshot-20260903-133657-Wormix.jpg",
  "https://i.ibb.co/HD2w2P0c/Screenshot-20260903-133653-Wormix.jpg",
  "https://i.ibb.co/HfqPfgqb/Screenshot-20260903-133649-Wormix.jpg",
  "https://i.ibb.co/mFyQJ7p8/Screenshot-20260903-133645-Wormix.jpg",
  "https://i.ibb.co/tp3fvNLc/Screenshot-20260903-133642-Wormix.jpg",
  "https://i.ibb.co/MxyZhvfw/Screenshot-20260903-133639-Wormix.jpg",
  "https://i.ibb.co/kgkWCcYw/Screenshot-20260903-133633-Wormix.jpg",
  "https://i.ibb.co/6JTxGLZh/Screenshot-20260903-133630-Wormix.jpg",
  "https://i.ibb.co/bRvFDjrf/Screenshot-20260903-133626-Wormix.jpg",
  // Эмблема
  "https://i.ibb.co/yFkGB5Rg/Screenshot-20260903-141832-Wormix.jpg"
];

// Количество иконок на фоне (чем больше, тем плотнее)
const ICON_COUNT = 40;

function generateBackground() {
  const container = document.getElementById('bg-layer');
  if (!container) return;

  container.innerHTML = '';

  for (let i = 0; i < ICON_COUNT; i++) {
    const img = document.createElement('img');
    img.className = 'bg-icon';
    const randomIndex = Math.floor(Math.random() * iconUrls.length);
    img.src = iconUrls[randomIndex];
    img.alt = '';

    const size = 40 + Math.random() * 140;
    img.style.width = size + 'px';
    img.style.height = size + 'px';

    img.style.left = Math.random() * 100 + '%';
    img.style.top = Math.random() * 100 + '%';

    img.style.transform = `rotate(${Math.random() * 360}deg)`;

    img.style.opacity = 0.04 + Math.random() * 0.08;

    container.appendChild(img);
  }
}

document.addEventListener('DOMContentLoaded', generateBackground);
