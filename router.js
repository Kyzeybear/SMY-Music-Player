let deanImage = document.getElementById('oliviaDeanAlbumPage')
let viewBox = document.getElementById('view')
const initialHomepageHtml = viewBox.innerHTML;
history.replaceState({ pageHtml: initialHomepageHtml, isAlbumPage: false}, "", "");

function loadAlbumScript() {
    const oldScript = document.getElementById('olivia-dean-script');
    if (oldScript) {
        oldScript.remove();
    }

    let script = document.createElement('script');
    script.id = 'olivia-dean-script';
    script.src = 'oliviaDeanAlbum.js';
    document.body.appendChild(script);
}

deanImage.addEventListener('click',()=>{
    
fetch('OliviaDeanAlbum.html')
    .then(response => response.text())
    .then (html => {
        viewBox.innerHTML = html; 
        loadAlbumScript()

         const stateObj = { pageHtml: html, isAlbumPage: true};
         history.pushState(stateObj, "", "#the-art-of-loving")

        window.scrollTo(0,0)
    })
.catch(err => console.error("Error loading page:", err));

})



window.addEventListener('popstate', e=>{
if(e.state && e.state.pageHtml){
     viewBox.innerHTML = e.state.pageHtml
    if(e.state.isAlbumPage){
        loadAlbumScript() 
    }
        else {
        const oldScript = document.getElementById('olivia-dean-script')
        if (oldScript) oldScript.remove()
        }
    }

})



