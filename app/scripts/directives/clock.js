'use strict';

/**
 * @ngdoc directive
 * @name g4cClocksApp.directive:clock
 * @description
 * # clock
 */
angular.module('g4cClocksApp')
  .directive('clock', clockDirective);

function clockDirective() {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      element.text('this is the clock directive');
    }
  };
}
