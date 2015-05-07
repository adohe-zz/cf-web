/**
 * Highlight an item when its bound data changes.
 */


angular.module('cf.ui')
.directive('cfHighlight', function(highlighterSvc) {
  'use strict';

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {

      scope.$watch(attrs.cfHighlight, function(newValue, oldValue) {
        if (newValue !== oldValue) {
          highlighterSvc.highlight(elem);
        }
      });

    }
  };

});
