'use client';

import { Post } from '@/lib/types';
import dynamic from 'next/dynamic';

// Dynamically load ClientSideFilter as a client-only component
const ClientSideFilter = dynamic(() => import('./ClientSideFilter'), {
  ssr: false,
});

export default function ClientSideFilterWrapper({ posts, categories, featuredPost }: {
  posts: Post[];
  categories: string[];
  featuredPost: Post[];
}) {
  return <ClientSideFilter posts={posts} featuredPost={featuredPost} categories={categories} />;
}
