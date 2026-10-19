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
let a = 0 
document.addEventListener('click',(e)=>{
    let topPlaybutton = e.target.closest('#playButtonTop') 
    if (!topPlaybutton) return;
    oliviaDeanPlaylist = BeabadoobeePylonAlbum
    a=0
    playSong()
    songTitle.innerHTML = oliviaDeanPlaylist[a].artist+"-"+oliviaDeanPlaylist[a].title;
    imgSrc.style.backgroundImage = `url(${oliviaDeanPlaylist[a].srcImg})`
    playPauseButton2.innerHTML = "❚❚";
})

let currentTrack = new Audio();
function playSong() {
    if (a>=oliviaDeanPlaylist.length) {
        a=0
    }
    oliviaDeanPlaylist = BeabadoobeePylonAlbum
    currentTrack.src = oliviaDeanPlaylist[a].src;
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
}
oliviaDeanPlaylist = BeabadoobeePylonAlbum
forwardButton.addEventListener('click', ()=>{
      a = a+1;
        currentTrack.src = oliviaDeanPlaylist[a].src;
        songTitle.innerHTML = oliviaDeanPlaylist[a].artist+"-"+oliviaDeanPlaylist[a].title;
        if (a<oliviaDeanPlaylist.length){
    currentTrack.play();   
        }
        else {
            a=11;
        }
})

backwardsButton.addEventListener('click', ()=>{
      a = a-1;
      oliviaDeanPlaylist = BeabadoobeePylonAlbum
        currentTrack.src = oliviaDeanPlaylist[a].src;
        songTitle.innerHTML = oliviaDeanPlaylist[a].artist+"-"+oliviaDeanPlaylist[a].title;
        if (a<oliviaDeanPlaylist.length){
    currentTrack.play(); 
        }
        else if (a>=oliviaDeanPlaylist.length){
            a=11;
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
    currentTrack.src = oliviaDeanPlaylist[a].src;
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
        a = a+1;
        currentTrack.src = oliviaDeanPlaylist[a].src;
        if (a<oliviaDeanPlaylist.length){
    currentTrack.play();
    songTitle.innerHTML = oliviaDeanPlaylist[a].artist+"-"+oliviaDeanPlaylist[a].title;
        }
        else {
            a=0
        }
});