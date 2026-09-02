// ========================================
//   БЕСКОНЕЧНОЕ ОРУЖИЕ (пока пусто)
// ========================================
const infiniteWeapons = [
  // Сюда добавишь позже (Базука, Дробовик, Ракетница и т.д.)
];

// ========================================
//   ШТУЧНОЕ ОРУЖИЕ (12 видов)
// ========================================
const consumableWeapons = [
  {
    id: 1,
    name: "Докторская сумка",
    image: "https://iili.io/nHRBe7j.jpg",
    type: "Штучное",
    level: "—",
    damage: "Восстанавливает 75 ед. здоровья",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Восстанавливает здоровье союзникам рядом. Не тратит ход. На себя не действует."
  },
  {
    id: 2,
    name: "Ледяной орб",
    image: "https://iili.io/nHRBkkx.jpg",
    type: "Штучное",
    level: "—",
    damage: "50 (прямое) / 30 (осколки)",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Замораживает врагов на 2 хода. Осколки наводятся на цели. Зависят от ветра."
  },
  {
    id: 3,
    name: "Душемёт",
    image: "https://iili.io/nHRBvmQ.jpg",
    type: "Штучное",
    level: "—",
    damage: "16 душ по 4–8 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Души выбирают цель случайно, могут пройти сквозь землю. Урон зависит от здоровья стрелка."
  },
  {
    id: 4,
    name: "Наковальня",
    image: "https://iili.io/nHRBOdb.jpg",
    type: "Штучное",
    level: "5 ход",
    damage: "70 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Падает в указанную точку, вгоняет жертву в землю. Остаётся на поле."
  },
  {
    id: 5,
    name: "Зловонный арбуз",
    image: "https://iili.io/nHRBSIV.jpg",
    type: "Штучное",
    level: "—",
    damage: "90 (взрыв) + 6×65 (куски)",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Протухший арбуз. Отравляет врагов. Выдерживает только 1 отскок."
  },
  {
    id: 6,
    name: "Скверная тыква",
    image: "https://iili.io/nHRBUhB.jpg",
    type: "Штучное",
    level: "—",
    damage: "10 ед. × 6 ходов",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Заменяет шапку врага. -10 к атаке и защите на 6 ходов. Два раза за бой."
  },
  {
    id: 7,
    name: "Гвоздевая граната",
    image: "https://iili.io/nHRBgLP.jpg",
    type: "Штучное",
    level: "—",
    damage: "12 гвоздей × 16 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Зависает в воздухе на 1.5 сек, обстреливает гвоздями ближайших бойцов."
  },
  {
    id: 8,
    name: "Марш зомби",
    image: "https://iili.io/nHRB4B1.jpg",
    type: "Штучное",
    level: "6 ход",
    damage: "40 ед. (при падении)",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Призывает 3 зомби в вашу команду. Урон не зависит от параметров."
  },
  {
    id: 9,
    name: "Зелье алхимика",
    image: "https://iili.io/nHRB6EF.jpg",
    type: "Штучное",
    level: "—",
    damage: "—",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Меняет местами атаку и защиту цели. Действует до конца следующего хода. Не тратит ход."
  },
  {
    id: 10,
    name: "Перевязка",
    image: "https://iili.io/nHRBs2a.jpg",
    type: "Штучное",
    level: "—",
    damage: "Восстанавливает 50% урона за прошлый ход",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Один раз за бой на каждого бойца. Не тратит ход."
  },
  {
    id: 11,
    name: "Антитоксин",
    image: "https://iili.io/nHRBPrg.jpg",
    type: "Штучное",
    level: "—",
    damage: "15 ед. × 6 ходов",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Защищает от яда на время действия. Не тратит ход."
  },
  {
    id: 12,
    name: "Буран",
    image: "https://iili.io/nHRBQkv.jpg",
    type: "Штучное",
    level: "2 ход",
    damage: "5 льдинок × 40 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Раз в бой. Проходит сквозь стены. Замораживает врагов на 2 хода."
  }
];

// ========== ШАПКИ (пока пусто) ==========
const hats = [];

// ========== АРТЕФАКТЫ (пока пусто) ==========
const artifacts = [];
