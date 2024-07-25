document.addEventListener("DOMContentLoaded", () => {
    const carouselCaptions = document.getElementById('carouselExampleCaptions');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    const updateCarousel = (index) => {
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    };

    document.querySelector('.carousel-control-prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel(currentIndex);
    });

    document.querySelector('.carousel-control-next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel(currentIndex);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(currentIndex);
        });
    });

    const scheduleItems = document.querySelectorAll('.schedule-item');
    scheduleItems.forEach(item => {
        item.addEventListener('click', function () {
            scheduleItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.getElementById('carousel-mobile-prev').addEventListener('click', function () {
        var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleControls'));
        carousel.prev();
    });

    document.getElementById('carousel-mobile-next').addEventListener('click', function () {
        var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleControls'));
        carousel.next();
    });
});
