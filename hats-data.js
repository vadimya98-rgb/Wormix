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
