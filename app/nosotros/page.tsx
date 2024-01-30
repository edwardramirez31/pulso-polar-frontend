'use client'
import React from 'react';
import Values from './Values';
import Mission from './Mission';
import Contact from './Contact';
import Footer from '@/src/components/shared/Footer';
import Navbar from '@/src/components/home/Navbar';
import Image from 'next/image';
import Hero from './Hero';
import Head from 'next/head';

const AboutPage = () => {
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
      </Head>
      <div className="bg-black">
        <header className="relative h-screen">
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <Image
              fill
              src="/icebath10.jpg"
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
          <Mission />
          <Values />
          {/* <CallToAction /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
