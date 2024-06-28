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

    // Atualiza a ordem dos produtos no DOM
    produtos.forEach(produto => produtosContainer.appendChild(produto));

    // Atualiza a classe de cor dos botões
    const maiorPrecoBtn = document.getElementById('maior-preco-btn');
    const menorPrecoBtn = document.getElementById('menor-preco-btn');

    if (ordem === 'desc') {
        maiorPrecoBtn.classList.add('cor');
        menorPrecoBtn.classList.remove('cor');
    } else {
        menorPrecoBtn.classList.add('cor');
        maiorPrecoBtn.classList.remove('cor');
    }
}