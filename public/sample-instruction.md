# HTML Dasar: Membuat Halaman Web Sederhana

## Pengantar
Dalam pelajaran ini, Anda akan belajar dasar-dasar HTML dan bagaimana membuat halaman web sederhana. HTML (HyperText Markup Language) adalah bahasa yang digunakan untuk membuat struktur halaman web.

### Langkah 1: Memahami Struktur Dasar HTML
HTML menggunakan tag untuk membungkus berbagai elemen di dalam halaman web. Tag HTML ditulis di antara tanda kurung sudut (< dan >). Berikut adalah contoh struktur dasar HTML:

```
<!DOCTYPE html>
<html>
<head>
    <title>Halaman Web Saya</title>
</head>
<body>
    <h1>Selamat Datang di Halaman Web Saya</h1>
    <p>Ini adalah paragraf pertama saya.</p>
</body>
</html>
```

Penjelasan:

- `<!DOCTYPE html>`: Menentukan bahwa dokumen ini adalah dokumen HTML5.
- `<html>`: Elemen root dari dokumen HTML.
- `<head>`: Bagian kepala dokumen, berisi metadata seperti judul dokumen.
- `<title>`: Menentukan judul dokumen yang muncul di tab browser.
- `<body>`: Bagian tubuh dokumen, berisi konten yang akan ditampilkan di halaman web.

### Langkah 2: Menambahkan Heading dan Paragraf
Heading digunakan untuk membuat judul dan subjudul. HTML memiliki enam level heading (`<h1>` sampai `<h6>`), dengan `<h1>` sebagai yang terbesar.

Tambahkan kode berikut ke dalam elemen `<body>`:

```html
<h2>Subjudul Saya</h2>
<p>Ini adalah paragraf kedua saya.</p>
<p>HTML mudah dipelajari!</p>
```

Penjelasan:
- `<h2>`: Heading level 2.
- `<p>`: Elemen paragraf.

### Langkah 3: Menambahkan Tautan
Anda dapat menambahkan tautan ke halaman lain menggunakan elemen <a>. Tambahkan kode berikut di bawah paragraf terakhir:

```html
<a href="https://www.example.com">Kunjungi Example.com</a>
```

Penjelasan:
- `<a href="URL">`: Membuat tautan ke URL yang ditentukan.

### Langkah 4: Menambahkan Gambar
Anda dapat menambahkan gambar menggunakan elemen `<img>`. Tambahkan kode berikut di bawah tautan:

```html
<img src="https://www.example.com/gambar.jpg" alt="Contoh Gambar">
```

Penjelasan:
- `<img src="URL" alt="deskripsi">`: Menyisipkan gambar dari URL yang ditentukan dengan teks alternatif.

### Langkah 5: Menyimpan dan Melihat Hasil
Simpan dokumen HTML Anda dengan ekstensi .html (misalnya, index.html). Buka file tersebut di browser untuk melihat hasilnya.

Selamat! Anda telah membuat halaman web sederhana menggunakan HTML. Teruslah berlatih dan eksplorasi elemen HTML lainnya untuk memperkaya halaman web Anda.

### Latihan Tambahan
- Tambahkan daftar (ordered list `<ol>` atau unordered list `<ul>`) ke halaman web Anda.
- Cobalah menambahkan tabel menggunakan elemen `<table>`.
