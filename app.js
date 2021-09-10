SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4',
})

$(document).ready(function () {
  SC.stream('/tracks/574730457', function (sound) {
    $('#start1').click(function (e) {
      e.preventDefault()
      sound.start()
    })
    $('#stop1').click(function (e) {
      e.preventDefault()
      sound.stop()
    })
  })
  SC.stream('/tracks/905475772', function (sound) {
    $('#start2').click(function (e) {
      e.preventDefault()
      sound.start()
    })
    $('#stop2').click(function (e) {
      e.preventDefault()
      sound.stop()
    })
  })
})
