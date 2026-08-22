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

      {
        mood: "😵 AGOTADOS",

        name: "Reykjavík Eco Campsite",

        priority: 3,

        description:
          "Dormimos cerca si después del vuelo
