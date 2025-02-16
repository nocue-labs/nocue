function addCarousel() {
    const carouselContent = document.querySelector('.partners-content');
    carouselContent.innerHTML += carouselContent.innerHTML;
}

function showSlide(i) {
    const carouselContent = document.querySelector('.partners-content');
    const slides = document.querySelectorAll('.partners-item');
    const totalSlides = slides.length;
    index = (i + totalSlides) % totalSlides;
    const offset = -index * 100;
    carouselContent.style.transform = `translateX(${offset}px)`;
    if (index == totalSlides-3) {
        addCarousel();
    }
}

function nextSlide() {
    showSlide(index + 1);
}

var index = 0
setInterval(nextSlide, 3000)
showSlide(index)