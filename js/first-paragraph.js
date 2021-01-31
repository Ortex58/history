let firstParagraph = $('.first-paragraph');
let secondParagraph = $('.second-paragraph');
let btnNext = $('.next-btn');
let btnEnd = $('.end-btn');
let mainHistory = $('.main-history');
$(document).ready(function () {
  firstParagraph.slideToggle(6500);
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
});

