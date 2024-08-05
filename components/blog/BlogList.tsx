import React from "react";
import Container from "../Hero/container";
import { relatedArticles, Layanan } from "./solution";
import Link from "next/link";
import Image from "next/image";

const portfolio: Layanan[] = relatedArticles;

const BlogList = () => {
  return (
    <div className="mt-36">
      <Container>
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Blog & News
          </h2>
          <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-6/12">
            Informasi terbaru baik dari perkembangan teknologi ataupun info
            seputas layanan kami akan kami sajikan di sini
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((post, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-8"
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
                <Link href={`/blog/${post.slug}`} legacyBehavior>
                  <a className=" cursor-pointer dark:text-blue-300">See more</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BlogList;
