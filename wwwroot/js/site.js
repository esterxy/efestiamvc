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
// ========================================
// FUNDO HOLOGRÁFICO - EFESTIA
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Criar o container do fundo holográfico
    const holographicBg = document.createElement('div');
    holographicBg.className = 'holographic-bg';
    
    // Criar container das ondas
    const waveContainer = document.createElement('div');
    waveContainer.className = 'wave-container';
    
    // Criar as 3 ondas
    for (let i = 1; i <= 3; i++) {
        const wave = document.createElement('div');
        wave.className = `wave wave-${i}`;
        waveContainer.appendChild(wave);
    }
    
    // Criar linhas
    const lines = document.createElement('div');
    lines.className = 'lines';
    
    // Criar container de partículas
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.id = 'particles';
    
    // Montar a estrutura
    holographicBg.appendChild(waveContainer);
    holographicBg.appendChild(lines);
    holographicBg.appendChild(particlesContainer);
    
    // Adicionar ao body como primeiro elemento
    document.body.insertBefore(holographicBg, document.body.firstChild);
    
    // Criar partículas animadas
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
    
    console.log('✨ Fundo holográfico EfestIA carregado!');
});


// ========================================
// CAROUSEL DE SERVIÇOS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const viewport = document.getElementById('carouselViewport');
    const slides = document.querySelectorAll('.carousel__slide');
    const indicators = document.querySelectorAll('.carousel__indicator');
    let currentSlide = 0;

    function updateCarousel() {
        // Atualizar posição do viewport
        viewport.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Atualizar classes dos slides
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        
        // Atualizar indicadores
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    // Adicionar eventos aos indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    // Auto-play do carousel (opcional)
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    }, 5000); // Muda a cada 5 segundos

    // Inicializar
    updateCarousel();
});


// ========================================
// ANIMAÇÃO FADE-IN AO SCROLL
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observar sections e video-container
    document.querySelectorAll('.section, .video-container').forEach(element => {
        observer.observe(element);
    });
});