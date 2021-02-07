$(document).ready(function () {
   
    // setTimeout(function(){
    //     $(".hidden-img-1").css('display', 'none');
    //   }, 10000);
    
    
    $('.slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    });

    //Burger open, close
    $(".sandwich").click(function () {
        $(".sandwich").toggleClass("active");
        if (!$(".header__nav").hasClass( "animate__fadeInLeft" )) {
            $(".header__nav").addClass('animate__fadeInLeft');
            $(".header__nav").removeClass('animate__fadeOutLeft');
        }
        else {
            $(".header__nav").removeClass('animate__fadeInLeft');
            $(".header__nav").addClass('animate__fadeOutLeft');
        }
    });
    

    //show menu click
    $(".header__menu__btn").click(function () {
        $(".header__nav__nav2").slideToggle(500);

    });

    // Scroll UP
    $(".footer__btnUp").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 'slow');
    });


    //btn-top animate
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(this).height()) {
            $('.footer__btnUp').addClass('to__top--active');
        } else {
            $('.footer__btnUp').removeClass('to__top--active');
        }
    });

    //Calendar

    $(function () {
        $("#datepicker").datepicker();
    });

    
});