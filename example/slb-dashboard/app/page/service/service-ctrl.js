'use strict';

angular.module('slb.page')
.controller('ServiceCtrl', function($scope, $modal, slbApiSvc, pollerSvc) {

  $scope.currPath = '/';
  $scope.currNode = null;

  $scope.fetchService = function() {

  };

  $scope.openCreateModal = function() {

  };

  $scope.rowClick = function() {

  };

  pollerSvc.register('servicePoller', {
    fn: $scope.fetchService,
    scope: $scope
  });
});
