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

    angular.module('cf.events', []);

    angular.module('cf.ui', [
            'cf.events',
            'jquery',
            'd3',
            'moment',
            'underscore',
            'ui.bootstrap'
    ]);

    angular.module('cf.services', [
            'cf.events',
            'underscore',
            'jquery'
    ]);

    angular.module('cf.filters', ['underscore']);

    angular.module('cf', [
            'cf.events',
            'cf.ui',
            'cf.services',
            'cf.filters',
            'cf-templates-html',
            'cf-templates-svg',

            'ngRoute',
            'ngAnimate',
    ]);
}());
