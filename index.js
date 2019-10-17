
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

let deferredPrompt

window.addEventListener('beforeinstallprompt', (e) => {
  // Show the prompt
  deferredPrompt.prompt()
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt')
      } else {
        console.log('User dismissed the A2HS prompt')
      }
      deferredPrompt = null
    })
})

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
