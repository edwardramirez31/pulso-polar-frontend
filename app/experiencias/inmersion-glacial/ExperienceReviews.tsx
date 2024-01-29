import React from 'react';
import {  StarFilled } from '@ant-design/icons';
import { classNames } from '@/src/utils/styling';
import { IExperienceReviews } from '@/src/constants/experiences';
import Image from 'next/image';


interface Props {
  reviews: IExperienceReviews;
}


const ExperienceReviews = ({reviews}: Props) => {
  return (
    <section aria-labelledby="reviews-heading" className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-4">
          <h2
            id="reviews-heading"
            className="text-2xl font-extrabold tracking-tight text-gray-900"
          >
            Reseñas de Clientes
          </h2>

          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarFilled
                    key={rating}
                    className={classNames(
                      reviews.average > rating
                        ? 'text-yellow-400'
                        : 'text-gray-300',
                      'flex-shrink-0 h-5 w-5'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">
              Basado en {reviews.totalCount} reseñas
            </p>
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
                    <div
                      aria-hidden="true"
                      className="ml-1 flex-1 flex items-center"
                    >
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
                            style={{
                              width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                            }}
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
            <h3 className="text-lg font-medium text-gray-900">
              Comparte tus pensamientos
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Comparte tu experiencia acerca de este servicio si ya lo has
              adquirido antes.
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
                    <div className="relative h-12 w-12">
                      <Image
                        fill
                        src={review.avatarSrc}
                        alt={`${review.author}.`}
                        className="rounded-full"
                        loading='lazy'
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-900">
                        {review.author}
                      </h4>
                      <div className="mt-1 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarFilled
                            key={rating}
                            className={classNames(
                              review.rating > rating
                                ? 'text-yellow-400'
                                : 'text-gray-300',
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
  );
};

export default ExperienceReviews;
