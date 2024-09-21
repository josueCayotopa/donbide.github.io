const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: -carousel.offsetWidth,
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: carousel.offsetWidth,
    behavior: 'smooth'
  });
});