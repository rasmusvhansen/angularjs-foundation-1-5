(function() {
  'use strict';
  describe('videoService', function() {
    var videoService,
        httpBackend;
    beforeEach(module('myApp'));
    
    beforeEach(inject(function (_videoService_, $httpBackend) {
      videoService = _videoService_;
      httpBackend = $httpBackend;
      
    }));
    
    it('should call youtube and map result', function () {
      httpBackend.expectGET(/.*q=MyQuery.*/).respond(
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
      
      videoService.getVideos('MyQuery').then(function (videos) {        
        expect(videos.length).toBe(1);
        var video = videos[0];
        
        expect(video.title).toBe('vidTitle');
        expect(video.description).toBe('vidDescription');
        expect(video.link).toBe('https://www.youtube.com/watch?v=vidId');
        expect(video.thumb).toBe('thumbUrl');
      });
      
      httpBackend.flush();
    }); 
  });
})();