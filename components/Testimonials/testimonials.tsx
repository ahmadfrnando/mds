/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line no-unused-vars
'use client';
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
    cssEase: 'Linear',
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
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="py-10 ">
      <div className="md:px-52 max-h-md ">
        {/* Header Section */}
        <div className="mx-auto mb-10 gap-4 flex flex-col max-w-[600px] text-center ">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="md:text-5xl text-4xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Check this testimonials from our customers here
          </p>
        </div>
        {/* Testimonials Card */}
        <div
        data-aos="zoom-in"
        className="flex flex-col"
        >
          <Slider {...settings}>
            {Testi.map((data) => (
              <div key={data.id} className='my-6'>
                <div className="relative mx-4 flex flex-col gap-4 rounded-xl bg-primary/10 px-6 py-8 shadow-lg dark:bg-gray-800">
                  <div className="mb-4">
                    <Image src={data.img} alt="" loading="lazy" width={100} height={100} className="size-20 rounded-full" />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="dark:text-light text-xl font-bold text-black/80 ">{data.name}</h1>
                    </div>
                  </div>
                  <p className='absolute right-0 top-0 font-serif text-9xl text-black/20'>
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
