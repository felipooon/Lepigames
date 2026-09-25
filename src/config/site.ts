export interface BirdSpecies {
  slug: string;
  name: string;
  scientificName: string;
  family: string;
  tag?: string;
  description?: string;
}

export const SITE_CONFIG = {
  name: "Lëpigames",
  gameName: "Cachañando",
  slogan: "No se puede amar lo que no se conoce, ni defender lo que no se ama.",
  author: "María de los Ángeles",
  location: "Región de Los Lagos, Chile",
  email: "contacto@lepigames.cl",
  mercadoPagoUrl: "https://mpago.la/tu-link-aqui", // URL parametrizable de checkout
  whatsAppNumber: "+56 9 5065 1132", // Parametrizable
  whatsAppCleanNumber: "56950651132", // Formato numérico para URLs wa.me
  whatsAppMessage: "¡Hola Lëpigames! Quisiera consultar sobre el juego Cachañando o coordinar un despacho.",
  instagramUrl: "https://instagram.com/lepigames",
  instagramHandle: "@lepigames",
  price: "$23.000",
  badges: [
    { text: "Hecho con Amor", icon: "heart" },
    { text: "Enviamos a todo Chile", icon: "truck" },
    { text: "Compra Segura", icon: "shield" }
  ]
};

export const BIRD_SPECIES: BirdSpecies[] = [
  {
    slug: "cachana",
    description: "De plumaje verde oscuro, frente roja y alas con tonalidades azul metálicas. Cola larga y roja oscura, pico ganchudo, ancho y corto. Patas cortas con dos dedos adelante y dos hacia atrás. Llega a medir 36 cm, se alimenta de semillas, brotes, frutas y raíces. Se distribuye en el cono sur de Sudamérica, en Chile desde Santiago hasta Tierra del Fuego.",
    name: "Cachaña",
    scientificName: "Enicognathus ferrugineus",
    family: "Psittacidae (Loros)",
    tag: "Ave Protagonista"
  },
  {
    slug: "chucao",
    description: "Habitante emblemático de los bosques templados del sur de Chile. Tiene la garganta y el pecho rufo, el vientre blanco barrado de negro, los flancos grises y el dorso oscuro. Llega a medir 18 cm, se alimenta de insectos y otros invertebrados rasgando el suelo con sus patas.",
    name: "Chucao",
    scientificName: "Scelorchilus rubecula",
    family: "Rhinocryptidae",
    tag: "Bosque Valdiviano"
  },
  {
    slug: "martin-pescador",
    description: "De cabeza grande azulada con plumas algo levantadas. Dorso azul levemente moteado, garganta y lados del cuello blancos, pecho y abdomen rufo intenso. Pico oscuro y puntiagudo. Llega a medir 45 cm, se alimenta principalmente de peces, ranas e insectos en cuerpos de agua tranquilos.",
    name: "Martín Pescador",
    scientificName: "Megaceryle torquata",
    family: "Alcedinidae",
    tag: "Ríos y Lagos"
  },
  {
    slug: "bandurria",
    description: "De silueta inconfundible con cuello y cabeza ocre-amarillentos, dorso grisáceo y largo pico curvo. Llega a medir 75 cm, se alimenta de gusanos e invertebrados en praderas, estepas y humedales del centro y sur de Chile.",
    name: "Bandurria",
    scientificName: "Theristicus melanopis",
    family: "Threskiornithidae",
    tag: "Humedales"
  },
  {
    slug: "carpintero-negro",
    description: "Especie emblemática con plumaje negro brillante y franjas blancas en el dorso. El macho presenta una prominente cabeza y cresta rojas. Llega a medir 46 cm y se alimenta de larvas e insectos en los troncos de bosques nativos.",
    name: "Carpintero Negro",
    scientificName: "Campephilus magellanicus",
    family: "Picidae",
    tag: "Bosque Nativo"
  },
  {
    slug: "loica",
    description: "Con su característico y brillante pecho rojo vivo en el macho. Posee línea superciliar blanca y roja, cabeza y dorso pardo oscuro. Llega a medir 28 cm, se alimenta de insectos, frutas y semillas en praderas y bordes de bosque.",
    name: "Loica Común",
    scientificName: "Leistes loyca",
    family: "Icteridae",
    tag: "Praderas"
  },
  {
    slug: "picaflor",
    description: "El picaflor chico cuenta con una inconfundible corona rojo-anaranjada brillante en el macho. Llega a medir 11 cm, se alimenta de néctar y es un polinizador carismático y activo de los bosques templados.",
    name: "Picaflor Chico",
    scientificName: "Sephanoides sephaniodes",
    family: "Trochilidae",
    tag: "Jardines y Bosques"
  },
  {
    slug: "condor",
    description: "La gran ave de los Andes con envergadura de hasta 3,2 metros. Posee collar de plumas blancas y cuerpo negro brillante. Se distribuye a lo largo de la cordillera de los Andes desde Venezuela hasta Tierra del Fuego.",
    name: "Cóndor Andino",
    scientificName: "Vultur gryphus",
    family: "Cathartidae",
    tag: "Alta Montaña"
  },
  {
    slug: "cisne-de-cuello-negro",
    description: "Inconfundible por su cuerpo blanco, cuello negro y carúncula roja sobre el pico. Llega a medir 122 cm, se alimenta principalmente de vegetación acuática en lagunas, estuarios y ríos de aguas tranquilas.",
    name: "Cisne de Cuello Negro",
    scientificName: "Cygnus melancoryphus",
    family: "Anatidae",
    tag: "Santuario"
  },
  {
    slug: "pilpilen",
    description: "De cabeza y cuello negros, dorso pardo y vientre blanco puro. Posee un largo pico rojo encendido adaptado para alimentarse de moluscos bivalvos en las playas de arena y marismas costeras.",
    name: "Pilpilén Común",
    scientificName: "Haematopus palliatus",
    family: "Haematopodidae",
    tag: "Costa Arenosa"
  },
  {
    slug: "pinguino-de-magallanes",
    description: "Caracterizado por su doble banda negra en el pecho y zonas rosadas alrededor del ojo y pico. Llega a medir 70 cm, se alimenta de peces y crustáceos en las costas e islas del sur.",
    name: "Pingüino de Magallanes",
    scientificName: "Spheniscus magellanicus",
    family: "Spheniscidae",
    tag: "Marino"
  },
  {
    slug: "tucuquere",
    description: "Gran rapaz nocturna de tonos pardos y ocres con característicos penachos en la cabeza a modo de orejas y grandes ojos amarillos. Mide entre 48-50 cm y habita bosques y quebradas.",
    name: "Tucúquere",
    scientificName: "Bubo magellanicus",
    family: "Strigidae",
    tag: "Rapaz Nocturna"
  },
  {
    slug: "queltehue",
    description: "Ave de cabeza gris, dorso bronceado con espolones rojos en los codos de las alas y gran banda negra en el pecho. Muy territorial y bullicioso en campos y praderas de Chile.",
    name: "Queltehue Común",
    scientificName: "Vanellus chilensis",
    family: "Charadriidae",
    tag: "Campos"
  },
  {
    slug: "flamenco-chileno",
    description: "Estilizado flamenco de patas oscuras con articulaciones rosadas y plumaje rosado tenue. Mide hasta 105 cm y habita lagunas de alta montaña y estuarios alimentándose de microinvertebrados.",
    name: "Flamenco Chileno",
    scientificName: "Phoenicopterus chilensis",
    family: "Phoenicopteridae",
    tag: "Salares y Costas"
  },
  {
    slug: "chorlo-chileno",
    description: "Pequeño ave playera de pecho rufo anaranjado bordado por una franja negra y cara gris con banda blanca. Mide 22 cm y habita costas e islas desde Antofagasta al Cabo de Hornos.",
    name: "Chorlo Chileno",
    scientificName: "Zonibyx modestus",
    family: "Charadriidae",
    tag: "Playero Migratorio"
  },
  {
    slug: "pitotoy-chico",
    description: "De plumaje grisáceo moteado y llamativas patas largas amarillas. Mide 25 cm, es una especie migratoria que llega a Chile durante el verano desde el hemisferio norte.",
    name: "Pitotoy Chico",
    scientificName: "Tringa flavipes",
    family: "Scolopacidae",
    tag: "Playero"
  },
  {
    slug: "playero-vuelvepiedras",
    description: "De vistoso plumaje con manchas negras, blancas y rufas en el dorso, y patas anaranjadas. Mide 24 cm, especializado en voltear piedras y conchas en la zona intermareal para buscar alimento.",
    name: "Playero Vuelvepiedras",
    scientificName: "Arenaria interpres",
    family: "Scolopacidae",
    tag: "Intertidal"
  },
  {
    slug: "fardela-blanca",
    description: "Ave marina pelágica de pico y patas rosadas, dorso pardo y vientre claro. Envergadura de 117 cm. Nidifica en las islas Mocha y Juan Fernández y recorre las corrientes oceánicas.",
    name: "Fardela Blanca",
    scientificName: "Ardenna creatopus",
    family: "Procellariidae",
    tag: "Pelágico"
  },
  {
    slug: "gaviotin-monja",
    description: "De plumaje gris apizarrado con llamativos bigotes blancos enroscados bajo el pico rojo. Mide 41 cm y habita los acantilados rocosos y puertos costeros.",
    name: "Gaviotín Monja",
    scientificName: "Larosterna inca",
    family: "Laridae",
    tag: "Acantilados Costeros"
  },
  {
    slug: "gaviota-cahuil",
    description: "Caracterizada por su capucha pardo-negruzca durante la época reproductiva y pico y patas rojo oscuro. Mide 37 cm y es habitual en estuarios, lagos y zonas agrícolas.",
    name: "Gaviota Cáhuil",
    scientificName: "Chroicocephalus maculipennis",
    family: "Laridae",
    tag: "Estuarios"
  },
  {
    slug: "huairavo",
    description: "Garza nocturna de plumas blancas finas que caen de la cabeza negruzca. Mide 65 cm y se alimenta de peces y crustáceos en lagos, esteros y ríos.",
    name: "Huairavo Común",
    scientificName: "Nycticorax nycticorax",
    family: "Ardeidae",
    tag: "Garza Nocturna"
  },
  {
    slug: "huala",
    description: "Gran zambullidor de cuello largo y delgado tono rufo y pico en forma de daga. Mide 77 cm y es un hábil buceador de peces en lagos y estuarios del sur.",
    name: "Huala",
    scientificName: "Podiceps major",
    family: "Podicipedidae",
    tag: "Lagos del Sur"
  },
  {
    slug: "lile",
    description: "Cormorán de hermoso plumaje gris con parche blanco lateral en el cuello, pico amarillo y llamativas patas rojas. Mide 60 cm en las costas rocosas del Pacífico.",
    name: "Lile",
    scientificName: "Poikilocarbo gaimardi",
    family: "Phalacrocoracidae",
    tag: "Costa Rocosa"
  },
  {
    slug: "pato-real",
    description: "Pato de cara blanca, nuca verde metálica y flancos rufos. Mide entre 50 y 60 cm, frecuente en estanques, lagos y ríos del centro y sur del país.",
    name: "Pato Real",
    scientificName: "Mareca sibilatrix",
    family: "Anatidae",
    tag: "Humedales"
  },
  {
    slug: "peuquita",
    description: "Rapaz endémica del sur con pecho ceniza barrado de oscuro, garganta blanca y alas rufas. Mide unos 42 cm y habita el interior de los bosques nativos.",
    name: "Peuquita",
    scientificName: "Astur chilensis",
    family: "Accipitridae",
    tag: "Rapaz de Bosque"
  },
  {
    slug: "piden",
    description: "De hábitos matorraleros, cuerpo pardo-oliva, pecho azul ceniza, patas rojas y pico verde con base azul y roja. Mide 40 cm en juncales y humedales.",
    name: "Pidén Común",
    scientificName: "Pardirallus sanguinolentus",
    family: "Rallidae",
    tag: "Juncales"
  },
  {
    slug: "piquero",
    description: "Ave marina de cabeza y cuello blanco nítido con alas moteadas oscuras y pico azulado. Mide 75 cm y se lanza en espectaculares zambullidas en busca de sardinas.",
    name: "Piquero Común",
    scientificName: "Sula variegata",
    family: "Sulidae",
    tag: "Marino"
  },
  {
    slug: "tagua",
    description: "Acuática de cuerpo oscuro con escudo frontal amarillo puntiagudo marcado de rojo en la base. Mide 51 cm, excelente nadadora en lagunas y tranques.",
    name: "Tagua Común",
    scientificName: "Fulica armillata",
    family: "Rallidae",
    tag: "Lagunas"
  },
  {
    slug: "tiuque",
    description: "Rapaz sumamente adaptable de plumaje pardo canela y pecho claro. Mide 43 cm y habita desde campos hasta ciudades de todo Chile.",
    name: "Tiuque",
    scientificName: "Milvago chimango",
    family: "Falconidae",
    tag: "Adaptativo"
  },
  {
    slug: "tortola",
    description: "Paloma de tonos rosáceos y nuca gris azulada con manchas negras en las alas. Mide 27 cm, muy abundante en campos, valles y zonas urbanas.",
    name: "Tórtola Común",
    scientificName: "Zenaida auriculata",
    family: "Columbidae",
    tag: "Valles"
  },
  {
    slug: "nandu",
    description: "La gran ave corredora de la estepa patagónica. Alcanza 1 metro de altura y velocidades de hasta 60 km/h. De plumas gris-pardas y cuerpo voluminoso.",
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