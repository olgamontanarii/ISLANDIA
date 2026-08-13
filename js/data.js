/* =========================================================
   DATOS DEL VIAJE · ISLANDIA 2026
   Este archivo contiene toda la información del viaje.

   Aquí guardamos:
   - días
   - actividades
   - trayectos
   - precios
   - reservas
   - parkings
   - supermercados
   - opciones para dormir
   - presupuesto del día

   app.js se encargará de representar estos datos.
========================================================= */


const tripDays = [

  /* =======================================================
     DÍA 1 · MIÉRCOLES 9
     REYKJAVÍK + SKY LAGOON
  ======================================================= */

  {
    id: 1,

    navDate: "MIÉ 9",

    date: "MIÉRCOLES 9 DE SEPTIEMBRE",

    title: "Reykjavík + Sky Lagoon",

    intro:
      "Primer día tranquilo en Islandia: recogemos la camper, hacemos la compra grande, conocemos Reykjavík y terminamos la tarde en Sky Lagoon.",


    /* =====================================================
       PRESUPUESTO BASE DEL DÍA · 5 PERSONAS

       De momento NO incluye:
       - camping
       - gasolina
       - torre de Hallgrímskirkja
       - comidas fuera

       porque son gastos variables u opcionales.
    ===================================================== */

    budgetSummary: {

      people: 5,

      items: [

        {
          icon: "♨️",
          name: "Sky Lagoon",
          value: "74.950 ISK"
        },

        {
          icon: "🛒",
          name: "Compra Bónus",
          value: "~150 €"
        },

        {
          icon: "🅿️",
          name: "Parking Sky Lagoon",
          value: "GRATIS"
        }

      ],

      total:
        "74.950 ISK + ~150 €"

    },


    /* =====================================================
       ESTADÍSTICAS DEL DÍA
    ===================================================== */

    stats: [

      {
        value: "TRANQUI",
        label: "RITMO DEL DÍA"
      },

      {
        value: "~150 €",
        label: "COMPRA"
      },

      {
        value: "1",
        label: "RESERVA IMPORTANTE"
      },

      {
        value: "3",
        label: "OPCIONES PARA DORMIR"
      }

    ],


    /* =====================================================
       ACTIVIDADES + TRAYECTOS
    ===================================================== */

    activities: [


      /* ===================================================
         ACTIVIDAD · LLEGADA
      =================================================== */

      {
        type: "activity",

        time: "08:20",

        icon: "✈️",

        category: "LLEGADA",

        title: "Llegada a Keflavík",


        location: {

          name: "Keflavík International Airport",

          lat: 63.9850,

          lng: -22.6056,

          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Keflavik+International+Airport"

        },


        description:
          "Aterrizamos en Islandia después del vuelo nocturno, recogemos las maletas y empezamos el viaje con tranquilidad.",


        tags: [

          "🧳 Recoger maletas",

          "😴 Vuelo nocturno",

          "🟢 Sin reserva"

        ],


        important: [

          "No planificar ninguna actividad con horario inmediatamente después de aterrizar.",

          "Comprobar documentación, móviles y equipaje antes de abandonar el aeropuerto."

        ]

      },


      /* ===================================================
         TRAYECTO · AEROPUERTO → HAPPY CAMPERS
      =================================================== */

      {
        type: "drive",

        icon: "🚌",

        from: "Aeropuerto de Keflavík",

        to: "Happy Campers",

        km: 5,

        minutes: 10,

        mapsUrl:
          "https://www.google.com/maps/dir/?api=1&origin=Keflavik+International+Airport&destination=Happy+Campers+Iceland",


        roads: [

          "Shuttle Happy Campers"

        ],


        offlineDirections: [

          "Salir de la terminal después de recoger el equipaje.",

          "Localizar el punto de recogida indicado por Happy Campers.",

          "Utilizar el shuttle gratuito hasta las instalaciones de Happy Campers.",

          "Confirmar previamente los datos de llegada con Happy Campers."

        ],


        parking: {

          name: "Happy Campers",

          info:
            "Instalaciones de Happy Campers en Stapabraut 21, Reykjanesbær.",

          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Happy+Campers+Stapabraut+21+Iceland"

        }

      },


      /* ===================================================
         ACTIVIDAD · RECOGIDA CAMPER
      =================================================== */

      {
        type: "activity",

        time: "~09:30",

        icon: "🚐",

        category: "CAMPER",

        title: "Recogida de la camper",


        location: {

          name: "Happy Campers",

          lat: 63.9990,

          lng: -22.5570,

          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Happy+Campers+Iceland"

        },


        description:
          "Hacemos el papeleo, recibimos la explicación de la camper, revisamos el vehículo y organizamos todo el equipaje.",


        tags: [

          "⏱️ ~30–60 min",

          "📍 Stapabraut 21",

          "⚠️ Hora aproximada"

        ],


        important: [

          "Revisar posibles daños antes de salir.",

          "Comprobar calefacción, gas, cocina y agua.",

          "Preguntar cómo funcionan aguas grises, electricidad y calefacción.",

          "Comprobar combustible.",

          "Guardar correctamente todo el equipaje antes de conducir."

        ]

      },


      /* ===================================================
         TRAYECTO · HAPPY CAMPERS → BÓNUS FITJAR
      =================================================== */

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

          "Localizar el supermercado Bónus."

        ],


        parking: {

          name: "Bónus Fitjar Parking",

          info:
            "Parking del supermercado para hacer la compra grande.",

          price: {

            amount: 0,

            currency: "ISK",

            approxEuro: 0

          },

          payment:
            "Gratis",

          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Bonus+Fitjar+Iceland"

        }

      },


      /* ===================================================
         ACTIVIDAD · BÓNUS
      =================================================== */

      {
        type: "activity",

        time: "~10:30",

        icon: "🛒",

        category: "SUPERMERCADO",

        title: "Compra grande en Bónus Fitjar",


        location: {

          name: "Bónus Fitjar",

          lat: 63.9980,

          lng: -22.5560,

          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Bonus+Fitjar+Iceland"

        },


        description:
          "Hacemos la compra principal nada más recoger la camper para olvidarnos del supermercado durante los primeros días.",


        budget: {

          amount: 150,

          currency: "EUR"

        },


        tags: [

          "💰 ~150 €",

          "🛒 Compra grande",

          "🟢 Sin reserva"

        ],


        shoppingList: [

          "30 huevos",

          "2 kg de queso",

          "2 kg de jamón cocido",

          "3 kg de pan",

          "2 kg de fruta",

          "2 kg de yogur / skyr",

          "Leche",

          "Mantequilla",

          "Cebollas",

          "Zanahorias",

          "Bacon",

          "Salchichas"

        ],


        important: [

          "Priorizar marcas económicas.",

          "No comprar agua embotellada.",

          "El agua del grifo será suficiente durante el viaje.",

          "Krónan queda como alternativa si falta algún producto.",

          "Guardar toda la compra antes de arrancar."

        ]

      },


      /* ===================================================
         TRAYECTO · BÓNUS → REYKJAVÍK
      =================================================== */

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

          "Continuar siempre en dirección Reykjavík.",

          "Seguir la carretera 41 hasta entrar en el área metropolitana.",

          "Dirigirse hacia el centro de Reykjavík."

        ],


        parking: {

          name: "Parking Reykjavík · POR DECIDIR",

          info:
            "Elegiremos un parking cómodo para dejar la camper y realizar todo el paseo por Reykjavík andando.",

          mapsUrl: "#"

        }

      },


      /* ===================================================
         ACTIVIDAD · HALLGRÍMSKIRKJA
      =================================================== */

      {
        type: "activity",

        time: "MEDIODÍA",

        icon: "⛪",

        category: "REYKJAVÍK",

        title: "Hallgrímskirkja",


        location: {

          name: "Hallgrímskirkja",

          lat: 64.1417,

          lng: -21.9266,

          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Hallgrimskirkja+Reykjavik"

        },


        description:
          "Visitamos la iglesia más famosa de Reykjavík y, si nos apetece y no hay demasiada cola, subimos a la torre.",


        tags: [

          "⏱️ 30–45 min",

          "🟢 Iglesia gratis",

          "📸 Panorámica"

        ],


        important: [

          "La entrada a la iglesia es gratuita.",

          "La torre es opcional y de pago.",

          "Desde aquí seguimos andando por el centro."

        ]

      },


      /* ===================================================
         ACTIVIDAD · RAINBOW STREET
      =================================================== */

      {
        type: "activity",

        time: "FLEXIBLE",

        icon: "🌈",

        category: "PASEO",

        title: "Rainbow Street",


        location: {

          name: "Skólavörðustígur",

          lat: 64.1444,

          lng: -21.9284,

          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Rainbow+Street+Reykjavik"

        },


        description:
          "Bajamos andando desde Hallgrímskirkja por la calle del arcoíris hacia el centro.",


        tags: [

          "⏱️ 15–30 min",

          "💰 Gratis",

          "📸 Fotos"

        ]

      },


      /* ===================================================
         ACTIVIDAD · LAUGAVEGUR
      =================================================== */

      {
        type: "activity",

        time: "FLEXIBLE",

        icon: "🏙️",

        category: "PASEO",

        title: "Laugavegur + centro",


        location: {

          name: "Laugavegur",

          lat: 64.1454,

          lng: -21.9290,

          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Laugavegur+Reykjavik"

        },


        description:
          "Paseamos por el centro, tiendas, cafeterías y calles de Reykjavík sin estar pendientes del reloj.",


        tags: [

          "⏱️ Flexible",

          "💰 Gratis",

          "☕ Comer si apetece"

        ]

      },


      /* ===================================================
         ACTIVIDAD · HARPA
      =================================================== */

      {
        type: "activity",

        time: "FLEXIBLE",

        icon: "🎼",

        category: "ARQUITECTURA",

        title: "Harpa",


        location: {

          name: "Harpa Concert Hall",

          lat: 64.1505,

          lng: -21.9328,

          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Harpa+Concert+Hall+Reykjavik"

        },


        description:
          "Entramos al edificio para ver la fachada geométrica de cristal y recorrer brevemente el interior.",


        tags: [

          "⏱️ 20–30 min",

          "💰 Gratis",

          "📸 Arquitectura"

        ],


        important: [

          "No necesitamos entrada para visitar el interior.",

          "No requiere reserva."

        ]

      },


      /* ===================================================
         ACTIVIDAD · SUN VOYAGER
      =================================================== */

      {
        type: "activity",

        time: "SI APETECE",

        icon: "☀️",

        category: "OPCIONAL",

        title: "Sun Voyager",

        optional: true,


        location: {

          name: "Sun Voyager",

          lat: 64.1476,

          lng: -21.9222,

          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Sun+Voyager+Reykjavik"

        },


        description:
          "Parada opcional frente al mar antes de dirigirnos a Sky Lagoon.",


        tags: [

          "⭐ Opcional",

          "⏱️ ~10 min",

          "💰 Gratis"

        ]

      },


      /* ===================================================
         TRAYECTO · REYKJAVÍK → SKY LAGOON
      =================================================== */

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

          "Carretera urbana"

        ],


        offlineDirections: [

          "Salir del centro de Reykjavík en dirección Kópavogur.",

          "Seguir hacia la península de Kársnes.",

          "Continuar siguiendo indicaciones hacia Sky Lagoon.",

          "Entrar directamente al parking del recinto."

        ],


        parking: {

          name: "Sky Lagoon Parking",

          info:
            "Parking del propio recinto de Sky Lagoon, sin límite de tiempo.",


          price: {

            amount: 0,

            currency: "ISK",

            approxEuro: 0

          },


          payment:
            "Gratuito",


          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Sky+Lagoon+Parking+Iceland"

        }

      },


      /* ===================================================
         ACTIVIDAD · SKY LAGOON
      =================================================== */

      {
        type: "activity",

        time: "17:30–18:00",

        icon: "♨️",

        category: "EXPERIENCIA TERMAL",

        title: "Sky Lagoon",

        featured: true,


        location: {

          name: "Sky Lagoon",

          lat: 64.1176,

          lng: -21.9521,

          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Sky+Lagoon+Iceland"

        },


        description:
          "Nuestra experiencia termal de pago del viaje: baño largo frente al océano, ritual Skjól y atardecer.",


        /* -----------------------------------------------
           PRECIO SKY LAGOON
        ----------------------------------------------- */

        price: {

          amount: 14990,

          currency: "ISK",

          perPerson: true,

          people: 5,

          total: 74950

        },


        /* -----------------------------------------------
           RESERVA
        ----------------------------------------------- */

        booking: {

          status: "recommended",

          advice:
            "Reservar con antelación para asegurar una franja alrededor de las 17:30–18:00.",

          url:
            "https://www.skylagoon.com/booking"

        },


        /* Web oficial */

        websiteUrl:
          "https://www.skylagoon.com/",


        /* -----------------------------------------------
           PARKING
        ----------------------------------------------- */

        parking: {

          name: "Sky Lagoon Parking",

          info:
            "Parking gratuito del propio recinto.",


          price: {

            amount: 0,

            currency: "ISK",

            approxEuro: 0

          },


          payment:
            "Gratuito",


          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Sky+Lagoon+Parking+Iceland"

        },


        tags: [

          "💰 Desde 14.990 ISK/persona",

          "👨‍👩‍👧‍👦 74.950 ISK / 5",

          "🎟️ Reservar",

          "♨️ Ritual Skjól",

          "🌅 Atardecer",

          "🅿️ Parking gratis"

        ],


        important: [

          "Llevar bañador.",

          "El pase Saman incluye el ritual Skjól.",

          "Objetivo de entrada: 17:30–18:00.",

          "Queremos estar dentro durante la caída de la tarde.",

          "Blue Lagoon y Secret Lagoon quedan fuera del viaje."

        ]

      }

    ],


    /* =====================================================
       OPCIONES PARA DORMIR

       Al salir de Sky Lagoon elegimos SOLO UNA.
    ===================================================== */

    overnightOptions: [


      /* ---------------------------------------------------
         OPCIÓN A
      --------------------------------------------------- */

      {
        mood: "😵 AGOTADOS",

        name: "Reykjavík Eco Campsite",

        description:
          "Si estamos destrozados, dormimos cerca y dejamos todo el desplazamiento hacia Þingvellir para el día siguiente.",

        recommended: false,


        location: {

          name: "Reykjavík Eco Campsite",

          lat: 64.1466,

          lng: -21.8750,

          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Reykjavik+Eco+Campsite"

        },


        tags: [

          "😴 Menos conducción",

          "📍 Reykjavík",

          "🚐 Cómodo"

        ]

      },


      /* ---------------------------------------------------
         OPCIÓN B
      --------------------------------------------------- */

      {
        mood: "🙂 NORMALES",

        name: "Mosskógar Camping",

        description:
          "Nuestra opción favorita: avanzamos hacia Þingvellir pero sin obligarnos a llegar hasta el Parque Nacional.",

        recommended: true,


        location: {

          name: "Mosskógar Camping",

          lat: 64.1870,

          lng: -21.6200,

          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Mosskogar+Camping+Iceland"

        },


        tags: [

          "⭐ RECOMENDADO",

          "🚐 Avanzamos ruta",

          "🌙 Zona rural"

        ]

      },


      /* ---------------------------------------------------
         OPCIÓN C
      --------------------------------------------------- */

      {
        mood: "😎 CON ENERGÍA",

        name: "Þingvellir · Nyrðri Leirar",

        description:
          "Si todavía tenemos energía, llegamos hasta Þingvellir y al día siguiente despertamos directamente en la primera visita.",

        recommended: false,


        location: {

          name: "Nyrðri Leirar Camping",

          lat: 64.2850,

          lng: -21.0890,

          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Nyrdri+Leirar+Camping+Thingvellir"

        },


        price: {

          adult: 1800,

          camper: 400,

          electricity: 1100,

          currency: "ISK"

        },


        tags: [

          "🚐 Más conducción",

          "⭐ Mejor posición Día 2",

          "⚡ Electricidad opcional"

        ]

      }

    ]

  },


  /* =======================================================
     DÍA 2 · JUEVES 10
     CÍRCULO DORADO
  ======================================================= */

  {
    id: 2,

    navDate: "JUE 10",

    date: "JUEVES 10 DE SEPTIEMBRE",

    title: "Círculo Dorado",

    intro:
      "Þingvellir, Geysir y Gullfoss. La hora y el punto de salida dependerán del camping elegido la noche anterior.",


    stats: [

      {
        value: "FLEXIBLE",
        label: "SALIDA"
      },

      {
        value: "3",
        label: "PARADAS PRINCIPALES"
      },

      {
        value: "SIN PRISA",
        label: "RITMO"
      }

    ],


    activities: [

      /* ===================================================
         ÞINGVELLIR
      =================================================== */

      {
        type: "activity",

        time: "MAÑANA",

        icon: "🌋",

        category: "PARQUE NACIONAL",

        title: "Þingvellir",


        location: {

          name: "Þingvellir",

          lat: 64.2559,

          lng: -21.1300,

          mapsUrl: "#"

        },


        description:
          "Visitamos Þingvellir durante aproximadamente una hora antes de continuar por el Círculo Dorado.",


        tags: [

          "⏱️ ~1 h",

          "🥾 Fácil",

          "📸 Top"

        ],


        parking: {

          name: "P1 Hakið",

          info:
            "Parking junto al Visitor Center y la parte alta de Almannagjá.",

          mapsUrl: "#"

        }

      },


      /* ===================================================
         ÞINGVELLIR → GEYSIR
      =================================================== */

      {
        type: "drive",

        icon: "🚐",

        from: "Þingvellir",

        to: "Geysir",

        km: 60,

        minutes: 50,

        mapsUrl: "#",


        roads: [

          "36",

          "365",

          "37",

          "35"

        ],


        offlineDirections: [

          "Salir por la carretera 36.",

          "Continuar por la 365.",

          "Seguir hacia Laugarvatn.",

          "Tomar la 37.",

          "Continuar por la 35 hasta Geysir."

        ],


        parking: {

          name: "Geysir Center Parking",

          info:
            "Parking junto al centro de visitantes.",

          mapsUrl: "#"

        }

      },


      /* ===================================================
         GEYSIR
      =================================================== */

      {
        type: "activity",

        time: "FLEXIBLE",

        icon: "💦",

        category: "GEOTERMIA",

        title: "Geysir",


        location: {

          name: "Geysir",

          lat: 64.3104,

          lng: -20.3024,

          mapsUrl: "#"

        },


        description:
          "Vemos Strokkur y recorremos brevemente la zona geotérmica.",


        tags: [

          "⏱️ ~45 min",

          "🟢 Sin reserva"

        ]

      },


      /* ===================================================
         GEYSIR → GULLFOSS
      =================================================== */

      {
        type: "drive",

        icon: "🚐",

        from: "Geysir",

        to: "Gullfoss",

        km: 10,

        minutes: 10,

        mapsUrl: "#",


        roads: [

          "35"

        ],


        offlineDirections: [

          "Salir de Geysir por la carretera 35.",

          "Continuar unos 10 km.",

          "Seguir indicaciones hacia Gullfoss."

        ],


        parking: {

          name: "Gullfoss Upper Parking",

          info:
            "Parking superior junto al centro de visitantes.",

          mapsUrl: "#"

        }

      },


      /* ===================================================
         GULLFOSS
      =================================================== */

      {
        type: "activity",

        time: "FLEXIBLE",

        icon: "🌊",

        category: "CASCADA",

        title: "Gullfoss",


        location: {

          name: "Gullfoss",

          lat: 64.3271,

          lng: -20.1199,

          mapsUrl: "#"

        },


        description:
          "Visitamos una de las cascadas más famosas de Islandia.",


        tags: [

          "⏱️ ~1 h",

          "💰 Gratis",

          "📸 Top"

        ],


        important: [

          "Puede haber viento.",

          "El suelo puede estar mojado.",

          "Llevar impermeable a mano."

        ]

      }

    ]

  },


  /* =======================================================
     DÍA 3
  ======================================================= */

  {
    id: 3,

    navDate: "VIE 11",

    date: "VIERNES 11 DE SEPTIEMBRE",

    title: "Por definir",

    intro:
      "Pendiente de cerrar definitivamente.",

    stats: [],

    activities: []

  },


  /* =======================================================
     DÍA 4
  ======================================================= */

  {
    id: 4,

    navDate: "SÁB 12",

    date: "SÁBADO 12 DE SEPTIEMBRE",

    title: "Por definir",

    intro:
      "Pendiente de cerrar definitivamente.",

    stats: [],

    activities: []

  },


  /* =======================================================
     DÍA 5
  ======================================================= */

  {
    id: 5,

    navDate: "DOM 13",

    date: "DOMINGO 13 DE SEPTIEMBRE",

    title: "Por definir",

    intro:
      "Pendiente de cerrar definitivamente.",

    stats: [],

    activities: []

  },


  /* =======================================================
     DÍA 6
  ======================================================= */

  {
    id: 6,

    navDate: "LUN 14",

    date: "LUNES 14 DE SEPTIEMBRE",

    title: "Último día",

    intro:
      "Pendiente de cerrar definitivamente.",

    stats: [],

    activities: []

  }

];


/* =========================================================
   COMPROBACIÓN
========================================================= */

console.log("✅ data.js cargado correctamente");

console.log("Datos del viaje:", tripDays);
