const videos = [
    'Video 1', 'Video 2', 'Video 3', 'Video 4',
    'Video 5', 'Video 6', 'Video 7', 'Video 8',
    'Video 9', 'Video 10', 'Video 11', 'Video 12',
    'Video 13', 'Video 14', 'Video 15', 'Video 16'
  ]; // Beispiel-Videos
  
  const videoContainer = document.querySelector('.video-container');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  
  let visibleVideos = 0; // Anzahl der sichtbaren Videos
  
  // Funktion: Videos in den Grid-Container einfügen
  function loadVideos() {
    const videosToShow = videos.slice(visibleVideos, visibleVideos + 8); // Nächste 8 Videos
  
    videosToShow.forEach((video, index) => {
      const videoElement = document.createElement('div');
      videoElement.className = 'video-item bmfl-video'; // Hinzufügen der BMFL-Klasse
      videoElement.id = `bmfl-video-${visibleVideos + index + 1}`; // Einzigartige ID
      videoElement.textContent = video; // Platzhalter für Video-Inhalt
      videoContainer.appendChild(videoElement);
    });
  
    visibleVideos += 8;
  
    // Button ausblenden, wenn alle Videos angezeigt wurden
    if (visibleVideos >= videos.length) {
      loadMoreBtn.style.display = 'none';
    }
  }
  
  // Initiale Ladefunktion aufrufen
  loadVideos();
  
  // Event-Listener für den Button
  loadMoreBtn.addEventListener('click', loadVideos);