document.addEventListener('DOMContentLoaded', function () {
    //swiper slider

    const mainSlider = new Swiper('.top-slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next-1',
            prevEl: '.swiper-button-prev-1',
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

    //tabs
    const tabsBtn = document.querySelectorAll('.goods__tabs-control-btn');
    const tabsContent = document.querySelectorAll('.goods__tabs-content-block');
    const tabsControl = document.querySelector('.goods__tabs-control');
    const active = 'goods__tabs-control-btn--active';

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabsBtn.forEach(item => {
            item.classList.remove(active);
        });
    }

    function showTabsContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabsBtn[i].classList.add(active);
    }

    hideTabContent();
    showTabsContent();

    tabsControl.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('goods__tabs-control-btn')) {
            tabsBtn.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabsContent(i);
                }
            });
        }
    });
});

