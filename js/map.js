/* =========================================================
   ISLANDIA 2026 · MAP.JS

   MAPA GENERAL DEL VIAJE

   Utiliza:
   - tripDays     → data.js
   - campsites    → places.js
   - supermarkets → places.js

   FILTROS:
   - TODO
   - DÍA 1
   - DÍA 2
   - DÍA 3
   - DÍA 4
   - DÍA 5
   - DÍA 6
   - CAMPINGS
   - SUPERMERCADOS
========================================================= */

console.log("✅ map.js cargado correctamente");


/* =========================================================
   COMPROBAR LEAFLET
========================================================= */

if (typeof L === "undefined") {

  console.error(
    "❌ Leaflet no está cargado. Revisa index.html."
  );

}


/* =========================================================
   CREAR MAPA
========================================================= */

const map =
  L.map("map").setView(
    [64.25, -19.5],
    7
  );


/* =========================================================
   CAPA BASE
========================================================= */

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,

    attribution:
      "&copy; OpenStreetMap contributors"
  }
).addTo(map);


/* =========================================================
   CAPAS

   Las separamos para poder borrar fácilmente
   lo que haya en pantalla al cambiar de filtro.
========================================================= */

const routeLayer =
  L.layerGroup().addTo(map);

const markerLayer =
  L.layerGroup().addTo(map);

const campsiteLayer =
  L.layerGroup().addTo(map);

const supermarketLayer =
  L.layerGroup().addTo(map);


/* =========================================================
   ICONOS
========================================================= */

function createMapIcon(
  emoji,
  className = ""
) {

  return L.divIcon({

    className:
      `custom-map-marker ${className}`,

    html: `
      <div class="map-marker-inner">
        ${emoji}
      </div>
    `,

    iconSize: [38, 38],

    iconAnchor: [19, 38],

    popupAnchor: [0, -38]

  });

}


/* ---------------------------------------------------------
   ICONOS POR TIPO
--------------------------------------------------------- */

const activityIcon =
  createMapIcon(
    "📍",
    "activity-marker"
  );


const campsiteIcon =
  createMapIcon(
    "⛺",
    "camping-marker"
  );


const supermarketIcon =
  createMapIcon(
    "🛒",
    "supermarket-marker"
  );


/* =========================================================
   ICONO SEGÚN ACTIVIDAD
========================================================= */

function getActivityMapIcon(activity) {

  if (
    !activity ||
    !activity.icon
  ) {

    return activityIcon;

  }


  return createMapIcon(
    activity.icon,
    "activity-marker"
  );

}


/* =========================================================
   LIMPIAR MAPA
========================================================= */

function clearMapLayers() {

  routeLayer.clearLayers();

  markerLayer.clearLayers();

  campsiteLayer.clearLayers();

  supermarketLayer.clearLayers();

}


/* =========================================================
   UTILIDADES
========================================================= */

function escapeMapHTML(value) {

  if (
    value === undefined ||
    value === null
  ) {

    return "";

  }


  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* =========================================================
   ENLACE MAPS PARA POPUPS
========================================================= */

function createPopupMapsLink(
  url,
  label = "📍 Abrir en Maps"
) {

  if (
    !url ||
    url === "#"
  ) {

    return "";

  }


  return `
    <a
      href="${url}"
      target="_blank"
      rel="noopener noreferrer"
      class="map-popup-link"
    >
      ${label}
    </a>
  `;

}


/* =========================================================
   BADGE DE PRIORIDAD
========================================================= */

function getMapPriorityLabel(priority) {

  switch (priority) {

    case "fixed":

      return `
        <span class="map-popup-badge fixed">
          ✓ FIJO
        </span>
      `;


    case "optional":

      return `
        <span class="map-popup-badge optional">
          🟡 OPCIONAL
        </span>
      `;


    case "decision":

      return `
        <span class="map-popup-badge decision">
          ❓ POR DECIDIR
        </span>
      `;


    default:

      return "";

  }

}


/* =========================================================
   POPUP ACTIVIDAD
========================================================= */

function createActivityPopup(
  activity,
  day
) {

  const priority =
    getMapPriorityLabel(
      activity.priority
    );


  const description =
    activity.description
      ? `
        <p class="map-popup-description">
          ${escapeMapHTML(activity.description)}
        </p>
      `
      : "";


  const time =
    activity.time
      ? `
        <span class="map-popup-meta">
          🕐 ${escapeMapHTML(activity.time)}
        </span>
      `
      : "";


  const duration =
    activity.duration
      ? `
        <span class="map-popup-meta">
          ⏱️ ${escapeMapHTML(activity.duration)}
        </span>
      `
      : "";


  return `

    <div class="map-popup">

      <div class="map-popup-day">
        DÍA ${day.id}
      </div>


      <div class="map-popup-title-row">

        <span class="map-popup-icon">
          ${activity.icon || "📍"}
        </span>

        <div>

          <small>
            ${escapeMapHTML(
              activity.category || ""
            )}
          </small>

          <strong>
            ${escapeMapHTML(
              activity.title || ""
            )}
          </strong>

        </div>

      </div>


      ${priority}


      <div class="map-popup-meta-row">
        ${time}
        ${duration}
      </div>


      ${description}


      ${
        createPopupMapsLink(
          activity.location?.mapsUrl
        )
      }

    </div>

  `;

}


/* =========================================================
   AÑADIR MARCADOR DE ACTIVIDAD
========================================================= */

function addActivityMarker(
  activity,
  day,
  bounds
) {

  if (
    !activity.location ||
    activity.location.lat === undefined ||
    activity.location.lng === undefined
  ) {

    return;

  }


  const lat =
    Number(activity.location.lat);

  const lng =
    Number(activity.location.lng);


  if (
    Number.isNaN(lat) ||
    Number.isNaN(lng)
  ) {

    return;

  }


  const marker =
    L.marker(
      [lat, lng],
      {
        icon:
          getActivityMapIcon(activity)
      }
    );


  marker.bindPopup(
    createActivityPopup(
      activity,
      day
    )
  );


  marker.addTo(
    markerLayer
  );


  bounds.push(
    [lat, lng]
  );

}


/* =========================================================
   EXTRAER COORDENADAS DE UN DÍA
========================================================= */

function getDayCoordinates(day) {

  const coordinates = [];


  (day.activities || [])
    .forEach(item => {

      if (
        item.type !== "activity"
      ) {

        return;

      }


      if (
        !item.location ||
        item.location.lat === undefined ||
        item.location.lng === undefined
      ) {

        return;

      }


      const lat =
        Number(item.location.lat);

      const lng =
        Number(item.location.lng);


      if (
        Number.isNaN(lat) ||
        Number.isNaN(lng)
      ) {

        return;

      }


      coordinates.push(
        [lat, lng]
      );

    });


  return coordinates;

}


/* =========================================================
   DIBUJAR LÍNEA DE UN DÍA

   IMPORTANTE:

   Es una línea visual para entender el recorrido.

   NO pretende sustituir Google Maps ni representar
   exactamente la carretera.
========================================================= */

function drawDayLine(
  day,
  coordinates
) {

  if (
    coordinates.length < 2
  ) {

    return;

  }


  const polyline =
    L.polyline(
      coordinates,
      {
        weight: 4,
        opacity: 0.65
      }
    );


  polyline.bindTooltip(
    `Día ${day.id} · ${day.title}`
  );


  polyline.addTo(
    routeLayer
  );

}


/* =========================================================
   AJUSTAR MAPA A LOS PUNTOS
========================================================= */

function fitMapToBounds(bounds) {

  if (
    !bounds ||
    bounds.length === 0
  ) {

    map.setView(
      [64.25, -19.5],
      7
    );

    return;

  }


  if (
    bounds.length === 1
  ) {

    map.setView(
      bounds[0],
      12
    );

    return;

  }


  map.fitBounds(
    bounds,
    {
      padding: [45, 45],
      maxZoom: 12
    }
  );

}


/* =========================================================
   DIBUJAR UN DÍA
========================================================= */

function drawDayRoute(day) {

  if (!day) {

    return;

  }


  clearMapLayers();


  const bounds = [];


  /* -------------------------------------------------------
     MARCADORES
  ------------------------------------------------------- */

  (day.activities || [])
    .forEach(item => {

      if (
        item.type === "activity"
      ) {

        addActivityMarker(
          item,
          day,
          bounds
        );

      }

    });


  /* -------------------------------------------------------
     LÍNEA
  ------------------------------------------------------- */

  const coordinates =
    getDayCoordinates(day);


  drawDayLine(
    day,
    coordinates
  );


  /* -------------------------------------------------------
     AJUSTAR VISTA
  ------------------------------------------------------- */

  fitMapToBounds(bounds);


  console.log(
    `🗺️ Ruta Día ${day.id}`,
    day.title
  );

}


/* =========================================================
   DIBUJAR TODAS LAS RUTAS
========================================================= */

function drawAllRoutes() {

  clearMapLayers();


  const bounds = [];


  tripDays.forEach(day => {

    const dayCoordinates = [];


    (day.activities || [])
      .forEach(item => {

        if (
          item.type !== "activity"
        ) {

          return;

        }


        if (
          !item.location ||
          item.location.lat === undefined ||
          item.location.lng === undefined
        ) {

          return;

        }


        addActivityMarker(
          item,
          day,
          bounds
        );


        dayCoordinates.push([
          Number(item.location.lat),
          Number(item.location.lng)
        ]);

      });


    drawDayLine(
      day,
      dayCoordinates
    );

  });


  fitMapToBounds(bounds);


  console.log(
    "🗺️ Mostrando todas las rutas"
  );

}


/* =========================================================
   POPUP CAMPING
========================================================= */

function createCampsitePopup(campsite) {

  const tags =
    (campsite.tags || [])
      .map(tag => `
        <span class="map-popup-tag">
          ${escapeMapHTML(tag)}
        </span>
      `)
      .join("");


  let priceHTML = "";


  if (campsite.price) {

    const adultISK =
      campsite.price.adultISK;

    const adultEUR =
      campsite.price.adultEUR;


    if (
      adultISK !== undefined
    ) {

      priceHTML = `

        <div class="map-popup-price">

          💰

          ${
            adultEUR !== undefined
              ? `≈ ${adultEUR} € / adulto`
              : `${adultISK} ISK / adulto`
          }

          ${
            adultEUR !== undefined
              ? `
                <small>
                  ${adultISK.toLocaleString("es-ES")} ISK
                </small>
              `
              : ""
          }

        </div>

      `;

    }

  }


  return `

    <div class="map-popup campsite-popup">

      <div class="map-popup-day">
        NOCHE ${campsite.day}
      </div>


      <div class="map-popup-title-row">

        <span class="map-popup-icon">
          ⛺
        </span>

        <div>

          <small>
            ${escapeMapHTML(
              campsite.area || ""
            )}
          </small>

          <strong>
            ${escapeMapHTML(
              campsite.name
            )}
          </strong>

        </div>

      </div>


      ${
        campsite.recommended
          ? `
            <span class="map-popup-badge recommended">
              ⭐ RECOMENDADO
            </span>
          `
          : ""
      }


      ${
        campsite.description
          ? `
            <p class="map-popup-description">
              ${escapeMapHTML(
                campsite.description
              )}
            </p>
          `
          : ""
      }


      ${priceHTML}


      ${
        tags
          ? `
            <div class="map-popup-tags">
              ${tags}
            </div>
          `
          : ""
      }


      ${
        campsite.warning
          ? `
            <div class="map-popup-warning">
              ⚠️ ${escapeMapHTML(
                campsite.warning
              )}
            </div>
          `
          : ""
      }


      ${
        createPopupMapsLink(
          campsite.mapsUrl,
          "📍 Abrir camping en Maps"
        )
      }

    </div>

  `;

}


/* =========================================================
   AÑADIR CAMPING
========================================================= */

function addCampsiteMarker(
  campsite,
  bounds
) {

  if (
    !campsite.location ||
    campsite.location.lat === undefined ||
    campsite.location.lng === undefined
  ) {

    return;

  }


  const lat =
    Number(
      campsite.location.lat
    );

  const lng =
    Number(
      campsite.location.lng
    );


  if (
    Number.isNaN(lat) ||
    Number.isNaN(lng)
  ) {

    return;

  }


  const marker =
    L.marker(
      [lat, lng],
      {
        icon: campsiteIcon
      }
    );


  marker.bindPopup(
    createCampsitePopup(
      campsite
    )
  );


  marker.addTo(
    campsiteLayer
  );


  bounds.push(
    [lat, lng]
  );

}


/* =========================================================
   DIBUJAR CAMPINGS

   dayId es opcional.

   drawCampings()
   → todos

   drawCampings(1)
   → campings Noche 1
========================================================= */

function drawCampings(dayId = null) {

  clearMapLayers();


  const bounds = [];


  if (
    typeof campsites === "undefined"
  ) {

    console.error(
      "❌ campsites no existe. Revisa places.js."
    );

    return;

  }


  const selectedCampsites =
    dayId
      ? campsites.filter(
          campsite =>
            campsite.day === dayId
        )
      : campsites;


  selectedCampsites.forEach(
    campsite => {

      addCampsiteMarker(
        campsite,
        bounds
      );

    }
  );


  fitMapToBounds(bounds);


  console.log(
    "⛺ Campings mostrados:",
    selectedCampsites.length
  );

}


/* =========================================================
   POPUP SUPERMERCADO
========================================================= */

function createSupermarketPopup(
  supermarket
) {

  const tags =
    (supermarket.tags || [])
      .map(tag => `
        <span class="map-popup-tag">
          ${escapeMapHTML(tag)}
        </span>
      `)
      .join("");


  return `

    <div class="map-popup supermarket-popup">

      <div class="map-popup-day">
        DÍA ${supermarket.day}
      </div>


      <div class="map-popup-title-row">

        <span class="map-popup-icon">
          🛒
        </span>

        <div>

          <small>
            ${escapeMapHTML(
              supermarket.chain || ""
            )}
            ·
            ${escapeMapHTML(
              supermarket.area || ""
            )}
          </small>

          <strong>
            ${escapeMapHTML(
              supermarket.name
            )}
          </strong>

        </div>

      </div>


      ${
        supermarket.recommended
          ? `
            <span class="map-popup-badge recommended">
              ⭐ RECOMENDADO
            </span>
          `
          : ""
      }


      ${
        supermarket.role
          ? `
            <div class="map-popup-role">
              ${escapeMapHTML(
                supermarket.role
              )}
            </div>
          `
          : ""
      }


      ${
        supermarket.description
          ? `
            <p class="map-popup-description">
              ${escapeMapHTML(
                supermarket.description
              )}
            </p>
          `
          : ""
      }


      ${
        tags
          ? `
            <div class="map-popup-tags">
              ${tags}
            </div>
          `
          : ""
      }


      ${
        createPopupMapsLink(
          supermarket.mapsUrl,
          "📍 Abrir supermercado en Maps"
        )
      }

    </div>

  `;

}


/* =========================================================
   AÑADIR SUPERMERCADO
========================================================= */

function addSupermarketMarker(
  supermarket,
  bounds
) {

  if (
    !supermarket.location ||
    supermarket.location.lat === undefined ||
    supermarket.location.lng === undefined
  ) {

    return;

  }


  const lat =
    Number(
      supermarket.location.lat
    );

  const lng =
    Number(
      supermarket.location.lng
    );


  if (
    Number.isNaN(lat) ||
    Number.isNaN(lng)
  ) {

    return;

  }


  const marker =
    L.marker(
      [lat, lng],
      {
        icon: supermarketIcon
      }
    );


  marker.bindPopup(
    createSupermarketPopup(
      supermarket
    )
  );


  marker.addTo(
    supermarketLayer
  );


  bounds.push(
    [lat, lng]
  );

}


/* =========================================================
   DIBUJAR SUPERMERCADOS

   dayId opcional.
========================================================= */

function drawSupermarkets(
  dayId = null
) {

  clearMapLayers();


  const bounds = [];


  if (
    typeof supermarkets === "undefined"
  ) {

    console.error(
      "❌ supermarkets no existe. Revisa places.js."
    );

    return;

  }


  const selectedSupermarkets =
    dayId
      ? supermarkets.filter(
          supermarket =>
            supermarket.day === dayId
        )
      : supermarkets;


  selectedSupermarkets.forEach(
    supermarket => {

      addSupermarketMarker(
        supermarket,
        bounds
      );

    }
  );


  fitMapToBounds(bounds);


  console.log(
    "🛒 Supermercados mostrados:",
    selectedSupermarkets.length
  );

}


/* =========================================================
   DIBUJAR TODO

   Incluye:

   - rutas de todos los días
   - actividades
   - campings
   - supermercados
========================================================= */

function drawEverything() {

  clearMapLayers();


  const bounds = [];


  /* -------------------------------------------------------
     ACTIVIDADES + RUTAS
  ------------------------------------------------------- */

  tripDays.forEach(day => {

    const dayCoordinates = [];


    (day.activities || [])
      .forEach(item => {

        if (
          item.type !== "activity"
        ) {

          return;

        }


        if (
          !item.location ||
          item.location.lat === undefined ||
          item.location.lng === undefined
        ) {

          return;

        }


        addActivityMarker(
          item,
          day,
          bounds
        );


        const lat =
          Number(
            item.location.lat
          );

        const lng =
          Number(
            item.location.lng
          );


        if (
          !Number.isNaN(lat) &&
          !Number.isNaN(lng)
        ) {

          dayCoordinates.push(
            [lat, lng]
          );

        }

      });


    drawDayLine(
      day,
      dayCoordinates
    );

  });


  /* -------------------------------------------------------
     CAMPINGS
  ------------------------------------------------------- */

  if (
    typeof campsites !== "undefined"
  ) {

    campsites.forEach(
      campsite => {

        addCampsiteMarker(
          campsite,
          bounds
        );

      }
    );

  }


  /* -------------------------------------------------------
     SUPERMERCADOS
  ------------------------------------------------------- */

  if (
    typeof supermarkets !== "undefined"
  ) {

    supermarkets.forEach(
      supermarket => {

        addSupermarketMarker(
          supermarket,
          bounds
        );

      }
    );

  }


  fitMapToBounds(bounds);


  console.log(
    "🌍 Mostrando TODO"
  );

}


/* =========================================================
   ALIAS PARA APP.JS

   app.js llama drawAllRoutes() cuando pulsamos
   la pestaña MAPA.

   Ahora queremos que TODO incluya también
   campings y supermercados.
========================================================= */

function drawAllRoutes() {

  drawEverything();

}


/* =========================================================
   FILTROS DEL MAPA
========================================================= */

const mapFilterContainer =
  document.querySelector(
    ".map-filters"
  );


/* =========================================================
   CREAR FILTROS AUTOMÁTICAMENTE

   Esto evita tener que escribir a mano en index.html:

   TODO
   DÍA 1
   DÍA 2
   ...
========================================================= */

function buildMapFilters() {

  if (!mapFilterContainer) {

    console.warn(
      "⚠️ No existe .map-filters en index.html"
    );

    return;

  }


  /* -------------------------------------------------------
     TODO
  ------------------------------------------------------- */

  let filtersHTML = `

    <button
      type="button"
      class="map-filter active"
      data-map-filter="all"
    >
      TODO
    </button>

  `;


  /* -------------------------------------------------------
     DÍAS
  ------------------------------------------------------- */

  tripDays.forEach(day => {

    filtersHTML += `

      <button
        type="button"
        class="map-filter"
        data-map-filter="${day.id}"
      >
        DÍA ${day.id}
      </button>

    `;

  });


  /* -------------------------------------------------------
     CAMPINGS
  ------------------------------------------------------- */

  filtersHTML += `

    <button
      type="button"
      class="map-filter"
      data-map-filter="campings"
    >
      ⛺ CAMPINGS
    </button>

  `;


  /* -------------------------------------------------------
     SUPERMERCADOS
  ------------------------------------------------------- */

  filtersHTML += `

    <button
      type="button"
      class="map-filter"
      data-map-filter="supermarkets"
    >
      🛒 SUPERMERCADOS
    </button>

  `;


  mapFilterContainer.innerHTML =
    filtersHTML;

}


/* =========================================================
   CAMBIAR FILTRO ACTIVO
========================================================= */

function setActiveMapFilter(
  selectedButton
) {

  const filterButtons =
    document.querySelectorAll(
      ".map-filter"
    );


  filterButtons.forEach(button => {

    button.classList.remove(
      "active"
    );

  });


  if (selectedButton) {

    selectedButton.classList.add(
      "active"
    );

  }

}


/* =========================================================
   RESPONDER A CLIC EN FILTRO
========================================================= */

function handleMapFilterClick(event) {

  const button =
    event.target.closest(
      ".map-filter"
    );


  if (!button) {

    return;

  }


  const filter =
    button.dataset.mapFilter;


  if (!filter) {

    return;

  }


  setActiveMapFilter(
    button
  );


  /* -------------------------------------------------------
     TODO
  ------------------------------------------------------- */

  if (
    filter === "all"
  ) {

    drawEverything();

    return;

  }


  /* -------------------------------------------------------
     CAMPINGS
  ------------------------------------------------------- */

  if (
    filter === "campings"
  ) {

    drawCampings();

    return;

  }


  /* -------------------------------------------------------
     SUPERMERCADOS
  ------------------------------------------------------- */

  if (
    filter === "supermarkets"
  ) {

    drawSupermarkets();

    return;

  }


  /* -------------------------------------------------------
     DÍA CONCRETO
  ------------------------------------------------------- */

  const dayId =
    Number(filter);


  if (
    !Number.isNaN(dayId)
  ) {

    const selectedDay =
      tripDays.find(day =>
        day.id === dayId
      );


    if (selectedDay) {

      drawDayRoute(
        selectedDay
      );

    }

  }

}


/* =========================================================
   ACTIVAR EVENTOS DE FILTROS
========================================================= */

function initialiseMapFilters() {

  buildMapFilters();


  if (!mapFilterContainer) {

    return;

  }


  mapFilterContainer.addEventListener(
    "click",
    handleMapFilterClick
  );

}


/* =========================================================
   REDIMENSIONAR MAPA

   Leaflet a veces necesita recalcular su tamaño
   cuando su contenedor estaba oculto.
========================================================= */

window.addEventListener(
  "resize",
  () => {

    if (
      typeof map !== "undefined"
    ) {

      map.invalidateSize();

    }

  }
);


/* =========================================================
   COMPROBACIONES
========================================================= */

function validateMapData() {

  if (
    typeof tripDays === "undefined"
  ) {

    console.error(
      "❌ tripDays no está disponible para map.js."
    );

    return false;

  }


  if (
    typeof campsites === "undefined"
  ) {

    console.warn(
      "⚠️ campsites no está disponible. Revisa places.js."
    );

  }


  if (
    typeof supermarkets === "undefined"
  ) {

    console.warn(
      "⚠️ supermarkets no está disponible. Revisa places.js."
    );

  }


  return true;

}


/* =========================================================
   INICIALIZAR MAPA
========================================================= */

function initialiseMap() {

  const valid =
    validateMapData();


  if (!valid) {

    return;

  }


  /* Crear botones */
  initialiseMapFilters();


  /* Dibujar todo inicialmente */
  drawEverything();


  /*
    El mapa normalmente estará oculto al cargar la web
    porque empezamos viendo el Día 1.

    Cuando app.js lo muestre llamará invalidateSize().
  */

  console.log(
    "🗺️ Mapa de Islandia inicializado."
  );

}


/* =========================================================
   INICIAR
========================================================= */

initialiseMap();
