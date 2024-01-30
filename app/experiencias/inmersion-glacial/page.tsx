"use client"
import Navbar from '@/src/components/home/Navbar';
import Head from 'next/head';
import Footer from '@/src/components/shared/Footer';
import ExperienceOverview from './ExperienceOverview';
import {
  INMERSION_GLACIAL,
  INMERSION_GLACIAL_DETAIL,
  INMERSION_GLACIAL_REVIEWS,
} from '@/src/constants/experiences';
import ExperienceDetail from './ExperienceDetail';
import ExperienceFeatures from './ExperienceFeatures';
import { INMERSION_GLACIAL_FEATURES } from '../../../src/constants/experiences';
import ExperienceReviews from './ExperienceReviews';
import ReviewsForm from './ReviewsForm';
import { useState } from 'react';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experiencia Inmersión Glacial - Bucaramanga',
  description: 'Vive la Experiencia Inmersión Glacial en Bucaramanga con nuestra formación en baños de hielo, sesiones de yoga, técnicas de respiración y más.',
  openGraph: {
    images: 'https://www.pulsopolar.com/icebath8.jpg',
  },
}

export default function InmersionGlacialPage() {
  const [showReviewsForm, setShowReviewsForm] = useState(false)
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
      <div className="bg-gray-50">
        <header className="relative bg-gray-900">
          <Navbar />
        </header>

        <main>
          <ExperienceOverview
            experience={INMERSION_GLACIAL}
            reviews={INMERSION_GLACIAL_REVIEWS}
          />
          <ExperienceDetail detail={INMERSION_GLACIAL_DETAIL} />
          <ExperienceFeatures
            features={INMERSION_GLACIAL_FEATURES}
            serviceName={INMERSION_GLACIAL.name}
          />
          <ExperienceReviews setShowReviewsForm={setShowReviewsForm} reviews={INMERSION_GLACIAL_REVIEWS} />
          {showReviewsForm && <ReviewsForm setShowReviewsForm={setShowReviewsForm} />}
        </main>

        <Footer />
      </div>
    </>
  );
}
