/**
 * Display a cog icon and construct dropdown menu.
 */

angular.module('cf.ui')
.directive('cfCog', function() {
  'use strict';

  return {
    templateUrl: '/cf.ui/cog/cog.html',
    restrict: 'E',
    replace: true,
    scope: {
      'options': '=',
      'size': '@',
      'anchor': '@'
    },
    controller: function($scope) {
      $scope.status = {
        isopen: false,
      };

      // Capture all clicks on the cog to prevent bubbling.
      $scope.captureClick = function($event) {
        $event.stopPropagation();
      };

      // Handles dropdown item clicks.
      $scope.clickHandler = function($event, option) {
        $event.preventDefault();
        $event.stopPropagation();
        if (option.callback) {
          option.callback();
        }
        $scope.status.isopen = false;
      };
    }
  };

});
