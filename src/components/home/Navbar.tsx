"use client"
import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative px-4 sm:px-40 py-4 backdrop-blur-md backdrop-filter bg-opacity-10 bg-white" aria-label="Global">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg" alt=""/>
            </a>
            <div className="-mr-2 flex items-center md:hidden">
              <button type="button" className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false" onClick={() => { setIsOpen((prevState) => !prevState) }}>
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden space-x-8 md:flex md:ml-10">
            <a href="#" className="text-base font-medium text-white hover:text-gray-300">Servicios</a>
    
            <a href="#" className="text-base font-medium text-white hover:text-gray-300">Experiencias</a>
    
            <a href="#" className="text-base font-medium text-white hover:text-gray-300">Contacto</a>
    
            <a href="#" className="text-base font-medium text-white hover:text-gray-300">Nosotros</a>
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-6">
          <a href="#" className="text-base font-medium text-white hover:text-gray-300">Regístrate  </a>
          <a href="#" className="block w-full py-2 px-6 shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900 rounded-full"> Reserva </a>
        </div>
      </div>
    <div className={`${isOpen ? 'block' : 'hidden'} inset-x-0 transition transform origin-top md:hidden z-100`}>
          <div className="pt-5 pb-3">
            <div className="px-2 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-50 hover:text-gray-500">Product</a>

              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-50 hover:text-gray-500">Features</a>

              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-50 hover:text-gray-500">Marketplace</a>

              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-50 hover:text-gray-500">Company</a>
            </div>
            <div className="mt-6 px-5">
              <a href="#" className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700">Reserva</a>
            </div>
            <div className="mt-6 px-5">
              <p className="text-center text-base font-medium text-gray-300">Ya tienes cuenta? <a href="#" className="text-white hover:underline">Inicia Sesión</a></p>
            </div>
          </div>
      </div>
  </nav>

  )
}
