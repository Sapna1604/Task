const carouselItems = document.querySelector('.carousel-items');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
const totalItems = document.querySelectorAll('.item').length;

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

function updateCarousel() {
  const itemWidth = carouselItems.clientWidth;
  const newPosition = -currentIndex * itemWidth;
  carouselItems.style.transform = `translateX(${newPosition}px)`;
}
