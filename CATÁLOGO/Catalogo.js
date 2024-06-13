function ordenarPor(propriedade, ordem) {
    const produtosContainer = document.querySelector('.produtos');
    const produtos = Array.from(document.querySelectorAll('.product-item'));

    produtos.sort((a, b) => {
        const precoA = parseFloat(a.querySelector('.preco').innerText.replace('R$ ', '').replace(',', '.'));
        const precoB = parseFloat(b.querySelector('.preco').innerText.replace('R$ ', '').replace(',', '.'));

        if (ordem === 'asc') {
            return precoA - precoB;
        } else {
            return precoB - precoA;
        }
    });

    produtos.forEach(produto => produtosContainer.appendChild(produto));
}