
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
  var greetings = ['You look stunning!!!!', 'You look beautiful!!!!', 'looking sharp!!!!', 'You look spectacular!!!!',
    'You look so nice!!!!', 'Introduce me to your barber!!!!']
  var rand = greetings[Math.floor(Math.random() * greetings.length)]
  var text = document.getElementById('message')
  text.innerHTML = rand
}

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })

    .then(function (stream) {
      var video = document.querySelector('#videoElement')
      video.srcObject = stream
      setTimeout(capturePic(), 900000000)
    })

    .catch(function (err0r) {
      console.log('Something went wrong!')
    })
}
