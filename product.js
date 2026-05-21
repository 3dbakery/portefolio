const params = new URLSearchParams(window.location.search);
const productId = params.get("produto");
const product = getProductById(productId);
const detail = document.getElementById("productDetail");
const backToCategory = document.getElementById("backToCategory");

function renderGallery(product) {
  const media = product.media || (product.images || []).map((image) => ({
    type: "image",
    src: image
  }));

  if (media.length > 0) {
    return `
      <div class="gallery-main gallery-with-arrows" id="galleryMain">
        <button class="gallery-arrow gallery-arrow-left" id="prevMedia" aria-label="Anterior">‹</button>

        <div id="mainMedia" class="main-media"></div>

        <button class="gallery-arrow gallery-arrow-right" id="nextMedia" aria-label="Seguinte">›</button>
      </div>

      <div class="gallery-thumbs">
        ${media.map((item, index) => `
          <button class="thumb-button ${index === 0 ? "active" : ""}" data-index="${index}">
            ${
              item.type === "video"
                ? `<span class="video-thumb">▶</span>`
                : `<img src="${item.src}" alt="${product.name} ${index + 1}" />`
            }
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
        ${product.options ? `
          <div>
            <span>Detalhes</span>
            <strong>${product.options}</strong>
          </div>
        ` : ""}
      </div>

      <a class="primary-button" href="index.html#contacto">Pedir este produto</a>
    </article>
  `;

  const media = product.media || (product.images || []).map((image) => ({
  type: "image",
  src: image
}));

const mainMedia = document.getElementById("mainMedia");
const thumbs = document.querySelectorAll(".thumb-button");
const prevMedia = document.getElementById("prevMedia");
const nextMedia = document.getElementById("nextMedia");

let currentMediaIndex = 0;

function updateGallery(index) {
  if (!media.length || !mainMedia) return;

  currentMediaIndex = index;

  if (currentMediaIndex < 0) {
    currentMediaIndex = media.length - 1;
  }

  if (currentMediaIndex >= media.length) {
    currentMediaIndex = 0;
  }

  const item = media[currentMediaIndex];

  if (item.type === "video") {
    mainMedia.innerHTML = `
      <video controls muted playsinline autoplay loop>
        <source src="${item.src}" type="video/mp4">
        O teu browser não suporta vídeo.
      </video>
    `;
  } else {
    mainMedia.innerHTML = `
      <img src="${item.src}" alt="${product.name}" />
    `;
  }

  thumbs.forEach((thumb) => {
    thumb.classList.remove("active");

    if (Number(thumb.dataset.index) === currentMediaIndex) {
      thumb.classList.add("active");
    }
  });
}

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    updateGallery(Number(thumb.dataset.index));
  });
});

if (prevMedia && nextMedia) {
  prevMedia.addEventListener("click", () => {
    updateGallery(currentMediaIndex - 1);
  });

  nextMedia.addEventListener("click", () => {
    updateGallery(currentMediaIndex + 1);
  });
}

updateGallery(0);
}

initProductPage();
setupYear();