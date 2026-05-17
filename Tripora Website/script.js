const slides = [
  {
    id: "palawan",
    name: "Palawan",
    country: "Philippines",
    image: "https://www.beautifulworld.com/wp-content/uploads/2016/10/PALAWAN-ISLAND.jpg.webp",
    desc: "Glide through emerald lagoons hidden between towering limestone cliffs. Sleep where the sea is the only soundtrack and the stars feel close enough to touch.",
  },
  {
    id: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    image: "https://www.shutterstock.com/image-photo/sunset-over-historic-istanbul-mosque-600nw-2706707905.jpg",
    desc: "Where continents and centuries collide. Drift between bazaars, Bosphorus ferries, and rooftop calls to prayer at dusk.",
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Indian Ocean",
    image: "https://img.magnific.com/premium-photo/picturesque-sunrise-maldives-island-sun-rising-from-indian-ocean-reflected-water-travel-concept-palm-trees-hanging-water_154634-839.jpg",
    desc: "Overwater villas, bioluminescent shores, and the deepest blue you have ever seen. Pure horizon-line therapy.",
  },
  {
    id: "queenstown",
    name: "Queens town",
    country: "New Zealand",
    image: "https://images.tourscanner.com/wp-content/uploads/2023/03/things-to-do-in-Queenstown-New-Zealand.jpg",
    desc: "Neon-soaked alleys and centuries-old shrines, hidden ramen counters and skyline observatories — a city of beautiful contradictions.",
  },
];

const destinations = [
  { id: "palawan", name: "Palawan", country: "Philippines", image: "https://wallpapers.com/images/high/palawan-beach-of-the-philippines-3phgsk1a5n0m0i4k.webp", desc: "Limestone karsts and emerald lagoons." },
  { id: "tokyo", name: "Tokyo", country: "Japan", image: "https://images.squarespace-cdn.com/content/v1/643edfc732ef0912a0515118/1683030690272-1027FSG16OQ4X8DCHGLX/KNOF-curiocity-guides-Tokyo-Japan", desc: "Neon streets and tranquil shrines." },
  { id: "istanbul", name: "Istanbul", country: "Turkey", image: "https://i.pinimg.com/474x/4f/2a/35/4f2a351eb8de34a88f1b576082d7fb7e.jpg", desc: "Where continents and eras collide." },
  { id: "maldives", name: "Maldives", country: "Indian Ocean", image: "https://i2.pickpik.com/photos/638/272/887/maldives-travel-indian-ocean-ocean-preview.jpg", desc: "Overwater serenity in turquoise water." },
  { id: "bali", name: "Bali", country: "Indonesia", image: "https://www.annees-de-pelerinage.com/wp-content/uploads/2018/09/Penida-Island-bali-indonesia-685x1024.jpg", desc: "Jungle terraces and spiritual escapes." },
  { id: "santorini", name: "Santorini", country: "Greece", image: "https://i.pinimg.com/236x/7c/28/ea/7c28eaf433cee4728de91f55122a5fe5.jpg?nii=t", desc: "Whitewashed cliffs over sapphire seas." },
  { id: "kyoto", name: "Kyoto", country: "Japan", image: "https://i.pinimg.com/736x/ae/af/b4/aeafb4826310aa3f274e4c741780eb7e.jpg", desc: "Lantern-lit streets and ancient temples." },
  { id: "patagonia", name: "Patagonia", country: "Chile", image: "https://i.pinimg.com/474x/4d/f8/34/4df8342aa3687173f99a5940b1781302.jpg", desc: "Untamed glaciers at the edge of the world." },
  { id: "dubai", name: "Dubai", country: "UAE", image: "https://cdn.wallpapersafari.com/66/18/Unz9XZ.jpg", desc: "Skyline of glass and gold above the dunes." },
  { id: "thailand", name: "Thailand", country: "Southeast Asia", image: "https://images.squarespace-cdn.com/content/v1/6420c596140c9344224d1692/1739240514895-AIODA0ZCZHYKIRXFUMVJ/unsplash-image-ytZOB9FLIqk.jpg", desc: "Limestone islands and longtail sunsets." },
  { id: "kerala", name: "Kerala", country: "India", image: "https://i.pinimg.com/736x/c1/da/cb/c1dacbefe167f0153954ca19518b2ff2.jpg", desc: "Houseboats drifting through palm-lined backwaters." },
  { id: "georgia", name: "Georgia", country: "Caucasus", image: "https://beyondwildplaces.com/wp-content/uploads/2021/12/Svaneti-region-Caucasus.jpg", desc: "Stone churches in the shadow of Kazbek." },
];

const experiences = [
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQHggpg9wRMcGc8I3pohTuZ8fx52uT1YitWQ&s", title: "Romantic Escapes", desc: "Private beaches, sunset strolls." },
  { img: "https://thumbs.dreamstime.com/b/exclusive-private-jet-boarding-experience-glimpse-unparalleled-travel-luxury-step-aboard-pinnacle-351480215.jpg", title: "Unparalleled Luxury", desc: "Awaken to ocean views." },
  { img: "https://t4.ftcdn.net/jpg/02/74/75/59/360_F_274755986_wgBdzMHVMP96J6V9F4l7y5Befw3iwfqj.jpg", title: "Edible Adventures", desc: "Markets, omakase, dive bars." },
  { img: "https://thumbs.dreamstime.com/b/peaceful-evening-rocky-adriatic-shore-under-clear-blue-sky-petrovac-montenegro-summer-vacation-vibes-447786642.jpg", title: "Wild Frontiers", desc: "Glaciers, fjords, no signal." },
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

let activeSlide = 0;
let slideInterval;

const slidesEl = document.getElementById("hero-slides"); //These is the code that needs to update for the page to change when sliding
const cardsEl = document.getElementById("hero-cards");
const titleEl = document.getElementById("hero-title");
const countryEl = document.getElementById("hero-country");
const descEl = document.getElementById("hero-desc");
const numEl = document.getElementById("slide-num");
const bgTextEl = document.getElementById("hero-bg-text");

function bookmarkSvg() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z"/></svg>';
}

function renderSlides() {  //This makes all the slide images and builds the small cards from the imagies provided above
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

function goToSlide(idx) { //This code is for when you click on a card or the arrows, then this code updates everything
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

function restartAutoplay() { //This will reset the timer for the autoslide, so that it doesnt skip if you click
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

const marqueeTrack = document.getElementById("marquee-track");
if (marqueeTrack) {
  // Duplicate for seamless loop
  marqueeTrack.innerHTML = [...marqueeImages, ...marqueeImages]
    .map((src) => `<div class="marquee-item"><img src="${src}" alt=""></div>`)
    .join("");
}

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

const observer = new IntersectionObserver( //This code is for the elements, it adds a class when they show on screen and it animates them
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

const navbar = document.getElementById("navbar");
if (navbar) {
  const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 60); 
  window.addEventListener("scroll", onScroll, { passive: true }); //This code makes the navbar change and look differenct if the user starts scrolling down
  onScroll();
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const modalOverlay = document.getElementById("booking-modal-overlay");
const modalClose = document.getElementById("booking-modal-close");
const refCodeEl = document.getElementById("booking-ref-code");

function generateRef() { //This makes a random booking code, for the confirmation to popup. I rushed this part so i put basic code since this is not a neccesity
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "TRP-";
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

function openBookingModal(e) { //This prevents the link from going anywhere then shows the booking popup
  e.preventDefault();
  if (refCodeEl) refCodeEl.textContent = generateRef();
  if (modalOverlay) modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeBookingModal() {
  if (modalOverlay) modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

document.querySelectorAll('a[href="palawan.html"], .nav-actions .btn-primary, .booking-btn').forEach((el) => { //This code sticks the booking popup to all the "book now" buttons on the page. Also an issue with this code is sometimes when clicking another button, it might give u a confirmation code
  el.addEventListener("click", openBookingModal);
});

document.querySelector(".hero-btn")?.addEventListener("click", openBookingModal);

if (modalClose) modalClose.addEventListener("click", closeBookingModal);

if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeBookingModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeBookingModal();
});
