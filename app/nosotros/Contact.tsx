import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

export default function Contact() {
  return (
    <section id="contacto" className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-2 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Contacta con Nosotros
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Si tienes preguntas sobre nuestros servicios o deseas saber más
              sobre nuestra empresa, no dudes en contactarnos. Estamos aquí para
              ayudarte a comenzar tu viaje hacia el bienestar.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Ubicación</dt>
                <dd>
                  <p>Bucaramanga, Santander</p>
                  <p>Colombia</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Teléfono</dt>
                <dd className="flex">
                  <PhoneOutlined
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                    style={{ fontSize: '23px' }}
                  />
                  <span className="ml-3">+57 315 3240111</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Correo</dt>
                <dd className="flex">
                  <MailOutlined
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                    style={{ fontSize: '23px' }}
                  />
                  <span className="ml-3">contacto@pulsopolar.com</span>
                </dd>
              </div>
            </dl>
            {/* <p className="mt-6 text-base text-gray-500">
              Looking for careers?{' '}
              <a href="#" className="font-medium text-gray-700 underline">
                View all job openings
              </a>
              .
            </p> */}
          </div>
        </div>
        <div className="bg-white py-6 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Nombre
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md text-black"
                  placeholder="Nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Correo
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md text-black"
                  placeholder="Correo"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Teléfono
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md text-black"
                  placeholder="Teléfono"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500 border border-gray-300 rounded-md text-black"
                  placeholder="Mensaje"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-cyan-600  hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
