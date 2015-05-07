/**
 * A toggle button.
 */


angular.module('cf.ui')

.directive('cfToggle', function() {
  'use strict';

  return {
    templateUrl: '/cf.ui/toggle/toggle.html',
    transclude: true,
    restrict: 'E',
    replace: true,
    scope: {
      value: '='
    },
    controller: function($scope) {
      this.setValue = function(val) {
        $scope.value = val;
      };

      this.getValue = function() {
        return $scope.value;
      };
    }
  };

})

.directive('cfToggleBtn', function() {
  'use strict';

  return {
    templateUrl: '/cf.ui/toggle/toggle-btn.html',
    transclude: true,
    restrict: 'E',
    replace: true,
    require: '^cfToggle',
    scope: {
      value: '@'
    },
    link: function(scope, elem, attrs, toggleCtrl) {

      elem.on('click', function(e) {
        scope.$apply(function() {
          toggleCtrl.setValue(scope.value);
        });
        e.preventDefault();
        e.stopPropagation();
      });

      scope.$watch(function() {
        return toggleCtrl.getValue();
      }, function(val) {
        if (scope.value === val) {
          elem.addClass('active btn-toggle-on')
              .removeClass('btn-toggle-off');
        } else {
          elem.removeClass('active btn-toggle-on')
              .addClass('btn-toggle-off');
        }
      });

      elem.on('$destroy', function() {
        elem.off('click');
      });

    }

  };

});
