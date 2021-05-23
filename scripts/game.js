function Game () {
  let _viewEngine
  let _bird = new Bird()
  let _pipes = [
    new BottomPipe(100)
  ]

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
    _pipes.forEach(pipe => pipe.driftingBack())
    _bird.fall()
    viewEngine.refresh()
  }
}