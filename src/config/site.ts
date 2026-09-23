export interface BirdSpecies {
  slug: string;
  name: string;
  scientificName: string;
  family: string;
  tag?: string;
}

export const SITE_CONFIG = {
  name: "Lëpigames",
  gameName: "Cachañando",
  slogan: "No se puede amar lo que no se conoce, ni defender lo que no se ama.",
  author: "María de los Ángeles",
  location: "Región de Los Lagos, Chile",
  email: "contacto@lepigames.cl",
  mercadoPagoUrl: "https://mpago.la/tu-link-aqui", // URL parametrizable de checkout
  whatsAppNumber: "+56912345678", // Parametrizable
  whatsAppMessage: "¡Hola Lëpigames! Quisiera consultar sobre el juego Cachañando o coordinar un despacho.",
  instagramUrl: "https://instagram.com/lepigames",
  instagramHandle: "@lepigames",
  price: "$14.990", // Ejemplo de precio sugerido
  badges: [
    { text: "Hecho con Amor", icon: "heart" },
    { text: "Enviamos a todo Chile", icon: "truck" },
    { text: "Compra Segura", icon: "shield" }
  ]
};

export const BIRD_SPECIES: BirdSpecies[] = [
  {
    slug: "cachana",
    name: "Cachaña",
    scientificName: "Enicognathus ferrugineus",
    family: "Psittacidae (Loros)",
    tag: "Ave Protagonista"
  },
  {
    slug: "chucao",
    name: "Chucao",
    scientificName: "Scelorchilus rubecula",
    family: "Rhinocryptidae",
    tag: "Bosque Valdiviano"
  },
  {
    slug: "martin-pescador",
    name: "Martín Pescador",
    scientificName: "Megaceryle torquata",
    family: "Alcedinidae",
    tag: "Ríos y Lagos"
  },
  {
    slug: "bandurria",
    name: "Bandurria",
    scientificName: "Theristicus melanopis",
    family: "Threskiornithidae",
    tag: "Humedales"
  },
  {
    slug: "carpintero-negro",
    name: "Carpintero Negro",
    scientificName: "Campephilus magellanicus",
    family: "Picidae",
    tag: "Bosque Nativo"
  },
  {
    slug: "loica",
    name: "Loica Común",
    scientificName: "Leistes loyca",
    family: "Icteridae",
    tag: "Praderas"
  },
  {
    slug: "picaflor",
    name: "Picaflor Chico",
    scientificName: "Sephanoides sephaniodes",
    family: "Trochilidae",
    tag: "Jardines y Bosques"
  },
  {
    slug: "condor",
    name: "Cóndor Andino",
    scientificName: "Vultur gryphus",
    family: "Cathartidae",
    tag: "Alta Montaña"
  },
  {
    slug: "cisne-de-cuello-negro",
    name: "Cisne de Cuello Negro",
    scientificName: "Cygnus melancoryphus",
    family: "Anatidae",
    tag: "Santuario"
  },
  {
    slug: "pilpilen",
    name: "Pilpilén Común",
    scientificName: "Haematopus palliatus",
    family: "Haematopodidae",
    tag: "Costa Arenosa"
  },
  {
    slug: "pinguino-de-magallanes",
    name: "Pingüino de Magallanes",
    scientificName: "Spheniscus magellanicus",
    family: "Spheniscidae",
    tag: "Marino"
  },
  {
    slug: "tucuquere",
    name: "Tucúquere",
    scientificName: "Bubo magellanicus",
    family: "Strigidae",
    tag: "Rapaz Nocturna"
  },
  {
    slug: "queltehue",
    name: "Queltehue Común",
    scientificName: "Vanellus chilensis",
    family: "Charadriidae",
    tag: "Campos"
  },
  {
    slug: "flamenco-chileno",
    name: "Flamenco Chileno",
    scientificName: "Phoenicopterus chilensis",
    family: "Phoenicopteridae",
    tag: "Salares y Costas"
  },
  {
    slug: "chorlo-chileno",
    name: "Chorlo Chileno",
    scientificName: "Zonibyx modestus",
    family: "Charadriidae",
    tag: "Playero Migratorio"
  },
  {
    slug: "pitotoy-chico",
    name: "Pitotoy Chico",
    scientificName: "Tringa flavipes",
    family: "Scolopacidae",
    tag: "Playero"
  },
  {
    slug: "playero-vuelvepiedras",
    name: "Playero Vuelvepiedras",
    scientificName: "Arenaria interpres",
    family: "Scolopacidae",
    tag: "Intertidal"
  },
  {
    slug: "fardela-blanca",
    name: "Fardela Blanca",
    scientificName: "Ardenna creatopus",
    family: "Procellariidae",
    tag: "Pelágico"
  },
  {
    slug: "gaviotin-monja",
    name: "Gaviotín Monja",
    scientificName: "Larosterna inca",
    family: "Laridae",
    tag: "Acantilados Costeros"
  },
  {
    slug: "gaviota-cahuil",
    name: "Gaviota Cáhuil",
    scientificName: "Chroicocephalus maculipennis",
    family: "Laridae",
    tag: "Estuarios"
  },
  {
    slug: "huairavo",
    name: "Huairavo Común",
    scientificName: "Nycticorax nycticorax",
    family: "Ardeidae",
    tag: "Garza Nocturna"
  },
  {
    slug: "huala",
    name: "Huala",
    scientificName: "Podiceps major",
    family: "Podicipedidae",
    tag: "Lagos del Sur"
  },
  {
    slug: "lile",
    name: "Lile",
    scientificName: "Poikilocarbo gaimardi",
    family: "Phalacrocoracidae",
    tag: "Costa Rocosa"
  },
  {
    slug: "pato-real",
    name: "Pato Real",
    scientificName: "Mareca sibilatrix",
    family: "Anatidae",
    tag: "Humedales"
  },
  {
    slug: "peuquita",
    name: "Peuquita",
    scientificName: "Astur chilensis",
    family: "Accipitridae",
    tag: "Rapaz de Bosque"
  },
  {
    slug: "piden",
    name: "Pidén Común",
    scientificName: "Pardirallus sanguinolentus",
    family: "Rallidae",
    tag: "Juncales"
  },
  {
    slug: "piquero",
    name: "Piquero Común",
    scientificName: "Sula variegata",
    family: "Sulidae",
    tag: "Marino"
  },
  {
    slug: "tagua",
    name: "Tagua Común",
    scientificName: "Fulica armillata",
    family: "Rallidae",
    tag: "Lagunas"
  },
  {
    slug: "tiuque",
    name: "Tiuque",
    scientificName: "Milvago chimango",
    family: "Falconidae",
    tag: "Adaptativo"
  },
  {
    slug: "tortola",
    name: "Tórtola Común",
    scientificName: "Zenaida auriculata",
    family: "Columbidae",
    tag: "Valles"
  },
  {
    slug: "nandu",
    name: "Ñandú / Suri",
    scientificName: "Rhea pennata",
    family: "Rheidae",
    tag: "Estepa Patagónica"
  }
];

export const FAQS = [
  {
    question: "¿Hacen despachos a todo Chile y cómo es el envío?",
    answer: "¡Sí! Despachamos a todas las regiones de Chile a través de Starken, Chilexpress o Correos de Chile. Una vez realizado tu pedido, nos pondremos en contacto vía WhatsApp o correo para enviar tu código de seguimiento."
  },
  {
    question: "¿Cuáles son los tiempos de entrega estimados?",
    answer: "Para la Región de Los Lagos (Puerto Montt, Puerto Varas, Maullín, Chiloé), las entregas suelen demorar entre 24 y 48 horas hábiles. Para la Región Metropolitana y resto del país, entre 2 y 4 días hábiles."
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer: "Aceptamos todas las tarjetas de débito, crédito y transferencia bancaria directa a coordinar vía WhatsApp."
  },
  {
    question: "¿Para qué edades está recomendado Cachañando?",
    answer: "Cachañando está diseñado para ser disfrutado desde los 4 años en adelante. Es un juego ideal para toda la familia, salas de clases y grupos de amigos, ya que ejercita la agudeza visual, la memoria y la rapidez."
  },
  {
    question: "¿Cómo funciona la mecánica del juego de cartas?",
    answer: "El juego se compone de 31 cartas con ilustraciones únicas. Entre cualquier par de cartas, siempre existe exactamente una (y solo una) coincidencia de ave. Con esta regla básica se ofrecen hasta 6 modalidades distintas de juego."
  },
  {
    question: "¿Puedo comprar Cachañando para mi colegio o institución educacional?",
    answer: "¡Por supuesto! Desarrollamos talleres y torneos escolares (como el realizado en la Escuela Rural La Chamiza junto a la ROC). Escríbenos directamente vía WhatsApp para cotizaciones por volumen y material pedagógico."
  }
];
