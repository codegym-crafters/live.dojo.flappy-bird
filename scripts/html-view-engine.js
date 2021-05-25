function HtmlViewEngine (containerId, game) {
  const BACKGROUND_URL = 'bg.png'

  let _canvas = initCanvas()
  let _context = getContext(_canvas)
  initContainer()

  this.refresh = function () {
    _context.clearRect(0, 0, game.getWidth(), game.getHeight())
    drawBird(game.getBird())
    game.getPipes().forEach(pipe => drawBottomPipe(pipe))
  }

  function drawBird (bird) {
    _context.drawImage(bird.getImage(), bird.getXPossition(), bird.getYPossition())
  }

  function drawBottomPipe (pipe) {
    let yPos = game.getHeight() - pipe.getHeight()
    _context.drawImage(pipe.getImage(), pipe.getXPossition(), yPos)
  }

  function initContainer () {
    let container = document.getElementById(containerId)
    container.appendChild(_canvas)
    container.setAttribute('style', `background-image: url('${BACKGROUND_URL}'); z-index: -1;width: ${game.getWidth()}px;height: ${game.getHeight()}px`)
  }

  function getContext (canvas) {
    return canvas.getContext('2d')
  }

  function initCanvas () {
    let canvas = document.createElement('canvas')
    canvas.width = game.getWidth()
    canvas.height = game.getHeight()
    return canvas
  }
}