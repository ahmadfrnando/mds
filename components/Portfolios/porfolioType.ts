import imakomport from "./image/imakomport.png";
import cocult from "./image/cocult.png";
import itfash from "./image/itfash.png";
import nanshop from "./image/nanshop.png";
import neighbour from "./image/neighbour.png";
import webportfolio from "./image/webpersonal.png";

export type Layanan = {
  title: string;
  excerpt: string;
  image: string;
  link: string;
};

export const portfolioType: Layanan[] = [
  {
    title: "Website Imakom UNPAB Medan.",
    excerpt:
      "Website ini adalah website resmi sebuah organisasi internal di universitas pembangunan panca budi yaitu IKATAN MAHASISWA KOMPUTER",
    image: imakomport.src,
    link: 'https://imakomunpabmedan.com/',
  },
  {
    title: "Aplikasi Web COCULT",
    excerpt:
      "Cocult Adalah Website Yang bermain di industri ecommerce yang mengedepankan bahan masakan sebagai komponen utama perusahaan ini dengen berbagai fitur yang memudahkan ibu rumah tangga khususnya",
    image: cocult.src,
    link: '#',
  },
  {
    title: "IT-Fash & IT-Camp",
    excerpt:
      "Website ini adalah website sebuah organisasi yang ingin membuat sebuah kegiatan lomba dengan branding kegiatan salah satunya menggunakan website",
    image: itfash.src,
    link: '#',
  },
  {
    title: "Nanshop",
    excerpt:
      "Aplikasi ini diciptakan untuk menjual produk jadi lebih mudah.",
    image: nanshop.src,
    link: 'https://ahmadfrnando.github.io/ecommerce/',
  },
  {
    title: "Website Personal Portfolio",
    excerpt:
      "Website ini adalah website personal untuk mempresentasikan dirinya kedunia internet.",
    image: webportfolio.src,
    link: 'https://portfolio2-nando.vercel.app/',
  },
  {
    title: "Neighbour Good",
    excerpt:
      "Website ini adalah landing page dari sebuah bisnis start up untuk membuat koneksi antar tetanngga jadi lebih mudah.",
    image: neighbour.src,
    link: 'https://ahmadfrnando.github.io/landing-page/',
  },
];
