function previewFile() {
  var preview = document.querySelector('#preview')
  var codeContainer = document.querySelector('#code')
  var img = document.createElement('img')
  var file = document.querySelector('input[type=file]').files[0]
  var reader = new FileReader()

  reader.addEventListener(
    'load',
    function() {
      img.src = reader.result
      preview.appendChild(img)
      codeContainer.innerHTML = reader.result
    },
    false,
  )

  if (file) {
    reader.readAsDataURL(file)
  }
}
