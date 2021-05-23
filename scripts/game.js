function Game () {
  let _viewEngine
  let _bird = new Bird(10, 10)

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
  }
}