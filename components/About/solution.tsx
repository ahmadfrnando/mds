/* eslint-disable tailwindcss/no-custom-classname */
// components/Solution.tsx

import React from "react";
import Container from "./container"; // Adjust the import based on your actual file name
import Image from "next/image";
import gif from "./images/gift-solid.svg";
import hippo from "./images/hippo-solid.svg";
import money from "./images/money-bill-solid.svg";
import stap from "./images/shoe-prints-solid.svg";

const Solution: React.FC = () => {
  return (
    <div id="features">
      <Container>
        <div className="mt-12 md:w-2/3 lg:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-secondary size-6"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            />
          </svg>

          <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Keuntungan Menggunakan Layanan
            <span className="text-primary dark:text-white"> MDS.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Karena Website bukan hanya soal bagus atau tidaknya, Tapi bagaimana
            cara maintenancenya untuk Perkembangan Bisnis Kamu.
            <br /> <br />
            Hasil Website yang kami buat sudah dilengkapi berbagai Fitur yang
            dibutuhkan untuk Keperluan Digital Marketing di tahun 2024 ini
          </p>
        </div>

        <div className="mt-16 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-400 text-gray-600 dark:divide-gray-700 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          <div className="group relative bg-white transition hover:z-[1] hover:bg-red-300 hover:shadow-2xl hover:shadow-red-600/10 dark:bg-gray-800">
            <div className="relative space-y-8 p-8 py-12 cursor-pointer">
              <Image
                src={stap}
                alt="Burger illustration"
                width="512"
                height="512"
                className="w-12"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 transition  dark:text-white">
                  Alur Pekerjaan Jelas
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Kami Memiliki Cara Kerja yang Efisien dan Profesional untuk
                  membuat websitemu Go-Online dengan sangat baik
                </p>
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer bg-white transition hover:z-[1] hover:bg-blue-300  hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
            <div className="relative space-y-8 p-8 py-12">
              <Image
                src={money}
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="group-hover:text-secondary text-xl font-semibold text-gray-700 transition dark:text-white">
                  Harga Bisa Request
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Suka sama Mds tapi Harga belum cocok ? Santai. Kamu bisa
                  tentukan harga websitemu sendiri
                </p>
              </div>
            </div>
          </div>
          <div className="cursor-pointer group relative bg-white transition hover:z-[1] hover:bg-orange-300 hover:shadow-2xl  hover:shadow-gray-600/10 dark:bg-gray-800">
            <div className="relative space-y-8 p-8 py-12">
              <Image
                src={hippo}
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="group-hover:text-secondary text-xl font-semibold text-gray-700 transition dark:text-white">
                  Layanan All In One
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Tak hanya Website, Mds juga bisa membuatkan kamu Design
                  Promosi & Skalian Iklan di Google
                </p>
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer bg-white transition hover:z-[1] hover:bg-gray-300 hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-900">
            <div className="relative space-y-8 p-8 py-12 ">
              <Image
                src={gif}
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="group-hover:text-secondary text-xl font-semibold text-gray-700 transition dark:text-white">
                  Banyak Bonus Gratis
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  Disetiap Paket Website. Mds akan memberikan Bonus yang sangat
                  berguna buat bisnismu
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Solution;
