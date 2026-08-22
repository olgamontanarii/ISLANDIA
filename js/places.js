/* =========================================================
   ISLANDIA 2026 · PLACES.JS

   PUNTOS ÚTILES DEL VIAJE

   Este archivo contiene lugares que queremos poder
   consultar independientemente de las rutas:

   ⛺ CAMPINGS
   🛒 SUPERMERCADOS

   Después map.js utilizará estos arrays para los filtros:

   TODO
   DÍA 1
   DÍA 2
   ...
   CAMPINGS
   SUPERMERCADOS
========================================================= */


/* =========================================================
   CAMPINGS
========================================================= */

const campsites = [


  /* =======================================================
     NOCHE 1 · DESPUÉS DE SKY LAGOON
  ======================================================= */


  /* -------------------------------------------------------
     REYKJAVÍK ECO CAMPSITE
  ------------------------------------------------------- */

  {
    id: "reykjavik-eco",

    day: 1,

    name: "Reykjavík Eco Campsite",

    area: "Reykjavík",

    priority: 3,

    mood: "😵 AGOTADOS",

    recommended: false,

    location: {
      lat: 64.1466,
      lng: -21.8750
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Reykjavik+Eco+Campsite",

    description:
      "Opción para la primera noche si después del vuelo, Reykjavík y Sky Lagoon estamos demasiado cansados para seguir conduciendo.",

    tags: [
      "🌙 Noche 1",
      "😴 Menos conducción",
      "📍 Reykjavík"
    ]
  },


  /* -------------------------------------------------------
     MOSSKÓGAR
  ------------------------------------------------------- */

  {
    id: "mosskogar",

    day: 1,

    name: "Mosskógar Camping",

    area: "Mosfellsdalur",

    priority: 2,

    mood: "🙂 NORMALES",

    recommended: true,

    location: {
      lat: 64.1870,
      lng: -21.6200
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mosskogar+Camping+Iceland",

    description:
      "Buen compromiso después de Sky Lagoon: avanzamos hacia Þingvellir sin tener que conducir hasta el Parque Nacional.",

    tags: [
      "🌙 Noche 1",
      "⭐ Buen equilibrio",
      "🚐 Avanzamos ruta"
    ]
  },


  /* -------------------------------------------------------
     NYRÐRI LEIRAR
  ------------------------------------------------------- */

  {
    id: "nyrdri-leirar",

    day: 1,

    name: "Þingvellir · Nyrðri Leirar",

    area: "Þingvellir",

    priority: 1,

    mood: "😎 CON ENERGÍA",

    recommended: true,

    location: {
      lat: 64.2850,
      lng: -21.0890
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Nyrdri+Leirar+Camping+Thingvellir",

    description:
      "La mejor opción logística para la primera noche: dormimos dentro de Þingvellir y empezamos allí el Día 2.",

    price: {
      adultISK: 1800,
      adultEUR: 13,

      vehicleISK: 400,
      vehicleEUR: 3,

      electricityISK: 1100,
      electricityEUR: 8
    },

    tags: [
      "🌙 Noche 1",
      "⭐ Mejor logística",
      "🌋 Þingvellir",
      "⚡ Electricidad opcional"
    ]
  },


  /* =======================================================
     NOCHE 2 · HELLA / HVOLSVÖLLUR
  ======================================================= */


  /* -------------------------------------------------------
     GADDSTAÐAFLATIR
  ------------------------------------------------------- */

  {
    id: "gaddstadaflatir",

    day: 2,

    name: "Gaddstaðaflatir Camping",

    area: "Hella",

    priority: 2,

    recommended: true,

    location: {
      lat: 63.8319,
      lng: -20.4008
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Gaddstadaflatir+Camping+Hella+Iceland",

    description:
      "Buena opción si después del Círculo Dorado queremos parar en Hella sin seguir conduciendo demasiado.",

    price: {
      adultISK: 2450,
      adultEUR: 17,

      unitISK: 400,
      unitEUR: 3
    },

    tags: [
      "🌙 Noche 2",
      "📍 Hella",
      "🚿 Duchas",
      "⚡ Electricidad",
      "🍳 Cocina"
    ]
  },


  /* -------------------------------------------------------
     HVOLSVÖLLUR
  ------------------------------------------------------- */

  {
    id: "hvolsvollur",

    day: 2,

    name: "Hvolsvöllur Camp Site",

    area: "Hvolsvöllur",

    priority: 1,

    recommended: true,

    location: {
      lat: 63.7507,
      lng: -20.2244
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hvolsvollur+Camp+Site+Iceland",

    description:
      "Nuestra opción logística favorita si vamos bien de tiempo: avanzamos más hacia Seljalandsfoss y la Costa Sur.",

    tags: [
      "🌙 Noche 2",
      "⭐ Mejor logística",
      "🚐 Cerca del inicio Día 3"
    ]
  },


  /* -------------------------------------------------------
     HELLISHÓLAR
  ------------------------------------------------------- */

  {
    id: "hellisholar",

    day: 2,

    name: "Hellishólar Campsite",

    area: "Hvolsvöllur",

    priority: 3,

    recommended: false,

    location: {
      lat: 63.6905,
      lng: -20.0845
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hellisholar+Campsite+Iceland",

    description:
      "Alternativa para la segunda noche en la zona de Hvolsvöllur.",

    tags: [
      "🌙 Noche 2",
      "🟡 Alternativa"
    ]
  },


  /* =======================================================
     NOCHE 3 · VÍK / KIRKJUBÆJARKLAUSTUR
  ======================================================= */


  /* -------------------------------------------------------
     VÍK CAMPING
  ------------------------------------------------------- */

  {
    id: "vik-camping",

    day: 3,

    name: "Vík Camping",

    area: "Vík",

    priority: 2,

    recommended: false,

    location: {
      lat: 63.4193,
      lng: -19.0066
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Vik+Camping+Iceland",

    description:
      "Opción fácil si terminamos cansados después de los caballos. Cenamos y dormimos directamente en Vík.",

    tags: [
      "🌙 Noche 3",
      "😴 Fácil",
      "🚿 Duchas",
      "⚡ Electricidad",
      "📍 Vík"
    ]
  },


  /* -------------------------------------------------------
     KIRKJUBÆR II
  ------------------------------------------------------- */

  {
    id: "kirkjubaer-ii",

    day: 3,

    name: "Kirkjubær II Camping",

    area: "Kirkjubæjarklaustur",

    priority: 1,

    recommended: true,

    location: {
      lat: 63.7905,
      lng: -18.0490
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kirkjubaer+II+Camping+Iceland",

    description:
      "Nuestra opción favorita si después de Vík todavía tenemos energía. Nos deja muy bien colocados para Fjaðrárgljúfur y Skaftafell.",

    price: {
      adultISK: 2000,
      adultEUR: 14,

      unitISK: 400,
      unitEUR: 3,

      electricityISK: 1500,
      electricityEUR: 11
    },

    tags: [
      "🌙 Noche 3",
      "⭐ Recomendado",
      "🚐 Avanzamos ~70 km",
      "⚡ Electricidad",
      "🍳 Cocina"
    ]
  },


  /* -------------------------------------------------------
     ÞAKGIL
  ------------------------------------------------------- */

  {
    id: "thakgil",

    day: 3,

    name: "Þakgil Camping",

    area: "Zona Vík",

    priority: 3,

    recommended: false,

    location: {
      lat: 63.5307,
      lng: -18.7875
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Thakgil+Camping+Iceland",

    description:
      "Camping espectacular entre montañas, pero poco práctico para nuestro itinerario porque implica un desvío.",

    tags: [
      "🌙 Noche 3",
      "🏔️ Muy bonito",
      "🟡 Poco práctico",
      "🚐 Desvío"
    ]
  },


  /* =======================================================
     NOCHE 4 · SKAFTAFELL / SVÍNAFELL
  ======================================================= */


  /* -------------------------------------------------------
     SKAFTAFELL CAMPING
  ------------------------------------------------------- */

  {
    id: "skaftafell-camping",

    day: 4,

    name: "Skaftafell Camping",

    area: "Skaftafell",

    priority: 1,

    recommended: true,

    location: {
      lat: 64.0167,
      lng: -16.9660
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Skaftafell+Camping+Iceland",

    description:
      "Muy buena opción después de Diamond Beach si llegamos dentro del horario permitido de entrada de vehículos.",

    tags: [
      "🌙 Noche 4",
      "⭐ Mejor si llegamos a tiempo",
      "🚐 Retrocedemos hacia el oeste",
      "⚡ Electricidad",
      "🚿 Servicios"
    ],

    warning:
      "Comprobar antes del viaje el horario de entrada de vehículos."
  },


  /* -------------------------------------------------------
     SVÍNAFELL
  ------------------------------------------------------- */

  {
    id: "svinafell",

    day: 4,

    name: "Svínafell Camping",

    area: "Svínafell / Skaftafell",

    priority: 2,

    recommended: true,

    location: {
      lat: 64.0080,
      lng: -16.8700
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Svinafell+Camping+Iceland",

    description:
      "Alternativa muy práctica cerca de Skaftafell para retroceder hacia el oeste después de Jökulsárlón.",

    price: {
      adultISK: 2300,
      adultEUR: 16
    },

    tags: [
      "🌙 Noche 4",
      "⭐ Práctico",
      "🚿 Duchas",
      "🍳 Cocina/comedor",
      "❌ Sin electricidad camper"
    ]
  },


  /* =======================================================
     NOCHE 5 · HEIMAEY
  ======================================================= */

  {
    id: "vestmannaeyjar-camping",

    day: 5,

    name: "Vestmannaeyjar Camp Site",

    area: "Heimaey",

    priority: 1,

    recommended: true,

    location: {
      lat: 63.4420,
      lng: -20.2950
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Vestmannaeyjar+Camp+Site+Iceland",

    description:
      "Camping para nuestra noche en Heimaey. No regresamos al continente hasta el Día 6.",

    tags: [
      "🌙 Noche 5",
      "⭐ FIJO",
      "🌋 Heimaey",
      "⛴️ Ferry al día siguiente"
    ]
  },


  /* =======================================================
     NOCHE 6 · HVERAGERÐI / REYKJAVÍK
  ======================================================= */


  /* -------------------------------------------------------
     REYKJAMÖRK
  ------------------------------------------------------- */

  {
    id: "reykjamork",

    day: 6,

    name: "Reykjamörk · Hveragerði",

    area: "Hveragerði",

    priority: 2,

    recommended: false,

    location: {
      lat: 64.0000,
      lng: -21.1900
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Reykjamork+Camping+Hveragerdi+Iceland",

    description:
      "Opción si terminamos Reykjadalur cansados o tarde y no queremos cruzar Hellisheiði.",

    tags: [
      "🌙 Noche 6",
      "😴 Poco trayecto",
      "♨️ Hveragerði",
      "⚡ Electricidad"
    ]
  },


  /* -------------------------------------------------------
     REYKJAVÍK ECO · NOCHE 6
  ------------------------------------------------------- */

  {
    id: "reykjavik-eco-night-6",

    day: 6,

    name: "Reykjavík Eco Campsite",

    area: "Reykjavík",

    priority: 1,

    recommended: true,

    location: {
      lat: 64.1466,
      lng: -21.8750
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Reykjavik+Eco+Campsite",

    description:
      "Nuestra opción preferida si terminamos Reykjadalur con tiempo y energía. Dormimos ya en Reykjavík.",

    tags: [
      "🌙 Noche 6",
      "⭐ Mejor para el día siguiente",
      "🏙️ Reykjavík"
    ]
  },


  /* -------------------------------------------------------
     EYRARBAKKI
  ------------------------------------------------------- */

  {
    id: "eyrarbakki-camping",

    day: 6,

    name: "Eyrarbakki Campsite",

    area: "Eyrarbakki",

    priority: 3,

    recommended: false,

    location: {
      lat: 63.8620,
      lng: -21.1480
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Eyrarbakki+Campsite+Iceland",

    description:
      "Alternativa únicamente si reorganizamos el Día 6. Con nuestro orden actual implica retroceder.",

    tags: [
      "🌙 Noche 6",
      "🟡 Alternativa",
      "🌊 Costa"
    ]
  }

];


/* =========================================================
   SUPERMERCADOS
========================================================= */

const supermarkets = [


  /* =======================================================
     KEFLAVÍK / NJARÐVÍK
  ======================================================= */


  /* -------------------------------------------------------
     BÓNUS FITJAR
  ------------------------------------------------------- */

  {
    id: "bonus-fitjar",

    day: 1,

    name: "Bónus Fitjar",

    chain: "Bónus",

    area: "Njarðvík / Reykjanesbær",

    priority: 1,

    role: "COMPRA GRANDE",

    recommended: true,

    location: {
      lat: 63.9980,
      lng: -22.5560
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bonus+Fitjar+Iceland",

    description:
      "Nuestra primera parada después de recoger la camper y el supermercado elegido para la compra principal.",

    tags: [
      "🥇 NUESTRA ELECCIÓN",
      "🛒 Compra grande",
      "💰 Económico",
      "🌙 Día 1"
    ]
  },


  /* -------------------------------------------------------
     KRÓNAN REYKJANESBÆR
  ------------------------------------------------------- */

  {
    id: "kronan-reykjanesbaer",

    day: 1,

    name: "Krónan Reykjanesbær",

    chain: "Krónan",

    area: "Reykjanesbær",

    priority: 2,

    role: "PLAN B",

    recommended: false,

    location: {
      lat: 63.9995,
      lng: -22.5535
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kronan+Fitjabraut+5+Iceland",

    description:
      "Alternativa muy cercana a Bónus. Útil si falta algún producto o queremos más variedad.",

    tags: [
      "🥈 PLAN B",
      "🥬 Más variedad",
      "📍 Cerca de Bónus"
    ]
  },


     /* -------------------------------------------------------
     NETTÓ KROSSMÓI
  ------------------------------------------------------- */

  {
    id: "netto-krossmoi",

    day: 1,

    name: "Nettó Krossmói",

    chain: "Nettó",

    area: "Njarðvík",

    priority: 3,

    role: "EMERGENCIA",

    recommended: false,

    location: {
      lat: 63.9975,
      lng: -22.5480
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Netto+Krossmoi+4+Iceland",

    description:
      "Nuestra tienda de emergencia cerca de Keflavík si la recogida de la camper se retrasa o necesitamos comprar algo cuando Bónus o Krónan ya no nos sirven.",

    tags: [
      "🆘 EMERGENCIA",
      "🕐 Horario amplio",
      "📍 Cerca de Happy Campers"
    ]
  },


  /* =======================================================
     REYKJAVÍK
  ======================================================= */


  /* -------------------------------------------------------
     BÓNUS LAUGAVEGUR
  ------------------------------------------------------- */

  {
    id: "bonus-laugavegur",

    day: 1,

    name: "Bónus Laugavegur",

    chain: "Bónus",

    area: "Reykjavík centro",

    priority: 3,

    role: "REPOSICIÓN PEQUEÑA",

    recommended: false,

    location: {
      lat: 64.1455,
      lng: -21.9275
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bonus+Laugavegur+Reykjavik",

    description:
      "Útil si durante el paseo por Reykjavík nos damos cuenta de que falta alguna cosa pequeña.",

    tags: [
      "🏙️ Centro",
      "🐷 Bónus",
      "🛒 Compra pequeña"
    ]
  },


  /* -------------------------------------------------------
     KRÓNAN SKEIFUNNI
  ------------------------------------------------------- */

  {
    id: "kronan-skeifunni",

    day: 1,

    name: "Krónan Skeifunni",

    chain: "Krónan",

    area: "Reykjavík",

    priority: 2,

    role: "REPOSICIÓN",

    recommended: false,

    location: {
      lat: 64.1307,
      lng: -21.8690
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kronan+Skeifan+19+Reykjavik",

    description:
      "Más cómoda con vehículo que una tienda del centro si necesitamos hacer una reposición en Reykjavík.",

    tags: [
      "🚐 Cómoda con camper",
      "🛒 Krónan",
      "🥬 Buena variedad"
    ]
  },


  /* -------------------------------------------------------
     NETTÓ MJÓDD
  ------------------------------------------------------- */

  {
    id: "netto-mjodd",

    day: 6,

    name: "Nettó Mjódd",

    chain: "Nettó",

    area: "Reykjavík",

    priority: 1,

    role: "EMERGENCIA",

    recommended: true,

    location: {
      lat: 64.1095,
      lng: -21.8450
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Netto+Mjodd+Reykjavik",

    description:
      "Supermercado que dejamos guardado como opción de emergencia en Reykjavík si necesitamos comprar tarde.",

    tags: [
      "🆘 IMPORTANTE",
      "🌙 Emergencia",
      "🏙️ Reykjavík"
    ]
  },


  /* =======================================================
     DÍA 2 · HELLA / HVOLSVÖLLUR
  ======================================================= */


  /* -------------------------------------------------------
     KJÖRBÚÐIN HELLA
  ------------------------------------------------------- */

  {
    id: "kjorbudin-hella",

    day: 2,

    name: "Kjörbúðin Hella",

    chain: "Kjörbúðin",

    area: "Hella",

    priority: 3,

    role: "REPOSICIÓN",

    recommended: false,

    location: {
      lat: 63.8340,
      lng: -20.4000
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kjorbudin+Hella+Iceland",

    description:
      "Supermercado local para reponer leche, pan, huevos, fruta o cualquier básico al terminar el Círculo Dorado.",

    tags: [
      "🛒 Reposición",
      "📍 Hella",
      "💰 Más caro que Bónus/Krónan"
    ]
  },


  /* -------------------------------------------------------
     KRÓNAN HVOLSVÖLLUR
  ------------------------------------------------------- */

  {
    id: "kronan-hvolsvollur",

    day: 2,

    name: "Krónan Hvolsvöllur",

    chain: "Krónan",

    area: "Hvolsvöllur",

    priority: 1,

    role: "REPOSICIÓN IMPORTANTE",

    recommended: true,

    location: {
      lat: 63.7510,
      lng: -20.2240
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kronan+Hvolsvollur+Iceland",

    description:
      "Uno de nuestros supermercados clave. Es un buen punto para revisar provisiones antes de entrar de lleno en la Costa Sur.",

    tags: [
      "⭐ MUY IMPORTANTE",
      "🛒 Reposición",
      "🚐 Antes de Costa Sur",
      "🥬 Krónan"
    ],

    notes: [
      "Revisar pan",
      "Revisar leche",
      "Revisar desayunos",
      "Revisar fiambre",
      "Revisar fruta",
      "Revisar snacks"
    ]
  },


  /* =======================================================
     DÍA 3 · VÍK
  ======================================================= */


  /* -------------------------------------------------------
     KRÓNAN VÍK
  ------------------------------------------------------- */

  {
    id: "kronan-vik",

    day: 3,

    name: "Krónan Vík",

    chain: "Krónan",

    area: "Vík",

    priority: 1,

    role: "SEGUNDA COMPRA IMPORTANTE",

    recommended: true,

    location: {
      lat: 63.4185,
      lng: -19.0060
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kronan+Vik+Iceland",

    description:
      "Nuestra segunda compra importante del viaje. Conviene salir de Vík preparados para el Día 4, cuando habrá muchos menos supermercados.",

    tags: [
      "⭐ CLAVE",
      "🛒 Segunda compra",
      "🧊 Antes de Vatnajökull",
      "🥪 Preparar Día 4"
    ],

    notes: [
      "Comprar comida para la noche 3",
      "Preparar desayuno Día 4",
      "Preparar comida/picnic Día 4",
      "Comprar snacks",
      "Tener suficiente comida para la mañana del Día 5"
    ]
  },


  /* =======================================================
     KIRKJUBÆJARKLAUSTUR
  ======================================================= */


  /* -------------------------------------------------------
     GVENDARKJÖR
  ------------------------------------------------------- */

  {
    id: "gvendarkjor",

    day: 3,

    name: "Gvendarkjör",

    chain: "Local",

    area: "Kirkjubæjarklaustur",

    priority: 3,

    role: "EMERGENCIA",

    recommended: false,

    location: {
      lat: 63.7910,
      lng: -18.0500
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Gvendarkjor+Kirkjubaejarklaustur+Iceland",

    description:
      "Tienda pequeña para solucionar olvidos si ya hemos avanzado desde Vík. No queremos depender de ella para una compra grande.",

    tags: [
      "🆘 Emergencia",
      "🏔️ Kirkjubæjarklaustur",
      "🛒 Básicos"
    ]
  },


  /* =======================================================
     DÍA 4 · SKAFTAFELL / JÖKULSÁRLÓN

     IMPORTANTE:
     No hay supermercado grande que queramos utilizar.
     Debemos salir abastecidos desde Vík.
  ======================================================= */


  /* =======================================================
     DÍA 5 · HEIMAEY
  ======================================================= */


  /* -------------------------------------------------------
     BÓNUS VESTMANNAEYJAR
  ------------------------------------------------------- */

  {
    id: "bonus-heimaey",

    day: 5,

    name: "Bónus Vestmannaeyjar",

    chain: "Bónus",

    area: "Heimaey",

    priority: 1,

    role: "REPOSICIÓN",

    recommended: true,

    location: {
      lat: 63.4390,
      lng: -20.2720
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bonus+Vestmannaeyjar+Iceland",

    description:
      "Nuestra primera opción para reponer comida durante la estancia en Heimaey.",

    tags: [
      "⭐ PRIMERA OPCIÓN",
      "🐷 Bónus",
      "🌋 Heimaey",
      "🛒 Reposición"
    ]
  },


  /* -------------------------------------------------------
     KRÓNAN VESTMANNAEYJAR
  ------------------------------------------------------- */

  {
    id: "kronan-heimaey",

    day: 5,

    name: "Krónan Vestmannaeyjar",

    chain: "Krónan",

    area: "Heimaey",

    priority: 2,

    role: "REPOSICIÓN",

    recommended: false,

    location: {
      lat: 63.4400,
      lng: -20.2700
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kronan+Vestmannaeyjar+Iceland",

    description:
      "Alternativa a Bónus en Heimaey si nos viene mejor por ubicación, horario o variedad.",

    tags: [
      "🥈 Alternativa",
      "🥬 Más variedad",
      "🌋 Heimaey"
    ]
  },


  /* =======================================================
     DÍA 6 · SELFOSS
  ======================================================= */


  /* -------------------------------------------------------
     BÓNUS SELFOSS
  ------------------------------------------------------- */

  {
    id: "bonus-selfoss",

    day: 6,

    name: "Bónus Selfoss",

    chain: "Bónus",

    area: "Selfoss",

    priority: 1,

    role: "REPOSICIÓN GRANDE",

    recommended: true,

    location: {
      lat: 63.9340,
      lng: -20.9970
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bonus+Selfoss+Iceland",

    description:
      "Una de las mejores opciones para una reposición importante durante el regreso hacia Reykjavík.",

    tags: [
      "⭐ RECOMENDADO",
      "🐷 Bónus",
      "🛒 Reposición grande",
      "📍 Selfoss"
    ]
  },


  /* -------------------------------------------------------
     KRÓNAN SELFOSS
  ------------------------------------------------------- */

  {
    id: "kronan-selfoss",

    day: 6,

    name: "Krónan Selfoss",

    chain: "Krónan",

    area: "Selfoss",

    priority: 1,

    role: "REPOSICIÓN GRANDE",

    recommended: true,

    location: {
      lat: 63.9335,
      lng: -20.9985
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kronan+Selfoss+Iceland",

    description:
      "Alternativa a Bónus para la reposición del Día 6, especialmente útil si nos encaja mejor por horario o variedad.",

    tags: [
      "⭐ RECOMENDADO",
      "🥬 Krónan",
      "🛒 Reposición grande",
      "📍 Selfoss"
    ]
  },


  /* -------------------------------------------------------
     NETTÓ SELFOSS
  ------------------------------------------------------- */

  {
    id: "netto-selfoss",

    day: 6,

    name: "Nettó Selfoss",

    chain: "Nettó",

    area: "Selfoss",

    priority: 3,

    role: "PLAN B",

    recommended: false,

    location: {
      lat: 63.9345,
      lng: -20.9900
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Netto+Selfoss+Iceland",

    description:
      "Otra opción de supermercado en Selfoss si Bónus o Krónan no nos encajan.",

    tags: [
      "🟡 Plan B",
      "🛒 Selfoss"
    ]
  },


  /* -------------------------------------------------------
     SAMKAUP ÚRVAL SELFOSS
  ------------------------------------------------------- */

  {
    id: "samkaup-selfoss",

    day: 6,

    name: "Samkaup Úrval Selfoss",

    chain: "Samkaup",

    area: "Selfoss",

    priority: 3,

    role: "EMERGENCIA",

    recommended: false,

    location: {
      lat: 63.9350,
      lng: -20.9960
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Samkaup+Urval+Selfoss+Iceland",

    description:
      "Lo dejamos guardado como tienda de emergencia si necesitamos comprar bastante tarde.",

    tags: [
      "🆘 Emergencia",
      "🌙 Horario amplio",
      "📍 Selfoss"
    ]
  },


  /* =======================================================
     DÍA 6 · HVERAGERÐI
  ======================================================= */


  /* -------------------------------------------------------
     BÓNUS HVERAGERÐI
  ------------------------------------------------------- */

  {
    id: "bonus-hveragerdi",

    day: 6,

    name: "Bónus Hveragerði",

    chain: "Bónus",

    area: "Hveragerði",

    priority: 2,

    role: "REPOSICIÓN",

    recommended: true,

    location: {
      lat: 64.0000,
      lng: -21.1880
    },

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bonus+Hveragerdi+Iceland",

    description:
      "Muy útil si necesitamos comprar algo antes o después de Reykjadalur.",

    tags: [
      "🐷 Bónus",
      "♨️ Hveragerði",
      "🛒 Reposición"
    ]
  }

];


/* =========================================================
   SUPERMERCADOS ESENCIALES

   Este array nos permitirá, si queremos,
   mostrar únicamente los supermercados realmente
   importantes en vez de absolutamente todos.
========================================================= */

const essentialSupermarketIds = [

  "bonus-fitjar",

  "netto-krossmoi",

  "kronan-hvolsvollur",

  "kronan-vik",

  "bonus-heimaey",

  "bonus-selfoss",

  "kronan-selfoss",

  "netto-mjodd"

];


/* =========================================================
   FUNCIONES AUXILIARES
========================================================= */


/*
  Devuelve los supermercados considerados esenciales.
*/

function getEssentialSupermarkets() {

  return supermarkets.filter(supermarket =>
    essentialSupermarketIds.includes(supermarket.id)
  );

}


/*
  Devuelve los campings correspondientes a una noche/día.
*/

function getCampsitesForDay(dayId) {

  return campsites.filter(campsite =>
    campsite.day === dayId
  );

}


/*
  Devuelve supermercados relacionados con un día.
*/

function getSupermarketsForDay(dayId) {

  return supermarkets.filter(supermarket =>
    supermarket.day === dayId
  );

}


/* =========================================================
   COMPROBACIONES
========================================================= */

console.log(
  "✅ places.js cargado correctamente"
);

console.log(
  "Campings:",
  campsites
);

console.log(
  "Supermercados:",
  supermarkets
);

console.log(
  "Supermercados esenciales:",
  getEssentialSupermarkets()
);
