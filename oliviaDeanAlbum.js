(function () {
    function initOliviaDeanAlbum() {
        const albumRoot = document.querySelector('#view .pageWrapperFull');
        const playlist = window.musicPlaylists?.oliviaDeanAlbum;
        const player = window.musicPlayer;

        if (!albumRoot || !playlist || !player || albumRoot.dataset.playerInitialized === 'true') return;
        albumRoot.dataset.playerInitialized = 'true';

        const playButton = albumRoot.querySelector('.playButton');
        const clickBoxes = albumRoot.querySelector('.thickHoverDisplayWrapped');
        const trackRows = clickBoxes ? Array.from(clickBoxes.children) : [];
        const timeRows = albumRoot.querySelectorAll('.timeList li');
        const about = albumRoot.querySelector('#albumAbout');
        const expandButton = albumRoot.querySelector('#expandButton');
        const thickBoxBackgroundColor = 'rgba(95, 95, 95, 0.55)';

        player.setPlaylist(playlist);

        playButton?.addEventListener('click', () => {
            player.setPlaylist(playlist);
            player.playTrack(0);
        });

        clickBoxes?.addEventListener('click', (event) => {
            const row = event.target.closest('.thickHoverDisplay');
            if (!row || !clickBoxes.contains(row)) return;

            const index = trackRows.indexOf(row);
            if (index < 0 || index >= playlist.length) return;

            player.setPlaylist(playlist);
            player.playTrack(index);
        });

        document.addEventListener('playertrackchange', (event) => {
            if (event.detail.playlist !== playlist) return;
            trackRows.forEach((row, index) => {
                row.style.background = index === event.detail.index ? thickBoxBackgroundColor : '';
            });
        });

        if (expandButton && about) {
            expandButton.addEventListener('click', () => {
                const expanded = about.dataset.expanded === 'true';
                const mask = 'linear-gradient(to bottom, black 20%, transparent 75%)';
                about.style.webkitMaskImage = expanded ? mask : 'none';
                about.style.maskImage = expanded ? mask : 'none';
                about.dataset.expanded = String(!expanded);
                expandButton.textContent = expanded ? 'Expand ⤢' : 'Collapse ↕';
            });
        }

        playlist.forEach((song, index) => {
            const audio = new Audio(song.src);
            audio.addEventListener('loadedmetadata', () => {
                const duration = Math.floor(audio.duration);
                if (timeRows[index] && Number.isFinite(duration)) {
                    const minutes = Math.floor(duration / 60);
                    const seconds = String(duration % 60).padStart(2, '0');
                    timeRows[index].textContent = `${minutes}:${seconds}`;
                }
            });
        });
    }

    window.initOliviaDeanAlbum = initOliviaDeanAlbum;
    initOliviaDeanAlbum();
})();