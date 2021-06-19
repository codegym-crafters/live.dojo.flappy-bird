function TopPipe (xPosition, height) {
  const IMAGE_WIDTH = 26
  const IMAGE_HEIGHT = 135
  let _x = xPosition
  let _height = height | Math.round(Math.random() * IMAGE_HEIGHT)
  let _image = new Image(IMAGE_WIDTH, IMAGE_HEIGHT)
  _image.src = 'imgs/top-pipe.png'

  this.getXPossition = function () {
    return _x
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
    return this.getXPossition() <= -IMAGE_WIDTH
  }

  this.getImageWidth = function () {
    return IMAGE_WIDTH
  }

  this.getImageHeight = function () {
    return IMAGE_HEIGHT
  }
}