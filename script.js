/*
  PENGATURAN OMAHSHOP
  1. Ganti WHATSAPP_NUMBER dengan nomor WhatsApp Ibu.
  2. Format nomor: kode negara 62, tanpa tanda +, spasi, atau strip.
  3. Data produk berjumlah 20 produk.
  4. Harga sementara tetap 0 sampai harga asli ditentukan.
*/

const WHATSAPP_NUMBER = "6281311065939";

const PRODUCTS = [
  {
    id: 1,
    name: "Atasan Model 01",
    category: "Atasan",
    price: 0,
    tag: "Gaya Simpel",
    description: "Lengkapi penampilan sehari-hari dengan atasan yang mudah dipadukan dengan berbagai pilihan bawahan.",
    image: "image/Gemini_Generated_Image_gqhdmugqhdmugqhd.jpeg"
  },
  {
    id: 2,
    name: "Setelan Model 01",
    category: "Setelan",
    price: 0,
    tag: "Tampil Serasi",
    description: "Pilihan setelan untuk kamu yang menyukai tampilan serasi dan praktis tanpa perlu repot memadukan pakaian.",
    image: "image/Gemini_Generated_Image_q84076q84076q840.jpeg"
  },
  {
    id: 3,
    name: "Setelan Model 02",
    category: "Setelan",
    price: 0,
    tag: "Anggun Menawan",
    description: "Setelan dengan tampilan menarik untuk menemani aktivitas sehari-hari maupun berbagai kesempatan santai.",
    image: "image/Gemini_Generated_Image_9ao1gk9ao1gk9ao1.jpeg"
  },
  {
    id: 4,
    name: "Setelan Model 03",
    category: "Setelan",
    price: 0,
    tag: "Elegan",
    description: "Pilihan setelan dengan gaya rapi yang cocok untuk kamu yang menyukai penampilan sederhana dan elegan.",
    image: "image/Gemini_Generated_Image_qbjb0pqbjb0pqbjb.jpeg"
  },
  {
    id: 5,
    name: "Setelan Model 04",
    category: "Setelan",
    price: 0,
    tag: "Pilihan Cantik",
    description: "Tambahkan sentuhan menarik pada gaya harianmu dengan pilihan setelan yang bisa disesuaikan dengan berbagai suasana.",
    image: "image/Gemini_Generated_Image_opde0iopde0iopde (1).jpeg"
  },
  {
    id: 6,
    name: "Setelan Model 05",
    category: "Setelan",
    price: 0,
    tag: "Stok Habis",
    soldOut: true,
    description: "Model setelan pilihan yang sedang habis stoknya. Hubungi Omahshop untuk menanyakan ketersediaan kembali.",
    image: "image/Gemini_Generated_Image_vs0cfqvs0cfqvs0c (1).jpeg"
  },
  {
    id: 7,
    name: "Setelan Model 06",
    category: "Setelan",
    price: 0,
    tag: "Klasik Chic",
    description: "Setelan bernuansa klasik untuk kamu yang menyukai gaya simpel, serasi, dan mudah dikenakan dalam keseharian.",
    image: "image/Gemini_Generated_Image_y82457y82457y824 (1).jpeg"
  },
  {
    id: 8,
    name: "Setelan Model 07",
    category: "Setelan",
    price: 0,
    tag: "Pesona Anggun",
    description: "Pilihan setelan dengan tampilan manis untuk melengkapi koleksi pakaian dan membuat gaya harian lebih menarik.",
    image: "image/Gemini_Generated_Image_o092ooo092ooo092 (1).jpeg"
  },
  {
    id: 9,
    name: "Setelan Model 08",
    category: "Setelan",
    price: 0,
    tag: "Segera Hadir",
    soldOut: true,
    description: "Produk ini sedang tidak tersedia. Silakan tanyakan kepada Omahshop apabila ingin mengetahui stok berikutnya.",
    image: "image/belummasuksama1.jpeg"
  },
  {
    id: 10,
    name: "Setelan Model 09",
    category: "Setelan",
    price: 0,
    tag: "Gaya Favorit",
    description: "Setelan pilihan untuk melengkapi penampilan sehari-hari. Hubungi kami untuk mengetahui detail produk dan ketersediaannya.",
    image: "image/belummasuksama2.jpeg"
  },
  {
    id: 11,
    name: "Setelan Kuning Motif Daun",
    category: "Setelan",
    price: 0,
    tag: "Motif Ceria",
    description: "Setelan kuning bermotif daun yang menghadirkan kesan ceria dan menarik bagi kamu yang menyukai motif bernuansa alam.",
    image: "image/Gemini_Generated_Image_mv0tl5mv0tl5mv0t (1).jpeg"
  },
  {
    id: 12,
    name: "Setelan Biru Motif Daun",
    category: "Setelan",
    price: 0,
    tag: "Motif Menawan",
    description: "Setelan biru bermotif daun untuk pilihan gaya bermotif yang menarik dan mudah menjadi pusat perhatian.",
    image: "image/Gemini_Generated_Image_pbop7opbop7opbop (1).jpeg"
  },
  {
    id: 15,
    name: "Setelan Model 10",
    category: "Setelan",
    price: 0,
    tag: "Tampil Menarik",
    description: "Pilihan setelan untuk menambah variasi koleksi pakaianmu. Tanyakan detail model dan stok langsung kepada Omahshop.",
    image: "image/Gemini_Generated_Image_79cvzo79cvzo79cv (1).jpeg"
  },
  {
    id: 16,
    name: "Setelan Model 11",
    category: "Setelan",
    price: 0,
    tag: "Gaya Kekinian",
    description: "Lengkapi koleksi pakaianmu dengan pilihan setelan yang menarik untuk menunjang gaya sehari-hari.",
    image: "image/Gemini_Generated_Image_qi8s5hqi8s5hqi8s (1).jpeg"
  },
  {
    id: 17,
    name: "Setelan Model 12",
    category: "Setelan",
    price: 0,
    tag: "Pilihan Istimewa",
    description: "Setelan pilihan untuk kamu yang ingin memiliki variasi gaya berpakaian. Hubungi Omahshop untuk informasi lebih lanjut.",
    image: "image/Gemini_Generated_Image_1yf12x1yf12x1yf1 (1).jpeg"
  },
  {
    id: 18,
    name: "Setelan Model 13",
    category: "Setelan",
    price: 0,
    tag: "Koleksi Cantik",
    description: "Tambahkan pilihan setelan baru ke dalam koleksimu dengan model yang bisa kamu lihat lebih dekat melalui foto produk.",
    image: "image/Gemini_Generated_Image_gi8boagi8boagi8b (1).jpeg"
  },
  {
    id: 19,
    name: "Celana Model 01",
    category: "Celana",
    price: 0,
    tag: "Mudah Dipadukan",
    description: "Pilihan celana untuk melengkapi atasan favoritmu. Padukan dengan gaya pilihanmu untuk penampilan sehari-hari.",
    image: "image/Gemini_Generated_Image_kl3whekl3whekl3w (1).jpeg"
  },
  {
    id: 20,
    name: "Celana Model 02",
    category: "Celana",
    price: 0,
    tag: "Gaya Serbaguna",
    description: "Lengkapi koleksi bawahanmu dengan pilihan celana yang dapat dipadukan bersama beragam atasan.",
    image: "image/Gemini_Generated_Image_esip06esip06esip (1).jpeg"
  },
  {
    id: 21,
    name: "Celana Model 03",
    category: "Celana",
    price: 0,
    tag: "Tampil Stylish",
    description: "Pilihan celana untuk melengkapi gaya berpakaianmu. Hubungi Omahshop untuk mengetahui detail dan ketersediaan produk.",
    image: "image/Gemini_Generated_Image_y71qgpy71qgpy71q (1).jpeg"
  },
  {
    id: 22,
    name: "Celana Model 04",
    category: "Celana",
    price: 0,
    tag: "Pilihan Favorit",
    description: "Temukan paduan gaya yang cocok dengan celana pilihan ini. Tanyakan informasi produk dan stok langsung kepada Omahshop.",
    image: "image/Gemini_Generated_Image_dga075dga075dga0 (1).jpeg"
  }
];

/* =========================================
   KATALOG PRODUK
   ========================================= */

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilters = document.getElementById("categoryFilters");
const productCount = document.getElementById("productCount");
const emptyState = document.getElementById("emptyState");

let activeCategory = "Semua";

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
}

function makeWhatsAppLink(product) {
  const message = [
    "Assalamu’alaikum, Omahshop. 😊",
    "Saya tertarik dengan produk ini:",
    "",
    `Nama produk: ${product.name}`,
    `Harga: ${formatRupiah(product.price)}`,
    "Jumlah: 1",
    "",
    "Boleh dibantu cek harga, stok, dan pilihan ukuran atau warnanya?",
    "Terima kasih."
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}

function renderProducts() {
  if (!productGrid || !searchInput) {
    console.error(
      "Omahshop: elemen katalog atau pencarian tidak ditemukan. Periksa ID di index.html."
    );
    return;
  }

  const keyword = searchInput.value.trim().toLocaleLowerCase("id-ID");

  const filtered = PRODUCTS.filter(product => {
    const matchesCategory =
      activeCategory === "Semua" ||
      product.category === activeCategory;

    const searchableText =
      `${product.name} ${product.category} ${product.description} ${product.tag}`
        .toLocaleLowerCase("id-ID");

    return matchesCategory && searchableText.includes(keyword);
  });

  productGrid.innerHTML = filtered.map(product => `
    <article class="product-card${product.soldOut ? " sold-out" : ""}">
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x750/f8f5ee/58664f?text=Omahshop';"
        >
        <span class="product-tag">${escapeHTML(product.tag)}</span>
        ${product.soldOut ? '<span class="sold-out-overlay">SOLD OUT</span>' : ""}
      </div>

      <div class="product-info-top">
        <div>
          <h3 class="product-name">${escapeHTML(product.name)}</h3>
          <span class="product-category">${escapeHTML(product.category)}</span>
        </div>
        <span class="product-price">${formatRupiah(product.price)}</span>
      </div>

      <p class="product-description">${escapeHTML(product.description)}</p>

      ${
        product.soldOut
          ? '<span class="buy-button sold-out-button" aria-disabled="true">Maaf, stok habis <span aria-hidden="true">×</span></span>'
          : `<a class="buy-button" href="${makeWhatsAppLink(product)}" target="_blank" rel="noopener">Tanya produk ini <span aria-hidden="true">↗</span></a>`
      }
    </article>
  `).join("");

  if (productCount) {
    productCount.textContent = `${filtered.length} produk`;
  }

  if (emptyState) {
    emptyState.hidden = filtered.length !== 0;
  }

  productGrid.hidden = filtered.length === 0;
}

if (searchInput) {
  searchInput.addEventListener("input", renderProducts);
}

if (categoryFilters) {
  categoryFilters.addEventListener("click", event => {
    const button = event.target.closest("button[data-category]");

    if (!button) return;

    activeCategory = button.dataset.category;

    categoryFilters.querySelectorAll(".filter-button").forEach(filter => {
      filter.classList.toggle("active", filter === button);
    });

    renderProducts();
  });
}

/* =========================================
   WHATSAPP DAN TAHUN FOOTER
   ========================================= */

const generalMessage = [
  "Assalamu’alaikum, Omahshop. 😊",
  "Saya mau tanya tentang produk yang tersedia.",
  "Boleh dibantu informasinya? Terima kasih."
].join("\n");

const generalLink =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(generalMessage)}`;

const generalWhatsapp = document.getElementById("generalWhatsapp");
const bottomWhatsapp = document.getElementById("bottomWhatsapp");
const yearElement = document.getElementById("year");

if (generalWhatsapp) {
  generalWhatsapp.href = generalLink;
}

if (bottomWhatsapp) {
  bottomWhatsapp.href = generalLink;
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

renderProducts();

/* =========================================
   SLIDESHOW INTERAKTIF OMAHSHOP
   ========================================= */

const heroSlideshow = document.getElementById("heroSlideshow");

const heroSlides = heroSlideshow
  ? Array.from(heroSlideshow.querySelectorAll(".hero-slide"))
  : [];

const heroPrev = document.getElementById("heroPrev");
const heroNext = document.getElementById("heroNext");
const heroDots = document.getElementById("heroDots");

let currentHeroSlide = 0;
let heroTimer = null;
let heroAnimationTimer = null;
let touchStartX = 0;
let touchStartY = 0;
let isAnimating = false;

const HERO_INTERVAL = 3000;
const HERO_TRANSITION = 650;

if (
  heroSlideshow &&
  heroSlides.length > 1 &&
  heroPrev &&
  heroNext &&
  heroDots
) {
  heroDots.innerHTML = heroSlides.map((slide, index) => `
    <button
      class="hero-dot${index === 0 ? " active" : ""}"
      type="button"
      aria-label="Tampilkan foto ${index + 1}"
      aria-pressed="${index === 0}"
      data-slide="${index}"
    ></button>
  `).join("");

  const dots = Array.from(heroDots.querySelectorAll(".hero-dot"));

  heroSlides.forEach((slide, index) => {
    slide.classList.remove(
      "active",
      "exit-left",
      "exit-right",
      "no-transition"
    );

    slide.style.transform = "";

    if (index === 0) {
      slide.classList.add("active");
    }
  });

  function updateHeroDots() {
    dots.forEach((dot, index) => {
      const isActive = index === currentHeroSlide;

      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-pressed", String(isActive));
    });
  }

  function showHeroSlide(targetIndex, direction = 1) {
    if (isAnimating || targetIndex === currentHeroSlide) return;

    const previousSlide = heroSlides[currentHeroSlide];
    const nextSlide = heroSlides[targetIndex];

    isAnimating = true;

    window.clearTimeout(heroAnimationTimer);

    nextSlide.classList.add("no-transition");
    nextSlide.classList.remove(
      "active",
      "exit-left",
      "exit-right"
    );

    nextSlide.style.transform =
      direction > 0 ? "translateX(100%)" : "translateX(-100%)";

    void nextSlide.offsetWidth;

    nextSlide.classList.remove("no-transition");
    nextSlide.style.transform = "";

    previousSlide.classList.remove("active");

    if (direction > 0) {
      previousSlide.classList.add("exit-left");
    } else {
      previousSlide.classList.add("exit-right");
    }

    nextSlide.classList.add("active");

    currentHeroSlide = targetIndex;
    updateHeroDots();

    heroAnimationTimer = window.setTimeout(() => {
      previousSlide.classList.add("no-transition");
      previousSlide.classList.remove("exit-left", "exit-right");
      previousSlide.style.transform = "";

      void previousSlide.offsetWidth;

      previousSlide.classList.remove("no-transition");

      isAnimating = false;
    }, HERO_TRANSITION);
  }

  function nextHeroSlide() {
    showHeroSlide(
      (currentHeroSlide + 1) % heroSlides.length,
      1
    );
  }

  function previousHeroSlide() {
    showHeroSlide(
      (currentHeroSlide - 1 + heroSlides.length) % heroSlides.length,
      -1
    );
  }

  function restartHeroTimer() {
    window.clearInterval(heroTimer);

    heroTimer = window.setInterval(() => {
      if (!isAnimating) {
        nextHeroSlide();
      }
    }, HERO_INTERVAL);
  }

  heroNext.addEventListener("click", () => {
    if (isAnimating) return;

    nextHeroSlide();
    restartHeroTimer();
  });

  heroPrev.addEventListener("click", () => {
    if (isAnimating) return;

    previousHeroSlide();
    restartHeroTimer();
  });

  heroDots.addEventListener("click", event => {
    const dot = event.target.closest("button[data-slide]");

    if (!dot || isAnimating) return;

    const targetIndex = Number(dot.dataset.slide);

    if (
      !Number.isInteger(targetIndex) ||
      targetIndex < 0 ||
      targetIndex >= heroSlides.length
    ) {
      return;
    }

    const direction = targetIndex > currentHeroSlide ? 1 : -1;

    showHeroSlide(targetIndex, direction);
    restartHeroTimer();
  });

  heroSlideshow.addEventListener("touchstart", event => {
    const touch = event.changedTouches[0];

    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }, { passive: true });

  heroSlideshow.addEventListener("touchend", event => {
    const touch = event.changedTouches[0];

    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;

    if (
      Math.abs(deltaX) < 45 ||
      Math.abs(deltaX) < Math.abs(deltaY) ||
      isAnimating
    ) {
      return;
    }

    if (deltaX < 0) {
      nextHeroSlide();
    } else {
      previousHeroSlide();
    }

    restartHeroTimer();
  }, { passive: true });

  heroSlideshow.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") {
      event.preventDefault();

      if (!isAnimating) {
        nextHeroSlide();
        restartHeroTimer();
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();

      if (!isAnimating) {
        previousHeroSlide();
        restartHeroTimer();
      }
    }
  });

  updateHeroDots();
  restartHeroTimer();
}