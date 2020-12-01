
$('.page-bankruptcy-keys-tabs-buttons-item').each(function(i){
    $(this).attr('data-id', ++i);
});
$('.page-bankruptcy-keys-tabs-buttons-item:first-of-type').addClass('page-bankruptcy-keys-tabs-buttons-item_active');


$('.page-bankruptcy-keys-tabs-content-item').each(function(i){
    $(this).attr('data-id', ++i);
    $(this).css('display', 'none');
    $(this).removeClass('page-bankruptcy-keys-tabs-content-item_displaynone');
    // $(this).attr('style', );
});
$('.page-bankruptcy-keys-tabs-content-item:first-of-type').fadeIn();




$('.page-bankruptcy-keys-tabs-buttons-item').on('click', function(e){
    e.preventDefault();
    
    let id = $(this).attr('data-id');

    $('.page-bankruptcy-keys-tabs-buttons-item').each(function(){
        $(this).removeClass('page-bankruptcy-keys-tabs-buttons-item_active');
    });
    $(this).addClass('page-bankruptcy-keys-tabs-buttons-item_active');

    $('.page-bankruptcy-keys-tabs-content-item').each(function(){
        $(this).fadeOut(0);
    });
    $('.page-bankruptcy-keys-tabs-content-item[data-id="' + id + '"]').fadeIn(300);

});