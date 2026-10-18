/*
  PENGATURAN OMAHSHOP
  1. Ganti WHATSAPP_NUMBER dengan nomor WhatsApp Ibu.
  2. Format: kode negara 62, tanpa tanda +, spasi, atau strip.
     Contoh nomor 081234567890 menjadi 6281234567890.
  3. Ubah daftar produk di PRODUCTS untuk menyesuaikan barang asli.
*/
const WHATSAPP_NUMBER = "6281311065939";

const PRODUCTS = [
  {
    id: 1, name: "Hijab Voal Daily", category: "Hijab", price: 35000, tag: "Favorit",
    description: "Hijab ringan dengan tampilan rapi untuk aktivitas harian.",
    image: "Gemini_Generated_Image_9ao1gk9ao1gk9ao1"
  },
  {
    id: 2, name: "Hijab Pashmina", category: "Hijab", price: 45000, tag: "Mudah dipadu",
    description: "Pashmina simpel untuk gaya santun sehari-hari.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 3, name: "Gamis Daily", category: "Gamis", price: 135000, tag: "Pilihan harian",
    description: "Potongan longgar yang nyaman untuk beraktivitas.",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 4, name: "Tunik Casual", category: "Atasan", price: 89000, tag: "Versatile",
    description: "Atasan santun yang mudah dipadukan dengan rok atau celana.",
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 5, name: "Inner Hijab", category: "Aksesori", price: 18000, tag: "Basic",
    description: "Pelengkap hijab untuk membantu pemakaian terasa nyaman.",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 6, name: "Khimar Basic", category: "Hijab", price: 55000, tag: "Simple",
    description: "Khimar dengan gaya sederhana untuk tampilan anggun.",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbdde81?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 7, name: "Setelan Muslimah", category: "Atasan", price: 149000, tag: "Matching set",
    description: "Setelan praktis untuk tampilan serasi tanpa repot.",
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: 8, name: "Bros Hijab", category: "Aksesori", price: 15000, tag: "Little detail",
    description: "Aksesori kecil untuk melengkapi tampilan hijab.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=85"
  }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilters = document.getElementById("categoryFilters");
const productCount = document.getElementById("productCount");
const emptyState = document.getElementById("emptyState");
let activeCategory = "Semua";

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency", currency: "IDR", maximumFractionDigits: 0
  }).format(value);
}

function makeWhatsAppLink(product) {
  const message = [
    "Assalamu’alaikum Omahshop, saya ingin tanya/pesan produk:",
    "",
    `Produk: ${product.name}`,
    `Harga: ${formatRupiah(product.price)}`,
    "Jumlah: 1",
    "",
    "Apakah stok dan pilihan warnanya masih tersedia? Terima kasih."
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderProducts() {
  const keyword = searchInput.value.trim().toLocaleLowerCase("id-ID");
  const filtered = PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === "Semua" || product.category === activeCategory;
    const searchableText = `${product.name} ${product.category} ${product.description}`.toLocaleLowerCase("id-ID");
    return matchesCategory && searchableText.includes(keyword);
  });

  productGrid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${escapeHTML(product.name)}" loading="lazy"
             onerror="this.onerror=null;this.src='https://placehold.co/600x750/f8f5ee/58664f?text=Omahshop';">
        <span class="product-tag">${escapeHTML(product.tag)}</span>
      </div>
      <div class="product-info-top">
        <div>
          <h3 class="product-name">${escapeHTML(product.name)}</h3>
          <span class="product-category">${escapeHTML(product.category)}</span>
        </div>
        <span class="product-price">${formatRupiah(product.price)}</span>
      </div>
      <p class="product-description">${escapeHTML(product.description)}</p>
      <a class="buy-button" href="${makeWhatsAppLink(product)}" target="_blank" rel="noopener">
        Tanya / pesan <span aria-hidden="true">↗</span>
      </a>
    </article>
  `).join("");

  productCount.textContent = `${filtered.length} produk`;
  emptyState.hidden = filtered.length !== 0;
  productGrid.hidden = filtered.length === 0;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[character]));
}

searchInput.addEventListener("input", renderProducts);
categoryFilters.addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  categoryFilters.querySelectorAll(".filter-button").forEach(filter => {
    filter.classList.toggle("active", filter === button);
  });
  renderProducts();
});

const generalMessage = "Assalamu’alaikum Omahshop, saya ingin bertanya tentang produk yang tersedia.";
const generalLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(generalMessage)}`;
document.getElementById("generalWhatsapp").href = generalLink;
document.getElementById("bottomWhatsapp").href = generalLink;
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
