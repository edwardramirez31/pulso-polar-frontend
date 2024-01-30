"use client"
import Navbar from '@/src/components/home/Navbar';
import Head from 'next/head';
import Footer from '@/src/components/shared/Footer';
import {
  OASIS_GLACIAL,
  OASIS_GLACIAL_DETAIL,
  OASIS_GLACIAL_REVIEWS,
  OASIS_GLACIAL_FEATURES,
} from '@/src/constants/experiences';
import ExperienceDetail from '../inmersion-glacial/ExperienceDetail';
import ExperienceFeatures from '../inmersion-glacial/ExperienceFeatures';
import ExperienceReviews from '../inmersion-glacial/ExperienceReviews';
import ExperienceOverview from '../inmersion-glacial/ExperienceOverview';
import { useState } from 'react';
import ReviewsForm from '../inmersion-glacial/ReviewsForm';

export default function InmersionGlacialPage() {
  const [showReviewsForm, setShowReviewsForm] = useState(false)

  return (
    <>
      <Head>
        {/* <meta charset="UTF-8"/> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Vive la Experiencia Oasis Glacial en Bucaramanga con nuestra formación en baños de hielo, sesiones de yoga, técnicas de respiración y más."
        />
        <meta
          name="keywords"
          content="Oasis Glacial, Baños de Hielo, Wim Hof, Yoga, Bucaramanga"
        />
        <title>Experiencia Oasis Glacial - Bucaramanga</title>
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
            experience={OASIS_GLACIAL}
            reviews={OASIS_GLACIAL_REVIEWS}
          />
          <ExperienceDetail detail={OASIS_GLACIAL_DETAIL} />
          <ExperienceFeatures
            features={OASIS_GLACIAL_FEATURES}
            serviceName={OASIS_GLACIAL.name}
          />
          <ExperienceReviews setShowReviewsForm={setShowReviewsForm} reviews={OASIS_GLACIAL_REVIEWS} />
          {showReviewsForm && <ReviewsForm setShowReviewsForm={setShowReviewsForm} />}
        </main>

        <Footer />
      </div>
    </>
  );
}
