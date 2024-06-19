/* eslint-disable tailwindcss/classnames-order */
"use client";
import Image from "next/image";

export default function ContactContent() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="bg-primary flex items-center justify-between px-16 py-20">
        <div className="text-white">
          <h5>Hubungi Kami Sekarang</h5>
          <p>
            Jika anda memiliki pertanyaan seputar website ataupun ingin
            konsultasi, hubungi kami. Biaya{" "}
            <span className="font-bold ">GRATIS</span>
          </p>
        </div>
        <a
          href="#"
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="bg-merahlangit ring-merahlangit inline-flex items-center justify-center space-x-2 rounded-full px-5 py-3 text-center text-base font-medium text-white hover:ring-2 hover:ring-offset-2"
        >
          <Image src={"/waicon.svg"} alt="wa" width={20} height={20} />
          <span>Konsultasi Sekarang</span>
        </a>
      </div>
    </section>
  );
}
