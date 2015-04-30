'use strict';

angular.module('slb.ui')
.directive('edNodeCog', function($modal, $rootScope, slbApiSvc,
      CF_EVENT) {

  return {
    templateUrl: '/page/node-cog.html',
    restrict: 'E',
    replace: true,
    scope: {
      'node': '='
    },
    controller: function($scope){

      // Dropdown Options
      $scope.cogDropdownOptions = [
        {
          label: 'View Service Details...',
          callback: function() {
            $modal.open({
              templateUrl: '/page/service/service-info.html',
              controller: 'ServiceInfoCtrl',
              resolve: {
                node: d3.functor($scope.node)
              }
            });
          },
          weight: 100
        }
      ];
    }
  };
});
