(function() {
  'use strict';
  describe('VideoListController', function() {
    var controller,
        httpBackend;
    beforeEach(module('myApp'));
    
    beforeEach(inject(function ($controller, $httpBackend) {
      httpBackend = $httpBackend; 
      controller = $controller('VideoListController');
      httpBackend.expectGET(/.*q=Rick Astley.*/).respond({items: []});
      httpBackend.flush();
    }));
    
    it('should query for Rick Astley by default', function () {
      expect(controller.query).toBe('Rick Astley')
      
      httpBackend.expectGET(/.*q=Rick Astley.*/).respond({items: []});
      controller.search();
      httpBackend.flush();
    });
    
    it('should query for user specified term', function () {
      controller.query = 'Angular';
      
      httpBackend.expectGET(/.*q=Angular.*/).respond({items: []});
      controller.search();
      httpBackend.flush();
    });
    
    it('should map items to proper structure', function () {
      httpBackend.expectGET(/.*q=Rick Astley.*/).respond(
        {items: [
          {
            id: {videoId: 'vidId'},
            snippet: {
              title: 'vidTitle',
              description: 'vidDescription',
              thumbnails: {
                medium: {
                  url: 'thumbUrl'
                }
              }
            }
          }
        ]});
      controller.search();
      httpBackend.flush();      
      
      expect(controller.videos.length).toBe(1);
      
      // TODO: verify that ctrl.videos looks as expected given this reply from $http
    })
        
  });
})();