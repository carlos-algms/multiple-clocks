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
function TimerService($interval, $q) {
  var vm = this;
  this.hours = 0;
  this.minutes = 0;
  this.seconds = 0;

  this.deferred = $q.defer();
  this.promise = this.deferred.promise;
  this.onUpdate = onUpdate;

  $interval(timerLooper, 1000, 0, false, this, prependZero);

  ///////////////////////////////////////

  function timerLooper(timer, prependZero) {
    var date = new Date();
    timer.hours = prependZero( date.getHours() );
    timer.minutes = prependZero( date.getMinutes() );
    timer.seconds = prependZero( date.getSeconds() );
    timer.deferred.notify(timer);
  }

  function prependZero(n) {
    if( n >= 10 ){
      return n;
    }
    return '0' + n.toString();
  }

  function onUpdate(fn) {
    vm.promise.then(null, null, fn);
  }
}

