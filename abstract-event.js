var hasTouch = 'ontouchstart' in window,
    resizeEvent = 'onorientationchange' in window ? 'orientationchange' : 'resize',
    startEvent = hasTouch ? 'touchstart' : 'mousedown',
    moveEvent = hasTouch ? 'touchmove' : 'mousemove',
    endEvent = hasTouch ? 'touchend' : 'mouseup',
    cancelEvent = hasTouch ? 'touchcancel' : 'mouseup';
