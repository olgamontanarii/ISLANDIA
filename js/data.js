/* =========================================================
   DATOS DEL VIAJE · ISLANDIA 2026

   Este archivo es la "base de datos" de nuestra web.
   Aquí guardamos:
   - días
   - actividades
   - trayectos
   - precios
   - reservas
   - parkings
   - información práctica
   - opciones para dormir

   app.js se encargará de convertir estos datos en HTML.
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
      "Primer día tranquilo en Islandia: recogemos la camper, hacemos la compra grande, conocemos Reykjavík y terminamos viendo caer la tarde desde Sky Lagoon.",


    /* -----------------------------------------------------
       ESTADÍSTICAS DEL DÍA

       Algunas son todavía aproximadas.
       Las afinaremos cuando tengamos todos los trayectos.
    ----------------------------------------------------- */

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
         ACTIVIDAD · LLEGADA A ISLANDIA
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

          mapsUrl: "#"

        },


        description:
          "Aterrizamos en Islandia, recogemos las maletas y salimos del aeropuerto sin prisas.",


        tags: [

          "🧳 Recoger maletas",

          "😴 Venimos de vuelo nocturno",

          "🟢 Sin reserva"

        ],


        important: [

          "No planificar nada importante inmediatamente después de aterrizar.",

          "Comprobar que llevamos documentación, móviles y equipaje antes de salir.",

          "La prioridad del primer día es empezar el viaje tranquilos."

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


        /*
          Técnicamente no será nuestro primer trayecto
          conduciendo la camper.

          Utilizamos el mismo tipo "drive" porque
          visualmente nos interesa mostrar el desplazamiento.
        */

        mapsUrl: "#",


        roads: [

          "Shuttle"

        ],


        offlineDirections: [

          "Salir de la terminal después de recoger el equipaje.",

          "Localizar el punto de recogida indicado por Happy Campers.",

          "Utilizar el shuttle de Happy Campers hasta sus instalaciones.",

          "Confirmar previamente los datos de llegada con la empresa."

        ],


        parking: {

          name: "Happy Campers",

          info:
            "Instalaciones de Happy Campers en Stapabraut 21, Reykjanesbær.",

          mapsUrl: "#"

        }

      },


      /* ===================================================
         ACTIVIDAD · HAPPY CAMPERS
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

          mapsUrl: "#"

        },


        description:
          "Recogemos la camper, hacemos el papeleo, recibimos la explicación del vehículo y organizamos el equipaje.",


        tags: [

          "⏱️ ~30–60 min",

          "📍 Stapabraut 21",

          "⚠️ Hora aproximada"

        ],


        important: [

          "Revisar el vehículo antes de salir.",

          "Comprobar calefacción, gas, cocina y agua.",

          "Preguntar cómo funcionan aguas grises, electricidad y calefacción.",

          "Comprobar combustible.",

          "Guardar bien todo el equipaje antes de conducir."

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

        mapsUrl: "#",


        roads: [

          "Calles locales"

        ],


        offlineDirections: [

          "Salir de Happy Campers hacia Reykjanesbær.",

          "Seguir las indicaciones hacia Fitjar.",

          "Localizar el supermercado Bónus de la zona comercial."

        ],


        parking: {

          name: "Bónus Fitjar Parking",

          info:
            "Aparcamiento del supermercado. Compra grande antes de comenzar el viaje.",

          price: {
            amount: 0,
            currency: "ISK",
            approxEuro: 0
          },

          payment:
            "Gratis para clientes",

          mapsUrl: "#"

        }

      },


      /* ===================================================
         ACTIVIDAD · COMPRA GRANDE
      =================================================== */

      {
        type: "activity",

        time: "~10:30",

        icon: "🛒",

        category: "SUPERMERCADO",

        title: "Compra grande en Bónus",


        location: {

          name: "Bónus Fitjar",

          lat: 63.9980,

          lng: -22.5560,

          mapsUrl: "#"

        },


        description:
          "Hacemos la compra principal del viaje nada más recoger la camper para no tener que preocuparnos después.",


        /*
          Presupuesto estimado para la compra.
        */
        budget: {

          amount: 150,

          currency: "EUR"

        },


        tags: [

          "💰 Presupuesto ~150 €",

          "🟢 Sin reserva",

          "🛒 Compra grande"

        ],


        shoppingList: [

          "30 huevos",

          "2 kg de queso",

          "2 kg de jamón cocido",

          "3 kg de pan",

          "2 kg de fruta",

          "2 kg de yogures / skyr",

          "Leche",

          "Mantequilla",

          "Cebollas",

          "Zanahorias",

          "Bacon",

          "Salchichas"

        ],


        important: [

          "Priorizar marcas económicas.",

          "No comprar agua embotellada: utilizaremos agua del grifo.",

          "Si falta algo importante, Krónan está como alternativa cercana.",

          "Colocar la compra correctamente en la camper antes de salir."

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

        mapsUrl: "#",


        roads: [

          "41"

        ],


        offlineDirections: [

          "Salir de Reykjanesbær por la carretera 41.",

          "Continuar siempre en dirección Reykjavík.",

          "Seguir la 41 hasta entrar en el área metropolitana.",

          "Dirigirse hacia la zona donde decidamos aparcar para comenzar el paseo."

        ],


        /*
          Aquí todavía NO fijamos el parking.

          Cuando perfeccionemos Reykjavík decidiremos
          cuál nos conviene más para dejar la camper
          durante todo el paseo.
        */

        parking: {

          name: "Parking Reykjavík · POR DECIDIR",

          info:
            "Buscaremos un parking cómodo para dejar la camper y hacer todo el centro andando.",

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

          mapsUrl: "#"

        },


        description:
          "Visitamos la iglesia más reconocible de Reykjavík y, si no hay demasiada cola, subimos a la torre para ver la ciudad desde arriba.",


        tags: [

          "⏱️ 30–45 min",

          "🟢 Iglesia gratis",

          "📸 Panorámica"

        ],


        important: [

          "La entrada a la iglesia es gratuita.",

          "La subida a la torre es opcional y de pago.",

          "No necesitamos mover la camper para las siguientes paradas del centro."

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

          mapsUrl: "#"

        },


        description:
          "Bajamos desde Hallgrímskirkja por la conocida calle del arcoíris hacia el centro.",


        tags: [

          "⏱️ 15–30 min",

          "💰 Gratis",

          "📸 Fotos"

        ]

      },


      /* ===================================================
         ACTIVIDAD · LAUGAVEGUR Y CENTRO
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

          mapsUrl: "#"

        },


        description:
          "Paseamos tranquilamente por el centro, tiendas, cafeterías y calles de Reykjavík sin convertirlo en una visita con horarios.",


        tags: [

          "⏱️ Flexible",

          "💰 Gratis",

          "☕ Parada para comer si apetece"

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

          mapsUrl: "#"

        },


        description:
          "Entramos al edificio de conciertos para ver su famosa fachada geométrica de cristal y el interior.",


        tags: [

          "⏱️ 20–30 min",

          "💰 Gratis",

          "📸 Arquitectura"

        ],


        important: [

          "No hace falta comprar entrada para entrar al edificio.",

          "Es una visita corta; no necesitamos reservar nada."

        ]

      },


      /* ===================================================
         ACTIVIDAD OPCIONAL · SUN VOYAGER
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

          mapsUrl: "#"

        },


        description:
          "Si tenemos tiempo y ganas, nos acercamos a la escultura frente al mar antes de ir a Sky Lagoon.",


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

        mapsUrl: "#",


        roads: [

          "Carretera urbana"

        ],


        offlineDirections: [

          "Salir del centro de Reykjavík hacia Kópavogur.",

          "Seguir las indicaciones hacia Kársnes.",

          "Continuar hasta Sky Lagoon.",

          "Aparcar en el parking del recinto."

        ],


        parking: {

          name: "Sky Lagoon Parking",

          info:
            "Parking del propio recinto de Sky Lagoon.",

          /*
            Dejamos el precio pendiente hasta
            verificar específicamente las condiciones.
          */

          mapsUrl: "#"

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

          mapsUrl: "#"

        },


        description:
          "Nuestra experiencia termal del viaje: baño largo frente al océano, ritual y luz del atardecer.",


        price: {

          /*
            Precio de referencia que tenemos para
            el pase Saman.

            Posteriormente comprobaremos el precio
            exacto de nuestra fecha antes de reservar.
          */

          from: 14990,

          currency: "ISK",

          perPerson: true

        },


        booking: {

          status: "recommended",

          advice:
            "Esta sí la reservaría con antelación para asegurar una franja alrededor de las 17:30–18:00.",

          url: "#"

        },


        tags: [

          "🎟️ Reservar",

          "♨️ Ritual",

          "🌅 Atardecer",

          "⏱️ Sin prisas"

        ],


        important: [

          "Llevar bañador.",

          "El objetivo es entrar alrededor de las 17:30–18:00.",

          "No queremos meter otra laguna termal de pago durante el viaje.",

          "Blue Lagoon y Secret Lagoon quedan fuera del itinerario."

        ]

      }

    ],


    /* =====================================================
       OPCIONES PARA DORMIR

       Estas NO son tres paradas.

       Elegiremos solo UNA al salir de Sky Lagoon
       según el cansancio.
    ===================================================== */

    overnightOptions: [


      /* ---------------------------------------------------
         OPCIÓN A · AGOTADOS
      --------------------------------------------------- */

      {
        mood: "😵 AGOTADOS",

        name: "Reykjavík Eco Campsite",

        description:
          "Si estamos destruidos, dormimos prácticamente en Reykjavík y dejamos Þingvellir para la mañana siguiente.",

        recommended: false,


        location: {

          name: "Reykjavík Eco Campsite",

          lat: 64.1466,

          lng: -21.8750,

          mapsUrl: "#"

        },


        tags: [

          "😴 Mínimo esfuerzo",

          "🚐 Poco trayecto",

          "📍 Reykjavík"

        ]

      },


      /* ---------------------------------------------------
         OPCIÓN B · NORMALES
      --------------------------------------------------- */

      {
        mood: "🙂 NORMALES",

        name: "Mosskógar Camping",

        description:
          "Nuestra opción preferida si estamos normales: avanzamos hacia Þingvellir pero sin obligarnos a conducir hasta el parque.",

        recommended: true,


        location: {

          name: "Mosskógar Camping",

          lat: 64.1870,

          lng: -21.6200,

          mapsUrl: "#"

        },


        tags: [

          "⭐ RECOMENDADO",

          "🚐 Avanzamos ruta",

          "🌙 Más rural"

        ]

      },


      /* ---------------------------------------------------
         OPCIÓN C · CON ENERGÍA
      --------------------------------------------------- */

      {
        mood: "😎 CON ENERGÍA",

        name: "Þingvellir · Nyrðri Leirar",

        description:
          "Si salimos de Sky Lagoon con energía, llegamos hasta Þingvellir y al día siguiente despertamos directamente en la primera visita.",

        recommended: false,


        location: {

          name: "Nyrðri Leirar Camping",

          lat: 64.2850,

          lng: -21.0890,

          mapsUrl: "#"

        },


        /*
          Precio de referencia que tenemos actualmente.

          Lo verificaremos otra vez antes del viaje.
        */
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
      "Þingvellir, Geysir y Gullfoss. Empezamos donde hayamos dormido y continuamos después hacia el sur.",


    /*
      No ponemos todavía estadísticas porque dependerán
      del camping elegido la noche anterior.
    */

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
         ACTIVIDAD · ÞINGVELLIR
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
          "Visitamos Þingvellir con calma pero sin alargarlo demasiado. La idea es dedicar aproximadamente una hora.",


        tags: [

          "⏱️ ~1 h",

          "🥾 Fácil",

          "📸 Muy top"

        ],


        parking: {

          name: "P1 Hakið",

          info:
            "Parking junto al Visitor Center y la parte alta de Almannagjá.",

          /*
            Precio pendiente de incorporar definitivamente
            cuando hagamos la revisión real del Día 2.
          */

          mapsUrl: "#"

        },


        important: [

          "Llevar cortavientos.",

          "Calzado impermeable recomendable.",

          "No queremos dedicar 1 h 30 si con 1 h podemos hacer la visita que nos interesa."

        ]

      },


      /* ===================================================
         TRAYECTO · ÞINGVELLIR → GEYSIR
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

          "Salir de Þingvellir por la carretera 36.",

          "Continuar por la 365.",

          "Pasar hacia Laugarvatn.",

          "Tomar la carretera 37.",

          "Continuar por la 35 hasta Geysir."

        ],


        parking: {

          name: "Geysir Center Parking",

          info:
            "Parking junto al área de visitantes y frente a la zona geotérmica.",

          mapsUrl: "#"

        }

      },


      /* ===================================================
         ACTIVIDAD · GEYSIR
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
          "Parada en la zona geotérmica para ver Strokkur y recorrer brevemente el área.",


        tags: [

          "⏱️ ~45 min",

          "🟢 Sin reserva"

        ]

      },


      /* ===================================================
         TRAYECTO · GEYSIR → GULLFOSS
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

          "Continuar aproximadamente 10 km.",

          "Seguir las indicaciones hacia Gullfoss."

        ],


        parking: {

          name: "Gullfoss Upper Parking",

          info:
            "Parking superior junto al Visitor Center y acceso a los miradores.",

          mapsUrl: "#"

        }

      },


      /* ===================================================
         ACTIVIDAD · GULLFOSS
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
          "Visitamos una de las grandes cascadas del Círculo Dorado antes de continuar la ruta del viaje.",


        tags: [

          "⏱️ ~1 h",

          "💰 Gratis",

          "📸 Top"

        ],


        important: [

          "Puede hacer bastante viento.",

          "El suelo puede estar mojado.",

          "Llevar impermeable a mano."

        ]

      }

    ]

  },


  /* =======================================================
     DÍA 3 · VIERNES 11
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
     DÍA 4 · SÁBADO 12
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
     DÍA 5 · DOMINGO 13
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
     DÍA 6 · LUNES 14
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
