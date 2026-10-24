let viewBox = document.getElementById('view')
let topBox = document.querySelector('.fixedTopWrapped')
let ablbumPageLoaded = false
history.replaceState({ pageName: 'home', isAlbumPage: false }, "", "")

const routeMap = new Map()
routeMap.set('home', document.createElement('div'))
let currentPage = 'home'

function showPage (pageName, html){
    let currentPageContainer = routeMap.get(currentPage)
    currentPageContainer.replaceChildren(...viewBox.childNodes)

    let targetPageContainer = routeMap.get(pageName)
    let firstRoute = !targetPageContainer
    if(firstRoute){
        targetPageContainer  = document.createElement('div')
        targetPageContainer.innerHTML = html
        routeMap.set(pageName,targetPageContainer)
    }
    viewBox.replaceChildren(...targetPageContainer.childNodes)
    currentPage = pageName
    return firstRoute


}



let albumScriptLoaded = false;



function loadAlbumScript() {
    if (albumScriptLoaded) return;

    const script = document.createElement('script');
    script.id = 'olivia-dean-script';
    script.src = 'oliviaDeanAlbum.js';
    script.onload = () => {
        albumScriptLoaded = true;
        window.initOliviaDeanAlbum();
    };
    script.onerror = () => {
        albumScriptLoaded = false;
        script.remove();
        console.error('Could not load oliviaDeanAlbum.js');
    };
    document.body.appendChild(script);
}

function albumRender(html){
    const isNewAlbumPage = showPage('album', html);
    if (isNewAlbumPage) loadAlbumScript();
    ablbumPageLoaded = true;
    history.pushState({ pageName: 'album', isAlbumPage: true }, "", "#the-art-of-loving");
    window.scrollTo(0, 0);
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
document.addEventListener('click', (e)=>{
const headerTag = e.target.closest('#smy1')

if(!headerTag) return;

ablbumPageLoaded = false
e.preventDefault()
history.pushState({ pageName: 'home', isAlbumPage: false }, "", "#/")
showPage('home')


document.addEventListener('click',()=>{
    if (ablbumPageLoaded){
        oliviaDeanPlaylist = oliviaDeanAlbum
    }
    oliviaDeanPlaylist = BeabadoobeePylonAlbum
})

})


window.addEventListener('popstate', e=>{
    if (!e.state?.pageName) return;
    console.log(e.state.pageName)
    showPage(e.state.pageName); 
    ablbumPageLoaded = e.state.isAlbumPage;
    
})

