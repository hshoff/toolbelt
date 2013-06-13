(function(){

  window.w = window.innerWidth,
  window.h = window.innerHeight;

  function resizeWindow() {
    window.w = window.innerWidth;
    window.h = window.innerHeight;

    console.log('resized');
  }

  window.addEventListener('resize', resizeWindow, false);

  window.onload = function() {
    setTimeout(resizeWindow, 0);
  }

})();