import { ExperimentOutlined, ThunderboltOutlined, UsergroupAddOutlined , RocketOutlined } from '@ant-design/icons'
import React from 'react'

const features = [
  {
    name: 'Innovación Continua',
    description: 'Tenemos una búsqueda constante de métodos innovadores y vanguardistas en bienestar y terapia.',
    icon: ExperimentOutlined,
  },
  {
    name: 'Comunidad Pulso Polar',
    description:
      'Crear y nutrir una comunidad de espíritus intrépidos donde los individuos puedan compartir, aprender y crecer juntos en su camino hacia el bienestar.',
    icon: UsergroupAddOutlined,
  },
  {
    name: 'Empoderamiento Activo',
    description:
      'Facilitar el crecimiento personal y profesional de nuestros clientes y empleados, promoviendo una cultura de autodesarrollo y logro.',
    icon: RocketOutlined,
  },
  {
    name: 'Ambición Sostenible',
    description:
      'Fomentar una ambición equilibrada que armonice el éxito empresarial con la sostenibilidad y el respeto por el medio ambiente.',
    icon: ThunderboltOutlined,
  },
]

const Values = () => {
  return (
    <div className="bg-gray-50 overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Nuestros valores nos definen
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" style={{ fontSize: '23px' }} />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Values