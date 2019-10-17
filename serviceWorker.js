
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/serviceWorker.js')
    .then((reg) => {
      console.log('registered')
    })
    .catch((err) => {
      console.log('there was an issue' + err)
    })
}
