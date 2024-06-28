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

document.addEventListener('DOMContentLoaded', () => {
    let quantity = 1;
    const quantityDisplay = document.getElementById('quantity');
    const increaseButton = document.getElementById('increase');
    const decreaseButton = document.getElementById('decrease');

    increaseButton.addEventListener('click', () => {
        quantity += 1;
        quantityDisplay.textContent = quantity;
    });

    decreaseButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity -= 1;
            quantityDisplay.textContent = quantity;
        }
    });

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = cart.findIndex(item => item.id === product.id && item.pavio === product.pavio && item.tamanho === product.tamanho);

        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += product.quantity;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Produto adicionado ao carrinho');
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const selectedPavio = document.querySelector('input[name="pavio"]:checked').nextElementSibling.textContent;
            const selectedTamanho = document.querySelector('input[name="volume"]:checked').nextElementSibling.textContent;

            const product = {
                id: button.getAttribute('data-id'),
                name: button.getAttribute('data-name'),
                price: parseFloat(button.getAttribute('data-price')),
                tamanho: selectedTamanho,
                pavio: selectedPavio,
                quantity: quantity
            };

            addToCart(product);
        });
    });
});