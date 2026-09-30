
(function () {

let oliviaDeanPlaylist = [

{
title:"The Art Of Loving (Intro)",
artist: "Olivia Dean",
src: "images/TheArtofLovingIntro.mp3",
srcImg: "images/theArtofLoving_Dean.jpg",
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
let playButton = document.querySelector('.playButton');
let i=0;
let currentTrack = new Audio();
playButton.addEventListener('click', ()=>{
playSong()
})

currentTrack.addEventListener('ended', ()=>{
    clickBoxes.children[i].style.background = "linear-gradient(rgba(136, 22, 22, 0),rgba(43, 20, 20, 0))";
        i = i+1;
        currentTrack.src = oliviaDeanPlaylist[i].src;
        if (i<oliviaDeanPlaylist.length){
    currentTrack.play();
    clickBoxes.children[i].style.background = "linear-gradient(rgba(250, 246, 246, 0.4),rgba(43, 20, 20, 0.06))";
        }
        else {
            i=0
        }
});

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
setInterval (()=>{
progress.value=currentTrack.currentTime
progress.max =currentTrack.duration
songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
imgSrc.style.backgroundImage = `url(${oliviaDeanPlaylist[i].srcImg})`
},500)

progress.onchange = ()=>{
   currentTrack.currentTime=progress.value;
   songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
}

forwardButton.addEventListener('click', ()=>{
    clickBoxes.children[i].style.background = "linear-gradient(rgba(136, 22, 22, 0),rgba(43, 20, 20, 0))";
      i = i+1;
        currentTrack.src = oliviaDeanPlaylist[i].src;
        if (i<oliviaDeanPlaylist.length){
    currentTrack.play();
    clickBoxes.children[i].style.background = thickBoxBackgroundColor;    
        }
        else {
            i=11;
        }
})

backwardsButton.addEventListener('click', ()=>{
    clickBoxes.children[i].style.background = "linear-gradient(rgba(136, 22, 22, 0),rgba(43, 20, 20, 0))";
      i = i-1;
        currentTrack.src = oliviaDeanPlaylist[i].src;
        if (i<oliviaDeanPlaylist.length){
    currentTrack.play();
    clickBoxes.children[i].style.background = thickBoxBackgroundColor;    
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




let maskedText = document.getElementById('albumAbout');
let expandButon = document.getElementById('expandButton');
const gradient = 'linear-gradient(to bottom, black 20%, transparent 75%)';

function changeGradient () {
if (maskedText.style.webkitMaskImage != 'none'){
     maskedText.style.webkitMaskImage = 'none';
 maskedText.style.maskImage = 'none';
  expandButon.textContent = 'Collapse ↕ ';
}

   else if (maskedText.style.webkitMaskImage='none') {
 maskedText.style.webkitMaskImage = gradient;
  maskedText.style.maskImage = gradient;
  expandButon.textContent = 'Expand ⤢ ';
    }
};

expandButon.addEventListener('click', ()=>{
    changeGradient();
})


let clickBoxes = document.querySelector('.thickHoverDisplayWrapped');
clickBoxes.children[0].addEventListener ('click', ()=>{
    clickBoxes.children[i].style.background = "linear-gradient(rgba(136, 22, 22, 0),rgba(43, 20, 20, 0))";
    if (i!=0)
        i=0
     currentTrack.src = oliviaDeanPlaylist[i].src;
      currentTrack.play();
      songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
})

clickBoxes.children[1].addEventListener ('click', ()=>{
    clickBoxes.children[i].style.background = "linear-gradient(rgba(136, 22, 22, 0),rgba(43, 20, 20, 0))";
    if (i!=1)
        i=1
     currentTrack.src = oliviaDeanPlaylist[i].src;
      currentTrack.play();
      songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
})

clickBoxes.children[2].addEventListener ('click', ()=>{
    clickBoxes.children[i].style.background = "linear-gradient(rgba(136, 22, 22, 0),rgba(43, 20, 20, 0))";
    if (i!=2)
        i=2
     currentTrack.src = oliviaDeanPlaylist[i].src;
      currentTrack.play();
      songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
})

clickBoxes.children[3].addEventListener ('click', ()=>{
    clickBoxes.children[i].style.background = "linear-gradient(rgba(136, 22, 22, 0),rgba(43, 20, 20, 0))";
    if (i!=3)
        i=3
     currentTrack.src = oliviaDeanPlaylist[i].src;
      currentTrack.play();
      songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
})

clickBoxes.children[4].addEventListener ('click', ()=>{
    clickBoxes.children[i].style.background = "linear-gradient(rgba(136, 22, 22, 0),rgba(43, 20, 20, 0))";
    if (i!=4)
        i=4
     currentTrack.src = oliviaDeanPlaylist[i].src;
      currentTrack.play();
      songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
})

clickBoxes.children[5].addEventListener ('click', ()=>{
    clickBoxes.children[i].style.background = "linear-gradient(rgba(136, 22, 22, 0),rgba(43, 20, 20, 0))";
    if (i!=5)
        i=5
     currentTrack.src = oliviaDeanPlaylist[i].src;
      currentTrack.play();
      songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
})

clickBoxes.children[6].addEventListener ('click', ()=>{
    clickBoxes.children[i].style.background = "linear-gradient(rgba(136, 22, 22, 0),rgba(43, 20, 20, 0))";
    if (i!=6)
        i=6
     currentTrack.src = oliviaDeanPlaylist[i].src;
      currentTrack.play();
      songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
})

clickBoxes.children[7].addEventListener ('click', ()=>{
    clickBoxes.children[i].style.background = "linear-gradient(rgba(136, 22, 22, 0),rgba(43, 20, 20, 0))";
    if (i!=7)
        i=7
     currentTrack.src = oliviaDeanPlaylist[i].src;
      currentTrack.play();
      songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
})

clickBoxes.children[8].addEventListener ('click', ()=>{
    clickBoxes.children[i].style.background = "linear-gradient(rgba(136, 22, 22, 0),rgba(43, 20, 20, 0))";
    if (i!=8)
        i=8
     currentTrack.src = oliviaDeanPlaylist[i].src;
      currentTrack.play();
      songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
})

clickBoxes.children[9].addEventListener ('click', ()=>{
    clickBoxes.children[i].style.background = "linear-gradient(rgba(136, 22, 22, 0),rgba(43, 20, 20, 0))";
    if (i!=9)
        i=9
     currentTrack.src = oliviaDeanPlaylist[i].src;
      currentTrack.play();
      songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
})

clickBoxes.children[10].addEventListener ('click', ()=>{
    clickBoxes.children[i].style.background = "linear-gradient(rgba(136, 22, 22, 0),rgba(43, 20, 20, 0))";
    if (i!=10){
        i=10
     currentTrack.src = oliviaDeanPlaylist[i].src;
      currentTrack.play();
      songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
}
    })

clickBoxes.children[11].addEventListener ('click', ()=>{
    clickBoxes.children[i].style.background = "linear-gradient(rgba(136, 22, 22, 0),rgba(43, 20, 20, 0))";
    if (i!=11)
        i=11
     currentTrack.src = oliviaDeanPlaylist[i].src;
      currentTrack.play();
      songTitle.innerHTML = oliviaDeanPlaylist[i].artist+"-"+oliviaDeanPlaylist[i].title;
})

clickBoxes.addEventListener('click', ()=>{
    clickBoxes.children[i].style.background = thickBoxBackgroundColor;
    playPauseButton2.innerHTML = "❚❚";
})

let thickBoxBackgroundColor = "rgba(95, 95, 95, 0.55)";


let listName = document.querySelector('.timeList')

oliviaDeanPlaylist.forEach((song, index) => {
let song1 = new Audio(song.src)
let art1 = listName.children[index]



song1.addEventListener('loadedmetadata', () => {
let dura = song1.duration
if (dura>60) {
    let songMinute = String((dura / 60).toFixed(0))
    let  songSeconds = String((dura % 60).toFixed(0))
    songSeconds = songSeconds<10? "0"+songSeconds: songSeconds

    dura = songMinute+":"+songSeconds
}
else {
    let  songSeconds = String((dura % 60).toFixed(0))
    songSeconds = songSeconds<10? '0'+songSeconds: songSeconds
    dura = "0:"+ songSeconds
}
art1.innerHTML = dura
})
})


})();