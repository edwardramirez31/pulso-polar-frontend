"use client"
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckOutlined, QuestionOutlined, StarFilled } from '@ant-design/icons';
import Navbar from '@/src/components/home/Navbar';
import Head from 'next/head';
import Footer from '@/src/components/shared/Footer';

const product = {
  name: 'Inmerssión Glacial',
  href: '#',
  price: '$48.900',
  description:
    "Sumérgete en la Experiencia Inmersión Glacial de Pulso Polar en Bucaramanga, donde el poder del frío se convierte en tu aliado para el bienestar y la superación personal. Esta aventura única combina la ciencia de la inmersión en hielo con yoga, técnicas de respiración y estrategias de integración diaria, diseñadas para fortalecer tu cuerpo y mente. Prepárate para explorar tus límites, mejorar tu salud y desbloquear una energía inimaginable.",
  imageSrc: '/inmersion-glacial.png',
  imageAlt: 'Light green canvas bag with black straps, handle, front zipper pouch, and drawstring top.',
  breadcrumbs: [
    { id: 1, name: 'Experiencias', href: '#' },
    { id: 2, name: 'Inmersión', href: '#' },
  ],
  sizes: [
    { name: '11 AM', description: 'Perfecto para potenciar la bioquímica y el metabolismo' },
    { name: '5 PM', description: 'Ideal para descansar y recuperarse de un día largo y productivo' },
  ],
}
const policies = [
  {
    name: 'Sesión de Yoga y Estiramientos',
    description:
      'Prepara tu cuerpo y mente, creando una conexión profunda entre tu cuerpo y el desafío del frío.',
    imageSrc: '/yoga.png',
  },
  {
    name: 'Mentalidad para el éxito',
    description:
      'Aprenderás a enfrentar desafíos físicos y mentales, elevando tus niveles de energía y claridad mental.',
    imageSrc: '/success.png',
  },
  {
    name: 'Estrategias de Integración Diaria',
    description:
      "Integrarás lo aprendido en tu vida diaria, transformando la inmersión en hielo en un hábito que eleva tu bienestar.",
    imageSrc: '/habit.png',
  },
  {
    name: 'Protocolos de Seguridad',
    description:
      "Te guiaremos a través de protocolos para garantizar una experiencia segura y controlada.",
    imageSrc: '/safety.png',
  },
]
const reviews = {
  average: 4.5,
  totalCount: 14,
  counts: [
    { rating: 5, count: 14 },
    { rating: 4, count: 0 },
    { rating: 3, count: 0 },
    { rating: 2, count: 0 },
    { rating: 1, count: 0 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>Los baños de hielo han sido una revelación para mí. Desde que empecé a practicarlos regularmente en Pulso Polar, he notado una increíble mejora en mi energía diaria y una reducción significativa en el estrés. ¡Es una experiencia que recomiendo a todos!</p>
      `,
      author: 'Nicolas Bustamante',
      avatarSrc:
        '/bustamante.jpeg',
    },
    {
      id: 1,
      rating: 5,
      content: `
        <p>Los baños de hielo en Pulso Polar no solo han mejorado mi condición física, sino que han sido un viaje de autodescubrimiento y superación personal. Cada inmersión me enseña sobre resistencia, control y el poder de la mente.</p>
      `,
      author: 'Andrés Fernandez',
      avatarSrc:
        '/rojote.jpg',
    },
    {
      id: 1,
      rating: 5,
      content: `
        <p>Los baños de hielo han cambiado mi forma de enfrentar los retos, tanto físicos como emocionales. Cada sesión es un paso más hacia una mejor versión de mí mismo. Estoy profundamente agradecida por esta experiencia que ha enriquecido mi vida.</p>
      `,
      author: 'Oscar Monsalve',
      avatarSrc:
        '/oscarr.jpg',
    },
    // More reviews...
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function InmersionGlacialPage() {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  return (
    <>
      <Head>
        {/* <meta charset="UTF-8"/> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Vive la Experiencia Inmersión Glacial en Bucaramanga con nuestra formación en baños de hielo, sesiones de yoga, técnicas de respiración y más."/>
        <meta name="keywords" content="Inmersión Glacial, Baños de Hielo, Wim Hof, Yoga, Bucaramanga"/>
        <title>Experiencia Inmersión Glacial - Bucaramanga</title>
      </Head>
      <div className="bg-gray-50">
        {/* Mobile menu */}
  
        <header className="relative bg-gray-900">
          <Navbar />
        </header>
  
        <main>
          {/* Product */}
          <div className="bg-white">
            <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
              {/* Product details */}
              <div className="lg:max-w-lg lg:self-end">
                <nav aria-label="Breadcrumb">
                  <ol role="list" className="flex items-center space-x-2">
                    {product.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                      <li key={breadcrumb.id}>
                        <div className="flex items-center text-sm">
                          <a href={breadcrumb.href} className="font-medium text-gray-500 hover:text-gray-900">
                            {breadcrumb.name}
                          </a>
                          {breadcrumbIdx !== product.breadcrumbs.length - 1 ? (
                            <svg
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              aria-hidden="true"
                              className="ml-2 flex-shrink-0 h-5 w-5 text-gray-300"
                            >
                              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                            </svg>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ol>
                </nav>
  
                <div className="mt-4">
                  <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
                </div>
  
                <section aria-labelledby="information-heading" className="mt-4">
                  <h2 id="information-heading" className="sr-only">
                    Product information
                  </h2>
  
                  <div className="flex items-center">
                    <p className="text-lg text-gray-900 sm:text-xl">{product.price}</p>
  
                    <div className="ml-4 pl-4 border-l border-gray-300">
                      <h2 className="sr-only">Reviews</h2>
                      <div className="flex items-center">
                        <div>
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarFilled
                                key={rating}
                                className={classNames(
                                  reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">{reviews.average} out of 5 stars</p>
                        </div>
                        <p className="ml-2 text-sm text-gray-500">{reviews.totalCount} reseñas</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="mt-4 space-y-6">
                    <p className="text-base text-gray-500">{product.description}</p>
                  </div>
  
                  <div className="mt-6 flex items-center">
                    <CheckOutlined className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
                    <p className="ml-2 text-sm text-gray-500">Disponible todos los días</p>
                  </div>
                </section>
              </div>
  
              {/* Product image */}
              <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
  
              {/* Product form */}
              <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
                <section aria-labelledby="options-heading">
                  <h2 id="options-heading" className="sr-only">
                    Product options
                  </h2>
  
                  <form>
                    <div className="sm:flex sm:justify-between">
                      {/* Size selector */}
                      <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                        <RadioGroup.Label className="block text-sm font-medium text-gray-700">Horario</RadioGroup.Label>
                        <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {product.sizes.map((size) => (
                            <RadioGroup.Option
                              as="div"
                              key={size.name}
                              value={size}
                              className={({ active }) =>
                                classNames(
                                  active ? 'ring-2 ring-indigo-500' : '',
                                  'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none'
                                )
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <RadioGroup.Label as="p" className="text-base font-medium text-gray-900">
                                    {size.name}
                                  </RadioGroup.Label>
                                  <RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
                                    {size.description}
                                  </RadioGroup.Description>
                                  <div
                                    className={classNames(
                                      active ? 'border' : 'border-2',
                                      checked ? 'border-indigo-500' : 'border-transparent',
                                      'absolute -inset-px rounded-lg pointer-events-none'
                                    )}
                                    aria-hidden="true"
                                  />
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="mt-4">
                      <a href="#" className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                        <span>Qué horario debería escoger?</span>
                        <QuestionOutlined
                          className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                    <div className="mt-10">
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                      >
                        Reserva tu experiencia
                      </button>
                    </div>
                    {/* <div className="mt-6 text-center">
                      <a href="#" className="group inline-flex text-base font-medium">
                        <SafetyCertificateFilled
                          className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <span className="text-gray-500 hover:text-gray-700">Lifetime Guarantee</span>
                      </a>
                    </div> */}
                  </form>
                </section>
              </div>
            </div>
          </div>
  
          <div className="bg-gray-900">
            <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
              {/* Details section */}
              <section aria-labelledby="details-heading">
                <div className="flex flex-col items-center text-center">
                  <h2 id="details-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Descubre un hábito transformador para tu salud y bienestar
                  </h2>
                  <p className="mt-3 max-w-3xl text-lg text-gray-300">
                  Nuestra experiencia de inmersión en hielo es más que un tratamiento; es un camino hacia la superación personal y la mejor versión de ti mismo. Descubre la ciencia detrás de la inmersión en frío y cómo tu cuerpo responde a esta estimulación extrema.
                  {/* Descubre la ciencia detrás de la inmersión en frío y cómo tu cuerpo responde a esta estimulación extrema */}
                  </p>
                </div>
    
                <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                  <div>
                    <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                      <img
                        src="/icebath8.jpg"
                        alt="Drawstring top with elastic loop closure and textured interior padding."
                        className="w-full h-80 object-center object-cover"
                      />
                    </div>
                    <p className="mt-8 text-base text-gray-300">
                      Documenta tu transformación con nuestro servicio de captura de momentos. Usando un iPhone 15 Pro, capturamos tus logros, asegurando que cada paso importante en tu camino hacia el bienestar sea recordado.
                    </p>
                  </div>
                  <div>
                    <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                      <img
                        src="/icebath12.jpg"
                        alt="Front zipper pouch with included key ring."
                        className="w-full h-80 object-center object-cover"
                      />
                    </div>
                    <p className="mt-8 text-base text-gray-300">
                      Domina técnicas de respiración especializadas para mejorar la concentración y generar calor durante la inmersión. Comprenderás cómo tu cuerpo reacciona a bajas temperaturas y los beneficios de esta práctica.
                    </p>
                  </div>
                </div>
              </section>
    
              
            </div>
          </div>
          {/* Policies section */}
          <section aria-labelledby="policy-heading" className="mt-16 lg:mt-24 max-w-2xl mx-auto lg:max-w-7xl lg:px-8 px-4">
              <h2 id="policy-heading" className="sr-only">
                Características del paquete Inmersión Glacial
              </h2>
              <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 ">
                {policies.map((policy) => (
                  <div key={policy.name}>
                    <img src={policy.imageSrc} alt={policy.name} className="h-24 w-auto mx-auto" />
                    <h3 className="mt-6 text-base font-medium text-gray-900">{policy.name}</h3>
                    <p className="mt-3 text-base text-gray-500">{policy.description}</p>
                  </div>
                ))}
              </div>
            </section>
  
          <section aria-labelledby="reviews-heading" className="bg-white">
            <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-4">
                <h2 id="reviews-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                  Reseñas de Clientes
                </h2>
  
                <div className="mt-3 flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarFilled
                          key={rating}
                          className={classNames(
                            reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                            'flex-shrink-0 h-5 w-5'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                  </div>
                  <p className="ml-2 text-sm text-gray-900">Basado en {reviews.totalCount} reseñas</p>
                </div>
  
                <div className="mt-6">
                  <h3 className="sr-only">Review data</h3>
  
                  <dl className="space-y-3">
                    {reviews.counts.map((count) => (
                      <div key={count.rating} className="flex items-center text-sm">
                        <dt className="flex-1 flex items-center">
                          <p className="w-3 font-medium text-gray-900">
                            {count.rating}
                            <span className="sr-only"> star reviews</span>
                          </p>
                          <div aria-hidden="true" className="ml-1 flex-1 flex items-center">
                            <StarFilled
                              className={classNames(
                                count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                                'flex-shrink-0 h-5 w-5'
                              )}
                              aria-hidden="true"
                            />
  
                            <div className="ml-3 relative flex-1">
                              <div className="h-3 bg-gray-100 border border-gray-200 rounded-full" />
                              {count.count > 0 ? (
                                <div
                                  className="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                                  style={{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }}
                                />
                              ) : null}
                            </div>
                          </div>
                        </dt>
                        <dd className="ml-3 w-10 text-right tabular-nums text-sm text-gray-900">
                          {Math.round((count.count / reviews.totalCount) * 100)}%
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
  
                <div className="mt-10">
                  <h3 className="text-lg font-medium text-gray-900">Comparte tus pensamientos</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Comparte tu experiencia acerca de este servicio si ya lo has adquirido antes.
                  </p>
  
                  <a
                    href="#"
                    className="mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                  >
                    Escribe una reseña
                  </a>
                </div>
              </div>
  
              <div className="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
                <h3 className="sr-only">Recent reviews</h3>
  
                <div className="flow-root">
                  <div className="-my-12 divide-y divide-gray-200">
                    {reviews.featured.map((review) => (
                      <div key={review.id} className="py-12">
                        <div className="flex items-center">
                          <img src={review.avatarSrc} alt={`${review.author}.`} className="h-12 w-12 rounded-full" />
                          <div className="ml-4">
                            <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                            <div className="mt-1 flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarFilled
                                  key={rating}
                                  className={classNames(
                                    review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="sr-only">{review.rating} out of 5 stars</p>
                          </div>
                        </div>
  
                        <div
                          className="mt-4 space-y-6 text-base italic text-gray-600"
                          dangerouslySetInnerHTML={{ __html: review.content }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
  
        <Footer />
      </div>
    </>
  )
}
