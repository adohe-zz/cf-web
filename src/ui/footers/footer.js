/**
 * Standard footer.
 *
 */

angular.module('cf.ui')

.directive('cfFooter', function() {
  'use strict';

  return {
    templateUrl: '/cf.ui/footer/footer.html',
    transclude: true,
    restrict: 'E',
    replace: true
  };
})

.directive('cfFooterLink', function() {
  'use strict';

  return {
    templateUrl: '/cf.ui/footer/footer-link.html',
    transclude: true,
    restrict: 'E',
    replace: true,
    scope: {
      href: '@',
      iconClass: '@'
    }
  };
})


/**
 * Convenience wrapper for doing sticky footers.
 */
.directive('cfFooterWrapper', function() {
  'use strict';

  return {
    templateUrl: '/cf.ui/footer/footer-wrapper.html',
    transclude: true,
    restrict: 'E',
    replace: true
  };

});
