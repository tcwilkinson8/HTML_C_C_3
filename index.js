const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-item');
const leftBtn = document.querySelector('.carousel-btn.left');
const rightBtn = document.querySelector('.carousel-btn.right');
const dotContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;
let autoSlide;

// Create dots
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotContainer.appendChild(dot);
});

const updateCarousel = () => {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  document.querySelectorAll('.carousel-dots span').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
};

const goToSlide = (index) => {
  currentIndex = index;
  updateCarousel();
  resetAutoSlide();
};

leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
  updateCarousel();
  resetAutoSlide();
});

rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
  resetAutoSlide();
});

// Auto-play every 5 seconds
const startAutoSlide = () => {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }, 5000);
};

const resetAutoSlide = () => {
  clearInterval(autoSlide);
  startAutoSlide();
};

startAutoSlide();
