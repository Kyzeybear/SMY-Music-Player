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
const forwardButton = document.querySelector('.forwardButton')
const backwardButton = document.querySelector('.backButton')
const homeplayButton = document.querySelector('.playButtonTop')

let currentPlaylist = BeabadoobeePylonAlbum;
let currentIndex = 0;
let savedTime = 0;


function playSong (index = currentIndex, time = 0){
    currentIndex = ((index % currentPlaylist.length) + currentPlaylist.length) % currentPlaylist.length
    currentTrack.src = currentPlaylist[currentIndex].src
    currentTrack.currentTime = time

    currentTrack.play()
        .catch ((error) => {
        console.error('problem')
        console.log(currentIndex)

    })
}

function toogleTrack (){
    
    if (!currentTrack.src) return
    else if (!currentTrack.paused) {
        currentTrack.pause()
        savedTime = currentTrack.currentTime
    }
    else {
        currentTrack.currentTime = savedTime
        currentTrack.play()
        .catch (error=> {
            console.log("Playback Error")
        })
    }
}

function setPlaylist (playlist){
currentPlaylist = playlist
}


function renderTrack (){
 songTitle.textContent = currentPlaylist[currentIndex].title + " - " + currentPlaylist[currentIndex].artist
 imgSrc.style.backgroundImage = `url(${currentPlaylist[currentIndex].srcImg})`
 
 currentTrack.addEventListener('loadedmetadata', ()=>{
progress.max = currentTrack.duration
 }, {once: true})
 
currentTrack.addEventListener('timeupdate', ()=> {
    progress.value = currentTrack.currentTime
})

progress.onchange = ()=>{
currentTrack.currentTime = progress.value
}
}

window.musicFunctions  = {renderTrack, setPlaylist, toogleTrack, playSong}
window.songs = {BeabadoobeePylonAlbum, oliviaDeanAlbum, get currentIndex() { return currentIndex; }, get currentPlaylist() { return currentPlaylist; }}


playPauseButton.addEventListener('click', ()=>{
    toogleTrack ()
    renderTrack()
})

homeplayButton.addEventListener('click', ()=>{
    setPlaylist(BeabadoobeePylonAlbum)
    playSong(0)
    renderTrack()
})

currentTrack.addEventListener ('play', ()=>{
    playPauseButton.textContent = '❚❚'
})

currentTrack.addEventListener ('pause', ()=>{
    playPauseButton.textContent = '▶︎';
})
forwardButton.addEventListener('click', ()=>{
    playSong(currentIndex += 1)
    renderTrack()
    window.deanFunctions.setRowchange()
})

backwardButton.addEventListener('click', ()=>{
    playSong(currentIndex -= 1)
    renderTrack()
    window.deanFunctions.setRowchange()
})

currentTrack.addEventListener('ended', ()=> {
    playSong(currentIndex += 1)
    renderTrack()
    window.deanFunctions.setRowchange()
})
