
const audioPlayer = document.getElementById("audio-player");
const playPauseButton = document.getElementById("play-pause-button");
const seekBar = document.getElementById("seek-bar");
function playMusic() {
    if (audioPlayer) {
        audioPlayer.play()
        console.log("Playing audio:", audio-player.src);
    } else {
        console.log("Audio element not found");
    }
// })
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.innerHTML = '<img src="pause.svg" alt="pause">';
        console.log("Playing audio:", audioPlayer.src);
    } else {
        audioPlayer.pause();
        playPauseButton.innerHTML = '<img src="play.svg" alt="Play">';
        console.log("Paused audio:", audioPlayer.src);
    }
}


function updateSeekBar() {
    if (audioPlayer && seekBar) {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        seekBar.value = progress;
    } else {
        console.log("Audio player or seek bar element not found......");
    }
}

// Add event listener to update seek bar during audio playback
audioPlayer.addEventListener("timeupdate", updateSeekBar);

function seekAudio() {
    const seekTo = (seekBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTo;
}

audioPlayer.addEventListener("timeupdate", ()=>{updateSeekBar});
seekBar.addEventListener("input", ()=>{seekAudio});
playPauseButton.addEventListener("click", togglePlayPause);