import imakomport from "./image/imakomport.png";
import cocult from "./image/cocult.png";
import itfash from "./image/itfash.png";

export type Layanan = {
  title: string;
  excerpt: string;
  image: string;
};

export const portfolioType: Layanan[] = [
  {
    title: "Website Imakom UNPAB Medan.",
    excerpt:
      "Website ini adalah website resmi sebuah organisasi internal di universitas pembangunan panca budi yaitu IKATAN MAHASISWA KOMPUTER",
    image: imakomport.src,
  },
  {
    title: "Aplikasi Web COCULT",
    excerpt:
      "Cocult Adalah Website Yang bermain di industri ecommerce yang mengedepankan bahan masakan sebagai komponen utama perusahaan ini dengen berbagai fitur yang memudahkan ibu rumah tangga khususnya",
    image: cocult.src,
  },
  {
    title: "IT-Fash & IT-Camp",
    excerpt:
      "Website ini adalah website sebuah organisasi yang ingin membuat sebuah kegiatan lomba dengan branding kegiatan salah satunya menggunakan website",
    image: itfash.src,
  },
];
