function TopPipe (xPosition, height) {
  const MAX_HEIGHT = 135
  let _x = xPosition
  let _width = 26
  let _height = height | Math.round(Math.random() * MAX_HEIGHT)

  this.getXPossition = function () {
    return _x
  }

  this.getWidth = function () {
    return _width
  }

  this.getHeight = function () {
    return _height
  }

  this.getImage = function () {
    return _image
  }

  this.driftingBack = function () {
    _x--
  }

  this.isOutOfScreen = function () {
    return this.getXPossition() <= -_width
  }

  this.getImageWidth = function () {
    return _width
  }

  this.getImageHeight = function () {
    return _height
  }
}