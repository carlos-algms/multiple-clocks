(function clockAnalogicClosure() {
  'use strict';

  var clocks = document.querySelectorAll('.clock-analogic');
  var clocksLength = clocks.length;

  cachePointers();
  analogicClocksUpdate();
  setInterval(analogicClocksUpdate, 1000);

  ////////////////

  function cachePointers() {
    for( var i = 0, clock; i < clocksLength; i++ ) {
      clock = clocks[i];
      clock.pointers = {
        hours: clock.querySelector('.clock-analogic--hours'),
        minutes: clock.querySelector('.clock-analogic--minutes'),
        seconds: clock.querySelector('.clock-analogic--seconds')
      };
    }
  }

  function analogicClocksUpdate() {
    for( var i = 0; i < clocksLength; i++ ) {
      updateClock(clocks[i]);
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
    pointer.style.transition = deg == 0 ? 'nome' : '';
  }

})();
