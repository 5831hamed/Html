console.log("Main page opened");

function hello() {
    openModal();
}

function openModal() {
    document.getElementById('modal').classList.add('open');
}

function closeModal() {
    document.getElementById('modal').classList.remove('open');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('odin-hero').addEventListener('click', openModal);
    document.getElementById('odin-zone-btn').addEventListener('click', openModal);

    document.getElementById('modal').addEventListener('click', function (e) {
        if (e.target === this) closeModal();
    });
});