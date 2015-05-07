'use strict';

angular.module('slb.page')
.controller('ServiceInfoCtrl', function($scope, $modalInstance, _, service, slbApiSvc, toastSvc) {

  $scope.toastSvc = toastSvc;

  $scope.service = service;

  slbApiSvc.fetchServiceInstances(service)
  .then(function(instances) {
      $scope.instances = instances;
  });

  $scope.close = function() {
    $modalInstance.dismiss('close');
  };

  $scope.checkHealth = function(instance) {
    if(instance.status === 'Down') {
      toastSvc.error('the service is down already');
      return;
    }
    return slbApiSvc.checkHealth(instance.url)
    .then(function(status) {
      if(status.ack === 'Success') {
        toastSvc.info('service is ok');
      } else {
        toastSvc.error('service is not ok');
      }
    });
  };

  $scope.dropOut = function(instance) {
    return slbApiSvc.dropOut(instance)
    .then(function(ack) {
      if(ack === 'Success') {
        $scope.refreshInstances();
      } else {
        toastSvc.error("drop out failed");
      }
    });
  };

  $scope.refreshInstances = function() {
    $scope.fetchInstances();
  };

  $scope.fetchInstances = function() {
    return slbApiSvc.fetchServiceInstances(service)
    .then(function(instances) {
      $scope.instances = instances;
    });
  };
});
