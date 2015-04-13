/**
 * Display page title with primary action link.
 */

angular.module('cf.ui')
.directive('cfNavTitle', function() {
  'use strict';

  return {
    templateUrl: '/cf.ui/nav-title/nav-title.html',
    transclude: true,
    restrict: 'E',
    replace: true,
    scope: {
      title: '@'
    }
  };
});
