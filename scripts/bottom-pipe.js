function BottomPipe (xPosition, height) {
  const MAX_HEIGHT = 121
  let _x = xPosition
  let _height = height | Math.round(Math.random() * MAX_HEIGHT)
  let _width = 26

  this.getXPossition = function () {
    return _x
  }

  this.getHeight = function () {
    return _height
  }

  this.getWidth = function () {
    return _width
  }

  this.getHeight = function () {
    return _height
  }

  this.driftingBack = function () {
    _x--
  }

  this.isOutOfScreen = function () {
    return this.getXPossition() <= -_width
  }
}