'use strict';

angular.module('slb.page')
.controller('InstancesCtrl', function($scope, $modal, slbApiSvc, pollerSvc, pathSvc) {

  $scope.fetchInstances = function() {
    return slbApiSvc.fetch().
      then(function(service) {
        $scope.service = service;
    });
  };

  $scope.rowClick = function(service) {

  };

  pollerSvc.register('instancesPoller', {
    fn: $scope.fetchService,
    scope: $scope,
    interval: 60 * 1000
  });
});
