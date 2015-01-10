'use strict';

/**
 * @ngdoc function
 * @name superflowApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the superflowApp
 */
angular.module('superflowApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
