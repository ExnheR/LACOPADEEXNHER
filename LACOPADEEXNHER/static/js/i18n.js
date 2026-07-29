// =====================================
// LANGUAGE SWITCHER
// =====================================
// Para agregar un idioma nuevo:
// 1. Agrega el bloque en static/data/translations.json (ej. "de": {...})
// 2. Agrega una línea en SUPPORTED_LANGS abajo
// Nada más necesita cambiar.

const SUPPORTED_LANGS = {
    en: "English",
    es: "Español",
    fr: "Français",
    pt: "Português"
};

let translations = {};

function applyLanguage(lang) {

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");

        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;
    localStorage.setItem("preferredLang", lang);
}

function buildLanguageSwitcher() {

    const selector = document.getElementById("lang-switcher");

    if (!selector) return;

    Object.entries(SUPPORTED_LANGS).forEach(([code, label]) => {
        const opt = document.createElement("option");
        opt.value = code;
        opt.textContent = label;
        selector.appendChild(opt);
    });

    selector.addEventListener("change", (e) => {
        applyLanguage(e.target.value);
    });
}

fetch("static/data/translations.json")
    .then(res => res.json())
    .then(data => {

        translations = data;
        buildLanguageSwitcher();

        const saved = localStorage.getItem("preferredLang") || "en";
        const selector = document.getElementById("lang-switcher");

        if (selector) selector.value = saved;

        applyLanguage(saved);

    })
    .catch(err => console.error("Error cargando traducciones:", err));