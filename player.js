let BeabadoobeePylonAlbum = [

{
title:"Pylon",
artist: "Beabadoobee",
src: "images/PylonAudio.mp3",
srcImg: "images/pylonAlbumCover.jpg",
},

{
title:"Sun Has Set",
artist: "Beabadoobee",
src: "images/sunHasSetBea.mp3",
srcImg: "images/pylonAlbumCover.jpg",
},

{
title:"Estranged",
artist: "Beabadoobee",
src: "images/estrangedBea.mp3",
srcImg: "images/pylonAlbumCover.jpg",
},

{
title:"SwitchBlade",
artist: "Beabadoobee",
src: "switchBladeBea.mp3",
srcImg: "images/pylonAlbumCover.jpg",
},

{
title:"Write Me A Letter",
artist: "Beabadoobee",
src: "images/WriteMeAlLetterBea.mp3",
srcImg: "images/pylonAlbumCover.jpg",
},

{
title:"It's Alright",
artist: "Beabadoobee",
src: "images/itsAlrightBea.mp3",
srcImg: "images/pylonAlbumCover.jpg",
},
{
title:"In Motion",
artist: "Beabadoobee",
src: "images/inMotionBea.mp3",
srcImg: "images/pylonAlbumCover.jpg",
},

{
title:"Memories",
artist: "Beabadoobee",
src: "images/MemoriesBea.mp3",
srcImg: "images/pylonAlbumCover.jpg",
},

{
title:"Nothing to Prove",
artist: "Beabadoobee",
src: "images/nothingToProveBea.mp3",
srcImg: "images/pylonAlbumCover.jpg",
},
{
title:"Radio",
artist: "Beabadoobee",
src: "images/radioBea.mp3",
srcImg: "images/pylonAlbumCover.jpg",
},

{
title:"Powerlines",
artist: "Beabadoobee",
src: "images/powerLinesBea.mp3",
srcImg: "images/pylonAlbumCover.jpg",
},

{
title:"Spark",
artist: "Beabadoobee",
src: "images/sparkBea.mp3",
srcImg: "images/pylonAlbumCover.jpg",
},
{
title:"Despite That",
artist: "Beabadoobee",
src: "images/despiteThatBea.mp3",
srcImg: "images/pylonAlbumCover.jpg",
},

{
title:"Satellite",
artist: "Beabadoobee",
src: "images/satelliteBea.mp3",
srcImg: "images/pylonAlbumCover.jpg",
},

]
let i = 0 
document.addEventListener('click',(e)=>{
    let topPlaybutton = e.target.closest('#playButtonTop') 
    if (!topPlaybutton) return;
    oliviaDeanPlaylist = BeabadoobeePylonAlbum
    i=0
    playSong()
    songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
    imgSrc.style.backgroundImage = `url(${oliviaDeanPlaylist[i].srcImg})`
    playPauseButton2.innerHTML = "❚❚";
})

let currentTrack = new Audio();
function playSong() {
    if (i>=oliviaDeanPlaylist.length) {
        i=0
    }
    oliviaDeanPlaylist = BeabadoobeePylonAlbum
    currentTrack.src = oliviaDeanPlaylist[i].src;
    currentTrack.play()

}

let progress = document.querySelector('.progressBar');
let songTitle = document.getElementById('songNameMedia');
let forwardButton = document.querySelector('.forwardButton');
let backwardsButton = document.querySelector('.backButton');
let playPauseButton2 = document.querySelector('.playButton2');
let imgSrc = document.querySelector('.srcImg');


progress.onchange = ()=>{
   currentTrack.currentTime=progress.value;
   songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
}

forwardButton.addEventListener('click', ()=>{
      i = i+1;
      oliviaDeanPlaylist = BeabadoobeePylonAlbum
        currentTrack.src = oliviaDeanPlaylist[i].src;
        songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
        if (i<oliviaDeanPlaylist.length){
    currentTrack.play();   
        }
        else {
            i=11;
        }
})

backwardsButton.addEventListener('click', ()=>{
      i = i-1;
      oliviaDeanPlaylist = BeabadoobeePylonAlbum
        currentTrack.src = oliviaDeanPlaylist[i].src;
        songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
        if (i<oliviaDeanPlaylist.length){
    currentTrack.play(); 
        }
        else if (i>=oliviaDeanPlaylist.length){
            i=11;
        }
})
let curentTime = 0;
playPauseButton2.addEventListener('click', ()=>{
if (!currentTrack.paused){
    currentTrack.pause();
     curentTime=currentTrack.currentTime
     playPauseButton2.innerHTML = "▶︎"
     return curentTime
}
else {
    currentTrack.src = oliviaDeanPlaylist[i].src;
    currentTrack.currentTime = curentTime
    playPauseButton2.innerHTML = "❚❚"
    currentTrack.play()

}
})


setInterval (()=>{
progress.value=currentTrack.currentTime
progress.max =currentTrack.duration
},500)


currentTrack.addEventListener('ended', ()=>{
        i = i+1;
        currentTrack.src = oliviaDeanPlaylist[i].src;
        if (i<oliviaDeanPlaylist.length){
    currentTrack.play();
        }
        else {
            i=0
        }
});