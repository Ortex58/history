let mySong = document.getElementById('mySong')
let iconSong = document.getElementById('playIcon')
iconSong.onclick = function() {
	if (mySong.paused) {
		mySong.play();
		iconSong.src = "media/pause.png"
	}else {
		mySong.pause();
		iconSong.src = "media/play.png"
	}
}