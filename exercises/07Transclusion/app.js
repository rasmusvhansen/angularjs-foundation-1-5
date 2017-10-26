(function() {
  'use strict';
  angular.module('myApp', ['ngAnimate'])
    .component('group', {
      templateUrl: 'group.html'
      // Note that names of transclusion elements must be camel-cased, e.g groupLabel instead of group-label
    });
})();
