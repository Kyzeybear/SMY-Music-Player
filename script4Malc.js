let progress = document.getElementById("progressBar");
let song = document.getElementById("songBea");
let ctlrIcon = document.getElementById("ctrlIcon2");


song.onloadedmetadata = function() {
  progress.max = song.duration;
  progress.value = song.currentTime;

}

function playPause (){
 if(song.paused){
    song.play();
    ctlrIcon.innerHTML= "❚❚";
 }

 else {
    song.pause();
   ctlrIcon.innerHTML = "▶︎";
    
    
 }

 
 }

 if(song.play) {
    setInterval (()=>{
progress.value = song.currentTime;
    },500);
   
    
 }

 progress.onchange = function (){
   song.play();
   ctlrIcon.innerHTML= "❚❚";
    song.currentTime = progress.value
 }

 
 let hoverBox = document.querySelector('.hoverBoxBea');
 let beaText = document.getElementById('author2');
 let boxElements = document.querySelector('.boxElements');


beaText.addEventListener('mouseenter', ()=> {
    hoverBox.style.display = 'block';
    boxElements.style.display = 'block';
});

beaText.addEventListener ('mouseleave', ()=> {
    hoverBox.style.display = 'none';
    boxElements.style.display = 'none';
});

hoverBox.addEventListener('mouseenter', ()=> {
    hoverBox.style.display = 'block';
    boxElements.style.display = 'block';
});

hoverBox.addEventListener ('mouseleave', ()=> {
    hoverBox.style.display = 'none';
    boxElements.style.display = 'none';
});

boxElements.addEventListener('mouseenter', ()=> {
    hoverBox.style.display = 'block';
    boxElements.style.display = 'block';
});

boxElements.addEventListener ('mouseleave', ()=> {
    hoverBox.style.display = 'none';
    boxElements.style.display = 'none';
});














































let jacobBox = document.querySelector('.hoverBoxJacob');
let jacob = document.getElementById("author4");
let jacobElements = document.querySelector('.boxElementsJacob');

jacob.addEventListener('mouseenter',()=>{
jacobBox.style.display = 'block';
jacobElements.style.display ='block';

} )

jacob.addEventListener('mouseleave',()=>{
jacobBox.style.display='none';
jacobElements.style.display ='none';
} )

jacobBox.addEventListener('mouseenter',()=>{
jacobBox.style.display='block';
jacobElements.style.display ='block';
} )

jacobBox.addEventListener('mouseleave',()=>{
jacobBox.style.display='none';
jacobElements.style.display ='none';
} )

jacobElements.addEventListener('mouseenter',()=>{
jacobBox.style.display='block';
jacobElements.style.display ='block';
} )

jacobElements.addEventListener('mouseleave',()=>{
jacobBox.style.display='none';
jacobElements.style.display ='none';
} )


let IainBox = document.querySelector('.hoverBoxIain');
let Iain = document.getElementById("author7");
let IainElements = document.querySelector('.boxElementsIain');

Iain.addEventListener('mouseenter', ()=>{
IainBox.style.display = 'block';
IainElements.style.display = 'block';
})

Iain.addEventListener('mouseleave', ()=>{
IainBox.style.display = 'none';
IainElements.style.display = 'none';
})

IainBox.addEventListener('mouseenter', ()=>{
IainBox.style.display = 'block';
IainElements.style.display = 'block';
})

IainBox.addEventListener('mouseleave', ()=>{
IainBox.style.display = 'none';
IainElements.style.display = 'none';
})

IainElements.addEventListener('mouseenter', ()=>{
IainBox.style.display = 'block';
IainElements.style.display = 'block';
})

IainElements.addEventListener('mouseleave', ()=>{
IainBox.style.display = 'none';
IainElements.style.display = 'none';
})


