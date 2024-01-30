"use client"
import Navbar from '@/src/components/home/Navbar';
import Head from 'next/head';
import Footer from '@/src/components/shared/Footer';
import Items from './Items';
import Tiers from './Tiers';

export default function InmersionGlacialPage() {
  return (
    <>
      <Head>
        {/* <meta charset="UTF-8"/> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Vive la Experiencia Inmersión Glacial en Bucaramanga con nuestra formación en baños de hielo, sesiones de yoga, técnicas de respiración y más."
        />
        <meta
          name="keywords"
          content="Inmersión Glacial, Baños de Hielo, Wim Hof, Yoga, Bucaramanga"
        />
        <title>Experiencia Inmersión Glacial - Bucaramanga</title>
      </Head>
      <div className="bg-gray-50">
        <header className="relative bg-gray-900">
          <Navbar />
        </header>

        <main>
         <Items/>
         <Tiers />
        </main>

        <Footer />
      </div>
    </>
  );
}
