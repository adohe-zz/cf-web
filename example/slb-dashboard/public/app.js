(function(module) {
try {
  module = angular.module('templates-views');
} catch (e) {
  module = angular.module('templates-views', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/page/instances/instances.html',
    '<div class="ed-p-instances">\n' +
    '  <cf-toast></cf-toast>\n' +
    '  <cf-nav-title title="Instances"></cf-nav-title>\n' +
    '\n' +
    '  <div class="row">\n' +
    '\n' +
    '    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n' +
    '      <div class="panel cf-m-panel cf-fx-box-shadow-heavy">\n' +
    '        <div class="panel-body">\n' +
    '          <div class="ed-p-instances__fws-container">\n' +
    '            <h2>FWS</h2>\n' +
    '          </div>\n' +
    '\n' +
    '          <h2>Instances</h2>\n' +
    '          <table class="table cf-m-table ed-m-instance-table">\n' +
    '            <thead>\n' +
    '              <tr>\n' +
    '                <th class="ed-m-instance-table__ip-col">IP</th>\n' +
    '                <th>Action</th>\n' +
    '              </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '              <tr ng-repeat="instance in instances.fws">\n' +
    '                <td>\n' +
    '                  <a href="#" ng-bind="instance.ip"></a>\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                  <a ng-click="checkIn(instance)" href="#" class="cf-m-primary-action">Check In</a>\n' +
    '                </td>\n' +
    '              </tr>\n' +
    '            </tbody>\n' +
    '          </table>\n' +
    '\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n' +
    '      <div class="panel cf-m-panel cf-fx-box-shadow-heavy">\n' +
    '        <div class="panel-body">\n' +
    '          <div class="ed-p-instances__uat-container">\n' +
    '            <h2>UAT</h2>\n' +
    '          </div>\n' +
    '\n' +
    '          <h2>Instances</h2>\n' +
    '          <table class="table cf-m-table ed-m-instance-table">\n' +
    '            <thead>\n' +
    '              <tr>\n' +
    '                <th class="ed-m-instance-table__ip-col">IP</th>\n' +
    '                <th>Action</th>\n' +
    '              </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '              <tr ng-repeat="instance in instances.uat">\n' +
    '                <td>\n' +
    '                  <a href="#" ng-bind="instance.ip"></a>\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                  <a ng-click="checkIn(instance)" href="#" class="cf-m-primary-action">Check In</a>\n' +
    '                </td>\n' +
    '              </tr>\n' +
    '            </tbody>\n' +
    '          </table>\n' +
    '\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n' +
    '      <div class="panel cf-m-panel cf-fx-box-shadow-heavy">\n' +
    '        <div class="panel-body">\n' +
    '          <div class="ed-p-instances__prod-container">\n' +
    '            <h2>PROD</h2>\n' +
    '          </div>\n' +
    '\n' +
    '          <h2>Instances</h2>\n' +
    '          <table class="table cf-m-table ed-m-instance-table">\n' +
    '            <thead>\n' +
    '              <tr>\n' +
    '                <th class="ed-m-instance-table__ip-col">IP</th>\n' +
    '                <th>Action</th>\n' +
    '              </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '              <tr ng-repeat="instance in instances.prod">\n' +
    '                <td>\n' +
    '                  <a href="#" ng-bind="instance.ip"></a>\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                  <a ng-click="checkIn(instance)" href="#" class="cf-m-primary-action">Check In</a>\n' +
    '                </td>\n' +
    '              </tr>\n' +
    '            </tbody>\n' +
    '          </table>\n' +
    '\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </div>\n' +
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
  $templateCache.put('/page/service/service-info.html',
    '<div class="ed-p-service-info">\n' +
    '\n' +
    '  <div class="modal-header">\n' +
    '    <h4 class="modal-title">Service Details</h4>\n' +
    '    <cf-toast></cf-toast>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="modal-body">\n' +
    '      <div class="row">\n' +
    '          <div class="col-lg-12">\n' +
    '            <div class="panel cf-m-panel cf-fx-box-shadow-heavy">\n' +
    '              <div class="panel-body">\n' +
    '                <div class="ed-p-instances__env-container">\n' +
    '                  <h2>FWS</h2>\n' +
    '                </div>\n' +
    '\n' +
    '                <h2>Instances</h2>\n' +
    '                <table class="table cf-m-table">\n' +
    '                  <thead>\n' +
    '                    <tr>\n' +
    '                      <th>URL</th>\n' +
    '                      <th>Status</th>\n' +
    '                      <th>&nbsp;</th>\n' +
    '                      <th>&nbsp;</th>\n' +
    '                    </tr>\n' +
    '                  </thead>\n' +
    '                  <tbody>\n' +
    '                    <tr ng-repeat="instance in instances.fws | orderBy:\'url\' track by instance.url">\n' +
    '                      <td>\n' +
    '                        <a href="#" ng-bind="instance.url"></a>\n' +
    '                      </td>\n' +
    '                      <td>\n' +
    '                        <span ng-highlight="instance.status">{{instance.status}}</span>\n' +
    '                      </td>\n' +
    '                      <td>\n' +
    '                        <a ng-click="checkHealth(instance)" href="#" class="cf-m-primary-action">\n' +
    '                        <cf-svg class="cf-img-icon cf-img-icon-light" src="/cf.svg/icon-add.svg"></cf-svg>Check</a>\n' +
    '                      </td>\n' +
    '                      <td>\n' +
    '                        <a ng-click="dropOut(instance)" href="#" class="cf-m-primary-action">\n' +
    '                        <cf-svg class="cf-img-icon cf-img-icon-light" src="/cf.svg/icon-add.svg"></cf-svg>Drop</a>\n' +
    '                      </td>\n' +
    '                    </tr>\n' +
    '                  </tbody>\n' +
    '                </table>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="col-lg-12">\n' +
    '            <div class="panel cf-m-panel cf-fx-box-shadow-heavy">\n' +
    '              <div class="panel-body">\n' +
    '                <div class="ed-p-instances__env-container">\n' +
    '                  <h2>UAT</h2>\n' +
    '                </div>\n' +
    '\n' +
    '                <h2>Instances</h2>\n' +
    '                <table class="table cf-m-table">\n' +
    '                  <thead>\n' +
    '                    <tr>\n' +
    '                      <th>URL</th>\n' +
    '                      <th>Status</th>\n' +
    '                      <th>&nbsp;</th>\n' +
    '                      <th>&nbsp;</th>\n' +
    '                    </tr>\n' +
    '                  </thead>\n' +
    '                  <tbody>\n' +
    '                    <tr ng-repeat="instance in instances.uat | orderBy:\'url\' track by instance.url">\n' +
    '                      <td>\n' +
    '                        <a href="#" ng-bind="instance.url"></a>\n' +
    '                      </td>\n' +
    '                      <td>\n' +
    '                        <span ng-highlight="instance.status">{{instance.status}}</span>\n' +
    '                      </td>\n' +
    '                      <td>\n' +
    '                        <a ng-click="checkHealth(instance)" href="#" class="cf-m-primary-action">\n' +
    '                        <cf-svg class="cf-img-icon cf-img-icon-light" src="/cf.svg/icon-add.svg"></cf-svg>Check</a>\n' +
    '                      </td>\n' +
    '                      <td>\n' +
    '                        <a ng-click="dropOut(instance)" href="#" class="cf-m-primary-action">\n' +
    '                        <cf-svg class="cf-img-icon cf-img-icon-light" src="/cf.svg/icon-add.svg"></cf-svg>Drop</a>\n' +
    '                      </td>\n' +
    '                    </tr>\n' +
    '                  </tbody>\n' +
    '                </table>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="col-lg-12">\n' +
    '            <div class="panel cf-m-panel cf-fx-box-shadow-heavy">\n' +
    '              <div class="panel-body">\n' +
    '                <div class="ed-p-instances__env-container">\n' +
    '                  <h2>PROD</h2>\n' +
    '                </div>\n' +
    '\n' +
    '                <h2>Instances</h2>\n' +
    '                <table class="table cf-m-table">\n' +
    '                  <thead>\n' +
    '                    <tr>\n' +
    '                      <th>URL</th>\n' +
    '                      <th>Status</th>\n' +
    '                      <th>&nbsp;</th>\n' +
    '                      <th>&nbsp;</th>\n' +
    '                    </tr>\n' +
    '                  </thead>\n' +
    '                  <tbody>\n' +
    '                    <tr ng-repeat="instance in instances.prod | orderBy:\'url\' track by instance.url">\n' +
    '                      <td>\n' +
    '                        <a href="#" ng-bind="instance.url"></a>\n' +
    '                      </td>\n' +
    '                      <td>\n' +
    '                        <span ng-highlight="instance.status">{{instance.status}}</span>\n' +
    '                      </td>\n' +
    '                      <td>\n' +
    '                        <a ng-click="checkHealth(instance)" href="#" class="cf-m-primary-action">\n' +
    '                        <cf-svg class="cf-img-icon cf-img-icon-light" src="/cf.svg/icon-add.svg"></cf-svg>Check</a>\n' +
    '                      </td>\n' +
    '                      <td>\n' +
    '                        <a ng-click="dropOut(instance)" href="#" class="cf-m-primary-action">\n' +
    '                        <cf-svg class="cf-img-icon cf-img-icon-light" src="/cf.svg/icon-add.svg"></cf-svg>Drop</a>\n' +
    '                      </td>\n' +
    '                    </tr>\n' +
    '                  </tbody>\n' +
    '                </table>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '      </div>\n' +
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
    '<div class="ed-p-services">\n' +
    '\n' +
    '  <cf-nav-title title="Services"></cf-nav-title>\n' +
    '\n' +
    '    <div class="panel cf-m-panel cf-fx-box-shadow-heavy">\n' +
    '      <div class="panel-body">\n' +
    '\n' +
    '        <div class="row">\n' +
    '          <div class="col-lg-12 col-md-12 col-sm-12">\n' +
    '\n' +
    '            <table class="table table-hover cf-m-table ed-m-service-table">\n' +
    '              <thead>\n' +
    '                <tr>\n' +
    '                  <th class="ed-m-service-table__cog-col">&nbsp;</th>\n' +
    '                  <th>ServiceName</th>\n' +
    '                  <th class="ed-m-service-table__namespace-col">ServiceNamespace</th>\n' +
    '                  <th class="ed-m-service-table__contacts-col">Contacts</th>\n' +
    '                </tr>\n' +
    '              </thead>\n' +
    '              <tbody>\n' +
    '                <tr ng-repeat="service in services | orderBy:\'serviceName\' track by service.serviceName"\n' +
    '                ng-class="ed-m-service-table__node-row"\n' +
    '                class="cf-m-table-interact-entire-element">\n' +
    '                <td>\n' +
    '                  <ed-service-cog service="service"></ed-service-cog>\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                  <span class="cf-m-table__constrain-content">{{truncateKey(service.serviceName)}}</span>\n' +
    '                </td>\n' +
    '                <td>\n' +
    '                  <div class="cf-m-table__constrain-content">\n' +
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
  $templateCache.put('/page/service-cog.html',
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
  'd3'
]);

// Routes
slbDashboard.config(function($routeProvider, $locationProvider, $httpProvider,
    $compileProvider, pollerSvcProvider, errorMessageSvcProvider,
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

  // Poller settings.
  pollerSvcProvider.settings({
    interval: 5000,
    maxRetries: 5
  });

  // Configure routes.
  $routeProvider
    .when(path('/'), {
      redirectTo: path('/service')
    })
    .when(path('/service'), {
      controller: 'ServiceCtrl',
      templateUrl: '/page/service/service.html',
      title: 'Services'
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
      instancesPrefix = '/v1/instances/',
      servicePrefix = '/v1/service/',
      instancePrefix = '/v1/instance/';

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

    getServicesListPath: function() {
      var path = '/' + this.clean(keyPrefix);
      if (path === keyPrefix.substring(0, keyPrefix.length - 1)) {
        return keyPrefix;
      }
      return path;
    },

    getServiceInstancesPath: function(name, namespace) {
      return '/' + this.clean(servicePrefix) + '/' + name + '/' + namespace.replace(/\//g, '_');
    },

    getInstancesPath: function() {
      return '/' + this.clean(instancesPrefix);
    },

    getInstancePath: function() {
      return '/' + this.clean(instancePrefix);
    },

    getDropOutInstancePath: function(env, ip) {
      return '/' + this.clean(instancePrefix) + '/' + env + '/' + ip.replace(/\./g, '_');
    },

    getHost: function() {
      return "http://127.0.0.1:8088";
    }
  };

});

'use strict';

angular.module('slb.module')
.factory('slbApiSvc', function($http, $q, $, _, pathSvc) {

  function fetchServicesList() {
    return $http.get(pathSvc.getHost() + pathSvc.getServicesListPath(), {
      supressNotifications: true
    })
    .then(function(resp) {
      return resp.data.services;
    });
  }

  function fetchServiceInstances(service) {
    return $http.get(pathSvc.getHost() + pathSvc.getServiceInstancesPath(service.serviceName, service.serviceNamespace), {
      supressNotifications: true
    })
    .then(function(resp) {
      return resp.data.instances;
    });
  }

  function fetchInstances() {
    return $http.get(pathSvc.getHost() + pathSvc.getInstancesPath(), {
      supressNotifications: true
    })
    .then(function(resp) {
      return resp.data.instances;
    });
  }

  function checkHealth(url) {
    return $http.post(pathSvc.getHost() + pathSvc.getInstancePath(), {
      url: url
    })
    .then(function(resp) {
      return resp.data.status;
    });
  }

  function dropOut(instance) {
    var ip = instance.url.substring(instance.url.indexOf(':') + 3, instance.url.lastIndexOf(':'));
    return $http.delete(pathSvc.getHost() + pathSvc.getDropOutInstancePath(instance.env, ip))
      .then(function(resp) {
        return resp.data.ack;
      });
  }

  function checkIn(instance) {
    return $http.put(pathSvc.getHost() + pathSvc.getInstancePath(), {
      ip: instance.ip,
      env: instance.env
    })
    .then(function(resp) {
      return resp.data.ack;
    });
  }

  return {
    fetchServicesList: fetchServicesList,

    fetchServiceInstances: fetchServiceInstances,

    fetchInstances: fetchInstances,

    checkHealth: checkHealth,

    dropOut: dropOut,

    checkIn: checkIn
  };

});

'use strict';

angular.module('slb.module').constant('SLB_EVENT', {
  INSTANCE_DROPOUT: 'slb.instance_dropout',
  INSTANCE_CHECKIN: 'slb.instance_checkin'
});

'use strict';

angular.module('slb.page')
.controller('InstancesCtrl', function($scope, $rootScope, slbApiSvc, pollerSvc, pathSvc, toastSvc,
        CF_EVENT) {

  $scope.toastSvc = toastSvc;

  $scope.fetchInstances = function() {
    return slbApiSvc.fetchInstances().
      then(function(instances) {
        $scope.instances = instances;
    }, function(reason) {
        $rootScope.$broadcast(CF_EVENT.POLL_ERROR);
    });
  };

  $scope.checkIn = function(instance) {
    return slbApiSvc.checkIn(instance)
    .then(function(ack) {
      if(ack === 'Success') {
        $scope.refreshInstances();
      } else {
        toastSvc.error('update server status ack failure');
      }
    }, function(reason) {
        toastSvc.error('request error');
    });
  };

  $scope.refreshInstances = function() {
    $scope.fetchInstances();
  };

  pollerSvc.register('instancesPoller', {
    fn: $scope.fetchInstances,
    scope: $scope,
    interval: 60 * 1000
  });
});

'use strict';

angular.module('slb.page')
.controller('ServiceCtrl', function($scope, $rootScope, slbApiSvc, pollerSvc, pathSvc, CF_EVENT) {

  $scope.truncateKey = function(key) {
      return pathSvc.tail(key);
  };

  $scope.fetchService = function() {
    return slbApiSvc.fetchServicesList()
    .then(function(services) {
        $scope.services = services;
    }, function(reason) {
        $rootScope.$broadcast(CF_EVENT.POLL_ERROR);
    });
  };

  pollerSvc.register('servicePoller', {
    fn: $scope.fetchService,
    scope: $scope,
    interval: 60 * 1000
  });
});

'use strict';

angular.module('slb.page')
.controller('ServiceInfoCtrl', function($scope, $modalInstance, _, service, slbApiSvc, toastSvc) {

  $scope.toastSvc = toastSvc;

  $scope.service = service;

  $scope.objectKeys = _.without(_.keys(service), 'endpointList');

  $scope.identityFn = _.identity;

  slbApiSvc.fetchServiceInstances(service)
  .then(function(instances) {
      $scope.instances = instances;
  });

  $scope.close = function() {
    $modalInstance.dismiss('close');
  };

  $scope.checkHealth = function(instance) {
    return slbApiSvc.checkHealth(instance.url)
    .then(function(status) {
      if(status.ack === 'Success') {
        toastSvc.info('service is ok');
      } else {
        toastSvc.error('service is not ok');
      }
    });
  };

  $scope.dropOut = function(instance) {
    return slbApiSvc.dropOut(instance)
    .then(function(ack) {
      if(ack === 'Success') {
        console.log('refresh');
        $scope.refreshInstances();
      } else {
        toastSvc.error("drop out failed");
      }
    });
  };

  $scope.refreshInstances = function() {
    $scope.fetchInstances();
  };

  $scope.fetchInstances = function() {
    return slbApiSvc.fetchServiceInstances(service)
    .then(function(instances) {
      console.log(instances);
      $scope.instances = instances;
    });
  };
});

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
