import { getBlogBySlug } from '@/src/api/blog'
import MainLayout from '@/src/components/shared/MainLayout'
import React from 'react'
import BlogDetail from './BlogDetail'

const BlogPostDetailPage = async ({ params }: { params: { slug: string } }) => {
  const slug = decodeURIComponent(params.slug)
  const post = await getBlogBySlug(slug)

  return (
    <MainLayout>
      <BlogDetail post={post}/>
    </MainLayout>
  )
}

export default BlogPostDetailPage