document.addEventListener("DOMContentLoaded", function () {
  // Manejador del Selector de Idioma
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.addEventListener("change", function (event) {
      applyTranslations(event.target.value);
    });
  }

  // Iniciar Contador Regresivo
  setupCountdown();

  // Formulario Newsletter
  const newsForm = document.getElementById("newsletterForm");
  if (newsForm) {
    newsForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("¡Gracias por suscribirte a La Copa!");
      document.getElementById("emailInput").value = "";
    });
  }
});

function applyTranslations(lang) {
  if (typeof translations === "undefined" || !translations[lang]) return;

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

function setupCountdown() {
  const targetDate = new Date(2026, 5, 11, 15, 0, 0).getTime();

  function update() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const dEl = document.getElementById("days");
    const hEl = document.getElementById("hours");
    const mEl = document.getElementById("minutes");
    const sEl = document.getElementById("seconds");

    if (dEl) dEl.textContent = String(days).padStart(2, "0");
    if (hEl) hEl.textContent = String(hours).padStart(2, "0");
    if (mEl) mEl.textContent = String(minutes).padStart(2, "0");
    if (sEl) sEl.textContent = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}