document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let slideInterval; // Variável para armazenar o intervalo

    function goToSlide(index) {
        if (index < 0) {
          index = totalSlides - 1;
          currentIndex = index;
          const offset = index * -100;
          document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
        } else if (index >= totalSlides) {
          index = 0;
          currentIndex = index;
          const offset = index * -100; // Novo offset baseado no índice do slide
          document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
        } else {
          currentIndex = index;
          const offset = index * -100;
          document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
        }
      
        
        
        const indicatorDots = document.querySelectorAll('.indicator-dot');
        indicatorDots.forEach(dot => dot.classList.remove('active'));
        indicatorDots[index].classList.add('active');
    }

    document.querySelector('.left-arrow').addEventListener('click', function() {
        clearInterval(slideInterval); // Limpa o intervalo atual
        goToSlide(currentIndex - 1); // Avança para o slide anterior
        startSlideInterval(); // Inicia um novo intervalo
    });

    document.querySelector('.right-arrow').addEventListener('click', function() {
        clearInterval(slideInterval); // Limpa o intervalo atual
        goToSlide(currentIndex + 1); // Avança para o próximo slide
        startSlideInterval(); // Inicia um novo intervalo
    });

    // Função para iniciar o intervalo de slides
    function startSlideInterval() {
        slideInterval = setInterval(function() {
            goToSlide(currentIndex + 1);
        }, 5000);
    }

    goToSlide(0);
    startSlideInterval();

});