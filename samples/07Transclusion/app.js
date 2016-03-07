(function() {
  'use strict';
  angular.module('myApp', ['ngAnimate'])
    .component('myBox', {
      templateUrl: 'mybox.html',
      transclude: {
        'headerSlot': 'header'
      }
    });
})();