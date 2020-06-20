(function clockDigitalClosure() {
  'use strict';

  var clocks = document.querySelectorAll('.clock-digital');
  var clocksLength = clocks.length;

  digitalClocksUpdate();

  setInterval(digitalClocksUpdate, 1000);

  // //////////////

  function digitalClocksUpdate() {
    for (var i = 0; i < clocksLength; i++) {
      updateClock(clocks[i]);
    }
  }

  function updateClock(clock) {
    var places = clock.children;
    /* eslint-disable no-undef */
    var time = currentTime();
    places[0].innerHTML = prependZero(time.hours);
    places[1].innerHTML = prependZero(time.minutes);
    places[2].innerHTML = prependZero(time.seconds);
    /* eslint-enable */
  }
})();
