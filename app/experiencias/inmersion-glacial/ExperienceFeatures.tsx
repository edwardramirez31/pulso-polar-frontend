import { IExperienceFeature } from '@/src/constants/experiences';
import React from 'react';


interface Props {
  features: IExperienceFeature[];
  serviceName: string;
}

const ExperienceFeatures = ({features, serviceName}: Props) => {
  return (
    <section
      aria-labelledby="policy-heading"
      className="mt-16 lg:mt-24 max-w-2xl mx-auto lg:max-w-7xl lg:px-8 px-4"
    >
      <h2 id="policy-heading" className="sr-only">
        Características del paquete {serviceName}
      </h2>
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 ">
        {features.map((feature) => (
          <div key={feature.name}>
            <img
              src={feature.imageSrc}
              alt={feature.name}
              className="h-24 w-auto mx-auto"
            />
            <h3 className="mt-6 text-base font-medium text-gray-900">
              {feature.name}
            </h3>
            <p className="mt-3 text-base text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceFeatures;
