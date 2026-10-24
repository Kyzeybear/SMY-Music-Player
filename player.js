const oliviaDeanAlbum = [
    { title: "The Art Of Loving (Intro)", artist: "Olivia Dean", src: "images/TheArtofLovingIntro.mp3", srcImg: "images/theArtofLoving_Dean.jpg" },
    { title: "Nice To Each Other", artist: "Olivia Dean", src: "images/niceToEachOtherDean.mp3", srcImg: "images/theArtofLoving_Dean.jpg" },
    { title: "Lady Lady", artist: "Olivia Dean", src: "images/ladyLadyDean.mp3", srcImg: "images/theArtofLoving_Dean.jpg" },
    { title: "Close Up", artist: "Olivia Dean", src: "images/closeUpDean.mp3", srcImg: "images/theArtofLoving_Dean.jpg" },
    { title: "So Easy (To Fall In Love)", artist: "Olivia Dean", src: "images/soEasyDean.mp3", srcImg: "images/theArtofLoving_Dean.jpg" },
    { title: "Let Alone The One You Love", artist: "Olivia Dean", src: "images/letAloneDean.mp3", srcImg: "images/theArtofLoving_Dean.jpg" },
    { title: "Man I Need", artist: "Olivia Dean", src: "images/manINeedDean.mp3", srcImg: "images/theArtofLoving_Dean.jpg" },
    { title: "Something Inbetween", artist: "Olivia Dean", src: "images/somethingInBetweenDean.mp3", srcImg: "images/theArtofLoving_Dean.jpg" },
    { title: "Loud", artist: "Olivia Dean", src: "images/loudDean.mp3", srcImg: "images/theArtofLoving_Dean.jpg" },
    { title: "Baby Steps", artist: "Olivia Dean", src: "images/babyStepsDean.mp3", srcImg: "images/theArtofLoving_Dean.jpg" },
    { title: "A Couple Minutes", artist: "Olivia Dean", src: "images/aCoupleMinutesDean.mp3", srcImg: "images/theArtofLoving_Dean.jpg" },
    { title: "I've Seen It", artist: "Olivia Dean", src: "images/iveSeenItDean.mp3", srcImg: "images/theArtofLoving_Dean.jpg" },
];

const BeabadoobeePylonAlbum = [
    { title: "Pylon", artist: "Beabadoobee", src: "images/PylonAudio.mp3", srcImg: "images/pylonAlbumCover.jpg" },
    { title: "Sun Has Set", artist: "Beabadoobee", src: "images/sunHasSetBea.mp3", srcImg: "images/pylonAlbumCover.jpg" },
    { title: "Estranged", artist: "Beabadoobee", src: "images/estrangedBea.mp3", srcImg: "images/pylonAlbumCover.jpg" },
    { title: "SwitchBlade", artist: "Beabadoobee", src: "images/switchBladeBea.mp3", srcImg: "images/pylonAlbumCover.jpg" },
    { title: "Write Me A Letter", artist: "Beabadoobee", src: "images/WriteMeAlLetterBea.mp3", srcImg: "images/pylonAlbumCover.jpg" },
    { title: "It's Alright", artist: "Beabadoobee", src: "images/itsAlrightBea.mp3", srcImg: "images/pylonAlbumCover.jpg" },
    { title: "In Motion", artist: "Beabadoobee", src: "images/inMotionBea.mp3", srcImg: "images/pylonAlbumCover.jpg" },
    { title: "Memories", artist: "Beabadoobee", src: "images/MemoriesBea.mp3", srcImg: "images/pylonAlbumCover.jpg" },
    { title: "Nothing to Prove", artist: "Beabadoobee", src: "images/nothingToProveBea.mp3", srcImg: "images/pylonAlbumCover.jpg" },
    { title: "Radio", artist: "Beabadoobee", src: "images/radioBea.mp3", srcImg: "images/pylonAlbumCover.jpg" },
    { title: "Powerlines", artist: "Beabadoobee", src: "images/powerLinesBea.mp3", srcImg: "images/pylonAlbumCover.jpg" },
    { title: "Spark", artist: "Beabadoobee", src: "images/sparkBea.mp3", srcImg: "images/pylonAlbumCover.jpg" },
    { title: "Despite That", artist: "Beabadoobee", src: "images/despiteThatBea.mp3", srcImg: "images/pylonAlbumCover.jpg" },
    { title: "Satellite", artist: "Beabadoobee", src: "images/satelliteBea.mp3", srcImg: "images/pylonAlbumCover.jpg" },
];

const currentTrack = new Audio();
const progress = document.querySelector('.progressBar');
const songTitle = document.getElementById('songNameMedia');
const playPauseButton = document.querySelector('.playButton2');
const imgSrc = document.querySelector('.srcImg');

let currentPlaylist = BeabadoobeePylonAlbum;
let currentIndex = 0;
let savedTime = 0;

function renderTrack() {
    const song = currentPlaylist[currentIndex];
    if (!song) return;

    if (songTitle) songTitle.textContent = `${song.artist} - ${song.title}`;
    if (imgSrc) imgSrc.style.backgroundImage = `url("${song.srcImg}")`;
    if (progress) {
        progress.value = 0;
        progress.max = Number.isFinite(currentTrack.duration) ? currentTrack.duration : 0;
    }
    if (playPauseButton) playPauseButton.textContent = '❚❚';
    document.dispatchEvent(new CustomEvent('playertrackchange', {
        detail: { song, index: currentIndex, playlist: currentPlaylist },
    }));
}

function playTrack(index = currentIndex) {
    if (!currentPlaylist.length) return;
    currentIndex = ((index % currentPlaylist.length) + currentPlaylist.length) % currentPlaylist.length;
    currentTrack.src = currentPlaylist[currentIndex].src;
    savedTime = 0;
    renderTrack();
    currentTrack.play().catch((error) => console.error('Audio playback failed:', error));
}

function setPlaylist(playlist, { autoplay = false, index = 0 } = {}) {
    if (!Array.isArray(playlist) || playlist.length === 0) return;
    currentPlaylist = playlist;
    currentIndex = 0;
    savedTime = 0;
    if (autoplay) playTrack(index);
}

function nextTrack() {
    playTrack(currentIndex + 1);
}

function previousTrack() {
    playTrack(currentIndex - 1);
}

function togglePlayback() {
    if (!currentPlaylist[currentIndex]) return;
    if (currentTrack.paused) {
        if (!currentTrack.src) currentTrack.src = currentPlaylist[currentIndex].src;
        currentTrack.currentTime = savedTime;
        currentTrack.play().catch((error) => console.error('Audio playback failed:', error));
    } else {
        savedTime = currentTrack.currentTime;
        currentTrack.pause();
    }
}

window.musicPlaylists = { oliviaDeanAlbum, beabadoobeePylonAlbum: BeabadoobeePylonAlbum };
window.musicPlayer = { setPlaylist, playTrack, nextTrack, previousTrack, togglePlayback };

document.querySelector('.playButtonTop')?.addEventListener('click', () => {
    setPlaylist(BeabadoobeePylonAlbum);
    playTrack(0);
});
playPauseButton?.addEventListener('click', togglePlayback);
document.querySelector('.forwardButton')?.addEventListener('click', nextTrack);
document.querySelector('.backButton')?.addEventListener('click', previousTrack);

if (progress) {
    progress.addEventListener('input', () => {
        if (Number.isFinite(currentTrack.duration)) currentTrack.currentTime = Number(progress.value);
    });
}

currentTrack.addEventListener('loadedmetadata', () => {
    if (progress) progress.max = Number.isFinite(currentTrack.duration) ? currentTrack.duration : 0;
});
currentTrack.addEventListener('timeupdate', () => {
    if (progress && !progress.matches(':active')) progress.value = currentTrack.currentTime;
});
currentTrack.addEventListener('play', () => {
    if (playPauseButton) playPauseButton.textContent = '❚❚';
});
currentTrack.addEventListener('pause', () => {
    if (playPauseButton) playPauseButton.textContent = '▶︎';
});
currentTrack.addEventListener('ended', nextTrack);