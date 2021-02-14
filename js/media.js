let mySong = document.getElementById('mySong');
let iconSong = document.getElementById('playIcon');
let equalizer = document.querySelector('.equalizer');
let btnMainStory = document.querySelector('.text__button--next');
let btnToScrollPage1 = $('.go-to-scroll-page');

var play = true

iconSong.onclick = function () {
	if (mySong.paused) {
		mySong.play();
		mySong.volume = 0.3;
		iconSong.src = "media/pause-button.png"
		equalizer.classList.add("show");
		$(".player__text").last().html('Зупинити Аудіо текст');
		
		if (play) {
			$('#example').show();
			$('#example').animate_Text(play);
		}
		// fadeInUp img-1 in images
		setTimeout(function () {
			$('.hidden-img-1').show().addClass('animate__fadeInUp');		
		}, 1000);
		setTimeout(function () {
			$('.hidden-img-2').show().addClass('animate__fadeInUp');		
		}, 4000);
		setTimeout(function () {
			$('.hidden-img-3').show().addClass('animate__fadeInUp');		
		}, 8000);
		setTimeout(function () {
			$('.hidden-img-4').show().addClass('animate__fadeInUp');		
		}, 12000);
		setTimeout(function () {
			$('.hidden-img-5').show().addClass('animate__fadeInDown');		
		}, 16000);

	} else {
		mySong.pause();
		iconSong.src = "media/play-button.png"
		equalizer.classList.remove("show");
		$(".player__text").last().html('Аудіо текст');
	}
}
mySong.onended = function() {
	iconSong.src = "media/play-button.png"
	equalizer.classList.remove("show");
	btnMainStory.addClass('show');
};
btnToScrollPage1.click(function () {
	mySong.pause();
	equalizer.classList.remove("show");
});
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

