'use strict';

angular.module('slb.ui')
.directive('edServiceCog', function($modal, $rootScope) {

  return {
    templateUrl: '/page/service-cog.html',
    restrict: 'E',
    replace: true,
    scope: {
      'service': '='
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
                service: d3.functor($scope.service)
              }
            });
          },
          weight: 100
        }
      ];
    }
  };
});
