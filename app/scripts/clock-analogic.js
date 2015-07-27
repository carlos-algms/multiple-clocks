(function clockAnalogicClosure(window) {
  'use strict';

  var analogicClocks = window.document.querySelectorAll('.clock-analogic');

  if( analogicClocks.length ) {
    cachePointers();
    analogicClocksUpdate();
    setInterval(analogicClocksUpdate, 1000);
  }

  ////////////////

  function cachePointers() {
    for( var i = 0, clock; i < analogicClocks.length; i++ ) {
      clock = analogicClocks[i];
      clock.pointers = {
        hours: clock.querySelector('.clock-analogic--hours'),
        minutes: clock.querySelector('.clock-analogic--minutes'),
        seconds: clock.querySelector('.clock-analogic--seconds')
      };
    }
  }

  function analogicClocksUpdate() {
    for( var i = 0; i < analogicClocks.length; i++ ) {
      updateClock(analogicClocks[i]);
    }
  }

  function updateClock(clock) {
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
    pointer.style.transform = 'rotate(' + deg + 'deg)';
    pointer.style.transition = deg == 0 ? 'none' : '';
  }

  window.analogicClockApi = {
    cachePointers: cachePointers,
    analogicClocksUpdate: analogicClocksUpdate,
    updateClock: updateClock,
    updateSeconds: updateSeconds,
    updateMinutes: updateMinutes,
    updateHours: updateHours,
    _updatePointer: _updatePointer,
    _setStyle: _setStyle
  };

})(this);
