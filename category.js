const params = new URLSearchParams(window.location.search);
let activeCategory = params.get("categoria") || categories[0].id;

const categoryTitle = document.getElementById("categoryTitle");
const categoryDescription = document.getElementById("categoryDescription");
const categorySelector = document.getElementById("categorySelector");
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");

function setPageMeta(category) {
  document.title = `${category.name} | 3D Bakery`;
  categoryTitle.textContent = category.name;
  categoryDescription.textContent = category.description;
}

function renderCategorySelector() {
  categorySelector.innerHTML = categories.map((category) => `
    <a
      class="category-button ${category.id === activeCategory ? "active" : ""}"
      href="categoria.html?categoria=${category.id}"
    >
      ${category.name}
    </a>
  `).join("");
}

function renderProducts() {
  const search = normalizeText(searchInput.value);
  const filtered = productsByCategory(activeCategory).filter((product) => {
    const searchableText = [
      product.name,
      product.description,
      product.longDescription,
      product.size,
      product.options,
      product.price
    ].join(" ");

    return normalizeText(searchableText).includes(search);
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = `<div class="empty">Nenhum produto encontrado nesta categoria.</div>`;
    return;
  }

  productGrid.innerHTML = filtered.map((product) => `
    <article class="product-card">
      <a class="product-image" href="produto.html?produto=${product.id}">
        ${renderVisual(product, "product")}
      </a>

      <div class="product-info">
        <div class="product-top">
          <h3>${product.name}</h3>
          <span class="badge">${product.code}</span>
        </div>

        <p class="product-description">${product.description}</p>

        <div class="product-meta">
          <span>Tamanho: ${product.size}</span>
          <span>${product.options}</span>
        </div>

        <div class="product-bottom">
          <strong class="price">${product.price}</strong>
          <a class="small-button" href="produto.html?produto=${product.id}">Ver mais</a>
        </div>
      </div>
    </article>
  `).join("");
}

function init() {
  const category = getCategoryById(activeCategory) || categories[0];
  activeCategory = category.id;

  setPageMeta(category);
  renderCategorySelector();
  renderProducts();

  searchInput.addEventListener("input", renderProducts);
}

init();
setupYear();
