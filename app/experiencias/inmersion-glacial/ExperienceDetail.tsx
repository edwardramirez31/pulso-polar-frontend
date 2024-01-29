import { IExperienceDetail } from '@/src/constants/experiences';
import Image from 'next/image';
import React from 'react';

interface Props {
  detail: IExperienceDetail;
}

const ExperienceDetail = ({ detail }: Props) => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              {detail.title}
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-300">
              {detail.description}
              {/* Descubre la ciencia detrás de la inmersión en frío y cómo tu cuerpo responde a esta estimulación extrema */}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            {detail.items.map(({ id, image, description }) => (
              <div key={id}>
                <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <div className="relative h-80">
                    <Image
                      src={image}
                      alt={id}
                      className="w-full object-center object-cover"
                      fill
                      loading='lazy'
                    />
                  </div>
                </div>
                <p className="mt-8 text-base text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExperienceDetail;
