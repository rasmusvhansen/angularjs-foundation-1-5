(function() {
  'use strict';
  angular
    .module('myApp', ['ui.router'])
    .controller('ListOneController', function(videos) {
      this.items = videos;
    })
    .factory('videoService', function($http) {});
})();
