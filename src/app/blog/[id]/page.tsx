// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import axios from 'axios';
import { formatFullDate, formatTimeAgo } from '@/utils/dateHelper';
import { Post } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Blog | FootballBank.soccer',
  description: 'FootballBank Blog Article',
};



export default async function BlogArticlePage({ params }: { params: { id: string } }) {
  try {
    const res = await axios.get<Post>(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${params.id}`);
    const post = res.data;

    return (
      <main className="bg-primary-bg text-primary-text font-inter">
        <section className="py-6 border-b border-divider">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm">
              <span className="text-primary-muted hover:text-accent-red cursor-pointer">Home</span>
              <i className="fa-solid fa-chevron-right text-primary-muted text-xs" />
              <span className="text-primary-muted hover:text-accent-red cursor-pointer">Blog</span>
              <i className="fa-solid fa-chevron-right text-primary-muted text-xs" />
              <span className="text-primary-text">{post.title}</span>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <header className="mb-12">
                <div className="flex items-center gap-4 mb-4 text-sm text-primary-muted">
                  <span>📅 {formatFullDate(post.createdAt)}</span>
                  <span>🕒 {formatTimeAgo(post.createdAt)}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-poppins font-bold mb-6">{post.title}</h1>
              </header>

              {post.imageUrl.length > 0 && (
                <div className="mb-12">
                  <Image
                    src={post.imageUrl[0]}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-[400px] object-cover rounded-xl"
                  />
                </div>
              )}

              <article className="prose prose-invert max-w-none text-lg leading-relaxed space-y-6">
                {post.content.split('\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </article>
            </div>
          </div>
        </section>
      </main>
    );
  } catch (error) {
    notFound();
  }
}
