'use strict';

angular.module('slb.page')
.controller('ServiceCtrl', function($scope, $rootScope, slbApiSvc, pollerSvc, pathSvc, CF_EVENT) {

  $scope.truncateKey = function(key) {
      return pathSvc.tail(key);
  };

  $scope.fetchService = function() {
    return slbApiSvc.fetchServicesList()
    .then(function(services) {
        $scope.services = services;
    }, function(reason) {
        $rootScope.$broadcast(CF_EVENT.POLL_ERROR);
    });
  };

  pollerSvc.register('servicePoller', {
    fn: $scope.fetchService,
    scope: $scope,
    interval: 60 * 1000
  });
});
