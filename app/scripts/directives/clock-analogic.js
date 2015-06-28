'use strict';

/**
 * @ngdoc directive
 * @name g4cClocksApp.directive:clockAnalogic
 * @description
 * # clockAnalogic
 */
angular.module('g4cClocksApp')
  .directive('clockAnalogic', clockAnalogicDirective);

/**
 * @ngInject
 */
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
    var pointers = {
      seconds: $clock.find('.clock-analogic--seconds'),
      minutes: $clock.find('.clock-analogic--minutes'),
      hours: $clock.find('.clock-analogic--hours')
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
