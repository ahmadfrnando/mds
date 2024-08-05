import { notFound } from "next/navigation";
import { Layanan, relatedArticles } from "@/components/blog/solution";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import CallContent from "@/components/Contact/call";
import { UserIcon, CalendarIcon } from "@heroicons/react/24/outline";
import Container from "@/components/Hero/container";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const post = relatedArticles.find((post) => post.slug === params.slug);
  if (!post) {
    return { title: "artikel yang anda cari tidak ada" };
  }
  return { title: post.title };
}

export default async function BlogPost({ params }: Props) {
  const post = relatedArticles.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Filter out the current post from related articles and limit to 3
  const relatedPosts = relatedArticles
    .filter((article) => article.slug !== post.slug)
    .slice(0, 3);

  return (
    <Layout>
      <div className="mt-32">
        <div className="container mx-auto p-4">
          <div className="mb-12 space-y-2 text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-6/12 ">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
              {post.title}
            </h2>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <UserIcon className="size-5 text-gray-500 dark:text-gray-300" />
                <p className="font-semibold text-gray-600 dark:text-gray-300">
                  {post.author}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="size-5 text-gray-500 dark:text-gray-300" />
                <p className="font-semibold text-gray-600 dark:text-gray-300">
                  {post.date}
                </p>
              </div>
            </div>
          </div>
          <div className="relative mb-8 overflow-hidden rounded-xl">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={800}
              className="mx-auto w-full max-w-2xl object-cover"
            />
            <p className="mx-auto w-full max-w-2xl object-cover text-sm text-gray-600 dark:text-gray-300">
              {post.cipta}
            </p>
          </div>
          <div className="space-y-4 text-justify text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-6/12">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 lg:mx-auto lg:w-6/12">
            <p className="mx-auto inline-block rounded-xl bg-green-200 p-2 text-gray-800">
              {post.category}
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <Container>
              <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                Baca Artikel Lainnya
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((article) => (
                  <div
                    key={article.slug}
                    className="relative overflow-hidden rounded-lg shadow-md"
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={250}
                      className="w-full object-cover"
                    />
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        <Link href={`/blog/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h4>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </div>
      </div>
      <CallContent />
    </Layout>
  );
}
