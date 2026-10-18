# Omahshop Muslimah

Website katalog fashion muslimah sederhana (HTML, CSS, JavaScript) dengan filter produk dan pemesanan WhatsApp.

## Hubungkan ke WhatsApp Ibu
1. Buka `script.js` dengan Visual Studio Code atau Notepad.
2. Di bagian paling atas, cari:
   `const WHATSAPP_NUMBER = "6281234567890";`
3. Ganti nomor contoh itu dengan nomor WhatsApp Ibu. Contoh jika nomor Ibu `081234567890`, tulis `6281234567890`.
4. Jangan pakai tanda `+`, spasi, atau strip.
5. Simpan file. Refresh `index.html` di browser untuk mengetes.
6. Klik tombol **Tanya / pesan**, **Hubungi Omahshop**, atau tombol WhatsApp mengambang. Semuanya akan mengarah ke nomor yang sama.

## Edit produk
Di `script.js`, edit array `PRODUCTS`. Setiap produk memiliki:
- `name`: nama produk
- `category`: salah satu kategori yang dipakai filter (Hijab, Gamis, Atasan, Aksesori)
- `price`: harga berupa angka, tanpa titik atau simbol Rp
- `tag`: label kecil di foto
- `description`: deskripsi pendek
- `image`: URL foto produk, atau path lokal seperti `images/hijab-voal.jpg`

Harga dan foto di paket ini masih contoh/ilustrasi. Ganti dengan data dan foto produk asli sebelum dipublikasikan. Pastikan punya hak menggunakan foto yang dipasang.

## Menjalankan di komputer
1. Ekstrak ZIP.
2. Buka `index.html` dengan browser, atau buka folder di VS Code dan gunakan Live Server.
3. Edit `script.js` dan `style.css` sesuai kebutuhan. Setelah menyimpan, refresh browser.

## Publikasi gratis ke GitHub Pages
1. Login/buat akun di https://github.com/.
2. Buat repository baru bernama `omahshop` dan pilih Public.
3. Unggah `index.html`, `style.css`, `script.js`, `README.md`, serta folder `images` jika digunakan ke root repository.
4. Buka **Settings → Pages**.
5. Pilih **Deploy from a branch**, branch `main`, folder `/(root)`, lalu klik **Save**.
6. Tunggu hingga GitHub Pages memberi URL, umumnya `https://USERNAME.github.io/omahshop/`.

## Catatan
- Website ini katalog statis. Pesanan dikirim ke WhatsApp dan tidak disimpan ke database.
- Pembeli perlu menekan tombol kirim di WhatsApp.
- Konfirmasi stok, warna, ukuran, ongkir, dan pembayaran dilakukan manual.
- Website memakai foto contoh dari URL eksternal; ganti dengan foto produk sendiri agar katalog benar-benar sesuai barang yang dijual.
