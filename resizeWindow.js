(function(){

  function resizeWindow() {
    console.log('resized');
  }

  window.addEventListener('resize', resizeWindow, false);

  window.onload = function() {
    setTimeout(resizeWindow, 0);
  }

})();