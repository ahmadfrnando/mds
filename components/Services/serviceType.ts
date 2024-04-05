export type Layanan = {
    category: string;
    firstprice: string;
    secondprice: string;
    feature: string[];
    border: boolean;
  };
  
  export const LayananData: Layanan[] = [
    {
      category: "Silver",
      firstprice: "2.800.000",
      secondprice: "1.000.000",
      feature: [
        "Free Domain (.my.id) 1 Tahun Pertama",
        "5 Menu",
        "Free Hosting Server SSD 1 Gb",
        "Tidak menggunakan admin panel",
        "Tidak menggunakan database",
        "Free input data di awal",
        "Revisi 2 kali",
        "Unlimited Bandwith",
        "Garansi 3 bulan setelah pengerjaan",
        "Pengerjaan 14 Hari",
        "Backup Perbulan ( Ya )",
      ],
      border: false,
    },
    {
      category: "Gold",
      firstprice: "3.600.000",
      secondprice: "1.300.000",
      feature: [
        "Free Domain (.com) 1 Tahun Pertama",
        "8 Menu",
        "Free Hosting Server SSD 2 Gb",
        "Menggunakan admin panel ( Login )",
        "Menggunakan database",
        "Free input data di awal",
        "Revisi 3 kali",
        "Unlimited Bandwith",
        "Garansi 3 bulan setelah pengerjaan",
        "Pengerjaan 20 Hari",
        "Backup Perbulan ( Ya )",
      ],
      border: true,
    },
    {
      category: "Platinum",
      firstprice: "5.000.000",
      secondprice: "2.000.000",
      feature: [
        "Free Domain (bebas Pilih Domain) 1 Tahun Pertama",
        "12 Menu",
        "Free Hosting Server SSD 3 Gb",
        "Menggunakan admin panel ( Login )",
        "Menggunakan database",
        "Free input data di awal",
        "Revisi 3 kali",
        "Unlimited Bandwith",
        "Garansi 3 bulan setelah pengerjaan",
        "Pengerjaan 30 Hari",
        "Backup Perbulan ( Ya )",
      ],
      border: false,
    },
  ];
  