function BottomPipe (x, height) {
  const IMAGE_WIDTH = 26
  const IMAGE_HEIGHT = 121
  let _x = x | GAME_WIDTH
  let _height = height | Math.round(Math.random() * IMAGE_HEIGHT)
  let _image = new Image(IMAGE_WIDTH, IMAGE_HEIGHT)
  _image.src = 'bottom-pipe.png'

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
}