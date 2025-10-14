(function() {
    const viewport = document.getElementById('carouselViewport');
    const slides = Array.from(viewport.querySelectorAll('.carousel__slide'));
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.carousel__indicator');
    
    let index = 0;
    const total = slides.length;
  
    function goToSlide(i) {
      index = (i + total) % total;
      const offset = slides[index].offsetLeft - (viewport.clientWidth - slides[index].clientWidth) / 2;
      viewport.scrollTo({ left: offset, behavior: 'smooth' });
      indicators.forEach((dot, j) => {
        dot.setAttribute('aria-selected', j === index ? 'true' : 'false');
      });
    }
  
    nextBtn.addEventListener('click', () => goToSlide(index + 1));
    prevBtn.addEventListener('click', () => goToSlide(index - 1));
    indicators.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));
  
    
    setInterval(() => goToSlide(index + 1), 4000);
  })();