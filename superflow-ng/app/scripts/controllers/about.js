'use strict';

/**
 * @ngdoc function
 * @name superflowApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the superflowApp
 */
angular.module('superflowApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
