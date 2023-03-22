import Swiper from 'swiper/bundle';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', function () {
    //swiper slider

    const sliderMains = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });
    const reviewsSlider = new Swiper('.reviews-slider', {
        slidesPerView: 4,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });
});

