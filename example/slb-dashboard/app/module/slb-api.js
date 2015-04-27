'use strict';

angular.module('slb.module')
.factory('slbApiSvc', function($http, $q, $, _) {

  function createNode(node) {
  }

  function saveNode(node) {
  }

  function deleteNode(node) {
  }

  function fetchNode(key) {
  }

  return {
    fetch: fetchNode,

    create: createNode,

    save: saveNode,

    delete: deleteNode
  };

});
