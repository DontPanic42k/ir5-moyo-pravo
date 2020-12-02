// $(window).on('resize', function(){
//     if( $(window).width() > 768 ){
        let marginLeft = ( $(window).width() - $('.page-bankruptcy-our-team .container').width() ) / 2;
        let containerWidth = $('.page-bankruptcy-our-team .container').width();
        
        $('.page-bankruptcy-our-team .swiper-container').css({
            'width' : containerWidth + marginLeft + 'px',
        });
        
        $('.page-bankruptcy-our-team-list').css({
            // 'margin-left' : marginLeft + 'px',
            'overflow' : 'hidden',
            'width' : containerWidth + marginLeft + 'px',
        });
//     }

// });



import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

let swiper_el = '.sw-1';

let swiper = new Swiper(swiper_el, {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
        prevEl: '.mleft',
        nextEl: '.mright',
    },
    loop: true,
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
    breakpoints: {
        2000 : { 
           slidesPerView: 'auto',
        },
        769: {
            slidesPerView: 'auto',
        },
        1: {
           slidesPerView: 1,
            // spaceBetween: 20
        },
    },
    on: {
        init: function(){
            // полное количество
            let totalSlides = $( swiper_el ).find('.swiper-slide:not(.swiper-slide-duplicate)').length;
            $( '.sw-1-nav' ).find('.slider-nav-count span[data-slide_count="total"]').html( totalSlides );

            let slide_active_num = $( swiper_el ).find('.swiper-slide.swiper-slide-active').attr('data-swiper-slide-index') * 1  +  1;
            $( '.sw-1-nav' ).find('.slider-nav-count span[data-slide_count="current"]').html( slide_active_num );
        },
        slideChangeTransitionEnd: function(){
            let slide_active_num = $( swiper_el ).find('.swiper-slide.swiper-slide-active').attr('data-swiper-slide-index') * 1  +  1;
            $( '.sw-1-nav' ).find('.slider-nav-count span[data-slide_count="current"]').html( slide_active_num );
            // console.log(slide_active_num);
        }
    },
});

document.querySelector('.page-bankruptcy-our-team-list .swiper-button-next').addEventListener('click', () => {
    swiper.slideNext();
});

document.querySelector('.page-bankruptcy-our-team-list .swiper-button-prev').addEventListener('click', () => {
    swiper.slidePrev();
});