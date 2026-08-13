/* =========================================================
   MAPA GENERAL DEL VIAJE

   Este archivo controla:
   - mapa Leaflet
   - rutas por día
   - mapa general
   - campings
   - supermercados
========================================================= */


/* =========================================================
   CREAR EL MAPA
========================================================= */

const map = L.map("map").setView(
  [64.9, -18.6],
  6
);


/* =========================================================
   CAPA BASE · OPENSTREETMAP
========================================================= */

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,

    attribution:
      '&copy; OpenStreetMap contributors'
  }
).addTo(map);


/* =========================================================
   CAPA PARA NUESTROS MARCADORES Y RUTAS

   Todo lo que dibujemos dinámicamente irá aquí.

   Así podemos borrarlo fácilmente cuando
   cambiamos de filtro.
========================================================= */

const routeLayer =
  L.layerGroup().addTo(map);


/* =========================================================
   BOTONES DE FILTRO
========================================================= */

const mapFilterButtons =
  document.querySelectorAll(".map-filter");


/* =========================================================
   DIBUJAR LA RUTA DE UN DÍA
========================================================= */

function drawDayRoute(day) {

  /* Limpiamos el mapa */
  routeLayer.clearLayers();


  /*
    Guardamos las coordenadas de las actividades.

    Los objetos type: "drive" no tienen location,
    así que no aparecerán como marcadores.
  */
  const routeCoordinates = [];


  day.activities.forEach(item => {

    /* Sin coordenadas = no se puede dibujar */
    if (!item.location) {
      return;
    }


    const coordinates = [
      item.location.lat,
      item.location.lng
    ];


    routeCoordinates.push(coordinates);


    /* =====================================================
       MARCADOR
    ===================================================== */

    const marker =
      L.marker(coordinates);


    marker.bindPopup(`

      <strong>
        ${item.icon || "📍"}
        ${item.title || item.location.name}
      </strong>

      <br>

      ${item.location.name}

      ${
        item.description
          ? `
            <br><br>
            ${item.description}
          `
          : ""
      }

    `);


    marker.addTo(routeLayer);

  });


  /* =======================================================
     LÍNEA DE LA RUTA
  ======================================================= */

  if (routeCoordinates.length >= 2) {

    L.polyline(
      routeCoordinates,
      {
        weight: 4,
        opacity: 0.7
      }
    ).addTo(routeLayer);

  }


  /* =======================================================
     ENCUADRAR AUTOMÁTICAMENTE EL DÍA
  ======================================================= */

  if (routeCoordinates.length > 0) {

    map.fitBounds(
      routeCoordinates,
      {
        padding: [60, 60]
      }
    );

  }

}


/* =========================================================
   DIBUJAR TODO EL VIAJE
========================================================= */

function drawAllRoutes() {

  routeLayer.clearLayers();


  /*
    Todas las coordenadas de todos los días.
  */
  const allCoordinates = [];


  tripDays.forEach(day => {

    /*
      Coordenadas únicamente de este día.
    */
    const dayCoordinates = [];


    day.activities.forEach(item => {

      if (!item.location) {
        return;
      }


      const coordinates = [
        item.location.lat,
        item.location.lng
      ];


      dayCoordinates.push(coordinates);

      allCoordinates.push(coordinates);


      /* ---------------------------------------------------
         MARCADOR
      --------------------------------------------------- */

      const marker =
        L.marker(coordinates);


      marker.bindPopup(`

        <strong>
          ${item.icon || "📍"}
          ${item.title || item.location.name}
        </strong>

        <br>

        Día ${day.id}

        <br>

        ${item.location.name}

      `);


      marker.addTo(routeLayer);

    });


    /*
      IMPORTANTE:

      Dibujamos una línea diferente por día.

      Así no conectamos artificialmente el final
      de un día con el principio del siguiente.
    */
    if (dayCoordinates.length >= 2) {

      L.polyline(
        dayCoordinates,
        {
          weight: 4,
          opacity: 0.65
        }
      ).addTo(routeLayer);

    }

  });


  /* Encuadrar todo el viaje */
  if (allCoordinates.length > 0) {

    map.fitBounds(
      allCoordinates,
      {
        padding: [50, 50]
      }
    );

  }

}


/* =========================================================
   DIBUJAR CAMPINGS
========================================================= */

function drawCampings() {

  routeLayer.clearLayers();


  const coordinates = [];


  campsites.forEach(camping => {

    const point = [
      camping.location.lat,
      camping.location.lng
    ];


    coordinates.push(point);


    const marker =
      L.marker(point);


    marker.bindPopup(`

      <strong>
        ⛺ ${camping.name}
      </strong>

      <br><br>

      ${camping.description}

      ${
        camping.tags &&
        camping.tags.length > 0
          ? `
            <br><br>
            ${camping.tags.join("<br>")}
          `
          : ""
      }

    `);


    marker.addTo(routeLayer);

  });


  /*
    maxZoom evita que, si solo hay un camping,
    Leaflet haga un zoom exageradamente cercano.
  */
  if (coordinates.length > 0) {

    map.fitBounds(
      coordinates,
      {
        padding: [60, 60],
        maxZoom: 11
      }
    );

  }

}


/* =========================================================
   DIBUJAR SUPERMERCADOS
========================================================= */

function drawSupermarkets() {

  routeLayer.clearLayers();


  const coordinates = [];


  supermarkets.forEach(supermarket => {

    const point = [
      supermarket.location.lat,
      supermarket.location.lng
    ];


    coordinates.push(point);


    const marker =
      L.marker(point);


    marker.bindPopup(`

      <strong>
        🛒 ${supermarket.name}
      </strong>

      <br><br>

      ${supermarket.description}

      ${
        supermarket.tags &&
        supermarket.tags.length > 0
          ? `
            <br><br>
            ${supermarket.tags.join("<br>")}
          `
          : ""
      }

    `);


    marker.addTo(routeLayer);

  });


  if (coordinates.length > 0) {

    map.fitBounds(
      coordinates,
      {
        padding: [60, 60],
        maxZoom: 11
      }
    );

  }

}


/* =========================================================
   EVENTOS DE LOS FILTROS

   TODO
   DÍA 1
   DÍA 2
   ...
   CAMPINGS
   SUPERMERCADOS
========================================================= */

mapFilterButtons.forEach(button => {

  button.addEventListener("click", () => {

    /* -----------------------------------------------------
       CAMBIAR FILTRO ACTIVO
    ----------------------------------------------------- */

    mapFilterButtons.forEach(filterButton => {
      filterButton.classList.remove("active");
    });


    button.classList.add("active");


    /* Valor de data-map-filter */
    const filter =
      button.dataset.mapFilter;


    /* -----------------------------------------------------
       TODO
    ----------------------------------------------------- */

    if (filter === "all") {

      drawAllRoutes();

      return;
    }


    /* -----------------------------------------------------
       CAMPINGS
    ----------------------------------------------------- */

    if (filter === "campings") {

      drawCampings();

      return;
    }


    /* -----------------------------------------------------
       SUPERMERCADOS
    ----------------------------------------------------- */

    if (filter === "supermarkets") {

      drawSupermarkets();

      return;
    }


    /* -----------------------------------------------------
       DÍAS
    ----------------------------------------------------- */

    /*
      "1" → 1
      "2" → 2
      etc.
    */
    const dayId =
      Number(filter);


    const selectedDay =
      tripDays.find(
        day => day.id === dayId
      );


    if (selectedDay) {

      drawDayRoute(selectedDay);

    }

  });

});


/* =========================================================
   MAPA INICIAL

   Cuando se carga la web, dejamos preparado
   el mapa con todo el viaje.

   Aunque al principio esté oculto.
========================================================= */

drawAllRoutes();


/* =========================================================
   COMPROBACIÓN
========================================================= */

console.log("✅ map.js cargado correctamente");
