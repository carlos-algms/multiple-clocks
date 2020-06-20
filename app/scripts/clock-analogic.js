/* eslint-disable object-shorthand */
(function clockAnalogicClosure(window) {
  'use strict';

  /**
   * @type {NodeListOf<DivWithPointers>}
   */
  var analogicClocks = window.document.querySelectorAll('.clock-analogic');

  if (analogicClocks.length) {
    cachePointers();
    analogicClocksUpdate();
    setInterval(analogicClocksUpdate, 1000);
  }

  // //////////////

  function cachePointers() {
    for (var i = 0, clock; i < analogicClocks.length; i++) {
      clock = analogicClocks[i];
      clock.pointers = {
        hours: clock.querySelector('.clock-analogic--hours'),
        minutes: clock.querySelector('.clock-analogic--minutes'),
        seconds: clock.querySelector('.clock-analogic--seconds'),
      };
    }
  }

  function analogicClocksUpdate() {
    for (var i = 0; i < analogicClocks.length; i++) {
      updateClock(analogicClocks[i]);
    }
  }

  window.analogicClockApi = {
    cachePointers: cachePointers,
    analogicClocksUpdate: analogicClocksUpdate,
  };
})(this);
