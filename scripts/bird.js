function Bird (x, y) {
  let _x = x
  let _y = y
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
    _y++
  }
}