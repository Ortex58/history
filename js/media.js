let mySong = document.getElementById('mySong');
let iconSong = document.getElementById('playIcon');
let equalizer = document.querySelector('.equalizer');
let btnMainStory = document.querySelector('.text__button--next');
let toSlide = $('.go-to-slide');

var play = true

iconSong.onclick = function () {
	if (mySong.paused) {
		mySong.play();
		mySong.volume = 0.3;
		iconSong.src = "media/pause-button.png"
		equalizer.classList.add("show");
		
		if (play) {
			$('#example').show();
			$('#example').animate_Text(play);
		}
		// fadIn in images
		// $(".hidden-img-1").fadeIn(5000);
		// setTimeout(function () {
		// 	$(".hidden-img-2").css('display', 'inline');
		// }, 5000);
		// setTimeout(function () {
		// 	$(".hidden-img-3").addClass('show-people');
		// }, 10000);
		// setTimeout(function () {
		// 	$(".hidden-img-4").addClass('show-people');
		// }, 15000);

	} else {
		mySong.pause();
		iconSong.src = "media/play-button.png"
		equalizer.classList.remove("show");
	}
}
mySong.onended = function() {
	iconSong.src = "media/play-button.png"
	equalizer.classList.remove("show");
	toSlide.addClass('show');
	btnMainStory.addClass('show');
};
$.fn.animate_Text = function () {
	var string = this.text();
	return this.each(function () {
		var $this = $(this);
		$this.html(string.replace(/./g, '<span class="new">$&</span>'));
		$this.find('span.new').each(function (i, el) {
			setTimeout(function () { $(el).addClass('div_opacity'); }, 100 * i);
			play = false
		});
	});
};

