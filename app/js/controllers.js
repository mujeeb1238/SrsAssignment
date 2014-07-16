'use strict';

/* Controllers */

var spaControllers = angular.module('spaControllers', []);

spaControllers.controller('HomeController', ['$scope',
  function($scope) {

      $scope.values = new Array(); 

      $scope.log = function(){
        $scope.values.push({val: $scope.data});
        console.log("Data Entered is: "+$scope.data);
      }

  }]);
spaControllers.controller('CircleController', ['$scope', 'HttpCall',
  function($scope, HttpCall) {

    $scope.circleData = HttpCall.query();
    console.log("CircleController called..!");

  }]);
spaControllers.controller('NamesController', ['$scope', 'GetNames',
  function($scope, GetNames) {       
    $scope.names = GetNames.query();
    console.log("NamesController called..!");

  }]);

