const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;
let slideWidth = slides[0].offsetWidth;

function goToSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }
    currentSlide = index;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
});

prevBtn.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
});

let autoSlideInterval = setInterval(() => {
    goToSlide(currentSlide + 1);
}, 5000);

slider.addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

slider.addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);
});

function updateSlideWidth() {
    slideWidth = slides[0].offsetWidth;
    goToSlide(currentSlide);
}

window.addEventListener('resize', updateSlideWidth);
updateSlideWidth();