let viewBox = document.getElementById('view')
const initialHomepageHtml = viewBox.innerHTML;
let topBox = document.querySelector('.fixedTopWrapped')
let ablbumPageLoaded = false
history.replaceState({pageHtml: initialHomepageHtml, isAlbumPage: false}, "", "")

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

function renderHome() {
  viewBox.innerHTML = initialHomepageHtml;
  ablbumPageLoaded = false;

  const oldScript = document.getElementById('olivia-dean-script');
  if (oldScript) oldScript.remove();

  history.replaceState({ pageHtml: initialHomepageHtml, isAlbumPage: false }, "", "");
}


function albumRender(html){
    viewBox.innerHTML = html; 
        loadAlbumScript()
        ablbumPageLoaded = true
         history.pushState({ pageHtml: html, isAlbumPage: true}, "", "#the-art-of-loving")
        window.scrollTo(0,0)
        viewBox.style.display = 'flex';
}

document.addEventListener('click',(e)=>{

const deanImage = e.target.closest('#oliviaDeanAlbumPage')

    if (!deanImage) return;
    if(ablbumPageLoaded) return;

    fetch('OliviaDeanAlbum.html')
        .then (response => response.text())
        .then (html => albumRender(html))
        .catch (err => console.log('error caught', err))

    
})

window.addEventListener('popstate', e=>{
if(e.state && e.state.pageHtml){
     viewBox.innerHTML = e.state.pageHtml
    if(e.state.isAlbumPage){
        loadAlbumScript() 
        ablbumPageLoaded = true 
    }
        else {
        const oldScript = document.getElementById('olivia-dean-script')
        if (oldScript) oldScript.remove()
        ablbumPageLoaded = false  
     let script = document.createElement('script');
    script.id = 'style2';
    script.src = 'style2.js';
    document.body.appendChild(script);

        }
    }

})