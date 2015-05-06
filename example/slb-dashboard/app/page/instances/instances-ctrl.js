'use strict';

angular.module('slb.page')
.controller('InstancesCtrl', function($scope, $modal, slbApiSvc, pollerSvc, pathSvc, toastSvc) {

  $scope.toastSvc = toastSvc;

  $scope.fetchInstances = function() {
    return slbApiSvc.fetchInstances().
      then(function(instances) {
        $scope.instances = instances;
    });
  };

  $scope.rowClick = function(instances) {

  };

  $scope.checkIn = function(instance) {
    slbApiSvc.checkIn(instance)
      .then(function(ack) {
        if(ack === 'Success') {
          $scope.refreshInstances();
        } else {
          toastSvc.error('request error');
        }
      });
  };

  $scope.refreshInstances = function() {
      slbApiSvc.fetchInstances()
        .then(function(instances) {
          $scope.instances = instances;
        });
  };

  pollerSvc.register('instancesPoller', {
    fn: $scope.fetchInstances,
    scope: $scope,
    interval: 60 * 1000
  });
});
