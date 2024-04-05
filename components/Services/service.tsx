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
