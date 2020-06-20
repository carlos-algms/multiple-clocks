/* eslint-disable object-shorthand */
(function clockAnalogicSvgClosure(window) {
  'use strict';

  /**
   * @type {NodeListOf<SvgWithPointers>}
   */
  var analogicSvgClocks = window.document.querySelectorAll('.clock-analogic-svg');

  if (analogicSvgClocks.length) {
    cachePointers();
    analogicSvgClocksUpdate();
    setInterval(analogicSvgClocksUpdate, 1000);
  }

  // //////////////

  function cachePointers() {
    for (var i = 0, clock; i < analogicSvgClocks.length; i++) {
      clock = analogicSvgClocks[i];
      clock.pointers = {
        hours: clock.querySelector('.clock-analogic-svg--hours'),
        minutes: clock.querySelector('.clock-analogic-svg--minutes'),
        seconds: clock.querySelector('.clock-analogic-svg--seconds'),
      };
    }
  }

  function analogicSvgClocksUpdate() {
    for (var i = 0; i < analogicSvgClocks.length; i++) {
      updateClock(analogicSvgClocks[i]);
    }
  }

  window.analogicSvgClockApi = {
    cachePointers: cachePointers,
    analogicSvgClocksUpdate: analogicSvgClocksUpdate,
  };
})(this);
