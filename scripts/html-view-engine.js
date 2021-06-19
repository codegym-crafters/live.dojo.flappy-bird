const SPRITES = {
  BACKGROUND: 'imgs/bg.png',
  BIRD: 'imgs/color-bird.png',
  BOTTOM_PIPE: 'imgs/bottom-pipe.png',
  TOP_PIPE: 'imgs/top-pipe.png'
}

function HtmlViewEngine (containerId, game) {
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
    img.src = SPRITES.BIRD
    _context.drawImage(img, bird.getXPossition(), bird.getYPossition())
  }

  function drawTopPipe (pipe) {
    let img = new Image(pipe.getWidth(), pipe.getLength())
    img.src = SPRITES.TOP_PIPE
    let yPos = pipe.getLength() - pipe.getImageHeight()
    _context.drawImage(img, pipe.getXPossition(), yPos)
  }

  function drawBottomPipe (pipe) {
    let img = new Image(pipe.getWidth(), pipe.getLength())
    img.src = SPRITES.BOTTOM_PIPE
    let yPos = game.getHeight() - pipe.getLength()
    _context.drawImage(img, pipe.getXPossition(), yPos)
  }

  function initContainer () {
    let container = document.getElementById(containerId)
    container.appendChild(_canvas)
    container.setAttribute('style', `background-image: url('${SPRITES.BACKGROUND}'); z-index: -1;width: ${game.getWidth()}px;height: ${game.getHeight()}px`)
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