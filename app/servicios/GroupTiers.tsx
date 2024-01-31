import { classNames } from '@/src/utils/styling';
import { CheckOutlined } from '@ant-design/icons';

const pricing = {
  tiers: [
    {
      title: 'Plan Dúo',
      price: 36900,
      frequency: '2 personas',
      description:
        'Un viaje exclusivo para dos almas intrépidas.',
      features: [
        'Inmersiones a 1°C',
        'Captura de momentos',
        'Técnicas de respiración',
        'Tiempo de inmersión adaptado a las necesidades del dúo.'
      ],
      cta: 'Reserva',
      mostPopular: false,
    },
    {
      title: 'Plan Banda Gélida',
      price: 49900,
      frequency: '3 personas',
      description: 'Para bandas en busca aventura y crecimiento conjunto.',
      features: [
        'Inmersiones a 1°C',
        'Captura de momentos',
        'Ejercicios de respiración sincronizada',
        'Experiencia compartida de inmersión en hielo',
        'Tiempo de inmersión adaptado a las necesidades individuales.',
      ],
      cta: 'Reserva tu día',
      mostPopular: true,
    },
    {
      title: 'Plan Familia Glacial',
      price: 59900,
      frequency: '4 personas',
      description:
        'Explora los límites de la resistencia y el bienestar con tus amigos.',
      features: [
        'Inmersiones a 1°C',
        'Captura de momentos',
        'Sesión intensiva de baños de hielo',
        'Ejercicios de respiración sincronizada',
        'Tiempo de inmersión adaptado a las necesidades individuales.',
      ],
      cta: 'Reserva',
      mostPopular: false,
    },
  ],
};

export default function GroupTiers() {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
        Planes grupales
      </h2>
      <p className="mt-6 max-w-2xl text-xl text-gray-500">
        Transforma tu bienestar junto a tus amigos con nuestros paquetes
        grupales, diseñados para fortalecer lazos y fomentar el crecimiento
        mutuo en un entorno único y refrescante.
      </p>

      {/* Tiers */}
      <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                {tier.title}
              </h3>
              {tier.mostPopular ? (
                <p className="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                  Más popular
                </p>
              ) : null}
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  ${tier.price}
                </span>
                <span className="ml-1 text-xl font-semibold">
                  /{tier.frequency}
                </span>
              </p>
              <p className="mt-6 text-gray-500">{tier.description}</p>

              {/* Feature list */}
              <ul role="list" className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckOutlined
                      className="flex-shrink-0 w-6 h-6 text-indigo-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`https://wa.me/573153240111?text=${encodeURIComponent(`Quiero reservar mi plan para ${tier.frequency}!`)}`}
              target="_blank"
              className={classNames(
                tier.mostPopular
                  ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                  : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
                'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
              )}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
