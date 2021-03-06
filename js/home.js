//Home slider
$(document).ready(function () {
  $(window).on("resize", function () {
    // external js: masonry.pkgd.js
    var $grid = $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer',
      horizontalOrder: true, // new!
      percentPosition: true,
    });
  });
});
