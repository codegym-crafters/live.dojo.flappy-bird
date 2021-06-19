function Warp (xPosition, aperture) {
  let _x = xPosition
  let _aperture = aperture
  let _topPipe = new TopPipe(xPosition)
  let _bottomPipe = new BottomPipe(xPosition)
  let _isOvercome = false

  this.getXPosition = function () {
    return _x
  }

  this.getAperture = function () {
    return _aperture
  }

  this.driftingBack = function () {
    _x--
    _topPipe.driftingBack()
    _bottomPipe.driftingBack()
  }

  this.isOutOfScreen = function () {
    return _topPipe.isOutOfScreen() && _bottomPipe.isOutOfScreen()
  }

  this.getTopPipe = function () {
    return _topPipe
  }

  this.getBottomPipe = function () {
    return _bottomPipe
  }

  this.isOvercome = function () {
    return _isOvercome
  }

  this.setOvercome = function (isOvercome) {
    _isOvercome = isOvercome
  }
}