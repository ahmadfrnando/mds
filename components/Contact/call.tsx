import React from "react";
import Image from "next/image";
import Container from "./container";
import nando from "./images/nando.png";
import tway from "./images/poto2.jpg";
import jogon from "./images/jogon.png";
import johan from "./images/johan.png";
import mds from "./images/logo only.png";
import Link from "next/link";

const ExampleComponent = () => {
  return (
    <div className="relative py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="h-56 bg-gradient-to-br from-primary to-purple-600 blur-[106px] dark:from-blue-700"></div>
        <div className="h-32 bg-gradient-to-r from-red-400 to-blue-900 blur-[106px] dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative">
          <div className="flex items-center justify-center -space-x-2">
            <Image
              loading="lazy"
              width="400"
              height="400"
              src={jogon}
              alt="member photo"
              className="size-8 rounded-full object-cover"
            />
            <Image
              loading="lazy"
              width="200"
              height="200"
              src={nando}
              alt="member photo"
              className="size-12 rounded-full object-cover"
            />
            <Image
              loading="lazy"
              width="200"
              height="200"
              src={mds}
              alt="member photo"
              className="z-10 size-16 rounded-full object-cover"
            />
            <Image
              loading="lazy"
              width="200"
              height="200"
              src={tway}
              alt="member photo"
              className="relative size-12 rounded-full object-cover"
            />
            <Image
              loading="lazy"
              width="200"
              height="200"
              src={johan}
              alt="member photo"
              className="size-8 rounded-full object-cover"
            />
          </div>
          <div className="m-auto mt-6 space-y-6 md:w-8/12 lg:w-7/12">
            <h1 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Konsultasi Gratis Sekarang
            </h1>
            <p className="text-center  text-gray-600 dark:text-gray-300">
              Mds Team siap mewujudkan Website impian kamu. Klik salah satu CS,
              Terserah yang mana, Sama sama Ramah kok
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="https://wa.me/6285761088663?text=Halo%20Cs%20Tway,%20saya%ingin%20konsultasi%20untuk%pembuatan%20Website."
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-xl before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white dark:text-black">
                  Chat Cs Tway
                </span>
              </Link>
              <Link
                href="https://wa.me/6282166622870?text=Halo%20Cs%20Fernando,%20saya%ingin%20konsultasi%20untuk%pembuatan%20Website."
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-xl before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  Chat Cs Fernando
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExampleComponent;
