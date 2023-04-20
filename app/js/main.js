document.addEventListener('DOMContentLoaded', function () {
    //swiper slider

    const mainSlider = new Swiper('.top-slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    const productSlider = new Swiper('.product-slider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            270: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            370: {
                slidesPerView: 2,
                spaceBetween: 30
            },

            760: {
                slidesPerView: 3,
                spaceBetween: 30
            },

            940: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });

    const reviewsSlider = new Swiper('.reviews-slider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            270: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            460: {
                slidesPerView: 2,
                spaceBetween: 30
            },

            780: {
                slidesPerView: 3,
                spaceBetween: 30
            },

            1280: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });

    const slider = document.querySelector('.slider-main');
    const sliderNav = document.querySelector('.slider-nav');

    let mySwiperNav = new Swiper(sliderNav, {
        slidesPerView: 5,
        spaceBetween: 10,
        loopedSlides: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical',
    })

    let mySwiper = new Swiper(slider, {
        spaceBetween: 10,
        loopedSlides: 5,
        thumbs: {
            swiper: mySwiperNav,
        }
    })

    //mob menu

    const menuBtn = document.querySelector('.burger');
    const closeBtn = document.querySelector('.close');
    const menu = document.querySelector('.menu');
    const userNav = document.querySelector('.user-nav');

    menuBtn.addEventListener('click', function () {
        document.body.style.overflow = 'hidden';
        menu.classList.add('visible');
        userNav.classList.add('hidden');
        menuBtn.classList.add('hidden');
        closeBtn.classList.add('visible');
    });

    closeBtn.addEventListener('click', function () {
        document.body.style.overflow = '';
        menu.classList.remove('visible');
        userNav.classList.remove('hidden');
        menuBtn.classList.remove('hidden');
        closeBtn.classList.remove('visible');
    });

    /* catalog menu header*/

    const catalogBtnOpen = document.querySelector('.menu__link-catalog');

    const menuCatalog = document.querySelector('.menu-catalog');

    catalogBtnOpen.addEventListener('click', function (e) {
        e.preventDefault();

        menuCatalog.classList.toggle('visible');
    });

    /* location */

    const locationPopup = document.querySelector('.modal-location');
    const locationBtn = document.querySelector('.app-location');

    locationBtn.addEventListener('click', function () {
        locationPopup.classList.toggle('active');
    });

    /* search */
    const searchBtn = document.querySelector('.search-link');
    const searchPopup = document.querySelector('.search-popup');

    searchBtn.addEventListener('click', function (e) {
        e.preventDefault();

        searchPopup.classList.toggle('active');
    });

    const searchBtnM = document.querySelector('.search-link-m');
    const searchPopupM = document.querySelector('.search-popup-m');

    searchBtnM.addEventListener('click', function (e) {
        e.preventDefault();

        searchPopupM.classList.toggle('active');
    });

    /* catalog filter */

    const sortPopup = document.querySelector('.sort');
    const sortClose = document.querySelector('.sort-close');
    const catalogSort = document.querySelector('.catalog__product-panel-sort');
    const overlayFilter = document.querySelector('.overlay-filter');

    overlayFilter.addEventListener('click', close);
    sortClose.addEventListener('click', close);

    catalogSort.addEventListener('click', function () {
        sortPopup.classList.add('active');
        overlayFilter.classList.add('active');
    });

    function close() {
        sortPopup.classList.remove('active');
        overlayFilter.classList.remove('active');
    }
});

