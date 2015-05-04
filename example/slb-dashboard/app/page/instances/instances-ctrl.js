'use strict';

angular.module('slb.page')
.controller('InstancesCtrl', function($scope, $modal, slbApiSvc, pollerSvc, pathSvc) {

  $scope.currPath = '/';
  $scope.currNode = null;

  $scope.truncateKey = function(key) {
      return pathSvc.tail(key);
  };

  $scope.fetchService = function() {
    return slbApiSvc.fetch().
      then(function(service) {
        $scope.service = service;
    });
  };

  $scope.openCreateModal = function() {

  };

  $scope.rowClick = function(service) {

  };

  pollerSvc.register('instancesPoller', {
    fn: $scope.fetchService,
    scope: $scope,
    interval: 60 * 1000
  });
});
