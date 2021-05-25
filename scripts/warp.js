function Warp (xPossition, aperture) {
  let _x = xPossition
  let _aperture = aperture
  let _topPipe = new TopPipe(xPossition)
  let _bottomPipe = new BottomPipe(xPossition)

  this.getXPossition = function () {
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
}