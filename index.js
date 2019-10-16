)

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      var video = document.querySelector('#videoElement')
      video.srcObject = stream
      video.play()
    })
    .catch(function (err0r) {
      console.log('Something went wrong!')
    })
}
