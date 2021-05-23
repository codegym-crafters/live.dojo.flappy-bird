function Game () {
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

  function initAnotherPipeIfNeeded () {
    if (!_timeToNextPipe--) {
      _pipes.push(new BottomPipe())
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