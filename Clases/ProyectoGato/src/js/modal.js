const openModalBtn = document.getElementById('btnReset');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');

function openModal() {
    modal.setAttribute('data-visible', 'true');
    modal.setAttribute('aria-hidden', 'false');
    closeModalBtn.focus();
}

function closeModal() {
    modal.setAttribute('data-visible', 'false');
    modal.setAttribute('aria-hidden', 'true');
    openModalBtn.focus();
}


openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);