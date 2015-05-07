'use strict';

angular.module('slb.page')
.controller('InstancesCtrl', function($scope, $rootScope, slbApiSvc, pollerSvc, pathSvc, toastSvc,
        CF_EVENT) {

  $scope.toastSvc = toastSvc;

  $scope.fetchInstances = function() {
    return slbApiSvc.fetchInstances().
      then(function(instances) {
        $scope.instances = instances;
    }, function(reason) {
        $rootScope.$broadcast(CF_EVENT.POLL_ERROR);
    });
  };

  $scope.checkIn = function(instance) {
    return slbApiSvc.checkIn(instance)
    .then(function(ack) {
      if(ack === 'Success') {
        $scope.refreshInstances();
      } else {
        toastSvc.error('update server status ack failure');
      }
    }, function(reason) {
        toastSvc.error('request error');
    });
  };

  $scope.refreshInstances = function() {
    $scope.fetchInstances();
  };

  pollerSvc.register('instancesPoller', {
    fn: $scope.fetchInstances,
    scope: $scope,
    interval: 60 * 1000
  });
});
