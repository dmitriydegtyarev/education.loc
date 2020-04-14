$('.slider_single_item').slick({
    infinite: true,
    speed: 20,
// определяем скорость перелистывания

    slidesToShow: 1,
//количество слайдов для показа
    centerMode: true,
//текущий слайд по центру
    dots: true,
    nav: true,
    variableWidth: true
//установим переменную ширину
});

$( function() {
    $( ".jquery-accordion" ).accordion({
        active: 2,
        animate: 200,
        classes: {
            "ui-accordion-header": "MY-CLASS"
        }
    });
} );

$(".main__slogan_head").click (function(){
    $( ".jquery-accordion" ).accordion ( "disable" );
});
