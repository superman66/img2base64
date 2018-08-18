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
      copy(reader.result)
    },
    false,
  )

  if (file) {
    reader.readAsDataURL(file)
  }
}

function copy(code) {
  var clipboard = new ClipboardJS('#cut', {
    text: function() {
      return code
    },
  })

  clipboard.on('success', function(e){
    alert('复制成功');
  })
  clipboard.on('error', function(e){
    alert('复制失败');
  })
}
