'use strict'

import { Bird } from './bird'
import { Warp } from './warp'

export function Game () {
  const GAME_WIDTH = 144
  const GAME_HEIGHT = 256

  let self = this
  let _viewEngine
  let _bird = new Bird()
  let _warps = []
  let _timeToNextPipe = 0
  let _score = 0

  this.setViewEngine = function (viewEngine) {
    _viewEngine = viewEngine
  }

  this.manageJump = function () {
    _bird.jump()
  }

  this.getBird = function () {
    return _bird
  }

  this.getWarps = function () {
    return _warps
  }

  this.getWarp = function (index) {
    return _warps[index]
  }

  this.pollWarp = function () {
    _warps = _warps.slice(1)
  }

  this.tick = function () {
    checkWarpOvercame()
    removeOutOfScreenWarps()
    letAllPipeDriftingBack()
    letBirdFallingDown()
    initAnotherWarpIfNeeded()
    _viewEngine.refresh()
  }

  this.getWidth = function () {
    return GAME_WIDTH
  }

  this.getHeight = function () {
    return GAME_HEIGHT
  }

  function checkWarpOvercame () {
    if (!_warps.length) return
    let nextWarp = _warps.find(warp => !warp.isOvercome())
    if (nextWarp.getXPosition() < _bird.getXPosition()) {
      _score++
      nextWarp.setOvercome(true)
    }
  }

  function initAnotherWarpIfNeeded () {
    if (!_timeToNextPipe--) {
      _warps.push(new Warp(self.getWidth()))
      _timeToNextPipe = Math.round(Math.random() * 25) + 75
    }
  }

  function letBirdFallingDown () {
    _bird.fall()
  }

  function letAllPipeDriftingBack () {
    _warps.forEach(warp => warp.driftingBack())
  }

  function removeOutOfScreenWarps () {
    if (!_warps.length) return
    if (self.getWarp(0).isOutOfScreen()) {
      self.pollWarp()
    }
  }
}