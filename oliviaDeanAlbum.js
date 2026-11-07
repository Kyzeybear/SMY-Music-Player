(function () {




let listName = document.querySelector('.timeList')
const playButton = document.querySelector('.playButton')
const backgroundBoxes = document.querySelector('.thickHoverDisplayWrapped')
const rows =  Array.from(backgroundBoxes.children ?? []);
const rowColor = 'rgba(68, 68, 68, 0.29)'
const rowColorTrans = 'rgba(139, 28, 28, 0)'
console.log(rows)

playButton.addEventListener('click', () =>{
window.musicFunctions.setPlaylist(window.songs.oliviaDeanAlbum)
window.musicFunctions.playSong(0)
window.musicFunctions.renderTrack()
setRowchange()

})
backgroundBoxes.addEventListener ('click', (e)=> {
    setPlaylist(oliviaDeanAlbum)
    const boxClicked = e.target
    renderTrack()
    playSong(rows.indexOf(boxClicked))
    setRowchange()
})

function setRowchange (currentIndex = window.songs.currentIndex){
    rows.forEach ((element, index) =>{
        if (index == currentIndex && currentPlaylist == oliviaDeanAlbum) element.style.backgroundColor = rowColor
        else element.style.backgroundColor = rowColorTrans
    })
}

currentPlaylist.forEach((song, index) => {
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
art1.textContent = dura
})
})


window.deanFunctions = {setRowchange}
    

})();

