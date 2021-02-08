//Burger open, close
$(".sandwich").click(function () {
  $(".sandwich").toggleClass("active");
  if (!$(".header-3__nav").hasClass( "animate__fadeInLeft" )) {
      $(".header-3__nav").addClass('animate__fadeInLeft');
      $(".header-3__nav").removeClass('animate__fadeOutLeft');
  }
  else {
      $(".header-3__nav").removeClass('animate__fadeInLeft');
      $(".header-3__nav").addClass('animate__fadeOutLeft');
  }
});

let firstParagraph = $('.paragraph__first');
let secondParagraph = $('.paragraph__second');
let mainHistory = $('.main-history');
let startBtn = $('.outerbutton .btn');
let btnNext = $('.next-btn');
let btnEnd = $('.end-btn');
let overlay = $('.outerbutton');
$(document).ready(function () {
  startBtn.click(function() {
    $(this).addClass('animate__backOutUp');
    setTimeout(function () {
      overlay.addClass('animate__fadeOutLeft');
      firstParagraph.slideToggle(6200);
    }, 3100);
  });
  btnNext.click(function () {
    firstParagraph.slideToggle(2500);
    setTimeout(function () {
      secondParagraph.slideToggle(6500);
    }, 2600);
  });
  // Main history
  btnEnd.click(function () {
    secondParagraph.slideToggle(2500);
    setTimeout(function () {
      mainHistory.css('opacity', '1');
      mainHistory.css('display', 'flex');
    }, 2600);
  });
});


