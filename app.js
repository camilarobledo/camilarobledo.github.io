const copies = {
  es: {},
  en: {
    navProfile: "Profile", navProjects: "Projects", navTraining: "Training", navContact: "Contact",
    hello: "Hi, I'm Cami.", role: "Software developer", focus: "Mobile applications · APIs · Hardware integration",
    discover: "Explore my journey", downloadCv: "Download résumé", location: "Rosario, Argentina · Local and international projects",
    methodEyebrow: "How I work", startingPoint: "Every challenge is a starting point.", startingText: "I learn quickly, make decisions and turn concrete needs into solutions that work.", analyze: "Analyze", decide: "Decide", build: "Build",
    aboutEyebrow: "About me", aboutTitle: "I'm Camila", aboutOne: "I'm a software developer experienced in mobile applications, APIs and hardware integration. I'm resourceful, learn quickly and adapt to different technologies and environments.", aboutTwo: "Since 2024, I have been part of Balanzas Vesta's Engineering Department, where I have contributed to technical decisions, led projects and built solutions used across the company.", cyberdefense: "Cyberdefense",
    experienceEyebrow: "Experience at Vesta", beyondScreen: "Software beyond the screen", vestaIntro: "Since July 2024, I have worked in Balanzas Vesta's Engineering Department, developing applications that connect software, hardware and operational processes.", mobileApps: "Mobile applications", localStorage: "Local persistence", operationalData: "Operational data",
    projectOne: "Project 01", projectTwo: "Project 02", projectThree: "Project 03", vestaTitle: "One application, different weighing devices.", vestaText: "The project began with BLE integration for the BigB hook and evolved to include CraneScale OCS-L and OCS-L1.", myRole: "My role", vestaRole: "I led the collaborative work, organized and reviewed tasks, and contributed directly to BLE communication, local persistence, records and interface evolution.", mainChallenge: "Main challenge", reconnectChallenge: "Reliable reconnection and coherent interface states when devices went out of range.", technicalView: "View technical perspective", vestaTechnical: "Flutter and Dart, BLE communication, local SQLite database, offline operation and Google Play release.", downloadVesta: "Download Vesta+ on Google Play", deviceSelection: "Device selection", liveWeight: "Live weight reading", recordConfirmation: "Record confirmation",
    agroTitle: "Technology applied to harvesting", plotrackIntro: "A tablet application used in GDM's agricultural operations: trials, strips, weighing, humidity, flow, speed and geolocation.", problem: "The problem", plotrackProblem: "Bluetooth interruptions could disrupt records and cause information loss during operation.", downloadPlotrack: "Download PLOTrack on Google Play", rsTitle: "From Bluetooth to RS232", rsText: "I independently adapted the application to use a wired connection through the tablet docking station. I also carried out internal refactors and improvements under demanding deadlines.", reliability: "Greater operational reliability", portState: "Visible port status", diagnosis: "Diagnostics + hardware + refactoring", withoutResponse: "No response", connected: "Connected",
    nubackTitle: "Technical information within everyone's reach.", nubackText: "It centralizes statistics, accounts, licenses, expirations, devices and connection states from the Nutrack system.", activeUsers: "Active users", licenses: "Licenses and expirations", devices: "Devices in use", offlineAccounts: "Offline accounts", metrics: "Metrics development", refactors: "Internal refactors", allAreas: "Operational across all departments",
    otherProjects: "Other projects", otherProjectsTitle: "More tools for specific needs.", publishedApp: "Published application", bacDescription: "An app for viewing truck scales over Bluetooth and checking gross, tare, net and operating states.", vestaConfigDescription: "The official app for configuring and calibrating Big B devices via Bluetooth, with live readings and parameter adjustments.", viewGooglePlay: "View on Google Play ↗",
    socialEyebrow: "Technology with social impact", hospitalTitle: "Roque Sáenz Peña Hospital Volunteer Project", hospitalIntro: "A collaborative project to connect concrete needs with people willing to help.", mvpDesign: "MVP design", socialFocus: "The focus: helping each person understand what to donate, where to take it and the impact of their contribution.", experienceDesign: "Experience design", clearExperience: "A clear and approachable experience", needs: "Needs and priorities", contentImpact: "Content and impact", administration: "Administration",
    projectScope: "Project scope", functionalPrototype: "A functional prototype", socialRole: "I contributed to defining the MVP, user and administration flows, functional planning and interface development.", developed: "Developed", visualIdentity: "Visual identity", navigation: "Navigation", mockups: "Completed screens", preloadedData: "Preloaded data", pending: "Pending when interrupted", finalAdmin: "Final admin panel", budgetNote: "The project stopped due to lack of funding after the analysis, design and experience development stages were completed.",
    originEyebrow: "The beginning", originTitle: "It all started with a web page.", originText: "In 2023, I developed one of my first projects using HTML, CSS and JavaScript. The theme was a free and creative choice that allowed me to explore the design, structure and interaction of a web experience.", timelineOne: "First web project", timelineTwo: "Joined Vesta", timelineThree: "Full Stack + Cyberdefense", timelineFour: "Leadership and industrial projects", viewProject: "View project online",
    trainingEyebrow: "Featured training", fullstackTitle: "Full Stack Training", fullstackMeta: "Full Stack Developer Induction Program · UTN Rosario · 41 hours · 2025", transactions: "Transactions", trainingValue: "The program broadened my perspective on frontend, backend, databases and architecture.",
    securityEyebrow: "Development + security", protectTitle: "Building also means protecting.", degree: "Bachelor's Degree in Cyberdefense", degreeMeta: "FADENA · National Defense University<br>Started March 2025 · Currently completing second year", degreeLink: "View degree information ↗", riskManagement: "Risk management", threats: "Threats and vulnerabilities", infoSec: "Information security", networks: "Networks and systems", law: "Law and regulation", resilience: "Continuity and resilience", nextDegree: "Next intermediate degree", analystDegree: "University Analyst in Cyber Risk Management", securityBridge: "My experience with hardware, APIs, persistence and operational processes connects development with a security perspective.",
    profileEyebrow: "Professional profile", evolutionTitle: "A profile in constant evolution", leadership: "Leadership", socialImpact: "Social impact", learning: "Learning", evolutionText: "My profile is not defined by a single technology, but by my ability to learn, adapt and turn solutions into practice.",
    scopeEyebrow: "Communication and reach", languagesTitle: "Languages and reach", spanish: "Spanish", native: "Native", english: "English", intermediate: "Intermediate · B1", italian: "Italian", basic: "Basic · A1", availability: "Open to local and international projects, working remotely, on-site or hybrid.",
    contactEyebrow: "Let's talk", contactTitle: "Shall we build something that solves a problem?", contactText: "I'm open to conversations about projects, collaborations and professional opportunities.", contactRole: "Software developer · Rosario, Argentina", contactMe: "Contact me", downloadPortfolio: "Download portfolio", thanks: "Thank you for exploring my work.", continue: "Continue"
  },
  it: {
    navProfile: "Profilo", navProjects: "Progetti", navTraining: "Formazione", navContact: "Contatti",
    hello: "Ciao, sono Cami.", role: "Sviluppatrice software", focus: "Applicazioni mobile · API · Integrazione hardware",
    discover: "Scopri il mio percorso", downloadCv: "Scarica CV", location: "Rosario, Argentina · Progetti locali e internazionali",
    methodEyebrow: "Il mio modo di lavorare", startingPoint: "Ogni sfida è un punto di partenza.", startingText: "Imparo rapidamente, prendo decisioni e trasformo esigenze concrete in soluzioni che funzionano.", analyze: "Analizzare", decide: "Decidere", build: "Costruire",
    aboutEyebrow: "Su di me", aboutTitle: "Sono Camila", aboutOne: "Sono una sviluppatrice software con esperienza in applicazioni mobile, API e integrazione hardware. Sono risolutiva, imparo rapidamente e mi adatto a tecnologie e ambienti diversi.", aboutTwo: "Dal 2024 faccio parte del Dipartimento di Ingegneria di Balanzas Vesta, dove ho partecipato a decisioni tecniche, guidato progetti e sviluppato soluzioni utilizzate nei diversi reparti dell'azienda.", cyberdefense: "Cyberdifesa",
    experienceEyebrow: "Esperienza in Vesta", beyondScreen: "Software oltre lo schermo", vestaIntro: "Da luglio 2024 lavoro nel Dipartimento di Ingegneria di Balanzas Vesta, sviluppando applicazioni che collegano software, hardware e processi operativi.", mobileApps: "Applicazioni mobile", localStorage: "Persistenza locale", operationalData: "Dati operativi",
    projectOne: "Progetto 01", projectTwo: "Progetto 02", projectThree: "Progetto 03", vestaTitle: "Un'applicazione, diversi dispositivi di pesatura.", vestaText: "Il progetto è iniziato con l'integrazione BLE del gancio BigB e si è evoluto includendo CraneScale OCS-L e OCS-L1.", myRole: "Il mio ruolo", vestaRole: "Ho guidato il lavoro collaborativo, organizzato e verificato le attività e partecipato direttamente alla comunicazione BLE, persistenza locale, registri ed evoluzione dell'interfaccia.", mainChallenge: "Sfida principale", reconnectChallenge: "Riconnessione affidabile e stati coerenti dell'interfaccia quando i dispositivi uscivano dal raggio.", technicalView: "Vedi l'aspetto tecnico", vestaTechnical: "Flutter e Dart, comunicazione BLE, database locale SQLite, funzionamento offline e pubblicazione su Google Play.", downloadVesta: "Scarica Vesta+ su Google Play", deviceSelection: "Selezione del dispositivo", liveWeight: "Lettura del peso dal vivo", recordConfirmation: "Conferma del registro",
    agroTitle: "Tecnologia applicata alla raccolta", plotrackIntro: "Applicazione per tablet utilizzata nelle operazioni agricole di GDM: prove, fasce, pesature, umidità, flusso, velocità e geolocalizzazione.", problem: "Il problema", plotrackProblem: "Le interruzioni Bluetooth potevano compromettere la continuità del registro e causare perdita di informazioni durante l'operazione.", downloadPlotrack: "Scarica PLOTrack su Google Play", rsTitle: "Da Bluetooth a RS232", rsText: "Ho adattato autonomamente l'applicazione per utilizzare una connessione cablata tramite il docking del tablet. Ho inoltre realizzato refactoring interni e miglioramenti con scadenze impegnative.", reliability: "Maggiore affidabilità operativa", portState: "Stato della porta visibile", diagnosis: "Diagnostica + hardware + refactoring", withoutResponse: "Nessuna risposta", connected: "Connesso",
    nubackTitle: "Informazioni tecniche a disposizione di tutta l'azienda.", nubackText: "Centralizza statistiche, account, licenze, scadenze, dispositivi e stati di connessione del sistema Nutrack.", activeUsers: "Utenti attivi", licenses: "Licenze e scadenze", devices: "Dispositivi utilizzati", offlineAccounts: "Account offline", metrics: "Creazione di metriche", refactors: "Refactoring interni", allAreas: "Operativa in tutti i reparti",
    otherProjects: "Altri progetti", otherProjectsTitle: "Altri strumenti per esigenze specifiche.", publishedApp: "Applicazione pubblicata", bacDescription: "App per visualizzare bilance per camion tramite Bluetooth e consultare peso lordo, tara, netto e stati operativi.", vestaConfigDescription: "App ufficiale per configurare e calibrare dispositivi Big B tramite Bluetooth, con letture e regolazione dei parametri.", viewGooglePlay: "Vedi su Google Play ↗",
    socialEyebrow: "Tecnologia con impatto sociale", hospitalTitle: "Volontariato dell'Ospedale Roque Sáenz Peña", hospitalIntro: "Progetto collaborativo per collegare esigenze concrete con persone disposte ad aiutare.", mvpDesign: "Design dell'MVP", socialFocus: "L'obiettivo: far sapere a ogni persona cosa donare, dove portarlo e quale impatto genera il suo aiuto.", experienceDesign: "Design dell'esperienza", clearExperience: "Un'esperienza chiara e vicina", needs: "Esigenze e priorità", contentImpact: "Contenuti e impatto", administration: "Amministrazione",
    projectScope: "Ambito del progetto", functionalPrototype: "Un prototipo funzionale", socialRole: "Ho partecipato alla definizione dell'MVP, dei flussi utente e amministrativi, alla pianificazione funzionale e allo sviluppo dell'interfaccia.", developed: "Sviluppato", visualIdentity: "Identità visiva", navigation: "Navigazione", mockups: "Schermate realizzate", preloadedData: "Dati precaricati", pending: "In sospeso all'interruzione", finalAdmin: "Pannello amministrativo finale", budgetNote: "Il progetto si è fermato per mancanza di budget dopo aver completato analisi, design e sviluppo dell'esperienza.",
    originEyebrow: "L'inizio", originTitle: "Tutto è iniziato con una pagina web.", originText: "Nel 2023 ho sviluppato uno dei miei primi progetti con HTML, CSS e JavaScript. Il tema è stato una scelta libera e creativa che mi ha permesso di esplorare il design, la struttura e l'interazione di un'esperienza web.", timelineOne: "Primo progetto web", timelineTwo: "Ingresso in Vesta", timelineThree: "Full Stack + Cyberdifesa", timelineFour: "Leadership e progetti industriali", viewProject: "Vedi il progetto online",
    trainingEyebrow: "Formazione principale", fullstackTitle: "Formazione Full Stack", fullstackMeta: "Programma di Induzione per Sviluppatore Full Stack · UTN Rosario · 41 ore · 2025", transactions: "Transazioni", trainingValue: "La formazione ha ampliato la mia visione di frontend, backend, database e architettura.",
    securityEyebrow: "Sviluppo + sicurezza", protectTitle: "Costruire significa anche proteggere.", degree: "Laurea in Cyberdifesa", degreeMeta: "FADENA · Università della Difesa Nazionale<br>Inizio: marzo 2025 · Attualmente concludo il secondo anno", degreeLink: "Vedi le informazioni sul corso di laurea ↗", riskManagement: "Gestione dei rischi", threats: "Minacce e vulnerabilità", infoSec: "Sicurezza delle informazioni", networks: "Reti e sistemi", law: "Diritto e normativa", resilience: "Continuità e resilienza", nextDegree: "Prossimo titolo intermedio", analystDegree: "Analista Universitaria in Gestione dei Rischi Cibernetici", securityBridge: "La mia esperienza con hardware, API, persistenza e processi operativi collega lo sviluppo a una prospettiva di sicurezza.",
    profileEyebrow: "Profilo professionale", evolutionTitle: "Un profilo in continua evoluzione", leadership: "Leadership", socialImpact: "Impatto sociale", learning: "Apprendimento", evolutionText: "Il mio profilo non è definito da una sola tecnologia, ma dalla capacità di imparare, adattarmi e portare le soluzioni nella pratica.",
    scopeEyebrow: "Comunicazione e portata", languagesTitle: "Lingue e disponibilità", spanish: "Spagnolo", native: "Madrelingua", english: "Inglese", intermediate: "Intermedio · B1", italian: "Italiano", basic: "Base · A1", availability: "Disponibile per progetti locali e internazionali, da remoto, in presenza o in modalità ibrida.",
    contactEyebrow: "Parliamo", contactTitle: "Creiamo qualcosa che risolva un problema?", contactText: "Sono disponibile a parlare di progetti, collaborazioni e opportunità professionali.", contactRole: "Sviluppatrice software · Rosario, Argentina", contactMe: "Contattami", downloadPortfolio: "Scarica portfolio", thanks: "Grazie per aver conosciuto il mio lavoro.", continue: "Continua"
  }
};

const originalCopy = new Map();
document.querySelectorAll("[data-copy]").forEach((node) => originalCopy.set(node, node.innerHTML));

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-copy]").forEach((node) => {
    const key = node.dataset.copy;
    node.innerHTML = lang === "es" ? originalCopy.get(node) : (copies[lang][key] ?? originalCopy.get(node));
  });
  document.querySelectorAll(".lang").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  localStorage.setItem("portfolio-language", lang);
}

document.querySelectorAll(".lang").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
const savedLanguage = localStorage.getItem("portfolio-language");
if (["es", "en", "it"].includes(savedLanguage)) setLanguage(savedLanguage);

const scenes = [...document.querySelectorAll(".scene")];
const currentScene = document.querySelector(".current-scene");
const progressValue = document.querySelector(".progress-value");
let activeIndex = 0;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    activeIndex = scenes.indexOf(entry.target);
    currentScene.textContent = String(activeIndex + 1).padStart(2, "0");
    progressValue.style.height = `${((activeIndex + 1) / scenes.length) * 100}%`;
    entry.target.querySelectorAll(".reveal").forEach((item) => item.classList.add("visible"));
  });
// Use a viewport band: tall mobile sections cannot reach a percentage
// threshold based on their full height (e.g. the volunteer screenshots).
}, { threshold: 0, rootMargin: "-15% 0px -55% 0px" });

scenes.forEach((scene) => observer.observe(scene));
document.querySelectorAll(".scene:first-child .reveal").forEach((item) => item.classList.add("visible"));

document.querySelector(".next-scene").addEventListener("click", () => {
  const next = scenes[Math.min(activeIndex + 1, scenes.length - 1)];
  next.scrollIntoView({ behavior: "smooth" });
});

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  mobileMenu.hidden = open;
  document.body.classList.toggle("menu-open", !open);
});
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuButton.setAttribute("aria-expanded", "false");
  mobileMenu.hidden = true;
  document.body.classList.remove("menu-open");
}));
