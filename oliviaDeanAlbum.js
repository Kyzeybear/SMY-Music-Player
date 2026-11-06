(function () {




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
art1.innerHTML = dura
})
})

    window.initOliviaDeanAlbum = initOliviaDeanAlbum;
    initOliviaDeanAlbum();

})();

