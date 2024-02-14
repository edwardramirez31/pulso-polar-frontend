import { BlogPostEntrySkeleton } from '@/src/api/types';
import { Entry } from 'contentful';
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Block, Inline, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image';

interface Props {
  post: Entry<BlogPostEntrySkeleton, undefined, string>;
}

interface DocumentText {
  children: React.ReactNode;
}

const Bold = ({ children }: DocumentText) => (
  <span className="font-bold text-gray-900">{children}</span>
);

const Heading3 = ({ children }: DocumentText) => (
  <h3 className="my-5 pt-2 text-3xl">{children}</h3>
);

const ListItem = ({ children }: DocumentText) => (
  <li className="mb-2 ml-6 list-disc">{children}</li>
);

interface ArticleImageProps {
  url: string;
  alt: string;
}

const ArticleImage = ({ url, alt }: ArticleImageProps) => (
  <div className="relative h-96 w-full">
    <Image
      src={`https:${url}`}
      alt={alt}
      fill
      className="object-left object-cover rounded-2xl border border-gray300 shadow-lg mt-4"
    />
  </div>
);

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.HEADING_3]: (node: Block | Inline, children: React.ReactNode) => (
      <Heading3>{children}</Heading3>
    ),
    [BLOCKS.LIST_ITEM]: (node: Block | Inline, children: React.ReactNode) => (
      <ListItem>{children}</ListItem>
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => (
      <ArticleImage
        url={node.data.target.fields.image.fields.file.url}
        alt={node.data.target.fields.image.fields.title}
      />
    ),
  },
};

const BlogDetail = ({ post }: Props) => {
  // console.log(JSON.stringify(post.fields.content))
  const postContent = documentToReactComponents(post.fields.content, options);
  console.log(postContent);
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Artículo
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {post.fields.title}
            </span>
          </h1>
          <article className="mt-8 text-xl text-gray-600 leading-8">
            {postContent}
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
