TUGAS AKHIR STUDY CLUB KSM ANDROID FRONT END INTERMEDIATE

Muhammad Fadhil Musyaffa ||
Muhammad Arief Budiman

================================================================

## NAMA APLIKASI

LAYARKACA31

## DESKRIPSI

Repositori ini dibuat dengan rangka menyelesaikan tugas akhir kelas Web Intermediate Study Club KSM Android yang diberikan. Fitur-fitur yang ada di website ini antara lain.

## POIN-POIN PENTING

**App directory dan routing (statis dan dinamis) :**
Statis terdapat pada opsi-opsi pada navbar seperti Popular, Upcoming, dst. . Dinamis terdapat pada movieListId dimana detail dari sebuah movie dimuat disana

**Environment variable, Next.js configuration, dan JS/TS configuration :**
Environment variable digunakan untuk menyimpan key API dan URL dari website yang digunakan. konfig nextjs digunakan untuk memberi akses terhadap website yang digunakan dan. JS config untuk mengakses folder image.

**Tailwind CSS, custom font pada Next.js, dan responsive web design :**
Responsive dan tailwind dipakai di setiap halaman projek yang dibuat. Font custom yang digunakan adalah Poppins yang dimuat di layout.js root.

**Next Image :**
Digunakan hampir pada seluruh gambar yang dimuat pada projek ini, salah satunya adalah load gambar pada MovieListId

**React Context dan components (client dan server) :**
Digunakan pada Search Bar yang ada di Header untuk memfilter movie yang muncul di halaman utama

**SSG, ISR, dan SSR :**
**SSG** digunakan hampir pada seluruh halaman yang melakukan fetching API. **ISR** digunakan pada halaman MovieList/Home dan Popular. **SSR** digunakan pada halaman Upcoming.

**Metadata (statis dan dinamis), custom error dan loading page, dan error serta loading layout :**
Metadata telah diberikan yaitu sebuah title berupa fadhil arief FE dan deskripsinya yaitu "Website ini dibuat dengan rangka menyelesaikan tugas FE yang diberikan". untuk dinamis dapat dilihat di komponen DMetadata.jsx

**Refactoring Components :**
Komponen MovieCard diubah menjadi sebuah komponen dikarenakan movie card dipakai di halaman home, upcoming, popular, dan sebagainya,

**Deploying proyek Next.js pada Vercel dan SEO checking :**
Deploying proyek Next.js sudah dilakukan dengan link berikut : https://layarkaca31-fadhil-arief-finpro.vercel.app
Setelah dilakukan pengecekan SEO, maka projek yang dibuat telah mendapakan skor sebesar 73 untuk performance, 89 untuk accessibility, 100 untuk best practices, dan 100 untuk SEO
