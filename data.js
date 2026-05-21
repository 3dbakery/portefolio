const categories = [
  {
    id: "porta-chaves",
    name: "Porta-chaves",
    description: "Modelos articulados, coloridos e ideais para quem gosta de um toque de charme extra nas suas chaves.",
    image: "assets/porta-chaves-cover.png",
  },
  /*{
    id: "missangas",
    name: "Missangas",
    description: "Personaliza ao teu gosto com letras, números ou pingentes, faz a tua combinação favorita.",
    imageClass: "missangas-cover",
    image: "assets/missangas-cover.png",
  },
  {
    id: "conjuntos",
    name: "Conjuntos",
    description: "O melhor dos dois mundos: porta-chaves e missangas personalizadas, para que não te falte nada nas tuas chaves.",
    imageClass: "conjuntos-cover",
    image: "assets/conjuntos-cover.png",
  },
  {
    id: "figuras",
    name: "Figuras",
    description: "Para quem gosta de figuras maiores, quer seja para ter na secretária, oferecer ou expor num lugar de destaque.",
    image: "",
    icon: "🏠"
  },*/
];

function media3(start) {
  return [
    {
      type: "image",
      src: `assets/produtos/${start}.png`
    },
    {
      type: "image",
      src: `assets/produtos/${start + 1}.png`
    },
    {
      type: "image",
      src: `assets/produtos/${start + 2}.png`
    }
  ];
}

function portaChaves(code, id, name, startImage, extra = {}) {
  const articulado = extra.articulado ?? true;
  const nomeLower = name.toLowerCase();

  return {
    id,
    code,
    name,
    category: "porta-chaves",
    description:
      extra.description ||
      `Porta-chaves ${articulado ? "articulado " : ""}em forma de ${nomeLower}, colorido, divertido e resistente.`,
    longDescription:
      extra.longDescription ||
      `Um porta-chaves ${articulado ? "articulado " : ""}em forma de ${nomeLower}, perfeito para dar um toque divertido e original às tuas chaves. Tem um design leve, colorido e resistente${articulado ? ", com movimento para tornar a peça ainda mais especial." : "."}`,
    size: extra.size || "4 a 6 cm",
    price: extra.price || "2,20€ cada",
    options: extra.options !== undefined ? extra.options : articulado ? "Articulado" : "",
    media: media3(startImage),
    icon: "🔑"
  };
}

const products = [
  {
    id: "abacate",
    code: "P-001",
    name: "Abacate",
    category: "porta-chaves",
    description: "Porta-chaves em forma de abacate, colorido, divertido e com íman integrado.",
    longDescription: "Um porta-chaves em forma de abacate, perfeito para dar um toque divertido e original às tuas chaves. Tem um design leve, colorido, resistente e inclui íman, para as duas metades se juntarem.",
    size: "4 a 6 cm",
    price: "2,20€ cada",
    options: "Contém íman",
    media: [
      {
        type: "image",
        src: "assets/produtos/1.png"
      },
      {
        type: "image",
        src: "assets/produtos/2.png"
      },
      {
        type: "image",
        src: "assets/produtos/3.png"
      },
      {
        type: "video",
        src: "assets/produtos/1.mp4"
      }
    ],
  },
  portaChaves("P-002", "abelha", "Abelha", 5),
  portaChaves("P-003", "angel", "Angel", 8),
  portaChaves("P-004", "aranha", "Aranha", 11),

  {
  id: "axolotl",
  code: "P-005",
  name: "Axolotl",
  category: "porta-chaves",
  description: "Porta-chaves articulado em forma de axolotl, colorido, divertido e resistente, disponível em duas variantes.",
  longDescription: "Um porta-chaves articulado em forma de axolotl, perfeito para dar um toque divertido e original às tuas chaves. Tem um design leve, colorido e resistente, com movimento para tornar a peça ainda mais especial. Disponível na versão Axolotl e Axolotl do Amor.",
  size: "4 a 6 cm",
  price: "2,20€ cada",
  options: "Disponível em Rosa e Vermelho",
  media: [
    {
      type: "image",
      src: "assets/produtos/14.png"
    },
    {
      type: "image",
      src: "assets/produtos/15.png"
    },
    {
      type: "image",
      src: "assets/produtos/16.png"
    },
    {
      type: "image",
      src: "assets/produtos/17.png"
    },
    {
      type: "image",
      src: "assets/produtos/18.png"
    },
    {
      type: "image",
      src: "assets/produtos/19.png"
    }
  ],
  icon: "🔑"
},

  portaChaves("P-007", "bateria", "Bateria", 20, { articulado: false }),
  //portaChaves("P-008", "beagle", "Beagle", 23),
  portaChaves("P-009", "beringela", "Beringela", 26),
  portaChaves("P-010", "boneco-de-gengibre", "Boneco de Gengibre", 29),
  portaChaves("P-011", "boneco-de-neve", "Boneco de Neve", 32),
  portaChaves("P-012", "brontossauro", "Brontossauro", 35),
  portaChaves("P-013", "cachorro-quente", "Cachorro Quente", 38),
  portaChaves("P-014", "cao-salsicha", "Cão Salsicha", 41),
  portaChaves("P-015", "capivara", "Capivara", 44),
  portaChaves("P-016", "castor", "Castor", 47),
  portaChaves("P-017", "cavalo", "Cavalo", 50),
  portaChaves("P-018", "cenoura", "Cenoura", 53),
  portaChaves("P-019", "coelho", "Coelho", 56),
  portaChaves("P-020", "crocodilo", "Crocodilo", 59),
  portaChaves("P-021", "desdentado", "Desdentado", 62),
  portaChaves("P-022", "ervilhas", "Ervilhas", 65),
  portaChaves("P-023", "estrela-do-mar", "Estrela do Mar", 68),

  portaChaves("P-024", "flauta-transversal", "Flauta Transversal", 71, {
    articulado: false,
    description: "Porta-chaves em forma de flauta transversal, colorido, elegante e resistente.",
    longDescription: "Um porta-chaves em forma de flauta transversal, ideal para músicos ou para quem gosta de acessórios ligados à música. Tem um design leve, colorido e resistente."
  }),

  // Foram saltadas 9 imagens: 73 a 81

  portaChaves("P-025", "gato-branco", "Gato Branco", 83),
  portaChaves("P-026", "gato-laranja", "Gato Laranja", 86),
  portaChaves("P-027", "gato-malhado", "Gato Malhado", 89),
  portaChaves("P-028", "gato-preto", "Gato Preto", 92),
  portaChaves("P-029", "gato-preto-e-branco", "Gato Preto e Branco", 95),
  portaChaves("P-030", "gato-siames", "Gato Siamês", 98),
  portaChaves("P-031", "grinch", "Grinch", 101),
  portaChaves("P-032", "hamster", "Hamster", 104),
  portaChaves("P-033", "hipopotamo", "Hipopótamo", 107),
  portaChaves("P-034", "joaninha", "Joaninha", 110),
  portaChaves("P-035", "lontra", "Lontra", 113),
  portaChaves("P-036", "luna", "Luna", 116),
  portaChaves("P-037", "milho", "Milho", 119),
  portaChaves("P-038", "narval", "Narval", 122),
  portaChaves("P-039", "one-piece", "One Piece", 125),
  portaChaves("P-040", "pai-natal", "Pai Natal", 128),
  portaChaves("P-041", "papagaio", "Papagaio", 131),
  portaChaves("P-042", "peixe-dourado", "Peixe Dourado", 134),
  portaChaves("P-043", "peixe-palhaco", "Peixe Palhaço", 137),

  portaChaves("P-044", "piano", "Piano", 140, {
    articulado: false,
    description: "Porta-chaves em forma de piano, colorido, elegante e resistente.",
    longDescription: "Um porta-chaves em forma de piano, ideal para músicos, estudantes de música ou amantes de instrumentos. Tem um design leve, colorido e resistente."
  }),

  portaChaves("P-045", "pickle", "Pickle", 143),
  portaChaves("P-046", "pimenta", "Pimenta", 146),
  portaChaves("P-047", "pinguim", "Pinguim", 149),
  portaChaves("P-048", "pintainho", "Pintainho", 152),
  portaChaves("P-049", "porco", "Porco", 155),
  portaChaves("P-050", "pug", "Pug", 158),
  portaChaves("P-051", "raia", "Raia", 161),

  portaChaves("P-052", "ravioli", "Ravioli", 164, {
    articulado: false,
    description: "Porta-chaves em forma de ravioli, colorido, divertido e resistente.",
    longDescription: "Um porta-chaves em forma de ravioli, perfeito para dar um toque divertido e original às tuas chaves. Tem um design leve, colorido e resistente."
  }),

  portaChaves("P-053", "rena", "Rena", 167),

  portaChaves("P-054", "saxofone", "Saxofone", 170, {
    articulado: false,
    description: "Porta-chaves em forma de saxofone, colorido, elegante e resistente.",
    longDescription: "Um porta-chaves em forma de saxofone, ideal para músicos ou para quem gosta de acessórios ligados à música. Tem um design leve, colorido e resistente."
  }),

  portaChaves("P-055", "stitch", "Stitch", 173),
  portaChaves("P-056", "tartaruga-donut", "Tartaruga Donut", 176),
  portaChaves("P-057", "tartaruga-oreo", "Tartaruga Oreo", 179),

  portaChaves("P-058", "trombone", "Trombone", 182, {
    articulado: false,
    description: "Porta-chaves em forma de trombone, colorido, elegante e resistente.",
    longDescription: "Um porta-chaves em forma de trombone, ideal para músicos ou para quem gosta de acessórios ligados à música. Tem um design leve, colorido e resistente."
  }),

  portaChaves("P-059", "trompa", "Trompa", 185, {
    articulado: false,
    description: "Porta-chaves em forma de trompa, colorido, elegante e resistente.",
    longDescription: "Um porta-chaves em forma de trompa, ideal para músicos ou para quem gosta de acessórios ligados à música. Tem um design leve, colorido e resistente."
  }),

  portaChaves("P-060", "trompete", "Trompete", 188, {
    articulado: false,
    description: "Porta-chaves em forma de trompete, colorido, elegante e resistente.",
    longDescription: "Um porta-chaves em forma de trompete, ideal para músicos ou para quem gosta de acessórios ligados à música. Tem um design leve, colorido e resistente."
  }),

  portaChaves("P-061", "tuba", "Tuba", 191, {
    articulado: false,
    description: "Porta-chaves em forma de tuba, colorido, elegante e resistente.",
    longDescription: "Um porta-chaves em forma de tuba, ideal para músicos ou para quem gosta de acessórios ligados à música. Tem um design leve, colorido e resistente."
  }),

  portaChaves("P-062", "tubarao-martelo", "Tubarão Martelo", 194),
  portaChaves("P-063", "vaca-da-montanha", "Vaca da Montanha", 197),

  portaChaves("P-064", "violino", "Violino", 200, {
    articulado: false,
    description: "Porta-chaves em forma de violino, colorido, elegante e resistente.",
    longDescription: "Um porta-chaves em forma de violino, ideal para músicos, estudantes de música ou amantes de instrumentos. Tem um design leve, colorido e resistente."
  }),
  /*{
    id: "porta-chaves-missangas",
    name: "Porta-chaves com missangas",
    category: "missangas",
    description: "Inclui até 7 missangas. Missangas extra podem ser adicionadas.",
    longDescription: "Porta-chaves personalizável com combinação de missangas, letras e símbolos. A partir de 7 missangas, cada missanga adicional acrescenta ao preço final.",
    size: "Variável",
    options: "+0,20€/missanga extra",
    price: "2,20€",
    images: [],
    icon: "🧿"
  },
  {
    id: "conjunto-porta-chaves",
    name: "Conjunto porta-chaves",
    category: "conjuntos",
    description: "Combinação de dois porta-chaves personalizados.",
    longDescription: "Conjunto pensado para pares, amigos, família ou pequenas ofertas. Pode combinar porta-chaves simples, letras e missangas.",
    size: "2 peças",
    options: "Personalizável",
    price: "4,00€",
    images: [],
    icon: "🎁"
  },
  {
    id: "nome-3d",
    name: "Nome em 3D",
    category: "figuras",
    description: "Peça decorativa com nome, ideal para quartos, secretárias ou presentes.",
    longDescription: "Nome ou palavra decorativa impressa em 3D. O tamanho e preço dependem do número de letras e do acabamento pretendido.",
    size: "Sob medida",
    options: "Por orçamento",
    price: "Desde 5,00€",
    images: [],
    icon: "✨"
  },
  {
    id: "brinde-eventos",
    name: "Brinde para eventos",
    category: "personalizados",
    description: "Peças personalizadas para festas, batizados, lembranças e eventos.",
    longDescription: "Brindes feitos por medida para eventos. Pode incluir nomes, datas, cores específicas e embalamento simples.",
    size: "Variável",
    options: "Quantidade",
    price: "Sob orçamento",
    images: [],
    icon: "🍰"
  },
  {
    id: "acessorio-mala",
    name: "Acessório de mala",
    category: "acessorios",
    description: "Charm decorativo para mala, mochila ou estojo.",
    longDescription: "Acessório leve e personalizável, ideal para decorar malas, mochilas, estojos ou chaves.",
    size: "8 a 12 cm",
    options: "Com ou sem missangas",
    price: "Desde 3,50€",
    images: [],
    icon: "👜"
  },
  {
    id: "peca-decorativa-mini",
    name: "Peça decorativa mini",
    category: "figuras",
    description: "Pequena peça decorativa impressa em 3D para oferta ou decoração.",
    longDescription: "Peças pequenas para decoração, lembranças ou personalização de espaços. Preço variável conforme tamanho e complexidade.",
    size: "6 a 10 cm",
    options: "Várias cores",
    price: "Desde 4,00€",
    images: [],
    icon: "🏠"
  },
  {
    id: "pulseira-letras",
    name: "Pulseira com letras",
    category: "missangas",
    description: "Pulseira personalizada com letras, símbolos e cores à escolha.",
    longDescription: "Pulseira com missangas e letras, personalizável com nomes, palavras curtas ou combinações de cores.",
    size: "Ajustável",
    options: "Nome/frase",
    price: "Desde 3,00€",
    images: [],
    icon: "🌸"
  }*/
];

function getCategoryById(categoryId) {
  return categories.find((category) => category.id === categoryId);
}

function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

function productsByCategory(categoryId) {
  return products.filter((product) => product.category === categoryId);
}

function normalizeText(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function renderVisual(item, className = "visual") {
  if (item.media && item.media.length > 0) {
    const firstImage = item.media.find((mediaItem) => mediaItem.type === "image");

    if (firstImage) {
      return `<img class="${className}-image" src="${firstImage.src}" alt="${item.name}" />`;
    }
  }

  if (item.images && item.images.length > 0) {
    return `<img class="${className}-image" src="${item.images[0]}" alt="${item.name}" />`;
  }

  if (item.image) {
    return `<img class="${className}-image" src="${item.image}" alt="${item.name}" />`;
  }

  return `<div class="${className}-placeholder">${item.icon || "✨"}</div>`;
}

function setupYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}
