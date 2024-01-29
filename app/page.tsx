'use client';
import Benefits from '@/src/components/home/Benefits';
import Blog from '@/src/components/home/Blog';
import Experience from '@/src/components/home/Experience';
import Hero from '@/src/components/home/Hero';
import Navbar from '@/src/components/home/Navbar';
import Testimonial from '@/src/components/home/Testimonial';
import Footer from '@/src/components/shared/Footer';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
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
              {/* <nav className="relative flex items-center justify-between px-4 sm:px-40 py-4 backdrop-blur-md backdrop-filter bg-opacity-10 bg-white" aria-label="Global">
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg" alt=""/>
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button type="button" className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                <a href="#" className="text-base font-medium text-white hover:text-gray-300">Servicios</a>
  
                <a href="#" className="text-base font-medium text-white hover:text-gray-300">Experiencias</a>
  
                <a href="#" className="text-base font-medium text-white hover:text-gray-300">Contacto</a>
  
                <a href="#" className="text-base font-medium text-white hover:text-gray-300">Nosotros</a>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a href="#" className="text-base font-medium text-white hover:text-gray-300">Regístrate  </a>
              <a href="#" className="block w-full py-2 px-6 shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900 rounded-full"> Reserva </a>
            </div>
          </nav> */}
            </div>
            <Hero />
          </header>
          <main>
            <Experience />
            <Benefits />
            <Testimonial />
            <Blog />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
