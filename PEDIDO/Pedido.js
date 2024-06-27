document.addEventListener("DOMContentLoaded", () => {
    const debitForm = document.getElementById('debitForm');
    const creditForm = document.getElementById('creditForm');
    const debitBtn = document.getElementById('debitBtn');
    const creditBtn = document.getElementById('creditBtn');

    // Função para mostrar o formulário de débito ao clicar no botão Débito
    debitBtn.addEventListener('click', () => {
        debitForm.classList.remove('hiddenForm');
        creditForm.classList.add('hiddenForm');
    });

    // Função para mostrar o formulário de crédito ao clicar no botão Crédito
    creditBtn.addEventListener('click', () => {
        creditForm.classList.remove('hiddenForm');
        debitForm.classList.add('hiddenForm');
    });

    // Adicione a classe hiddenForm aos formulários de débito e crédito para ocultá-los inicialmente
    debitForm.classList.add('hiddenForm');
    creditForm.classList.add('hiddenForm');
});