
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('serviceWorker.js', {
    scope: './'
  })
    .then((reg) => {
      console.log('registered')
    })
    .catch((err) => {
      console.log('there was an issue' + err)
    })
}

function capturePic () {
  // window.alert('Picture has been taken')
  var canvas = document.querySelector('#container')
  const video = document.querySelector('#videoElement')
  const context = canvas.getContext('2d')
  console.log(context)

  context.drawImage(video, 0, 0, canvas.width, canvas.height)
  var picture = canvas.toDataURL()
  console.log('here', picture, context)
}

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })

    .then(function (stream) {
      var video = document.querySelector('#videoElement')
      video.srcObject = stream
      setTimeout(capturePic(), 50000)
    })

    .catch(function (err0r) {
      console.log('Something went wrong!')
    })
}
