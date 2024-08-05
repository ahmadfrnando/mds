/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line no-unused-vars
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Testimonial, TestimonialData } from "./testiType";
import Image from "next/image";

const Testi: Testimonial[] = TestimonialData;

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "Linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="mt-14 py-10">
      <div className="max-h-md md:px-52 ">
        {/* Header Section */}
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Testimoni
          </h2>
          <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-6/12">
            Berikut ini adalah beberapa testimoni dari pelanggan kami yang telah
            merasakan gimana pelayanan kami
          </p>
        </div>

        {/* Testimonials Card */}
        <div data-aos="zoom-in" className="flex flex-col">
          <Slider {...settings}>
            {Testi.map((data) => (
              <div key={data.id} className="my-6">
                <div className="relative mx-4 flex h-1/2 flex-col gap-4 rounded-xl border border-blue-200 px-6 py-8 shadow-lg dark:bg-gray-800">
                  <div className="mb-4">
                    <Image
                      src={data.img}
                      alt=""
                      loading="lazy"
                      width={100}
                      height={100}
                      className="size-20 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="dark:text-light text-xl font-bold text-black/80 ">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="absolute right-0 top-0 font-serif text-9xl text-black/20">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
