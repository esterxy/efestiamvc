document.addEventListener("DOMContentLoaded", function () {

    
    const slides = document.querySelectorAll(".carousel__slide");
    const viewport = document.getElementById("carouselViewport");
    const indicatorsContainer = document.getElementById("indicators");
    
    if (slides.length > 0 && viewport && indicatorsContainer) {
        let current = 0;
        const indicators = Array.from(indicatorsContainer.querySelectorAll('.carousel__indicator'));

        function updateCarousel() {
            if (slides[current]) {
                viewport.style.transform = `translateX(-${current * 100}%)`;
                slides.forEach((slide, index) => {
                    slide.classList.toggle("active", index === current);
                });
                indicators.forEach((dot, i) => {
                    dot.classList.toggle("active", i === current);
                });
            }
        }

        indicators.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                current = i;
                updateCarousel();
            });
        });

        setInterval(() => {
            current = (current + 1) % slides.length;
            updateCarousel();
        }, 5000); 

        updateCarousel();
    }

    
    const animatedElements = document.querySelectorAll('.section, .video-container');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});