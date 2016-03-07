/*(function() {
  'use strict';
  angular.module('myApp', ['ui.router'])
  
  .controller('ListOneController', function(videos) {
    this.items = videos;
  })
  
  .factory('videoService', function ($http) {
    return {
      getVideos: function (query) {
        return $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&q=' + query + '&key=AIzaSyD4YJITOWdfQdFbcxHc6TgeCKmVS9yRuQ8').then(function(res) {
            return res.data.items.map(function(v) {
              var snip = v.snippet;
              return {
                title: snip.title,
                description: snip.description,
                thumb: snip.thumbnails.medium.url,
                link: 'https://www.youtube.com/watch?v=' + v.id.videoId
              };
            });
          });  
      }
    }
    
    
  })
})();*/