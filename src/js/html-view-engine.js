'use strict'

import BACKGROUND from '../assets/images/bg.png'
import COLORED_BIRD from '../assets/images/color-bird.png'
import TOP_PIPE from '../assets/images/top-pipe.png'
import BOTTOM_PIPE from '../assets/images/bottom-pipe.png'

const SPRITES = {
  BACKGROUND: {
    src: BACKGROUND,
    width: 144,
    height: 256
  },
  BIRD: {
    src: COLORED_BIRD,
    width: 21,
    height: 21
  },
  BOTTOM_PIPE: {
    src: BOTTOM_PIPE,
    width: 26,
    height: 121
  },
  TOP_PIPE: {
    src: TOP_PIPE,
    width: 26,
    height: 135
  }
}
Object.freeze(SPRITES)

const SpriteFactory = new (function () {
  let birdSprite, topPipeSprite, bottomPipeSprite

  this.createBirdSprite = function (width, heigh) {
    if (!birdSprite) {
      birdSprite = new Image(width, heigh)
      birdSprite.src = SPRITES.BIRD.src
    }
    return birdSprite
  }

  this.createTopPipeSprite = function (width, length) {
    if (!topPipeSprite) {
      topPipeSprite = new Image(width, length)
      topPipeSprite.src = SPRITES.TOP_PIPE.src
    } else {
      topPipeSprite.width = width
      topPipeSprite.height = length
    }
    return topPipeSprite
  }

  this.createBottomPipeSprite = function (width, length) {
    if (!bottomPipeSprite) {
      bottomPipeSprite = new Image(width, length)
      bottomPipeSprite.src = SPRITES.BOTTOM_PIPE.src
    } else {
      bottomPipeSprite.width = width
      bottomPipeSprite.height = length
    }
    return bottomPipeSprite
  }
})

export function HtmlViewEngine (containerId, game) {
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