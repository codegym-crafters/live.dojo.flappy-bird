'use strict'

import { Game } from './game'
import { HtmlViewEngine } from './html-view-engine'

let game = new Game()
let viewEngine = new HtmlViewEngine('canvas-container', game)
game.setViewEngine(viewEngine)
window.addEventListener('click', game.manageJump)
start(game)

function start (game) {
  callGameTickRepeatably()

  function callGameTickRepeatably () {
    game.tick()
    window.requestAnimationFrame(callGameTickRepeatably)
  }
}