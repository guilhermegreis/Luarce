const slides = document.querySelectorAll('.carousel-slide');
const indicatorsContainer = document.querySelector('.carousel-indicators');
let currentIndex = 0;
let autoSlideInterval;

// Create dots based on the number of slides
slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('indicator-dot');
    if (i === 0) dot.classList.add('active');
    indicatorsContainer.appendChild(dot);
});

// Now select the dots after they have been created
const dots = document.querySelectorAll('.indicator-dot');

function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) currentIndex = 0;
    if (index < 0) currentIndex = totalSlides - 1;
    
    const offset = -100 * currentIndex;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 3000);
}

// Arrow button event listeners
document.querySelector('.left-arrow').addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
    resetAutoSlide();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
    resetAutoSlide();
});

// Dot click event listeners
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
        resetAutoSlide();
    });
});

resetAutoSlide();

document.addEventListener("DOMContentLoaded", function() {
    // Verificar se o popup já foi mostrado nesta sessão
    if (!sessionStorage.getItem('popupShown')) {
      // Definir o tempo de atraso (em milissegundos)
      const delay = 5000; // 5 segundos
  
      // Mostrar o popup após o atraso
      setTimeout(function() {
        const overlay = document.getElementById('overlay');
        const popup = document.getElementById('popup');
  
        overlay.style.display = 'block';
        popup.style.display = 'flex';
      }, delay);
    }
  
    // Fechar o popup ao clicar fora dele ou no botão "Cadastrar"
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    const form = document.querySelector('#popup-content form');
  
    function closePopup() {
      overlay.style.display = 'none';
      popup.style.display = 'none';
      sessionStorage.setItem('popupShown', 'true'); // Marcar que o popup foi mostrado nesta sessão
    }
  
    overlay.addEventListener('click', closePopup);
  
    // Impedir que o evento de clique no popup feche o popup
    popup.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  
    // Fechar o popup ao clicar no botão "Cadastrar"
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir o envio do formulário para fins de demonstração
      closePopup();
    });
  });