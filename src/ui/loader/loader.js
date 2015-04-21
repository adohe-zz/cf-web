/**
 *
 * Loading indicator that centers itself inside its parent.
 */

angular.module('cf.ui')

.directive('cfLoader', function() {
  'use strict';

  return {
    templateUrl: '/cf.ui/loader/loader.html',
    restrict: 'E',
    replace: true
  };
})

.directive('cfInlineLoader', function() {
  'use strict';

  return {
    templateUrl: '/cf.ui/loader/inline-loader.html',
    restrict: 'E',
    replace: true
  };
});
