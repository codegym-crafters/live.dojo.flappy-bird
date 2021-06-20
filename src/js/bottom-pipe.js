'use strict'

export function BottomPipe (xPosition, lenth) {
  const MAX_HEIGHT = 121
  let _x = xPosition
  let _length = lenth | Math.round(Math.random() * MAX_HEIGHT)
  let _width = 26

  this.getXPosition = function () {
    return _x
  }

  this.getHeight = function () {
    return _length
  }

  this.getWidth = function () {
    return _width
  }

  this.getLength = function () {
    return _length
  }

  this.driftingBack = function () {
    _x--
  }

  this.isOutOfScreen = function () {
    return this.getXPosition() <= -_width
  }
}