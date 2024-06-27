document.addEventListener("DOMContentLoaded", () => {
    const debitForm = document.getElementById('debitForm');
    const creditForm = document.getElementById('creditForm');
    const debitBtn = document.getElementById('debitBtn');
    const creditBtn = document.getElementById('creditBtn');

    debitBtn.addEventListener('click', () => {
        debitForm.classList.remove('hiddenForm');
        creditForm.classList.add('hiddenForm');
    });

    creditBtn.addEventListener('click', () => {
        creditForm.classList.remove('hiddenForm');
        debitForm.classList.add('hiddenForm');
    });

    debitForm.classList.add('hiddenForm');
    creditForm.classList.add('hiddenForm');
});