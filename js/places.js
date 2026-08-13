/* =========================================================
   PUNTOS ÚTILES DEL VIAJE · ISLANDIA 2026
========================================================= */


/* =========================================================
   CAMPINGS
========================================================= */

const campsites = [

  /* -------------------------------------------------------
     OPCIÓN A · SI ESTAMOS AGOTADOS
  ------------------------------------------------------- */

  {
    name: "Reykjavík Eco Campsite",

    location: {
      lat: 64.1466,
      lng: -21.8750
    },

    description:
      "Opción para la primera noche si estamos agotados después de Sky Lagoon.",

    tags: [
      "😵 AGOTADOS",
      "📍 Reykjavík",
      "🚐 Poco trayecto"
    ]
  },


  /* -------------------------------------------------------
     OPCIÓN B · RECOMENDADA
  ------------------------------------------------------- */

  {
    name: "Mosskógar Camping",

    location: {
      lat: 64.1870,
      lng: -21.6200
    },

    description:
      "Nuestra opción preferida: avanzamos hacia Þingvellir sin tener que conducir hasta el parque.",

    tags: [
      "🙂 NORMALES",
      "⭐ RECOMENDADO",
      "🚐 Buena posición para Día 2"
    ]
  },


  /* -------------------------------------------------------
     OPCIÓN C · SI TENEMOS ENERGÍA
  ------------------------------------------------------- */

  {
    name: "Þingvellir · Nyrðri Leirar",

    location: {
      lat: 64.2850,
      lng: -21.0890
    },

    description:
      "Si tenemos energía, dormimos directamente en Þingvellir y empezamos allí el Día 2.",

    tags: [
      "😎 CON ENERGÍA",
      "⭐ Mejor posición Día 2",
      "⚡ Electricidad opcional"
    ]
  }

];


/* =========================================================
   SUPERMERCADOS
========================================================= */

const supermarkets = [

  {
    name: "Bónus Fitjar",

    location: {
      lat: 63.9980,
      lng: -22.5560
    },

    description:
      "Supermercado elegido para hacer la compra grande nada más recoger la camper.",

    tags: [
      "🥇 NUESTRA ELECCIÓN",
      "🛒 Compra grande",
      "💰 Presupuesto ~150 €",
      "🕘 09:00–21:00"
    ]
  }

];


/* =========================================================
   COMPROBACIÓN
========================================================= */

console.log("✅ places.js cargado correctamente");

console.log("Campings:", campsites);

console.log("Supermercados:", supermarkets);
