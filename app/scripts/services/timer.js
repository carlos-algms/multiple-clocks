'use strict';

/**
 * @ngdoc service
 * @name g4cClocksApp.timer
 * @description
 * # timer
 * Service in the g4cClocksApp.
 */
angular.module('g4cClocksApp')
  .service('timer', TimerService);

/**
 * @ngInject
 */
function TimerService($interval) {
  this.hours = 0;
  this.minutes = 0;
  this.seconds = 0;

  $interval(timerLooper, 1000, 0, true, this, prependZero);

  ///////////////////////////////////////

  function timerLooper(timer, prependZero) {
    var date = new Date();
    timer.hours = prependZero( date.getHours() );
    timer.minutes = prependZero( date.getMinutes() );
    timer.seconds = prependZero( date.getSeconds() );
  }

  function prependZero(n) {
    if( n >= 10 ){
      return n;
    }
    return '0' + n.toString();
  }
}

