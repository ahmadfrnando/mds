/* eslint-disable tailwindcss/no-custom-classname */

import React from "react";
import Container from "./container";
import Image from "next/image";
import pieImage from "./images/aboutill.svg";

const Solution: React.FC = () => {
  return (
    <div id="solution" className="bg-blue-400">
      <Container>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-sky-500 size-6"
        >
          <path
            fillRule="evenodd"
            d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
            clipRule="evenodd"
          />
        </svg> */}

        <div className="flex-row-reverse justify-between space-y-6 p-2 text-gray-600 md:flex md:gap-6 md:space-y-0 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-1/2">
            <Image
              src={pieImage}
              alt="image"
              loading="lazy"
              className="w-full"
            />
          </div>
          <div className="md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Kenali kami lebih jauh 🚀
            </h2>
            <p
              className="my-8 text-gray-600 dark:text-gray-300"
              data-aos="zoom-in-up"
            >
              Borong Web merupakan sebuah perusahaan yang bergerak
              di bidang digital. Kami berdedikasi untuk memberikan pelayanan
              terbaik dan terpercaya. <br /> <br /> Kami mengedepankan kualitas
              dan kepuasan pelanggan dengan tim yang profesional dan
              berpengalaman.
            </p>
            <div className="space-y-4 divide-y divide-gray-100 dark:divide-gray-800">
              <div className="mt-8 flex gap-4 md:items-center">
                <div className="flex size-12 gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="m-auto size-6 text-indigo-500 dark:text-indigo-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="w-5/6">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-indigo-300">
                    ngobrol kapan saja
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Kami akan selalu menunggu anda dapat ngobrol dengan kami.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 pt-4 md:items-center">
                <div className="flex size-12 gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="m-auto size-6 text-teal-600 dark:text-teal-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="w-5/6">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-teal-300">
                    Lokasi kami
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Medan, Sumatera Utara
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Solution;