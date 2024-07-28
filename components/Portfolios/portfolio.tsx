import React from "react";
import Container from "../Hero/container";
import { portfolioType, Layanan } from "./porfolioType";
import Link from "next/link";
import Image from "next/image";

const portfolio: Layanan[] = portfolioType;

const PortfolioContent = () => {
  return (
    <div className="mt-36">
      <Container>
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Portfolio Kami
          </h2>
          <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-6/12">
            Berikut ini adalah dokumentasi beberapa website yang telah kami
            kerjakan baik website company profile maupun Personal Website
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((post, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-6 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-8"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative mt-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {post.title}
                </h3>
                <p className="mb-8 mt-6 text-sm text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
                <Link
                  href={post.link}
                  className="text-info inline-block cursor-pointer dark:text-blue-300"
                >
                  See more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PortfolioContent;
