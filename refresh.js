function extractVideoId(url) {
            const regExp = /(?:view_video.php\?viewkey=|embed\/)([^&\/#\?]*)/;
            const match = url.match(regExp);
            return match ? match[1] : false;
        }

        function embedVideo() {
            const url = document.getElementById('videoUrlInput').value;
            const videoContainer = document.getElementById('videoContainer');
            const videoId = extractVideoId(url);

            if (videoId) {
                const embedCode = `<iframe src="https://www.pornhub.com/embed/${videoId}" frameborder="0" width="560" height="340" scrolling="no" allowfullscreen></iframe>`;
                videoContainer.innerHTML = embedCode;
            } else {
                videoContainer.innerHTML = '<p>URL inválida. Por favor, verifique e tente novamente.</p>';
            }
        }
