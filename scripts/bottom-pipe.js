function BottomPipe (height) {
  let _x = 100
  let _height = height
  let _image = new Image(26, 121)
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