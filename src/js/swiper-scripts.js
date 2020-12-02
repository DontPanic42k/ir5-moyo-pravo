import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

let swiper = new Swiper('.sw-1', {
    slidesPerView: 3,
    navigation: {
        prevEl: '.mleft',
        nextEl: '.mright',
    },
    // loop: true,
    autoplay: {
        delay: 2000,
    },
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        //type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.querySelector('.page-bankruptcy-our-team-list .swiper-button-next').addEventListener('click', () => {
    swiper.slideNext();
});

document.querySelector('.page-bankruptcy-our-team-list .swiper-button-prev').addEventListener('click', () => {
    swiper.slidePrev();
});