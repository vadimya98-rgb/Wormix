// ===========================================
//   БЕСКОНЕЧНОЕ ОРУЖИЕ (51 вид)
// ===========================================
const infiniteWeapons = [
  {
    id: 1,
    name: "Базука",
    image: "https://iili.io/nHaGTgt.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "60 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Снаряды подвержены ветру, особенно на низких скоростях."
  },
  {
    id: 2,
    name: "Граната",
    image: "https://iili.io/nHaGI1I.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "60 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Не подвержена ветру, проста в управлении."
  },
  {
    id: 3,
    name: "Отбойный молоток",
    image: "https://iili.io/nHaGzqN.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "5 ед. за удар",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Прорывает вертикальные тоннели. Для остановки нажмите стрельбу ещё раз."
  },
  {
    id: 4,
    name: "Динамит",
    image: "https://iili.io/nHaGnXR.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "75 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Взрывается через 3 секунды, сильно толкает врага."
  },
  {
    id: 5,
    name: "Узи",
    image: "https://iili.io/nHaGCzv.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "16 пуль по 5 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Короткие очереди, почти без разброса. Можно менять угол стрельбы."
  },
  {
    id: 6,
    name: "Сюрикены",
    image: "https://iili.io/nHaGfea.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "17 ед. за бросок (первое попадание двойное)",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "4 сюрикена за ход. Двойной урон при первом попадании по цели."
  },
  {
    id: 7,
    name: "Липучая граната",
    image: "https://iili.io/nHaGFdF.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "40 ед. взрыв + 7 осколков по 20 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Прилипает к поверхности, осколки летят вверх."
  },
  {
    id: 8,
    name: "Дробовик",
    image: "https://iili.io/nHaGK5g.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "7 дробинок по 13 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Мощное оружие ближнего боя, большой разброс."
  },
  {
    id: 9,
    name: "Ружьё",
    image: "https://iili.io/nHaG2g1.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "30 ед. за выстрел, 2 выстрела",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Между выстрелами можно перемещаться."
  },
  {
    id: 10,
    name: "Пулемёт",
    image: "https://iili.io/nHaGJqB.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "20 пуль по 6 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Большой разброс, эффективен на близких дистанциях."
  },
  {
    id: 11,
    name: "Самонаводящаяся ракета",
    image: "https://iili.io/nHaEyWQ.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "60 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Летит к цели по кратчайшей траектории. Укажите цель на карте."
  },
  {
    id: 12,
    name: "Портативный телепорт",
    image: "https://iili.io/nHaEpzx.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "—",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Перемещает бойца в точку броска. Не тратит ход."
  },
  {
    id: 13,
    name: "Электрогарпун",
    image: "https://iili.io/nHaEDOb.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "30 ед. + 8 ед. × 4 раза в сек.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Цепляет и тащит врага к стрелку."
  },
  {
    id: 14,
    name: "Ледяная базука",
    image: "https://iili.io/nHaEt5u.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "40 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Замораживает врагов на 2 хода. Подвержена ветру."
  },
  {
    id: 15,
    name: "Мина",
    image: "https://iili.io/nHaELg9.jpg",
    type: "Бесконечное",
    level: "2 ход",
    damage: "40 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Взрывается при входе врага в зону. Установка не тратит ход, если никого нет."
  },
  {
    id: 16,
    name: "Котобазука",
    image: "https://iili.io/nHaEifS.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "2 отскока по 50 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Стреляет котом, который отскакивает в случайном направлении."
  },
  {
    id: 17,
    name: "Бур",
    image: "https://iili.io/nHaE6s2.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "24 ед. в секунду",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Прорывает горизонтальные тоннели. Для остановки нажмите стрельбу."
  },
  {
    id: 18,
    name: "Осколочная граната",
    image: "https://iili.io/nHaE4Wl.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "40 ед. взрыв + 8 осколков по 15 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Не подвержена ветру, эффективна в замкнутых пространствах."
  },
  {
    id: 19,
    name: "Бумеранг",
    image: "https://iili.io/nHaErx4.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "70 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "После удара отскакивает, можно поймать и бросить ещё раз. Сильно зависит от ветра."
  },
  {
    id: 20,
    name: "AK-47",
    image: "https://iili.io/nHaESOG.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "2 очереди по 4 выстрела, 16 ед. за пулю",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Одна пуля может прошить двух врагов."
  },
  {
    id: 21,
    name: "Коктейль Молотова",
    image: "https://iili.io/nHaE8Rs.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "40 ед. взрыв + 30 ед. огня/сек",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Взрывается от земли, покрывает её горючей смесью."
  },
  {
    id: 22,
    name: "Паразит",
    image: "https://iili.io/nHaEvJn.jpg",
    type: "Бесконечное",
    level: "2 ход",
    damage: "40 ед. при попадании + 40 ед. при срабатывании",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Прикрепляется к врагу, замедляет и взрывается через 10 секунд."
  },
  {
    id: 23,
    name: "Мортира",
    image: "https://iili.io/nHaEeUX.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "35 ед. взрыв + 6 осколков по 25 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Не подвержена ветру. Начальная скорость фиксирована."
  },
  {
    id: 24,
    name: "Огнемёт",
    image: "https://iili.io/nHaEOlt.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "12 капель по 3 ед. + 30 ед. огня/сек",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Струя напалма, земля продолжает гореть."
  },
  {
    id: 25,
    name: "Снайперская винтовка",
    image: "https://iili.io/nHaEjiN.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "90 ед. (первая цель), далее снижается",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Пробивает несколько врагов. Урон по ближним целям снижается."
  },
  {
    id: 26,
    name: "Гравитационная пушка",
    image: "https://iili.io/nHaEhVp.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "2 выстрела по 20 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Отталкивает врага. Можно стрелять под ноги для прыжка."
  },
  {
    id: 27,
    name: "Мина-паук",
    image: "https://iili.io/nHaEVDv.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "65 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Подползает к врагу, взрывается при его движении. Отравляет ядом."
  },
  {
    id: 28,
    name: "Свин",
    image: "https://iili.io/nHaEGRa.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "90 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Движется в указанном направлении, взрывается по кнопке."
  },
  {
    id: 29,
    name: "Блокиратор",
    image: "https://iili.io/nHaEEHg.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "75 ед. уничтожившему",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Блокирует лечение врага. Действует 6 ходов."
  },
  {
    id: 30,
    name: "Охранник",
    image: "https://iili.io/nHaE0UF.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "10 разрядов по 3 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Обстреливает врагов при приближении. Установка не тратит ход."
  },
  {
    id: 31,
    name: "Балка",
    image: "https://iili.io/nHaEcKP.jpg",
    type: "Бесконечное",
    level: "2 ход",
    damage: "—",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Используется как мост или лестница. Установка не тратит ход."
  },
  {
    id: 32,
    name: "Кувалда",
    image: "https://iili.io/nHaEYiB.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "от 60 до 280 ед. (35% текущего HP)",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Мощный удар, вгоняет врага в землю."
  },
  {
    id: 33,
    name: "Веревка",
    image: "https://iili.io/nHaE7VV.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "—",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Позволяет забираться на препятствия. Не тратит ход."
  },
  {
    id: 34,
    name: "Газовая граната",
    image: "https://iili.io/nHaE5oQ.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "50 ед. за ход",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Облако газа, наносит урон ядом всем в зоне. Держится 6 ходов."
  },
  {
    id: 35,
    name: "Электрошокер",
    image: "https://iili.io/nHaETAb.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "40 ед. + урон от падения",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Подбрасывает врага. Эффективен против нескольких целей."
  },
  {
    id: 36,
    name: "Лазерный луч",
    image: "https://iili.io/nHaEIHu.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "32 удара по 3 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Прожигает землю и врагов. Можно управлять во время стрельбы."
  },
  {
    id: 37,
    name: "Суперкабан",
    image: "https://iili.io/nHaExSe.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "90 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Управляемый полёт. Взрывается при столкновении."
  },
  {
    id: 38,
    name: "Антифриз",
    image: "https://iili.io/nHaEol9.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "—",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Размораживает и защищает от заморозки на 2 хода. Добавляет 50 HP. Тратит ход!"
  },
  {
    id: 39,
    name: "Телепорт",
    image: "https://iili.io/nHaEnK7.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "40 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Перемещает в любую точку, наносит урон в точке прибытия. Тратит ход."
  },
  {
    id: 40,
    name: "Экстренный телепорт",
    image: "https://iili.io/nHaEqV2.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "—",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Мгновенно переносит в случайную точку. Не тратит ход."
  },
  {
    id: 41,
    name: "Летающая тарелка",
    image: "https://iili.io/nHaEfol.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "80 ед. при падении",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Может перетаскивать объекты. Упадёт на врага и взорвётся."
  },
  {
    id: 42,
    name: "Бита",
    image: "https://iili.io/nHaE2AG.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "40 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Выбивает врага в направлении удара."
  },
  {
    id: 43,
    name: "Лазерный барьер",
    image: "https://iili.io/nHaEd9s.jpg",
    type: "Бесконечное",
    level: "2 ход",
    damage: "15 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Создаёт заградительные лучи. Установка не тратит ход."
  },
  {
    id: 44,
    name: "Заземлитель",
    image: "https://iili.io/nHaEFt4.jpg",
    type: "Бесконечное",
    level: "2 ход",
    damage: "40 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Не даёт врагам долго летать. Установка не тратит ход."
  },
  {
    id: 45,
    name: "Бункеролом",
    image: "https://iili.io/nHaEHSn.jpg",
    type: "Бесконечное",
    level: "2 ход",
    damage: "40 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Падающая торпеда, бурит землю и взрывается."
  },
  {
    id: 46,
    name: "Удар напалмом",
    image: "https://iili.io/nHa1yFt.jpg",
    type: "Бесконечное",
    level: "2 ход",
    damage: "6 ракет по 20 ед. + 30 ед. огня/сек",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Поджигает землю. Можно выбрать сторону удара."
  },
  {
    id: 47,
    name: "Авиаудар",
    image: "https://iili.io/nHa1bMN.jpg",
    type: "Бесконечное",
    level: "2 ход",
    damage: "5 ракет по 50 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Сбрасывает ракеты в указанную точку. Не зависят от ветра."
  },
  {
    id: 48,
    name: "Метеорит",
    image: "https://iili.io/nHa1mPI.jpg",
    type: "Бесконечное",
    level: "2 ход",
    damage: "65 ед. + 4 осколка по 35 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Падает под случайным углом, распадается на куски."
  },
  {
    id: 49,
    name: "Котоудар",
    image: "https://iili.io/nHa1Dnp.jpg",
    type: "Бесконечное",
    level: "2 ход",
    damage: "3 кота, 2 отскока по 50 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Сбрасывает котов, которые отскакивают. Можно выбрать сторону."
  },
  {
    id: 50,
    name: "Арбузобомба",
    image: "https://iili.io/nHa1ZtR.jpg",
    type: "Бесконечное",
    level: "—",
    damage: "80 ед. взрыв + 6 кусков по 50 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Мощная осколочная граната."
  },
  {
    id: 51,
    name: "Гравимина",
    image: "https://iili.io/nHaEXxR.jpg",
    type: "Бесконечное",
    level: "3 ход",
    damage: "—",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "Подбрасывает врага вверх, не наносит урона. Установка не тратит ход."
  }
];

// ===========================================
//   ШТУЧНОЕ ОРУЖИЕ (12 видов)
// ===========================================
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

// ===========================================
//   АПГРЕЙД ПУШЕК (15 видов)
// ===========================================
const upgradeWeapons = [
  {
    id: 1,
    name: "Связка динамита",
    image: "https://iili.io/nH18aNj.jpg",
    type: "Апгрейд",
    level: "—",
    damage: "75 ед. взрыв + 2×65 ед. шашки",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "💥 Улучшенный динамит. При взрыве отлетают 2 шашки, которые взрываются при столкновении с землёй или бойцом."
  },
  {
    id: 2,
    name: "Ножи мастера",
    image: "https://iili.io/nH18YAb.jpg",
    type: "Апгрейд",
    level: "—",
    damage: "22 ед. за бросок (первое попадание двойное)",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "🗡️ Улучшенные сюрикены. 5 ножей за ход. Траектория подсвечивается."
  },
  {
    id: 3,
    name: "Липучие мины",
    image: "https://iili.io/nH187Hu.jpg",
    type: "Апгрейд",
    level: "—",
    damage: "40 ед. взрыв + 8×25 ед. осколки",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "🧨 Улучшенная липучая граната. Осколки, не попавшие в цель, остаются на земле как мины на 5 ходов."
  },
  {
    id: 4,
    name: "Джекхаммер",
    image: "https://iili.io/nH18RSe.jpg",
    type: "Апгрейд",
    level: "—",
    damage: "6×14 ед., 2 выстрела",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "🔫 Улучшенный дробовик. Два выстрела за ход. Опустошительное оружие ближнего боя."
  },
  {
    id: 5,
    name: "Управляемый телепорт",
    image: "https://iili.io/nH180oQ.jpg",
    type: "Апгрейд",
    level: "—",
    damage: "—",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "🌀 Улучшенный телепорт. Можно переместиться во время полёта с задержкой 1 сек. Не тратит ход."
  },
  {
    id: 6,
    name: "Энергетическая винтовка",
    image: "https://iili.io/nH181VV.jpg",
    type: "Апгрейд",
    level: "—",
    damage: "45 ед. + 3×30 ед. разряды",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "⚡ Улучшенный электрогарпун. Разряды сильно подбрасывают врага. Урон не зависит от атаки и брони."
  },
  {
    id: 7,
    name: "Сенсорная граната",
    image: "https://iili.io/nH18EiB.jpg",
    type: "Апгрейд",
    level: "—",
    damage: "45 ед. взрыв + 9×15 ед. осколки",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "💣 Улучшение осколочной гранаты. Взрывается автоматически рядом с врагом. Не подвержена ветру."
  },
  {
    id: 8,
    name: "Осколочный разрушитель",
    image: "https://iili.io/nH18Vl1.jpg",
    type: "Апгрейд",
    level: "—",
    damage: "50 ед. взрыв + 5×35 ед. осколки",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "💥 Улучшение мортиры. Большой радиус. Осколки летят в сторону врага. Траектория подсвечивается."
  },
  {
    id: 9,
    name: "Горящий свин",
    image: "https://iili.io/nH18WUF.jpg",
    type: "Апгрейд",
    level: "2 ход",
    damage: "45 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "🔥 Улучшение свина. Во время движения разбрасывает огонь. Взорвать можно в любой момент."
  },
  {
    id: 10,
    name: "Негатор",
    image: "https://iili.io/nH18hHg.jpg",
    type: "Апгрейд",
    level: "—",
    damage: "10 ед. каждый ход",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "🛡️ Улучшение блокиратора. Действует 8 ходов. Наносит урон врагам с HP > 10%."
  },
  {
    id: 11,
    name: "Эластичная балка",
    image: "https://iili.io/nH18wOJ.jpg",
    type: "Апгрейд",
    level: "2 ход",
    damage: "—",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "📐 Улучшение балки. Можно изменять размер кнопками вверх/вниз. Не тратит ход."
  },
  {
    id: 12,
    name: "Морозящий газ",
    image: "https://iili.io/nH18NDv.jpg",
    type: "Апгрейд",
    level: "—",
    damage: "50 ед. за ход",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "❄️ Улучшение газовой гранаты. Замедляет врагов на 1 ход. Облако держится 5 ходов."
  },
  {
    id: 13,
    name: "Похититель",
    image: "https://iili.io/nH18exR.jpg",
    type: "Апгрейд",
    level: "—",
    damage: "95 ед. при падении",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "🛸 Улучшенная тарелка. Может переносить союзников и объекты. Урон при падении на врага — 95 ед."
  },
  {
    id: 14,
    name: "Зимний страж",
    image: "https://iili.io/nH18kVp.jpg",
    type: "Апгрейд",
    level: "2 ход",
    damage: "40 ед. при срабатывании",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "🧊 Улучшение заземлителя. Гасит огонь, защищает от заморозки, замораживает врагов на 1 ход."
  },
  {
    id: 15,
    name: "Точечный удар",
    image: "https://iili.io/nH18viN.jpg",
    type: "Апгрейд",
    level: "4 ход",
    damage: "5 ракет по 50 ед.",
    maxUpgrade: "—",
    price: "—",
    upgradeCost: "—",
    comment: "🎯 Улучшенный авиаудар. Ракеты наводятся на цель. Можно выбрать сторону удара."
  }
];

// ===========================================
//   ШАПКИ (база) — 61 вид + 13 итоговых = 74
// ===========================================
const hats = [
  { id: 1, image: "https://iili.io/nH401DB.jpg", name: "панамка" },
  { id: 2, image: "https://iili.io/nH40ViF.jpg", name: "звездочета" },
  { id: 3, image: "https://iili.io/nH40NHv.jpg", name: "белая шапка" },
  { id: 4, image: "https://iili.io/nH40GoP.jpg", name: "розовая шапка" },
  { id: 5, image: "https://iili.io/nH41c1n.jpg", name: "японская причёска" },
  { id: 6, image: "https://iili.io/nH4Ev6X.jpg", name: "цилиндр" },
  { id: 7, image: "https://iili.io/nH4Em8b.jpg", name: "каска" },
  { id: 8, image: "https://iili.io/nH4G3MP.jpg", name: "шапка монаха" },
  { id: 9, image: "https://iili.io/nH4Grf1.jpg", name: "бейсбольная кепка" },
  { id: 10, image: "https://iili.io/nH4Mc11.jpg", name: "инопланетный шлем" },
  { id: 11, image: "https://iili.io/nH4MPBS.jpg", name: "скафандр" },
  { id: 12, image: "https://iili.io/nH4VPwv.jpg", name: "берет" },
  { id: 13, image: "https://iili.io/nH4W0OJ.jpg", name: "берет девочки" },
  { id: 14, image: "https://iili.io/nH4js5X.jpg", name: "пиратская шапка" },
  { id: 15, image: "https://iili.io/nH4wTkF.jpg", name: "маска потрошителя" },
  { id: 16, image: "https://iili.io/nH4wE7t.jpg", name: "шлем викингов" },
  { id: 17, image: "https://iili.io/nH4whQf.jpg", name: "перо индейца" },
  { id: 18, image: "https://iili.io/nH4wgTu.jpg", name: "очки авиатора" },
  { id: 19, image: "https://iili.io/nH4wZYP.jpg", name: "самурайский шлем" },
  { id: 20, image: "https://iili.io/nH4NI6l.jpg", name: "шлем с шипами" },
  { id: 21, image: "https://iili.io/nH4NgSI.jpg", name: "зеленый эрокез" },
  { id: 22, image: "https://iili.io/nH4OqlV.jpg", name: "боевая кастрюля" },
  { id: 23, image: "https://iili.io/nH4OMWG.jpg", name: "сомбреро" },
  { id: 24, image: "https://iili.io/nH4Oy1R.jpg", name: "гангстерская шапка" },
  { id: 25, image: "https://iili.io/nH4eup9.jpg", name: "цветной эрокез" },
  { id: 26, image: "https://iili.io/nH4eaBj.jpg", name: "шлем легионера" },
  { id: 27, image: "https://iili.io/nH4e12V.jpg", name: "очки иллюзиониста" },
  { id: 28, image: "https://iili.io/nH4eNEv.jpg", name: "электрошапка" },
  { id: 29, image: "https://iili.io/nH4eSpt.jpg", name: "корона древних" },
  { id: 30, image: "https://iili.io/nH4ePCG.jpg", name: "нимб" },
  { id: 31, image: "https://iili.io/nH4epje.jpg", name: "перья вождя" },
  { id: 32, image: "https://iili.io/nH4k33Q.jpg", name: "гладиаторский шлем" },
  { id: 33, image: "https://iili.io/nH4kCwF.jpg", name: "противогаз" },
  { id: 34, image: "https://iili.io/nH4kAap.jpg", name: "шапка бомба" },
  { id: 35, image: "https://iili.io/nH4kEPf.jpg", name: "маска доктора" },
  { id: 36, image: "https://iili.io/nH4kSKx.jpg", name: "прибор ночного видения" },
  { id: 37, image: "https://iili.io/nH4kPN1.jpg", name: "изысканный шлем" },
  { id: 38, image: "https://iili.io/nH4kDKv.jpg", name: "очки Нео" },
  { id: 39, image: "https://iili.io/nH4vnJ2.jpg", name: "ночная шапка" },
  { id: 40, image: "https://iili.io/nH4v5fj.jpg", name: "капюшон" },
  { id: 41, image: "https://iili.io/nH4vjgR.jpg", name: "шапка-ушанка" },
  { id: 42, image: "https://iili.io/nH4vSXn.jpg", name: "повязка банды якудза" },
  { id: 43, image: "https://iili.io/nH4vidl.jpg", name: "шапка мастера" },
  { id: 44, image: "https://iili.io/nH4vtI9.jpg", name: "шляпа шерифа" },
  { id: 45, image: "https://iili.io/nH489rx.jpg", name: "гоночный шлем" },
  { id: 46, image: "https://iili.io/nH48KI1.jpg", name: "огнеупорный шлем" },
  { id: 47, image: "https://iili.io/nH48upI.jpg", name: "офицерская фуражка" },
  { id: 48, image: "https://iili.io/nH48qLg.jpg", name: "шапка аса" },
  { id: 49, image: "https://iili.io/nH48RIt.jpg", name: "шлем биотика" },
  { id: 50, image: "https://iili.io/nH48l4f.jpg", name: "повязка ниндзя" },
  { id: 51, image: "https://iili.io/nH48EYl.jpg", name: "прическа Элвиса" },
  { id: 52, image: "https://iili.io/nH48hQe.jpg", name: "шлем каскадера" },
  { id: 53, image: "https://iili.io/nH48k3x.jpg", name: "докторская повязка" },
  { id: 54, image: "https://iili.io/nH48ZaR.jpg", name: "маска шамана королей" },
  { id: 55, image: "https://iili.io/nH4SFa4.jpg", name: "советская шапка" },
  { id: 56, image: "https://iili.io/nH4SK8l.jpg", name: "челюсть" },
  { id: 57, image: "https://iili.io/nH4SYAB.jpg", name: "демонический шлем" },
  { id: 58, image: "https://iili.io/nH4SEPa.jpg", name: "маска героя" },
  { id: 59, image: "https://iili.io/nH4Sh9p.jpg", name: "крик" },
  { id: 60, image: "https://iili.io/nH4SvPs.jpg", name: "черный ворон" },
  { id: 61, image: "https://iili.io/nH4SQVe.jpg", name: "шляпа вампира" },

  // ===== Итоговые шапки (13 штук) =====
  { id: 62, image: "https://iili.io/nHtwiu4.jpg", name: "головной убор комиссара" },
  { id: 63, image: "https://iili.io/nHtw48G.jpg", name: "горящий череп" },
  { id: 64, image: "https://iili.io/nHtwS6X.jpg", name: "шлем спецназа" },
  { id: 65, image: "https://iili.io/nHtw8Gt.jpg", name: "респиратор" },
  { id: 66, image: "https://iili.io/nHtwvnI.jpg", name: "шлем адского гонщика" },
  { id: 67, image: "https://iili.io/nHtwjyv.jpg", name: "окуляр" },
  { id: 68, image: "https://iili.io/nHtwh8J.jpg", name: "шлем псайкера" },
  { id: 69, image: "https://iili.io/nHtwXaa.jpg", name: "ворон" },
  { id: 70, image: "https://iili.io/nHtwM6F.jpg", name: "зловещий образ" },
  { id: 71, image: "https://iili.io/nHtwljV.jpg", name: "скандинавский шлем" },
  { id: 72, image: "https://iili.io/nHtwECP.jpg", name: "шлем чемпиона" },
  { id: 73, image: "https://iili.io/nHtw0ZB.jpg", name: "самурайский шлем" },
  { id: 74, image: "https://iili.io/nHtwGG1.jpg", name: "шлем изверга" }
];

// ===========================================
//   ШАПКИ ЗА БОССОВ (21 вид)
// ===========================================
const bossHats = [
  { id: 1, image: "https://iili.io/nHignUu.jpg", name: "Шаман вуду" },
  { id: 2, image: "https://iili.io/nHigCle.jpg", name: "Иллюзионист" },
  { id: 3, image: "https://iili.io/nHig2Dl.jpg", name: "Викинги" },
  { id: 4, image: "https://iili.io/nHigKVS.jpg", name: "Пираты" },
  { id: 5, image: "https://iili.io/nHigzRj.jpg", name: "Мастер ветра" },
  { id: 6, image: "https://iili.io/nHigTDQ.jpg", name: "Якудза" },
  { id: 7, image: "https://iili.io/nHigRWB.jpg", name: "Оживший капитан" },
  { id: 8, image: "https://iili.io/nHigYf1.jpg", name: "Ромео и Джульетта" },
  { id: 9, image: "https://iili.io/nHigcUg.jpg", name: "Король мертвых" },
  { id: 10, image: "https://iili.io/nHigEOv.jpg", name: "Древний призрак" },
  { id: 11, image: "https://iili.io/nHigGbR.jpg", name: "Инженер" },
  { id: 12, image: "https://iili.io/nHigWWN.jpg", name: "Стражи недр" },
  { id: 13, image: "https://iili.io/nHigw0X.jpg", name: "Темный рыцарь" },
  { id: 14, image: "https://iili.io/nHigeJs.jpg", name: "Ассасин" },
  { id: 15, image: "https://iili.io/nHigk5G.jpg", name: "Алхимик" },
  { id: 16, image: "https://iili.io/nHigP19.jpg", name: "Император" },
  { id: 17, image: "https://iili.io/nHigmXV.jpg", name: "Хакер" },
  { id: 18, image: "https://iili.io/nHirH11.jpg", name: "Ворюги" },
  { id: 19, image: "https://iili.io/nHigZej.jpg", name: "Палладин" },
  { id: 20, image: "https://iili.io/nHirJrF.jpg", name: "Телепат" },
  { id: 21, image: "https://iili.io/nHir2dg.jpg", name: "Фантомы" }
];

// ===========================================
//   АРТЕФАКТЫ (база) — 17 видов
// ===========================================
const artifacts = [
  { id: 1, image: "https://iili.io/nHL0QGp.jpg", name: "каменный молот" },
  { id: 2, image: "https://iili.io/nHL0Z6N.jpg", name: "ледяной клык" },
  { id: 3, image: "https://iili.io/nHL0m8X.jpg", name: "пиратский крюк" },
  { id: 4, image: "https://iili.io/nHL0LnR.jpg", name: "вампирский меч" },
  { id: 5, image: "https://iili.io/nHL1HwG.jpg", name: "пила" },
  { id: 6, image: "https://iili.io/nHL1Jtf.jpg", name: "тотем яда" },
  { id: 7, image: "https://iili.io/nHL13Ml.jpg", name: "робощит" },
  { id: 8, image: "https://iili.io/nHL1FP2.jpg", name: "тотем огня" },
  { id: 9, image: "https://iili.io/nHL1n9e.jpg", name: "посох с черепушкой" },
  { id: 10, image: "https://iili.io/nHL1oAu.jpg", name: "световой меч" },
  { id: 11, image: "https://iili.io/nHL1xwb.jpg", name: "ловец снов" },
  { id: 12, image: "https://iili.io/nHL1ztj.jpg", name: "меч Палладина" },
  { id: 13, image: "https://iili.io/nHL1APV.jpg", name: "железный щит" },
  { id: 14, image: "https://iili.io/nHL17cP.jpg", name: "сломанный меч" },
  { id: 15, image: "https://iili.io/nHL1cHF.jpg", name: "тренировочный щит" },
  { id: 16, image: "https://iili.io/nHL11DJ.jpg", name: "деревянный щит" },
  { id: 17, image: "https://iili.io/nHL1hlI.jpg", name: "короткий меч" }
];

// ===========================================
//   АРТЕФАКТЫ ЗА БОССОВ (4 вида)
// ===========================================
const bossArtifacts = [
  { id: 1, image: "https://iili.io/nHirKmv.jpg", name: "Архидемон" },
  { id: 2, image: "https://iili.io/nHigige.jpg", name: "Симбиот" },
  { id: 3, image: "https://iili.io/nHig6q7.jpg", name: "Ученый" },
  { id: 4, image: "https://iili.io/nHigvef.jpg", name: "Архибот" }
];

// ===========================================
//   ЭМБЛЕМА ВОРМИКС
// ===========================================
const wormixEmblem = {
  image: "https://iili.io/nHtWyIS.jpg",
  name: "Эмблема Вормикс"
};

// ===========================================
//   РЕЦЕПТЫ СБОРКИ ШАПОК (13 рецептов)
// ===========================================
const hatCraftRecipes = [
  {
    id: 1,
    ingredients: [
      { type: 'hat', name: 'офицерская фуражка' },
      { type: 'hat', name: 'шлем легионера' },
      { type: 'bossHat', name: 'Император' },
      { type: 'emblem', count: 10 }
    ],
    result: { name: 'головной убор комиссара' },
    cost: "1800 фузов / 18 рубинов"
  },
  {
    id: 2,
    ingredients: [
      { type: 'hat', name: 'демонический шлем' },
      { type: 'hat', name: 'шапка аса' },
      { type: 'emblem', count: 10 }
    ],
    result: { name: 'горящий череп' },
    cost: "2000 фузов / 20 рубинов"
  },
  {
    id: 3,
    ingredients: [
      { type: 'hat', name: 'маска героя' },
      { type: 'hat', name: 'гангстерская шапка' },
      { type: 'emblem', count: 10 }
    ],
    result: { name: 'шлем спецназа' },
    cost: "15 рубинов"
  },
  {
    id: 4,
    ingredients: [
      { type: 'hat', name: 'противогаз' },
      { type: 'hat', name: 'инопланетный шлем' },
      { type: 'emblem', count: 5 }
    ],
    result: { name: 'респиратор' },
    cost: "1200 фузов / 12 рубинов"
  },
  {
    id: 5,
    ingredients: [
      { type: 'hat', name: 'шлем каскадера' },
      { type: 'hat', name: 'огнеупорный шлем' },
      { type: 'emblem', count: 6 }
    ],
    result: { name: 'шлем адского гонщика' },
    cost: "1600 фузов / 16 рубинов"
  },
  {
    id: 6,
    ingredients: [
      { type: 'hat', name: 'очки нео' },
      { type: 'hat', name: 'очки иллюзиониста' },
      { type: 'emblem', count: 7 }
    ],
    result: { name: 'окуляр' },
    cost: "1200 фузов / 12 рубинов"
  },
  {
    id: 7,
    ingredients: [
      { type: 'hat', name: 'шлем биотика' },
      { type: 'hat', name: 'корона древних' },
      { type: 'emblem', count: 8 }
    ],
    result: { name: 'шлем псайкера' },
    cost: "1800 фузов / 18 рубинов"
  },
  {
    id: 8,
    ingredients: [
      { type: 'hat', name: 'черный ворон' },
      { type: 'hat', name: 'крик' },
      { type: 'hat', name: 'шапка алхимика' },
      { type: 'emblem', count: 6 }
    ],
    result: { name: 'ворон' },
    cost: "1400 фузов / 14 рубинов"
  },
  {
    id: 9,
    ingredients: [
      { type: 'hat', name: 'шляпа вампира' },
      { type: 'hat', name: 'маска шамана королей' },
      { type: 'bossHat', name: 'Древний призрак' },
      { type: 'emblem', count: 8 }
    ],
    result: { name: 'зловещий образ' },
    cost: "1600 фузов / 16 рубинов"
  },
  {
    id: 10,
    ingredients: [
      { type: 'hat', name: 'каска' },
      { type: 'hat', name: 'гладиаторский шлем' },
      { type: 'emblem', count: 8 }
    ],
    result: { name: 'скандинавский шлем' },
    cost: "1400 фузов / 14 рубинов"
  },
  {
    id: 11,
    ingredients: [
      { type: 'hat', name: 'меч Палладина' },
      { type: 'hat', name: 'нимб' },
      { type: 'hat', name: 'ловец снов' },
      { type: 'emblem', count: 8 }
    ],
    result: { name: 'шлем чемпиона' },
    cost: "1000 фузов / 10 рубинов"
  },
  {
  id: 12,
  ingredients: [
    { type: 'hat', name: 'самурайский шлем' },
    { type: 'emblem', count: 2 }
  ],
  result: { name: 'самурайский шлем' },
  cost: "800 фузов / 8 рубинов"
},
  {
    id: 13,
    ingredients: [
      { type: 'hat', name: 'маска потрошителя' },
      { type: 'hat', name: 'шлем с шипами' },
      { type: 'emblem', count: 6 }
    ],
    result: { name: 'шлем изверга' },
    cost: "1000 фузов / 10 рубинов"
  }
];

// ===========================================
//   РЕЦЕПТЫ ДЛЯ АРТЕФАКТОВ (пока пусто)
// ===========================================
const artifactCraftRecipes = [];
