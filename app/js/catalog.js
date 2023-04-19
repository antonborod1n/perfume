/* catalog filter */

const catalogFilter = document.querySelector('.catalog__product-panel-filter');
const catalogSort = document.querySelector('.catalog__product-panel-sort');
const filterPopup = document.querySelector('.filter');
const sortPopup = document.querySelector('.sort');
const overlayFilter = document.querySelector('.overlay-filter');
const filterClose = document.querySelector('.filter-close');
const sortClose = document.querySelector('.sort-close');

overlayFilter.addEventListener('click', close);
filterClose.addEventListener('click', close);
sortClose.addEventListener('click', close);

catalogFilter.addEventListener('click', function () {
    filterPopup.classList.add('active');
    overlayFilter.classList.add('active');

});

catalogSort.addEventListener('click', function () {
    sortPopup.classList.add('active');
    overlayFilter.classList.add('active');
    document.body.style.overflow = 'hidden';
});

function close() {
    filterPopup.classList.remove('active');
    sortPopup.classList.remove('active');
    overlayFilter.classList.remove('active');
    document.body.style.overflow = ' ';
}