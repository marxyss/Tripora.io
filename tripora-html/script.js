/* ============================================
   Tripora — Vanilla JS
   ============================================ */

const slides = [
  {
    id: "palawan",
    name: "Palawan",
    country: "Philippines",
    image: "images/palawan-lagoons.png",
    desc: "Glide through emerald lagoons hidden between towering limestone cliffs. Sleep where the sea is the only soundtrack and the stars feel close enough to touch.",
  },
  {
    id: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    image: "images/istanbul.png",
    desc: "Where continents and centuries collide. Drift between bazaars, Bosphorus ferries, and rooftop calls to prayer at dusk.",
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Indian Ocean",
    image: "images/maldives.png",
    desc: "Overwater villas, bioluminescent shores, and the deepest blue you have ever seen. Pure horizon-line therapy.",
  },
  {
    id: "Queenstown",
    name: "Queens town",
    country: "Palawan",
    image: "https://images.tourscanner.com/wp-content/uploads/2023/03/things-to-do-in-Queenstown-New-Zealand.jpg",
    desc: "Neon-soaked alleys and centuries-old shrines, hidden ramen counters and skyline observatories — a city of beautiful contradictions.",
  },
];

const destinations = [
  { id: "palawan", name: "Palawan", country: "Philippines", image: "", desc: "Limestone karsts and emerald lagoons." },
  { id: "tokyo", name: "Tokyo", country: "Japan", image: "", desc: "Neon streets and tranquil shrines." },
  { id: "istanbul", name: "Istanbul", country: "Turkey", image: "", desc: "Where continents and eras collide." },
  { id: "maldives", name: "Maldives", country: "Indian Ocean", image: "", desc: "Overwater serenity in turquoise water." },
  { id: "bali", name: "Bali", country: "Indonesia", image: "", desc: "Jungle terraces and spiritual escapes." },
  { id: "santorini", name: "Santorini", country: "Greece", image: "", desc: "Whitewashed cliffs over sapphire seas." },
  { id: "kyoto", name: "Kyoto", country: "Japan", image: "", desc: "Lantern-lit streets and ancient temples." },
  { id: "patagonia", name: "Patagonia", country: "Chile", image: "", desc: "Untamed glaciers at the edge of the world." },
  { id: "dubai", name: "Dubai", country: "UAE", image: "", desc: "Skyline of glass and gold above the dunes." },
  { id: "thailand", name: "Thailand", country: "Southeast Asia", image: "", desc: "Limestone islands and longtail sunsets." },
  { id: "kerala", name: "Kerala", country: "India", image: "", desc: "Houseboats drifting through palm-lined backwaters." },
  { id: "georgia", name: "Georgia", country: "Caucasus", image: "", desc: "Stone churches in the shadow of Kazbek." },
];

const experiences = [
  { img: "images/couple-beach.jpg", title: "Romantic Escapes", desc: "Private beaches, sunset strolls." },
  { img: "images/luxury-balcony.jpg", title: "Unparalleled Luxury", desc: "Awaken to ocean views." },
  { img: "images/culinary.jpg", title: "Edible Adventures", desc: "Markets, omakase, dive bars." },
  { img: "images/patagonia.jpg", title: "Wild Frontiers", desc: "Glaciers, fjords, no signal." },
];

const marqueeImages = [
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/e7/b0/ea/photo0jpg.jpg?w=1200&h=700&s=1",
  "https://wallpapercat.com/w/full/7/b/f/717538-1920x1080-desktop-1080p-tokyo-japan-background-photo.jpg",
  "https://m.media-amazon.com/images/I/91SLvyVuWZL.jpg",
  "https://www.dmcmaldives.com/wp-content/uploads/2019/08/blue-ocean-in-maldives-uhd-wallpaper-2560x1440.jpg",
  "https://www.outlooktravelmag.com/media/bali-1-1679062958.profileImage.2x-scaled-webp.webp",
  "https://ginaonaplane.com/wp-content/uploads/2024/01/Greece.webp",
  "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2026/02/03/0ed70ebf98b24c2fad65131df6ba8394_Kyoto_Travel_Guide_Japan_Michelin.jpg",
  "https://cdn.kimkim.com/files/a/images/7f5bf49f3bcbf0debbda3f19e9bc3d06803bb0e3/original-52cfe7995413f7cc4bbd31944a97a819.jpg",
  "https://cdn.wallpapersafari.com/66/18/Unz9XZ.jpg",
  "https://www.wedaways.com/wp-content/uploads/2019/09/thailand-honeymoon-1024x683.jpg",
  "https://wallpapercat.com/w/full/4/9/e/851709-3840x2160-desktop-4k-kerala-wallpaper-image.jpg",
  "https://static01.nyt.com/images/2013/11/01/t-magazine/01well-tbilisi-slide-MCOX/01well-tbilisi-slide-MCOX-superJumbo.jpg",
  "https://images.trvl-media.com/lodging/18000000/17860000/17853400/17853393/11743fb7.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
  "https://www.joegarzaphotography.com/images/xl/SecertLover.jpg",
  "https://www.leeabbamonte.com/wp-content/uploads/2016/02/IMG_4179.jpg",
  "https://dancingtheearth.com/wp-content/smush-webp/2022/03/Cathedral-Cove-sunrise-North-Island-Photography-Spots-Dancing-the-Earth.jpg.webp",
];

/* ----- Hero slideshow ----- */
let activeSlide = 0;
let slideInterval;

const slidesEl = document.getElementById("hero-slides");
const cardsEl = document.getElementById("hero-cards");
const titleEl = document.getElementById("hero-title");
const countryEl = document.getElementById("hero-country");
const descEl = document.getElementById("hero-desc");
const numEl = document.getElementById("slide-num");
const bgTextEl = document.getElementById("hero-bg-text");

function bookmarkSvg() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z"/></svg>';
}

function renderSlides() {
  if (!slidesEl) return;
  slidesEl.innerHTML = slides
    .map(
      (s, i) =>
        `<div class="hero-slide${i === 0 ? " active" : ""}"><img src="${s.image}" alt="${s.name}"></div>`
    )
    .join("");

  cardsEl.innerHTML = slides
    .map(
      (s, i) => `
    <div class="hero-card${i === 0 ? " active" : ""}" data-index="${i}">
      <img src="${s.image}" alt="${s.name}">
      <div class="hero-card-grad"></div>
      <div class="hero-card-bookmark">${bookmarkSvg()}</div>
      <div class="hero-card-city">${s.name}</div>
      <div class="hero-card-dots">${slides.map((_, di) => `<span class="${di === i ? "on" : ""}"></span>`).join("")}</div>
      <div class="hero-card-country">${s.country}</div>
    </div>
  `
    )
    .join("");

  cardsEl.querySelectorAll(".hero-card").forEach((card) => {
    card.addEventListener("click", () => {
      goToSlide(parseInt(card.dataset.index, 10));
      restartAutoplay();
    });
  });
}

function goToSlide(idx) {
  activeSlide = (idx + slides.length) % slides.length;
  const s = slides[activeSlide];
  document.querySelectorAll(".hero-slide").forEach((el, i) =>
    el.classList.toggle("active", i === activeSlide)
  );
  document.querySelectorAll(".hero-card").forEach((card, i) => {
    card.classList.toggle("active", i === activeSlide);
    card.querySelectorAll(".hero-card-dots span").forEach((dot, di) => {
      dot.classList.toggle("on", di === activeSlide);
    });
  });
  if (titleEl) titleEl.textContent = s.name.toUpperCase();
  if (countryEl) countryEl.textContent = s.country.toUpperCase();
  if (descEl) descEl.textContent = s.desc;
  if (numEl) numEl.textContent = String(activeSlide + 1).padStart(2, "0");
  if (bgTextEl) bgTextEl.textContent = s.country.toUpperCase();
}

function restartAutoplay() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => goToSlide(activeSlide + 1), 6500);
}

document.getElementById("prev-slide")?.addEventListener("click", () => {
  goToSlide(activeSlide - 1);
  restartAutoplay();
});
document.getElementById("next-slide")?.addEventListener("click", () => {
  goToSlide(activeSlide + 1);
  restartAutoplay();
});

renderSlides();
restartAutoplay();

/* ----- Marquee ----- */
const marqueeTrack = document.getElementById("marquee-track");
if (marqueeTrack) {
  // Duplicate for seamless loop
  marqueeTrack.innerHTML = [...marqueeImages, ...marqueeImages]
    .map((src) => `<div class="marquee-item"><img src="${src}" alt=""></div>`)
    .join("");
}

/* ----- Destinations grid ----- */
const grid = document.getElementById("destinations-grid");
if (grid) {
  grid.innerHTML = destinations
    .map(
      (d, i) => `
    <div class="dest-card reveal" data-reveal="up" style="transition-delay: ${(i % 3) * 0.1}s">
      <img src="${d.image}" alt="${d.name}">
      <div class="dest-card-num">${String(i + 1).padStart(2, "0")}</div>
      <div class="dest-card-content">
        <div class="dest-card-country">${d.country}</div>
        <h3 class="dest-card-name">${d.name}</h3>
        <p class="dest-card-desc">${d.desc}</p>
        <div class="dest-card-explore">Explore →</div>
      </div>
    </div>
  `
    )
    .join("");
}

/* ----- Experiences ----- */
const expGrid = document.getElementById("experiences-grid");
if (expGrid) {
  expGrid.innerHTML = experiences
    .map(
      (e, i) => `
    <div class="exp-card reveal" data-reveal="up" style="transition-delay: ${i * 0.1}s">
      <img src="${e.img}" alt="${e.title}">
      <div class="exp-card-content">
        <h3 class="exp-card-title">${e.title}</h3>
        <p class="exp-card-desc">${e.desc}</p>
      </div>
    </div>
  `
    )
    .join("");
}

/* ----- Reveal on scroll ----- */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* ----- Navbar scroll state ----- */
const navbar = document.getElementById("navbar");
if (navbar) {
  const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 60);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ----- Footer year ----- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
