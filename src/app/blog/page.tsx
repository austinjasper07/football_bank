import { Post } from "@/lib/types";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import ClientSideFilterWrapper from "./components/ClientSideFilterWrapper";

export const metadata: Metadata = {
  title: "Blog | FootballBank",
  description: "Insights, player spotlights, and football talent updates.",
};

export default async function BlogPage() {
  'use server'
  const posts: Post[] = await prisma.post
    .findMany({orderBy: { createdAt: "desc" },})
    .then((posts) => {
      return posts.map((post) => ({
        ...post,
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString(),
      }));
  });

  const featuredPost: Post[] = await prisma.post.findMany({
      where: { featured: true },
      orderBy: { createdAt: "desc" },
    })
    .then((featuredPosts) => {
      return featuredPosts.map((post) => ({
        ...post,
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString(),
      }));
    });

  const categories = [
    "All",
    ...Array.from(new Set(posts.map((p) => p.category))),
  ];

  return (
    <main className="bg-primary-bg text-primary-text font-inter">
      <section className="py-16 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Football Talent Hub
          </h1>
          <p className="text-primary-muted text-lg mb-8">
            Latest insights, player spotlights, and transfer updates from the
            world of football talent scouting.
          </p>

          <ClientSideFilterWrapper
            posts={posts}
            featuredPost={featuredPost}
            categories={categories}
          />
        </div>
      </section>
    </main>
  );
}
