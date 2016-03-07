(function() {
  'use strict';
  describe('search controller', function() {
    var controller,
        stateStub;
    beforeEach(module('myApp'));
    beforeEach(function() {
      module(function ($provide) {      
        stateStub = jasmine.createSpyObj(['go']);
        $provide.value('$state', stateStub);
      });
      
      inject(function ($controller) {
        controller = $controller('SearchController');  
      });     
    });
    
    
    it('should call go on $state when searching', function () {
      controller.query = 'Hest';
      controller.search();
      
      expect(stateStub.go).toHaveBeenCalledWith('video.list', {query: 'Hest'});
    }); 
  });
})();