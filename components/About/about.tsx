/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import Image from "next/image";
import { Keunggulan, keunggulanData } from "./keunggulanTypes";

const keunggulan: Keunggulan[] = keunggulanData;
export default function AboutContent() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="block">
        <div className="bg-primary flex w-full flex-wrap items-center justify-center space-y-6 px-20 py-16">
          <h1
            data-aos="zoom-in"
            className="text-4xl font-semibold uppercase text-white"
          >
            About
          </h1>
          <p
            data-aos="zoom-in"
            className="text-md text-center italic text-white"
          >
            &ldquo;Medan Digital Solutions merupakan sebuah perusahaan yang
            bergerak di bidang digital. Kami berdedikasi untuk memberikan
            pelayanan terbaik dan terpercaya. Kami mengedepankan kualitas dan
            kepuasan pelanggan dengan tim yang profesional dan
            berpengalaman.&rdquo;
          </p>
        </div>
        <div className=" grid w-full grid-cols-2 items-center justify-center px-16 py-6">
          <div className="">
            <Image
              src={"aboutill.svg"}
              alt="aboutill"
              width={600}
              height={500}
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-hitamterang text-center text-2xl font-bold uppercase dark:text-white">
              Mengapa Kami?
            </h1>
            <div className="grid grid-cols-2 gap-6 dark:text-white">
              {keunggulan.map((item) => (
                <div
                  data-aos="zoom-in-up"
                  key={item.title}
                  className="text-hitamterang flex flex-col items-center justify-center rounded-xl border p-6  shadow-xl dark:text-white"
                >
                  {item.icon({ className: "text-merahlangit size-20" })}
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <p className="text-center text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
