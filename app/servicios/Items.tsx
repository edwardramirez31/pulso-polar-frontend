import { INMERSION_GLACIAL, OASIS_GLACIAL } from '@/src/constants/experiences';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Items = () => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              Nuestros servicios de inmersión en hielo
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-300">
              Explora nuestras experiencias únicas diseñadas para el bienestar y
              la superación personal.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <div style={{ height: 450 }} className="relative w-full h-full">
                  <Link
                    href="/experiencias/inmersion-glacial"
                    className="hover:opacity-90 hover:shadow-xl"
                  >
                    <Image
                      src={INMERSION_GLACIAL.imageSrc}
                      alt={INMERSION_GLACIAL.name}
                      className="w-full object-center object-cover"
                      layout="responsive"
                      width={100}
                      height={50}
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
              <p className="sm:mt-8 text-base text-gray-300">
                La Experiencia Inmersión Glacial te ofrece una introducción al
                mundo de los baños de hielo, combinando la ciencia del frío con
                técnicas de yoga y respiración para un bienestar integral.
              </p>
            </div>
            <div>
              <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <div style={{ height: 450 }} className="relative w-full h-96">
                  <Link
                    href="/experiencias/oasis-glacial"
                    className="hover:opacity-90 hover:shadow-xl"
                  >
                    <Image
                      src={OASIS_GLACIAL.imageSrc}
                      alt={OASIS_GLACIAL.name}
                      className="w-full object-center object-cover"
                      layout="responsive"
                      width={100}
                      height={50}
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
              <p className="sm:mt-8 text-base text-gray-300">
                La Experiencia Oasis Glacial eleva los baños de hielo a un nivel
                premium. Disfruta de un jacuzzi con vistas panorámicas y una
                experiencia de bienestar de lujo
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Items;
