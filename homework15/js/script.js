let $dataItem,
    $dataInformation,
    $btnScrollToTop,
    $btnHideSection;
window.onload = function(){
    //запускаем праллакс
    $("[data-paroller-factor]").paroller();
    //инициализация переменных
    $dataItem = $('[data-item]');
    $dataInformation = $('[data-item-information]');
    $btnScrollToTop = $('#scrollToTop');
    $btnHideSection = $('[data-hide-section]');
    //инициализация события на клик ссылку якорь
    $dataItem.on('click',function (event) {
        let heightScroll = $dataInformation.eq(($(event.target).data('item')).toString()).offset().top;
        if(heightScroll)
            $('html, body').animate({scrollTop: heightScroll},1200)
    });
    //появление кнопки UP
    $(document).on('scroll',function () {
        $(document).scrollTop()>$(window).height()?$btnScrollToTop.css("display", "flex").fadeIn(500):$btnScrollToTop.fadeOut(500);
    });
    //событие на кнопку up
    $btnScrollToTop.on('click',function () {
       $('html, body').animate({scrollTop: 0},1200);
    });
    $btnHideSection.on('click',function  (event) {
        let nextNeighbourButton = $(event.target).next();
        nextNeighbourButton.css('display')==='none'?$(this).html('Hide this section'):$(this).html('Show this section');
        slideToggle($(event.target).next());
    })
};
function slideToggle(elementToHide) {
    elementToHide.toggle(1000)
}






