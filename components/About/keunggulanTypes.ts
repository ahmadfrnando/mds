export type Keunggulan = {
    icon: any;
    title: string;
    description: string;
  };

import { HiOutlineUserGroup, HiOutlineShieldCheck, HiCheck, HiOutlineCurrencyDollar } from "react-icons/hi";

export const keunggulanData: Keunggulan[] = [
    {
      icon: HiOutlineUserGroup,
      title: "Tim Berpengalaman",
      description:
        "Kami terdiri dari para ahli dan professional yang berdedikasi dan berpengalaman. Kami selalu berkomitmen untuk memberikan pelayanan terbaik dan terpercaya.",
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Bergaransi",
      description:
        "Dengan garansi selama 3 bulan, akan membuat anda dan bisnis anda tetap kami controll hingga website anda menjadi optimal",
    },
    {
      icon: HiCheck,
      title: "Terpercaya",
      description:
        "Dengan tim yang profesional dan berpengalaman sudah membuat 50+ website.",
    },
    {
      icon: HiOutlineCurrencyDollar,
      title: "Harga Terjangkau",
      description: "Harga murah dan terjangkau.",
    },
  ];