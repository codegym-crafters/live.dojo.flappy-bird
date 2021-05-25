function Game () {
  const GAME_WIDTH = 144
  const GAME_HEIGHT = 256

  let self = this
  let _viewEngine
  let _bird = new Bird()
  let _warps = []
  let _timeToNextPipe = 0

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
    return self.getWarps()[index]
  }

  this.pollWarp = function () {
    _warps = _warps.slice(1)
  }

  this.tick = function () {
    removeOutOfScreenWarps()
    letAllPipeDriftingBack()
    letBirdFallingDown()
    initAnotherWarpIfNeeded()
    viewEngine.refresh()
  }

  this.getWidth = function () {
    return GAME_WIDTH
  }

  this.getHeight = function () {
    return GAME_HEIGHT
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
    self.getWarps().forEach(warp => warp.driftingBack())
  }

  function removeOutOfScreenWarps () {
    if (!self.getWarps().length) return
    let firstWarp = self.getWarp(0)
    if (firstWarp.getBottomPipe().isOutOfScreen()) {
      self.pollWarp()
    }
  }
}