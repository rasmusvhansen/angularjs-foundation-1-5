(function() {
  'use strict';
  describe('my app module', function() {
    beforeEach(module('myApp'));
    beforeEach(module('myApp.core'));
    
    it('should create a module myApp', function() {
      expect(angular.module('myApp')).toBeDefined();
    });
    
    it('should create a module myApp.core', function() {
      expect(angular.module('myApp.core')).toBeDefined();
    });
    
    it('should create a version Constant', function() {
      var version;
      // see https://docs.angularjs.org/api/ngMock/function/angular.mock.inject
      inject(function(VERSION) {
        version = VERSION;
      });
      expect(version).toBe('1.0');
    });
  });
})();