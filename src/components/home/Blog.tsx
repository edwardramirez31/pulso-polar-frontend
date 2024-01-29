import Image from 'next/image';
import React from 'react';

const Blog = () => {
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
            Mantente informado de los últimos eventos de la comunidad,
            experiencias, estudios científicos, guías de desarrollo integral y
            mucho más.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <div className="relative h-48 w-full">
                <Image
                  className="object-cover"
                  src="/icebath5.png"
                  alt=""
                  fill
                />
              </div>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-cyan-600">
                  <a href="#" className="hover:underline">
                    {' '}
                    Artículo{' '}
                  </a>
                </p>
                <a href="#" className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    Baños de hielo ¿Antes o después de entreno?
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Dependiendo de tus objetivos y necesidades, los baños de
                    hielo antes del entreno favorecerán el metabolismo y después
                    del entrenamiento reducen la inflamación y desestimula
                    ciertas hormonas.
                  </p>
                </a>
              </div>
              {/* <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Roel Aufderehar"/>
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href="#" className="hover:underline"> Roel Aufderehar </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time> Mar 16, 2020 </time>
                      <span aria-hidden="true"> &middot; </span>
                      <span> 6 min read </span>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>

          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <div className="relative h-48 w-full">
                <Image
                  fill
                  className="object-cover"
                  src="/icebath6.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-cyan-600">
                  <a href="#" className="hover:underline">
                    {' '}
                    Video{' '}
                  </a>
                </p>
                <a href="#" className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    ¿Cómo reacciona tu cuerpo al frío extremo?
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Someter el cuerpo a frío extremo en períodos de tiempo
                    cortos y controlados estimula ciertos sistemas y procesos
                    fisiólogicos que resultan en un estrés hormético con
                    numerosos beneficios para la salud.
                  </p>
                </a>
              </div>
              {/* <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Brenna Goyette"/>
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href="#" className="hover:underline"> Brenna Goyette </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time> Mar 10, 2020 </time>
                      <span aria-hidden="true"> &middot; </span>
                      <span> 4 min read </span>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>

          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <div className="relative h-48 w-full">
                <Image
                  fill
                  className="object-cover"
                  src="/icebath2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-cyan-600">
                  <a href="#" className="hover:underline">
                    {' '}
                    Experiencia{' '}
                  </a>
                </p>
                <a href="#" className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    Reserva tu lugar en la expedición helada a Santurbán
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Únete a la comunidad y vive la experiencia de frío,
                    respiración y entrenamiento mental avanzada este mes de
                    febrero. Serán tres días y dos noches en las que conoceremos
                    nuestro cuerpo, mente y su capacidad como nunca.
                  </p>
                </a>
              </div>
              {/* <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Daniela Metz"/>
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href="#" className="hover:underline"> Daniela Metz </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time> Feb 12, 2020 </time>
                      <span aria-hidden="true"> &middot; </span>
                      <span> 11 min read </span>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
