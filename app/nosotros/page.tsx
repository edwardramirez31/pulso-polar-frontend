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
          name="keywords"
          content="Inmersión Glacial, Baños de Hielo, Wim Hof, Yoga, Bucaramanga"
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
