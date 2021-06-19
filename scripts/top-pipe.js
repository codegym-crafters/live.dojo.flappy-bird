function TopPipe (xPosition, length) {
  const MAX_LENGTH = 135
  let _x = xPosition
  let _width = 26
  let _length = length | Math.round(Math.random() * MAX_LENGTH)

  this.getXPossition = function () {
    return _x
  }

  this.getWidth = function () {
    return _width
  }

  this.getLength = function () {
    return _length
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
    return _length
  }
}