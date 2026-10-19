let BeabadoobeePylonAlbum = [

{
title:"Pylon",
artist: "Beabadoobee",
src: "images/MemoriesBea.mp3",
srcImg: "images/pylonAlbumCover.jpg",
},

{
title:"Nice To Each Other",
artist: "Olivia Dean",
src: "images/niceToEachOtherDean.mp3",
srcImg: "images/theArtofLoving_Dean.jpg",
},
{
title:"Lady Lady",
artist: "Olivia Dean",
src: "images/ladyLadyDean.mp3",
srcImg: "images/theArtofLoving_Dean.jpg",
},

{
title:"Close Up",
artist: "Olivia Dean",
src: "images/closeUpDean.mp3",
srcImg: "images/theArtofLoving_Dean.jpg",
},

{
title:"So Easy (To Fall In Love)",
artist: "Olivia Dean",
src: "images/soEasyDean.mp3",
srcImg: "images/theArtofLoving_Dean.jpg",
},
{
title:"Let Alone The One You Love",
artist: "Olivia Dean",
src: "images/letAloneDean.mp3",
srcImg: "images/theArtofLoving_Dean.jpg",
},

{
title:"Man I Need",
artist: "Olivia Dean",
src: "images/manINeedDean.mp3",
srcImg: "images/theArtofLoving_Dean.jpg",
},

{
title:"Something Inbetween",
artist: "Olivia Dean",
src: "images/somethingInBetweenDean.mp3",
srcImg: "images/theArtofLoving_Dean.jpg",
},
{
title:"Loud",
artist: "Olivia Dean",
src: "images/loudDean.mp3",
srcImg: "images/theArtofLoving_Dean.jpg",
},

{
title:"Baby Steps",
artist: "Olivia Dean",
src: "images/babyStepsDean.mp3",
srcImg: "images/theArtofLoving_Dean.jpg",
},

{
title:"A couple Minutes",
artist: "Olivia Dean",
src: "images/aCoupleMinutesDean.mp3",
srcImg: "images/theArtofLoving_Dean.jpg",
},
{
title:"I've Seen It",
artist: "Olivia Dean",
src: "images/iveSeenItDean.mp3",
srcImg: "images/theArtofLoving_Dean.jpg",
},

]

document.addEventListener('click',(e)=>{
    let topPlaybutton = e.target.closest('#playButtonTop') 
    if (!topPlaybutton) return;
    oliviaDeanPlaylist = BeabadoobeePylonAlbum
    playSong()
    songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
    imgSrc.style.backgroundImage = `url(${oliviaDeanPlaylist[i].srcImg})`
})

let i = 0 
let currentTrack = new Audio();
function playSong() {
    if (i>=oliviaDeanPlaylist.length) {
        i=0
    }
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
        currentTrack.src = oliviaDeanPlaylist[i].src;
        if (i<oliviaDeanPlaylist.length){
    currentTrack.play();   
        }
        else {
            i=11;
        }
})

backwardsButton.addEventListener('click', ()=>{
      i = i-1;
        currentTrack.src = oliviaDeanPlaylist[i].src;
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


