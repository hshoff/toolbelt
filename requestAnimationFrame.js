if (!window.requestAnimationFrame) {

  window.requestAnimationFrame = (function() {
    return
      window.requestAnimationFrame       ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      window.oRequestAnimationFrame      ||
      window.msRequestAnimationFrame     ||

      function(callback) {
        window.setTimeout(callback, 10000/60);
      }
  })();

}
