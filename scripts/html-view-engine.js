'use strict'

const SPRITES = {
  BACKGROUND: {
    src: 'imgs/bg.png',
    width: 144,
    height: 256
  },
  BIRD: {
    src: 'imgs/color-bird.png',
    width: 21,
    height: 21
  },
  BOTTOM_PIPE: {
    src: 'imgs/bottom-pipe.png',
    width: 26,
    height: 121
  },
  TOP_PIPE: {
    src: 'imgs/top-pipe.png',
    width: 26,
    height: 135
  }
}
Object.freeze(SPRITES)

const SpriteFactory = new (function () {
  this.createBirdSprite = function (width, heigh) {
    let img = new Image(width, heigh)
    img.src = SPRITES.BIRD.src
    return img
  }

  this.createTopPipeSprite = function (width, length) {
    let img = new Image(width, length)
    img.src = SPRITES.TOP_PIPE.src
    return img
  }

  this.createBottomPipeSprite = function (width, length) {
    let img = new Image(width, length)
    img.src = SPRITES.BOTTOM_PIPE.src
    return img
  }
})

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
    let img = SpriteFactory.createBirdSprite(bird.getWidth(), bird.getHeight())
    _context.drawImage(img, bird.getXPosition(), bird.getYPosition())
  }

  function drawTopPipe (pipe) {
    let img = SpriteFactory.createTopPipeSprite(pipe.width, pipe.height)
    let yPos = pipe.getLength() - SPRITES.TOP_PIPE.height
    _context.drawImage(img, pipe.getXPosition(), yPos)
  }

  function drawBottomPipe (pipe) {
    let img = SpriteFactory.createBottomPipeSprite(pipe.getWidth(), pipe.getLength())
    let yPos = game.getHeight() - pipe.getLength()
    _context.drawImage(img, pipe.getXPosition(), yPos)
  }

  function initContainer () {
    let container = document.getElementById(containerId)
    container.appendChild(_canvas)
    container.setAttribute('style', `background-image: url('${SPRITES.BACKGROUND.src}'); z-index: -1;width: ${game.getWidth()}px;height: ${game.getHeight()}px`)
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