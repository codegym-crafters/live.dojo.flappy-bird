function HtmlViewEngine () {
  let canvas = document.createElement('canvas')
  canvas.width = 144
  canvas.height = 256
  document.getElementById('canvas-container').appendChild(canvas)
  let context = canvas.getContext('2d')

  this.drawBird = function (bird) {
    context.drawImage(bird.getImage(), bird.getXPossition(), bird.getYPossition())
  }
}