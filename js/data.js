/* =========================================================
   ISLANDIA 2026 · DATA.JS
   =========================================================

   FUENTE CENTRAL DE DATOS DE LA WEB

   Aquí guardamos:
   - itinerario
   - actividades
   - trayectos
   - precios
   - reservas
   - parkings
   - notas
   - actividades opcionales
   - decisiones pendientes
   - opciones para dormir

   IMPORTANTE:
   app.js decide CÓMO se muestra.
   data.js decide QUÉ información tenemos.
========================================================= */


/* =========================================================
   CONFIGURACIÓN GENERAL DEL VIAJE
========================================================= */

const tripConfig = {

  travellers: 5,

  currencyReference: {
    iskToEur: 0.00703,
    note: "Conversión aproximada. Revisar antes del viaje."
  }

};


/* =========================================================
   ITINERARIO
========================================================= */

const tripDays = [


  /* =======================================================
     DÍA 1 · REYKJAVÍK + SKY LAGOON
  ======================================================= */

  {
    id: 1,

    navDate: "MIÉ 9",

    date: "MIÉRCOLES 9 DE SEPTIEMBRE",

    title: "Reykjavík + Sky Lagoon",

    intro:
      "Primer día tranquilo: llegada a Keflavík, camper, compra grande, paseo por Reykjavík y Sky Lagoon al atardecer.",


    stats: [

      {
        value: "TRANQUI",
        label: "RITMO"
      },

      {
        value: "~677 €",
        label: "BASE · 5 PERSONAS"
      },

      {
        value: "1",
        label: "RESERVA IMPORTANTE"
      },

      {
        value: "3",
        label: "CAMPINGS POSIBLES"
      }

    ],


    budgetSummary: {

      people: 5,

      items: [

        {
          icon: "♨️",
          name: "Sky Lagoon",
          isk: 74950,
          eur: 527,
          note: "Precio desde"
        },

        {
          icon: "🛒",
          name: "Compra Bónus",
          eur: 150,
          approximate: true
        },

        {
          icon: "🅿️",
          name: "Parking Sky Lagoon",
          eur: 0
        }

      ],

      fixedTotalEur: 677,

      note:
        "No incluye combustible, camping, comidas fuera ni subida opcional a la torre de Hallgrímskirkja."

    },


    activities: [


      /* ---------------------------------------------------
         LLEGADA
      --------------------------------------------------- */

      {
        type: "activity",

        time: "08:20",

        icon: "✈️",

        category: "LLEGADA",

        title: "Llegada a Keflavík",

        priority: "fixed",

        location: {
          name: "Keflavík International Airport",
          lat: 63.9850,
          lng: -22.6056,
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Keflavik+International+Airport"
        },

        description:
          "Aterrizamos después del vuelo nocturno, recogemos las maletas y empezamos el viaje sin prisas.",

        tags: [
          "🧳 Equipaje",
          "😴 Vuelo nocturno",
          "🟢 Sin reserva"
        ],

        notes: [

          {
            type: "plan",
            title: "Nuestro plan",
            text:
              "No poner ninguna reserva inmediatamente después del aterrizaje. Dejamos margen para equipaje y posibles retrasos."
          }

        ]

      },


      /* ---------------------------------------------------
         KEF → HAPPY CAMPERS
      --------------------------------------------------- */

      {
        type: "drive",

        icon: "🚌",

        from: "Aeropuerto KEF",

        to: "Happy Campers",

        km: 5,

        minutes: 10,

        transport: "Shuttle Happy Campers",

        mapsUrl:
          "https://www.google.com/maps/dir/?api=1&origin=Keflavik+International+Airport&destination=Happy+Campers+Iceland",

        roads: [
          "Shuttle"
        ],

        offlineDirections: [
          "Salir de la terminal después de recoger el equipaje.",
          "Ir al punto de recogida indicado por Happy Campers.",
          "Tomar el shuttle de Happy Campers.",
          "Bajar en las instalaciones de Stapabraut 21."
        ]

      },


      /* ---------------------------------------------------
         HAPPY CAMPERS
      --------------------------------------------------- */

      {
        type: "activity",

        time: "~09:30",

        icon: "🚐",

        category: "CAMPER",

        title: "Recogida de la camper",

        priority: "fixed",

        location: {
          name: "Happy Campers",
          lat: 63.9990,
          lng: -22.5570,
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Happy+Campers+Iceland"
        },

        description:
          "Papeleo, explicación de la camper, revisión del vehículo y organización del equipaje.",

        tags: [
          "⏱️ ~30–60 min",
          "📍 Stapabraut 21",
          "⚠️ Hora aproximada"
        ],

        notes: [

          {
            type: "important",
            title: "Antes de salir",
            text:
              "Revisar daños, combustible, calefacción, gas, cocina, agua, electricidad y funcionamiento de aguas grises."
          },

          {
            type: "plan",
            title: "Equipaje",
            text:
              "Dejar todo bien sujeto antes de empezar a conducir."
          }

        ]

      },


      /* ---------------------------------------------------
         HAPPY CAMPERS → BÓNUS
      --------------------------------------------------- */

      {
        type: "drive",

        icon: "🚐",

        from: "Happy Campers",

        to: "Bónus Fitjar",

        km: 5,

        minutes: 10,

        mapsUrl:
          "https://www.google.com/maps/dir/?api=1&origin=Happy+Campers+Iceland&destination=Bonus+Fitjar+Iceland",

        roads: [
          "Calles locales"
        ],

        offlineDirections: [
          "Salir de Happy Campers hacia Reykjanesbær.",
          "Seguir hacia la zona comercial de Fitjar.",
          "Localizar Bónus Fitjar."
        ],

        parking: {
          name: "Bónus Fitjar Parking",
          info: "Parking del supermercado.",
          priceEur: 0,
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Bonus+Fitjar+Iceland"
        }

      },


      /* ---------------------------------------------------
         COMPRA
      --------------------------------------------------- */

      {
        type: "activity",

        time: "~10:30",

        icon: "🛒",

        category: "COMPRA GRANDE",

        title: "Bónus Fitjar",

        priority: "fixed",

        location: {
          name: "Bónus Fitjar",
          lat: 63.9980,
          lng: -22.5560,
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Bonus+Fitjar+Iceland"
        },

        description:
          "Compra principal del viaje nada más recoger la camper.",

        price: {
          type: "budget",
          eur: 150,
          approximate: true
        },

        tags: [
          "💰 ~150 €",
          "🥇 Compra principal",
          "🕘 09:00–21:00"
        ],

        shoppingList: [
          "30 huevos",
          "Queso",
          "Jamón cocido",
          "Pan",
          "Fruta",
          "Yogur / skyr",
          "Leche",
          "Mantequilla",
          "Cebollas",
          "Zanahorias",
          "Bacon",
          "Salchichas",
          "Pasta / arroz",
          "Snacks"
        ],

        notes: [

          {
            type: "tip",
            title: "No llenar la nevera a lo loco",
            text:
              "Primero comprobar el tamaño real del frigorífico de la camper. Podemos reponer en Vík, Heimaey y Selfoss."
          },

          {
            type: "tip",
            title: "Agua",
            text:
              "No hace falta comprar grandes cantidades de agua embotellada. Rellenaremos botellas."
          },

          {
            type: "plan",
            title: "Plan B",
            text:
              "Si falta algo, Krónan Reykjanesbær está muy cerca. Nettó Krossmói queda como opción de emergencia con horario amplio."
          }

        ]

      },


      /* ---------------------------------------------------
         BÓNUS → REYKJAVÍK
      --------------------------------------------------- */

      {
        type: "drive",

        icon: "🚐",

        from: "Bónus Fitjar",

        to: "Reykjavík",

        km: 45,

        minutes: 45,

        mapsUrl:
          "https://www.google.com/maps/dir/?api=1&origin=Bonus+Fitjar+Iceland&destination=Hallgrimskirkja+Reykjavik",

        roads: [
          "41"
        ],

        offlineDirections: [
          "Salir de Reykjanesbær por la carretera 41.",
          "Continuar siempre hacia Reykjavík.",
          "Entrar en el área metropolitana.",
          "Dirigirse hacia el parking que finalmente elijamos para visitar el centro."
        ],

        parking: {
          name: "Parking Reykjavík",
          info:
            "Pendiente de escoger el parking más cómodo para camper y paseo por el centro.",
          status: "pending"
        }

      },


      /* ---------------------------------------------------
         HALLGRÍMSKIRKJA
      --------------------------------------------------- */

      {
        type: "activity",

        time: "MEDIODÍA",

        icon: "⛪",

        category: "REYKJAVÍK",

        title: "Hallgrímskirkja",

        priority: "fixed",

        duration: "30–45 min",

        location: {
          name: "Hallgrímskirkja",
          lat: 64.1417,
          lng: -21.9266,
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Hallgrimskirkja+Reykjavik"
        },

        description:
          "La iglesia más reconocible de Reykjavík y punto de inicio de nuestro paseo por el centro.",

        tags: [
          "⏱️ 30–45 min",
          "🟢 Iglesia gratis",
          "🔭 Torre opcional"
        ],

        notes: [

          {
            type: "info",
            title: "¿Qué tiene de especial?",
            text:
              "Su diseño está inspirado en formas naturales islandesas, especialmente las columnas de basalto."
          },

          {
            type: "plan",
            title: "Nuestro plan",
            text:
              "Entrar en la iglesia y decidir allí si merece la pena subir a la torre según cola y tiempo."
          }

        ]

      },


      /* ---------------------------------------------------
         RAINBOW STREET
      --------------------------------------------------- */

      {
        type: "activity",

        time: "FLEXIBLE",

        icon: "🌈",

        category: "PASEO",

        title: "Rainbow Street",

        priority: "fixed",

        duration: "15–30 min",

        location: {
          name: "Skólavörðustígur",
          lat: 64.1444,
          lng: -21.9284,
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Rainbow+Street+Reykjavik"
        },

        description:
          "Bajamos andando desde Hallgrímskirkja por Skólavörðustígur hacia el centro.",

        tags: [
          "💰 Gratis",
          "📸 Fotos"
        ]

      },


      /* ---------------------------------------------------
         LAUGAVEGUR
      --------------------------------------------------- */

      {
        type: "activity",

        time: "FLEXIBLE",

        icon: "🏙️",

        category: "PASEO",

        title: "Laugavegur + centro",

        priority: "fixed",

        location: {
          name: "Laugavegur",
          lat: 64.1454,
          lng: -21.9290,
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Laugavegur+Reykjavik"
        },

        description:
          "Paseo tranquilo por tiendas, cafeterías y calles del centro.",

        tags: [
          "⏱️ Flexible",
          "💰 Gratis",
          "☕ Comer si apetece"
        ]

      },


      /* ---------------------------------------------------
         HARPA
      --------------------------------------------------- */

      {
        type: "activity",

        time: "FLEXIBLE",

        icon: "🎼",

        category: "ARQUITECTURA",

        title: "Harpa",

        priority: "fixed",

        duration: "20–30 min",

        location: {
          name: "Harpa Concert Hall",
          lat: 64.1505,
          lng: -21.9328,
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Harpa+Concert+Hall+Reykjavik"
        },

        description:
          "Entramos para ver la famosa fachada geométrica de cristal y el interior.",

        tags: [
          "💰 Gratis",
          "📸 Arquitectura"
        ]

      },


      /* ---------------------------------------------------
         SUN VOYAGER
      --------------------------------------------------- */

      {
        type: "activity",

        time: "SI APETECE",

        icon: "☀️",

        category: "OPCIONAL",

        title: "Sun Voyager",

        priority: "optional",

        duration: "~10 min",

        location: {
          name: "Sun Voyager",
          lat: 64.1476,
          lng: -21.9222,
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Sun+Voyager+Reykjavik"
        },

        description:
          "Escultura frente al mar. Parada rápida si vamos bien de tiempo.",

        tags: [
          "🟡 Opcional",
          "💰 Gratis"
        ]

      },


      /* ---------------------------------------------------
         REYKJAVÍK → SKY LAGOON
      --------------------------------------------------- */

      {
        type: "drive",

        icon: "🚐",

        from: "Reykjavík",

        to: "Sky Lagoon",

        km: 9,

        minutes: 15,

        mapsUrl:
          "https://www.google.com/maps/dir/?api=1&origin=Reykjavik&destination=Sky+Lagoon+Iceland",

        roads: [
          "Red urbana"
        ],

        offlineDirections: [
          "Salir del centro hacia Kópavogur.",
          "Seguir hacia Kársnes.",
          "Continuar siguiendo las indicaciones de Sky Lagoon.",
          "Entrar en el parking del recinto."
        ],

        parking: {
          name: "Sky Lagoon Parking",
          info:
            "Parking del propio recinto.",
          priceEur: 0,
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Sky+Lagoon+Parking+Iceland"
        }

      },


      /* ---------------------------------------------------
         SKY LAGOON
      --------------------------------------------------- */

      {
        type: "activity",

        time: "17:30–18:00",

        icon: "♨️",

        category: "EXPERIENCIA TERMAL",

        title: "Sky Lagoon",

        priority: "fixed",

        featured: true,

        location: {
          name: "Sky Lagoon",
          lat: 64.1176,
          lng: -21.9521,
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Sky+Lagoon+Iceland"
        },

        description:
          "La experiencia termal de pago del viaje: piscina frente al océano, ritual Skjól y atardecer.",

        price: {
          label: "Saman",
          from: true,
          iskPerPerson: 14990,
          eurPerPerson: 105,
          people: 5,
          iskFamily: 74950,
          eurFamily: 527
        },

        booking: {
          required: true,
          advice:
            "Reservar una franja alrededor de las 17:30–18:00.",
          url:
            "https://www.skylagoon.com/booking"
        },

        websiteUrl:
          "https://www.skylagoon.com/",

        parking: {
          name: "Sky Lagoon Parking",
          info:
            "Parking gratuito del recinto.",
          priceEur: 0,
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Sky+Lagoon+Parking+Iceland"
        },

        tags: [
          "🎟️ RESERVAR",
          "♨️ Ritual Skjól",
          "🌅 Atardecer",
          "🅿️ Gratis"
        ],

        notes: [

          {
            type: "plan",
            title: "Nuestro plan",
            text:
              "Entrar alrededor de las 17:30–18:00, hacer el ritual sin prisas y quedarnos durante el cambio de luz."
          },

          {
            type: "info",
            title: "Por qué elegimos esta",
            text:
              "Sky Lagoon sustituye a Blue Lagoon y Secret Lagoon como nuestra única gran experiencia termal de pago."
          }

        ]

      }

    ],


    /* =====================================================
   NOCHE 1
===================================================== */

overnightOptions: [

  /* -----------------------------------------------------
     OPCIÓN 1 · AGOTADOS
  ----------------------------------------------------- */

  {
    mood: "😵 AGOTADOS",

    name: "Reykjavík Eco Campsite",

    priority: 3,

    description:
      "Dormimos cerca si después del vuelo, Reykjavík y Sky Lagoon estamos demasiado cansados para seguir conduciendo.",

    recommended: false,

    location: {
      name: "Reykjavík Eco Campsite",
      lat: 64.1466,
      lng: -21.8750,

      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Reykjavik+Eco+Campsite"
    },

    fromPreviousActivity: {
      from: "Sky Lagoon",
      km: 9,
      minutes: 15,

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Sky+Lagoon+Iceland&destination=Reykjavik+Eco+Campsite",

      roads: [
        "Red urbana"
      ],

      offlineDirections: [
        "Salir de Sky Lagoon hacia Reykjavík.",
        "Seguir las indicaciones hacia el centro de Reykjavík.",
        "Continuar hacia Laugardalur.",
        "Buscar Sundlaugavegur y las indicaciones de Reykjavík Eco Campsite."
      ]
    },

    tags: [
      "😴 Menos conducción",
      "📍 Reykjavík",
      "🚐 Plan de emergencia"
    ],

    notes: [
      {
        type: "plan",
        title: "Cuándo elegirlo",
        text:
          "Solo si estamos realmente cansados. Es la opción que menos ayuda a avanzar hacia Þingvellir."
      }
    ]
  },


  /* -----------------------------------------------------
     OPCIÓN 2 · NORMALES
  ----------------------------------------------------- */

  {
    mood: "🙂 NORMALES",

    name: "Mosskógar Camping",

    priority: 2,

    description:
      "Buen equilibrio: salimos de Reykjavík y avanzamos hacia Þingvellir sin obligarnos a conducir hasta el Parque Nacional.",

    recommended: true,

    location: {
      name: "Mosskógar Camping",
      lat: 64.1870,
      lng: -21.6200,

      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Mosskogar+Camping+Iceland"
    },

    fromPreviousActivity: {
      from: "Sky Lagoon",
      km: 31,
      minutes: 35,

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Sky+Lagoon+Iceland&destination=Mosskogar+Camping+Iceland",

      roads: [
        "49",
        "1",
        "36"
      ],

      offlineDirections: [
        "Salir de Sky Lagoon hacia Reykjavík.",
        "Tomar la red principal en dirección norte.",
        "Continuar por la carretera 1 hacia Mosfellsbær.",
        "Tomar la carretera 36 en dirección Þingvellir.",
        "Seguir hasta Mosskógar Camping en Mosfellsdalur."
      ]
    },

    tags: [
      "⭐ BUEN EQUILIBRIO",
      "🚐 Avanzamos ruta",
      "🌙 Zona rural"
    ],

    notes: [
      {
        type: "plan",
        title: "Cuándo elegirlo",
        text:
          "Si estamos cansados pero todavía podemos conducir un poco. Nos deja mejor situados para el Día 2."
      }
    ]
  },


  /* -----------------------------------------------------
     OPCIÓN 3 · CON ENERGÍA
  ----------------------------------------------------- */

  {
    mood: "😎 CON ENERGÍA",

    name: "Þingvellir · Nyrðri Leirar",

    priority: 1,

    description:
      "La mejor opción logística: dormimos dentro de Þingvellir y al día siguiente despertamos directamente en la primera visita.",

    recommended: true,

    location: {
      name: "Nyrðri Leirar Camping",
      lat: 64.2850,
      lng: -21.0890,

      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Nyrdri+Leirar+Camping+Thingvellir"
    },

    fromPreviousActivity: {
      from: "Sky Lagoon",
      km: 55,
      minutes: 55,

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Sky+Lagoon+Iceland&destination=Nyrdri+Leirar+Camping+Thingvellir",

      roads: [
        "49",
        "1",
        "36"
      ],

      offlineDirections: [
        "Salir de Sky Lagoon hacia Reykjavík.",
        "Tomar la carretera principal hacia Mosfellsbær.",
        "Continuar por la carretera 1.",
        "Tomar la carretera 36 hacia Þingvellir.",
        "Seguir las indicaciones del Parque Nacional.",
        "Entrar en Nyrðri Leirar Camping."
      ]
    },

    price: {
      iskAdult: 1800,
      eurAdult: 13,

      iskVehicle: 400,
      eurVehicle: 3,

      iskElectricity: 1100,
      eurElectricity: 8,

      people: 5,

      estimatedFamilyEurWithoutElectricity: 66
    },

    tags: [
      "⭐ MEJOR LOGÍSTICA",
      "🌋 Dormimos en Þingvellir",
      "⚡ Electricidad opcional"
    ],

    notes: [
      {
        type: "plan",
        title: "Nuestra primera opción si aguantamos",
        text:
          "Es la que más carretera nos ahorra el Día 2."
      }
    ]
  }

]

},


/* =========================================================
   DÍA 2 · JUEVES 10
   CÍRCULO DORADO
========================================================= */

{
  id: 2,

  navDate: "JUE 10",

  date: "JUEVES 10 DE SEPTIEMBRE",

  title: "Círculo Dorado",

  intro:
    "Día completo de naturaleza: Þingvellir y Almannagjá, Brúarfoss, Geysir y Strokkur, Gullfoss, Faxi si vamos bien y el cráter Kerið.",


  stats: [
    {
      value: "6",
      label: "PARADAS"
    },

    {
      value: "1",
      label: "OPCIONAL"
    },

    {
      value: "NATURALEZA",
      label: "TIPO DE DÍA"
    },

    {
      value: "FLEXIBLE",
      label: "RITMO"
    }
  ],


  activities: [

    /* =====================================================
       ÞINGVELLIR
    ===================================================== */

    {
      type: "activity",

      time: "09:00",

      icon: "🌋",

      category: "PARQUE NACIONAL",

      title: "Þingvellir + Almannagjá",

      priority: "fixed",

      duration: "1 h 30 – 2 h",

      location: {
        name: "Þingvellir · Hakið",
        lat: 64.2559,
        lng: -21.1300,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Thingvellir+Hakid+Visitor+Center"
      },

      description:
        "Caminamos por uno de los lugares geológica e históricamente más importantes de Islandia.",

      tags: [
        "⏱️ 1 h 30–2 h",
        "🥾 Fácil",
        "🌍 Tectónica",
        "📜 Historia"
      ],

      parking: {
        name: "P1 Hakið",

        info:
          "Parking junto al Visitor Center y al mirador superior de Almannagjá.",

        price: {
          status: "check-before-trip"
        },

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=P1+Hakid+Thingvellir"
      },

      notes: [

        {
          type: "info",
          title: "¿Qué tiene de especial?",
          text:
            "Þingvellir se encuentra en la zona de separación entre las placas norteamericana y euroasiática. El paisaje de fallas y grietas está relacionado con esa separación."
        },

        {
          type: "info",
          title: "Almannagjá",
          text:
            "Es la gran fractura por la que queremos caminar. Aunque no hagamos Silfra, seguimos viviendo el paisaje tectónico de Þingvellir."
        },

        {
          type: "info",
          title: "Historia",
          text:
            "Aquí se reunía el Alþingi, el antiguo parlamento islandés."
        },

        {
          type: "plan",
          title: "Nuestro recorrido",
          text:
            "Mirador de Hakið → bajar hacia Almannagjá → zona histórica → paseo por la grieta → Öxarárfoss si encaja bien."
        }

      ]
    },


    /* =====================================================
       ÞINGVELLIR → BRÚARFOSS
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Þingvellir",

      to: "Brúarfoss",

      km: 45,

      minutes: 45,

      roads: [
        "36",
        "365",
        "37"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Thingvellir+Iceland&destination=Bruarfoss+Iceland",

      offlineDirections: [
        "Salir de Þingvellir por la carretera 36.",
        "Continuar hacia Laugarvatn.",
        "Seguir por la 365 y después por la 37.",
        "Seguir las indicaciones hacia Brúarfoss."
      ],

      parking: {
        name: "Brúarfoss Parking",
        info:
          "Usar el acceso habilitado actual a Brúarfoss.",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Bruarfoss+Parking+Iceland"
      }
    },


    /* =====================================================
       BRÚARFOSS
    ===================================================== */

    {
      type: "activity",

      time: "~11:15",

      icon: "💎",

      category: "CASCADA",

      title: "Brúarfoss",

      priority: "fixed",

      duration: "45 min–1 h",

      location: {
        name: "Brúarfoss",
        lat: 64.2642,
        lng: -20.5158,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Bruarfoss+Iceland"
      },

      description:
        "Cascada pequeña pero muy llamativa por el intenso color azul del agua.",

      tags: [
        "⏱️ 45–60 min",
        "💙 Agua turquesa",
        "🥾 Fácil"
      ],

      notes: [
        {
          type: "info",
          title: "Qué aporta",
          text:
            "No destaca por tamaño, sino por el contraste entre el agua azul intensa y la roca oscura."
        },

        {
          type: "plan",
          title: "Si vamos retrasados",
          text:
            "Podemos reducir el tiempo aquí antes de sacrificar Þingvellir, Geysir, Gullfoss o Kerið."
        }
      ]
    },


    /* =====================================================
       BRÚARFOSS → GEYSIR
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Brúarfoss",

      to: "Geysir / Strokkur",

      km: 16,

      minutes: 20,

      roads: [
        "37",
        "35"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Bruarfoss+Iceland&destination=Geysir+Iceland",

      offlineDirections: [
        "Volver hacia la carretera 37.",
        "Continuar hacia el este.",
        "Enlazar con la carretera 35.",
        "Seguir las indicaciones hacia Geysir."
      ],

      parking: {
        name: "Geysir Center Parking",
        info:
          "Parking junto al centro de visitantes y frente al área geotérmica.",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Geysir+Center+Parking+Iceland"
      }
    },


    /* =====================================================
       GEYSIR
    ===================================================== */

    {
      type: "activity",

      time: "~12:30",

      icon: "💦",

      category: "GEOTERMIA",

      title: "Geysir + Strokkur",

      priority: "fixed",

      duration: "45 min–1 h",

      location: {
        name: "Geysir Geothermal Area",
        lat: 64.3104,
        lng: -20.3024,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Geysir+Geothermal+Area+Iceland"
      },

      description:
        "Recorremos el valle geotermal y esperamos varias erupciones de Strokkur.",

      tags: [
        "⏱️ 45–60 min",
        "💰 Gratis",
        "🟢 Sin reserva",
        "♨️ Geotermia"
      ],

      notes: [
        {
          type: "info",
          title: "Geysir vs Strokkur",
          text:
            "Geysir es el géiser histórico que dio nombre al fenómeno, pero actualmente el que entra en erupción regularmente es Strokkur."
        },

        {
          type: "plan",
          title: "Nuestro plan",
          text:
            "Ver varias erupciones de Strokkur y recorrer brevemente las charcas, vapor y zonas minerales del campo geotermal."
        }
      ]
    },


    /* =====================================================
       GEYSIR → GULLFOSS
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Geysir",

      to: "Gullfoss",

      km: 10,

      minutes: 10,

      roads: [
        "35"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Geysir+Iceland&destination=Gullfoss+Iceland",

      offlineDirections: [
        "Salir de Geysir por la carretera 35.",
        "Continuar aproximadamente 10 km.",
        "Seguir las indicaciones hacia Gullfoss."
      ],

      parking: {
        name: "Gullfoss Upper Parking",
        info:
          "Parking superior junto al centro de visitantes.",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Gullfoss+Upper+Parking+Iceland"
      }
    },


    /* =====================================================
       GULLFOSS
    ===================================================== */

    {
      type: "activity",

      time: "~13:45",

      icon: "🌊",

      category: "CASCADA",

      title: "Gullfoss",

      priority: "fixed",

      duration: "45 min–1 h",

      location: {
        name: "Gullfoss",
        lat: 64.3271,
        lng: -20.1199,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Gullfoss+Iceland"
      },

      description:
        "Una de las grandes cascadas de Islandia, con el río Hvítá cayendo en dos escalones hacia un profundo cañón.",

      tags: [
        "⏱️ 45–60 min",
        "💰 Gratis",
        "📸 ⭐⭐⭐⭐⭐"
      ],

      notes: [
        {
          type: "plan",
          title: "Miradores",
          text:
            "Si las condiciones lo permiten, ver el mirador inferior y después el superior."
        },

        {
          type: "important",
          title: "Impermeable",
          text:
            "La pulverización puede mojarnos bastante aunque no esté lloviendo."
        }
      ]
    },


    /* =====================================================
       COMIDA
    ===================================================== */

    {
      type: "activity",

      time: "~15:15",

      icon: "🥪",

      category: "DESCANSO",

      title: "Comer tranquilamente",

      priority: "fixed",

      description:
        "Paramos para comer algo de la camper antes de continuar.",

      tags: [
        "⏱️ ~30–45 min",
        "🥪 Camper"
      ]
    },


    /* =====================================================
       FAXI · OPCIONAL
    ===================================================== */

    {
      type: "activity",

      time: "~16:00",

      icon: "💦",

      category: "SI VAMOS BIEN",

      title: "Faxi / Faxafoss",

      priority: "optional",

      duration: "20–30 min",

      location: {
        name: "Faxi",
        lat: 64.2258,
        lng: -20.3370,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Faxi+Waterfall+Iceland"
      },

      description:
        "Cascada baja y ancha, normalmente mucho más tranquila que Gullfoss.",

      tags: [
        "🟡 OPCIONAL",
        "⏱️ 20–30 min"
      ],

      notes: [
        {
          type: "plan",
          title: "Primera parada que quitamos",
          text:
            "Si vamos retrasados o estamos cansados, Faxi se elimina sin sacrificar nada importante."
        }
      ]
    },


    /* =====================================================
       FAXI/GULLFOSS → KERIÐ
    =================================================
         {
      type: "drive",

      icon: "🚐",

      from: "Faxi / Gullfoss",

      to: "Kerið",

      km: 55,

      minutes: 50,

      roads: [
        "35"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Faxi+Waterfall+Iceland&destination=Kerid+Crater+Iceland",

      offlineDirections: [
        "Salir de la zona de Faxi y volver a la carretera 35.",
        "Continuar hacia el sur en dirección Selfoss.",
        "Seguir por la carretera 35.",
        "Kerið aparece señalizado junto a la carretera.",
        "Entrar en el parking del cráter."
      ],

      parking: {
        name: "Kerið Parking",

        info:
          "Parking situado junto a la entrada del cráter.",

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Kerid+Crater+Parking+Iceland"
      }
    },


    /* =====================================================
       KERIÐ
    ===================================================== */

    {
      type: "activity",

      time: "~17:00",

      icon: "🌋",

      category: "CRÁTER VOLCÁNICO",

      title: "Kerið",

      priority: "fixed",

      duration: "30–45 min",

      location: {
        name: "Kerið",
        lat: 64.0413,
        lng: -20.8851,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Kerid+Crater+Iceland"
      },

      description:
        "Terminamos el Círculo Dorado en un cráter volcánico con paredes rojizas y un lago azul verdoso en el fondo.",

      tags: [
        "⏱️ 30–45 min",
        "🌋 Volcán",
        "🥾 Fácil-moderado"
      ],

      notes: [

        {
          type: "info",
          title: "¿Qué tiene de especial?",
          text:
            "El contraste entre la roca volcánica rojiza, la vegetación y el lago del fondo hace que sea completamente distinto a las demás paradas del día."
        },

        {
          type: "plan",
          title: "Nuestro plan",
          text:
            "Caminar por una parte del borde, bajar hacia el lago y volver a subir."
        }

      ]
    }

  ],


  /* =====================================================
     NOCHE 2 · HACIA LA COSTA SUR
  ===================================================== */

  overnightOptions: [

    {
      mood: "🙂 PARAMOS ANTES",

      name: "Gaddstaðaflatir Camping · Hella",

      priority: 2,

      description:
        "Opción cómoda en Hella si después del Círculo Dorado no queremos seguir conduciendo demasiado.",

      recommended: false,

      location: {
        name: "Gaddstaðaflatir Camping",
        lat: 63.8319,
        lng: -20.4008,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Gaddstadaflatir+Camping+Hella+Iceland"
      },

      fromPreviousActivity: {
        from: "Kerið",

        km: 68,

        minutes: 55,

        mapsUrl:
          "https://www.google.com/maps/dir/?api=1&origin=Kerid+Crater+Iceland&destination=Gaddstadaflatir+Camping+Hella+Iceland",

        roads: [
          "35",
          "1"
        ],

        offlineDirections: [
          "Salir de Kerið por la carretera 35 hacia Selfoss.",
          "En Selfoss enlazar con la carretera 1.",
          "Continuar hacia el este por la Ring Road.",
          "Llegar a Hella.",
          "Seguir las indicaciones hacia Gaddstaðaflatir."
        ]
      },

      price: {
        iskAdult: 2450,
        eurAdult: 17,
        iskUnit: 400,
        eurUnit: 3,
        people: 5,
        estimatedFamilyEur: 89
      },

      tags: [
        "🚿 Duchas",
        "⚡ Electricidad",
        "🍳 Zona para cocinar",
        "📍 Hella"
      ]
    },


    {
      mood: "😎 VAMOS BIEN",

      name: "Hvolsvöllur Camp Site",

      priority: 1,

      description:
        "Nuestra mejor opción logística si todavía tenemos energía. Está más al este y nos deja mejor situados para empezar la Costa Sur.",

      recommended: true,

      location: {
        name: "Hvolsvöllur Camp Site",
        lat: 63.7507,
        lng: -20.2244,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Hvolsvollur+Camp+Site+Iceland"
      },

      fromPreviousActivity: {
        from: "Kerið",

        km: 92,

        minutes: 75,

        mapsUrl:
          "https://www.google.com/maps/dir/?api=1&origin=Kerid+Crater+Iceland&destination=Hvolsvollur+Camp+Site+Iceland",

        roads: [
          "35",
          "1"
        ],

        offlineDirections: [
          "Salir de Kerið hacia Selfoss por la carretera 35.",
          "En Selfoss tomar la carretera 1 hacia el este.",
          "Pasar Hella.",
          "Continuar hasta Hvolsvöllur.",
          "Seguir las indicaciones del camping."
        ]
      },

      tags: [
        "⭐ MEJOR LOGÍSTICA",
        "🚐 Más cerca de Seljalandsfoss",
        "📍 Hvolsvöllur"
      ]
    },


    {
      mood: "🟡 PLAN B",

      name: "Hellishólar Campsite",

      priority: 3,

      description:
        "Alternativa en la zona de Hvolsvöllur si las otras opciones no nos convencen.",

      recommended: false,

      location: {
        name: "Hellishólar Campsite",
        lat: 63.6905,
        lng: -20.0845,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Hellisholar+Campsite+Iceland"
      },

      tags: [
        "🟡 Alternativa",
        "📍 Zona Hvolsvöllur"
      ]
    }

  ]

},


/* =========================================================
   DÍA 3 · VIERNES 11
   COSTA SUR + VÍK
========================================================= */

{
  id: 3,

  navDate: "VIE 11",

  date: "VIERNES 11 DE SEPTIEMBRE",

  title: "Costa Sur + Vík",

  intro:
    "Cascadas, primer glaciar de cerca, acantilados, playas negras y nuestra excursión a caballo por Víkurfjara.",


  stats: [
    {
      value: "8",
      label: "PARADAS"
    },

    {
      value: "1",
      label: "RESERVA FIJA"
    },

    {
      value: "1",
      label: "OPCIONAL"
    },

    {
      value: "KATLA ?",
      label: "GRAN DUDA"
    }
  ],


  activities: [

    /* =====================================================
       HELLA/HVOLSVÖLLUR → SELJALANDSFOSS
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Hella / Hvolsvöllur",

      to: "Seljalandsfoss",

      km: 45,

      minutes: 35,

      roads: [
        "1"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Hvolsvollur+Iceland&destination=Seljalandsfoss+Iceland",

      offlineDirections: [
        "Salir hacia el este por la carretera 1.",
        "Continuar por la Ring Road.",
        "Seljalandsfoss está señalizada desde la carretera.",
        "Tomar el acceso hacia el parking de la cascada."
      ],

      parking: {
        name: "Seljalandsfoss Parking",

        info:
          "Dejamos aquí la camper para visitar Seljalandsfoss y Gljúfrabúi sin moverla.",

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Seljalandsfoss+Parking+Iceland"
      }
    },


    /* =====================================================
       SELJALANDSFOSS + GLJÚFRABÚI
    ===================================================== */

    {
      type: "activity",

      time: "09:20",

      icon: "💦",

      category: "CASCADAS",

      title: "Seljalandsfoss + Gljúfrabúi",

      priority: "fixed",

      duration: "1 h–1 h 15",

      location: {
        name: "Seljalandsfoss",
        lat: 63.6156,
        lng: -19.9886,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Seljalandsfoss+Iceland"
      },

      description:
        "Dos cascadas completamente diferentes en una única parada: caminamos por detrás de Seljalandsfoss y después seguimos andando hasta Gljúfrabúi.",

      tags: [
        "⭐⭐⭐⭐⭐",
        "⏱️ 1 h–1 h 15",
        "🥾 Fácil",
        "💦 Nos mojaremos"
      ],

      notes: [

        {
          type: "plan",
          title: "Seljalandsfoss",
          text:
            "Verla desde delante y hacer el sendero que pasa por detrás de la cortina de agua si las condiciones permiten el acceso."
        },

        {
          type: "info",
          title: "Gljúfrabúi",
          text:
            "Está a poca distancia andando. La cascada queda escondida dentro de una garganta y para verla bien hay que entrar por la abertura junto al agua."
        },

        {
          type: "important",
          title: "Calzado e impermeable",
          text:
            "Impermeable y calzado resistente al agua prácticamente obligatorios. Dentro de Gljúfrabúi el terreno puede estar muy mojado."
        },

        {
          type: "important",
          title: "Seguridad",
          text:
            "Dentro de la garganta hay riesgo de resbalones y caída de pequeñas piedras. Entrar solo si las condiciones son razonables."
        }

      ]
    },


    /* =====================================================
       SELJALANDSFOSS → SKÓGAFOSS
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Seljalandsfoss",

      to: "Skógafoss",

      km: 30,

      minutes: 30,

      roads: [
        "1"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Seljalandsfoss+Iceland&destination=Skogafoss+Iceland",

      offlineDirections: [
        "Volver a la carretera 1.",
        "Continuar hacia el este.",
        "Seguir las indicaciones hacia Skógar y Skógafoss.",
        "Entrar al parking junto a la cascada."
      ],

      parking: {
        name: "Skógafoss Parking",
        info:
          "Parking principal junto a Skógafoss.",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Skogafoss+Parking+Iceland"
      }
    },


    /* =====================================================
       SKÓGAFOSS
    ===================================================== */

    {
      type: "activity",

      time: "11:00",

      icon: "🌊",

      category: "CASCADA",

      title: "Skógafoss",

      priority: "fixed",

      duration: "45 min–1 h",

      location: {
        name: "Skógafoss",
        lat: 63.5321,
        lng: -19.5114,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Skogafoss+Iceland"
      },

      description:
        "Una enorme pared de agua de unos 60 metros de altura. La vemos desde abajo y quien quiera puede subir al mirador superior.",

      tags: [
        "⭐⭐⭐⭐⭐",
        "⏱️ ~1 h",
        "💰 Gratis",
        "🪜 ~428 escalones"
      ],

      notes: [

        {
          type: "plan",
          title: "Desde abajo",
          text:
            "Acercarnos a la base para sentir la escala de la cascada."
        },

        {
          type: "plan",
          title: "Desde arriba",
          text:
            "La subida al mirador tiene una escalera larga. No hace falta que subamos todos si alguien está cansado."
        },

        {
          type: "important",
          title: "Spray",
          text:
            "Hay mucha pulverización. Impermeable a mano."
        }

      ]
    },


    /* =====================================================
       KVERNUFOSS · OPCIONAL
    ===================================================== */

    {
      type: "activity",

      time: "~12:00",

      icon: "💦",

      category: "SI VAMOS BIEN",

      title: "Kvernufoss",

      priority: "optional",

      duration: "30–40 min",

      location: {
        name: "Kvernufoss",
        lat: 63.5287,
        lng: -19.4804,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Kvernufoss+Iceland"
      },

      description:
        "Cascada escondida en un pequeño cañón muy cerca de Skógafoss.",

      tags: [
        "🟡 OPCIONAL",
        "💦 Cascada escondida"
      ],

      notes: [
        {
          type: "plan",
          title: "Parada comodín",
          text:
            "Si vamos perfectos de tiempo, la hacemos. Si acumulamos retraso, se elimina inmediatamente."
        }
      ]
    },


    /* =====================================================
       SKÓGAR → SÓLHEIMAJÖKULL
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Skógar",

      to: "Sólheimajökull",

      km: 18,

      minutes: 25,

      roads: [
        "1",
        "221"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Skogafoss+Iceland&destination=Solheimajokull+Glacier+Parking",

      offlineDirections: [
        "Volver a la carretera 1 y continuar hacia el este.",
        "Tomar el desvío señalizado hacia Sólheimajökull.",
        "Continuar por la carretera 221.",
        "Llegar al parking del glaciar."
      ],

      parking: {
        name: "Sólheimajökull Glacier Parking",
        info:
          "Parking desde el que comienza el acceso a pie hacia la zona de observación del glaciar.",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Solheimajokull+Glacier+Parking"
      }
    },


    /* =====================================================
       SÓLHEIMAJÖKULL
    ===================================================== */

    {
      type: "activity",

      time: "~13:10",

      icon: "🧊",

      category: "GLACIAR",

      title: "Sólheimajökull desde tierra",

      priority: "fixed",

      duration: "45 min–1 h",

      location: {
        name: "Sólheimajökull",
        lat: 63.5308,
        lng: -19.3706,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Solheimajokull+Glacier+Iceland"
      },

      description:
        "Nuestro primer contacto cercano con un glaciar. Caminamos hasta la zona segura de observación, pero no pisamos el hielo.",

      tags: [
        "⭐⭐⭐⭐",
        "⏱️ ~1 h",
        "💰 Sin glacier hike",
        "🧊 Primer glaciar"
      ],

      notes: [

        {
          type: "info",
          title: "Qué veremos",
          text:
            "Lengua glaciar, laguna, morrenas, sedimentos y grandes masas de hielo."
        },

        {
          type: "important",
          title: "NO subir al glaciar",
          text:
            "No caminar sobre el hielo, acercarse a grietas ni abandonar las zonas seguras sin guía y equipo."
        },

        {
          type: "plan",
          title: "Por qué no hacemos excursión aquí",
          text:
            "Reservamos nuestra gran experiencia con crampones para Falljökull/Vatnajökull el Día 4."
        }

      ]
    },


    /* =====================================================
       COMIDA
    ===================================================== */

    {
      type: "activity",

      time: "~14:10",

      icon: "🥪",

      category: "DESCANSO",

      title: "Comer en la camper",

      priority: "fixed",

      duration: "~30 min",

      description:
        "Comida rápida/picnic antes de continuar hacia Dyrhólaey.",

      tags: [
        "🥪 Camper",
        "⏱️ ~30 min"
      ]
    },


    /* =====================================================
       SÓLHEIMAJÖKULL → DYRHÓLAEY
    ===================================================== */
    {
      type: "drive",

      icon: "🚐",

      from: "Sólheimajökull",

      to: "Dyrhólaey",

      km: 28,

      minutes: 30,

      roads: [
        "221",
        "1",
        "218"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Solheimajokull+Glacier+Iceland&destination=Dyrholaey+Iceland",

      offlineDirections: [
        "Salir del parking de Sólheimajökull por la carretera 221.",
        "Volver a la carretera 1 y continuar hacia el este.",
        "Tomar el desvío hacia Dyrhólaey por la carretera 218.",
        "Seguir las indicaciones hacia los miradores de Dyrhólaey."
      ],

      parking: {
        name: "Dyrhólaey Parking",

        info:
          "Parking para acceder a los miradores de Dyrhólaey.",

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Dyrholaey+Parking+Iceland"
      }
    },


    /* =====================================================
       DYRHÓLAEY
    ===================================================== */

    {
      type: "activity",

      time: "15:10",

      icon: "🌊",

      category: "ACANTILADOS",

      title: "Dyrhólaey",

      priority: "fixed",

      duration: "30–45 min",

      location: {
        name: "Dyrhólaey",
        lat: 63.4014,
        lng: -19.1303,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Dyrholaey+Iceland"
      },

      description:
        "Promontorio volcánico sobre el Atlántico con enormes vistas de la costa negra y el famoso arco natural de roca.",

      tags: [
        "⭐⭐⭐⭐⭐",
        "⏱️ 30–45 min",
        "💰 Gratis",
        "🌊 Acantilados"
      ],

      notes: [

        {
          type: "info",
          title: "Qué vamos a ver",
          text:
            "Desde los miradores se ven kilómetros de costa negra, el Atlántico, el enorme arco natural de Dyrhólaey y Reynisdrangar a lo lejos."
        },

        {
          type: "plan",
          title: "Nuestro plan",
          text:
            "No necesitamos hacer una caminata larga. Aparcar, recorrer los miradores principales y continuar hacia Reynisfjara."
        },

        {
          type: "important",
          title: "Viento",
          text:
            "Es una zona muy expuesta. Si hace muchísimo viento, extremar la precaución cerca de los acantilados."
        }

      ]
    },


    /* =====================================================
       DYRHÓLAEY → REYNISFJARA
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Dyrhólaey",

      to: "Reynisfjara",

      km: 20,

      minutes: 20,

      roads: [
        "218",
        "1",
        "215"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Dyrholaey+Iceland&destination=Reynisfjara+Black+Sand+Beach",

      offlineDirections: [
        "Salir de Dyrhólaey por la carretera 218.",
        "Volver a la carretera 1.",
        "Continuar brevemente hacia el este.",
        "Tomar la carretera 215 hacia Reynisfjara.",
        "Seguir hasta el parking de la playa."
      ],

      parking: {
        name: "Reynisfjara Parking",

        info:
          "Parking junto al acceso principal a Reynisfjara.",

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Reynisfjara+Parking+Iceland"
      }
    },


    /* =====================================================
       REYNISFJARA
    ===================================================== */

    {
      type: "activity",

      time: "16:10",

      icon: "🖤",

      category: "PLAYA NEGRA",

      title: "Reynisfjara",

      priority: "fixed",

      duration: "45 min–1 h",

      location: {
        name: "Reynisfjara Black Sand Beach",
        lat: 63.4043,
        lng: -19.0445,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Reynisfjara+Black+Sand+Beach"
      },

      description:
        "La playa negra más famosa de Islandia: arena volcánica, columnas de basalto, Hálsanefshellir y Reynisdrangar.",

      tags: [
        "⭐⭐⭐⭐⭐",
        "⏱️ ~50 min",
        "💰 Gratis",
        "⚠️ SNEAKER WAVES"
      ],

      notes: [

        {
          type: "info",
          title: "Columnas de basalto",
          text:
            "Las paredes junto a la playa están formadas por grandes columnas hexagonales de basalto."
        },

        {
          type: "info",
          title: "Reynisdrangar",
          text:
            "Son las enormes agujas de roca que salen del océano. La leyenda islandesa cuenta que eran trolls que quedaron petrificados al salir el sol."
        },

        {
          type: "important",
          title: "⚠️ SNEAKER WAVES",
          text:
            "No acercarse al agua aunque el mar parezca tranquilo. Algunas olas llegan de repente muchísimo más arriba que las anteriores. Mantener siempre mucha distancia con la orilla."
        },

        {
          type: "plan",
          title: "Nuestro plan",
          text:
            "Ver la playa, las columnas de basalto, las formaciones de Hálsanefshellir y Reynisdrangar sin acercarnos a la zona peligrosa del agua."
        }

      ]
    },


    /* =====================================================
       REYNISFJARA → VÍK HORSE ADVENTURE
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Reynisfjara",

      to: "Vík Horse Adventure",

      km: 11,

      minutes: 15,

      roads: [
        "215",
        "1"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Reynisfjara+Black+Sand+Beach&destination=Vik+Horse+Adventure+Iceland",

      offlineDirections: [
        "Salir de Reynisfjara por la carretera 215.",
        "Volver a la carretera 1.",
        "Continuar hacia el este hasta Vík.",
        "Seguir las indicaciones o la ubicación guardada de Vík Horse Adventure.",
        "Llegar al menos 15 minutos antes de la salida."
      ]
    },


    /* =====================================================
       CABALLOS EN VÍK
    ===================================================== */

    {
      type: "activity",

      time: "17:30",

      icon: "🐴",

      category: "EXCURSIÓN",

      title: "Caballos por la playa negra",

      priority: "fixed",

      featured: true,

      duration: "~1 h",

      location: {
        name: "Vík Horse Adventure",
        lat: 63.4186,
        lng: -19.0060,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Vik+Horse+Adventure+Iceland"
      },

      description:
        "Nuestra excursión a caballo del viaje, recorriendo Víkurfjara, la playa negra situada junto a Vík.",

      booking: {
        required: true,

        advice:
          "Reservar cuando confirmemos la salida disponible que mejor encaje. Llegar aproximadamente 15 minutos antes.",

        url:
          "https://vikhorseadventure.is/"
      },

      websiteUrl:
        "https://vikhorseadventure.is/",

      tags: [
        "⭐⭐⭐⭐⭐",
        "🎟️ RESERVAR",
        "⏱️ ~1 h",
        "🐴 Principiantes",
        "🌊 Playa negra"
      ],

      notes: [

        {
          type: "info",
          title: "No es Reynisfjara",
          text:
            "La excursión se realiza por Víkurfjara, la playa negra junto al pueblo de Vík. No montamos por la peligrosa Reynisfjara."
        },

        {
          type: "info",
          title: "Caballo islandés",
          text:
            "La ruta está pensada también para personas sin experiencia. Si las condiciones y el grupo lo permiten, podremos probar el tölt, el característico paso del caballo islandés."
        },

        {
          type: "important",
          title: "Antes de reservar",
          text:
            "Comprobar edad mínima, restricciones de peso y horario exacto disponible para nuestra fecha."
        },

        {
          type: "plan",
          title: "Por qué la ponemos al final",
          text:
            "Las visitas anteriores son flexibles. La única hora que realmente manda durante la segunda mitad del día será el check-in de los caballos."
        }

      ]
    },


    /* =====================================================
       VÍK
    ===================================================== */

    {
      type: "activity",

      time: "~18:30",

      icon: "⛪",

      category: "PUEBLO",

      title: "Vík + iglesia/mirador",

      priority: "fixed",

      duration: "15–30 min",

      location: {
        name: "Vík í Mýrdal Church",
        lat: 63.4195,
        lng: -19.0009,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Vik+i+Myrdal+Church+Iceland"
      },

      description:
        "Subimos hacia la iglesia para ver la panorámica de Vík, el océano y Reynisdrangar.",

      tags: [
        "⏱️ 15–30 min",
        "📸 Mirador",
        "⛽ Logística",
        "🛒 Krónan"
      ],

      notes: [

        {
          type: "plan",
          title: "Parada logística importante",
          text:
            "Aprovechar Vík para combustible, baño, café o cualquier cosa que necesitemos."
        },

        {
          type: "important",
          title: "Segunda compra importante",
          text:
            "Krónan Vík es uno de nuestros supermercados clave. Conviene reponer aquí para la noche 3, el Día 4 y el desayuno del Día 5."
        }

      ]
    },


    /* =====================================================
       KATLA ICE CAVE · POR DECIDIR
    ===================================================== */

    {
      type: "activity",

      time: "POR DECIDIR",

      icon: "🧊",

      category: "GRAN DUDA",

      title: "Katla Ice Cave",

      priority: "decision",

      duration: "~3 h",

      location: {
        name: "Vík · punto de salida tours Katla",
        lat: 63.4186,
        lng: -19.0060,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Katla+Ice+Cave+Tours+Vik+Iceland"
      },

      description:
        "Excursión en Super Jeep hacia Kötlujökull para caminar por terreno glaciar y entrar en formaciones naturales de hielo.",

      decision: {
        status: "pending",

        label:
          "❓ POR DECIDIR",

        reason:
          "El Día 4 ya tendremos muchísimo glaciar: Falljökull con crampones + Zodiac + Jökulsárlón. Katla solo compensa si entrar dentro de una cueva/formación natural de hielo nos hace especial ilusión."
      },

      price: {
        eurPerPerson: 200,
        people: 5,
        eurFamily: 1000,
        approximate: true
      },

      tags: [
        "❓ POR DECIDIR",
        "💰 ~200 €/persona",
        "👨‍👩‍👧‍👦 ~1.000 € / 5",
        "🧊 Cueva de hielo"
      ],

      notes: [

        {
          type: "info",
          title: "Qué aporta que NO tenemos el Día 4",
          text:
            "La diferencia principal es entrar en formaciones/cueva natural de hielo. El Día 4 caminamos sobre el glaciar, pero no contratamos una cueva de hielo."
        },

        {
          type: "info",
          title: "Cómo funciona",
          text:
            "Normalmente se sale desde Vík en Super Jeep, se atraviesa terreno volcánico/glaciar, se equipa al grupo y se accede a la zona de Kötlujökull."
        },

        {
          type: "important",
          title: "Problema de tiempo",
          text:
            "Katla + caballos + todas las visitas de Costa Sur convertirían este día en un itinerario mucho más rígido. Si hacemos Katla habrá que eliminar Kvernufoss y probablemente Sólheimajökull o reducir otras paradas."
        },

        {
          type: "plan",
          title: "Decisión",
          text:
            "No reservar hasta comparar definitivamente el coste y la experiencia del Día 4."
        }

      ]
    }

  ],

  /* =====================================================
     NOCHE 3
  ===================================================== */

  overnightOptions: [

    /* -----------------------------------------------------
       OPCIÓN A · NOS QUEDAMOS EN VÍK
    ----------------------------------------------------- */

    {
      mood: "😴 CANSADOS",

      name: "Vík Camping",

      priority: 2,

      description:
        "La opción fácil: terminamos los caballos, cenamos y dormimos directamente en Vík.",

      recommended: false,

      location: {
        name: "Vík Camping",

        lat: 63.4193,
        lng: -19.0066,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Vik+Camping+Iceland"
      },

      fromPreviousActivity: {
        from: "Vík",

        km: 2,

        minutes: 5,

        mapsUrl:
          "https://www.google.com/maps/dir/?api=1&origin=Vik+Iceland&destination=Vik+Camping+Iceland",

        roads: [
          "Calles locales"
        ],

        offlineDirections: [
          "Permanecer dentro de Vík.",
          "Seguir las indicaciones hacia Vík Camping."
        ]
      },

      tags: [
        "😴 Fácil",
        "🚿 Duchas",
        "⚡ Electricidad",
        "📍 Vík"
      ],

      notes: [

        {
          type: "plan",

          title: "Ventaja",

          text:
            "Cero esfuerzo al final de un día muy completo."
        },

        {
          type: "plan",

          title: "Desventaja",

          text:
            "El Día 4 tendremos más carretera antes de Fjaðrárgljúfur y Skaftafell."
        }

      ]
    },


    /* -----------------------------------------------------
       OPCIÓN B · AVANZAMOS
    ----------------------------------------------------- */

    {
      mood: "😎 NOS QUEDA ENERGÍA",

      name: "Kirkjubær II · Kirkjubæjarklaustur",

      priority: 1,

      description:
        "Nuestra opción logística favorita si después de Vík todavía podemos conducir. Nos deja muy cerca de Fjaðrárgljúfur para el Día 4.",

      recommended: true,

      location: {
        name: "Kirkjubær II Camping",

        lat: 63.7905,
        lng: -18.0490,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Kirkjubaer+II+Camping+Iceland"
      },

      fromPreviousActivity: {
        from: "Vík",

        km: 70,

        minutes: 55,

        mapsUrl:
          "https://www.google.com/maps/dir/?api=1&origin=Vik+Iceland&destination=Kirkjubaer+II+Camping+Iceland",

        roads: [
          "1"
        ],

        offlineDirections: [
          "Salir de Vík por la carretera 1 hacia el este.",
          "Continuar por la Ring Road sin abandonar la carretera principal.",
          "Llegar a Kirkjubæjarklaustur.",
          "Seguir la ubicación guardada de Kirkjubær II."
        ]
      },

      price: {
        iskAdult: 2000,

        eurAdult: 14,

        iskUnit: 400,

        eurUnit: 3,

        iskElectricity: 1500,

        eurElectricity: 11,

        people: 5,

        estimatedFamilyEurWithoutElectricity: 73
      },

      tags: [
        "⭐ RECOMENDADO",
        "🚐 ~70 km desde Vík",
        "⚡ Electricidad",
        "🍳 Cocina"
      ],

      notes: [

        {
          type: "plan",

          title: "Por qué merece avanzar",

          text:
            "El Día 4 es el día más cargado del viaje. Dormir aquí nos quita una parte importante de carretera por la mañana."
        }

      ]
    },


    /* -----------------------------------------------------
       OPCIÓN C · ÞAKGIL
    ----------------------------------------------------- */

    {
      mood: "🏔️ BONITO PERO POCO PRÁCTICO",

      name: "Þakgil",

      priority: 3,

      description:
        "Camping espectacular entre montañas, pero supone un desvío y una carretera más lenta. No es nuestra opción logística normal.",

      recommended: false,

      location: {
        name: "Þakgil Camping",

        lat: 63.5307,
        lng: -18.7875,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Thakgil+Camping+Iceland"
      },

      tags: [
        "🏔️ Muy bonito",
        "🟡 Solo si cambiamos de plan",
        "🚐 Desvío"
      ],

      notes: [

        {
          type: "plan",

          title: "Nuestra decisión",

          text:
            "No lo elegiríamos normalmente porque el objetivo de esta noche es avanzar hacia el Día 4."
        }

      ]
    }

  ]

},


/* =========================================================
   DÍA 4 · SÁBADO 12
   VATNAJÖKULL + JÖKULSÁRLÓN
========================================================= */

{
  id: 4,

  navDate: "SÁB 12",

  date: "SÁBADO 12 DE SEPTIEMBRE",

  title: "Vatnajökull + Jökulsárlón",

  intro:
    "Probablemente el día más espectacular del viaje: cañón, Vatnajökull, nuestra gran excursión con crampones, Svartifoss, lagunas glaciares, Zodiac entre icebergs y Diamond Beach.",


  /* =====================================================
     PRESUPUESTO BASE · 5 PERSONAS
  ===================================================== */

  budgetSummary: {

    people: 5,

    items: [

      {
        icon: "🥾",

        name: "Glacier Discovery",

        isk: 109500,

        eur: 770,

        note:
          "21.900 ISK por persona"
      },

      {
        icon: "🚤",

        name: "Zodiac Jökulsárlón",

        isk: 83000,

        eur: 585,

        note:
          "16.600 ISK por persona"
      }

    ],

    fixedTotalEur: 1355,

    note:
      "Presupuesto aproximado para 5 personas. No incluye campings, combustible, comida ni posibles parkings."

  },


  stats: [

    {
      value: "~1.355 €",

      label: "ACTIVIDADES · 5"
    },

    {
      value: "2",

      label: "RESERVAS GRANDES"
    },

    {
      value: "⭐⭐⭐⭐⭐",

      label: "DÍA TOP"
    },

    {
      value: "TEMPRANO",

      label: "SALIDA"
    }

  ],


  activities: [

    /* =====================================================
       SALIDA
    ===================================================== */

    {
      type: "activity",

      time: "07:00",

      icon: "☕",

      category: "INICIO",

      title: "Desayuno + preparar camper",

      priority: "fixed",

      duration: "~45 min",

      description:
        "Madrugamos porque hoy tenemos dos reservas importantes y bastante recorrido.",

      tags: [
        "⏰ Madrugón",
        "🥪 Preparar comida",
        "🎒 Revisar equipo"
      ],

      notes: [

        {
          type: "important",

          title: "Comida del día",

          text:
            "Salir con desayuno, comida/picnic, snacks y suficiente comida para la tarde. En este tramo no queremos depender de supermercados."
        },

        {
          type: "important",

          title: "Ropa",

          text:
            "Llevar impermeable, capas térmicas, guantes y botas adecuadas para la excursión glaciar."
        }

      ]
    },


    /* =====================================================
       EL HRAUN / ELDHRAUN
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Kirkjubæjarklaustur",

      to: "Fjaðrárgljúfur",

      km: 10,

      minutes: 15,

      roads: [
        "1",
        "206"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Kirkjubaejarklaustur+Iceland&destination=Fjadrargljufur+Iceland",

      offlineDirections: [
        "Salir de Kirkjubæjarklaustur por la carretera 1.",
        "Continuar hacia el oeste/este según el acceso actual a Fjaðrárgljúfur.",
        "Tomar el desvío señalizado hacia Fjaðrárgljúfur.",
        "Seguir hasta el parking habilitado."
      ],

      notes: [

        {
          type: "info",

          title: "Eldhraun",

          text:
            "Durante esta parte de la Ring Road atravesamos enormes campos de lava cubiertos de musgo. No hace falta convertir Eldhraun en una visita independiente."
        },

        {
          type: "important",

          title: "No pisar el musgo",

          text:
            "El musgo que cubre la lava es extremadamente frágil. Solo paramos en zonas habilitadas."
        }

      ]
    },


    /* =====================================================
       FJAÐRÁRGLJÚFUR
    ===================================================== */

    {
      type: "activity",

      time: "08:00",

      icon: "🏞️",

      category: "CAÑÓN",

      title: "Fjaðrárgljúfur",

      priority: "fixed",

      duration: "45 min–1 h",

      location: {
        name: "Fjaðrárgljúfur",

        lat: 63.7713,
        lng: -18.1718,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Fjadrargljufur+Iceland"
      },

      description:
        "Cañón sinuoso de paredes verdes y oscuras excavado por el río Fjaðrá.",

      tags: [
        "⭐⭐⭐⭐⭐",
        "⏱️ 45–60 min",
        "🥾 Sendero",
        "💰 Gratis"
      ],

      parking: {
        name: "Fjaðrárgljúfur Parking",

        info:
          "Parking de acceso a los senderos y miradores del cañón.",

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Fjadrargljufur+Parking+Iceland"
      },

      notes: [

        {
          type: "info",

          title: "Qué tiene de especial",

          text:
            "El cañón tiene aproximadamente 2 km de longitud y paredes que alcanzan alrededor de 100 metros en algunos puntos."
        },

        {
          type: "plan",

          title: "Nuestro plan",

          text:
            "No necesitamos recorrer absolutamente todo. Hacemos los miradores principales y continuamos hacia Skaftafell."
        }

      ]
    },


    /* =====================================================
       FJAÐRÁRGLJÚFUR → SKAFTAFELL
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Fjaðrárgljúfur",

      to: "Skaftafell",

      km: 75,

      minutes: 60,

      roads: [
        "206",
        "1"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Fjadrargljufur+Iceland&destination=Skaftafell+Visitor+Centre",

      offlineDirections: [
        "Volver a la carretera 1.",
        "Continuar hacia el este por la Ring Road.",
        "Seguir siempre las indicaciones hacia Skaftafell.",
        "Entrar en el área de visitantes de Skaftafell."
      ],

      parking: {
        name: "Skaftafell Visitor Centre Parking",

        info:
          "Parking principal para acceder a Skaftafell y los senderos.",

        price: {
          status: "check-before-trip"
        },

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Skaftafell+Visitor+Centre+Parking"
      }
    },


    /* =====================================================
       GLACIER DISCOVERY · FALLJÖKULL
    ===================================================== */

    {
      type: "activity",

      time: "~10:00",

      icon: "🥾",

      category: "GRAN EXCURSIÓN",

      title: "Glacier Discovery · Falljökull",

      priority: "fixed",

      featured: true,

      duration: "~4 h",

      location: {
        name: "Skaftafell / Falljökull",

        lat: 64.0166,
        lng: -16.9660,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Skaftafell+Iceland"
      },

      description:
        "Nuestra gran experiencia sobre hielo: excursión guiada con crampones sobre una lengua de Vatnajökull.",

      price: {
        iskPerPerson: 21900,

        eurPerPerson: 154,

        people: 5,

        iskFamily: 109500,

        eurFamily: 770
      },

      booking: {
        required: true,

        advice:
          "Reservar una salida que permita combinar la excursión con Zodiac en Jökulsárlón durante la tarde.",

        url:
          "https://localguide.is/"
      },

      websiteUrl:
        "https://localguide.is/",

      tags: [
        "⭐⭐⭐⭐⭐",
        "🎟️ RESERVAR",
        "🥾 Crampones",
        "🧊 2,5–3 h sobre hielo",
        "⏱️ ~4 h total"
      ],

      notes: [

        {
          type: "info",

          title: "Qué hacemos realmente",

          text:
            "Esta vez sí caminamos sobre el glaciar con guía y material técnico. Podremos encontrar grietas, hielo azul, canales y grandes formaciones de hielo."
        },

        {
          type: "info",

          title: "Equipo",

          text:
            "El operador proporciona el material técnico necesario según la excursión: crampones, casco y demás equipo indicado para la actividad."
        },

        {
          type: "important",

          title: "No es una ice cave",

          text:
            "Glacier Discovery es una excursión sobre el glaciar. No debemos reservarla esperando entrar en una gran cueva natural de hielo."
        },

        {
          type: "plan",

          title: "Por qué elegimos esta",

          text:
            "Solo queremos pagar una gran excursión de glacier hiking durante el viaje. Preferimos hacerla aquí antes que repetir una experiencia similar en Sólheimajökull."
        }

      ]
    },


    /* =====================================================
       COMIDA
    ===================================================== */

    {
      type: "activity",

      time: "~14:00",

      icon: "🥪",

      category: "DESCANSO",

      title: "Comer",

      priority: "fixed",

      duration: "~30 min",

      description:
        "Comemos algo que llevemos preparado antes de continuar con Svartifoss.",

      tags: [
        "🥪 Picnic / camper",
        "⏱️ ~30 min"
      ]
    },


    /* =====================================================
       SVARTIFOSS
    ===================================================== */

    {
      type: "activity",

      time: "~14:30",

      icon: "💦",

      category: "SENDERISMO",

      title: "Svartifoss",

      priority: "fixed",

      duration: "1 h 30–2 h",

      location: {
        name: "Svartifoss",

        lat: 64.0275,
        lng: -16.9753,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Svartifoss+Iceland"
      },

      description:
        "Cascada rodeada por columnas hexagonales de basalto negro dentro de Skaftafell.",

      tags: [
        "⭐⭐⭐⭐⭐",
        "🥾 Senderismo",
        "⏱️ 1 h 30–2 h",
        "💰 Gratis salvo parking"
      ],

      notes: [

        {
          type: "info",

          title: "Qué tiene de diferente",

          text:
            "El agua cae delante de una pared de columnas de basalto negro. Visualmente es completamente distinta a las grandes cascadas de la Costa Sur."
        },

        {
          type: "info",

          title: "Conexión con Reykjavík",

          text:
            "Este tipo de formaciones basálticas está relacionado con la estética que inspiró el diseño de Hallgrímskirkja."
        },

        {
          type: "important",

          title: "Aquí sí hay que andar",

          text:
            "Svartifoss no está junto al parking. Hay subida y tenemos que contar con el trayecto de ida y vuelta."
        }

      ]
    },


    /* =====================================================
       SKAFTAFELL → FJALLSÁRLÓN
    ===================================================== */

         {
      type: "drive",

      icon: "🚐",

      from: "Skaftafell",

      to: "Fjallsárlón",

      km: 47,

      minutes: 40,

      roads: [
        "1"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Skaftafell+Iceland&destination=Fjallsarlon+Iceland",

      offlineDirections: [
        "Salir de Skaftafell hacia la carretera 1.",
        "Continuar hacia el este por la Ring Road.",
        "Seguir las indicaciones hacia Fjallsárlón.",
        "Tomar el acceso a la laguna.",
        "Entrar en el parking de Fjallsárlón."
      ],

      parking: {
        name: "Fjallsárlón Parking",

        info:
          "Parking junto al acceso a la laguna glaciar.",

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Fjallsarlon+Parking+Iceland"
      }
    },


    /* =====================================================
       FJALLSÁRLÓN · OPCIONAL SI VAMOS TARDE
    ===================================================== */

    {
      type: "activity",

      time: "~16:45",

      icon: "🧊",

      category: "LAGUNA GLACIAR",

      title: "Fjallsárlón",

      priority: "optional",

      duration: "20–30 min",

      location: {
        name: "Fjallsárlón",

        lat: 64.0180,
        lng: -16.3645,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Fjallsarlon+Iceland"
      },

      description:
        "Laguna glaciar más pequeña y tranquila que Jökulsárlón, con vistas hacia el glaciar y los bloques de hielo.",

      tags: [
        "⭐⭐⭐⭐",
        "🟡 PRESCINDIBLE SI VAMOS TARDE",
        "⏱️ 20–30 min",
        "💰 Gratis"
      ],

      notes: [

        {
          type: "info",

          title: "Por qué la metemos",

          text:
            "Aunque después veremos Jökulsárlón, Fjallsárlón ofrece una experiencia más pequeña y normalmente más tranquila."
        },

        {
          type: "plan",

          title: "Primera que quitamos",

          text:
            "Si Glacier Discovery o Svartifoss se alargan y necesitamos llegar puntuales a Zodiac, Fjallsárlón desaparece inmediatamente."
        }

      ]
    },


    /* =====================================================
       FJALLSÁRLÓN → JÖKULSÁRLÓN
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Fjallsárlón",

      to: "Jökulsárlón",

      km: 12,

      minutes: 15,

      roads: [
        "1"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Fjallsarlon+Iceland&destination=Jokulsarlon+Glacier+Lagoon",

      offlineDirections: [
        "Salir de Fjallsárlón y volver a la carretera 1.",
        "Continuar hacia el este.",
        "Seguir por la Ring Road aproximadamente 12 km.",
        "Jökulsárlón aparece junto a la propia carretera.",
        "Entrar en el parking de la laguna."
      ],

      parking: {
        name: "Jökulsárlón Parking",

        info:
          "Parking principal junto a la laguna y al punto de salida de las excursiones en barco.",

        price: {
          status: "check-before-trip"
        },

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Jokulsarlon+Glacier+Lagoon+Parking"
      }
    },


    /* =====================================================
       JÖKULSÁRLÓN
    ===================================================== */

    {
      type: "activity",

      time: "~17:30",

      icon: "🧊",

      category: "LAGUNA GLACIAR",

      title: "Jökulsárlón",

      priority: "fixed",

      location: {
        name: "Jökulsárlón Glacier Lagoon",

        lat: 64.0484,
        lng: -16.1790,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Jokulsarlon+Glacier+Lagoon"
      },

      description:
        "Una enorme laguna glaciar llena de icebergs desprendidos de Breiðamerkurjökull.",

      tags: [
        "⭐⭐⭐⭐⭐",
        "🧊 Icebergs",
        "🦭 Posibles focas",
        "💰 Laguna gratis"
      ],

      notes: [

        {
          type: "info",

          title: "Qué vamos a ver",

          text:
            "Icebergs blancos, azules y algunos atravesados por capas oscuras de sedimentos o ceniza, con el glaciar al fondo."
        },

        {
          type: "info",

          title: "Es un paisaje cambiante",

          text:
            "La cantidad, tamaño y posición de los icebergs cambia constantemente según el movimiento del glaciar, el viento y las mareas."
        },

        {
          type: "plan",

          title: "Nuestro plan",

          text:
            "Llegar con margen antes de Zodiac, hacer check-in y aprovechar cualquier tiempo sobrante para observar la laguna desde tierra."
        }

      ]
    },


    /* =====================================================
       ZODIAC JÖKULSÁRLÓN
    ===================================================== */

    {
      type: "activity",

      time: "~18:00",

      icon: "🚤",

      category: "GRAN EXCURSIÓN",

      title: "Zodiac entre icebergs",

      priority: "fixed",

      featured: true,

      duration: "~1 h 15 min",

      location: {
        name: "Jökulsárlón Zodiac Tour",

        lat: 64.0484,
        lng: -16.1790,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Jokulsarlon+Boat+Tours+Iceland"
      },

      description:
        "Recorremos Jökulsárlón en una Zodiac pequeña entre icebergs y, cuando las condiciones lo permiten, nos acercamos hacia el frente glaciar.",

      price: {
        iskPerPerson: 16600,

        eurPerPerson: 117,

        people: 5,

        iskFamily: 83000,

        eurFamily: 585
      },

      booking: {
        required: true,

        advice:
          "Reservar coordinando el horario con Glacier Discovery. Esta es una de las dos reservas que mandan sobre todo el Día 4.",

        url:
          "https://www.jokulsarlon.is/"
      },

      websiteUrl:
        "https://www.jokulsarlon.is/",

      tags: [
        "⭐⭐⭐⭐⭐",
        "🎟️ RESERVAR",
        "🚤 Zodiac",
        "🧊 Icebergs",
        "⏱️ ~1 h 15"
      ],

      notes: [

        {
          type: "info",

          title: "Por qué Zodiac y no anfibio",

          text:
            "La Zodiac es más pequeña y rápida, puede internarse más en la laguna y ofrece una experiencia más cercana a los icebergs."
        },

        {
          type: "info",

          title: "El anfibio",

          text:
            "El vehículo anfibio es más barato y dura menos, pero para una única visita a Jökulsárlón preferimos gastar más y hacer Zodiac."
        },

        {
          type: "important",

          title: "Condiciones",

          text:
            "La ruta exacta depende del hielo, el viento y las condiciones de seguridad. No se puede garantizar una distancia concreta respecto al glaciar."
        },

        {
          type: "plan",

          title: "Actividad nº 2 del día",

          text:
            "Junto con Glacier Discovery, esta es una de las experiencias de pago que justifican el presupuesto alto del Día 4."
        }

      ]
    },


    /* =====================================================
       JÖKULSÁRLÓN DESPUÉS DE ZODIAC
    ===================================================== */

    {
      type: "activity",

      time: "~19:15",

      icon: "🦭",

      category: "TIEMPO LIBRE",

      title: "Jökulsárlón desde tierra",

      priority: "fixed",

      duration: "~30 min",

      location: {
        name: "Jökulsárlón Glacier Lagoon",

        lat: 64.0484,
        lng: -16.1790,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Jokulsarlon+Glacier+Lagoon"
      },

      description:
        "Después de Zodiac nos quedamos un rato tranquilos junto a la laguna antes de cruzar hacia Diamond Beach.",

      tags: [
        "🧊 Icebergs",
        "🦭 Buscar focas",
        "📸 Fotos",
        "💰 Gratis"
      ]
    },


    /* =====================================================
       JÖKULSÁRLÓN → DIAMOND BEACH
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Jökulsárlón",

      to: "Diamond Beach",

      km: 1,

      minutes: 3,

      roads: [
        "1"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Jokulsarlon+Glacier+Lagoon&destination=Diamond+Beach+Iceland",

      offlineDirections: [
        "Salir del parking de Jökulsárlón.",
        "Cruzar al lado del océano junto a la carretera 1.",
        "Entrar en el parking habilitado para Diamond Beach."
      ],

      parking: {
        name: "Diamond Beach Parking",

        info:
          "Parking junto a la playa, al otro lado de Jökulsárlón.",

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Diamond+Beach+Parking+Iceland"
      }
    },


    /* =====================================================
       DIAMOND BEACH
    ===================================================== */

    {
      type: "activity",

      time: "~19:50",

      icon: "💎",

      category: "PLAYA",

      title: "Diamond Beach",

      priority: "fixed",

      duration: "30–60 min",

      location: {
        name: "Diamond Beach",

        lat: 64.0430,
        lng: -16.1770,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Diamond+Beach+Iceland"
      },

      description:
        "Bloques de hielo procedentes de Jökulsárlón descansan sobre la arena volcánica negra junto al Atlántico.",

      tags: [
        "⭐⭐⭐⭐⭐",
        "💰 Gratis",
        "🧊 Hielo",
        "🖤 Arena negra",
        "🌅 Final del día"
      ],

      notes: [

        {
          type: "info",

          title: "¿De dónde salen los 'diamantes'?",

          text:
            "Los icebergs salen de Jökulsárlón hacia el océano. El mar rompe y devuelve algunos bloques a la costa, donde quedan sobre la arena negra."
        },

        {
          type: "info",

          title: "Nunca es igual",

          text:
            "Puede haber muchísimos bloques o relativamente pocos. Depende de las mareas, el viento y el movimiento del hielo."
        },

        {
          type: "important",

          title: "Océano",

          text:
            "Seguimos estando frente al Atlántico Norte. No acercarse innecesariamente al agua ni perder de vista las olas."
        },

        {
          type: "plan",

          title: "Nuestro final del Día 4",

          text:
            "Queremos terminar aquí sin prisas y después retroceder hacia el oeste para dormir, porque al Día 5 tenemos que regresar hacia Landeyjahöfn."
        }

      ]
    }

  ],


  /* =====================================================
     NOCHE 4 · VOLVEMOS HACIA EL OESTE
  ===================================================== */

  overnightOptions: [

    /* -----------------------------------------------------
       OPCIÓN A · SKAFTAFELL
    ----------------------------------------------------- */

    {
      mood: "😎 LLEGAMOS ANTES DE LAS 23:00",

      name: "Skaftafell Camping",

      priority: 1,

      description:
        "Muy buena opción si podemos llegar dentro del horario de entrada de vehículos. Retrocedemos hacia el oeste y ganamos carretera para el Día 5.",

      recommended: true,

      location: {
        name: "Skaftafell Camping",

        lat: 64.0167,
        lng: -16.9660,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Skaftafell+Camping+Iceland"
      },

      fromPreviousActivity: {
        from: "Diamond Beach",

        km: 58,

        minutes: 50,

        mapsUrl:
          "https://www.google.com/maps/dir/?api=1&origin=Diamond+Beach+Iceland&destination=Skaftafell+Camping+Iceland",

        roads: [
          "1"
        ],

        offlineDirections: [
          "Salir de Diamond Beach hacia la carretera 1.",
          "Tomar la Ring Road hacia el oeste.",
          "Pasar Fjallsárlón.",
          "Continuar hacia Skaftafell.",
          "Entrar en la zona de camping del Parque Nacional."
        ]
      },

      tags: [
        "⭐ MEJOR SI LLEGAMOS A TIEMPO",
        "🚐 Retrocedemos hacia el oeste",
        "⚡ Electricidad",
        "🚿 Servicios"
      ],

      notes: [

        {
          type: "important",

          title: "Hora de llegada",

          text:
            "Si la entrada de vehículos sigue limitada hasta las 23:00 en nuestras fechas, no debemos arriesgarnos a llegar después. Revisar esta condición antes del viaje."
        },

        {
          type: "plan",

          title: "Ventaja",

          text:
            "Nos ahorra casi una hora de regreso hacia Landeyjahöfn al día siguiente."
        }

      ]
    },


    /* -----------------------------------------------------
       OPCIÓN B · SVÍNAFELL
    ----------------------------------------------------- */

    {
      mood: "🙂 OPCIÓN PRÁCTICA",

      name: "Svínafell Camping",

      priority: 2,

      description:
        "Alternativa muy práctica cerca de Skaftafell. También nos permite retroceder bastante hacia el oeste después de Diamond Beach.",

      recommended: true,

      location: {
        name: "Svínafell Camping",

        lat: 64.0080,
        lng: -16.8700,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Svinafell+Camping+Iceland"
      },

      fromPreviousActivity: {
        from: "Diamond Beach",

        km: 65,

        minutes: 55,

        mapsUrl:
          "https://www.google.com/maps/dir/?api=1&origin=Diamond+Beach+Iceland&destination=Svinafell+Camping+Iceland",

        roads: [
          "1"
        ],

        offlineDirections: [
          "Salir de Diamond Beach por la carretera 1 hacia el oeste.",
          "Continuar pasando Fjallsárlón.",
          "Pasar la zona de Skaftafell.",
          "Seguir la ubicación guardada hacia Svínafell."
        ]
      },

      price: {
        iskAdult: 2300,

        eurAdult: 16,

        people: 5,

        estimatedFamilyEur: 81,

        approximate: true
      },

      tags: [
        "⭐ PRÁCTICO",
        "🚿 Duchas",
        "🍳 Cocina/comedor",
        "❌ Sin electricidad camper"
      ],

      notes: [

        {
          type: "plan",

          title: "Cuándo elegirlo",

          text:
            "Muy buena alternativa si no queremos depender del horario de entrada de Skaftafell Camping."
        }

      ]
    },


    /* -----------------------------------------------------
       OPCIÓN C · ESTAMOS MUERTOS
    ----------------------------------------------------- */

    {
      mood: "😵 ESTAMOS MUERTOS",

      name: "Dormir más cerca de Jökulsárlón",

      priority: 3,

      description:
        "Solo si después de Diamond Beach estamos demasiado cansados para retroceder hasta Skaftafell/Svínafell.",

      recommended: false,

      location: {
        name: "Zona Jökulsárlón",

        lat: 64.0484,
        lng: -16.1790,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Camping+near+Jokulsarlon+Iceland"
      },

      tags: [
        "😵 Emergencia",
        "🚐 Menos conducción hoy",
        "⚠️ Más carretera Día 5"
      ],

      notes: [

        {
          type: "plan",

          title: "Desventaja",

          text:
            "Nos perjudica bastante para llegar al ferry del Día 5. Solo la utilizamos si conducir hacia el oeste no es razonable."
        }

      ]
    }

  ]

},


/* =========================================================
   DÍA 5 · DOMINGO 13
   HEIMAEY · ISLAS VESTMAN
========================================================= */
/* =========================================================
   DÍA 5 · DOMINGO 13
   HEIMAEY · ISLAS VESTMAN
========================================================= */

{
  id: 5,

  navDate: "DOM 13",

  date: "DOMINGO 13 DE SEPTIEMBRE",

  title: "Heimaey · Islas Vestman",

  intro:
    "Regresamos por la Costa Sur, embarcamos con la camper hacia Heimaey y dedicamos la tarde al volcán Eldfell, los paisajes de la isla y una ruta en ATV.",


  /* =====================================================
     PRESUPUESTO

     El precio final del ferry dependerá de:
     - longitud de la camper
     - número de pasajeros
     - ida y vuelta

     Lo afinaremos cuando sepamos exactamente
     qué modelo de Happy Campers tenemos.
  ===================================================== */

  budgetSummary: {

    people: 5,

    items: [

      {
        icon: "🏎️",

        name: "Volcano ATV compartido",

        isk: 74500,

        eur: 524,

        note:
          "14.900 ISK por persona"
      },

      {
        icon: "⛴️",

        name: "Ferry",

        value:
          "PENDIENTE CAMPER"
      }

    ],

    fixedTotalEur: 524,

    note:
      "El total todavía no incluye ferry ni camping. El precio del ferry dependerá de la longitud exacta de nuestra camper."

  },


  stats: [

    {
      value: "⛴️",

      label: "FERRY"
    },

    {
      value: "🌋",

      label: "VOLCÁN"
    },

    {
      value: "🏎️",

      label: "ATV"
    },

    {
      value: "1",

      label: "NOCHE EN LA ISLA"
    }

  ],


  activities: [

    /* =====================================================
       MADRUGÓN
    ===================================================== */

    {
      type: "activity",

      time: "06:30–07:00",

      icon: "☕",

      category: "INICIO",

      title: "Desayuno + salida temprana",

      priority: "fixed",

      description:
        "Hoy tenemos bastante carretera hacia el oeste antes de coger el ferry, así que la prioridad es salir pronto.",

      tags: [
        "⏰ Madrugón",
        "🥪 Preparar comida",
        "⛴️ Día condicionado por ferry"
      ],

      notes: [

        {
          type: "plan",

          title: "Objetivo",

          text:
            "No hacemos grandes paradas durante el regreso por la Costa Sur porque prácticamente todo ese tramo ya lo hemos visitado."
        },

        {
          type: "important",

          title: "Ferry",

          text:
            "Cuando se publique el horario definitivo de septiembre, este día se organizará alrededor de la salida que reservemos."
        }

      ]
    },


    /* =====================================================
       SKAFTAFELL / SVÍNAFELL → LANDEYJAHÖFN
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Skaftafell / Svínafell",

      to: "Landeyjahöfn",

      km: 255,

      minutes: 210,

      roads: [
        "1",
        "254"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Skaftafell+Iceland&destination=Landeyjahofn+Iceland",

      offlineDirections: [
        "Salir hacia el oeste por la carretera 1.",
        "Continuar por la Ring Road atravesando de nuevo la Costa Sur.",
        "Pasar la zona de Vík.",
        "Continuar hacia Skógar y Hvolsvöllur.",
        "Tomar el desvío hacia Landeyjahöfn.",
        "Seguir las indicaciones del ferry Herjólfur.",
        "Llegar con suficiente margen para el check-in."
      ],

      notes: [

        {
          type: "important",

          title: "Trayecto largo",

          text:
            "Es una de las conducciones largas del viaje. Haremos paradas breves si son necesarias, pero sin añadir visitas grandes."
        },

        {
          type: "plan",

          title: "Por qué dormimos hacia el oeste el Día 4",

          text:
            "Haber retrocedido hasta Skaftafell/Svínafell nos ahorra aproximadamente una hora de carretera esta mañana."
        }

      ]
    },


    /* =====================================================
       FERRY · LANDEYJAHÖFN → HEIMAEY
    ===================================================== */

    {
      type: "activity",

      time: "SEGÚN RESERVA",

      icon: "⛴️",

      category: "FERRY",

      title: "Herjólfur · Landeyjahöfn → Heimaey",

      priority: "fixed",

      featured: true,

      duration: "~35 min",

      location: {
        name: "Landeyjahöfn",

        lat: 63.5308,
        lng: -20.1370,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Landeyjahofn+Ferry+Terminal+Iceland"
      },

      description:
        "Cruzamos con la camper hasta Heimaey. La propia entrada al archipiélago entre paredes volcánicas forma parte de la experiencia.",

      price: {

        adultOneWayISK: 2700,

        adultOneWayEUR: 19,

        people: 5,

        vehicleUnder5mISK: 4050,

        vehicleUnder5mEUR: 28,

        vehicleOver5mISK: 5400,

        vehicleOver5mEUR: 38,

        status:
          "PENDIENTE LONGITUD CAMPER"
      },

      booking: {

        required: true,

        advice:
          "Reservar cuando esté disponible el horario definitivo de septiembre y sepamos la longitud exacta de nuestra camper.",

        url:
          "https://herjolfur.is/"
      },

      websiteUrl:
        "https://herjolfur.is/",

      tags: [
        "🎟️ RESERVAR",
        "🚐 Camper en ferry",
        "⏱️ ~35 min",
        "⚠️ Check-in con margen"
      ],

      notes: [

        {
          type: "important",

          title: "Check-in",

          text:
            "Planificaremos llegar al puerto como mínimo 30 minutos antes de la salida reservada."
        },

        {
          type: "important",

          title: "Medidas de la camper",

          text:
            "Antes de reservar tenemos que saber longitud y altura exactas del vehículo. Es especialmente importante indicar si supera los límites especificados por la naviera."
        },

        {
          type: "plan",

          title: "Llevamos la camper",

          text:
            "Sí. Dormimos en Heimaey y queremos recorrer la isla por nuestra cuenta, así que nos compensa cruzar con ella."
        }

      ]
    },


    /* =====================================================
       LLEGADA A HEIMAEY
    ===================================================== */

    {
      type: "activity",

      time: "SEGÚN FERRY",

      icon: "🌊",

      category: "HEIMAEY",

      title: "Llegada a las Islas Vestman",

      priority: "fixed",

      location: {
        name: "Vestmannaeyjar Harbour",

        lat: 63.4428,
        lng: -20.2673,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Vestmannaeyjar+Harbour+Iceland"
      },

      description:
        "Desembarcamos en Heimaey con la camper y empezamos a recorrer la isla.",

      tags: [
        "🌋 Isla volcánica",
        "🚐 Con camper"
      ],

      notes: [

        {
          type: "info",

          title: "Heimaey",

          text:
            "Es la mayor isla habitada del archipiélago de Vestmannaeyjar y tiene un paisaje completamente diferente al de la Costa Sur continental."
        }

      ]
    },


    /* =====================================================
       COMER
    ===================================================== */

    {
      type: "activity",

      time: "AL LLEGAR",

      icon: "🥪",

      category: "DESCANSO",

      title: "Comer",

      priority: "fixed",

      duration: "~30 min",

      description:
        "Comemos algo antes de empezar la parte activa del día.",

      tags: [
        "🥪 Camper / picnic",
        "⏱️ Flexible"
      ]
    },


    /* =====================================================
       PUERTO → ELDFELL
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Puerto de Heimaey",

      to: "Eldfell",

      km: 3,

      minutes: 10,

      roads: [
        "Calles locales"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Vestmannaeyjar+Harbour+Iceland&destination=Eldfell+Volcano+Iceland",

      offlineDirections: [
        "Salir del puerto hacia el interior de Heimaey.",
        "Seguir las indicaciones hacia Eldfell.",
        "Dirigirse al acceso del sendero del volcán.",
        "Aparcar en la zona habilitada."
      ],

      parking: {
        name: "Eldfell Trail Parking",

        info:
          "Zona de acceso al sendero de Eldfell.",

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Eldfell+Trail+Parking+Iceland"
      }
    },


    /* =====================================================
       ELDFELL
    ===================================================== */

    {
      type: "activity",

      time: "PRIMERA TARDE",

      icon: "🌋",

      category: "VOLCÁN",

      title: "Subida a Eldfell",

      priority: "fixed",

      duration: "1 h 30–2 h",

      location: {
        name: "Eldfell",

        lat: 63.4325,
        lng: -20.2468,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Eldfell+Volcano+Iceland"
      },

      description:
        "Subimos al volcán que entró en erupción en 1973 y transformó Heimaey.",

      tags: [
        "⭐⭐⭐⭐⭐",
        "🌋 Cráter",
        "🥾 1 h 30–2 h",
        "💰 Gratis"
      ],

      notes: [

        {
          type: "info",

          title: "La erupción de 1973",

          text:
            "Eldfell apareció durante una erupción inesperada muy cerca del pueblo. La lava modificó profundamente la isla y obligó a evacuar a gran parte de la población."
        },

        {
          type: "plan",

          title: "Subimos al cráter",

          text:
            "La gracia no es verlo desde abajo. Queremos subir para tener vistas del cráter, el pueblo, el Atlántico y los campos de lava."
        },

        {
          type: "important",

          title: "Viento",

          text:
            "La parte alta puede estar muy expuesta. Si las condiciones son malas, ajustaremos la subida."
        }

      ]
    },


    /* =====================================================
       RECORRIDO PANORÁMICO DE HEIMAEY
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Eldfell",

      to: "Herjólfsdalur",

      km: 5,

      minutes: 10,

      roads: [
        "Calles locales"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Eldfell+Iceland&destination=Herjolfsdalur+Iceland",

      offlineDirections: [
        "Bajar desde Eldfell hacia el pueblo.",
        "Atravesar Heimaey hacia el oeste.",
        "Seguir las indicaciones hacia Herjólfsdalur."
      ]
    },


    /* =====================================================
       HERJÓLFSDALUR
    ===================================================== */

    {
      type: "activity",

      time: "FLEXIBLE",

      icon: "🌿",

      category: "PAISAJE",

      title: "Herjólfsdalur",

      priority: "fixed",

      duration: "20–30 min",

      location: {
        name: "Herjólfsdalur",

        lat: 63.4433,
        lng: -20.2980,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Herjolfsdalur+Iceland"
      },

      description:
        "Valle rodeado por enormes paredes verdes y volcánicas en el oeste de Heimaey.",

      tags: [
        "🌿 Paisaje",
        "💰 Gratis",
        "📸 Fotos"
      ],

      notes: [

        {
          type: "plan",

          title: "Parada panorámica",

          text:
            "No necesitamos una gran caminata. Paramos, recorremos un poco la zona y seguimos explorando la isla."
        }

      ]
    },


    /* =====================================================
       ELEPHANT ROCK
    ===================================================== */

    {
      type: "activity",

      time: "FLEXIBLE",

      icon: "🐘",

      category: "FORMACIÓN ROCOSA",

      title: "Elephant Rock desde tierra",

      priority: "fixed",

      duration: "15–20 min",

      location: {
        name: "Elephant Rock View Area",

        lat: 63.4380,
        lng: -20.3090,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Elephant+Rock+Vestmannaeyjar+Iceland"
      },

      description:
        "Buscamos desde tierra la famosa formación rocosa que parece una cabeza de elefante entrando en el océano.",

      tags: [
        "🐘 Foto",
        "💰 Gratis",
        "🚤 Sin RIB"
      ],

      notes: [

        {
          type: "info",

          title: "Por qué no hacemos RIB",

          text:
            "Desde un barco se puede ver la roca desde otra perspectiva y entrar en cuevas marinas, pero preferimos gastar el presupuesto en Zodiac y ballenas."
        },

        {
          type: "plan",

          title: "Nuestra alternativa",

          text:
            "Intentamos verla desde la zona terrestre/campo de golf y mantenemos el recorrido de Heimaey prácticamente gratuito."
        }

      ]
    },


    /* =====================================================
       ELEPHANT ROCK → STÓRHÖFÐI
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Elephant Rock / Herjólfsdalur",

      to: "Stórhöfði",

      km: 8,

      minutes: 15,

      roads: [
        "Carreteras locales"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Herjolfsdalur+Iceland&destination=Storhofdi+Iceland",

      offlineDirections: [
        "Salir de la zona oeste de Heimaey.",
        "Atravesar la isla hacia el sur.",
        "Seguir las indicaciones hacia Stórhöfði.",
        "Continuar hasta la zona de miradores."
      ]
    },


    /* =====================================================
       STÓRHÖFÐI
    ===================================================== */

    {
      type: "activity",

      time: "FLEXIBLE",

      icon: "🌊",

      category: "ACANTILADOS",

      title: "Stórhöfði",

      priority: "fixed",

      duration: "30–45 min",

      location: {
        name: "Stórhöfði",

        lat: 63.3967,
        lng: -20.2888,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Storhofdi+Vestmannaeyjar+Iceland"
      },

      description:
        "Llegamos al extremo sur de Heimaey para ver acantilados, Atlántico e islotes volcánicos.",

      tags: [
        "⭐⭐⭐⭐",
        "🌊 Atlántico",
        "💰 Gratis",
        "💨 Viento"
      ],

      notes: [

        {
          type: "info",

          title: "Frailecillos",

          text:
            "No organizamos esta visita esperando ver frailecillos. A mediados de septiembre ya estamos demasiado tarde para que sean el objetivo del día."
        },

        {
          type: "plan",

          title: "Por qué vamos igualmente",

          text:
            "Aunque no haya frailecillos, las vistas del océano, los acantilados y las islas hacen que merezca la pena."
        }

      ]
    },


    /* =====================================================
       STÓRHÖFÐI → VOLCANO ATV
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Stórhöfði",

      to: "Volcano ATV",

      km: 8,

      minutes: 15,

      roads: [
        "Carreteras locales"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Storhofdi+Iceland&destination=Volcano+ATV+Vestmannaeyjar",

      offlineDirections: [
        "Salir de Stórhöfði hacia el norte.",
        "Regresar hacia la zona urbana de Heimaey.",
        "Seguir la ubicación guardada de Volcano ATV.",
        "Llegar con margen antes de la hora reservada."
      ]
    },


    /* =====================================================
       VOLCANO ATV
    ===================================================== */
       {
      type: "activity",

      time: "SEGÚN RESERVA",

      icon: "🏎️",

      category: "EXCURSIÓN",

      title: "Volcano ATV",

      priority: "fixed",

      featured: true,

      duration: "~1 h",

      location: {
        name: "Volcano ATV · Vestmannaeyjar",

        lat: 63.4370,
        lng: -20.2700,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Volcano+ATV+Vestmannaeyjar+Iceland"
      },

      description:
        "Ruta guiada en ATV por el paisaje volcánico de Heimaey. Conducimos nosotros siguiendo al guía por campos de lava y zonas de costa.",

      price: {
        iskPerPerson: 14900,

        eurPerPerson: 105,

        people: 5,

        iskFamily: 74500,

        eurFamily: 524,

        note:
          "Precio compartiendo ATV. Revisar tarifa definitiva antes de reservar."
      },

      booking: {
        required: true,

        advice:
          "Reservar cuando tengamos confirmado el horario del ferry. Elegiremos ATV compartido, no cinco ATV individuales.",

        url:
          "https://volcanoatv.is/"
      },

      websiteUrl:
        "https://volcanoatv.is/",

      tags: [
        "⭐⭐⭐⭐⭐",
        "🎟️ RESERVAR",
        "🏎️ Conducimos nosotros",
        "⏱️ ~1 h",
        "👥 ATV compartido"
      ],

      notes: [

        {
          type: "info",

          title: "¿Cómo funciona?",

          text:
            "Los ATV son automáticos. Un guía conduce delante y nosotros seguimos la ruta en nuestros vehículos."
        },

        {
          type: "info",

          title: "Por dónde vamos",

          text:
            "La ruta atraviesa paisaje volcánico, zonas relacionadas con Eldfell, costa y lugares vinculados a historias de Heimaey."
        },

        {
          type: "important",

          title: "Conductores",

          text:
            "Quien conduzca deberá cumplir los requisitos de permiso de conducción del operador. Revisar también edad mínima y condiciones para pasajeros."
        },

        {
          type: "info",

          title: "Equipo",

          text:
            "El operador proporciona el equipo indicado para la actividad, como casco y ropa protectora según las condiciones."
        },

        {
          type: "plan",

          title: "Por qué ATV sí y RIB no",

          text:
            "Ya hacemos Zodiac en Jökulsárlón y probablemente ballenas en Reykjavík. Preferimos que la experiencia especial de Heimaey sea terrestre y completamente diferente."
        }

      ]
    },


    /* =====================================================
       REPOSICIÓN EN HEIMAEY · SI HACE FALTA
    ===================================================== */

    {
      type: "activity",

      time: "SI HACE FALTA",

      icon: "🛒",

      category: "LOGÍSTICA",

      title: "Bónus Vestmannaeyjar",

      priority: "optional",

      duration: "15–30 min",

      location: {
        name: "Bónus Vestmannaeyjar",

        lat: 63.4390,
        lng: -20.2720,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Bonus+Vestmannaeyjar+Iceland"
      },

      description:
        "Buen momento para reponer comida si la nevera empieza a quedarse vacía.",

      tags: [
        "🟡 Solo si hace falta",
        "🐷 Bónus",
        "🛒 Reposición"
      ],

      notes: [

        {
          type: "plan",

          title: "Alternativa",

          text:
            "Krónan Vestmannaeyjar también queda guardado en el mapa por si tiene mejor horario o necesitamos más variedad."
        }

      ]
    }

  ],


  /* =====================================================
     NOCHE 5 · DORMIMOS EN HEIMAEY
  ===================================================== */

  overnightOptions: [

    {
      mood: "🌋 NOCHE EN LA ISLA",

      name: "Vestmannaeyjar Camp Site",

      priority: 1,

      description:
        "Esta noche no hay que elegir entre avanzar o retroceder: nos quedamos en Heimaey y cogemos el ferry de regreso al día siguiente.",

      recommended: true,

      location: {
        name: "Vestmannaeyjar Camp Site",

        lat: 63.4420,
        lng: -20.2950,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Vestmannaeyjar+Camp+Site+Iceland"
      },

      fromPreviousActivity: {
        from: "Heimaey",

        km: 4,

        minutes: 10,

        mapsUrl:
          "https://www.google.com/maps/dir/?api=1&origin=Vestmannaeyjar+Iceland&destination=Vestmannaeyjar+Camp+Site+Iceland",

        roads: [
          "Calles locales"
        ],

        offlineDirections: [
          "Desde el pueblo continuar hacia la zona oeste de Heimaey.",
          "Seguir las indicaciones del camping.",
          "Entrar en el camping y preparar la camper para pasar la noche."
        ]
      },

      tags: [
        "⭐ FIJO",
        "🌋 Heimaey",
        "⛴️ Ferry mañana",
        "🚐 Camper"
      ],

      notes: [

        {
          type: "plan",

          title: "Por qué dormimos en la isla",

          text:
            "No tiene sentido volver en ferry la misma tarde. Dormir aquí nos permite disfrutar Heimaey sin estar pendientes de una segunda salida de barco."
        }

      ]
    }

  ]

},


/* =========================================================
   DÍA 6 · LUNES 14
   HEIMAEY → REYKJADALUR
========================================================= */

{
  id: 6,

  navDate: "LUN 14",

  date: "LUNES 14 DE SEPTIEMBRE",

  title: "Heimaey → Reykjadalur",

  intro:
    "Volvemos al continente y hacemos un día mucho más flexible: Eyjafjallajökull, costa y pueblos si apetece, Selfoss y un final espectacular caminando hasta el río termal natural de Reykjadalur.",


  stats: [

    {
      value: "♨️",

      label: "RÍO TERMAL"
    },

    {
      value: "3 h",

      label: "REYKJADALUR"
    },

    {
      value: "GRATIS",

      label: "ACTIVIDAD ESTRELLA"
    },

    {
      value: "FLEXIBLE",

      label: "RESTO DEL DÍA"
    }

  ],


  activities: [

    /* =====================================================
       DESAYUNO
    ===================================================== */

    {
      type: "activity",

      time: "07:30",

      icon: "☕",

      category: "INICIO",

      title: "Desayuno + preparar camper",

      priority: "fixed",

      description:
        "Preparamos todo para coger un ferry temprano de regreso al continente.",

      tags: [
        "⛴️ Ferry temprano",
        "🎒 Preparar mochila Reykjadalur"
      ],

      notes: [

        {
          type: "important",

          title: "Mochila para la tarde",

          text:
            "Dejar preparados bañador, toalla, ropa seca, impermeable, agua y calzado adecuado para Reykjadalur."
        }

      ]
    },


    /* =====================================================
       FERRY HEIMAEY → LANDEYJAHÖFN
    ===================================================== */

    {
      type: "activity",

      time: "SEGÚN RESERVA",

      icon: "⛴️",

      category: "FERRY",

      title: "Herjólfur · regreso al continente",

      priority: "fixed",

      duration: "~35 min",

      location: {
        name: "Vestmannaeyjar Ferry Terminal",

        lat: 63.4428,
        lng: -20.2673,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Vestmannaeyjar+Ferry+Terminal"
      },

      description:
        "Regresamos con la camper desde Heimaey hasta Landeyjahöfn.",

      booking: {
        required: true,

        advice:
          "Reservaremos ida y vuelta conjuntamente cuando estén publicados los horarios definitivos.",

        url:
          "https://herjolfur.is/"
      },

      websiteUrl:
        "https://herjolfur.is/",

      tags: [
        "🎟️ RESERVAR",
        "🚐 Camper",
        "⏱️ ~35 min"
      ]
    },


    /* =====================================================
       LANDEYJAHÖFN → EYJAFJALLAJÖKULL
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Landeyjahöfn",

      to: "Eyjafjallajökull viewpoint",

      km: 30,

      minutes: 30,

      roads: [
        "254",
        "1"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Landeyjahofn+Iceland&destination=Eyjafjallajokull+Viewpoint+Iceland",

      offlineDirections: [
        "Salir de Landeyjahöfn hacia la carretera 1.",
        "Tomar la Ring Road.",
        "Continuar hacia la zona de Þorvaldseyri.",
        "Parar únicamente en una zona habilitada desde la que podamos observar Eyjafjallajökull."
      ]
    },


    /* =====================================================
       EYJAFJALLAJÖKULL
    ===================================================== */

    {
      type: "activity",

      time: "~10:00",

      icon: "🌋",

      category: "VOLCÁN + GLACIAR",

      title: "Eyjafjallajökull",

      priority: "fixed",

      duration: "15–20 min",

      location: {
        name: "Eyjafjallajökull Viewpoint",

        lat: 63.5700,
        lng: -19.6100,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Eyjafjallajokull+Viewpoint+Iceland"
      },

      description:
        "Parada rápida para ver el volcán cubierto por glaciar cuya erupción de 2010 afectó al tráfico aéreo europeo.",

      tags: [
        "🌋 Volcán",
        "🧊 Glaciar",
        "💰 Gratis",
        "⏱️ 15–20 min"
      ],

      notes: [

        {
          type: "info",

          title: "Por qué es famoso",

          text:
            "La erupción de 2010 generó una enorme nube de ceniza que provocó cancelaciones y cierres del espacio aéreo en buena parte de Europa."
        },

        {
          type: "plan",

          title: "Parada rápida",

          text:
            "No queremos convertirlo en una visita larga. Mirador, fotos y continuamos."
        }

      ]
    },


    /* =====================================================
       EYJAFJALLAJÖKULL → EYRARBAKKI
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Eyjafjallajökull",

      to: "Eyrarbakki",

      km: 95,

      minutes: 75,

      roads: [
        "1",
        "34"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Eyjafjallajokull+Iceland&destination=Eyrarbakki+Iceland",

      offlineDirections: [
        "Continuar hacia el oeste por la carretera 1.",
        "Pasar Hvolsvöllur y Hella.",
        "Continuar hacia Selfoss.",
        "Tomar el desvío hacia la costa y Eyrarbakki.",
        "Entrar en el pueblo."
      ]
    },


    /* =====================================================
       EYRARBAKKI · OPCIONAL
    ===================================================== */

    {
      type: "activity",

      time: "~11:30",

      icon: "🌊",

      category: "SI VAMOS BIEN",

      title: "Eyrarbakki",

      priority: "optional",

      duration: "30–45 min",

      location: {
        name: "Eyrarbakki",

        lat: 63.8630,
        lng: -21.1490,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Eyrarbakki+Iceland"
      },

      description:
        "Pequeño pueblo costero con casas tradicionales. Parada tranquila si vamos bien de tiempo.",

      tags: [
        "🟡 OPCIONAL",
        "🌊 Costa",
        "☕ Café"
      ],

      notes: [

        {
          type: "plan",

          title: "No sacrificar Reykjadalur",

          text:
            "Si vamos retrasados, esta parada desaparece. Reykjadalur tiene prioridad absoluta."
        }

      ]
    },


    /* =====================================================
       EYRARBAKKI → SELFOSS
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Eyrarbakki",

      to: "Selfoss",

      km: 13,

      minutes: 15,

      roads: [
        "34"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Eyrarbakki+Iceland&destination=Selfoss+Iceland",

      offlineDirections: [
        "Salir de Eyrarbakki.",
        "Tomar la carretera hacia Selfoss.",
        "Continuar hasta entrar en la localidad."
      ]
    },


    /* =====================================================
       SELFOSS
    ===================================================== */

    {
      type: "activity",

      time: "~12:30",

      icon: "🛒",

      category: "LOGÍSTICA + COMIDA",

      title: "Selfoss",

      priority: "fixed",

      duration: "45–60 min",

      location: {
        name: "Selfoss",

        lat: 63.9335,
        lng: -20.9981,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Selfoss+Iceland"
      },

      description:
        "Paramos para comer y aprovechamos uno de los mejores puntos de reposición de la segunda mitad del viaje.",

      tags: [
        "🥪 Comer",
        "🛒 Supermercados",
        "⛽ Combustible",
        "🚻 Servicios"
      ],

      notes: [

        {
          type: "plan",

          title: "Supermercados",

          text:
            "Tenemos Bónus y Krónan como opciones principales. También dejamos guardadas alternativas con horarios amplios para emergencias."
        },

        {
          type: "plan",

          title: "Compra",

          text:
            "Si necesitamos una reposición grande antes de los últimos días, este es el momento."
        }

      ]
    },


    /* =====================================================
       ÞORLÁKSHÖFN · MUY OPCIONAL
    ===================================================== */

    {
      type: "activity",

      time: "SOLO SI SOBRA MUCHO TIEMPO",

      icon: "⚓",

      category: "MUY OPCIONAL",

      title: "Þorlákshöfn",

      priority: "optional",

      location: {
        name: "Þorlákshöfn",

        lat: 63.8556,
        lng: -21.3837,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Thorlakshofn+Iceland"
      },

      description:
        "Pueblo pesquero y portuario que solo visitaríamos si realmente vamos sobrados de tiempo.",

      tags: [
        "🟡 MUY OPCIONAL",
        "⚓ Puerto"
      ],

      notes: [

        {
          type: "plan",

          title: "Prioridad baja",

          text:
            "Después de todos los paisajes costeros del viaje no aporta suficiente como para quitar tiempo a Reykjadalur."
        }

      ]
    },


    /* =====================================================
       SELFOSS → HVERAGERÐI / REYKJADALUR
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Selfoss",

      to: "Reykjadalur Trailhead",

      km: 15,

      minutes: 20,

      roads: [
        "1"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Selfoss+Iceland&destination=Reykjadalur+Hot+Spring+Thermal+River",

      offlineDirections: [
        "Salir de Selfoss por la carretera 1 hacia Reykjavík.",
        "Continuar hasta Hveragerði.",
        "Entrar en Hveragerði.",
        "Seguir las indicaciones hacia Reykjadalur / Reykjadalur Trailhead.",
        "Llegar al parking del inicio de la ruta."
      ],

      parking: {
        name: "Reykjadalur Parking",

        info:
          "Parking en el inicio del sendero hacia el valle y el río termal.",

        price: {
          status: "check-before-trip"
        },

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Reykjadalur+Parking+Iceland"
      }
    },

       /* =====================================================
       REYKJADALUR
    ===================================================== */

    {
      type: "activity",

      time: "~14:15",

      icon: "🥾♨️",

      category: "SENDERISMO + BAÑO",

      title: "Reykjadalur",

      priority: "fixed",

      featured: true,

      duration: "~3 h",

      location: {
        name: "Reykjadalur Hot Spring Thermal River",

        lat: 64.0223,
        lng: -21.2114,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Reykjadalur+Hot+Spring+Thermal+River+Iceland"
      },

      description:
        "Caminamos por un valle geotermal lleno de vapor y manantiales hasta llegar a un río calentado naturalmente donde podemos bañarnos.",

      price: {
        eurPerPerson: 0,

        eurFamily: 0,

        note:
          "Acceso al valle y al río gratuito. El parking puede ser de pago."
      },

      tags: [
        "⭐⭐⭐⭐⭐",
        "💰 GRATIS",
        "🥾 Senderismo",
        "♨️ Río termal",
        "⏱️ ~3 h"
      ],

      notes: [

        {
          type: "info",

          title: "No es un spa",

          text:
            "Aquí no hay una piscina construida ni un complejo termal. Caminamos por el valle hasta un río calentado naturalmente por la actividad geotérmica."
        },

        {
          type: "info",

          title: "El paisaje",

          text:
            "Durante la ruta veremos vapor saliendo del suelo, manantiales calientes, zonas minerales y el paisaje geotermal del área de Hengill."
        },

        {
          type: "plan",

          title: "Nuestro plan",

          text:
            "Subir sin prisas, llegar al tramo apto para el baño, meternos en el río, cambiarnos y hacer el camino de regreso."
        },

        {
          type: "important",

          title: "No calcular solo la caminata",

          text:
            "Hay que contar subida + paradas + baño + secarnos/cambiarnos + regreso. Por eso reservamos aproximadamente tres horas."
        },

        {
          type: "important",

          title: "Meteorología",

          text:
            "Esta actividad depende bastante del tiempo. Con condiciones normales podemos hacerla con ropa adecuada; con meteorología realmente mala habrá que reconsiderarla."
        },

        {
          type: "important",

          title: "Zonas geotermales",

          text:
            "No abandonar los senderos ni tocar agua o barro geotermal fuera de las zonas indicadas. Algunas áreas pueden alcanzar temperaturas peligrosas."
        },

        {
          type: "plan",

          title: "Por qué la mantenemos sí o sí",

          text:
            "Complementa perfectamente Sky Lagoon: Día 1 tenemos una experiencia termal de lujo y aquí una experiencia geotermal completamente natural."
        }

      ]
    },


    /* =====================================================
       REYKJADALUR → HVERAGERÐI
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Reykjadalur",

      to: "Hveragerði",

      km: 4,

      minutes: 10,

      roads: [
        "Calles locales"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Reykjadalur+Hot+Spring+Thermal+River&destination=Hveragerdi+Iceland",

      offlineDirections: [
        "Salir del parking de Reykjadalur.",
        "Bajar hacia Hveragerði.",
        "Entrar de nuevo en el pueblo.",
        "Parar únicamente si necesitamos supermercado, combustible, café o servicios."
      ]
    },


    /* =====================================================
       HVERAGERÐI · PARADA LOGÍSTICA
    ===================================================== */

    {
      type: "activity",

      time: "DESPUÉS DE REYKJADALUR",

      icon: "♨️",

      category: "LOGÍSTICA",

      title: "Hveragerði",

      priority: "optional",

      duration: "Flexible",

      location: {
        name: "Hveragerði",

        lat: 63.9984,
        lng: -21.1887,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Hveragerdi+Iceland"
      },

      description:
        "Pueblo construido en una zona geotérmica muy activa. Después de Reykjadalur lo utilizamos principalmente como parada logística.",

      tags: [
        "♨️ Geotermia",
        "🛒 Bónus",
        "☕ Café",
        "⛽ Logística"
      ],

      notes: [

        {
          type: "info",

          title: "Hveragerði",

          text:
            "La actividad geotérmica forma parte del propio entorno del pueblo, con vapor y aguas calientes en los alrededores."
        },

        {
          type: "plan",

          title: "No necesitamos otra actividad",

          text:
            "Después de pasar unas tres horas en Reykjadalur no hace falta llenar Hveragerði de visitas. Paramos solo si nos apetece o necesitamos algo."
        }

      ]
    },


    /* =====================================================
       HVERAGERÐI → HELLISHEIÐI
    ===================================================== */

    {
      type: "drive",

      icon: "🚐",

      from: "Hveragerði",

      to: "Hellisheiði",

      km: 20,

      minutes: 20,

      roads: [
        "1"
      ],

      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Hveragerdi+Iceland&destination=Hellisheidi+Iceland",

      offlineDirections: [
        "Salir de Hveragerði por la carretera 1 en dirección Reykjavík.",
        "Comenzar la subida hacia Hellisheiði.",
        "Continuar por la Ring Road atravesando la zona volcánica y geotermal.",
        "Parar únicamente en lugares habilitados si vemos algún mirador que merezca la pena."
      ]
    },


    /* =====================================================
       HELLISHEIÐI
    ===================================================== */

    {
      type: "activity",

      time: "DE CAMINO",

      icon: "🌋",

      category: "PAISAJE EN RUTA",

      title: "Hellisheiði",

      priority: "fixed",

      location: {
        name: "Hellisheiði",

        lat: 64.0370,
        lng: -21.4000,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Hellisheidi+Iceland"
      },

      description:
        "Atravesamos una enorme zona volcánica y geotérmica camino de Reykjavík.",

      tags: [
        "🌋 Lava",
        "💨 Vapor",
        "🚐 En ruta",
        "💰 Gratis"
      ],

      notes: [

        {
          type: "plan",

          title: "No es una excursión",

          text:
            "Hellisheiði forma parte de la conducción. Si vemos un mirador habilitado que nos guste, paramos; si no, simplemente disfrutamos del paisaje desde la carretera."
        }

      ]
    }

  ],


  /* =====================================================
     NOCHE 6
  ===================================================== */

  overnightOptions: [

    /* -----------------------------------------------------
       OPCIÓN A · CANSADOS
    ----------------------------------------------------- */

    {
      mood: "😴 ACABAMOS TARDE",

      name: "Reykjamörk · Hveragerði",

      priority: 2,

      description:
        "Si después de Reykjadalur estamos cansados o se ha hecho tarde, dormimos directamente en Hveragerði.",

      recommended: false,

      location: {
        name: "Reykjamörk Hveragerði Campsite",

        lat: 64.0000,
        lng: -21.1900,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Reykjamork+Camping+Hveragerdi+Iceland"
      },

      fromPreviousActivity: {
        from: "Reykjadalur",

        km: 4,

        minutes: 10,

        mapsUrl:
          "https://www.google.com/maps/dir/?api=1&origin=Reykjadalur+Hot+Spring+Thermal+River&destination=Reykjamork+Camping+Hveragerdi+Iceland",

        roads: [
          "Calles locales"
        ],

        offlineDirections: [
          "Salir del parking de Reykjadalur.",
          "Bajar hacia Hveragerði.",
          "Seguir la ubicación guardada de Reykjamörk.",
          "Entrar en el camping."
        ]
      },

      tags: [
        "😴 Poco trayecto",
        "♨️ Hveragerði",
        "⚡ Electricidad",
        "🚿 Servicios"
      ],

      notes: [

        {
          type: "plan",

          title: "Cuándo elegirlo",

          text:
            "Si terminamos Reykjadalur tarde, mojados o cansados, no tiene sentido obligarnos a cruzar Hellisheiði esa noche."
        }

      ]
    },


    /* -----------------------------------------------------
       OPCIÓN B · VAMOS BIEN
    ----------------------------------------------------- */

    {
      mood: "🙂 VAMOS BIEN",

      name: "Reykjavík Eco Campsite",

      priority: 1,

      description:
        "Si terminamos Reykjadalur con tiempo y energía, cruzamos Hellisheiði y dormimos ya en Reykjavík.",

      recommended: true,

      location: {
        name: "Reykjavík Eco Campsite",

        lat: 64.1466,
        lng: -21.8750,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Reykjavik+Eco+Campsite"
      },

      fromPreviousActivity: {
        from: "Reykjadalur",

        km: 45,

        minutes: 45,

        mapsUrl:
          "https://www.google.com/maps/dir/?api=1&origin=Reykjadalur+Hot+Spring+Thermal+River&destination=Reykjavik+Eco+Campsite",

        roads: [
          "1"
        ],

        offlineDirections: [
          "Salir de Hveragerði por la carretera 1 hacia Reykjavík.",
          "Cruzar Hellisheiði.",
          "Continuar por la Ring Road hacia el área metropolitana.",
          "Entrar en Reykjavík.",
          "Dirigirse hacia Laugardalur y Reykjavík Eco Campsite."
        ]
      },

      tags: [
        "⭐ MEJOR PARA EL DÍA SIGUIENTE",
        "🏙️ Reykjavík",
        "🚐 ~45 min",
        "🚿 Servicios"
      ],

      notes: [

        {
          type: "plan",

          title: "Ventaja",

          text:
            "Nos deja ya colocados para el día flexible/Reykjanes/Reykjavík y evita tener que hacer este desplazamiento por la mañana."
        }

      ]
    },


    /* -----------------------------------------------------
       OPCIÓN C · COSTA
    ----------------------------------------------------- */

    {
      mood: "🟡 SI CAMBIAMOS EL ORDEN",

      name: "Eyrarbakki Campsite",

      priority: 3,

      description:
        "Alternativa de costa si por algún motivo reorganizamos el día. Con el orden actual tiene menos sentido que Hveragerði o Reykjavík.",

      recommended: false,

      location: {
        name: "Eyrarbakki Campsite",

        lat: 63.8620,
        lng: -21.1480,

        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Eyrarbakki+Campsite+Iceland"
      },

      tags: [
        "🟡 Alternativa",
        "🌊 Costa",
        "⚠️ Menos lógica con ruta actual"
      ],

      notes: [

        {
          type: "plan",

          title: "No es nuestra opción normal",

          text:
            "Con Reykjadalur al final de la tarde, volver hacia Eyrarbakki supondría retroceder. Solo queda guardado por flexibilidad."
        }

      ]
    }

  ]

}


/* =========================================================
   FIN DE tripDays
========================================================= */

];


/* =========================================================
   COMPROBACIONES
========================================================= */

console.log(
  "✅ data.js completo cargado correctamente"
);

console.log(
  "Número de días:",
  tripDays.length
);

console.log(
  "Configuración del viaje:",
  tripConfig
);

console.log(
  "Itinerario:",
  tripDays
);
