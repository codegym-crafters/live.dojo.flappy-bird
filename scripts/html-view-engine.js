function HtmlViewEngine (containerId, game) {
  const BACKGROUND_URL = 'imgs/bg.png'
  const BIRD_IMG = 'imgs/color-bird.png'
  const BOTTOM_PIPE_IMG = 'imgs/bottom-pipe.png'
  const TOP_PIPE_IMG = 'imgs/top-pipe.png'

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
    let img = new Image(bird.getWidth(), bird.getHeight())
    img.src = BIRD_IMG
    _context.drawImage(img, bird.getXPossition(), bird.getYPossition())
  }

  function drawTopPipe (pipe) {
    let img = new Image(pipe.getWidth(), pipe.getHeight())
    img.src = TOP_PIPE_IMG
    let yPos = pipe.getHeight() - pipe.getImageHeight()
    _context.drawImage(img, pipe.getXPossition(), yPos)
  }

  function drawBottomPipe (pipe) {
    let img = new Image(pipe.getWidth(), pipe.getHeight())
    img.src = BOTTOM_PIPE_IMG
    let yPos = game.getHeight() - pipe.getHeight()
    _context.drawImage(img, pipe.getXPossition(), yPos)
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