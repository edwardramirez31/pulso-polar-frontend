import Benefits from '@/src/components/home/Benefits';
import BlogSection from '@/src/components/home/Blog';
import Experience from '@/src/components/home/Experience';
import Hero from '@/src/components/home/Hero';
import Navbar from '@/src/components/home/Navbar';
import Testimonial from '@/src/components/home/Testimonial';
import Footer from '@/src/components/shared/Footer';
import Head from 'next/head';
import Image from 'next/image';

import getBlogPosts from '@/src/api/blog';


// export const getServerSideProps  = (async (context) => {
//   const res = await getBlogPosts()
//   return { props: { posts: res } }
// }) satisfies GetServerSideProps<{
//   posts: Entry<ProductEntrySkeleton, undefined, string>[]
// }>

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const posts = await getBlogPosts()
  return (
    <>
      <Head>
        <title>Pulso Polar - Baños de Hielo en Bucaramanga</title>
        <meta
          name="description"
          content="Pulso Polar, especialistas en baños de hielo, ofreciendo bienestar y recuperación en Bucaramanga."
        />
        {/* Meta tags para compartir en redes sociales, como WhatsApp */}
        <meta property="og:title" content="Pulso Polar - Baños de Hielo" />
        <meta
          name="description"
          content="Descubre Pulso Polar en Bucaramanga, tu centro especializado en baños de hielo y técnicas de Wim Hof. Experimenta la inmersión en hielo para mejorar tu salud y bienestar."
        />
        <meta property="og:url" content="https://www.pulsopolar.com" />{' '}
        {/* Reemplaza con la URL de tu sitio */}
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.pulsopolar.com/icebath8.jpg"
        />{' '}
        {/* Reemplaza con la URL de una imagen relevante */}
        {/* Meta tags para mejorar la búsqueda local */}
        <meta name="geo.region" content="CO-SAN" />{' '}
        {/* Código ISO del departamento de Santander */}
        <meta name="geo.placename" content="Bucaramanga" />
        <meta name="geo.position" content="7.12539;-73.1198" />{' '}
        {/* Reemplaza con la latitud y longitud de Bucaramanga */}
        <meta name="ICBM" content="7.12539, -73.1198" />{' '}
        <meta
          name="keywords"
          content="Hielo, Baños de Hielo, Wim Hof, Yoga, Bucaramanga"
        />
        {/* Mismo reemplazo que arriba */}
      </Head>
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <header className="relative h-screen">
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden"
            >
              <Image
                fill
                src="/icebath8.jpg"
                alt="Miembro de Pulso Polar dominando el poder del frío"
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-900 opacity-50"
            />
            {/* max-w-7xl mx-auto */}
            <div className="bg-gray-900">
              <Navbar />
            </div>
            <Hero />
          </header>
          <main>
            <Experience />
            <Benefits />
            <Testimonial />
            <BlogSection posts={posts} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
