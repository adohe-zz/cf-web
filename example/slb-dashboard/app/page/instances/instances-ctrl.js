'use strict';

angular.module('slb.page')
.controller('InstancesCtrl', function($scope, $modal, slbApiSvc, pollerSvc, pathSvc) {

  $scope.fetchInstances = function() {
    return slbApiSvc.fetchInstances().
      then(function(instances) {
        $scope.instances = instances;
    });
  };

  $scope.rowClick = function(instances) {

  };

  $scope.checkIn = function(instance) {
  };

  pollerSvc.register('instancesPoller', {
    fn: $scope.fetchInstances,
    scope: $scope,
    interval: 60 * 1000
  });
});
