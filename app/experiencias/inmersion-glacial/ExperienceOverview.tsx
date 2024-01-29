import { IExperience, IExperienceReviews } from '@/src/constants/experiences';
import { classNames } from '@/src/utils/styling'
import { StarFilled, CheckOutlined, QuestionOutlined } from '@ant-design/icons'
import { RadioGroup } from '@headlessui/react'
import Image from 'next/image';
import React, { useState } from 'react'

interface Props {
  experience: IExperience;
  reviews: IExperienceReviews;
}

const ExperienceOverview = ({experience, reviews}: Props) => {
  const [selectedSize, setSelectedSize] = useState(experience.sizes[0])

  return (
    <div className="bg-white">
            <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
              <div className="lg:max-w-lg lg:self-end">
                <nav aria-label="Breadcrumb">
                  <ol role="list" className="flex items-center space-x-2">
                    {experience.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                      <li key={breadcrumb.id}>
                        <div className="flex items-center text-sm">
                          <a href={breadcrumb.href} className="font-medium text-gray-500 hover:text-gray-900">
                            {breadcrumb.name}
                          </a>
                          {breadcrumbIdx !== experience.breadcrumbs.length - 1 ? (
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
                  <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{experience.name}</h1>
                </div>
                <section aria-labelledby="information-heading" className="mt-4">
                  <h2 id="information-heading" className="sr-only">
                    Detalles de la experiencia {experience.name}
                  </h2>
                  <div className="flex items-center">
                    <p className="text-lg text-gray-900 sm:text-xl">{experience.price}</p>
  
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
                    <p className="text-base text-gray-500">{experience.description}</p>
                  </div>
  
                  <div className="mt-6 flex items-center">
                    <CheckOutlined className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
                    <p className="ml-2 text-sm text-gray-500">Disponible todos los días</p>
                  </div>
                </section>
              </div>
  
              {/* experience image */}
              <div className="mt-10 w-full h-full lg:mt-0 lg:col-start-2 lg:row-span-2 ">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={experience.imageSrc}
                    alt={experience.imageAlt}
                    className="object-center object-cover"
                    layout="responsive"
                    width={100}
                    height={50}
                  />
                </div>
              </div>
  
              {/* experience form */}
              <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
                <section aria-labelledby="options-heading">
                  <h2 id="options-heading" className="sr-only">
                    experience options
                  </h2>
  
                  <form>
                    <div className="sm:flex sm:justify-between">
                      {/* Size selector */}
                      <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                        <RadioGroup.Label className="block text-sm font-medium text-gray-700">Horario</RadioGroup.Label>
                        <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {experience.sizes.map((size) => (
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
  )
}

export default ExperienceOverview