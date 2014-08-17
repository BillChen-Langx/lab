'use strict';

/**
 * @ngdoc function
 * @name myangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myangularApp
 */
angular.module('myangularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
