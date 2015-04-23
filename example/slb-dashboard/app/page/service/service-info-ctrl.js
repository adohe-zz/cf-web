'use strict';

angular.module('slb.page')
.controller('ServiceInfoCtrl', function($scope, $modalInstance, _, service) {

  $scope.service = service;

  $scope.close = function() {

  };
});
