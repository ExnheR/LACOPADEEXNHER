document.addEventListener("DOMContentLoaded", () => {
    // --- 1. CONTADOR PARA EL MUNDIAL 2030 ---
    function updateCountdown() {
        const targetDate = new Date("2030-06-13T00:00:00").getTime();
        const now = new Date().getTime();
        const gap = targetDate - now;

        if (gap <= 0) return;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(gap / day);
        const hours = Math.floor((gap % day) / hour);
        const minutes = Math.floor((gap % hour) / minute);
        const seconds = Math.floor((gap % minute) / second);

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (daysEl) daysEl.innerText = days;
        if (hoursEl) hoursEl.innerText = hours < 10 ? "0" + hours : hours;
        if (minutesEl) minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
        if (secondsEl) secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // --- 2. LÓGICA DEL SELECTOR DE IDIOMAS ---
    const translations = {
      es: {
        siteTitle: "La Copa 2026",
        siteSub: "Portal informativo e histórico de la Copa Mundial de la FIFA 2026",
        navInicio: "Inicio",
        navGrupos: "Grupos",
        navCiudades: "Ciudades",
        navEstadios: "Estadios",
        navResultados: "Resultados",
        navFaseFinal: "Fase Final",
        navMundial2030: "Mundial 2030",
        navFaq: "FAQ",
        heroTitle: "¡España, campeona de la Copa Mundial de la FIFA 2026!",
        heroDesc: "España se consagró como el equipo ganador del Mundial 2026 tras un partido cerrado con resultado 1-0 frente a Argentina, destacando su defensa y efectividad ofensiva. El torneo histórico, organizado por Canadá, Estados Unidos y México, fue el primero en contar con 48 selecciones.",
        countdownTitle: "Cuenta regresiva para la Copa Mundial de la FIFA 2030:",
        lblDays: "Días",
        lblHours: "Horas",
        lblMinutes: "Minutos",
        lblSeconds: "Segundos",
        secGroupsTitle: "Estructura de Grupos del Torneo",
        secGroupsDesc: "El Mundial 2026 contó con 48 selecciones distribuidas en 12 grupos de cuatro equipos.",
        btnSeeGroups: "Ver los 12 grupos del Mundial",
        secResTitle: "Resultados de Partidos - Fases Previas",
        secResDesc: "Marcadores oficiales de los encuentros disputados en la fase de grupos y rondas eliminatorias.",
        btnSeeFinal: "Ver fase final completa",
        secCitiesTitle: "Sedes Oficiales Destacadas",
        secCitiesDesc: "El torneo se disputó en 16 ciudades de Canadá, Estados Unidos y México.",
        btnSeeCities: "Explorar las 16 sedes oficiales",
        secStadiumsTitle: "Estadios Principales",
        secStadiumsDesc: "Los recintos deportivos más emblemáticos de la competición.",
        btnSeeStadiums: "Ver los 16 estadios oficiales",
        secFinalTitle: "Fase Final y Cuadro de Honor",
        secFinalDesc: "Resultados de los encuentros decisivos que definieron al campeón del mundo.",
        sec2030Title: "Camino al Centenario: Mundial 2030",
        sec2030Desc: "La próxima Copa Mundial celebrará los 100 años de la primera edición disputada en Uruguay.",
        card20301Title: "Países Anfitriones Principales",
        card20301Desc: "Estos países albergarán la mayor parte de los encuentros del Mundial 2030.",
        card20302Title: "Partidos Conmemorativos",
        card20302Desc: "Estos países recibirán partidos especiales relacionados con la celebración del centenario.",
        secFaqTitle: "Preguntas Frecuentes",
        
        faqQ1: "¿Quién ganó la Copa Mundial de la FIFA 2026?",
        faqA1: "España se coronó campeona tras vencer 1-0 a Argentina en la gran final disputada el 19 de julio de 2026.",
        faqQ2: "¿Quién quedó en tercer lugar?",
        faqA2: "Inglaterra obtuvo el tercer puesto tras imponerse 6-4 en la tanda de penales ante Francia el 18 de julio de 2026.",
        faqQ3: "¿Cómo avanzaron los finalistas a la definición?",
        faqA3: "España venció 2-0 a Francia en semifinales, mientras que Argentina superó 2-1 a Inglaterra.",
        faqQ4: "¿Cuántas selecciones participaron?",
        faqA4: "La Copa Mundial de la FIFA 2026 fue la primera edición con 48 selecciones participantes.",
        faqQ5: "¿Dónde se jugará el Mundial 2030?",
        faqA5: "España, Portugal y Marruecos serán los anfitriones principales. Además, Uruguay, Argentina y Paraguay recibirán encuentros conmemorativos.",

        secSponsorsTitle: "Socios y Patrocinadores",
        footerCopy: "&copy; 2026 La Copa - Portal informativo no oficial.",
        footerCredits: "Desarrollado por Exnher Jse Sánchez Fragozo y Mady Pérez."
      },
      en: {
        siteTitle: "The Cup 2026",
        siteSub: "Informative and historical portal of the 2026 FIFA World Cup",
        navInicio: "Home",
        navGrupos: "Groups",
        navCiudades: "Cities",
        navEstadios: "Stadiums",
        navResultados: "Results",
        navFaseFinal: "Final Stage",
        navMundial2030: "2030 World Cup",
        navFaq: "FAQ",
        heroTitle: "Spain, champions of the 2026 FIFA World Cup!",
        heroDesc: "Spain was crowned the winning team of the 2026 World Cup after a tight 1-0 match against Argentina, highlighting their defense and offensive effectiveness. The historic tournament, organized by Canada, the United States, and Mexico, was the first to feature 48 teams.",
        countdownTitle: "Countdown to the 2030 FIFA World Cup:",
        lblDays: "Days",
        lblHours: "Hours",
        lblMinutes: "Minutes",
        lblSeconds: "Seconds",
        secGroupsTitle: "Tournament Group Structure",
        secGroupsDesc: "The 2026 World Cup featured 48 teams distributed into 12 groups of four teams.",
        btnSeeGroups: "View all 12 World Cup groups",
        secResTitle: "Match Results - Previous Stages",
        secResDesc: "Official scores of matches played in the group stage and knockout rounds.",
        btnSeeFinal: "View complete final stage",
        secCitiesTitle: "Featured Official Host Cities",
        secCitiesDesc: "The tournament was played across 16 cities in Canada, the United States, and Mexico.",
        btnSeeCities: "Explore the 16 official host cities",
        secStadiumsTitle: "Main Stadiums",
        secStadiumsDesc: "The most emblematic sports venues of the competition.",
        btnSeeStadiums: "View the 16 official stadiums",
        secFinalTitle: "Final Stage & Honors Board",
        secFinalDesc: "Results of the decisive matches that defined the world champion.",
        sec2030Title: "Road to the Centenary: 2030 World Cup",
        sec2030Desc: "The next World Cup will celebrate 100 years since the first edition held in Uruguay.",
        card20301Title: "Main Host Countries",
        card20301Desc: "These countries will host the majority of the 2030 World Cup matches.",
        card20302Title: "Commemorative Matches",
        card20302Desc: "These countries will receive special matches related to the celebration of the centenary.",
        secFaqTitle: "Frequently Asked Questions",
        
        faqQ1: "Who won the 2026 FIFA World Cup?",
        faqA1: "Spain was crowned champion after beating Argentina 1-0 in the grand final played on July 19, 2026.",
        faqQ2: "Who finished in third place?",
        faqA2: "England claimed third place after winning 6-4 on penalties against France on July 18, 2026.",
        faqQ3: "How did the finalists advance?",
        faqA3: "Spain beat France 2-0 in the semifinals, while Argentina overcame England 2-1.",
        faqQ4: "How many teams participated?",
        faqA4: "The 2026 FIFA World Cup was the first edition with 48 participating teams.",
        faqQ5: "Where will the 2030 World Cup be played?",
        faqA5: "Spain, Portugal, and Morocco will be the main hosts. Additionally, Uruguay, Argentina, and Paraguay will host commemorative matches.",

        secSponsorsTitle: "Partners and Sponsors",
        footerCopy: "&copy; 2026 The Cup - Unofficial informative portal.",
        footerCredits: "Developed by Exnher Jse Sánchez Fragozo and Mady Pérez."
      }
    };

    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        const t = translations[lang];
        if (!t) return;

        document.getElementById('site-title').innerText = t.siteTitle;
        document.getElementById('site-sub').innerText = t.siteSub;
        document.getElementById('nav-inicio').innerText = t.navInicio;
        document.getElementById('nav-grupos').innerText = t.navGrupos;
        document.getElementById('nav-ciudades').innerText = t.navCiudades;
        document.getElementById('nav-estadios').innerText = t.navEstadios;
        document.getElementById('nav-resultados').innerText = t.navResultados;
        document.getElementById('nav-fasefinal').innerText = t.navFaseFinal;
        document.getElementById('nav-mundial2030').innerText = t.navMundial2030;
        document.getElementById('nav-faq').innerText = t.navFaq;
        document.getElementById('hero-title').innerText = t.heroTitle;
        document.getElementById('hero-desc').innerText = t.heroDesc;
        document.getElementById('countdown-title').innerText = t.countdownTitle;
        document.getElementById('lbl-days').innerText = t.lblDays;
        document.getElementById('lbl-hours').innerText = t.lblHours;
        document.getElementById('lbl-minutes').innerText = t.lblMinutes;
        document.getElementById('lbl-seconds').innerText = t.lblSeconds;
        document.getElementById('sec-groups-title').innerText = t.secGroupsTitle;
        document.getElementById('sec-groups-desc').innerText = t.secGroupsDesc;
        document.getElementById('btn-see-groups').innerText = t.btnSeeGroups;
        document.getElementById('sec-res-title').innerText = t.secResTitle;
        document.getElementById('sec-res-desc').innerText = t.secResDesc;
        document.getElementById('btn-see-final').innerText = t.btnSeeFinal;
        document.getElementById('sec-cities-title').innerText = t.secCitiesTitle;
        document.getElementById('sec-cities-desc').innerText = t.secCitiesDesc;
        document.getElementById('btn-see-cities').innerText = t.btnSeeCities;
        document.getElementById('sec-stadiums-title').innerText = t.secStadiumsTitle;
        document.getElementById('sec-stadiums-desc').innerText = t.secStadiumsDesc;
        document.getElementById('btn-see-stadiums').innerText = t.btnSeeStadiums;
        document.getElementById('sec-final-title').innerText = t.secFinalTitle;
        document.getElementById('sec-final-desc').innerText = t.secFinalDesc;
        document.getElementById('sec-2030-title').innerText = t.sec2030Title;
        document.getElementById('sec-2030-desc').innerText = t.sec2030Desc;
        document.getElementById('card-2030-1-title').innerText = t.card20301Title;
        document.getElementById('card-2030-1-desc').innerText = t.card20301Desc;
        document.getElementById('card-2030-2-title').innerText = t.card20302Title;
        document.getElementById('card-2030-2-desc').innerText = t.card20302Desc;
        document.getElementById('sec-faq-title').innerText = t.secFaqTitle;
        
        // Actualizar FAQ
        document.getElementById('faq-q1').innerText = t.faqQ1;
        document.getElementById('faq-a1').innerText = t.faqA1;
        document.getElementById('faq-q2').innerText = t.faqQ2;
        document.getElementById('faq-a2').innerText = t.faqA2;
        document.getElementById('faq-q3').innerText = t.faqQ3;
        document.getElementById('faq-a3').innerText = t.faqA3;
        document.getElementById('faq-q4').innerText = t.faqQ4;
        document.getElementById('faq-a4').innerText = t.faqA4;
        document.getElementById('faq-q5').innerText = t.faqQ5;
        document.getElementById('faq-a5').innerText = t.faqA5;

        document.getElementById('sec-sponsors-title').innerText = t.secSponsorsTitle;
        document.getElementById('footer-copy').innerHTML = t.footerCopy;
        document.getElementById('footer-credits').innerText = t.footerCredits;
      });
    }
});