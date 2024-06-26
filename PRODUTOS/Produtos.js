const slides = document.querySelectorAll('.Passador-slide');
const indicatorsContainer = document.querySelector('.Passador-indicadores');
let currentIndex = 0;

// Create dots based on the number of slides
slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('indicator-dot');
    if (i === 0) dot.classList.add('active');
    indicatorsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.indicator-dot');

function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) currentIndex = 0;
    if (index < 0) currentIndex = totalSlides - 1;
    
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-100 * currentIndex}%)`;
    });
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

// Arrow button event listeners
document.querySelector('.left-arrow').addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
});

// Dot click event listeners
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
        currentIndex = i;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const pricePerUnit = 40.00;
    const maxQuantity = 20;
    const priceElement = document.getElementById('price');
    const quantityElement = document.getElementById('quantity');
    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');

    let quantity = 1;

    const updatePrice = () => {
        priceElement.textContent = (pricePerUnit * quantity).toFixed(2).replace('.', ',');
    };

    decreaseButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updatePrice();
        }
    });

    increaseButton.addEventListener('click', () => {
        if (quantity < maxQuantity) {
            quantity++;
            quantityElement.textContent = quantity;
            updatePrice();
        }
    });

    updatePrice();
});