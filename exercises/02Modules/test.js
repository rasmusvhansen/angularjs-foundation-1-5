(function() {
  describe('my app module', function() {
    var $rootScope;
    beforeEach(module('myApp.app'));
    beforeEach(module('myApp.core'));
    // see https://docs.angularjs.org/api/ngMock/function/angular.mock.inject
    
    beforeEach(inject(function(_$rootScope_) {
      $rootScope = _$rootScope_;
    }));
    
    it('should create a module myApp.app', function() {
      expect(angular.module('myApp.app')).toBeDefined();
    });
    
    it('should create a module myApp.core', function() {
      expect(angular.module('myApp.core')).toBeDefined();
    });
    
    it('should create a version Constant', function() {
      var version;
      inject(function(VERSION) {
        version = VERSION;
      });
      expect(version).toBe('1.0');
    });
    
    it('should expose version on rootScope', function() {
      expect($rootScope.version).toBe('1.0');
    });
    
    it('should expose todays date on rootScope', function() {
      expect($rootScope.todaysDate).toBeDefined();
      expect($rootScope.todaysDate instanceof Date).toBe(true);
    });
    
    describe('is before noon', function() {
      
      it('should be a function', function() {
        expect($rootScope.isBeforeNoon).toBeDefined();
        expect(typeof $rootScope.isBeforeNoon).toBe('function');
      });
      
      it('should return true before noon', function() {
        $rootScope.todaysDate = new Date(2015, 02, 19, 08);        
        expect($rootScope.isBeforeNoon()).toBe(true);
      });
      
      it('should return false after noon', function() {
        $rootScope.todaysDate = new Date(2015, 02, 19, 16);        
        expect($rootScope.isBeforeNoon()).toBe(false);
      });
    });
  });
})();