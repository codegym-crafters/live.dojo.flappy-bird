function HtmlViewEngine (containerId) {
  const WIDTH = 144
  const HEIGHT = 256
  const BACKGROUND_URL = 'bg.png'

  let _canvas = initCanvas()
  let _context = getContext(_canvas)
  initContainer()

  this.drawBird = function (bird) {
    _context.drawImage(bird.getImage(), bird.getXPossition(), bird.getYPossition())
  }

  this.refresh = function () {
    _context.clearRect(0, 0, WIDTH, HEIGHT)
  }

  function initContainer () {
    let container = document.getElementById(containerId)
    container.appendChild(_canvas)
    container.setAttribute('style', `background-image: url('${BACKGROUND_URL}'); z-index: -1;width: ${WIDTH}px;height: ${HEIGHT}px`)
  }

  function getContext (canvas) {
    return canvas.getContext('2d')
  }

  function initCanvas () {
    let canvas = document.createElement('canvas')
    canvas.width = 144
    canvas.height = 256
    return canvas
  }
}