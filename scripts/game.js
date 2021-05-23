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
    _pipes.forEach(pipe => pipe.driftingBack())
    _bird.fall()
    if (!_timeToNextPipe--) {
      _pipes.push(new BottomPipe())
      _timeToNextPipe = Math.round(Math.random() * 25) + 75
    }
    viewEngine.refresh()
  }

  function removeOutOfScreenPipes () {
    if (_pipes.length && _pipes[0].getXPossition() <= 0) {
      _pipes = _pipes.slice(1)
    }
  }
}