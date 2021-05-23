function Game () {
  let _viewEngine
  let _bird = new Bird()
  let _pipe = new BottomPipe(100)

  this.setViewEngine = function (viewEngine) {
    _viewEngine = viewEngine
  }

  this.manageJump = function () {
    _bird.jump()
  }

  this.tick = function () {
    _bird.fall()
    viewEngine.refresh()
    viewEngine.drawBird(_bird)
    viewEngine.drawBottomPipe(_pipe)
  }
}