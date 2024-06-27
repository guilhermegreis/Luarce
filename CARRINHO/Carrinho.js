let cartItems = [];

function addToCart(product) {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image
        });
    }

    // atualiza o carrinho após adicionar um novo item
    renderCart();
}

// renderizar o carrinho
function renderCart() {
    const cartBody = document.getElementById('cart-body');
    cartBody.innerHTML = '';

    let totalPrice = 0;

    cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="d-flex align-items-center">
                    <img src="${item.image}" alt="${item.name}" class="img-thumbnail" style="width: 50px; height: auto;">
                    <span class="ms-2">${item.name}</span>
                </div>
            </td>
            <td>
                <div class="d-flex align-items-center">
                    <button class="btn btn-outline-secondary btn-sm me-2" onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button class="btn btn-outline-secondary btn-sm ms-2" onclick="increaseQuantity(${item.id})">+</button>
                </div>
            </td>
            <td>R$ ${item.price.toFixed(2)}</td>
        `;
        cartBody.appendChild(row);

        totalPrice += item.price * item.quantity;
    });

    // atualiza o total
    document.getElementById('totalPrice').textContent = `R$ ${totalPrice.toFixed(2)}`;
}

// aumentar a quantidade de um produto
function increaseQuantity(itemId) {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
        item.quantity++;
        renderCart();
    }
}

// diminuir a quantidade de um produto
function decreaseQuantity(itemId) {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            // Remove o item do carrinho se a quantidade for 1 ou menos
            const index = cartItems.findIndex(item => item.id === itemId);
            if (index !== -1) {
                cartItems.splice(index, 1);
            }
        }
        renderCart();
    }
}

// renderiza o carrinho ao carregar a página
window.onload = function() {
    renderCart();
};
