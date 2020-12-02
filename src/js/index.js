// import '../scss/fonts.scss'
import '../scss/reset.scss'
import '../scss/main.scss'

import '../scss/main-media.scss'

import '../js/tabs'

// import '../js/slicknav/jquery.slicknav'
// import '../js/slicknav/slicknav.css'
// $(function(){
//     $('.topbar').slicknav({
//         label: ''
//     });
// });



import '../js/forms'
import '../js/swiper-scripts'


// при клике на модалку - меняем ее тайтл на название кнопки
$('.btn.btn-orange.popupActivation').on('click', function(){
    let title = $(this).html();
    $('.form.form-popup-js .form__title .title').html( title );
});