function Bird (x, y) {
  let _x = x
  let _y = y
  let _vY = 1
  let _aY = 0.2
  let birdImage = new Image(21, 21)
  birdImage.src = 'color-bird.png'

  this.getXPossition = function () {
    return _x
  }

  this.getYPossition = function () {
    return _y
  }

  this.getImage = function () {
    return birdImage
  }

  this.fall = function () {
    _y += _vY
    _vY += _aY
  }

  this.jump = function () {
    _vY = -4.5
  }
}