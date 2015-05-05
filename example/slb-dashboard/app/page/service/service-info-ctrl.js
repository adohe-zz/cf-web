'use strict';

angular.module('slb.page')
.controller('ServiceInfoCtrl', function($scope, $modalInstance, _, service, slbApiSvc) {

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
    console.log('click');
  };

  $scope.dropOut = function(instance) {
    console.log('dropout');
  };
});
