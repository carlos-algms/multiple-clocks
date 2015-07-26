'use strict';

function clockAnalogicDirective(timer) {

  return {
    restrict: 'E',
    template: [
      '<div class="clock-analogic">' +
        '<ul class="clock-analogic--marks"><li></li><li></li><li></li><li></li><li></li><li></li></ul>' +
        '<div class="clock-analogic--pointers">' +
          '<span class="clock-analogic--minutes"></span>' +
          '<span class="clock-analogic--hours"></span>' +
          '<span class="clock-analogic--seconds"></span>' +
        '</div>' +
      '</div>'
    ].join('\n'),
    scope: {},
    link: clockAnalogicPostLink
  };

  ///////////////////

  function clockAnalogicPostLink($scope, $clock) {
    var pointersNodes = $clock.find('span');

    var pointers = {
      seconds: pointersNodes.eq(2),
      minutes: pointersNodes.eq(0),
      hours: pointersNodes.eq(1)
    };


    timer.onUpdate(clockAnalogicOnUpdate);

    ////////////

    function clockAnalogicOnUpdate(timer) {
      updateSeconds(pointers.seconds, timer.seconds);
      updateMinutes(pointers.minutes, timer.minutes);
      updateHours(pointers.hours, timer.hours);
    }
  }

  function updateSeconds(pointer, value) {
    _updatePointer(pointer, value, 60);
  }

  function updateMinutes(pointer, value) {
    _updatePointer(pointer, value, 60);
  }

  function updateHours(pointer, value) {
    _updatePointer(pointer, value, 12);
  }

  function _updatePointer(pointer, value, divisor) {
    var deg = (value / divisor * 360);

    pointer.css({
      transform: 'rotate(' + deg + 'deg)',
      transition: deg == 0 ? 'nome' : ''
    });
  }

}
