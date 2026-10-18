
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
    image: "image/Gemini_Generated_Image_gqhdmugqhdmugqhd.jpeg"
  },
  {
    id: 2, name: "Hijab Pashmina", category: "Hijab", price: 45000, tag: "Mudah dipadu",
    description: "Pashmina simpel untuk gaya santun sehari-hari.",
    image: "image/Gemini_Generated_Image_q84076q84076q840.jpeg"
  },
  {
    id: 3, name: "Gamis Daily", category: "Gamis", price: 135000, tag: "Pilihan harian",
    description: "Potongan longgar yang nyaman untuk beraktivitas.",
    image: "image/Gemini_Generated_Image_9ao1gk9ao1gk9ao1.jpeg"
  },
  {
    id: 4, name: "Tunik Casual", category: "Atasan", price: 89000, tag: "Versatile",
    description: "Atasan santun yang mudah dipadukan dengan rok atau celana.",
    image: "image/Gemini_Generated_Image_qbjb0pqbjb0pqbjb.jpeg"
  },
  {
    id: 5, name: "Inner Hijab", category: "Aksesori", price: 18000, tag: "Basic",
    description: "Pelengkap hijab untuk membantu pemakaian terasa nyaman.",
    image: "image/Gemini_Generated_Image_opde0iopde0iopde (1).jpeg"
  },
  {
    id: 6, name: "Khimar Basic", category: "Hijab", price: 55000, tag: "Simple",
    description: "Khimar dengan gaya sederhana untuk tampilan anggun.",
    image: "image/Gemini_Generated_Image_vs0cfqvs0cfqvs0c (1).jpeg"
  },
  {
    id: 7, name: "Setelan Muslimah", category: "Atasan", price: 149000, tag: "Matching set",
    description: "Setelan praktis untuk tampilan serasi tanpa repot.",
    image: "image/Gemini_Generated_Image_y82457y82457y824 (1).jpeg"
  },
  {
    id: 8, name: "Bros Hijab", category: "Aksesori", price: 15000, tag: "Little detail",
    description: "Aksesori kecil untuk melengkapi tampilan hijab.",
    image: "image/Gemini_Generated_Image_o092ooo092ooo092 (1).jpeg"
  },
  {
    id: 9, name: "Gaun Hitam", category: "Gamis", price: 80000, tag: "Koleksi baru",
    description: "Gaun hitam dengan tampilan simpel dan elegan untuk berbagai kesempatan.",
    image: "image/belummasuksama1.jpeg"
  },
  {
    id: 10, name: "Gaun Hitam Bintik", category: "Gamis", price: 73000, tag: "Koleksi baru",
    description: "Gaun hitam bermotif bintik dengan tampilan manis dan anggun.",
    image: "image/belummasuksama2.jpeg"
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