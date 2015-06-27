'use strict';

/**
 * @ngdoc overview
 * @name g4cClocksApp
 * @description
 * # g4cClocksApp
 *
 * Main module of the application.
 */
angular
  .module('g4cClocksApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      });
  });
