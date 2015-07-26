(function () {
  'use strict';

  var clocks = document.querySelectorAll('.clock-digital');
  var clocksLength = clocks.length;

  setInterval(digitalClocksUpdate, 1000);

  ////////////////

  function digitalClocksUpdate() {
    for( var i = 0; i < clocksLength; i++ ) {
      updateClock(clocks[i]);
    }
  }

  function updateClock(clock) {
    var places = clock.children;
    var time = currentTime();
    places[0].innerHTML = time.hours;
    places[1].innerHTML = time.minutes;
    places[2].innerHTML = time.seconds;
  }

})();

