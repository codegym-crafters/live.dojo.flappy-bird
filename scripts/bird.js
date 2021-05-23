function Bird () {
  let birdImage = new Image(21, 21)
  birdImage.src = 'color-bird.png'

  this.getImage = function () {
    return birdImage
  }
}