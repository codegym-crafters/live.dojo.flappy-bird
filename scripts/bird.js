function Bird () {
  let _x = 10
  let _y = 10
  let _vY = 1
  let _aY = 0.2
  let _width = 21
  let _height = 21

  this.getXPossition = function () {
    return _x
  }

  this.getYPossition = function () {
    return _y
  }

  this.getWidth = function () {
    return _width
  }

  this.getHeight = function () {
    return _height
  }

  this.fall = function () {
    _y += _vY
    _vY += _aY
  }

  this.jump = function () {
    _vY = -4.5
  }
}