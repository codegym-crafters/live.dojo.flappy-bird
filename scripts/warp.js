function Warp (xPossition, aperture) {
  let _x = xPossition
  let _aperture = aperture
  let _bottomPipe = new BottomPipe(xPossition)

  this.getXPossition = function () {
    return _x
  }

  this.getAperture = function () {
    return _aperture
  }

  this.driftingBack = function () {
    _x--
    _bottomPipe.driftingBack()
  }

  this.isOutOfScreen = function () {
    return false
  }

  this.getBottomPipe = function () {
    return _bottomPipe
  }
}