(function() {
    'use strict';

    // define non-angular external dependencies
    angular.module('underscore', []).factory('_', function($window) {
        return $window._;
    });

    angular.module('jquery', []).factory('$', function($window) {
        return $window.$;
    });

    angular.module('d3', []).factory('d3', function($window) {
        return $window.d3;
    });

    angular.module('moment', []).factory('moment', function($window) {
        return $window.moment;
    });

    angular.module('cf.ui', []);

    angular.module('cf.service', []);

    angular.module('cf.filter', []);

    angular.module('cf', [
            "cf.ui",
            "cf.service",
            "cf.filter"
    ]);
}());
