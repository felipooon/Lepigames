export interface BirdSpecies {
  slug: string;
  name: string;
  scientificName: string;
  family: string;
  description: string;
  tag?: string;
}

export const SITE_CONFIG = {
  name: "Lëpigames",
  gameName: "Cachañando",
  slogan: "No se puede amar lo que no se conoce, ni defender lo que no se ama.",
  author: "María de los Ángeles",
  location: "Región de Los Lagos, Chile",
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
    description: "El loro más austral del mundo. Ave gregaria, bulliciosa y curiosa que le da nombre a nuestro primer juego.",
    tag: "Ave Protagonista"
  },
  {
    slug: "chucao",
    name: "Chucao",
    scientificName: "Scelorchilus rubecula",
    family: "Rhinocryptidae",
    description: "Habitante emblemático del sotobosque del bosque valdiviano, famoso por su alegre canto y leyenda campesina.",
    tag: "Bosque Valdiviano"
  },
  {
    slug: "martin-pescador",
    name: "Martín Pescador",
    scientificName: "Megaceryle torquata",
    family: "Alcedinidae",
    description: "Rápido zambullidor y audaz cazador de peces en ríos y lagos del sur de Chile.",
    tag: "Ríos y Lagos"
  },
  {
    slug: "bandurria",
    name: "Bandurria",
    scientificName: "Theristicus melanopis",
    family: "Threskiornithidae",
    description: "Inconfundible por su largo pico curvado y su potente reclamo en praderas y humedales del sur.",
    tag: "Humedales"
  },
  {
    slug: "carpintero-negro",
    name: "Carpintero Negro",
    scientificName: "Campephilus magellanicus",
    family: "Picidae",
    description: "Majestuoso habitante de los bosques maduros patagónicos y templados.",
    tag: "Bosque Nativo"
  },
  {
    slug: "loica",
    name: "Loica Común",
    scientificName: "Leistes loyca",
    family: "Icteridae",
    description: "Ave de inconfundible y encendido pecho rojo, reina de prados y de la tradición popular.",
    tag: "Praderas"
  },
  {
    slug: "picaflor",
    name: "Picaflor Chico",
    scientificName: "Sephanoides sephaniodes",
    family: "Trochilidae",
    description: "Pequeña joya alada de brillante corona incandescente y vuelo suspendido.",
    tag: "Jardines y Bosques"
  },
  {
    slug: "condor",
    name: "Cóndor Andino",
    scientificName: "Vultur gryphus",
    family: "Cathartidae",
    description: "El gigante de los Andes, amo y señor de las cumbres y corrientes térmicas de Chile.",
    tag: "Alta Montaña"
  },
  {
    slug: "cisne-de-cuello-negro",
    name: "Cisne de Cuello Negro",
    scientificName: "Cygnus melancoryphus",
    family: "Anatidae",
    description: "Símbolo de elegancia en santuarios de la naturaleza y humedales del centro-sur.",
    tag: "Santuario"
  },
  {
    slug: "pilpilen",
    name: "Pilpilén Común",
    scientificName: "Haematopus palliatus",
    family: "Haematopodidae",
    description: "Habitante de playas de arena, con su brillante pico rojo especializado en abrir moluscos.",
    tag: "Costa Arenosa"
  },
  {
    slug: "pinguino-de-magallanes",
    name: "Pingüino de Magallanes",
    scientificName: "Spheniscus magellanicus",
    family: "Spheniscidae",
    description: "Navegante experto de los canales sureños e islas del Pacífico.",
    tag: "Marino"
  },
  {
    slug: "tucuquere",
    name: "Tucúquere",
    scientificName: "Bubo magellanicus",
    family: "Strigidae",
    description: "El búho más grande de Chile, guardián nocturno con intensos ojos amarillos.",
    tag: "Rapaz Nocturna"
  },
  {
    slug: "queltehue",
    name: "Queltehue Común",
    scientificName: "Vanellus chilensis",
    family: "Charadriidae",
    description: "El centinela veloz de campos y parques, siempre alerta con su característico grito.",
    tag: "Campos"
  },
  {
    slug: "flamenco-chileno",
    name: "Flamenco Chileno",
    scientificName: "Phoenicopterus chilensis",
    family: "Phoenicopteridae",
    description: "Espectacular ave de plumaje rosado que engalana salares y humedales costeros.",
    tag: "Salares y Costas"
  },
  {
    slug: "chorlo-chileno",
    name: "Chorlo Chileno",
    scientificName: "Zonibyx modestus",
    family: "Charadriidae",
    description: "Ave playera y migratoria de delicado plumaje en pecho y cabeza.",
    tag: "Playero Migratorio"
  },
  {
    slug: "pitotoy-chico",
    name: "Pitotoy Chico",
    scientificName: "Tringa flavipes",
    family: "Scolopacidae",
    description: "Pequeño viajero de largas patas amarillas que frecuenta estuarios y marismas.",
    tag: "Playero"
  },
  {
    slug: "playero-vuelvepiedras",
    name: "Playero Vuelvepiedras",
    scientificName: "Arenaria interpres",
    family: "Scolopacidae",
    description: "Curioso volcador de rocas costeras en busca de pequeños invertebrados.",
    tag: "Intertidal"
  },
  {
    slug: "fardela-blanca",
    name: "Fardela Blanca",
    scientificName: "Ardenna creatopus",
    family: "Procellariidae",
    description: "Ave pelágica viajera que anida exclusivamente en islas chilenas.",
    tag: "Pelágico"
  },
  {
    slug: "gaviotin-monja",
    name: "Gaviotín Monja",
    scientificName: "Larosterna inca",
    family: "Laridae",
    description: "Habitante de acantilados marinos con inconfundibles plumachos blancos en las mejillas.",
    tag: "Acantilados Costeros"
  },
  {
    slug: "gaviota-cahuil",
    name: "Gaviota Cáhuil",
    scientificName: "Chroicocephalus maculipennis",
    family: "Laridae",
    description: "Gaviota de capuchón café en época reproductiva, habitual en estuarios y campos.",
    tag: "Estuarios"
  },
  {
    slug: "huairavo",
    name: "Huairavo Común",
    scientificName: "Nycticorax nycticorax",
    family: "Ardeidae",
    description: "Garza nocturna de mirada penetrante y hábil pescadora en riberas.",
    tag: "Garza Nocturna"
  },
  {
    slug: "huala",
    name: "Huala",
    scientificName: "Podiceps major",
    family: "Podicipedidae",
    description: "El zambullidor insigne de lagos del sur, de cuello esbelto y cortejo vistoso.",
    tag: "Lagos del Sur"
  },
  {
    slug: "lile",
    name: "Lile",
    scientificName: "Poikilocarbo gaimardi",
    family: "Phalacrocoracidae",
    description: "Cormorán de vistosas patas rojas y llamativo parche blanco en el cuello.",
    tag: "Costa Rocosa"
  },
  {
    slug: "pato-real",
    name: "Pato Real",
    scientificName: "Mareca sibilatrix",
    family: "Anatidae",
    description: "Pato silvador de vistoso contraste blanco, verde y negro.",
    tag: "Humedales"
  },
  {
    slug: "peuquita",
    name: "Peuquita",
    scientificName: "Astur chilensis",
    family: "Accipitridae",
    description: "Ágil cazadora del interior del bosque nativo.",
    tag: "Rapaz de Bosque"
  },
  {
    slug: "piden",
    name: "Pidén Común",
    scientificName: "Pardirallus sanguinolentus",
    family: "Rallidae",
    description: "Ave escurridiza de pico verde-azulado que se mueve entre los juncos.",
    tag: "Juncales"
  },
  {
    slug: "piquero",
    name: "Piquero Común",
    scientificName: "Sula variegata",
    family: "Sulidae",
    description: "Pescador acrobático que se arroja al mar en picadas espectaculares.",
    tag: "Marino"
  },
  {
    slug: "tagua",
    name: "Tagua Común",
    scientificName: "Fulica armillata",
    family: "Rallidae",
    description: "Inseparable de lagunas chilena con su característico escudete ambarino.",
    tag: "Lagunas"
  },
  {
    slug: "tiuque",
    name: "Tiuque",
    scientificName: "Milvago chimango",
    family: "Falconidae",
    description: "La rapaz más común y vivaz de nuestros paisajes rurales y urbanos.",
    tag: "Adaptativo"
  },
  {
    slug: "tortola",
    name: "Tórtola Común",
    scientificName: "Zenaida auriculata",
    family: "Columbidae",
    description: "Apacible y caminante, acompañante fiel de nuestros valles y pueblos.",
    tag: "Valles"
  },
  {
    slug: "nandu",
    name: "Ñandú / Suri",
    scientificName: "Rhea pennata",
    family: "Rheidae",
    description: "La gran ave corredora de las estepas sureñas de la Patagonia.",
    tag: "Estepa Patagónica"
  }
];

export const FAQS = [
  {
    question: "¿Hacen despachos a todo Chile y cómo es el envío?",
    answer: "¡Sí! Despachamos a todas las regiones de Chile a través de Starken, Chilexpress o Correos de Chile. Una vez realizado tu pedido en Mercado Pago, nos pondremos en contacto vía WhatsApp o correo para enviar tu código de seguimiento."
  },
  {
    question: "¿Cuáles son los tiempos de entrega estimados?",
    answer: "Para la Región de Los Lagos (Puerto Montt, Puerto Varas, Maullín, Chiloé), las entregas suelen demorar entre 24 y 48 horas hábiles. Para la Región Metropolitana y resto del país, entre 2 y 4 días hábiles."
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer: "Aceptamos todas las tarjetas de débito (Redcompra), crédito (hasta en cuotas) y dinero en cuenta mediante la pasarela segura de Mercado Pago. También puedes coordinar transferencia directa si lo prefieres vía WhatsApp."
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
