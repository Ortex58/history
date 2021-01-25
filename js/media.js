let mySong = document.getElementById('mySong')
let iconSong = document.getElementById('playIcon')
let equalizer = document.querySelector('.main-history__equalizer')
console.log(equalizer)
iconSong.onclick = function () {
	if (mySong.paused) {
		mySong.play();
		iconSong.src = "media/pause.png"
		equalizer.classList.add("show");
		play = true
		$('#example').show();
		$('#example').animate_Text(play);
		// fadIn in images
		$(".hidden-img-1").fadeIn(5000);
		setTimeout(function () {
			$(".hidden-img-2").css('display', 'inline');
		}, 5000);

	} else {
		mySong.pause();
		iconSong.src = "media/play.png"
		equalizer.classList.remove("show");
	}
}
$.fn.animate_Text = function (printText) {
	var string = this.text();
	return this.each(function () {
		var $this = $(this);
		$this.html(string.replace(/./g, '<span class="new">$&</span>'));
		$this.find('span.new').each(function (i, el) {
			setTimeout(function () { $(el).addClass('div_opacity'); }, 200 * i);
			return printText
		});
	});
};