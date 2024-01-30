import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className="pt-5 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden relative">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 ">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">Acerca de</span>
                  <span style={{color: '#9cdbd9'}} className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">Pulso Polar</span>
                </h1>
                <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">En Pulso Polar, estamos redefiniendo el significado de salud integral. Únete a nosotros en un viaje hacia el bienestar óptimo, inspirado por la naturaleza y la ciencia.</p>
                <div className="mt-4 sm:mt-6">
                    <div className="flex">
  
                      <div className="mt-1 sm:mt-0">
                        <Link href="/experiencias/inmersion-glacial" style={{backgroundColor: '#9cdbd9'}} className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">Conoce más</Link>
                      </div>
                    </div>
      
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">

                {/* <img className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg" alt=""/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero