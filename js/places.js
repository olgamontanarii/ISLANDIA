/* =========================================================
   PUNTOS ÚTILES DEL VIAJE

   Aquí guardamos lugares que no forman parte
   directamente de la timeline del día.

   De momento:
   - camping de Hella
   - supermercado Bónus de Selfoss

   Más adelante podremos añadir:
   - más campings
   - más supermercados
   - gasolineras
   - piscinas
   - duchas
========================================================= */


/* =========================================================
   CAMPINGS
========================================================= */

const campsites = [

  {
    name: "Hella Camping",

    location: {
      lat: 63.8350,
      lng: -20.4000
    },

    description:
      "Camping donde dormimos la primera noche.",

    tags: [
      "🚐 Camper",
      "🚿 Duchas",
      "📍 Hella"
    ]

  }

];


/* =========================================================
   SUPERMERCADOS
========================================================= */

const supermarkets = [

  {
    name: "Bónus Selfoss",

    location: {
      lat: 63.9330,
      lng: -20.9970
    },

    description:
      "Supermercado práctico para hacer una compra grande al principio del viaje.",

    tags: [
      "🛒 Compra grande",
      "💰 Económico",
      "📍 Selfoss"
    ]

  }

];


/* =========================================================
   COMPROBACIÓN
========================================================= */

console.log("✅ places.js cargado correctamente");
console.log("Campings:", campsites);
console.log("Supermercados:", supermarkets);
