const params = new URLSearchParams(window.location.search);
const productId = params.get("produto");
const product = getProductById(productId);
const detail = document.getElementById("productDetail");
const backToCategory = document.getElementById("backToCategory");

function renderGallery(product) {
  if (product.images && product.images.length > 0) {
    return `
      <div class="gallery-main">
        <img id="mainProductImage" src="${product.images[0]}" alt="${product.name}" />
      </div>

      <div class="gallery-thumbs">
        ${product.images.map((image, index) => `
          <button class="thumb-button ${index === 0 ? "active" : ""}" data-image="${image}">
            <img src="${image}" alt="${product.name} ${index + 1}" />
          </button>
        `).join("")}
      </div>
    `;
  }

  return `
    <div class="gallery-main placeholder-gallery">
      <div class="product-placeholder large">${product.icon || "✨"}</div>
    </div>
  `;
}

function initProductPage() {
  if (!product) {
    detail.innerHTML = `
      <div class="empty">
        Produto não encontrado.
        <br><br>
        <a class="small-button" href="index.html">Voltar ao catálogo</a>
      </div>
    `;
    return;
  }

  const category = getCategoryById(product.category);
  document.title = `${product.name} | 3D Bakery`;
  backToCategory.href = `categoria.html?categoria=${product.category}`;
  backToCategory.textContent = `← Voltar a ${category ? category.name : "categoria"}`;

  detail.innerHTML = `
    <div class="product-gallery">
      ${renderGallery(product)}
    </div>

    <article class="product-detail-copy">
      <p class="eyebrow">${category ? category.name : "Produto"}</p>
      <h1 class="page-title">${product.name}</h1>

      <p class="product-long-description">${product.longDescription || product.description}</p>

      <div class="detail-list">
        <div>
          <span>Preço</span>
          <strong>${product.price}</strong>
        </div>
        <div>
          <span>Tamanho</span>
          <strong>${product.size}</strong>
        </div>
        <div>
          <span>Opções</span>
          <strong>${product.options}</strong>
        </div>
      </div>

      <a class="primary-button" href="index.html#contacto">Pedir este produto</a>
    </article>
  `;

  const mainImage = document.getElementById("mainProductImage");
  const thumbs = document.querySelectorAll(".thumb-button");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      thumbs.forEach((item) => item.classList.remove("active"));
      thumb.classList.add("active");
      mainImage.src = thumb.dataset.image;
    });
  });
}

initProductPage();
setupYear();
