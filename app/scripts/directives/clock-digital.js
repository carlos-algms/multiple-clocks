'use strict';

/**
 * @ngdoc directive
 * @name g4cClocksApp.directive:clockDigital
 * @description
 * # clockDigital
 */
angular.module('g4cClocksApp')
  .directive('clockDigital', clockDigitalDirective);


/**
 * @ngInject
 */
function clockDigitalDirective() {

  return {
    template: [
      '<div class="clock-digital">' +
        '<span class="clock-digital--hours">{{timer.hours}}</span>' +
        '<span class="clock-digital--separator">:</span>' +
        '<span class="clock-digital--seconds">{{timer.minutes}}</span>' +
        '<span class="clock-digital--separator">:</span>' +
        '<span class="clock-digital--seconds">{{timer.seconds}}</span>' +
      '</div>'
    ].join('\n'),
    restrict: 'E',
    controller: ClockDigitalCtrl
  };

  ///////////////////
  /**
   * @ngInject
   */
  function ClockDigitalCtrl($scope, timer) {
    $scope.timer = timer;
  }
}

