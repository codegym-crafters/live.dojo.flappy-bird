function Game () {
  const GAME_WIDTH = 144
  const GAME_HEIGHT = 256

  let self = this
  let _viewEngine
  let _bird = new Bird()
  let _pipes = []
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

  this.getPipes = function () {
    return _pipes
  }

  this.tick = function () {
    removeOutOfScreenPipes()
    letAllPipeDriftingBack()
    letBirdFallingDown()
    initAnotherPipeIfNeeded()
    viewEngine.refresh()
  }

  this.getWidth = function () {
    return GAME_WIDTH
  }

  this.getHeight = function () {
    return GAME_HEIGHT
  }

  function initAnotherPipeIfNeeded () {
    if (!_timeToNextPipe--) {
      _pipes.push(new BottomPipe(self.getWidth()))
      _timeToNextPipe = Math.round(Math.random() * 25) + 75
    }
  }

  function letBirdFallingDown () {
    _bird.fall()
  }

  function letAllPipeDriftingBack () {
    _pipes.forEach(pipe => pipe.driftingBack())
  }

  function removeOutOfScreenPipes () {
    if (!_pipes.length) return
    if (_pipes[0].isOutOfScreen()) {
      _pipes = _pipes.slice(1)
    }
  }
}