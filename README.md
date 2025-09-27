# Proyek Capstone: Tic Tac Toe

## Deskripsi Proyek
Proyek ini adalah implementasi web modern dari permainan klasik Tic Tac Toe sebagai bagian dari Capstone Project HACKTIV8 Student Developer Initiative. Aplikasi ini berevolusi dari sebuah game sederhana menjadi aplikasi yang kaya fitur, dibangun menggunakan HTML, CSS, dan JavaScript dasar, serta memanfaatkan bantuan AI (IBM Granite) untuk mempercepat proses pengembangan awal.

## Teknologi yang Digunakan
- **Frontend:** HTML5, CSS3 (Flexbox, Grid, Animations), JavaScript (ES6)
- **Penyimpanan**: Web Storage API (`localStorage`)
- **Asisten Pengembangan:** IBM Granite (diakses melalui Replicate)

## Fitur-Fitur
- **Dua Mode Permainan**: Pengguna dapat memilih untuk bermain melawan pemain lain (Player vs. Player) atau menguji kemampuan melawan komputer (Player vs. AI).
- **Lawan AI Cerdas**: Logika AI dirancang untuk dapat bertahan dari serangan pemain dan memanfaatkan kesempatan untuk menang.
- **Sistem Papan Skor**: Melacak skor kemenangan untuk setiap pemain secara *real-time*.
- **Penyimpanan Skor (localStorage)**: Skor permainan akan tersimpan di browser, sehingga tidak akan hilang meskipun halaman di-refresh atau ditutup.
- **Animasi Garis Kemenangan**: Memberikan umpan balik visual yang jelas saat salah satu pemain memenangkan permainan.
- **Fungsi Reset Ganda**: Tombol "Reset Game" untuk memulai ulang papan permainan, dan tombol "Reset Skor" terpisah untuk menghapus seluruh data skor yang tersimpan.
- **Desain Responsif**: Antarmuka pengguna dirancang agar nyaman digunakan di berbagai perangkat.

## Instruksi Pengaturan
1.  **Clone repositori ini:**
    ```sh
    git clone https://github.com/ofikur/tictactoe-capstone-project.git

2.  **Masuk ke direktori proyek:**
    ```sh
    cd tictactoe-capstone-project
    ```

3.  **Jalankan di browser:**
    Cara termudah adalah dengan menggunakan ekstensi **Live Server** di Visual Studio Code.
    -   Klik kanan pada file `index.html`.
    -   Pilih "Open with Live Server".

    Alternatif lain adalah dengan membuka file `index.html` langsung di browser Anda.

## Penjelasan Dukungan AI (AI Support Explanation)
Proses pengembangan proyek ini mengadopsi model kolaborasi Manusia-AI. AI (IBM Granite) digunakan sebagai akselerator pada tahap awal, sementara logika kompleks dan fitur lanjutan dikembangkan sepenuhnya oleh developer.

### Sesi 1: Fondasi Proyek dengan AI (Generasi Boilerplate)
-   **Tujuan:** Mempercepat pembuatan struktur dasar HTML dan CSS.
-   **Interaksi:** AI diberi prompt untuk membuat layout papan Tic Tac Toe yang responsif.
-   **Dampak:** AI berhasil menyediakan boilerplate yang solid dalam hitungan detik, **menghemat sekitar 15-20 menit** waktu setup awal. Ini memungkinkan saya untuk langsung fokus pada fungsionalitas inti.

### Sesi 2: Kerangka Logika Awal dengan AI (Generasi JavaScript)
-   **Tujuan:** Membuat kerangka dasar logika permainan.
-   **Interaksi:** AI diberi prompt untuk menulis fungsi-fungsi dasar JavaScript untuk Tic Tac Toe.
-   **Dampak:** AI memberikan struktur awal yang baik, namun outputnya **tidak lengkap** (terpotong karena batas token). Ini menjadi titik balik di mana peran developer menjadi dominan.

### Sesi 3: Peningkatan oleh Developer (Melampaui Hasil AI)
-   **Tujuan:** Mengidentifikasi keterbatasan output AI dan membangun fitur-fitur canggih di atas fondasi yang ada.
-   **Tindakan Developer:** Setelah kerangka dasar terbentuk, saya mengambil alih sepenuhnya dan mengimplementasikan fitur-fitur berikut secara manual:
    1.  **Logika Player vs. AI:** Merancang dan menulis algoritma untuk lawan komputer.
    2.  **Sistem Papan Skor & Penyimpanan localStorage:** Menambahkan manajemen state untuk melacak dan menyimpan skor.
    3.  **Animasi Garis Kemenangan:** Mengimplementasikan logika dan styling CSS tingkat lanjut untuk visual kemenangan.
    4.  **Sistem Mode Permainan:** Membangun fungsionalitas untuk memilih mode permainan.
    5.  **Refaktorisasi & Debugging:** Mengoptimalkan dan memperbaiki seluruh kode untuk memastikan fungsionalitas yang solid.

### Kesimpulan Kolaborasi
Secara keseluruhan, AI berperan sebagai *starter pack* yang sangat baik untuk mengatasi tahap awal yang repetitif. Namun, peran developer sebagai arsitek, pemecah masalah, dan penyempurna tetap menjadi kunci untuk mengubah fondasi sederhana tersebut menjadi aplikasi yang fungsional, kompleks, dan profesional.