<<<<<<< Updated upstream
import React from "react";
import Image from "next/image";
import Container from "./container";
import next from "./images/nextlogoo.jpeg";
import google from "./images/google.svg";
import googleCloud from "./images/google-cloud.svg";
import firabase from "./images/firebase_logo.jpeg";
import seo from "./images/seo.jpeg";
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
                className="m-auto h-16 w-auto"
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
                className="m-auto h-16 w-auto"
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
=======
/* eslint-disable tailwindcss/classnames-order */
"use client";
import Image from "next/image";

export default function HeroContent() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="mx-auto grid max-w-screen-xl grid-cols-2 items-center justify-center p-16 text-center lg:py-16">
        <div>
          <Image
            src={"/heroill.svg"}
            alt="hero ICON"
            width={500}
            height={500}
          />
        </div>
        <div data-aos="fade-up">
          <h1 className="text-hitamterang mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl lg:text-6xl">
            Kembangkan bisnis Anda secara digital bersama kami.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-700 dark:text-gray-400 sm:px-16 lg:px-48 lg:text-xl">
            Website profesional, hasil lokal Medan.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="bg-merahlangit ring-merahlangit inline-flex items-center justify-center space-x-2 rounded-lg px-5 py-3 text-center text-base font-medium text-white hover:ring-2 hover:ring-offset-2"
            >
              <Image src={"/waicon.svg"} alt="wa" width={20} height={20} />
              <span>Konsultasi Sekarang</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
>>>>>>> Stashed changes
