// ===========================================
//   БЕСКОНЕЧНОЕ ОРУЖИЕ (51 вид)
// ===========================================
const infiniteWeapons = [
    {
        id: 1,
        name: "Базука",
        image: "https://i.ibb.co/XrwwvSSx/Screenshot-20260902-195424-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "60 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Снаряды подвержены ветру, особенно на низких скоростях."
    },
    {
        id: 2,
        name: "Граната",
        image: "https://i.ibb.co/N209mRyG/Screenshot-20260902-195428-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "60 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Не подвержена ветру, проста в управлении."
    },
    {
        id: 3,
        name: "Отбойный молоток",
        image: "https://i.ibb.co/39LpCgmh/Screenshot-20260902-195438-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "5 ед. за удар",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Прорывает вертикальные тоннели. Для остановки нажмите стрельбу ещё раз."
    },
    {
        id: 4,
        name: "Динамит",
        image: "https://i.ibb.co/kV1nXDBT/Screenshot-20260902-195445-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "75 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Взрывается через 3 секунды, сильно толкает врага."
    },
    {
        id: 5,
        name: "Узи",
        image: "https://i.ibb.co/TMZCZMhh/Screenshot-20260902-195451-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "16 пуль по 5 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Короткие очереди, почти без разброса. Можно менять угол стрельбы."
    },
    {
    id: 6,
    name: "Сюрикены",
    image: "https://i.ibb.co/q62krJp/Screenshot-20260902-195456-Wormix.jpg",
    type: "Бесконечное",
    level: "-",
    damage: "4×17",
    maxUpgrade: "-",
    price: "-",
    upgradeCost: "-",
    comment: "4 сюрикена за ход. Двойной урон при первом попадании по цели."
},
    {
        id: 7,
        name: "Липучая граната",
        image: "https://i.ibb.co/931VkTCH/Screenshot-20260902-195501-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "40 ед. взрыв + 7 осколков по 20 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Прилипает к поверхности, осколки летят вверх."
    },
    {
        id: 8,
        name: "Дробовик",
        image: "https://i.ibb.co/wFhwTpSb/Screenshot-20260902-195506-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "7 дробинок по 13 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Мощное оружие ближнего боя, большой разброс."
    },
    {
    id: 9,
    name: "Ружьё",
    image: "https://i.ibb.co/Gfgkz9Ls/Screenshot-20260902-195511-Wormix.jpg",
    type: "Бесконечное",
    level: "-",
    damage: "2×30",
    maxUpgrade: "-",
    price: "-",
    upgradeCost: "-",
    comment: "Между выстрелами можно перемещаться."
},
    {
        id: 10,
        name: "Пулемёт",
        image: "https://i.ibb.co/1fsC1DCP/Screenshot-20260902-195517-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "20 пуль по 6 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Большой разброс, эффективен на близких дистанциях."
    },
    {
        id: 11,
        name: "Самонаводящаяся ракета",
        image: "https://i.ibb.co/FkqT5tHw/Screenshot-20260902-195522-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "60 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Летит к цели по кратчайшей траектории. Укажите цель на карте."
    },
    {
        id: 12,
        name: "Портативный телепорт",
        image: "https://i.ibb.co/R4vdLyzN/Screenshot-20260902-195529-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "-",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Перемещает бойца в точку броска. Не тратит ход."
    },
    {
        id: 13,
        name: "Электрогарпун",
        image: "https://i.ibb.co/BVTXFtGQ/Screenshot-20260902-195533-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "30 ед. + 8 ед. × 4 раза в сек.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Цепляет и тащит врага к стрелку."
    },
    {
        id: 14,
        name: "Ледяная базука",
        image: "https://i.ibb.co/35d02GhV/Screenshot-20260902-195538-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "40 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Замораживает врагов на 2 хода. Подвержена ветру."
    },
    {
        id: 15,
        name: "Мина",
        image: "https://i.ibb.co/3m4TXLM3/Screenshot-20260902-195542-Wormix.jpg",
        type: "Бесконечное",
        level: "2 ход",
        damage: "40 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Взрывается при входе врага в зону. Установка не тратит ход, если никого нет."
    },
    {
        id: 16,
        name: "Котобазука",
        image: "https://i.ibb.co/G3cQ87Ld/Screenshot-20260902-195548-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "2 отскока по 50 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Стреляет котом, который отскакивает в случайном направлении."
    },
    {
        id: 17,
        name: "Бур",
        image: "https://i.ibb.co/SW79dxK/Screenshot-20260902-195553-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "24 ед. в секунду",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Прорывает горизонтальные тоннели. Для остановки нажмите стрельбу."
    },
    {
        id: 18,
        name: "Осколочная граната",
        image: "https://i.ibb.co/pjC5701s/Screenshot-20260902-195610-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "40 ед. взрыв + 8 осколков по 15 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Не подвержена ветру, эффективна в замкнутых пространствах."
    },
    {
        id: 19,
        name: "Бумеранг",
        image: "https://i.ibb.co/Y7Kn5G4f/Screenshot-20260902-195615-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "70 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "После удара отскакивает, можно поймать и бросить ещё раз. Сильно зависит от ветра."
    },
    {
        id: 20,
        name: "AK-47",
        image: "https://i.ibb.co/N6XCSVbJ/Screenshot-20260902-195621-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "2 очереди по 4 выстрела, 16 ед. за пулю",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Одна пуля может прошить двух врагов."
    },
    {
        id: 21,
        name: "Коктейль Молотова",
        image: "https://i.ibb.co/MyTcXtMV/Screenshot-20260902-195654-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "40 ед. взрыв + 30 ед. огня/сек",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Взрывается от земли, покрывает её горючей смесью."
    },
    {
        id: 22,
        name: "Паразит",
        image: "https://i.ibb.co/hFXF6DNL/Screenshot-20260902-195659-Wormix.jpg",
        type: "Бесконечное",
        level: "2 ход",
        damage: "40 ед. при попадании + 40 ед. при срабатывании",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Прикрепляется к врагу, замедляет и взрывается через 10 секунд."
    },
    {
        id: 23,
        name: "Мортира",
        image: "https://i.ibb.co/mVtmXzcp/Screenshot-20260902-195702-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "35 ед. взрыв + 6 осколков по 25 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Не подвержена ветру. Начальная скорость фиксирована."
    },
    {
        id: 24,
        name: "Огнемёт",
        image: "https://i.ibb.co/1Jtj8FwT/Screenshot-20260902-195705-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "12 капель по 3 ед. + 30 ед. огня/сек",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Струя напалма, земля продолжает гореть."
    },
    {
        id: 25,
        name: "Снайперская винтовка",
        image: "https://i.ibb.co/YFxYtm2H/Screenshot-20260902-195709-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "90 ед. (первая цель), далее снижается",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Пробивает несколько врагов. Урон по ближним целям снижается."
    },
    {
        id: 26,
        name: "Гравитационная пушка",
        image: "https://i.ibb.co/C3mDBz8T/Screenshot-20260902-195712-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "2 выстрела по 20 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Отталкивает врага. Можно стрелять под ноги для прыжка."
    },
    {
        id: 27,
        name: "Мина-паук",
        image: "https://i.ibb.co/CKSZYz8Y/Screenshot-20260902-195719-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "65 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Подползает к врагу, взрывается при его движении. Отравляет ядом."
    },
    {
        id: 28,
        name: "Свин",
        image: "https://i.ibb.co/Z1Mj7f89/Screenshot-20260902-195722-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "90 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Движется в указанном направлении, взрывается по кнопке."
    },
    {
        id: 29,
        name: "Блокиратор",
        image: "https://i.ibb.co/qFr2v5XX/Screenshot-20260902-195726-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "75 ед. уничтожившему",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Блокирует лечение врага. Действует 6 ходов."
    },
    {
        id: 30,
        name: "Охранник",
        image: "https://i.ibb.co/XZmjvstx/Screenshot-20260902-195729-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "10 разрядов по 3 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Обстреливает врагов при приближении. Установка не тратит ход."
    },
    {
        id: 31,
        name: "Балка",
        image: "https://i.ibb.co/mCLm7FCJ/Screenshot-20260902-195733-Wormix.jpg",
        type: "Бесконечное",
        level: "2 ход",
        damage: "-",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Используется как мост или лестница. Установка не тратит ход."
    },
    {
        id: 32,
        name: "Кувалда",
        image: "https://i.ibb.co/xtvJpRRL/Screenshot-20260902-195736-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "от 60 до 280 ед. (35% текущего HP)",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Мощный удар, вгоняет врага в землю."
    },
    {
        id: 33,
        name: "Веревка",
        image: "https://i.ibb.co/TJRk6mx/Screenshot-20260902-195739-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "-",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Позволяет забираться на препятствия. Не тратит ход."
    },
    {
        id: 34,
        name: "Газовая граната",
        image: "https://i.ibb.co/6ktYxNy/Screenshot-20260902-195742-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "50 ед. за ход",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Облако газа, наносит урон ядом всем в зоне. Держится 6 ходов."
    },
    {
        id: 35,
        name: "Электрошокер",
        image: "https://i.ibb.co/v6RFz9k3/Screenshot-20260902-195744-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "40 ед. + урон от падения",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Подбрасывает врага. Эффективен против нескольких целей."
    },
    {
        id: 36,
        name: "Лазерный луч",
        image: "https://i.ibb.co/sJp0bCMM/Screenshot-20260902-195747-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "32 удара по 3 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Прожигает землю и врагов. Можно управлять во время стрельбы."
    },
    {
        id: 37,
        name: "Суперкабан",
        image: "https://i.ibb.co/k6MYMzVr/Screenshot-20260902-195750-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "90 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Управляемый полёт. Взрывается при столкновении."
    },
    {
        id: 38,
        name: "Антифриз",
        image: "https://i.ibb.co/qY16JDWF/Screenshot-20260902-195756-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "-",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Размораживает и защищает от заморозки на 2 хода. Добавляет 50 HP. Тратит ход!"
    },
    {
        id: 39,
        name: "Телепорт",
        image: "https://i.ibb.co/4wjXQx1p/Screenshot-20260902-195800-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "40 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Перемещает в любую точку, наносит урон в точке прибытия. Тратит ход."
    },
    {
        id: 40,
        name: "Экстренный телепорт",
        image: "https://i.ibb.co/ksN9PHSQ/Screenshot-20260902-195804-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "-",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Мгновенно переносит в случайную точку. Не тратит ход."
    },
    {
        id: 41,
        name: "Летающая тарелка",
        image: "https://i.ibb.co/4wL1pfFd/Screenshot-20260902-195809-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "80 ед. при падении",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Может перетаскивать объекты. Упадёт на врага и взорвётся."
    },
    {
        id: 42,
        name: "Бита",
        image: "https://i.ibb.co/bM9KJfcQ/Screenshot-20260902-195813-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "40 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Выбивает врага в направлении удара."
    },
    {
        id: 43,
        name: "Лазерный барьер",
        image: "https://i.ibb.co/d0b9mB3g/Screenshot-20260902-195817-Wormix.jpg",
        type: "Бесконечное",
        level: "2 ход",
        damage: "15 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Создаёт заградительные лучи. Установка не тратит ход."
    },
    {
        id: 44,
        name: "Заземлитель",
        image: "https://i.ibb.co/tTCGcD5b/Screenshot-20260902-195820-Wormix.jpg",
        type: "Бесконечное",
        level: "2 ход",
        damage: "40 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Не даёт врагам долго летать. Установка не тратит ход."
    },
    {
        id: 45,
        name: "Бункеролом",
        image: "https://i.ibb.co/QF3tmbyM/Screenshot-20260902-195824-Wormix.jpg",
        type: "Бесконечное",
        level: "2 ход",
        damage: "40 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Падающая торпеда, бурит землю и взрывается."
    },
    {
        id: 46,
        name: "Удар напалмом",
        image: "https://i.ibb.co/STsQdxn/Screenshot-20260902-195827-Wormix.jpg",
        type: "Бесконечное",
        level: "2 ход",
        damage: "6 ракет по 20 ед. + 30 ед. огня/сек",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Поджигает землю. Можно выбрать сторону удара."
    },
    {
        id: 47,
        name: "Авиаудар",
        image: "https://i.ibb.co/v6SvBBcM/Screenshot-20260902-195830-Wormix.jpg",
        type: "Бесконечное",
        level: "2 ход",
        damage: "5 ракет по 50 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Сбрасывает ракеты в указанную точку. Не зависят от ветра."
    },
    {
        id: 48,
        name: "Метеорит",
        image: "https://i.ibb.co/0R0xHVPp/Screenshot-20260902-195833-Wormix.jpg",
        type: "Бесконечное",
        level: "2 ход",
        damage: "65 ед. + 4 осколка по 35 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Падает под случайным углом, распадается на куски."
    },
    {
        id: 49,
        name: "Котоудар",
        image: "https://i.ibb.co/C32gVybr/Screenshot-20260902-195837-Wormix.jpg",
        type: "Бесконечное",
        level: "2 ход",
        damage: "3 кота, 2 отскока по 50 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Сбрасывает котов, которые отскакивают. Можно выбрать сторону."
    },
    {
        id: 50,
        name: "Арбузобомба",
        image: "https://i.ibb.co/xSnCggyV/Screenshot-20260902-195841-Wormix.jpg",
        type: "Бесконечное",
        level: "-",
        damage: "80 ед. взрыв + 6 кусков по 50 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Мощная осколочная граната."
    },
    {
        id: 51,
        name: "Гравимина",
        image: "https://i.ibb.co/C3XLYLTM/Screenshot-20260902-195716-Wormix.jpg",
        type: "Бесконечное",
        level: "3 ход",
        damage: "-",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
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
        image: "https://i.ibb.co/CpK7x5q7/Screenshot-20260902-182554-Wormix.jpg",
        type: "Штучное",
        level: "-",
        damage: "Восстанавливает 75 ед. здоровья",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Восстанавливает здоровье союзникам рядом. Не тратит ход. На себя не действует."
    },
    {
        id: 2,
        name: "Ледяной орб",
        image: "https://i.ibb.co/sJKJFrnC/Screenshot-20260902-182600-Wormix.jpg",
        type: "Штучное",
        level: "-",
        damage: "50 (прямое) / 30 (осколки)",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Замораживает врагов на 2 хода. Осколки наводятся на цели. Зависят от ветра."
    },
    {
        id: 3,
        name: "Душемёт",
        image: "https://i.ibb.co/qMVLZ6b7/Screenshot-20260902-182605-Wormix.jpg",
        type: "Штучное",
        level: "-",
        damage: "16 душ по 4–8 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Души выбирают цель случайно, могут пройти сквозь землю. Урон зависит от здоровья стрелка."
    },
    {
        id: 4,
        name: "Наковальня",
        image: "https://i.ibb.co/LdQF3193/Screenshot-20260902-182612-Wormix.jpg",
        type: "Штучное",
        level: "5 ход",
        damage: "70 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Падает в указанную точку, вгоняет жертву в землю. Остаётся на поле."
    },
    {
        id: 5,
        name: "Зловонный арбуз",
        image: "https://i.ibb.co/20K4gPLb/Screenshot-20260902-182617-Wormix.jpg",
        type: "Штучное",
        level: "-",
        damage: "90 (взрыв) + 6×65 (куски)",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Протухший арбуз. Отравляет врагов. Выдерживает только 1 отскок."
    },
    {
        id: 6,
        name: "Скверная тыква",
        image: "https://i.ibb.co/GfcbTp4g/Screenshot-20260902-182620-Wormix.jpg",
        type: "Штучное",
        level: "-",
        damage: "10 ед. × 6 ходов",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Заменяет шапку врага. -10 к атаке и защите на 6 ходов. Два раза за бой."
    },
    {
        id: 7,
        name: "Гвоздевая граната",
        image: "https://i.ibb.co/nMQ2fQ3x/Screenshot-20260902-182623-Wormix.jpg",
        type: "Штучное",
        level: "-",
        damage: "12 гвоздей × 16 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Зависает в воздухе на 1.5 сек, обстреливает гвоздями ближайших бойцов."
    },
    {
        id: 8,
        name: "Марш зомби",
        image: "https://i.ibb.co/V0dMSZbC/Screenshot-20260902-182626-Wormix.jpg",
        type: "Штучное",
        level: "6 ход",
        damage: "40 ед. (при падении)",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Призывает 3 зомби в вашу команду. Урон не зависит от параметров."
    },
    {
        id: 9,
        name: "Зелье алхимика",
        image: "https://i.ibb.co/x86m0yzV/Screenshot-20260902-183256-Wormix.jpg",
        type: "Штучное",
        level: "-",
        damage: "-",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Меняет местами атаку и защиту цели. Действует до конца следующего хода. Не тратит ход."
    },
    {
        id: 10,
        name: "Перевязка",
        image: "https://i.ibb.co/fzR8bT17/Screenshot-20260902-183302-Wormix.jpg",
        type: "Штучное",
        level: "-",
        damage: "Восстанавливает 50% урона за прошлый ход",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Один раз за бой на каждого бойца. Не тратит ход."
    },
    {
        id: 11,
        name: "Антитоксин",
        image: "https://i.ibb.co/wFc5p0zg/Screenshot-20260902-183305-Wormix.jpg",
        type: "Штучное",
        level: "-",
        damage: "15 ед. × 6 ходов",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "Защищает от яда на время действия. Не тратит ход."
    },
    {
        id: 12,
        name: "Буран",
        image: "https://i.ibb.co/wh6kVq98/Screenshot-20260902-183326-Wormix.jpg",
        type: "Штучное",
        level: "2 ход",
        damage: "5 льдинок × 40 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
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
        image: "https://i.ibb.co/MkVrWqJf/Screenshot-20260902-234806-Wormix.jpg",
        type: "Апгрейд",
        level: "-",
        damage: "75 ед. взрыв + 2×65 ед. шашки",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "💥 Улучшенный динамит. При взрыве отлетают 2 шашки, которые взрываются при столкновении с землёй или бойцом."
    },
    {
        id: 2,
        name: "Ножи мастера",
        image: "https://i.ibb.co/C3yJf7Kb/Screenshot-20260902-234835-Wormix.jpg",
        type: "Апгрейд",
        level: "-",
        damage: "22 ед. за бросок (первое попадание двойное)",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "🗡️ Улучшенные сюрикены. 5 ножей за ход. Траектория подсвечивается."
    },
    {
        id: 3,
        name: "Липучие мины",
        image: "https://i.ibb.co/Wp4YRk0Q/Screenshot-20260902-234847-Wormix.jpg",
        type: "Апгрейд",
        level: "-",
        damage: "40 ед. взрыв + 8×25 ед. осколки",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "🧨 Улучшенная липучая граната. Осколки, не попавшие в цель, остаются на земле как мины на 5 ходов."
    },
    {
        id: 4,
        name: "Джекхаммер",
        image: "https://i.ibb.co/B2x4kBTv/Screenshot-20260902-234855-Wormix.jpg",
        type: "Апгрейд",
        level: "-",
        damage: "6×14 ед., 2 выстрела",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "🔫 Улучшенный дробовик. Два выстрела за ход. Опустошительное оружие ближнего боя."
    },
    {
        id: 5,
        name: "Управляемый телепорт",
        image: "https://i.ibb.co/tPzYnsM1/Screenshot-20260902-234905-Wormix.jpg",
        type: "Апгрейд",
        level: "-",
        damage: "-",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "🌀 Улучшенный телепорт. Можно переместиться во время полёта с задержкой 1 сек. Не тратит ход."
    },
    {
        id: 6,
        name: "Энергетическая винтовка",
        image: "https://i.ibb.co/fVcmKFzh/Screenshot-20260902-234910-Wormix.jpg",
        type: "Апгрейд",
        level: "-",
        damage: "45 ед. + 3×30 ед. разряды",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "⚡ Улучшенный электрогарпун. Разряды сильно подбрасывают врага. Урон не зависит от атаки и брони."
    },
    {
        id: 7,
        name: "Сенсорная граната",
        image: "https://i.ibb.co/Tq1ZHvCQ/Screenshot-20260902-234931-Wormix.jpg",
        type: "Апгрейд",
        level: "-",
        damage: "45 ед. взрыв + 9×15 ед. осколки",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "💣 Улучшение осколочной гранаты. Взрывается автоматически рядом с врагом. Не подвержена ветру."
    },
    {
        id: 8,
        name: "Осколочный разрушитель",
        image: "https://i.ibb.co/TDhpgP40/Screenshot-20260902-234949-Wormix.jpg",
        type: "Апгрейд",
        level: "-",
        damage: "50 ед. взрыв + 5×35 ед. осколки",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "💥 Улучшение мортиры. Большой радиус. Осколки летят в сторону врага. Траектория подсвечивается."
    },
    {
        id: 9,
        name: "Горящий свин",
        image: "https://i.ibb.co/4ZjVP5JG/Screenshot-20260902-235008-Wormix.jpg",
        type: "Апгрейд",
        level: "2 ход",
        damage: "45 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "🔥 Улучшение свина. Во время движения разбрасывает огонь. Взорвать можно в любой момент."
    },
    {
        id: 10,
        name: "Негатор",
        image: "https://i.ibb.co/Rp02PzKB/Screenshot-20260902-235014-Wormix.jpg",
        type: "Апгрейд",
        level: "-",
        damage: "10 ед. каждый ход",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "🛡️ Улучшение блокиратора. Действует 8 ходов. Наносит урон врагам с HP > 10%."
    },
    {
        id: 11,
        name: "Эластичная балка",
        image: "https://i.ibb.co/KcXcbH9y/Screenshot-20260902-235021-Wormix.jpg",
        type: "Апгрейд",
        level: "2 ход",
        damage: "-",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "📐 Улучшение балки. Можно изменять размер кнопками вверх/вниз. Не тратит ход."
    },
    {
        id: 12,
        name: "Морозящий газ",
        image: "https://i.ibb.co/KzGCkD3y/Screenshot-20260902-235029-Wormix.jpg",
        type: "Апгрейд",
        level: "-",
        damage: "50 ед. за ход",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "❄️ Улучшение газовой гранаты. Замедляет врагов на 1 ход. Облако держится 5 ходов."
    },
    {
        id: 13,
        name: "Похититель",
        image: "https://i.ibb.co/XkVp4wWW/Screenshot-20260902-235042-Wormix.jpg",
        type: "Апгрейд",
        level: "-",
        damage: "95 ед. при падении",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "🛸 Улучшенная тарелка. Может переносить союзников и объекты. Урон при падении на врага — 95 ед."
    },
    {
        id: 14,
        name: "Зимний страж",
        image: "https://i.ibb.co/zCDcVkS/Screenshot-20260902-235053-Wormix.jpg",
        type: "Апгрейд",
        level: "2 ход",
        damage: "40 ед. при срабатывании",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "🧊 Улучшение заземлителя. Гасит огонь, защищает от заморозки, замораживает врагов на 1 ход."
    },
    {
        id: 15,
        name: "Точечный удар",
        image: "https://i.ibb.co/1fxJPTR5/Screenshot-20260902-235100-Wormix.jpg",
        type: "Апгрейд",
        level: "4 ход",
        damage: "5 ракет по 50 ед.",
        maxUpgrade: "-",
        price: "-",
        upgradeCost: "-",
        comment: "🎯 Улучшенный авиаудар. Ракеты наводятся на цель. Можно выбрать сторону удара."
    }
];

// ============================================
//    ШАПКИ (база) — 61 вид + 13 итоговых
// ============================================
const hats = [
    {
        id: 1,
        image: "https://i.ibb.co/TxNz9f2s/Screenshot-20260903-114356-Wormix.jpg",
        name: "панамка"
    },
    {
        id: 2,
        image: "https://i.ibb.co/21MV1W6X/Screenshot-20260903-114400-Wormix.jpg",
        name: "звездочета"
    },
    {
        id: 3,
        image: "https://i.ibb.co/xSmH8NNC/Screenshot-20260903-114403-Wormix.jpg",
        name: "белая шапка"
    },
    {
        id: 4,
        image: "https://i.ibb.co/s9WYzvhd/Screenshot-20260903-114406-Wormix.jpg",
        name: "розовая шапка"
    },
    {
        id: 5,
        image: "https://i.ibb.co/GvwLLCW3/Screenshot-20260903-114417-Wormix.jpg",
        name: "японская причёска"
    },
    {
        id: 6,
        image: "https://i.ibb.co/j9v9wC9h/Screenshot-20260903-114412-Wormix.jpg",
        name: "цилиндр"
    },
    {
        id: 7,
        image: "https://i.ibb.co/QFC1gyMC/Screenshot-20260903-114409-Wormix.jpg",
        name: "каска"
    },
    {
        id: 8,
        image: "https://i.ibb.co/WN86X4D0/Screenshot-20260903-114429-Wormix.jpg",
        name: "шапка монаха"
    },
    {
        id: 9,
        image: "https://i.ibb.co/SwJ87XPF/Screenshot-20260903-114424-Wormix.jpg",
        name: "бейсбольная кепка"
    },
    {
        id: 10,
        image: "https://i.ibb.co/5xsMW4cC/Screenshot-20260903-114420-Wormix.jpg",
        name: "инопланетный шлем"
    },
    {
        id: 11,
        image: "https://i.ibb.co/x8s2yky6/Screenshot-20260903-114443-Wormix.jpg",
        name: "скафандр"
    },
    {
        id: 12,
        image: "https://i.ibb.co/5xt4WZwm/Screenshot-20260903-114440-Wormix.jpg",
        name: "берет"
    },
    {
        id: 13,
        image: "https://i.ibb.co/Fk6P74PH/Screenshot-20260903-114435-Wormix.jpg",
        name: "берет девочки"
    },
    {
        id: 14,
        image: "https://i.ibb.co/svJkTkdt/Screenshot-20260903-114456-Wormix.jpg",
        name: "пиратская шапка"
    },
    {
        id: 15,
        image: "https://i.ibb.co/fGx67kyF/Screenshot-20260903-114452-Wormix.jpg",
        name: "маска потрошителя"
    },
    {
        id: 16,
        image: "https://i.ibb.co/chBJwyRg/Screenshot-20260903-114447-Wormix.jpg",
        name: "шлем викингов"
    },
    {
        id: 17,
        image: "https://i.ibb.co/5Xb2yV5s/Screenshot-20260903-114506-Wormix.jpg",
        name: "перо индейца"
    },
    {
        id: 18,
        image: "https://i.ibb.co/vvCXfjY0/Screenshot-20260903-114503-Wormix.jpg",
        name: "очки авиатора"
    },
    {
        id: 19,
        image: "https://i.ibb.co/YFGJ5fc3/Screenshot-20260903-114500-Wormix.jpg",
        name: "самурайский шлем"
    },
    {
        id: 20,
        image: "https://i.ibb.co/3ybJ3062/Screenshot-20260903-114517-Wormix.jpg",
        name: "шлем с шипами"
    },
    {
        id: 21,
        image: "https://i.ibb.co/tPctFmcj/Screenshot-20260903-114514-Wormix.jpg",
        name: "зеленый эрокез"
    },
    {
        id: 22,
        image: "https://i.ibb.co/ycvXkc2m/Screenshot-20260903-114509-Wormix.jpg",
        name: "боевая кастрюля"
    },
    {
        id: 23,
        image: "https://i.ibb.co/PvCh2hfX/Screenshot-20260903-114523-Wormix.jpg",
        name: "сомбреро"
    },
    {
        id: 24,
        image: "https://i.ibb.co/8DM2JSy8/Screenshot-20260903-114520-Wormix.jpg",
        name: "гангстерская шапка"
    },
    {
        id: 25,
        image: "https://i.ibb.co/Psht22sZ/Screenshot-20260903-114529-Wormix.jpg",
        name: "цветной эрокез"
    },
    {
        id: 26,
        image: "https://i.ibb.co/v4mKpShK/Screenshot-20260903-114540-Wormix.jpg",
        name: "шлем легионера"
    },
    {
        id: 27,
        image: "https://i.ibb.co/gbSt943H/Screenshot-20260903-114537-Wormix.jpg",
        name: "очки иллюзиониста"
    },
    {
        id: 28,
        image: "https://i.ibb.co/F4SyWckZ/Screenshot-20260903-114533-Wormix.jpg",
        name: "электрошапка"
    },
    {
        id: 29,
        image: "https://i.ibb.co/tp4fjM4S/Screenshot-20260903-114556-Wormix.jpg",
        name: "корона древних"
    },
    {
        id: 30,
        image: "https://i.ibb.co/3yh2gpnz/Screenshot-20260903-114550-Wormix.jpg",
        name: "нимб"
    },
    {
        id: 31,
        image: "https://i.ibb.co/fYcgM9Pc/Screenshot-20260903-114545-Wormix.jpg",
        name: "перья вождя"
    },
    {
        id: 32,
        image: "https://i.ibb.co/bMsHHvd1/Screenshot-20260903-114559-Wormix.jpg",
        name: "гладиаторский шлем"
    },
    {
        id: 33,
        image: "https://i.ibb.co/qY2gfH3h/Screenshot-20260903-114603-Wormix.jpg",
        name: "противогаз"
    },
    {
        id: 34,
        image: "https://i.ibb.co/VYnxn9BK/Screenshot-20260903-114607-Wormix.jpg",
        name: "шапка бомба"
    },
    {
        id: 35,
        image: "https://i.ibb.co/chyttbN2/Screenshot-20260903-114622-Wormix.jpg",
        name: "маска доктора"
    },
    {
        id: 36,
        image: "https://i.ibb.co/k6QFww84/Screenshot-20260903-114617-Wormix.jpg",
        name: "прибор ночного видения"
    },
    {
        id: 37,
        image: "https://i.ibb.co/Ng4kMmGt/Screenshot-20260903-114613-Wormix.jpg",
        name: "изысканный шлем"
    },
    {
        id: 38,
        image: "https://i.ibb.co/8nBS5r8c/Screenshot-20260903-114632-Wormix.jpg",
        name: "очки Нео"
    },
    {
        id: 39,
        image: "https://i.ibb.co/jZ5YnPCM/Screenshot-20260903-114637-Wormix.jpg",
        name: "ночная шапка"
    },
    {
        id: 40,
        image: "https://i.ibb.co/ns7bs39v/Screenshot-20260903-114626-Wormix.jpg",
        name: "капюшон"
    },
    {
        id: 41,
        image: "https://i.ibb.co/23fzj1zK/Screenshot-20260903-114650-Wormix.jpg",
        name: "шапка-ушанка"
    },
    {
        id: 42,
        image: "https://i.ibb.co/qYk5hxWq/Screenshot-20260903-114645-Wormix.jpg",
        name: "повязка банды якудза"
    },
    {
        id: 43,
        image: "https://i.ibb.co/hzGZmKH/Screenshot-20260903-114641-Wormix.jpg",
        name: "шапка мастера"
    },
    {
        id: 44,
        image: "https://i.ibb.co/zT5TwgrT/Screenshot-20260903-114659-Wormix.jpg",
        name: "шляпа шерифа"
    },
    {
        id: 45,
        image: "https://i.ibb.co/FkJTTbx1/Screenshot-20260903-114702-Wormix.jpg",
        name: "гоночный шлем"
    },
    {
        id: 46,
        image: "https://i.ibb.co/HLdJGLGH/Screenshot-20260903-114655-Wormix.jpg",
        name: "огнеупорный шлем"
    },
    {
        id: 47,
        image: "https://i.ibb.co/YF4cZpSH/Screenshot-20260903-114713-Wormix.jpg",
        name: "офицерская фуражка"
    },
    {
        id: 48,
        image: "https://i.ibb.co/dhDc9JZ/Screenshot-20260903-114709-Wormix.jpg",
        name: "шапка аса"
    },
    {
        id: 49,
        image: "https://i.ibb.co/sJkbmY5C/Screenshot-20260903-114720-Wormix.jpg",
        name: "шлем биотика"
    },
    {
        id: 50,
        image: "https://i.ibb.co/My1RL8Bj/Screenshot-20260903-114723-Wormix.jpg",
        name: "повязка ниндзя"
    },
    {
        id: 51,
        image: "https://i.ibb.co/NnGhWdm0/Screenshot-20260903-114716-Wormix.jpg",
        name: "прическа Элвиса"
    },
    {
        id: 52,
        image: "https://i.ibb.co/kbcFN2b/Screenshot-20260903-114706-Wormix.jpg",
        name: "шлем каскадера"
    },
    {
        id: 53,
        image: "https://i.ibb.co/yF9h6FcB/Screenshot-20260903-114735-Wormix.jpg",
        name: "докторская повязка"
    },
    {
        id: 54,
        image: "https://i.ibb.co/ym01g1Vn/Screenshot-20260903-114729-Wormix.jpg",
        name: "маска шамана королей"
    },
    {
        id: 55,
        image: "https://i.ibb.co/NnHf97mS/Screenshot-20260903-114726-Wormix.jpg",
        name: "советская шапка"
    },
    {
        id: 56,
        image: "https://i.ibb.co/JwhRCFg4/Screenshot-20260903-114738-Wormix.jpg",
        name: "челюсть"
    },
    {
        id: 57,
        image: "https://i.ibb.co/Z6RqzqyD/Screenshot-20260903-114742-Wormix.jpg",
        name: "демонический шлем"
    },
    {
        id: 58,
        image: "https://i.ibb.co/jvbWwgYR/Screenshot-20260903-114745-Wormix.jpg",
        name: "маска героя"
    },
    {
        id: 59,
        image: "https://i.ibb.co/LDVRqP6b/Screenshot-20260903-114755-Wormix.jpg",
        name: "крик"
    },
    {
        id: 60,
        image: "https://i.ibb.co/GvGwgvxy/Screenshot-20260903-114752-Wormix.jpg",
        name: "черный ворон"
    },
    {
        id: 61,
        image: "https://i.ibb.co/P7FQkf0/Screenshot-20260903-114748-Wormix.jpg",
        name: "шляпа вампира"
    },
    // ===== Итоговые шапки =====
    {
        id: 62,
        image: "https://i.ibb.co/YBrZjnhn/Screenshot-20260903-141707-Wormix.jpg",
        name: "головной убор комиссара"
    },
    {
        id: 63,
        image: "https://i.ibb.co/zh5cNXfF/Screenshot-20260903-141711-Wormix.jpg",
        name: "горящий череп"
    },
    {
        id: 64,
        image: "https://i.ibb.co/prn2fBnY/Screenshot-20260903-141714-Wormix.jpg",
        name: "шлем спецназа"
    },
    {
        id: 65,
        image: "https://i.ibb.co/7x86KVTq/Screenshot-20260903-141717-Wormix.jpg",
        name: "респиратор"
    },
    {
        id: 66,
        image: "https://i.ibb.co/jkWRxTf9/Screenshot-20260903-141722-Wormix.jpg",
        name: "шлем адского гонщика"
    },
    {
        id: 67,
        image: "https://i.ibb.co/NkYXbv7/Screenshot-20260903-141734-Wormix.jpg",
        name: "окуляр"
    },
    {
        id: 68,
        image: "https://i.ibb.co/LzxWYN89/Screenshot-20260903-141736-Wormix.jpg",
        name: "шлем псайкера"
    },
    {
        id: 69,
        image: "https://i.ibb.co/B51WvSN6/Screenshot-20260903-141739-Wormix.jpg",
        name: "ворон"
    },
    {
        id: 70,
        image: "https://i.ibb.co/chPCcfh1/Screenshot-20260903-141741-Wormix.jpg",
        name: "зловещий образ"
    },
    {
        id: 71,
        image: "https://i.ibb.co/ZRSD2BTh/Screenshot-20260903-141744-Wormix.jpg",
        name: "скандинавский шлем"
    },
    {
        id: 72,
        image: "https://i.ibb.co/VWZCJbq0/Screenshot-20260903-141746-Wormix.jpg",
        name: "шлем чемпиона"
    },
    {
        id: 73,
        image: "https://i.ibb.co/WWWQwjgn/Screenshot-20260903-141748-Wormix.jpg",
        name: "самурайский"
    },
    {
        id: 74,
        image: "https://i.ibb.co/BHK3QXr9/Screenshot-20260903-141756-Wormix.jpg",
        name: "шлем изверга"
    }
];

// ===========================================
//   ШАПКИ ЗА БОССОВ (21 вид)
// ===========================================
const bossHats = [
    {
        id: 1,
        image: "https://i.ibb.co/5W5pjfQs/Screenshot-20260903-130447-Wormix.jpg",
        name: "Шаман вуду"
    },
    {
        id: 2,
        image: "https://i.ibb.co/4nQbyZtm/Screenshot-20260903-130452-Wormix.jpg",
        name: "Иллюзионист"
    },
    {
        id: 3,
        image: "https://i.ibb.co/3PmtbHF/Screenshot-20260903-130455-Wormix.jpg",
        name: "Викинги"
    },
    {
        id: 4,
        image: "https://i.ibb.co/sv1WSxqT/Screenshot-20260903-130458-Wormix.jpg",
        name: "Пираты"
    },
    {
        id: 5,
        image: "https://i.ibb.co/rfkpK5P0/Screenshot-20260903-130504-Wormix.jpg",
        name: "Мастер ветра"
    },
    {
        id: 6,
        image: "https://i.ibb.co/Ngn8c4cV/Screenshot-20260903-130509-Wormix.jpg",
        name: "Якудза"
    },
    {
        id: 7,
        image: "https://i.ibb.co/zHBb74dn/Screenshot-20260903-130513-Wormix.jpg",
        name: "Оживший капитан"
    },
    {
        id: 8,
        image: "https://i.ibb.co/vx4cLqVn/Screenshot-20260903-130519-Wormix.jpg",
        name: "Ромео и Джульетта"
    },
    {
        id: 9,
        image: "https://i.ibb.co/1GncrFGY/Screenshot-20260903-130524-Wormix.jpg",
        name: "Король мертвых"
    },
    {
        id: 10,
        image: "https://i.ibb.co/wN6TfPMd/Screenshot-20260903-130526-Wormix.jpg",
        name: "Древний призрак"
    },
    {
        id: 11,
        image: "https://i.ibb.co/rRgj0G3K/Screenshot-20260903-130529-Wormix.jpg",
        name: "Инженер"
    },
    {
        id: 12,
        image: "https://i.ibb.co/NdsSS7DN/Screenshot-20260903-130531-Wormix.jpg",
        name: "Стражи недр"
    },
    {
        id: 13,
        image: "https://i.ibb.co/SwKRFcBP/Screenshot-20260903-130535-Wormix.jpg",
        name: "Темный рыцарь"
    },
    {
        id: 14,
        image: "https://i.ibb.co/SX9Sxrnp/Screenshot-20260903-130538-Wormix.jpg",
        name: "Ассасин"
    },
    {
        id: 15,
        image: "https://i.ibb.co/2bzN3F1/Screenshot-20260903-130541-Wormix.jpg",
        name: "Алхимик"
    },
    {
        id: 16,
        image: "https://i.ibb.co/bgYztZYb/Screenshot-20260903-130549-Wormix.jpg",
        name: "Император"
    },
    {
        id: 17,
        image: "https://i.ibb.co/fzJsdksf/Screenshot-20260903-131215-Wormix.jpg",
        name: "Хакер"
    },
    {
        id: 18,
        image: "https://i.ibb.co/fmGtFXq/Screenshot-20260903-131217-Wormix.jpg",
        name: "Ворюги"
    },
    {
        id: 19,
        image: "https://i.ibb.co/dJ6418Ds/Screenshot-20260903-131212-Wormix.jpg",
        name: "Палладин"
    },
    {
        id: 20,
        image: "https://i.ibb.co/6JBLdsR0/Screenshot-20260903-131220-Wormix.jpg",
        name: "Телепат"
    },
    {
        id: 21,
        image: "https://i.ibb.co/bRYHgpRG/Screenshot-20260903-131223-Wormix.jpg",
        name: "Фантомы"
    }
];

// ============================================
//    АРТЕФАКТЫ (база + итоговые) — 19 видов
// ============================================
const artifacts = [
    {
        id: 1,
        image: "https://i.ibb.co/nNHGmC46/Screenshot-20260903-133700-Wormix.jpg",
        name: "каменный молот"
    },
    {
        id: 2,
        image: "https://i.ibb.co/j9WWf4vx/Screenshot-20260903-133657-Wormix.jpg",
        name: "ледяной клык"
    },
    {
        id: 3,
        image: "https://i.ibb.co/HD2w2P0c/Screenshot-20260903-133653-Wormix.jpg",
        name: "пиратский крюк"
    },
    {
        id: 4,
        image: "https://i.ibb.co/HfqPfgqb/Screenshot-20260903-133649-Wormix.jpg",
        name: "вампирский меч"
    },
    {
        id: 5,
        image: "https://i.ibb.co/mFyQJ7p8/Screenshot-20260903-133645-Wormix.jpg",
        name: "пила"
    },
    {
        id: 6,
        image: "https://i.ibb.co/tp3fvNLc/Screenshot-20260903-133642-Wormix.jpg",
        name: "тотем яда"
    },
    {
        id: 7,
        image: "https://i.ibb.co/MxyZhvfw/Screenshot-20260903-133639-Wormix.jpg",
        name: "робощит"
    },
    {
        id: 8,
        image: "https://i.ibb.co/kgkWCcYw/Screenshot-20260903-133633-Wormix.jpg",
        name: "тотем огня"
    },
    {
        id: 9,
        image: "https://i.ibb.co/6JTxGLZh/Screenshot-20260903-133630-Wormix.jpg",
        name: "посох с черепушкой"
    },
    {
        id: 10,
        image: "https://i.ibb.co/bRvFDjrf/Screenshot-20260903-133626-Wormix.jpg",
        name: "световой меч"
    },
    {
        id: 11,
        image: "https://i.ibb.co/gL0MpDYd/Screenshot-20260903-133608-Wormix.jpg",
        name: "ловец снов"
    },
    {
        id: 12,
        image: "https://i.ibb.co/nNn2kB1N/Screenshot-20260903-133604-Wormix.jpg",
        name: "меч Палладина"
    },
    {
        id: 13,
        image: "https://i.ibb.co/BHycwtmY/Screenshot-20260903-133601-Wormix.jpg",
        name: "железный щит"
    },
    {
        id: 14,
        image: "https://i.ibb.co/kVxpH8XS/Screenshot-20260903-133557-Wormix.jpg",
        name: "сломанный меч"
    },
    {
        id: 15,
        image: "https://i.ibb.co/yccFrBbZ/Screenshot-20260903-133554-Wormix.jpg",
        name: "тренировочный щит"
    },
    {
        id: 16,
        image: "https://i.ibb.co/gFThn8tR/Screenshot-20260903-133550-Wormix.jpg",
        name: "деревянный щит"
    },
    {
        id: 17,
        image: "https://i.ibb.co/FkJzFS02/Screenshot-20260903-133545-Wormix.jpg",
        name: "короткий меч"
    },
    // ===== ИТОГОВЫЕ АРТЕФАКТЫ (результаты сборки) =====
    {
        id: 18,
        image: "https://i.ibb.co/m5N66rNx/Screenshot-20260903-141729-Wormix.jpg",
        name: "змеиный посох"
    },
    {
        id: 19,
        image: "https://i.ibb.co/gMFGpvNK/Screenshot-20260903-141720-Wormix.jpg",
        name: "ледяной щит"
    }
];

// ============================================
//    АРТЕФАКТЫ ЗА БОССОВ (4 вида)
// ============================================
const bossArtifacts = [
    {
        id: 1,
        image: "https://i.ibb.co/1GVyfx10/Screenshot-20260903-131226-Wormix.jpg",
        name: "Архидемон"
    },
    {
        id: 2,
        image: "https://i.ibb.co/S2ZQt5y/Screenshot-20260903-130557-Wormix.jpg",
        name: "Симбиот"
    },
    {
        id: 3,
        image: "https://i.ibb.co/r2NWVPLY/Screenshot-20260903-130553-Wormix.jpg",
        name: "Ученый"
    },
    {
        id: 4,
        image: "https://i.ibb.co/zhWQBxT9/Screenshot-20260903-130544-Wormix.jpg",
        name: "Архибот"
    }
];

// ============================================
//    ЭМБЛЕМА ВОРМИКС
// ============================================
const wormixEmblem = {
    image: "https://i.ibb.co/yFkGB5Rg/Screenshot-20260903-141832-Wormix.jpg",
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
      { type: 'bossHat', name: 'Алхимик' },
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
      { type: 'artifact', name: 'меч Палладина' },
      { type: 'hat', name: 'нимб' },
      { type: 'artifact', name: 'ловец снов' },
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
  result: { name: 'самурайский' },
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

// ============================================
//    РЕЦЕПТЫ СБОРКИ АРТЕФАКТОВ
// ============================================
const artifactCraftRecipes = [
    {
        id: 1,
        ingredients: [
            { type: 'artifact', name: 'посох с черепушкой' },
            { type: 'artifact', name: 'световой меч' },
            { type: 'emblem', count: 7 }
        ],
        result: { name: 'змеиный посох' },
        cost: "1800 фузов / 18 рубинов"
    },
    {
        id: 2,
        ingredients: [
            { type: 'artifact', name: 'робощит' },
            { type: 'artifact', name: 'ледяной клык' },
            { type: 'emblem', count: 6 }
        ],
        result: { name: 'ледяной щит' },
        cost: "1600 фузов / 16 рубинов"
    }
];
