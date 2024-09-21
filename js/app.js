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
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('[data-hs-collapse]');
  const navbarCollapse = document.getElementById('navbar-collapse-with-animation');

  toggleButton.addEventListener('click', function () {
      navbarCollapse.classList.toggle('hidden');
      toggleButton.classList.toggle('hs-collapse-open');
  });
});