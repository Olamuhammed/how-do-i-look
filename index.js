function capturePic () {
  window.alert('Picture has been taken')
  var canvas = document.querySelector('#container00')
  const video = document.querySelector('#videoElement')
  const context = canvas.getContext('2d')
  context.drawImage(video, 0, 0, canvas.width, canvas.height)
  var picture = canvas.toDataURL()
  console.log(picture)
}

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })

    .then(function (stream) {
      var video = document.querySelector('#videoElement')
      video.srcObject = stream
      setTimeout(capturePic(), 5000)
    })

    .catch(function (err0r) {
      console.log('Something went wrong!')
    })
}
