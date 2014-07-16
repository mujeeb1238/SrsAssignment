'use strict';

/* App Module */

var spaApp = angular.module('spaApp', [
  'ngRoute',
  'spaControllers',
  'spaServices',
  'spaDirective'
]);

spaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      }).
      when('/circle', {
        templateUrl: 'partials/circle.html',
        controller: 'CircleController'
      }).
      when('/names', {
        templateUrl: 'partials/names.html',
        controller: 'NamesController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
