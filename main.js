function previewFile() {
  var cut = document.querySelector('#cut')
  var codeContainer = document.querySelector('#code')
  var img = document.createElement('img')
  var file = document.querySelector('input[type=file]').files[0]
  var reader = new FileReader()

  reader.addEventListener(
    'load',
    function() {
      img.src = reader.result
      codeContainer.value = reader.result
      cut.setAttribute('data-clipboard-text', reader.result)
    },
    false,
  )

  if (file) {
    reader.readAsDataURL(file)
  }
}

var clipboard = new ClipboardJS('#cut')
clipboard.on('success', function(e) {
  console.log(e)
})
clipboard.on('error', function(e) {
  console.log(e)
})
