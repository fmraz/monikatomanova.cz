(function () {
  const body = document.body;
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("[data-nav-menu]");
  const year = document.querySelector("[data-year]");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  function closeMenu() {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Otevřít menu");
    navMenu.classList.remove("is-open");
    body.classList.remove("menu-open");
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Otevřít menu" : "Zavřít menu");
      navMenu.classList.toggle("is-open", !isOpen);
      body.classList.toggle("menu-open", !isOpen);
    });

    navMenu.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof HTMLAnchorElement) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  function updateHeaderState() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  const galleryGrid = document.querySelector("[data-gallery-grid]");
  const galleryFilters = document.querySelectorAll("[data-gallery-filter]");
  const galleryArchiveToggle = document.querySelector("[data-gallery-archive-toggle]");
  let isGalleryArchiveVisible = false;
  const galleryItems = [
    {
      categories: ["course", "education"],
      url: "https://www.instagram.com/lashes.mt/p/DYpo3svjuNW/",
      image: "assets/instagram/archive/ig-01-DYpo3svjuNW.jpg",
      alt: "Kurz prodlužování řas Perfect Lash Start od Moniky Tomanové",
      width: 1080,
      height: 1350,
      label: "Kurz",
      title: "Kurz Perfect Lash Start",
      description: "Individuální kurz prodlužování řas Classic 1:1 & Volume Basics (2D).",
      featured: true
    },
    {
      categories: ["lashes", "brows", "reels"],
      url: "https://www.instagram.com/lashes.mt/reel/DYu3RH2OCYQ/",
      image: "assets/instagram/archive/ig-02-DYu3RH2OCYQ.jpg",
      alt: "Náhled spolupráce s modelkou a content creatorkou",
      width: 640,
      height: 1136,
      label: "Reel",
      title: "Spolupráce a detail",
      description: "Ukázka výsledku z beauty spolupráce."
    },
    {
      categories: ["brows", "lashes", "reels"],
      url: "https://www.instagram.com/lashes.mt/reel/DYAiho7uAgD/",
      image: "assets/instagram/archive/ig-03-DYAiho7uAgD.jpg",
      alt: "Proměna řas a obočí, přirozená krása podtržená úpravou",
      width: 640,
      height: 1136,
      label: "Reel",
      title: "Proměna řas a obočí",
      description: "Malé detaily, velká změna."
    },
    {
      categories: ["education", "reels"],
      url: "https://www.instagram.com/lashes.mt/reel/DXsBy5ZjtQN/",
      image: "assets/instagram/archive/ig-04-DXsBy5ZjtQN.jpg",
      alt: "Vzpomínka na beauty konferenci Beauty Games 2026",
      width: 640,
      height: 1136,
      label: "Reel",
      title: "Beauty Games 2026",
      description: "Inspirace z beauty konference."
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/DXUzTxojvKI/",
      image: "assets/instagram/archive/ig-05-DXUzTxojvKI.jpg",
      alt: "Detail wispy prodloužených řas",
      width: 1440,
      height: 1440,
      label: "Řasy",
      title: "Wispy řasy",
      description: "Kouzlo wispy řas pro jemně výrazný pohled.",
      featured: true
    },
    {
      categories: ["lashes", "reels"],
      url: "https://www.instagram.com/lashes.mt/reel/DXHy0LCjIrF/",
      image: "assets/instagram/archive/ig-06-DXHy0LCjIrF.jpg",
      alt: "Jemný detail lash stylingu",
      width: 640,
      height: 1136,
      label: "Reel",
      title: "Jemný pohled",
      description: "Elegantní lash styling."
    },
    {
      categories: ["lashes", "reels"],
      url: "https://www.instagram.com/lashes.mt/reel/DWuEDeaDAw2/",
      image: "assets/instagram/archive/ig-07-DWuEDeaDAw2.jpg",
      alt: "Atmosféra a výsledek beauty péče",
      width: 640,
      height: 1136,
      label: "Reel",
      title: "Na správném místě",
      description: "Atmosféra a výsledek beauty péče."
    },
    {
      categories: ["lashes", "reels"],
      url: "https://www.instagram.com/lashes.mt/reel/DWdlg_WDNcs/",
      image: "assets/instagram/archive/ig-08-DWdlg_WDNcs.jpg",
      alt: "Lehké wispy řasy se zatočením C",
      width: 640,
      height: 1136,
      label: "Reel",
      title: "Lehké wispy C",
      description: "Lehké wispy řasy se zatočením C."
    },
    {
      categories: ["lashes", "reels"],
      url: "https://www.instagram.com/lashes.mt/reel/DWMEFMejONm/",
      image: "assets/instagram/archive/ig-09-DWMEFMejONm.jpg",
      alt: "Detail prodloužených řas se zakřivením M",
      width: 640,
      height: 1136,
      label: "Reel",
      title: "Zakřivení M",
      description: "Oblíbené zakřivení pro výraz očí."
    },
    {
      categories: ["lashes", "reels"],
      url: "https://www.instagram.com/lashes.mt/reel/DV_9COvDuuH/",
      image: "assets/instagram/archive/ig-10-DV_9COvDuuH.jpg",
      alt: "Výraznější proměna pohledu",
      width: 640,
      height: 1136,
      label: "Reel",
      title: "Proměna klientky",
      description: "Výraznější proměna pohledu."
    },
    {
      categories: ["education"],
      url: "https://www.instagram.com/lashes.mt/p/DVrS-JVDukk/",
      image: "assets/instagram/archive/ig-11-DVrS-JVDukk.jpg",
      alt: "Monika Tomanová na Lash Summitu",
      width: 1440,
      height: 1675,
      label: "Vzdělávání",
      title: "Lash Summit",
      description: "Vzdělávání a inspirace z lash eventu."
    },
    {
      categories: ["brows", "lashes", "reels"],
      url: "https://www.instagram.com/lashes.mt/reel/DVGGKM5jLaa/",
      image: "assets/instagram/archive/ig-12-DVGGKM5jLaa.jpg",
      alt: "Korejský lash lift, šetrné natočení přírodních řas",
      width: 720,
      height: 1280,
      label: "Reel",
      title: "Korejský lash lift",
      description: "Šetrné natočení přírodních řas."
    },
    {
      categories: ["brows", "lashes", "reels"],
      url: "https://www.instagram.com/lashes.mt/reel/DVEvwKYjvpG/",
      image: "assets/instagram/archive/ig-13-DVEvwKYjvpG.jpg",
      alt: "Lash lift a brow laminace, rozdíl po úpravě",
      width: 720,
      height: 1280,
      label: "Reel",
      title: "Lash lift & brow laminace",
      description: "Rozdíl po úpravě řas a obočí."
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/DTqybSSjIUH/",
      image: "assets/instagram/archive/ig-14-DTqybSSjIUH.jpg",
      alt: "Detail precizní lash práce",
      width: 1440,
      height: 1916,
      label: "Řasy",
      title: "Detail práce",
      description: "Ukázka precizní lash práce."
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/DTOfZLLDGEv/",
      image: "assets/instagram/archive/ig-15-DTOfZLLDGEv.jpg",
      alt: "Elegantní efekt upraveného pohledu",
      width: 1440,
      height: 1832,
      label: "Řasy",
      title: "Elegantní efekt",
      description: "Detail upraveného pohledu."
    },
    {
      categories: ["brows", "lashes", "reels"],
      url: "https://www.instagram.com/lashes.mt/reel/DJWbN5VMdzW/",
      image: "assets/instagram/archive/ig-16-DJWbN5VMdzW.jpg",
      alt: "Laminace obočí a doplnění řas se zatočením M",
      width: 640,
      height: 1136,
      label: "Reel",
      title: "Laminace obočí + řasy",
      description: "Spojení brow laminace a řas M."
    },
    {
      categories: ["lashes", "reels"],
      url: "https://www.instagram.com/lashes.mt/reel/DI4hZJbsehP/",
      image: "assets/instagram/archive/ig-17-DI4hZJbsehP.jpg",
      alt: "Natural look, lehký objem a čokoládové řasy",
      width: 1170,
      height: 2080,
      label: "Reel",
      title: "Natural look",
      description: "Lehký objem a čokoládové řasy."
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/DIwiAF-sAQC/",
      image: "assets/instagram/archive/ig-18-DIwiAF-sAQC.jpg",
      alt: "Přirozené zvýraznění řas",
      width: 1440,
      height: 1507,
      label: "Řasy",
      title: "Přirozené zvýraznění",
      description: "Jemný lash styling pro přirozený efekt."
    },
    {
      categories: ["brows", "reels"],
      url: "https://www.instagram.com/lashes.mt/reel/DF8iLm3MTz2/",
      image: "assets/instagram/archive/ig-19-DF8iLm3MTz2.jpg",
      alt: "Laminace obočí, úprava jemnějších chloupků",
      width: 2268,
      height: 4032,
      label: "Reel",
      title: "Laminace obočí",
      description: "Z jemného obočí upravený tvar."
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/DB18vfIipXp/",
      image: "assets/instagram/archive/ig-20-DB18vfIipXp.jpg",
      alt: "Detail prodloužených řas",
      width: 1440,
      height: 1800,
      label: "Řasy",
      title: "Detail řas",
      description: "Ukázka prodloužených řas.",
      archived: true
    },
    {
      categories: ["brows", "reels"],
      url: "https://www.instagram.com/lashes.mt/reel/DBZix7CCrV3/",
      image: "assets/instagram/archive/ig-21-DBZix7CCrV3.jpg",
      alt: "Upravené obočí jako výrazný detail",
      width: 720,
      height: 1280,
      label: "Reel",
      title: "Krásné obočí",
      description: "Úprava obočí jako výrazný detail.",
      archived: true
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/DBUbUVRCOgj/",
      image: "assets/instagram/archive/ig-22-DBUbUVRCOgj.jpg",
      alt: "Lash styling z Instagram archivu",
      width: 1440,
      height: 1800,
      label: "Řasy",
      title: "Lash styling",
      description: "Ukázka práce z Instagram archivu.",
      archived: true
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/C3YfUjYMPTH/",
      image: "assets/instagram/archive/ig-23-C3YfUjYMPTH.jpg",
      alt: "Archiv práce, detail lash stylingu",
      width: 1440,
      height: 1671,
      label: "Řasy",
      title: "Archiv práce",
      description: "Detail lash stylingu.",
      archived: true
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/C3HlcrwMici/",
      image: "assets/instagram/archive/ig-24-C3HlcrwMici.jpg",
      alt: "Ukázka lash práce v Ostravě",
      width: 1440,
      height: 1371,
      label: "Řasy",
      title: "Ostrava detail",
      description: "Ukázka práce v Ostravě.",
      archived: true
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/CrBRYG5NVNH/",
      image: "assets/instagram/archive/ig-25-CrBRYG5NVNH.jpg",
      alt: "Přirozeně upravený pohled",
      width: 1440,
      height: 1440,
      label: "Řasy",
      title: "Klasický detail",
      description: "Přirozeně upravený pohled.",
      archived: true
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/CkqE7_9sPke/",
      image: "assets/instagram/archive/ig-26-CkqE7_9sPke.jpg",
      alt: "Starší ukázka lash práce z Ostravy",
      width: 1440,
      height: 1800,
      label: "Řasy",
      title: "Lash detail",
      description: "Ukázka starší práce z archivu.",
      archived: true
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/Cj44uAlsYuC/",
      image: "assets/instagram/archive/ig-27-Cj44uAlsYuC.jpg",
      alt: "Detail prodloužených řas",
      width: 1440,
      height: 1661,
      label: "Řasy",
      title: "Řasy detail",
      description: "Detail prodloužených řas.",
      archived: true
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/CgoF7Z2MtpQ/",
      image: "assets/instagram/archive/ig-28-CgoF7Z2MtpQ.jpg",
      alt: "Jemné zvýraznění lash stylingem",
      width: 1440,
      height: 1181,
      label: "Řasy",
      title: "Jemné zvýraznění",
      description: "Ukázka lash stylingu.",
      archived: true
    },
    {
      categories: ["lashes", "reels"],
      url: "https://www.instagram.com/lashes.mt/p/CevFGUXsjIg/",
      image: "assets/instagram/archive/ig-29-CevFGUXsjIg.jpg",
      alt: "Náhled video příspěvku z Instagramu",
      width: 1440,
      height: 1515,
      label: "Video",
      title: "Video náhled",
      description: "Náhled video příspěvku z Instagramu.",
      archived: true
    },
    {
      categories: ["lashes", "reels"],
      url: "https://www.instagram.com/lashes.mt/p/CbD0oE0s7gW/",
      image: "assets/instagram/archive/ig-30-CbD0oE0s7gW.jpg",
      alt: "Náhled krátkého video příspěvku",
      width: 1440,
      height: 1414,
      label: "Video",
      title: "Video detail",
      description: "Náhled krátkého video příspěvku.",
      archived: true
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/CVGrUDpsWrh/",
      image: "assets/instagram/archive/ig-31-CVGrUDpsWrh.jpg",
      alt: "Starší ukázka lash práce z roku 2021",
      width: 1440,
      height: 1799,
      label: "Řasy",
      title: "Archiv 2021",
      description: "Starší ukázka lash práce.",
      archived: true
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/CS2ewkosp9P/",
      image: "assets/instagram/archive/ig-32-CS2ewkosp9P.jpg",
      alt: "Ukázka práce z Ostravy-Stodolní",
      width: 1440,
      height: 1528,
      label: "Řasy",
      title: "Ostrava-Stodolní",
      description: "Ukázka práce z archivu.",
      archived: true
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/COyQM1VhFPi/",
      image: "assets/instagram/archive/ig-33-COyQM1VhFPi.jpg",
      alt: "Ukázka lash stylingu v centru Ostravy",
      width: 1440,
      height: 1440,
      label: "Řasy",
      title: "Centrum Ostrava",
      description: "Ukázka lash stylingu.",
      archived: true
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/COpBBlKBnov/",
      image: "assets/instagram/archive/ig-34-COpBBlKBnov.jpg",
      alt: "Detail práce z centra Ostravy",
      width: 1440,
      height: 1139,
      label: "Řasy",
      title: "Centrum Ostrava detail",
      description: "Detail práce z archivu.",
      archived: true
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/CMDXqz5BF4l/",
      image: "assets/instagram/archive/ig-35-CMDXqz5BF4l.jpg",
      alt: "Detail prodloužených řas z archivu 2021",
      width: 1440,
      height: 1798,
      label: "Řasy",
      title: "Archiv 2021",
      description: "Detail prodloužených řas.",
      archived: true
    },
    {
      categories: ["lashes"],
      url: "https://www.instagram.com/lashes.mt/p/CFNDaj4BcB2/",
      image: "assets/instagram/archive/ig-36-CFNDaj4BcB2.jpg",
      alt: "Starší ukázka práce z archivu 2020",
      width: 1440,
      height: 1440,
      label: "Řasy",
      title: "Archiv 2020",
      description: "Starší ukázka práce.",
      archived: true
    }
  ];

  function createGalleryCard(item) {
    const article = document.createElement("article");
    article.className = `gallery-card reveal${item.featured ? " gallery-card--featured" : ""}`;
    article.dataset.galleryCategory = item.categories.join(" ");
    article.dataset.galleryArchive = String(Boolean(item.archived));

    const link = document.createElement("a");
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.alt;
    image.width = item.width;
    image.height = item.height;
    image.loading = "lazy";

    const bodyWrap = document.createElement("div");
    bodyWrap.className = "gallery-card__body";

    const label = document.createElement("span");
    label.textContent = item.label;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    bodyWrap.append(label, title, description);
    link.append(image, bodyWrap);
    article.append(link);

    return article;
  }

  function getActiveGalleryFilter() {
    return document.querySelector("[data-gallery-filter].is-active")?.dataset.galleryFilter || "all";
  }

  function renderGallery() {
    if (!galleryGrid) return;

    const activeFilter = getActiveGalleryFilter();
    const fragment = document.createDocumentFragment();
    const visibleItems = galleryItems.filter((item) => {
      const matchesFilter = activeFilter === "all" || item.categories.includes(activeFilter);
      const isVisibleArchiveItem = !item.archived || isGalleryArchiveVisible;
      return matchesFilter && isVisibleArchiveItem;
    });

    visibleItems.forEach((item) => {
      const card = createGalleryCard(item);
      card.classList.add("is-visible");
      fragment.append(card);
    });

    galleryGrid.replaceChildren(fragment);
  }

  if (galleryGrid) {
    renderGallery();
  }

  galleryFilters.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.galleryFilter || "all";

      galleryFilters.forEach((filterButton) => {
        const isActive = filterButton === button;
        filterButton.classList.toggle("is-active", isActive);
        filterButton.setAttribute("aria-pressed", String(isActive));
      });

      renderGallery();
    });
  });

  if (galleryArchiveToggle) {
    galleryArchiveToggle.addEventListener("click", () => {
      isGalleryArchiveVisible = !isGalleryArchiveVisible;
      galleryArchiveToggle.setAttribute("aria-expanded", String(isGalleryArchiveVisible));
      galleryArchiveToggle.textContent = isGalleryArchiveVisible ? "Skrýt archiv" : "Zobrazit celý Instagram archiv";
      renderGallery();
    });
  }

  const faqButtons = document.querySelectorAll(".faq-question");
  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.closest(".faq-item")?.querySelector(".faq-answer");
      const isOpen = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isOpen));
      if (answer) {
        answer.hidden = isOpen;
      }
    });
  });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
})();
