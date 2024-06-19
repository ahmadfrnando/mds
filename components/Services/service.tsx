<<<<<<< Updated upstream
import React from "react";
import { Card } from "flowbite-react";
import ButtonCustom from "../Button";
import Container from "../Hero/container";
import { Layanan, LayananData } from "./serviceType";

const services: Layanan[] = LayananData;

const ServiceContent = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6285761088663";
    const message = "Hello, saya ingin konsultasi untuk pembuatan.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <section
      id="service"
      className="mt-20 bg-white text-gray-700 dark:bg-gray-800 dark:text-white"
    >
      <Container>
        <div className="mx-auto mt-12 md:w-2/3 lg:w-1/2">
          <h2 className="my-8 text-center text-2xl font-bold md:text-4xl">
            Harga Jasa <span className="text-primary">Pembuatan Website</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300">
            Berikut ini sekilas harga untuk Jasa Pembuatan Website. Tersedia
            paket custom untuk memenuhi kebutuhan request kamu.
          </p>
        </div>
        <div className="grid grid-cols-1 items-center justify-center gap-8 p-4 md:grid-cols-3 md:p-16">
          {services.map((item) => (
            <div
              key={item.category}
              data-aos="zoom-in-up"
              className="flex items-center justify-center"
            >
              <Card
                className={`max-w-xs px-4 py-6 md:max-w-sm ${item.border ? "border border-primary" : ""}`}
              >
                <h5 className="mb-4 text-center text-xl font-medium text-gray-500 dark:text-gray-400">
                  {item.category}
                </h5>
                <div className="mb-4 flex items-baseline justify-center text-gray-500 line-through dark:text-white">
                  <span className="text-2xl font-semibold">Rp</span>
                  <span className="text-2xl font-extrabold tracking-tight">
                    {item.firstprice}
                  </span>
                </div>
                <div className="mb-6 flex items-baseline justify-center text-primary dark:text-white">
                  <span className="text-3xl font-semibold">Rp</span>
                  <span className="text-3xl font-extrabold tracking-tight">
                    {item.secondprice}
                  </span>
                </div>
                <ul className="my-4 space-y-3">
                  {item.feature.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <svg
                        className="size-5 shrink-0 text-gray-500 dark:text-merahlangit"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <ButtonCustom
                  type="button"
                  title="Pesan Sekarang"
                  className="bg-blue-400 ring-blue-400"
                  onClick={handleWhatsAppClick}
                />
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServiceContent;
=======
/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import { Card } from "flowbite-react";
import ButtonCustom from "../Button";
import { Layanan, LayananData } from "./serviceType";

const services: Layanan[] = LayananData;
export default function ServiceContent() {
  return (
    <section className="text-hitamterang bg-white dark:bg-gray-800 dark:text-white">
      <h1 className="text-center text-4xl font-semibold uppercase">Services</h1>
      <div className="grid grid-cols-3 items-center justify-center p-16">
        {services.map((item) => (
          <div
            data-aos="zoom-in-up"
            key={item.category}
            className="flex items-center justify-center"
          >
            <Card
              className={`${item.border ? "border-primary border" : ""} max-w-sm px-16 py-6`}
            >
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                {item.category}
              </h5>
              <div className="flex items-baseline line-through decoration-gray-500 dark:text-white">
                <span className="text-2xl font-semibold">Rp</span>
                <span className="text-2xl font-extrabold tracking-tight">
                  {item.firstprice}
                </span>
              </div>
              <div className="text-primary flex items-baseline dark:text-white">
                <span className="text-3xl font-semibold">Rp</span>
                <span className="text-3xl font-extrabold tracking-tight">
                  {item.secondprice}
                </span>
              </div>
              <ul className="my-7 space-y-5">
                {item.feature.map((feature, index) => (
                  <li key={index} className="flex space-x-3">
                    <svg
                      className="text-merahlangit size-5 shrink-0 dark:text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <ButtonCustom
                type="button"
                title="Order"
                className="bg-merahlangit ring-merahlangit"
              />
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
>>>>>>> Stashed changes
