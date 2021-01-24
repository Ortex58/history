$(document).ready(function () {
    // fadi in images
    $(".hidden-img-1").fadeIn(5000);
    setTimeout(function(){
        $(".hidden-img-2").css('display', 'inline');
      }, 5000);
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
    $(".sandwich, .menu_item").click(function () {
        $(".sandwich").toggleClass("active");
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
    
    $.fn.animate_Text = function() {
        var string = this.text();
        return this.each(function(){
         var $this = $(this);
         $this.html(string.replace(/./g, '<span class="new">$&</span>'));
         $this.find('span.new').each(function(i, el){
          setTimeout(function(){ $(el).addClass('div_opacity'); }, 200 * i);
         });
        });
       };
       $('#example').show();
       $('#example').animate_Text();
});