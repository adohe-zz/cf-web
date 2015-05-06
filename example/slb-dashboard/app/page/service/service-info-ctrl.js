'use strict';

angular.module('slb.page')
.controller('ServiceInfoCtrl', function($scope, $modalInstance, _, service, slbApiSvc, toastSvc) {

  $scope.toastSvc = toastSvc;

  $scope.service = service;

  $scope.objectKeys = _.without(_.keys(service), 'endpointList');

  $scope.identityFn = _.identity;

  slbApiSvc.fetchServiceInstances(service)
  .then(function(instances) {
      $scope.instances = instances;
  });

  $scope.close = function() {
    $modalInstance.dismiss('close');
  };

  $scope.checkHealth = function(instance) {
    slbApiSvc.checkHealth(instance.url)
    .then(function(status) {
      if(status.ack === 'Success') {
        toastSvc.info('service is ok');
      } else {
        toastSvc.error('service is not ok');
      }
    });
  };

  $scope.dropOut = function(instance) {
    slbApiSvc.dropOut(instance)
    .then(function(ack) {
      if(ack === 'Success') {
        $scope.refreshInstances();
      } else {
        toastSvc.error("drop out failed");
      }
    });
  };

  $scope.refreshInstances = function() {
    slbApiSvc.fetchServiceInstances(service)
    .then(function(instances) {
      $scope.instances = instances;
    });
  };
});
