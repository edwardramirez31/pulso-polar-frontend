import { BlogPostEntrySkeleton } from '@/src/api/types';
import { Entry } from 'contentful';
import Image from 'next/image';
import React from 'react';
import BlogEntry from './BlogEntry';

interface Props {
  posts: Entry<BlogPostEntrySkeleton, undefined, string>[]
}

const BlogSection = ({posts}: Props) => {
  console.log(posts)
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="relative">
        <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
            Aprende
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Últimas Tendencias
          </p>
          <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
            Aprende sobre las últimas técnicas en terapias de temperatura, mantente informado de los últimos eventos de la comunidad,
            experiencias, estudios científicos, guías de desarrollo integral y
            mucho más.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          {posts.map((post) =>  (<BlogEntry key={post.fields.slug} post={post}/>))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
