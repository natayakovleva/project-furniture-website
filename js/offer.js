const slideContainer = document.querySelector('.carousel-container');
const nextBtn = document.querySelector('.carousel__button-next');
const prevBtn = document.querySelector('.carousel__button-prev');
const slideItems = Array.from(slideContainer.children);

let currentSlideIdx = 0;

function renderSlide() {
  slideContainer.innerHTML = '';
  slideContainer.appendChild(slideItems[currentSlideIdx]);

  if (window.matchMedia("(min-width:768px)").matches) {
    const secondSlideIdx = (currentSlideIdx + 1) % slideItems.length;
    slideContainer.appendChild(slideItems[secondSlideIdx]);

    if (window.matchMedia("(min-width:1024px)").matches) {
      const thirdSlideIdx = (currentSlideIdx + 2) % slideItems.length;
      slideContainer.appendChild(slideItems[thirdSlideIdx]);
    }
  }
}

function nextSlide() {
  currentSlideIdx = (currentSlideIdx + 1) % slideItems.length;
  renderSlide();
}
  
function prevSlide() {
  currentSlideIdx = (currentSlideIdx - 1 + slideItems.length) % slideItems.length;
  renderSlide();
}

renderSlide();

nextBtn.addEventListener('click', nextSlide); 
prevBtn.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);
