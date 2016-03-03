(function() {
  'use strict';
  describe('MainController', function() {
    var controller;
    beforeEach(module('myApp'));
    
    beforeEach(inject(function ($controller) {
      controller = $controller('MainController');    
    }));
    
    it('should have some info', function () {
      expect(controller.info).toBe('This is some info')
    });
    
    it('should rotate 5 degrees for each character', function () {
      controller.text = 'abc';
      expect(controller.rotation()).toBe(15);
      
      controller.text = 'abcdef';
      expect(controller.rotation()).toBe(30);
    });    
  });
})();