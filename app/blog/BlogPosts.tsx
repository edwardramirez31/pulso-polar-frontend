import React from 'react';
import { BlogPostEntrySkeleton } from '@/src/api/types';
import BlogEntry from '@/src/components/home/BlogEntry';
import { Entry } from 'contentful';

interface Props {
  posts: Entry<BlogPostEntrySkeleton, undefined, string>[];
}

const BlogPosts = ({ posts }: Props) => {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Blog Pulso Integral
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Aprende sobre las últimas técnicas en terapias de temperatura, mantente informado de los últimos eventos de la comunidad,
            experiencias, estudios científicos, guías de desarrollo integral, etc.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <BlogEntry key={post.fields.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
