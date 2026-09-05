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
