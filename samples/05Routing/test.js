(function() {
  'use strict';
  describe('Routing', function() {
    var state;
    beforeEach(module('myApp'));
    
    beforeEach(inject(function ($state) {
      state = $state;    
    }));
    
    it('State 1 url should be /state1', function () {
      var config = state.get('state1');      
      expect(config.url).toBe('/state1');      
    }); 
  });
})();