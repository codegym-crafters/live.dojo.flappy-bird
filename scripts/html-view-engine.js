function HtmlViewEngine (containerId, game) {
  const BACKGROUND_URL = 'imgs/bg.png'
  const BIRD_IMAGE = new Image(21, 21)
  BIRD_IMAGE.src = 'imgs/color-bird.png'

  let _canvas = initCanvas()
  let _context = getContext(_canvas)
  initContainer()

  this.refresh = function () {
    _context.clearRect(0, 0, game.getWidth(), game.getHeight())
    drawBird(game.getBird())
    game.getWarps().forEach(warp => {
      drawBottomPipe(warp.getBottomPipe())
      drawTopPipe(warp.getTopPipe())
    })
  }

  function drawBird (bird) {
    _context.drawImage(BIRD_IMAGE, bird.getXPossition(), bird.getYPossition())
  }

  function drawTopPipe (pipe) {
    let yPos = pipe.getHeight() - pipe.getImageHeight()
    _context.drawImage(pipe.getImage(), pipe.getXPossition(), yPos)
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