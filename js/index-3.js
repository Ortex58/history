//Burger open, close
$(".sandwich").click(function () {
  $(".sandwich").toggleClass("active");
  if (!$(".header-3__nav").hasClass("animate__fadeInLeft")) {
    $(".header-3__nav").addClass('animate__fadeInLeft');
    $(".header-3__nav").removeClass('animate__fadeOutLeft');
    $('.header-3').addClass('open');
  }
  else {
    $(".header-3__nav").removeClass('animate__fadeInLeft');
    $(".header-3__nav").addClass('animate__fadeOutLeft');
    $('.header-3').removeClass('open');
  }
});

let equalizer = document.querySelector('.equalizer');
let mainSong = document.querySelector('.main__song');
let firstParagraph = $('.paragraph__first');
// let secondParagraph = $('.paragraph__second');
let mainHistory = $('.main-history'); // VOICE
let scrollPage = $('.paragraph__third');
let startBtn = $('.outerbutton .btn');
let btnNext = $('.next-btn');
let btnEnd = $('.end-btn');
let btnToScrollPage = $('.go-to-scroll-page');
let btnSources = $('.sources--btn');
let sources = $('.sources');
let overlay = $('.outerbutton');
$(document).ready(function () {
  startBtn.click(function () {
    mainSong.play();
    mainSong.muted = false;
    mainSong.volume = 0.1;
    equalizer.classList.add("show");
    $(this).addClass('animate__backOutUp');
    setTimeout(function () {
      overlay.addClass('animate__fadeOutLeft');
      firstParagraph.slideToggle(6200);
    }, 3100);
  });
  btnNext.click(function () {
    firstParagraph.slideToggle(2500);
    setTimeout(function () {
      mainHistory.css('opacity', '1');
      mainHistory.css('display', 'flex');
    }, 2600);
  });
  // Main history
  // btnEnd.click(function () {
  //   secondParagraph.slideToggle(2500);
  //   setTimeout(function () {
  //     mainHistory.css('opacity', '1');
  //     mainHistory.css('display', 'flex');
  //   }, 2600);
  // });
  // Open Scroll page
  btnToScrollPage.click(function () {

    mainHistory.css('opacity', '1');
    mainHistory.slideToggle(2500);
    setTimeout(function () {
      scrollPage.slideToggle(20000);
    }, 2500);
  });

  // Open Sources
  btnSources.click(function () {
    setTimeout(function () {
      sources.slideToggle(2500);
      btnSources.hide();
    }, 500);
  });
});


// Volume main song
let volume = $('.volume');
let volume_aloud = $('.volume__aloud');
let volume_mute = $('.volume__mute');
let img = $('.c-preview');
volume_mute.hide();
volume.on('click', function () {
  if (volume_aloud.hasClass("active")) {
    volume_aloud.hide();
    volume_mute.show();
    volume_aloud.toggleClass('active')
    volume_mute.toggleClass('active')
    mainSong.muted = true;
    equalizer.classList.remove("show");
  } else {
    volume_mute.hide();
    volume_aloud.show();
    volume_aloud.toggleClass('active')
    volume_mute.toggleClass('active')
    mainSong.muted = false;
    equalizer.classList.add("show");
  }
});
img.on('click', function () {
  volume_aloud.hide();
    volume_mute.show();
    volume_aloud.toggleClass('active')
    volume_mute.toggleClass('active')
    mainSong.muted = true;
    equalizer.classList.remove("show");
});
// header on scroll
const elem = $('body >header');
const scrolled = () => {
  const threshold = $(document).scrollTop() > 50;
  if (elem.hasClass('fixed')) {
    elem.toggleClass('scrolled', threshold);
  };
}
$(window).on({ scroll: scrolled });
