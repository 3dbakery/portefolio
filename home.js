const carousel = document.getElementById("categoryCarousel");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

let autoCarouselTimer = null;

function renderCategories() {
  carousel.innerHTML = categories.map((category) => `
    <article class="category-card">
      <div class="category-visual">
        ${renderVisual(category, "category")}
      </div>

      <div class="category-info">
        <h3>${category.name}</h3>
        <p>${category.description}</p>
        <a class="small-button" href="categoria.html?categoria=${category.id}">Ver mais</a>
      </div>
    </article>
  `).join("");
}

function getScrollStep() {
  const firstCard = carousel.querySelector(".category-card");
  if (!firstCard) return 360;

  const styles = window.getComputedStyle(carousel);
  const gap = parseFloat(styles.columnGap || styles.gap || 18);

  return firstCard.getBoundingClientRect().width + gap;
}

function goToNextCategory() {
  const step = getScrollStep();
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;

  if (carousel.scrollLeft >= maxScroll - 10) {
    carousel.scrollTo({ left: 0, behavior: "smooth" });
    return;
  }

  carousel.scrollBy({ left: step, behavior: "smooth" });
}

function goToPreviousCategory() {
  const step = getScrollStep();

  if (carousel.scrollLeft <= 10) {
    carousel.scrollTo({ left: carousel.scrollWidth, behavior: "smooth" });
    return;
  }

  carousel.scrollBy({ left: -step, behavior: "smooth" });
}

function startAutoCarousel() {
  stopAutoCarousel();
  autoCarouselTimer = setInterval(goToNextCategory, 3200);
}

function stopAutoCarousel() {
  if (autoCarouselTimer) {
    clearInterval(autoCarouselTimer);
    autoCarouselTimer = null;
  }
}

renderCategories();

nextButton.addEventListener("click", () => {
  goToNextCategory();
  startAutoCarousel();
});

prevButton.addEventListener("click", () => {
  goToPreviousCategory();
  startAutoCarousel();
});

carousel.addEventListener("mouseenter", stopAutoCarousel);
carousel.addEventListener("mouseleave", startAutoCarousel);
carousel.addEventListener("touchstart", stopAutoCarousel, { passive: true });
carousel.addEventListener("touchend", startAutoCarousel, { passive: true });

startAutoCarousel();
setupYear();
