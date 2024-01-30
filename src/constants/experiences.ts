export interface IExperience {
  name: string;
    href: string;
    price: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    breadcrumbs: {
        id: number;
        name: string;
        href: string;
    }[];
    sizes: {
        name: string;
        description: string;
    }[];
}

export interface IExperienceReviews {
  average: number;
    totalCount: number;
    counts: {
        rating: number;
        count: number;
    }[];
    featured: {
        id: number;
        rating: number;
        content: string;
        author: string;
        avatarSrc: string;
    }[];
}

export interface IExperienceDetail {
  title: string;
    description: string;
    items: {
        id: string;
        description: string;
        image: string;
    }[];
}

export interface IExperienceFeature {
  name: string;
  description: string;
  imageSrc: string;
}

export const INMERSION_GLACIAL_FEATURES: IExperienceFeature[] = [
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

export const INMERSION_GLACIAL_DETAIL: IExperienceDetail = {
  title: 'Descubre un hábito transformador para tu salud y bienestar',
  description: 'Nuestra experiencia de inmersión en hielo es más que un tratamiento; es un camino hacia la superación personal y la mejor versión de ti mismo. Descubre la ciencia detrás de la inmersión en frío y cómo tu cuerpo responde a esta estimulación extrema.',
  items: [
    {
      id: 'Captura de momentos',
      description: 'Documenta tu transformación con nuestro servicio de captura de momentos. Usando un iPhone 15 Pro, capturamos tus logros, asegurando que cada paso importante en tu camino hacia el bienestar sea recordado.',
      image: '/icebath8.jpg'
    },
    {
      id: 'Técnicas de respiración',
      description: 'Domina técnicas de respiración especializadas para mejorar la concentración y generar calor durante la inmersión. Comprenderás cómo tu cuerpo reacciona a bajas temperaturas y los beneficios de esta práctica.',
      image: '/oasis4.jpg'
    },
  ]
}

export const INMERSION_GLACIAL_REVIEWS: IExperienceReviews = {
  average: 5,
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
        <p>Desarrollar el hábito de la inmersión en hielo no solo ha mejorado mi condición física, sino que han sido un viaje de autodescubrimiento y mejora integral. Cada inmersión me enseña sobre resistencia, control y el poder de la mente.</p>
      `,
      author: 'Andrés Fernandez',
      avatarSrc:
        '/rojote.jpg',
    },
    {
      id: 1,
      rating: 5,
      content: `
        <p>La exposición deliberada al frío ha cambiado mi forma de enfrentar los retos, tanto físicos como emocionales. Cada sesión es un paso más hacia una mejor versión de mí mismo. Estoy profundamente agradecido por esta experiencia que ha enriquecido mi vida.</p>
      `,
      author: 'Oscar Monsalve',
      avatarSrc:
        '/oscarr.jpg',
    },
    // More reviews...
  ],
}

export const INMERSION_GLACIAL: IExperience = {
  name: 'Inmersión Glacial',
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


export const OASIS_GLACIAL_FEATURES: IExperienceFeature[] = [
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

export const OASIS_GLACIAL_DETAIL: IExperienceDetail = {
  title: 'Experiencia Oasis Glacial Premium',
  description: 'Sumérgete en nuestro jacuzzi lleno con 200kg de hielo mientras disfrutas de una vista panorámica de Bucaramanga. Una experiencia exclusiva que eleva el bienestar a un nivel superior.',
  items: [
    {
      id: 'Captura de momentos',
      description: 'Documenta tu experiencia desde una perspectiva única con nuestra captura de momentos utilizando un dron, además de fotos y videos con iPhone 15 Pro, para un recuerdo inolvidable.',
      image: '/gerson3.jpg'
    },
    {
      id: 'Técnicas de respiración',
      description: 'Un viaje único que combina el rejuvenecimiento y la superación personal con el lujo y la comodidad. Formación en la ciencia del frío, sesiones de yoga, técnicas de respiración y estrategias de integración en la vida diaria.',
      image: '/luisk.jpg'
    },
  ]
}

export const OASIS_GLACIAL_REVIEWS: IExperienceReviews = {
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
        <p>La combinación del hielo y las vistas panorámicas de la ciudad fue mágica. Sentí una renovación total tanto física como mental. Las sesiones de yoga y las técnicas de respiración enriquecieron aún más la experiencia.</p>
      `,
      author: 'Luis Rincón',
      avatarSrc:
        '/luisk2.jpg',
    },
    {
      id: 1,
      rating: 5,
      content: `
        <p>La experiencia fue una verdadera prueba de resistencia y fortaleza mental. La inmersión en el jacuzzi con 200kg de hielo me llevó al límite, no solo puso a prueba mi resistencia física, sino que también fortaleció mi mente.</p>
      `,
      author: 'Gerson Meza',
      avatarSrc:
        '/gerson4.jpg',
    },
    {
      id: 1,
      rating: 5,
      content: `
        <p>Oasis Glacial me ofreció un momento de pura serenidad y conexión conmigo mismo, en medio de una atmósfera de auténtico lujo. La vista desde el jacuzzi era espectacular, y las técnicas de respiración me ayudaron a disfrutar plenamente cada segundo.</p>
      `,
      author: 'Oscar Monsalve',
      avatarSrc:
        '/oscarr.jpg',
    },
    // More reviews...
  ],
}

export const OASIS_GLACIAL: IExperience = {
  name: 'Oasis Glacial',
  href: '#',
  price: '$125.900',
  description:
    "Vive la versión premium de los baños de hielo, diseñada para elevar tu bienestar a nuevas alturas. Sumérgete en un jacuzzi repleto con 200kg de hielo mientras disfrutas de una vista panorámica de la ciudad. Esta experiencia exclusiva combina la revitalización que ofrecen los baños de hielo con sesiones de yoga, técnicas de respiración avanzadas y una atmósfera de puro lujo. Además, inmortaliza tu transformación con capturas de momentos únicas desde el cielo con nuestro servicio de dron, llevando tu recuerdo de esta aventura única más allá de lo convencional.",
  imageSrc: '/oasis-glacial6.png',
  imageAlt: 'Light green canvas bag with black straps, handle, front zipper pouch, and drawstring top.',
  breadcrumbs: [
    { id: 1, name: 'Experiencias', href: '#' },
    { id: 2, name: 'Inmersión', href: '#' },
  ],
  sizes: [
    { name: '11 AM', description: 'Perfecto para potenciar la bioquímica y el metabolismo' },
    { name: '4 PM', description: 'Ideal para descansar y recuperarse de un día largo y productivo' },
  ],
}