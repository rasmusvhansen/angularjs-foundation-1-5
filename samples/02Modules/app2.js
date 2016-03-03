/*(function() {
  'use strict';
  // Add app, add constant, set properties on rootscope in run     
  angular.module('myApp', ['myApp.core'])
    .run(['VERSION', '$rootScope',
    function(VERSION, $rootScope) {
      $rootScope.version = VERSION;
      $rootScope.name = 'hello there';
      $rootScope.klass = 'red';
    }
  ]);
  
  angular.module('myApp.core', [])
    .constant('VERSION', '1.0');
})();*/