/* =========================================================
   ISLANDIA 2026 · APP.JS

   LÓGICA PRINCIPAL DE LA WEB

   data.js   = itinerario
   places.js = campings + supermercados
   app.js    = cómo mostramos e interactuamos con los datos
========================================================= */

console.log("✅ app.js cargado correctamente");
console.log("Días disponibles:", tripDays);


/* =========================================================
   ELEMENTOS PRINCIPALES DEL HTML
========================================================= */

const dayButtons =
  document.querySelectorAll(".day");

const content =
  document.querySelector(".content");

const mapButton =
  document.querySelector(".map-tab");

const mapSection =
  document.querySelector("#map-section");


/* =========================================================
   UTILIDADES
========================================================= */


/* ---------------------------------------------------------
   FORMATEAR NÚMEROS
--------------------------------------------------------- */

function formatNumber(number) {

  if (
    number === undefined ||
    number === null ||
    number === ""
  ) {
    return "";
  }

  return Number(number).toLocaleString("es-ES");
}


/* ---------------------------------------------------------
   FORMATEAR EUROS
--------------------------------------------------------- */

function formatEuro(number, approximate = false) {

  if (
    number === undefined ||
    number === null
  ) {
    return "";
  }

  if (Number(number) === 0) {
    return "GRATIS";
  }

  return `${approximate ? "≈ " : ""}${formatNumber(number)} €`;
}


/* ---------------------------------------------------------
   FORMATEAR ISK
--------------------------------------------------------- */

function formatISK(number) {

  if (
    number === undefined ||
    number === null
  ) {
    return "";
  }

  if (Number(number) === 0) {
    return "0 ISK";
  }

  return `${formatNumber(number)} ISK`;
}


/* ---------------------------------------------------------
   FORMATEAR MINUTOS
--------------------------------------------------------- */

function formatMinutes(minutes) {

  if (
    minutes === undefined ||
    minutes === null
  ) {
    return "";
  }

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


/* ---------------------------------------------------------
   ABRIR ENLACES DE FORMA SEGURA
--------------------------------------------------------- */

function createExternalLink(
  url,
  text,
  className = "action-link"
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
      class="${className}"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${text}
    </a>
  `;
}


/* =========================================================
   BADGE DE PRIORIDAD
========================================================= */

function createPriorityBadge(priority) {

  switch (priority) {

    case "fixed":

      return `
        <span class="priority-badge priority-fixed">
          ✓ FIJO
        </span>
      `;


    case "optional":

      return `
        <span class="priority-badge priority-optional">
          🟡 OPCIONAL
        </span>
      `;


    case "decision":

      return `
        <span class="priority-badge priority-decision">
          ❓ POR DECIDIR
        </span>
      `;


    default:

      return "";
  }
}


/* =========================================================
   ICONOS PARA NOTAS
========================================================= */

function getNoteIcon(type) {

  switch (type) {

    case "important":
    case "warning":
      return "⚠️";

    case "tip":
      return "💡";

    case "plan":
      return "⭐";

    case "info":
      return "💡";

    default:
      return "ℹ️";
  }
}


/* =========================================================
   CREAR NOTAS DESPLEGABLES
========================================================= */

function createNotesHTML(notes) {

  if (
    !notes ||
    notes.length === 0
  ) {
    return "";
  }


  const notesHTML =
    notes
      .map(note => {

        const icon =
          getNoteIcon(note.type);

        return `
          <div class="detail-note detail-note-${note.type || "info"}">

            <div class="detail-note-title">
              ${icon} ${note.title || "Información"}
            </div>

            <p>
              ${note.text || ""}
            </p>

          </div>
        `;

      })
      .join("");


  return `
    <div class="details-wrapper">

      <button
        type="button"
        class="details-toggle"
      >
        ℹ️ Ver detalles
      </button>

      <div class="details-content hidden">
        ${notesHTML}
      </div>

    </div>
  `;
}


/* =========================================================
   TAGS
========================================================= */

function createTagsHTML(tags) {

  if (
    !tags ||
    tags.length === 0
  ) {
    return "";
  }

  return `
    <div class="activity-tags">

      ${tags
        .map(tag => `
          <span>${tag}</span>
        `)
        .join("")}

    </div>
  `;
}


/* =========================================================
   PRECIO DE UNA ACTIVIDAD
========================================================= */

function createPriceHTML(price) {

  if (!price) {
    return "";
  }


  /* -------------------------------------------------------
     PRESUPUESTO SIMPLE EN EUROS
  ------------------------------------------------------- */

  if (
    price.type === "budget" &&
    price.eur !== undefined
  ) {

    return `
      <div class="price-card">

        <div class="price-card-icon">
          💰
        </div>

        <div class="price-card-main">

          <span class="price-label">
            PRESUPUESTO
          </span>

          <strong class="price-eur">
            ${formatEuro(
              price.eur,
              price.approximate
            )}
          </strong>

        </div>

      </div>
    `;
  }


  /* -------------------------------------------------------
     PRECIO POR PERSONA + FAMILIA
  ------------------------------------------------------- */

  const eurPerPerson =
    price.eurPerPerson;

  const iskPerPerson =
    price.iskPerPerson;

  const eurFamily =
    price.eurFamily;

  const iskFamily =
    price.iskFamily;

  const people =
    price.people || 5;


  if (
    eurPerPerson !== undefined ||
    eurFamily !== undefined
  ) {

    return `
      <div class="price-card">

        <div class="price-card-icon">
          💰
        </div>


        <div class="price-card-main">

          <span class="price-label">
            PRECIO
          </span>


          ${
            eurPerPerson !== undefined
              ? `
                <div class="price-person">

                  <strong class="price-eur">
                    ${
                      formatEuro(
                        eurPerPerson,
                        price.approximate
                      )
                    }
                    / persona
                  </strong>

                  ${
                    iskPerPerson !== undefined
                      ? `
                        <span class="price-isk">
                          ${formatISK(iskPerPerson)}
                        </span>
                      `
                      : ""
                  }

                </div>
              `
              : ""
          }


          ${
            eurFamily !== undefined
              ? `
                <div class="price-family">

                  <span>
                    👨‍👩‍👧‍👦 TOTAL ${people} PERSONAS
                  </span>

                  <strong>
                    ${
                      formatEuro(
                        eurFamily,
                        price.approximate
                      )
                    }
                  </strong>

                  ${
                    iskFamily !== undefined
                      ? `
                        <small>
                          ${formatISK(iskFamily)}
                        </small>
                      `
                      : ""
                  }

                </div>
              `
              : ""
          }


          ${
            price.note
              ? `
                <p class="price-note">
                  ${price.note}
                </p>
              `
              : ""
          }

        </div>

      </div>
    `;
  }


  return "";
}


/* =========================================================
   PARKING
========================================================= */

function createParkingHTML(parking) {

  if (!parking) {
    return "";
  }


  let priceHTML = "";


  /* Precio directo en euros */

  if (parking.priceEur !== undefined) {

    priceHTML = `
      <span class="parking-price">
        💰 ${formatEuro(parking.priceEur)}
      </span>
    `;
  }


  /* Precio estructurado */

  else if (parking.price) {

    if (
      parking.price.amount !== undefined
    ) {

      priceHTML = `
        <span class="parking-price">

          💰 ${
            parking.price.amount === 0
              ? "GRATIS"
              : formatISK(parking.price.amount)
          }

          ${
            parking.price.approxEuro
              ? ` · ≈ ${parking.price.approxEuro} €`
              : ""
          }

        </span>
      `;

    }

    else if (
      parking.price.status ===
      "check-before-trip"
    ) {

      priceHTML = `
        <span class="parking-price parking-pending">
          💰 Precio por comprobar
        </span>
      `;
    }
  }


  else if (
    parking.status === "pending"
  ) {

    priceHTML = `
      <span class="parking-price parking-pending">
        ⚠️ Parking por decidir
      </span>
    `;
  }


  return `
    <div class="parking-card">

      <div class="parking-card-header">

        <span class="parking-icon">
          🅿️
        </span>

        <div>

          <span class="parking-label">
            PARKING
          </span>

          <strong>
            ${parking.name || "Parking"}
          </strong>

        </div>

      </div>


      ${
        parking.info
          ? `
            <p>
              ${parking.info}
            </p>
          `
          : ""
      }


      ${priceHTML}


      ${
        parking.payment
          ? `
            <span class="parking-payment">
              💳 ${parking.payment}
            </span>
          `
          : ""
      }


      ${
        createExternalLink(
          parking.mapsUrl,
          "📍 Abrir parking en Maps"
        )
      }

    </div>
  `;
}


/* =========================================================
   RESERVA
========================================================= */

function createBookingHTML(booking) {

  if (!booking) {
    return "";
  }

  return `
    <div class="booking-card">

      <div class="booking-card-title">
        🎟️ RESERVA
      </div>

      ${
        booking.advice
          ? `
            <p>
              ${booking.advice}
            </p>
          `
          : ""
      }

      ${
        createExternalLink(
          booking.url,
          booking.required
            ? "🎟️ Reservar"
            : "🎟️ Ver reserva",
          "action-link primary"
        )
      }

    </div>
  `;
}


/* =========================================================
   LISTA DE COMPRA
========================================================= */

function createShoppingListHTML(list) {

  if (
    !list ||
    list.length === 0
  ) {
    return "";
  }

  return `
    <div class="shopping-card">

      <div class="shopping-title">
        🛒 LISTA DE COMPRA
      </div>

      <div class="shopping-grid">

        ${list
          .map(item => `
            <div class="shopping-item">
              ✓ ${item}
            </div>
          `)
          .join("")}

      </div>

    </div>
  `;
}


/* =========================================================
   DECISIÓN PENDIENTE
========================================================= */

function createDecisionHTML(decision) {

  if (!decision) {
    return "";
  }

  return `
    <div class="decision-card">

      <div class="decision-title">
        ${decision.label || "❓ POR DECIDIR"}
      </div>

      ${
        decision.reason
          ? `
            <p>
              ${decision.reason}
            </p>
          `
          : ""
      }

    </div>
  `;
}


/* =========================================================
   ACTIVIDAD
========================================================= */

function createActivityHTML(activity) {

  const priorityHTML =
    createPriorityBadge(
      activity.priority
    );

  const tagsHTML =
    createTagsHTML(
      activity.tags
    );

  const priceHTML =
    createPriceHTML(
      activity.price
    );

  const parkingHTML =
    createParkingHTML(
      activity.parking
    );

  const bookingHTML =
    createBookingHTML(
      activity.booking
    );

  const shoppingHTML =
    createShoppingListHTML(
      activity.shoppingList
    );

  const notesHTML =
    createNotesHTML(
      activity.notes
    );

  const decisionHTML =
    createDecisionHTML(
      activity.decision
    );


  const mapsButton =
    activity.location
      ? createExternalLink(
          activity.location.mapsUrl,
          "📍 Maps"
        )
      : "";


  const websiteButton =
    createExternalLink(
      activity.websiteUrl,
      "🌐 Web oficial"
    );


  const actionsHTML =
    mapsButton ||
    websiteButton
      ? `
        <div class="activity-actions">
          ${mapsButton}
          ${websiteButton}
        </div>
      `
      : "";


  return `
    <article
      class="
        activity
        priority-${activity.priority || "normal"}
      "
    >

      <div class="activity-time">
        ${activity.time || ""}
      </div>


      <div class="activity-dot"></div>


      <div
        class="
          activity-card
          ${activity.featured ? "featured" : ""}
          ${activity.priority === "optional" ? "optional" : ""}
          ${activity.priority === "decision" ? "decision" : ""}
        "
      >

        <div class="activity-card-header">

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


          ${priorityHTML}

        </div>


        ${
          activity.duration
            ? `
              <div class="activity-duration">
                ⏱️ ${activity.duration}
              </div>
            `
            : ""
        }


        ${
          activity.description
            ? `
              <p class="activity-description">
                ${activity.description}
              </p>
            `
            : ""
        }


        ${tagsHTML}

        ${priceHTML}

        ${decisionHTML}

        ${actionsHTML}

        ${parkingHTML}

        ${bookingHTML}

        ${shoppingHTML}

        ${notesHTML}

      </div>

    </article>
  `;
}


/* =========================================================
   TRAYECTO
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
          <strong>
            ${index + 1}.
          </strong>

          ${direction}
        </li>
      `)
      .join("");


  const parkingHTML =
    createParkingHTML(
      drive.parking
    );


  const notesHTML =
    createNotesHTML(
      drive.notes
    );


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
          ${drive.from || ""}
          <span>→</span>
          ${drive.to || ""}
        </h4>


        <div class="drive-stats">

          ${
            drive.km !== undefined
              ? `
                <span>
                  🛣️ ${drive.km} km
                </span>
              `
              : ""
          }

          ${
            drive.minutes !== undefined
              ? `
                <span>
                  ⏱️ ${formatMinutes(drive.minutes)}
                </span>
              `
              : ""
          }

          ${
            drive.transport
              ? `
                <span>
                  🚌 ${drive.transport}
                </span>
              `
              : ""
          }

        </div>


        ${
          roadsHTML
            ? `
              <div class="drive-roads">

                <strong>
                  Carreteras
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

          ${
            createExternalLink(
              drive.mapsUrl,
              "📍 Abrir ruta en Maps",
              "drive-action"
            )
          }


          ${
            directionsHTML
              ? `
                <button
                  type="button"
                  class="drive-action offline-route-button"
                >
                  🧭 Cómo llegar sin conexión
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
                    🧭 Ruta sin conexión
                  </strong>

                  <span>
                    ${drive.from}
                    →
                    ${drive.to}
                  </span>

                </div>


                <ol>
                  ${directionsHTML}
                </ol>

              </div>
            `
            : ""
        }


        ${notesHTML}

      </div>

    </article>
  `;
}


/* =========================================================
   PRESUPUESTO DEL DÍA
========================================================= */

function createBudgetSummaryHTML(day) {

  if (!day.budgetSummary) {
    return "";
  }


  const budget =
    day.budgetSummary;


  const itemsHTML =
    (budget.items || [])
      .map(item => {

        let valueHTML = "";


        /* -------------------------------------------------
           PRECIO EN EUROS
        ------------------------------------------------- */

        if (
          item.eur !== undefined
        ) {

          valueHTML = `

            <strong class="budget-item-eur">
              ${
                formatEuro(
                  item.eur,
                  item.approximate
                )
              }
            </strong>


            ${
              item.isk !== undefined
                ? `
                  <small class="budget-item-isk">
                    ${formatISK(item.isk)}
                  </small>
                `
                : ""
            }

          `;

        }


        /* -------------------------------------------------
           VALOR DE TEXTO

           Ejemplo:
           Ferry → "PENDIENTE CAMPER"
        ------------------------------------------------- */

        else if (item.value) {

          valueHTML = `

            <strong class="budget-item-text">
              ${item.value}
            </strong>

          `;

        }


        return `

          <div class="budget-item">

            <span class="budget-icon">
              ${item.icon || "💰"}
            </span>


            <div class="budget-item-content">

              <span class="budget-name">
                ${item.name || ""}
              </span>


              ${valueHTML}


              ${
                item.note
                  ? `
                    <small class="budget-item-note">
                      ${item.note}
                    </small>
                  `
                  : ""
              }

            </div>

          </div>

        `;

      })
      .join("");


  /* -------------------------------------------------------
     TOTAL

     Siempre priorizamos EUROS.

     Los ISK quedan como referencia secundaria.
  ------------------------------------------------------- */

  let totalHTML = "";


  if (
    budget.fixedTotalEur !== undefined
  ) {

    totalHTML = `

      <div class="budget-total">

        <div>

          <span class="budget-total-label">
            TOTAL BASE · ${budget.people || 5} PERSONAS
          </span>

          <small>
            Actividades/gastos incluidos arriba
          </small>

        </div>


        <strong class="budget-total-eur">
          ≈ ${formatNumber(budget.fixedTotalEur)} €
        </strong>

      </div>

    `;

  }


  return `

    <section class="budget-summary">

      <div class="budget-heading">

        <div>

          <p class="eyebrow">
            PRESUPUESTO DEL DÍA
          </p>

          <h3>
            Familia · ${budget.people || 5} personas
          </h3>

        </div>


        <span class="budget-currency-badge">
          TOTAL EN €
        </span>

      </div>


      <div class="budget-items">
        ${itemsHTML}
      </div>


      ${totalHTML}


      ${
        budget.note
          ? `
            <div class="budget-note">
              💡 ${budget.note}
            </div>
          `
          : ""
      }

    </section>

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
          createTagsHTML(
            option.tags
          );


        const notesHTML =
          createNotesHTML(
            option.notes
          );


        /* -------------------------------------------------
           PRECIO DEL CAMPING
        ------------------------------------------------- */

        const priceHTML =
          createCampingPriceHTML(
            option.price
          );


        /* -------------------------------------------------
           TRAYECTO DESDE LA ÚLTIMA ACTIVIDAD
        ------------------------------------------------- */

        const routeHTML =
          createOvernightRouteHTML(
            option.fromPreviousActivity
          );


        /* -------------------------------------------------
           MAPS
        ------------------------------------------------- */

        const mapsButton =
          option.location
            ? createExternalLink(
                option.location.mapsUrl,
                "📍 Abrir camping en Maps"
              )
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
                    ⭐ RECOMENDADO
                  </div>
                `
                : ""
            }


            <p class="overnight-mood">
              ${option.mood || ""}
            </p>


            <h4>
              ${option.name || ""}
            </h4>


            ${
              option.description
                ? `
                  <p class="overnight-description">
                    ${option.description}
                  </p>
                `
                : ""
            }


            ${tagsHTML}


            ${priceHTML}


            ${routeHTML}


            ${
              mapsButton
                ? `
                  <div class="activity-actions">
                    ${mapsButton}
                  </div>
                `
                : ""
            }


            ${notesHTML}

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
          Elegimos según la hora, el cansancio y cómo haya ido el día.
          La opción recomendada es una referencia, no una obligación.
        </p>

      </div>


      <div class="overnight-grid">
        ${optionsHTML}
      </div>


      <button
        class="all-campsites-button"
        type="button"
        data-day="${day.id}"
      >
        ⛺ Ver campings en el mapa
      </button>

    </section>

  `;
}


/* =========================================================
   PRECIO DE CAMPING
========================================================= */

function createCampingPriceHTML(price) {

  if (!price) {
    return "";
  }


  const rows = [];


  /* -------------------------------------------------------
     ADULTO
  ------------------------------------------------------- */

  if (
    price.iskAdult !== undefined ||
    price.adultISK !== undefined
  ) {

    const isk =
      price.iskAdult ??
      price.adultISK;

    const eur =
      price.eurAdult ??
      price.adultEUR;


    rows.push(`

      <div class="camping-price-row">

        <span>
          👤 Adulto
        </span>

        <strong>
          ${
            eur !== undefined
              ? `≈ ${eur} €`
              : formatISK(isk)
          }
        </strong>

        ${
          eur !== undefined
            ? `
              <small>
                ${formatISK(isk)}
              </small>
            `
            : ""
        }

      </div>

    `);

  }


  /* -------------------------------------------------------
     CAMPER / UNIDAD / VEHÍCULO
  ------------------------------------------------------- */

  const vehicleISK =
    price.iskVehicle ??
    price.vehicleISK ??
    price.iskUnit ??
    price.unitISK;


  const vehicleEUR =
    price.eurVehicle ??
    price.vehicleEUR ??
    price.eurUnit ??
    price.unitEUR;


  if (vehicleISK !== undefined) {

    rows.push(`

      <div class="camping-price-row">

        <span>
          🚐 Camper
        </span>

        <strong>
          ${
            vehicleEUR !== undefined
              ? `≈ ${vehicleEUR} €`
              : formatISK(vehicleISK)
          }
        </strong>

        ${
          vehicleEUR !== undefined
            ? `
              <small>
                ${formatISK(vehicleISK)}
              </small>
            `
            : ""
        }

      </div>

    `);

  }


  /* -------------------------------------------------------
     ELECTRICIDAD
  ------------------------------------------------------- */

  const electricityISK =
    price.iskElectricity ??
    price.electricityISK;


  const electricityEUR =
    price.eurElectricity ??
    price.electricityEUR;


  if (electricityISK !== undefined) {

    rows.push(`

      <div class="camping-price-row">

        <span>
          ⚡ Electricidad
        </span>

        <strong>
          ${
            electricityEUR !== undefined
              ? `≈ ${electricityEUR} €`
              : formatISK(electricityISK)
          }
        </strong>

        ${
          electricityEUR !== undefined
            ? `
              <small>
                ${formatISK(electricityISK)}
              </small>
            `
            : ""
        }

      </div>

    `);

  }


  /* -------------------------------------------------------
     TOTAL FAMILIAR ESTIMADO
  ------------------------------------------------------- */

  const familyTotal =
    price.estimatedFamilyEurWithoutElectricity ??
    price.estimatedFamilyEur;


  const familyLabel =
    price.estimatedFamilyEurWithoutElectricity !== undefined
      ? "TOTAL 5 · SIN ELECTRICIDAD"
      : "TOTAL FAMILIA APROX.";


  return `

    <div class="camping-price-card">

      <div class="camping-price-title">
        💰 PRECIO
      </div>


      ${rows.join("")}


      ${
        familyTotal !== undefined
          ? `
            <div class="camping-family-total">

              <span>
                ${familyLabel}
              </span>

              <strong>
                ≈ ${formatNumber(familyTotal)} €
              </strong>

            </div>
          `
          : ""
      }

    </div>

  `;
}


/* =========================================================
   TRAYECTO HACIA UN CAMPING
========================================================= */

function createOvernightRouteHTML(route) {

  if (!route) {
    return "";
  }


  const roadsHTML =
    (route.roads || [])
      .map(road => `
        <span class="road-number">
          ${road}
        </span>
      `)
      .join("");


  const directionsHTML =
    (route.offlineDirections || [])
      .map((direction, index) => `
        <li>

          <strong>
            ${index + 1}.
          </strong>

          ${direction}

        </li>
      `)
      .join("");


  return `

    <div class="overnight-route">

      <div class="overnight-route-title">

        <span>
          🚐
        </span>

        <div>

          <small>
            DESDE ${route.from || "ÚLTIMA PARADA"}
          </small>

          <strong>
            Trayecto al camping
          </strong>

        </div>

      </div>


      <div class="overnight-route-stats">

        ${
          route.km !== undefined
            ? `
              <span>
                🛣️ ${route.km} km
              </span>
            `
            : ""
        }

        ${
          route.minutes !== undefined
            ? `
              <span>
                ⏱️ ${formatMinutes(route.minutes)}
              </span>
            `
            : ""
        }

      </div>


      ${
        roadsHTML
          ? `
            <div class="drive-roads">

              <strong>
                Carreteras
              </strong>

              <div>
                ${roadsHTML}
              </div>

            </div>
          `
          : ""
      }


      <div class="drive-actions">

        ${
          createExternalLink(
            route.mapsUrl,
            "📍 Ruta en Maps",
            "drive-action"
          )
        }


        ${
          directionsHTML
            ? `
              <button
                type="button"
                class="drive-action overnight-offline-button"
              >
                🧭 Cómo llegar sin conexión
              </button>
            `
            : ""
        }

      </div>


      ${
        directionsHTML
          ? `
            <div class="overnight-offline-route hidden">

              <div class="offline-route-header">

                <strong>
                  🧭 Ruta sin conexión
                </strong>

                <span>
                  Desde ${route.from || "la última parada"}
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

  `;
}


/* =========================================================
   TIMELINE DEL DÍA
========================================================= */

function createTimelineHTML(day) {

  if (
    !day.activities ||
    day.activities.length === 0
  ) {

    return `

      <div class="empty-day">

        <span>
          🧭
        </span>

        <p>
          Todavía no hemos añadido actividades para este día.
        </p>

      </div>

    `;

  }


  return day.activities
    .map(item => {

      if (item.type === "drive") {

        return createDriveHTML(item);

      }


      return createActivityHTML(item);

    })
    .join("");
}


/* =========================================================
   HERO DEL DÍA
========================================================= */

function createHeroHTML(day) {

  const statsHTML =
    (day.stats || [])
      .map(stat => `

        <div class="stat">

          <strong>
            ${stat.value}
          </strong>

          <span>
            ${stat.label}
          </span>

        </div>

      `)
      .join("");


  return `

    <section class="hero">

      <span class="giant-number">
        ${String(day.id).padStart(2, "0")}
      </span>


      <div class="hero-content">

        <p class="eyebrow">
          DÍA ${String(day.id).padStart(2, "0")}
          ·
          ${day.date}
        </p>


        <h2>
          ${day.title}
        </h2>


        <p class="intro">
          ${day.intro || ""}
        </p>


        ${
          statsHTML
            ? `
              <div class="stats">
                ${statsHTML}
              </div>
            `
            : ""
        }


        <div class="day-actions">

          <button
            class="day-route-button"
            data-day="${day.id}"
            type="button"
          >
            🗺️ Ver ruta del día
          </button>

        </div>

      </div>

    </section>

  `;
}


/* =========================================================
   RENDERIZAR UN DÍA COMPLETO
========================================================= */

function renderDay(day) {

  if (!day) {
    return;
  }


  const heroHTML =
    createHeroHTML(day);


  const budgetHTML =
    createBudgetSummaryHTML(day);


  const timelineHTML =
    createTimelineHTML(day);


  const overnightHTML =
    createOvernightOptionsHTML(day);


  content.innerHTML = `

    ${heroHTML}


    ${budgetHTML}


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
        ${timelineHTML}
      </div>

    </section>


    ${overnightHTML}

  `;


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   CAMBIAR BOTÓN ACTIVO
========================================================= */

function setActiveDay(selectedButton) {

  dayButtons.forEach(button => {

    button.classList.remove("active");

  });


  if (selectedButton) {

    selectedButton.classList.add("active");

  }

}


/* =========================================================
   NAVEGACIÓN ENTRE DÍAS
========================================================= */

dayButtons.forEach((button, index) => {

  button.addEventListener("click", () => {

    /*
      MAPA no corresponde a tripDays.
    */

    if (
      button.classList.contains("map-tab")
    ) {
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
   ABRIR MAPA DE UN DÍA
========================================================= */

function openDayMap(dayId) {

  const selectedDay =
    tripDays.find(day =>
      day.id === dayId
    );


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
    document.querySelectorAll(
      ".map-filter"
    );


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

    if (
      typeof map !== "undefined"
    ) {

      map.invalidateSize();

    }


    if (
      typeof drawDayRoute === "function"
    ) {

      drawDayRoute(selectedDay);

    }

  }, 150);

}


/* =========================================================
   ABRIR MAPA DE CAMPINGS
========================================================= */

function openCampingsMap(dayId = null) {

  dayButtons.forEach(button => {

    button.classList.remove("active");

  });


  mapButton.classList.add("active");


  content.classList.add("hidden");

  mapSection.classList.remove("hidden");


  const mapFilters =
    document.querySelectorAll(
      ".map-filter"
    );


  mapFilters.forEach(button => {

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

    if (
      typeof map !== "undefined"
    ) {

      map.invalidateSize();

    }


    /*
      map.js nuevo podrá aceptar opcionalmente
      un dayId.

      Si todavía tenemos el map.js antiguo,
      simplemente intentamos drawCampings().
    */

    if (
      typeof drawCampings === "function"
    ) {

      drawCampings(dayId);

    }

  }, 150);

}


/* =========================================================
   BOTÓN MAPA GENERAL
========================================================= */

mapButton.addEventListener("click", () => {

  /* Quitamos active de toda la navegación */
  dayButtons.forEach(button => {

    button.classList.remove("active");

  });


  /* Activamos MAPA */
  mapButton.classList.add("active");


  /* Ocultamos itinerario */
  content.classList.add("hidden");


  /* Mostramos mapa */
  mapSection.classList.remove("hidden");


  /* -------------------------------------------------------
     ACTIVAR FILTRO TODO
  ------------------------------------------------------- */

  const mapFilters =
    document.querySelectorAll(
      ".map-filter"
    );


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


  /* -------------------------------------------------------
     DIBUJAR TODO
  ------------------------------------------------------- */

  setTimeout(() => {

    if (
      typeof map !== "undefined"
    ) {

      map.invalidateSize();

    }


    if (
      typeof drawAllRoutes === "function"
    ) {

      drawAllRoutes();

    }

  }, 150);

});


/* =========================================================
   DELEGACIÓN DE EVENTOS

   Muchos botones se crean dinámicamente cuando renderDay()
   genera el contenido.

   Por eso escuchamos los clics desde .content.
========================================================= */

content.addEventListener("click", event => {


  /* =======================================================
     VER RUTA DEL DÍA
  ======================================================= */

  const dayRouteButton =
    event.target.closest(
      ".day-route-button"
    );


  if (dayRouteButton) {

    const dayId =
      Number(
        dayRouteButton.dataset.day
      );


    openDayMap(dayId);

    return;

  }


  /* =======================================================
     VER CAMPINGS EN MAPA
  ======================================================= */

  const campsitesButton =
    event.target.closest(
      ".all-campsites-button"
    );


  if (campsitesButton) {

    const dayId =
      campsitesButton.dataset.day
        ? Number(
            campsitesButton.dataset.day
          )
        : null;


    openCampingsMap(dayId);

    return;

  }


  /* =======================================================
     MOSTRAR / OCULTAR DETALLES

     💡 información
     ⚠️ seguridad
     ⭐ nuestro plan
  ======================================================= */

  const detailsButton =
    event.target.closest(
      ".details-toggle"
    );


  if (detailsButton) {

    const wrapper =
      detailsButton.closest(
        ".details-wrapper"
      );


    if (!wrapper) {
      return;
    }


    const detailsContent =
      wrapper.querySelector(
        ".details-content"
      );


    if (!detailsContent) {
      return;
    }


    detailsContent.classList.toggle(
      "hidden"
    );


    const isHidden =
      detailsContent.classList.contains(
        "hidden"
      );


    detailsButton.textContent =
      isHidden
        ? "ℹ️ Ver detalles"
        : "✕ Ocultar detalles";


    return;

  }


  /* =======================================================
     RUTA OFFLINE · TRAYECTOS NORMALES
  ======================================================= */

  const offlineButton =
    event.target.closest(
      ".offline-route-button"
    );


  if (offlineButton) {

    const driveCard =
      offlineButton.closest(
        ".drive-card"
      );


    if (!driveCard) {
      return;
    }


    const offlineRoute =
      driveCard.querySelector(
        ".offline-route"
      );


    if (!offlineRoute) {
      return;
    }


    offlineRoute.classList.toggle(
      "hidden"
    );


    const isHidden =
      offlineRoute.classList.contains(
        "hidden"
      );


    offlineButton.textContent =
      isHidden
        ? "🧭 Cómo llegar sin conexión"
        : "✕ Cerrar ruta sin conexión";


    return;

  }


  /* =======================================================
     RUTA OFFLINE · CAMPINGS

     Esto permite tener:

     Sky Lagoon
          ↓
     Reykjavík Eco

     Sky Lagoon
          ↓
     Mosskógar

     Sky Lagoon
          ↓
     Nyrðri Leirar

     y lo mismo en las demás noches.
  ======================================================= */

  const overnightOfflineButton =
    event.target.closest(
      ".overnight-offline-button"
    );


  if (overnightOfflineButton) {

    const overnightRoute =
      overnightOfflineButton.closest(
        ".overnight-route"
      );


    if (!overnightRoute) {
      return;
    }


    const offlineContent =
      overnightRoute.querySelector(
        ".overnight-offline-route"
      );


    if (!offlineContent) {
      return;
    }


    offlineContent.classList.toggle(
      "hidden"
    );


    const isHidden =
      offlineContent.classList.contains(
        "hidden"
      );


    overnightOfflineButton.textContent =
      isHidden
        ? "🧭 Cómo llegar sin conexión"
        : "✕ Cerrar ruta sin conexión";


    return;

  }

});


/* =========================================================
   ACTUALIZAR TEXTOS DE LOS BOTONES SUPERIORES

   Si data.js tiene navDate:

   Día 1 → MIÉ 9
   Día 2 → JUE 10
   etc.

   lo utilizamos automáticamente.
========================================================= */

function updateNavigationLabels() {

  const itineraryButtons =
    Array.from(dayButtons)
      .filter(button =>
        !button.classList.contains(
          "map-tab"
        )
      );


  itineraryButtons.forEach(
    (button, index) => {

      const day =
        tripDays[index];


      if (
        !day ||
        !day.navDate
      ) {
        return;
      }


      /*
        Si el HTML del botón tiene:

        <span>DÍA 1</span>
        <small>MIÉ 9</small>

        actualizamos el <small>.

        Si no existe, no rompemos nada.
      */

      const small =
        button.querySelector("small");


      if (small) {

        small.textContent =
          day.navDate;

      }

    }
  );

}


/* =========================================================
   COMPROBAR DATOS

   Nos ayuda a detectar errores en data.js sin que
   la web explote silenciosamente.
========================================================= */

function validateTripData() {

  if (
    typeof tripDays === "undefined"
  ) {

    console.error(
      "❌ tripDays no existe. Revisa que data.js cargue antes que app.js."
    );

    return false;

  }


  if (
    !Array.isArray(tripDays)
  ) {

    console.error(
      "❌ tripDays debe ser un array."
    );

    return false;

  }


  if (
    tripDays.length === 0
  ) {

    console.error(
      "❌ No hay días en tripDays."
    );

    return false;

  }


  tripDays.forEach(day => {

    if (!day.id) {

      console.warn(
        "⚠️ Hay un día sin id:",
        day
      );

    }


    if (!day.title) {

      console.warn(
        `⚠️ Día ${day.id} sin título.`
      );

    }


    if (
      !Array.isArray(
        day.activities
      )
    ) {

      console.warn(
        `⚠️ Día ${day.id} no tiene activities como array.`
      );

    }

  });


  return true;

}


/* =========================================================
   CARGA INICIAL
========================================================= */

function initialiseApp() {

  const validData =
    validateTripData();


  if (!validData) {

    content.innerHTML = `

      <div class="app-error">

        <h2>
          ⚠️ No se pudo cargar el itinerario
        </h2>

        <p>
          Revisa la consola del navegador.
          Probablemente existe un error de sintaxis
          en data.js.
        </p>

      </div>

    `;

    return;

  }


  /* Actualizamos fechas de navegación */
  updateNavigationLabels();


  /* -------------------------------------------------------
     DÍA INICIAL
  ------------------------------------------------------- */

  const firstDay =
    tripDays[0];


  renderDay(firstDay);


  /* -------------------------------------------------------
     MARCAR DÍA 1 COMO ACTIVO

     Buscamos el primer botón que NO sea MAPA.
  ------------------------------------------------------- */

  const firstDayButton =
    Array.from(dayButtons)
      .find(button =>
        !button.classList.contains(
          "map-tab"
        )
      );


  if (firstDayButton) {

    setActiveDay(
      firstDayButton
    );

  }


  console.log(
    "🏝️ ISLANDIA 2026 lista."
  );

}


/* =========================================================
   INICIAR
========================================================= */

initialiseApp();
