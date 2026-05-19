/* ===================================================
   JEANNETTE DIALLO — PORTFOLIO SCRIPT v4
   • Scroll reveal INFINI  (ajout ET retrait de .visible)
   • Bouton Scroll-to-Top  (apparaît / disparaît)
   • Hover emojis intérêts (CSS géré, rien à faire ici)
   • Bilingue FR/EN + globe spin + gold flash
   • Navbar scroll · Hamburger ↔ ✕ · Nav active
   =================================================== */

// ─────────────────────────────────────────────────
//  TRANSLATIONS
// ─────────────────────────────────────────────────
const i18n = {
    fr: {
        "nav.about": "À Propos",
        "nav.exp": "Expériences",
        "nav.edu": "Formations",
        "nav.skills": "Compétences",
        "nav.contact": "Contact",

        "hero.eyebrow": "Ingénieure Informatique · Génie Logiciel",
        "hero.title": "De l'idée à l'interface.",
        "hero.cta": "Voir mes expériences",
        "hero.contact": "Me contacter",

        "about.lead":
            "Ingénieure en informatique spécialisée en génie logiciel, passionnée par les projets innovants et le travail en équipe.",
        "about.body":
            "Je fais preuve d'un esprit positif, d'une grande motivation et d'une volonté constante d'apprendre. Je m'adapte facilement aux environnements techniques variés et j'aime contribuer à des projets concrets et impactants.",
        "about.location": "Localisation",
        "about.phone": "Téléphone / Whatsapp",
        "about.languages": "Langues",
        "about.langVal": "Français (natif) · Anglais (pré-intermédiaire)",
        "about.interests": "Centres d'intérêt",

        "int.reading": "Lecture",
        "int.hiking": "Randonnée",

        "exp.stock.date": "Juillet 2025 – Présent",
        "exp.stock.title": "Gestionnaire de Stock",
        "exp.stock.company": "Rema TipTop, Guinée",
        "exp.stock.b1": "Gestion et suivi des entrées et sorties de stock.",
        "exp.stock.b2": "Contrôle des niveaux de stock.",
        "exp.stock.b3":
            "Organisation et réalisation des inventaires périodiques.",
        "exp.stock.b4":
            "Vérification de la conformité des produits (quantité et qualité).",

        "exp.web.date": "Avr – Juin 2024",
        "exp.web.company": "Orange, Guinée",
        "exp.web.title": "Stage – Développement Web",
        "exp.web.b1":
            "Participation à la création de pages pour une plateforme interne de type bibliothèque numérique.",
        "exp.web.b2":
            "Apprentissage rapide d'Angular en autonomie pour répondre aux besoins du projet.",
        "exp.web.b3":
            "Collaboration avec l'équipe technique pour la cohérence visuelle et fonctionnelle.",

        "exp.pfe.date": "Mars – Août 2023",
        "exp.pfe.title": "Stage PFE – Projet de Fin d'Études",
        "exp.pfe.b1":
            "Analyse de l'architecture d'un SaaS e-commerce automobile (Symfony, Nuxt.js, CMS, API).",
        "exp.pfe.b2": "Documentation technique sur Notion.",
        "exp.pfe.b3":
            "Réalisation d'un site de location de véhicules au Maroc.",

        "exp.eng.date": "Juil – Sept 2022",
        "exp.eng.title": "Stage – Ingénieur d'Étude",
        "exp.eng.b1": "Réalisation du cahier des charges.",
        "exp.eng.b2":
            "Modélisation UML et wireframing (maquette fonctionnelle).",
        "exp.eng.b3": "Développement du nouveau site web pour l'entreprise.",

        "exp.tech.date": "Août – Sept 2021",
        "exp.tech.title": "Stage – Technicien Informatique",
        "exp.tech.company": "CBG, Guinée",
        "exp.tech.b1": "Observation du fonctionnement informatique interne.",
        "exp.tech.b2": "Maintenance informatique.",
        "exp.tech.b3": "Remplacement du responsable Helpdesk (2 semaines).",

        "edu.eng.degree": "Cycle Ingénieur – Génie Logiciel",
        "edu.eng.school": "École Polytechnique d'Agadir, Universiapolis",
        "edu.prep.degree": "Cycle Préparatoire – Informatique",
        "edu.prep.school": "École Polytechnique d'Agadir, Universiapolis",
        "edu.english.degree":
            "Cours d'anglais intensif – Niveau pré-intermédiaire",
        "edu.english.school": "École de langues, Ghana",
        "edu.certTitle": "Certifications",

        "cert.react": "Build a Website using React (2021–2022)",
        "cert.wireshark":
            "Wireshark for Basic Network Security Analysis (2021–2022)",
        "cert.android":
            "Build a Simple App in Android Studio with Java (2021–2022)",
        "cert.bigdata":
            "Introduction to Big Data with Spark and Hadoop (2021–2022)",

        "skills.web": "Développement Web",
        "skills.db": "Base de Données & Conception",
        "skills.os": "Systèmes d'Exploitation",
        "skills.tools": "Outils & Méthodes",

        "project.label": "Projet Personnel",
        "project.title": "Projet Feecra",
        "project.desc":
            "Création d'un site web de réservation de véhicules avec chauffeur au besoin. Élaboration du business model, conception de l'idée innovante et développement de la plateforme.",
        "project.t1": "Réservation de véhicules",
        "project.t2": "Business Model",
        "project.t3": "Web Development",

        "contact.tagline":
            "Toujours ouverte aux projets ambitieux et aux opportunités innovantes. Et si on créait la suite ensemble ?",
        "contact.location": "Kamsar, Guinée",
        "contact.linkedin": "Voir le profil LinkedIn",
        "contact.github": "Voir les projets GitHub",
        "footer.copy": "© 2025 Jeannette Diallo · Tous droits réservés",
    },

    en: {
        "nav.about": "About",
        "nav.exp": "Experience",
        "nav.edu": "Education",
        "nav.skills": "Skills",
        "nav.contact": "Contact",

        "hero.eyebrow": "Software Engineer · IT Graduate",
        "hero.title": "From idea to interface.",
        "hero.cta": "View My Experience",
        "hero.contact": "Get in Touch",

        "about.lead":
            "IT engineer specialising in software development, passionate about innovative projects and collaborative work.",
        "about.body":
            "I bring a positive mindset, strong motivation and a constant drive to learn. I adapt quickly to diverse technical environments and love contributing to meaningful, real-world projects.",
        "about.location": "Location",
        "about.phone": "Phone",
        "about.languages": "Languages",
        "about.langVal": "French (native) · English (pre-intermediate)",
        "about.interests": "Interests",

        "int.reading": "Reading",
        "int.hiking": "Hiking",

        "exp.stock.date": "July 2025 – Present",
        "exp.stock.title": "Stock Manager",
        "exp.stock.company": "Rema TipTop, Guinea",
        "exp.stock.b1": "Monitoring and tracking incoming and outgoing stock.",
        "exp.stock.b2": "Controlling stock levels.",
        "exp.stock.b3":
            "Organising and carrying out periodic inventory checks.",
        "exp.stock.b4": "Verifying product compliance (quantity and quality).",

        "exp.web.date": "Apr – Jun 2024",
        "exp.web.company": "Orange, Guinea",
        "exp.web.title": "Internship – Web Development",
        "exp.web.b1":
            "Contributed to building pages for an internal digital library platform.",
        "exp.web.b2":
            "Rapidly self-taught Angular to meet project requirements.",
        "exp.web.b3":
            "Collaborated with the technical team to ensure visual and functional consistency.",

        "exp.pfe.date": "Mar – Aug 2023",
        "exp.pfe.title": "Final-Year Project Internship (PFE)",
        "exp.pfe.b1":
            "Analysed the architecture of an automotive e-commerce SaaS (Symfony, Nuxt.js, CMS, API).",
        "exp.pfe.b2": "Produced technical documentation on Notion.",
        "exp.pfe.b3":
            "Developed a vehicle rental website for the Moroccan market.",

        "exp.eng.date": "Jul – Sep 2022",
        "exp.eng.title": "Internship – Study Engineer",
        "exp.eng.b1": "Drew up functional specifications.",
        "exp.eng.b2": "UML modelling and wireframing.",
        "exp.eng.b3": "Developed the company's new website.",

        "exp.tech.date": "Aug – Sep 2021",
        "exp.tech.title": "Internship – IT Technician",
        "exp.tech.company": "CBG, Guinea",
        "exp.tech.b1": "Observed internal IT operations.",
        "exp.tech.b2": "Hardware and software maintenance.",
        "exp.tech.b3": "Substituted for the Helpdesk manager for 2 weeks.",

        "edu.eng.degree": "Engineering Degree – Software Engineering",
        "edu.eng.school": "Polytechnic School of Agadir, Universiapolis",
        "edu.prep.degree": "Preparatory Cycle – Computer Science",
        "edu.prep.school": "Polytechnic School of Agadir, Universiapolis",
        "edu.english.degree":
            "Intensive English Course – Pre-Intermediate Level",
        "edu.english.school": "Language School, Ghana",
        "edu.certTitle": "Certifications",

        "cert.react": "Build a Website using React (2021–2022)",
        "cert.wireshark":
            "Wireshark for Basic Network Security Analysis (2021–2022)",
        "cert.android":
            "Build a Simple App in Android Studio with Java (2021–2022)",
        "cert.bigdata":
            "Introduction to Big Data with Spark and Hadoop (2021–2022)",

        "skills.web": "Web Development",
        "skills.db": "Database & Design",
        "skills.os": "Operating Systems",
        "skills.tools": "Tools & Methods",

        "project.label": "Personal Project",
        "project.title": "Project Feecra",
        "project.desc":
            "Built a vehicle booking platform with optional chauffeur service. Developed the business model, conceived the innovative idea and built the web platform.",
        "project.t1": "Vehicle Booking",
        "project.t2": "Business Model",
        "project.t3": "Web Development",

        "contact.tagline":
            "Always open to ambitious projects and innovative opportunities. Let's build the future together!",
        "contact.location": "Kamsar, Guinea",
        "contact.linkedin": "View LinkedIn profile",
        "contact.github": "View GitHub projects",
        "footer.copy": "© 2025 Jeannette Diallo · All rights reserved",
    },
};

// ─────────────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────────────
let currentLang = "fr";

// ─────────────────────────────────────────────────
//  APPLY TRANSLATIONS
// ─────────────────────────────────────────────────
function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
    });
    document.documentElement.lang = lang;
    document.getElementById("langLabel").textContent =
        lang === "fr" ? "EN" : "FR";
}

// ─────────────────────────────────────────────────
//  LANG TOGGLE  — globe spin + gold flash
// ─────────────────────────────────────────────────
const langBtn = document.getElementById("langBtn");

langBtn.addEventListener("click", () => {
    langBtn.classList.add("spinning");
    setTimeout(() => {
        currentLang = currentLang === "fr" ? "en" : "fr";
        applyLang(currentLang);
        langBtn.classList.remove("spinning");
        langBtn.classList.add("switched");
        setTimeout(() => langBtn.classList.remove("switched"), 460);
    }, 285);
});

// ─────────────────────────────────────────────────
//  NAVBAR SCROLL
// ─────────────────────────────────────────────────
const navWrapper = document.querySelector(".nav-wrapper");

function onScroll() {
    navWrapper.classList.toggle("scrolled", window.scrollY > 30);
    // Scroll-to-top visibility (voir plus bas)
    scrollTopBtn.classList.toggle("show", window.scrollY > 400);
}

window.addEventListener("scroll", onScroll, { passive: true });

// ─────────────────────────────────────────────────
//  SCROLL-TO-TOP BUTTON
// ─────────────────────────────────────────────────
const scrollTopBtn = document.getElementById("scrollTop");

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ─────────────────────────────────────────────────
//  HAMBURGER ↔ ✕  +  MOBILE MENU
// ─────────────────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
    });
});

document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
    }
});

// ─────────────────────────────────────────────────
//  SCROLL REVEAL — INFINI
//  Utilise threshold: 0 pour détecter entrée ET sortie.
//  On ajoute .visible à l'entrée, on la RETIRE à la sortie
//  → l'animation se rejoue à chaque passage dans les deux sens.
// ─────────────────────────────────────────────────
function initReveal() {
    // Groupes d'éléments + variante + stagger (ms entre chaque item du groupe)
    const groups = [
        { sel: ".section-header", cls: "reveal", stagger: 0 },
        { sel: ".about-text", cls: "reveal", stagger: 0 },
        { sel: ".about-aside", cls: "reveal-left", stagger: 0 },
        { sel: ".info-card", cls: "reveal-fade", stagger: 0 },
        { sel: ".timeline-item", cls: "reveal", stagger: 110 },
        { sel: ".edu-card", cls: "reveal", stagger: 90 },
        { sel: ".cert-item", cls: "reveal", stagger: 60 },
        { sel: ".skill-group", cls: "reveal", stagger: 80 },
        { sel: ".project-card", cls: "reveal", stagger: 0 },
        { sel: ".contact-card", cls: "reveal", stagger: 80 },
    ];

    // On stocke le stagger sur l'élément lui-même pour pouvoir le réappliquer
    groups.forEach(({ sel, cls, stagger }) => {
        document.querySelectorAll(sel).forEach((el, i) => {
            el.classList.add(cls);
            // On mémorise le délai de base pour le restaurer après chaque sortie
            el.dataset.revealDelay = stagger ? `${i * stagger}ms` : "0ms";
            el.style.transitionDelay = el.dataset.revealDelay;
        });
    });

    // IntersectionObserver : threshold tableau pour capturer entrée ET sortie
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const el = entry.target;

                if (entry.isIntersecting) {
                    // Entrée dans le viewport → animer
                    el.style.transitionDelay = el.dataset.revealDelay || "0ms";
                    el.classList.add("visible");
                } else {
                    // Sortie du viewport → remettre à l'état invisible immédiatement
                    // (sans transition pour que le retour soit instantané et propre)
                    el.style.transitionDelay = "0ms";
                    el.classList.remove("visible");
                }
            });
        },
        {
            threshold: 0.08,
            rootMargin: "0px 0px -24px 0px",
        },
    );

    document
        .querySelectorAll(".reveal, .reveal-left, .reveal-fade")
        .forEach((el) => io.observe(el));
}

// ─────────────────────────────────────────────────
//  ACTIVE NAV LINK
// ─────────────────────────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const sectionIO = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach((a) => {
                    a.style.color =
                        a.getAttribute("href") === `#${id}`
                            ? "var(--gold)"
                            : "";
                });
            }
        });
    },
    { threshold: 0.4 },
);

sections.forEach((s) => sectionIO.observe(s));

// ─────────────────────────────────────────────────
//  SKILL TAG — micro ripple au clic
// ─────────────────────────────────────────────────
document.querySelectorAll(".skill-tags span").forEach((tag) => {
    tag.addEventListener("click", function () {
        this.style.transition = "none";
        this.style.transform = "scale(0.9)";
        setTimeout(() => {
            this.style.transition = "";
            this.style.transform = "";
        }, 120);
    });
});

// ─────────────────────────────────────────────────
//  SCROLL RESET — remonte en haut à chaque chargement
//  (renforce le history.scrollRestoration du HTML)
// ─────────────────────────────────────────────────
window.addEventListener("load", () =>
    window.scrollTo({ top: 0, behavior: "instant" }),
);

// ─────────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────────
applyLang(currentLang);
initReveal();
