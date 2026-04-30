const translations = {
  pt: {
    skip_link: "Pular para o conteúdo",
    loading_text: "Carregando portfólio...",

    nav_label: "Navegação principal",
    logo_label: "Voltar ao início",
    lang_label: "Mudar para inglês",
    menu_open: "Abrir menu",
    menu_close: "Fechar menu",
    social_label: "Links profissionais",
    highlights_label: "Destaques do perfil",
    tech_list_label: "Tecnologias utilizadas",
    contact_links_label: "Links de contato",

    nav_about: "Sobre",
    nav_tech: "Tecnologias",
    nav_projects: "Projetos",
    nav_contact: "Contato",

    hero_greeting: "Olá, eu sou",
    hero_role: "Python Backend Developer",
    hero_description:
      "Desenvolvo soluções backend com Python, APIs e automações, unindo lógica, organização e vontade constante de aprender.",
    hero_status: "Foco atual: backend com Python",
    btn_projects: "Ver projetos",
    btn_contact: "Contato",

    about_label: "Perfil",
    about_title: "Sobre mim",
    about_text_1:
      "Sou estudante do 3º ano do Ensino Médio e estou construindo minha carreira na área de tecnologia, com foco em desenvolvimento backend utilizando Python.",
    about_text_2:
      "Tenho interesse em APIs, automação, desenvolvimento web, lógica de programação e boas práticas para criação de sistemas eficientes e organizados.",
    highlight_1_title: "Backend",
    highlight_1_text: "Python, APIs REST e regras de negócio.",
    highlight_2_title: "Automação",
    highlight_2_text: "Scripts para reduzir tarefas repetitivas.",
    highlight_3_title: "Base web",
    highlight_3_text: "HTML, CSS e JavaScript para interfaces responsivas.",

    tech_label: "Stack",
    tech_title: "Tecnologias",

    projects_label: "Entrega",
    projects_title: "Projetos",

    project_1_title: "Sistema de Cadastro de Pessoas",
    project_1_desc:
      "Sistema em Python para cadastrar, listar, buscar e remover pessoas, utilizando lógica de programação e estrutura de dados.",
    project_1_point_1: "Fluxo CRUD organizado",
    project_1_point_2: "Validações de entrada",

    project_2_title: "Calculadora em Python",
    project_2_desc:
      "Calculadora com operações básicas, validações e estrutura de repetição, desenvolvida para praticar lógica e funções.",
    project_2_point_1: "Funções reutilizáveis",
    project_2_point_2: "Tratamento de erros simples",

    project_3_title: "Gerador de Pix com QR Code",
    project_3_desc:
      "Sistema freelancer desenvolvido para a Zero18Modas, utilizando Node.js e integração com API para geração automática de Pix em QR Code.",
    project_3_point_1: "Integração com API",
    project_3_point_2: "Geração automática de QR Code",

    contact_label: "Contato",
    contact_title: "Vamos nos conectar?",
    contact_text:
      "Estou aberto a trocar ideias sobre backend, projetos e oportunidades de aprendizado.",
    contact_copy: "Copiar email",
    contact_copied: "Email copiado!",
    contact_copy_error: "Não foi possível copiar",

    footer_text: "© 2026 Athos Martins. Todos os direitos reservados."
  },

  en: {
    skip_link: "Skip to content",
    loading_text: "Loading portfolio...",

    nav_label: "Main navigation",
    logo_label: "Back to top",
    lang_label: "Switch to Portuguese",
    menu_open: "Open menu",
    menu_close: "Close menu",
    social_label: "Professional links",
    highlights_label: "Profile highlights",
    tech_list_label: "Technologies used",
    contact_links_label: "Contact links",

    nav_about: "About",
    nav_tech: "Technologies",
    nav_projects: "Projects",
    nav_contact: "Contact",

    hero_greeting: "Hi, I am",
    hero_role: "Python Backend Developer",
    hero_description:
      "I build backend solutions with Python, APIs, and automations, combining logic, organization, and a constant drive to learn.",
    hero_status: "Current focus: Python backend",
    btn_projects: "View projects",
    btn_contact: "Contact",

    about_label: "Profile",
    about_title: "About me",
    about_text_1:
      "I am a high school senior building my career in technology, focused on backend development using Python.",
    about_text_2:
      "I am interested in APIs, automation, web development, programming logic, and best practices for creating efficient and well-organized systems.",
    highlight_1_title: "Backend",
    highlight_1_text: "Python, REST APIs, and business logic.",
    highlight_2_title: "Automation",
    highlight_2_text: "Scripts that reduce repetitive tasks.",
    highlight_3_title: "Web base",
    highlight_3_text: "HTML, CSS, and JavaScript for responsive interfaces.",

    tech_label: "Stack",
    tech_title: "Technologies",

    projects_label: "Delivery",
    projects_title: "Projects",

    project_1_title: "People Registration System",
    project_1_desc:
      "A Python system to register, list, search, and remove people, using programming logic and data structures.",
    project_1_point_1: "Organized CRUD flow",
    project_1_point_2: "Input validations",

    project_2_title: "Python Calculator",
    project_2_desc:
      "A calculator with basic operations, validations, and repetition structures, developed to practice logic and functions.",
    project_2_point_1: "Reusable functions",
    project_2_point_2: "Simple error handling",

    project_3_title: "Pix QR Code Generator",
    project_3_desc:
      "Freelance system developed for Zero18Modas, using Node.js and API integration to automatically generate Pix payments with QR Code.",
    project_3_point_1: "API integration",
    project_3_point_2: "Automatic QR Code generation",

    contact_label: "Contact",
    contact_title: "Let’s connect?",
    contact_text:
      "I am open to conversations about backend, projects, and learning opportunities.",
    contact_copy: "Copy email",
    contact_copied: "Email copied!",
    contact_copy_error: "Could not copy",

    footer_text: "© 2026 Athos Martins. All rights reserved."
  }
};

const availableLanguages = ["pt", "en"];
const storedLanguage = readStoredLanguage();
let currentLang = availableLanguages.includes(storedLanguage) ? storedLanguage : "pt";

const langToggle = document.getElementById("lang-toggle");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function readStoredLanguage() {
  try {
    return localStorage.getItem("lang");
  } catch {
    return null;
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem("lang", language);
  } catch {
    // The interface still works when local storage is blocked.
  }
}

function translate(key) {
  return translations[currentLang][key] || key;
}

function setMenuOpen(isOpen) {
  if (!navToggle || !navMenu) {
    return;
  }

  navMenu.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", translate(isOpen ? "menu_close" : "menu_open"));
}

function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (translations[currentLang][key]) {
      element.textContent = translate(key);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;

    if (translations[currentLang][key]) {
      element.setAttribute("aria-label", translate(key));
    }
  });

  if (langToggle) {
    langToggle.textContent = currentLang === "pt" ? "EN" : "PT";
  }

  document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en";
  setMenuOpen(navMenu?.classList.contains("open") || false);
}

function initLanguageToggle() {
  if (!langToggle) {
    return;
  }

  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    storeLanguage(currentLang);
    translatePage();
  });
}

function initMenu() {
  if (!navToggle || !navMenu) {
    return;
  }

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") !== "true";
    setMenuOpen(isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  });
}

function initLoadingScreen() {
  const progressCircle = document.querySelector(".progress-circle .progress");
  const progressText = document.getElementById("progress-text");
  const loadingScreen = document.getElementById("loading-screen");

  if (!progressCircle || !progressText || !loadingScreen) {
    return;
  }

  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  progressCircle.style.strokeDasharray = circumference;
  progressCircle.style.strokeDashoffset = circumference;

  const finishLoading = () => {
    progressCircle.style.strokeDashoffset = 0;
    progressText.textContent = "100%";
    loadingScreen.classList.add("hidden");
    loadingScreen.setAttribute("aria-hidden", "true");
  };

  if (reduceMotion) {
    setTimeout(finishLoading, 120);
    return;
  }

  let progress = 0;
  const interval = setInterval(() => {
    progress = Math.min(progress + 4, 100);
    progressCircle.style.strokeDashoffset =
      circumference - (progress / 100) * circumference;
    progressText.textContent = `${progress}%`;

    if (progress === 100) {
      clearInterval(interval);
      setTimeout(finishLoading, 250);
    }
  }, 22);
}

function initRevealAnimations() {
  const fadeElements = document.querySelectorAll(".fade-in");

  if (!fadeElements.length) {
    return;
  }

  if (reduceMotion || !("IntersectionObserver" in window)) {
    fadeElements.forEach((element) => element.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, revealObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  fadeElements.forEach((element) => observer.observe(element));
}

function initScrollSpy() {
  const links = Array.from(document.querySelectorAll('.nav-menu a[href^="#"]'));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!links.length || !sections.length || !("IntersectionObserver" in window)) {
    return;
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        links.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    },
    {
      rootMargin: "-42% 0px -46% 0px",
      threshold: 0
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();

  const copied = document.execCommand("copy");
  textArea.remove();
  return copied;
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  return fallbackCopy(text);
}

function initCopyEmail() {
  const copyButton = document.querySelector("[data-copy-email]");

  if (!copyButton) {
    return;
  }

  copyButton.addEventListener("click", async () => {
    try {
      const copied = await copyText(copyButton.dataset.copyEmail);
      copyButton.textContent = copied
        ? translate("contact_copied")
        : translate("contact_copy_error");
    } catch {
      copyButton.textContent = translate("contact_copy_error");
    }

    window.setTimeout(() => {
      copyButton.textContent = translate("contact_copy");
    }, 1800);
  });
}

function initCustomCursor() {
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

  if (!cursorDot || !cursorOutline || !hasFinePointer || reduceMotion) {
    return;
  }

  document.body.classList.add("custom-cursor-enabled");

  const mouse = { x: -100, y: -100 };
  const outline = { x: -100, y: -100 };

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    cursorDot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
  });

  window.addEventListener("mouseleave", () => {
    document.body.classList.remove("custom-cursor-enabled");
  });

  window.addEventListener("mouseenter", () => {
    document.body.classList.add("custom-cursor-enabled");
  });

  const renderCursor = () => {
    outline.x += (mouse.x - outline.x) * 0.18;
    outline.y += (mouse.y - outline.y) * 0.18;
    cursorOutline.style.transform = `translate3d(${outline.x}px, ${outline.y}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  };

  renderCursor();

  document
    .querySelectorAll("a, button, .project-card, .tech-grid span, .profile-frame img")
    .forEach((element) => {
      element.addEventListener("mouseenter", () => cursorOutline.classList.add("active"));
      element.addEventListener("mouseleave", () => cursorOutline.classList.remove("active"));
    });
}

translatePage();
initLanguageToggle();
initMenu();
initLoadingScreen();
initRevealAnimations();
initScrollSpy();
initCopyEmail();
initCustomCursor();
