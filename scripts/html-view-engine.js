function HtmlViewEngine (containerId, game) {
  const BACKGROUND_URL = 'bg.png'

  let _canvas = initCanvas()
  let _context = getContext(_canvas)
  initContainer()

  this.refresh = function () {
    _context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
    drawBird(game.getBird())
    game.getPipes().forEach(pipe => drawBottomPipe(pipe))
  }

  function drawBird (bird) {
    _context.drawImage(bird.getImage(), bird.getXPossition(), bird.getYPossition())
  }

  function drawBottomPipe (pipe) {
    let yPos = GAME_HEIGHT - pipe.getHeight()
    _context.drawImage(pipe.getImage(), pipe.getXPossition(), yPos)
  }

  function initContainer () {
    let container = document.getElementById(containerId)
    container.appendChild(_canvas)
    container.setAttribute('style', `background-image: url('${BACKGROUND_URL}'); z-index: -1;width: ${GAME_WIDTH}px;height: ${GAME_HEIGHT}px`)
  }

  function getContext (canvas) {
    return canvas.getContext('2d')
  }

  function initCanvas () {
    let canvas = document.createElement('canvas')
    canvas.width = GAME_WIDTH
    canvas.height = GAME_HEIGHT
    return canvas
  }
}