const categories = [
  {
    id: "porta-chaves",
    name: "Porta-chaves",
    description: "Modelos articulados, coloridos e ideais para quem gosta de um toque de charme extra nas suas chaves.",
    image: "",
    icon: "🔑"
  },
  {
    id: "missangas",
    name: "Missangas",
    description: "Personaliza ao teu gosto com letras, números ou pingentes, faz a tua combinação favorita.",
    image: "",
    icon: "🧿"
  },
  {
    id: "conjuntos",
    name: "Conjuntos",
    description: "O melhor dos dois mundos: porta-chaves e missangas personalizadas, para que não te falte nada nas tuas chaves.",
    image: "",
    icon: "🎁"
  },
  {
    id: "figuras",
    name: "Figuras",
    description: "Para quem gosta de figuras maiores, quer seja para ter na secretária, oferecer ou expor num lugar de destaque.",
    image: "",
    icon: "🏠"
  },
];

const products = [
  {
    id: "porta-chaves-personalizado",
    code: "P-001",
    name: "Porta-chaves personalizado",
    category: "porta-chaves",
    description: "Porta-chaves com nome, cor e formato à escolha.",
    longDescription: "Ideal para prendas, lembranças ou uso pessoal. Pode ser adaptado com diferentes cores, nomes e pequenos detalhes decorativos.",
    size: "4 a 6 cm",
    options: "Várias cores",
    price: "2,20€",
    images: [],
    icon: "🔑"
  },
  {
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
    id: "letra-personalizada",
    name: "Letra personalizada",
    category: "porta-chaves",
    description: "Porta-chaves com inicial em 3D e acabamento simples.",
    longDescription: "Letra impressa em 3D com possibilidade de escolher cor e argola. Simples, leve e personalizável.",
    size: "≈5 cm",
    options: "Várias cores",
    price: "2,50€",
    images: [],
    icon: "A"
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
  }
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
