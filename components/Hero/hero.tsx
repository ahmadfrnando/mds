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
