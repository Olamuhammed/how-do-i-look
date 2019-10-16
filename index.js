var video = document.querySelector('#videoElement')

if (navigator.getUserMedia) {
  navigator.getUserMedia({ video: true }, handleVideo)
}

function handleVideo (stream) {
  video.src = window.URL.createObjectURL(stream)
}
