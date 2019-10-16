var video = document.querySelector('#videoElement')

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia

if (navigator.getUserMedia) {
  navigator.getUserMedia({ video: true }, handleVideo)
}

function handleVideo (stream) {
  video.src = window.URL.createObjectURL(stream)
}
