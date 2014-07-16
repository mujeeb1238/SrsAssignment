'use strict';

/* Services */

var spaServices = angular.module('spaServices', ['ngResource']);

spaServices.factory('HttpCall', ['$resource',
  function($resource){
    return $resource('data.json', {}, {
      query: {method:'GET', params:{}, isArray:true},
    });
  }]);

spaServices.factory('GetNames', ['$resource',
  function($resource){
    return $resource('names.json', {}, {
      query: {method:'GET', params:{}, isArray:true},
    });
  }]);
