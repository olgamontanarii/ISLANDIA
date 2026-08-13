console.log("✅ app.js cargado correctamente");
console.log("Días disponibles:", tripDays);


/* =========================================================
   APLICACIÓN DEL ITINERARIO

   data.js = datos
   app.js  = representación + interacción
========================================================= */


/* =========================================================
   ELEMENTOS DEL HTML
========================================================= */

const dayButtons = document.querySelectorAll(".day");

const content = document.querySelector(".content");

const mapButton = document.querySelector(".map-tab");

const mapSection = document.querySelector("#map-section");


/* =========================================================
   MOSTRAR UN DÍA
========================================================= */

function renderDay(day) {

  /* -------------------------------------------------------
     ESTADÍSTICAS
  ------------------------------------------------------- */

  const statsHTML = (day.stats || [])
    .map(stat => `
      <div class="stat">
        <strong>${stat.value}</strong>
        <span>${stat.label}</span>
      </div>
    `)
    .join("");


  /* -------------------------------------------------------
     PRESUPUESTO DEL DÍA
  ------------------------------------------------------- */

  const budgetHTML = createBudgetSummaryHTML(day);


  /* -------------------------------------------------------
     TIMELINE
  ------------------------------------------------------- */

  const timelineHTML = (day.activities || [])
    .map(item => {

      if (item.type === "drive") {
        return createDriveHTML(item);
      }

      return createActivityHTML(item);

    })
    .join("");


  /* -------------------------------------------------------
     OPCIONES PARA DORMIR
  ------------------------------------------------------- */

  const overnightHTML =
    createOvernightOptionsHTML(day);


  /* -------------------------------------------------------
     CONTENIDO COMPLETO
  ------------------------------------------------------- */

  content.innerHTML = `

    <!-- =====================================
         HERO
    ====================================== -->

    <section class="hero">

      <span class="giant-number">
        ${String(day.id).padStart(2, "0")}
      </span>


      <div class="hero-content">

        <p class="eyebrow">
          DÍA ${String(day.id).padStart(2, "0")} · ${day.date}
        </p>


        <h2>
          ${day.title}
        </h2>


        <p class="intro">
          ${day.intro}
        </p>


        <div class="stats">
          ${statsHTML}
        </div>


        <div class="day-actions">

          <button
            class="day-route-button"
            data-day="${day.id}"
          >
            🗺️ Ver ruta del día
          </button>

        </div>

      </div>

    </section>


    <!-- =====================================
         PRESUPUESTO
    ====================================== -->

    ${budgetHTML}


    <!-- =====================================
         TIMELINE
    ====================================== -->

    <section class="timeline-section">

      <div class="section-heading">

        <p class="eyebrow">
          RUTA DEL DÍA
        </p>

        <h3>
          Qué hacemos hoy
        </h3>

      </div>


      <div class="timeline">

        ${
          timelineHTML ||
          `
            <div class="empty-day">
              Todavía no hemos añadido actividades para este día.
            </div>
          `
        }

      </div>

    </section>


    <!-- =====================================
         OPCIONES PARA DORMIR
    ====================================== -->

    ${overnightHTML}

  `;
}


/* =========================================================
   PRESUPUESTO FAMILIAR
========================================================= */

function createBudgetSummaryHTML(day) {

  if (!day.budgetSummary) {
    return "";
  }


  const itemsHTML =
    (day.budgetSummary.items || [])
      .map(item => `

        <div class="budget-item">

          <span class="budget-icon">
            ${item.icon || "💰"}
          </span>

          <div>

            <span class="budget-name">
              ${item.name}
            </span>

            <strong>
              ${item.value}
            </strong>

          </div>

        </div>

      `)
      .join("");


  return `

    <section class="budget-summary">

      <div class="budget-heading">

        <div>

          <p class="eyebrow">
            PRESUPUESTO DEL DÍA
          </p>

          <h3>
            Familia · ${day.budgetSummary.people} personas
          </h3>

        </div>

      </div>


      <div class="budget-items">
        ${itemsHTML}
      </div>


      <div class="budget-total">

        <span>
          TOTAL BASE
        </span>

        <strong>
          ${day.budgetSummary.total}
        </strong>

      </div>

    </section>

  `;
}


/* =========================================================
   CREAR ACTIVIDAD
========================================================= */

function createActivityHTML(activity) {

  /* -------------------------------------------------------
     ETIQUETAS
  ------------------------------------------------------- */

  const tagsHTML = (activity.tags || [])
    .map(tag => `
      <span>${tag}</span>
    `)
    .join("");


  /* -------------------------------------------------------
     IMPORTANTE
  ------------------------------------------------------- */

  const importantHTML =
    (activity.important || [])
      .map(item => `
        <li>${item}</li>
      `)
      .join("");


  /* -------------------------------------------------------
     LISTA DE COMPRA
  ------------------------------------------------------- */

  const shoppingListHTML =
    (activity.shoppingList || [])
      .map(item => `
        <li>${item}</li>
      `)
      .join("");


  /* -------------------------------------------------------
     PRECIO DE ACTIVIDAD
  ------------------------------------------------------- */

  const priceHTML =
    activity.price
      ? createActivityPriceHTML(activity.price)
      : "";


  /* -------------------------------------------------------
     PARKING
  ------------------------------------------------------- */

  const parkingHTML =
    activity.parking
      ? createActivityParkingHTML(activity.parking)
      : "";


  /* -------------------------------------------------------
     RESERVA
  ------------------------------------------------------- */

  const bookingHTML =
    activity.booking
      ? `

        <div class="activity-extra">

          <strong>
            🎟 Reserva
          </strong>

          <p>
            ${activity.booking.advice || ""}
          </p>

          ${
            activity.booking.url &&
            activity.booking.url !== "#"
              ? `
                <a
                  href="${activity.booking.url}"
                  class="action-link primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🎟 Reservar
                </a>
              `
              : ""
          }

        </div>

      `
      : "";


  /* -------------------------------------------------------
     BOTONES
  ------------------------------------------------------- */

  const locationButton =
    activity.location &&
    activity.location.mapsUrl &&
    activity.location.mapsUrl !== "#"
      ? `
        <a
          href="${activity.location.mapsUrl}"
          class="action-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          📍 Maps
        </a>
      `
      : "";


  const websiteButton =
    activity.websiteUrl &&
    activity.websiteUrl !== "#"
      ? `
        <a
          href="${activity.websiteUrl}"
          class="action-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          🌐 Web oficial
        </a>
      `
      : "";


  const actionButtonsHTML =
    locationButton || websiteButton
      ? `
        <div class="activity-actions">
          ${locationButton}
          ${websiteButton}
        </div>
      `
      : "";


  /* -------------------------------------------------------
     ACTIVIDAD COMPLETA
  ------------------------------------------------------- */

  return `

    <article class="activity">

      <div class="activity-time">
        ${activity.time || ""}
      </div>


      <div class="activity-dot"></div>


      <div
        class="
          activity-card
          ${activity.featured ? "featured" : ""}
          ${activity.optional ? "optional" : ""}
        "
      >

        <div class="activity-top">

          <span class="activity-icon">
            ${activity.icon || "📍"}
          </span>


          <div>

            <p class="activity-label">
              ${activity.category || ""}
            </p>

            <h4>
              ${activity.title || ""}
            </h4>

          </div>

        </div>


        <p class="activity-description">
          ${activity.description || ""}
        </p>


        ${
          tagsHTML
            ? `
              <div class="activity-tags">
                ${tagsHTML}
              </div>
            `
            : ""
        }


        ${priceHTML}


        ${actionButtonsHTML}


        ${
          activity.budget
            ? `
              <div class="activity-extra">

                <strong>
                  💰 Presupuesto
                </strong>

                <p>
                  Aproximadamente ${activity.budget.amount} ${activity.budget.currency}
                </p>

              </div>
            `
            : ""
        }


        ${
          shoppingListHTML
            ? `
              <div class="activity-extra shopping-list">

                <strong>
                  🛒 Lista de compra
                </strong>

                <ul>
                  ${shoppingListHTML}
                </ul>

              </div>
            `
            : ""
        }


        ${parkingHTML}

        ${bookingHTML}


        ${
          importantHTML
            ? `
              <div class="activity-extra">

                <strong>
                  ℹ️ Importante
                </strong>

                <ul>
                  ${importantHTML}
                </ul>

              </div>
            `
            : ""
        }

      </div>

    </article>

  `;
}


/* =========================================================
   PRECIO DE ACTIVIDAD
========================================================= */

function createActivityPriceHTML(price) {

  let mainPrice = "";

  let totalPrice = "";


  if (price.from) {

    mainPrice =
      `Desde ${price.from.toLocaleString("es-ES")} ${price.currency}`;

  } else if (price.amount !== undefined) {

    mainPrice =
      `${price.amount.toLocaleString("es-ES")} ${price.currency}`;

  }


  if (price.perPerson) {
    mainPrice += " / persona";
  }


  if (price.total) {

    totalPrice = `

      <span>
        👨‍👩‍👧‍👦 ${price.total.toLocaleString("es-ES")} ${price.currency}
        ${price.people ? `/ ${price.people} personas` : ""}
      </span>

    `;

  }


  return `

    <div class="activity-price">

      <span>
        💰 ${mainPrice}
      </span>

      ${totalPrice}

    </div>

  `;
}


/* =========================================================
   PARKING DE ACTIVIDAD
========================================================= */

function createActivityParkingHTML(parking) {

  return `

    <div class="activity-extra parking-info">

      <strong>
        🅿️ ${parking.name || "Parking"}
      </strong>


      <p>
        ${parking.info || ""}
      </p>


      ${
        parking.price
          ? `

            <div class="parking-details">

              <span>
                💰 ${
                  parking.price.amount === 0
                    ? "Gratis"
                    : `${parking.price.amount.toLocaleString("es-ES")} ${parking.price.currency}`
                }
              </span>

              ${
                parking.price.approxEuro > 0
                  ? `
                    <span>
                      ≈ ${parking.price.approxEuro} €
                    </span>
                  `
                  : ""
              }

            </div>

          `
          : ""
      }


      ${
        parking.payment
          ? `
            <p class="parking-payment">
              💳 ${parking.payment}
            </p>
          `
          : ""
      }


      ${
        parking.mapsUrl &&
        parking.mapsUrl !== "#"
          ? `
            <a
              href="${parking.mapsUrl}"
              class="action-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              📍 Abrir parking en Maps
            </a>
          `
          : ""
      }

    </div>

  `;
}


/* =========================================================
   CREAR TRAYECTO
========================================================= */

function createDriveHTML(drive) {

  const roadsHTML =
    (drive.roads || [])
      .map(road => `
        <span class="road-number">
          ${road}
        </span>
      `)
      .join("");


  const directionsHTML =
    (drive.offlineDirections || [])
      .map((direction, index) => `
        <li>
          <strong>${index + 1}.</strong>
          ${direction}
        </li>
      `)
      .join("");


  const mapsHTML =
    drive.mapsUrl &&
    drive.mapsUrl !== "#"
      ? `
        <a
          href="${drive.mapsUrl}"
          class="drive-action"
          target="_blank"
          rel="noopener noreferrer"
        >
          📍 Abrir ruta en Maps
        </a>
      `
      : "";


  const parkingHTML =
    drive.parking
      ? createDriveParkingHTML(drive.parking)
      : "";


  return `

    <article class="drive">

      <div class="drive-line">

        <span class="drive-icon">
          ${drive.icon || "🚐"}
        </span>

      </div>


      <div class="drive-card">

        <p class="drive-label">
          TRAYECTO
        </p>


        <h4>
          ${drive.from}
          <span>→</span>
          ${drive.to}
        </h4>


        <div class="drive-stats">

          <span>
            🛣️ ${drive.km} km
          </span>

          <span>
            ⏱️ ${formatMinutes(drive.minutes)}
          </span>

        </div>


        ${
          roadsHTML
            ? `
              <div class="drive-roads">

                <strong>
                  Carreteras / transporte
                </strong>

                <div>
                  ${roadsHTML}
                </div>

              </div>
            `
            : ""
        }


        ${parkingHTML}


        <div class="drive-actions">

          ${mapsHTML}


          ${
            directionsHTML
              ? `
                <button
                  class="drive-action offline-route-button"
                  type="button"
                >
                  🧭 Ruta sin conexión
                </button>
              `
              : ""
          }

        </div>


        ${
          directionsHTML
            ? `
              <div class="offline-route hidden">

                <div class="offline-route-header">

                  <strong>
                    🧭 Cómo llegar sin conexión
                  </strong>

                  <span>
                    ${drive.from} → ${drive.to}
                  </span>

                </div>


                <ol>
                  ${directionsHTML}
                </ol>

              </div>
            `
            : ""
        }

      </div>

    </article>

  `;
}


/* =========================================================
   PARKING DE TRAYECTO
========================================================= */

function createDriveParkingHTML(parking) {

  return `

    <div class="drive-parking">

      <div>

        <strong>
          🅿️ ${parking.name || "Parking al llegar"}
        </strong>

        <span>
          ${parking.info || ""}
        </span>


        ${
          parking.price
            ? `

              <div class="parking-details">

                <span>
                  💰 ${
                    parking.price.amount === 0
                      ? "Gratis"
                      : `${parking.price.amount.toLocaleString("es-ES")} ${parking.price.currency}`
                  }
                </span>

                ${
                  parking.price.approxEuro > 0
                    ? `
                      <span>
                        ≈ ${parking.price.approxEuro} €
                      </span>
                    `
                    : ""
                }

              </div>

            `
            : ""
        }


        ${
          parking.payment
            ? `
              <span class="parking-payment">
                💳 ${parking.payment}
              </span>
            `
            : ""
        }

      </div>


      ${
        parking.mapsUrl &&
        parking.mapsUrl !== "#"
          ? `
            <a
              href="${parking.mapsUrl}"
              class="drive-action"
              target="_blank"
              rel="noopener noreferrer"
            >
              📍 Abrir parking
            </a>
          `
          : ""
      }

    </div>

  `;
}


/* =========================================================
   OPCIONES PARA DORMIR
========================================================= */

function createOvernightOptionsHTML(day) {

  if (
    !day.overnightOptions ||
    day.overnightOptions.length === 0
  ) {
    return "";
  }


  const optionsHTML =
    day.overnightOptions
      .map(option => {

        const tagsHTML =
          (option.tags || [])
            .map(tag => `
              <span>${tag}</span>
            `)
            .join("");


        let priceHTML = "";


        /*
          Caso concreto de camping con precio
          desglosado.
        */
        if (option.price) {

          priceHTML = `

            <div class="overnight-price">

              ${
                option.price.adult
                  ? `
                    <span>
                      👤 ${option.price.adult.toLocaleString("es-ES")}
                      ${option.price.currency} / adulto
                    </span>
                  `
                  : ""
              }

              ${
                option.price.camper
                  ? `
                    <span>
                      🚐 ${option.price.camper.toLocaleString("es-ES")}
                      ${option.price.currency} / camper
                    </span>
                  `
                  : ""
              }

              ${
                option.price.electricity
                  ? `
                    <span>
                      ⚡ ${option.price.electricity.toLocaleString("es-ES")}
                      ${option.price.currency}
                    </span>
                  `
                  : ""
              }

            </div>

          `;

        }


        const mapsButton =
          option.location &&
          option.location.mapsUrl &&
          option.location.mapsUrl !== "#"
            ? `
              <a
                href="${option.location.mapsUrl}"
                class="action-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 Maps
              </a>
            `
            : "";


        return `

          <article
            class="
              overnight-option
              ${option.recommended ? "recommended" : ""}
            "
          >

            ${
              option.recommended
                ? `
                  <div class="recommended-badge">
                    ⭐ NUESTRA OPCIÓN
                  </div>
                `
                : ""
            }


            <p class="overnight-mood">
              ${option.mood}
            </p>


            <h4>
              ${option.name}
            </h4>


            <p>
              ${option.description}
            </p>


            ${
              tagsHTML
                ? `
                  <div class="activity-tags">
                    ${tagsHTML}
                  </div>
                `
                : ""
            }


            ${priceHTML}


            ${
              mapsButton
                ? `
                  <div class="activity-actions">
                    ${mapsButton}
                  </div>
                `
                : ""
            }

          </article>

        `;

      })
      .join("");


  return `

    <section class="overnight-section">

      <div class="section-heading">

        <p class="eyebrow">
          FINAL DEL DÍA
        </p>

        <h3>
          🌙 ¿Dónde dormimos?
        </h3>

        <p class="overnight-intro">
          No hace falta decidirlo ahora.
          Elegimos al salir de Sky Lagoon según cómo estemos.
        </p>

      </div>


      <div class="overnight-grid">
        ${optionsHTML}
      </div>


      <button
        class="all-campsites-button"
        type="button"
      >
        ⛺ Ver estas opciones en el mapa
      </button>

    </section>

  `;
}


/* =========================================================
   FORMATEAR MINUTOS
========================================================= */

function formatMinutes(minutes) {

  const hours =
    Math.floor(minutes / 60);


  const remainingMinutes =
    minutes % 60;


  if (hours === 0) {
    return `${remainingMinutes} min`;
  }


  if (remainingMinutes === 0) {
    return `${hours} h`;
  }


  return `${hours} h ${remainingMinutes} min`;
}


/* =========================================================
   CAMBIAR DÍA ACTIVO
========================================================= */

function setActiveDay(selectedButton) {

  dayButtons.forEach(button => {
    button.classList.remove("active");
  });


  selectedButton.classList.add("active");
}


/* =========================================================
   NAVEGACIÓN ENTRE DÍAS
========================================================= */

dayButtons.forEach((button, index) => {

  button.addEventListener("click", () => {

    if (button.classList.contains("map-tab")) {
      return;
    }


    const selectedDay =
      tripDays[index];


    if (!selectedDay) {
      return;
    }


    setActiveDay(button);


    mapSection.classList.add("hidden");

    content.classList.remove("hidden");


    renderDay(selectedDay);

  });

});


/* =========================================================
   ABRIR MAPA DESDE UN DÍA
========================================================= */

function openDayMap(dayId) {

  const selectedDay =
    tripDays.find(day => day.id === dayId);


  if (!selectedDay) {
    return;
  }


  dayButtons.forEach(button => {
    button.classList.remove("active");
  });


  mapButton.classList.add("active");


  content.classList.add("hidden");

  mapSection.classList.remove("hidden");


  const mapFilterButtons =
    document.querySelectorAll(".map-filter");


  mapFilterButtons.forEach(button => {
    button.classList.remove("active");
  });


  const selectedFilter =
    document.querySelector(
      `.map-filter[data-map-filter="${dayId}"]`
    );


  if (selectedFilter) {
    selectedFilter.classList.add("active");
  }


  setTimeout(() => {

    map.invalidateSize();

    drawDayRoute(selectedDay);

  }, 150);

}


/* =========================================================
   ABRIR CAMPINGS EN EL MAPA
========================================================= */

function openCampingsMap() {

  dayButtons.forEach(button => {
    button.classList.remove("active");
  });


  mapButton.classList.add("active");


  content.classList.add("hidden");

  mapSection.classList.remove("hidden");


  const filters =
    document.querySelectorAll(".map-filter");


  filters.forEach(button => {
    button.classList.remove("active");
  });


  const campingFilter =
    document.querySelector(
      '.map-filter[data-map-filter="campings"]'
    );


  if (campingFilter) {
    campingFilter.classList.add("active");
  }


  setTimeout(() => {

    map.invalidateSize();

    drawCampings();

  }, 150);

}


/* =========================================================
   BOTÓN SUPERIOR MAPA
========================================================= */

mapButton.addEventListener("click", () => {

  dayButtons.forEach(button => {
    button.classList.remove("active");
  });


  mapButton.classList.add("active");


  content.classList.add("hidden");

  mapSection.classList.remove("hidden");


  const mapFilters =
    document.querySelectorAll(".map-filter");


  mapFilters.forEach(button => {
    button.classList.remove("active");
  });


  const allFilter =
    document.querySelector(
      '.map-filter[data-map-filter="all"]'
    );


  if (allFilter) {
    allFilter.classList.add("active");
  }


  setTimeout(() => {

    map.invalidateSize();

    drawAllRoutes();

  }, 150);

});


/* =========================================================
   CLICS DINÁMICOS
========================================================= */

content.addEventListener("click", event => {

  /* -------------------------------------------------------
     VER RUTA DEL DÍA
  ------------------------------------------------------- */

  const routeButton =
    event.target.closest(".day-route-button");


  if (routeButton) {

    const dayId =
      Number(routeButton.dataset.day);


    openDayMap(dayId);

    return;
  }


  /* -------------------------------------------------------
     VER CAMPINGS EN MAPA
  ------------------------------------------------------- */

  const campsitesButton =
    event.target.closest(".all-campsites-button");


  if (campsitesButton) {

    openCampingsMap();

    return;
  }


  /* -------------------------------------------------------
     RUTA SIN CONEXIÓN
  ------------------------------------------------------- */

  const offlineButton =
    event.target.closest(".offline-route-button");


  if (!offlineButton) {
    return;
  }


  const driveCard =
    offlineButton.closest(".drive-card");


  if (!driveCard) {
    return;
  }


  const offlineRoute =
    driveCard.querySelector(".offline-route");


  if (!offlineRoute) {
    return;
  }


  offlineRoute.classList.toggle("hidden");


  if (offlineRoute.classList.contains("hidden")) {

    offlineButton.textContent =
      "🧭 Ruta sin conexión";

  } else {

    offlineButton.textContent =
      "✕ Cerrar instrucciones";

  }

});


/* =========================================================
   CARGA INICIAL
========================================================= */

renderDay(tripDays[0]);
