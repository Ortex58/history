let mainSong = document.querySelector('.main__song');
let startBtn = $('.outerbutton .btn');
let overlay = $('.outerbutton');
let firstParagraph = $('.first-paragraph');
let secondParagraph = $('.second-paragraph');
let btnNext = $('.next-btn');
let btnEnd = $('.end-btn');
let btnToSlide = $('.go-to-slide');
let mainHistory = $('.main-history');
let slderHistory = $('.slider-history');


$(document).ready(function () {
  startBtn.click(function() {
    mainSong.play();
    mainSong.muted = false;
    mainSong.volume = 0.1;
    $(this).addClass('animate__backOutUp');
    setTimeout(function () {
      overlay.addClass('animate__fadeOutLeft');
      firstParagraph.slideToggle(6500);
    }, 3100);
  });
  btnNext.click(function () {
    firstParagraph.slideToggle(2500);
    setTimeout(function () {
      secondParagraph.slideToggle(6500);
    }, 2600);
  });

  btnEnd.click(function () {
    secondParagraph.slideToggle(2500);
    setTimeout(function () {
      mainHistory.css('opacity', '1');
    }, 2600);
  });

  btnToSlide.click(function () {
    mainHistory.css('opacity', '0');
    setTimeout(function () {
      $('.slider-history').addClass('show');
      mainHistory.hide();
    }, 2000);
  });
});

