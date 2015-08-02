(function clockAnalogicSvgClosure(window) {
  'use strict';

  var analogicSvgClocks = window.document.querySelectorAll('.clock-analogic-svg');

  if( analogicSvgClocks.length ) {
    cachePointers();
    analogicSvgClocksUpdate();
    setInterval(analogicSvgClocksUpdate, 1000);
  }

  ////////////////

  function cachePointers() {
    for( var i = 0, clock; i < analogicSvgClocks.length; i++ ) {
      clock = analogicSvgClocks[i];
      clock.pointers = {
        hours: clock.querySelector('.clock-analogic-svg--hours'),
        minutes: clock.querySelector('.clock-analogic-svg--minutes'),
        seconds: clock.querySelector('.clock-analogic-svg--seconds')
      };
    }
  }

  function analogicSvgClocksUpdate() {
    for( var i = 0; i < analogicSvgClocks.length; i++ ) {
      updateSvgClock(analogicSvgClocks[i]);
    }
  }

  function updateSvgClock(clock) {
    var time = currentTime();
    updateSeconds(clock.pointers.seconds, time);
    updateMinutes(clock.pointers.minutes, time);
    updateHours(clock.pointers.hours, time);
  }

  function updateSeconds(pointer, time) {
    _updatePointer(pointer, time.seconds, 60);
  }

  function updateMinutes(pointer, time) {
    _updatePointer(pointer, time.minutes, 60);
  }

  function updateHours(pointer, time) {
    var deg = 30 * (time.hours % 12) + time.minutes / 2;
    _setStyle(pointer, deg);
  }

  function _updatePointer(pointer, value, divisor) {
    var deg = (value / divisor * 360);
    _setStyle(pointer, deg);
  }

  function _setStyle(pointer, deg) {
   // pointer.setAttribute('transform', 'rotate(' + deg + ' 160 160)');
    pointer.style.transform = 'rotate(' + deg + 'deg)';
    pointer.style.transition = deg == 0 ? 'none' : '';
  }

  window.analogicSvgClockApi = {
    cachePointers: cachePointers,
    analogicSvgClocksUpdate: analogicSvgClocksUpdate,
    updateSvgClock: updateSvgClock,
    updateSeconds: updateSeconds,
    updateMinutes: updateMinutes,
    updateHours: updateHours,
    _updatePointer: _updatePointer,
    _setStyle: _setStyle
  };

})(this);
