'use strict';

/**
 * @ngdoc directive
 * @name g4cClocksApp.directive:clockAnalogic
 * @description
 * # clockAnalogic
 */
angular.module('g4cClocksApp')
  .directive('clockAnalogic', clockAnalogicDirective);


function clockAnalogicDirective() {
  return {
    template: [
      '<div class="clock-analogic">' +
        '<span class="clock-analogic--hours"><i></i></span>' +
        '<span class="clock-analogic--minutes"><i></i></span>' +
        '<span class="clock-analogic--seconds"><i></i></span>' +
      '</div>'
    ].join('\n'),
    restrict: 'E',
    controller: ClockAnalogicCtrl
  };

  ///////////////////
  /**
   * @ngInject
   */
  function ClockAnalogicCtrl($scope, timer) {
    $scope.timer = timer;
  }

}
