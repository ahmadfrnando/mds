
import React from "react";
import Image from "next/image";
import Container from "./container";
import next from "./images/nextlogoo.jpeg";
import google from "./images/google.svg";
import googleCloud from "./images/google-cloud.svg";
import firabase from "./images/firebase2.jpeg";
import seo from "./images/seo2.jpeg";
import node from "./images/nodejs.jpeg";

const Home: React.FC = () => {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
        <div className="h-32 bg-gradient-to-r from-blue-800 to-red-900 blur-[106px] dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative ml-auto pt-36">
          <div className="mx-auto text-center lg:w-2/3">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white md:text-6xl xl:text-7xl">
              Jasa Pembuatan{" "}
              <span className="text-primary dark:text-white">Website.</span>
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Mengubah ide-ide kreatif Anda menjadi website yang memukau dengan
              layanan pengembangan web kami yang terpercaya. Kami hadir untuk
              merancang pengalaman digital yang menginspirasi dan meningkatkan
              visibilitas bisnis Anda.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-4">
              <h1 className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-white before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  ⭐⭐⭐⭐⭐ Dari 150+ Reviews Senang Dengan Kami
                </span>
              </h1>
            </div>
            <div className="mt-16 hidden justify-between border-y border-gray-200 py-8 dark:border-gray-800 sm:flex">
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Company Profile
                </h6>
                <p className="mt-2 text-gray-500">Profesional</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Personal Website
                </h6>
                <p className="mt-2 text-gray-500">Perawatan Berkala</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  Costum Website
                </h6>
                <p className="mt-2 text-gray-500">Kebutuhan & Selera Anda</p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <Image
                src={node}
                className="mx-auto h-12 w-auto"
                loading="lazy"
                alt="client logo"
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <Image
                src={next}
                className="mx-auto h-12 w-auto"
                loading="lazy"
                alt="client logo"
              />
            </div>
            <div className="flex p-4 grayscale transition duration-200 hover:grayscale-0">
              <Image
                src={firabase}
                className="m-auto h-12 w-auto"
                loading="lazy"
                alt="client logo"
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <Image
                src={google}
                className="mx-auto h-12 w-auto"
                loading="lazy"
                alt="client logo"
              />
            </div>
            <div className="flex p-4 grayscale transition duration-200 hover:grayscale-0">
              <Image
                src={seo}
                className="m-auto h-12 w-auto"
                loading="lazy"
                alt="client logo"
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <Image
                src={googleCloud}
                className="mx-auto h-12 w-auto"
                loading="lazy"
                alt="client logo"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;