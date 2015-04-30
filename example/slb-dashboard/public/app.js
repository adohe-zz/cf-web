(function(module) {
try {
  module = angular.module('templates-views');
} catch (e) {
  module = angular.module('templates-views', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/page/instances/instances.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-views');
} catch (e) {
  module = angular.module('templates-views', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/page/service/service-info.html',
    '<div class="ed-p-node-info">\n' +
    '\n' +
    '  <div class="modal-header">\n' +
    '    <h4 class="modal-title">Service Details</h4>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="modal-body">\n' +
    '    <table id="ed-m-property-table" class="table">\n' +
    '      <thead>\n' +
    '        <tr>\n' +
    '          <th>property</th>\n' +
    '          <th>value</th>\n' +
    '        </tr>\n' +
    '      </thead>\n' +
    '      <tbody>\n' +
    '        <tr ng-repeat="key in objectKeys | orderBy:identityFn">\n' +
    '          <td>{{key}}</td>\n' +
    '          <td>{{node[key]}}</td>\n' +
    '        </tr>\n' +
    '      </tbody>\n' +
    '    </table>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="modal-footer">\n' +
    '    <button type="button" ng-click="close()" class="btn btn-primary">Close</button>\n' +
    '  </div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-views');
} catch (e) {
  module = angular.module('templates-views', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/page/service/service.html',
    '<div class="ed-p-browser">\n' +
    '\n' +
    '  <cf-nav-title title="Services">\n' +
    '    <a ng-click="openCreateModal()" href="#" class="cf-m-primary-action">\n' +
    '      <cf-svg class="cf-img-icon cf-img-icon-light" src="/cf.svg/icon-add.svg"></cf-svg>Create Node</a>\n' +
    '  </cf-nav-title>\n' +
    '\n' +
    '    <div class="panel cf-m-panel cf-fx-box-shadow-heavy">\n' +
    '      <div class="panel-body">\n' +
    '\n' +
    '        <div class="row">\n' +
    '          <div class="col-lg-12 col-md-12 col-sm-12">\n' +
    '\n' +
    '            <table class="table table-hover cf-m-table ed-m-node-table">\n' +
    '              <thead>\n' +
    '                <tr>\n' +
    '                  <th class="ed-m-node-table__cog-col">&nbsp;</th>\n' +
    '                  <th>Name</th>\n' +
    '                  <th class="ed-m-node-table__value-col">Namespace</th>\n' +
    '                  <th class="ed-m-node-table__ttl-col">Contacts</th>\n' +
    '                </tr>\n' +
    '              </thead>\n' +
    '              <tbody>\n' +
    '                <tr ng-repeat="service in service.services | orderBy:\'serviceName\' track by service.serviceName"\n' +
    '                ng-class="ed-m-node-table__node-row"\n' +
    '                ng-click="rowClick(service)"\n' +
    '                class="co-m-table-interact-entire-element">\n' +
    '                <td>\n' +
    '                  <ed-node-cog node="service"></ed-node-cog>\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                  <span class="co-m-table__constrain-content">{{truncateKey(service.serviceName)}}</span>\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                  <div class="co-m-table__constrain-content">\n' +
    '                    <span cf-highlight="service.serviceNamespace">{{service.serviceNamespace}}</span>\n' +
    '                  </div>\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                  <span cf-highlight="service.serviceContacts">{{service.serviceContacts}}</span>\n' +
    '                </td>\n' +
    '              </tr>\n' +
    '            </tbody>\n' +
    '          </table>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '      </div>\n' +
    '\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-views');
} catch (e) {
  module = angular.module('templates-views', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/page/node-cog.html',
    '<div>\n' +
    '  <cf-cog options="cogDropdownOptions" size="small" anchor="left"></cf-cog>\n' +
    '</div>\n' +
    '');
}]);
})();

'use strict';

angular.module('slb.module', []);
angular.module('slb.ui', []);
angular.module('slb.page', []);

// The main slb dashboard module.
var slbDashboard = angular.module('slb.dashboard', [
  'cf',
  'slb.module',
  'slb.ui',
  'slb.page',
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'ui.bootstrap',
  'templates-views',
  'underscore',
  'jquery',
]);

// Routes
slbDashboard.config(function($routeProvider, $locationProvider, $httpProvider,
    $compileProvider, errorMessageSvcProvider,
    configSvcProvider) {

  var siteBasePath = '/dashboard';

  // Make routes less verbose.
  function path(suffix) {
    return siteBasePath + suffix;
  }

  // cf-web config.
  configSvcProvider.config({
    siteBasePath: siteBasePath,
    libPath: '/dashboard/static/cf-web'
  });

  // Use HTML5 push state.
  $locationProvider.html5Mode(true);

  // Parse error messages from the api.
  errorMessageSvcProvider.registerFormatter('slbApi', function(resp) {
    if (resp.data && resp.data.message) {
      return resp.data.message;
    }
    return 'An error occurred.';
  });

  // Emit event for any request error.
  $httpProvider.interceptors.push('interceptorErrorSvc');

  // Configure routes.
  $routeProvider
    .when(path('/'), {
      redirectTo: path('/service')
    })
    .when(path('/service'), {
      controller: 'ServiceCtrl',
      templateUrl: '/page/service/service.html',
      title: 'Key Service'
    })
    .when(path('/instances'), {
      controller: 'InstancesCtrl',
      templateUrl: '/page/instances/instances.html',
      title: 'Instances'
    })
    .otherwise({
      templateUrl: '/404.html',
      title: 'Page Not Found (404)'
    });

})

// After bootstrap initialization.
.run(function($http, $rootScope, $location, $window, $route, _, configSvc,
      toastSvc, CF_EVENT) {

  // Show toast when poller fails.
  $rootScope.$on(CF_EVENT.POLL_ERROR, function() {
    toastSvc.error('Error polling for data.');
  });

  // Show toast for any non-suppressed http response errors.
  $rootScope.$on(CF_EVENT.RESP_ERROR, function(e, rejection) {
    var errorMsg = 'Request Error';
    if (rejection.data && rejection.data.message) {
      errorMsg = rejection.data.message;
    }
    toastSvc.error(errorMsg);
  });

  // Redirect to 404 page if event is thrown.
  $rootScope.$on(CF_EVENT.PAGE_NOT_FOUND, function() {
    $location.url(configSvc.get().siteBaseUrl + '/404');
  });

});

'use strict';

angular.module('slb.module')
.factory('pathSvc', function() {

  var keyPrefix = '/v1/services/',
      statsPrefix = '/v1/instances/';

  return {

    clean: function(path) {
      var parts = this.explode(path);
      if (parts.length === 0) {
        return '';
      }
      return parts.join('/');
    },

    make: function(arr) {
      return '/' + arr.join('/');
    },

    explode: function(str) {
      var parts = str.split('/');
      parts = parts.filter(function(v) {
        return v !== '';
      });
      return parts;
    },

    /**
     * Get the last segment of a path.
     */
    tail: function(path) {
      var parts = this.explode(path);
      if (parts.length) {
        return parts[parts.length-1];
      }
      return '/';
    },

    truncate: function(path, maxlen) {
      var prefix = '/..';
      maxlen = maxlen || 10;
      if (!path || !path.length) {
        return '';
      }
      if (path.length <= maxlen) {
        return path;
      }
      return prefix +
        path.substring(path.length - maxlen + prefix.length, path.length);
    },

    getFullServicePath: function() {
      var path = '/' + this.clean(keyPrefix);
      if (path === keyPrefix.substring(0, keyPrefix.length - 1)) {
        return keyPrefix;
      }
      return path;
    },

    getHost: function() {
      return "http://127.0.0.1:8088";
    }
  };

});

'use strict';

angular.module('slb.module')
.factory('slbApiSvc', function($http, $q, $, _, pathSvc) {

  function createNode(node) {
  }

  function saveNode(node) {
  }

  function deleteNode(node) {
  }

  function fetchNode() {
    return $http.get(pathSvc.getHost() + pathSvc.getFullServicePath(), {
      supressNotifications: true
    })
    .then(function(resp) {
      return resp.data.service;
    });
  }

  return {
    fetch: fetchNode,

    create: createNode,

    save: saveNode,

    delete: deleteNode
  };

});

'use strict';

angular.module('slb.page')
.controller('ServiceCtrl', function($scope, $modal, slbApiSvc, pollerSvc, pathSvc) {

  $scope.currPath = '/';
  $scope.currNode = null;

  $scope.truncateKey = function(key) {
      return pathSvc.tail(key);
  };

  $scope.fetchService = function() {
    return slbApiSvc.fetch().
      then(function(service) {
        $scope.service = service;
    });
  };

  $scope.openCreateModal = function() {

  };

  $scope.rowClick = function(service) {

  };

  pollerSvc.register('servicePoller', {
    fn: $scope.fetchService,
    scope: $scope,
    interval: 60 * 1000
  });
});

'use strict';

angular.module('slb.page')
.controller('ServiceInfoCtrl', function($scope, $modalInstance, _, service) {

  $scope.service = service;

  $scope.close = function() {

  };
});

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
