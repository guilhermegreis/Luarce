const debitForm = document.getElementById('debitForm');
const creditForm = document.getElementById('creditForm');
const debitBtn = document.getElementById('debitBtn');
const creditBtn = document.getElementById('creditBtn');

debitBtn.addEventListener('click', function() {
    debitForm.style.display = 'block';
    creditForm.style.display = 'none';
});

creditBtn.addEventListener('click', function() {
    creditForm.style.display = 'block';
    debitForm.style.display = 'none';
});