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
