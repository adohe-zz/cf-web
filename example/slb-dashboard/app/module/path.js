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
      return '/' + this.clean(instancePrefix) + '/' + env + '/' + ip.replace(/./g, '_');
    },

    getHost: function() {
      return "http://127.0.0.1:8088";
    }
  };

});
