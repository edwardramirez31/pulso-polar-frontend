import BlogPosts from './BlogPosts';
import getBlogPosts from '@/src/api/blog';
import MainLayout from '@/src/components/shared/MainLayout';
// import Newsletter from '@/src/components/shared/Newsletter';

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <MainLayout>
      <BlogPosts posts={posts} />
      {/* <Newsletter/> */}
    </MainLayout>
  );
}
