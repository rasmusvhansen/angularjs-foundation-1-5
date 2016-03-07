(function() {
  'use strict';
  // TODO: Refactor $http call and mapping into a service.
  // Call that service from routing, and resolve the video.list state with a list of videos instead of a query
  
  angular.module('myApp', ['ui.router']).controller('VideoListController', function(query, $http) {
    var self = this;
    $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&q=' + query + '&key=AIzaSyD4YJITOWdfQdFbcxHc6TgeCKmVS9yRuQ8').then(function(res) {
      self.items = res.data.items.map(function(v) {
        var snip = v.snippet;
        return {
          title: snip.title,
          description: snip.description,
          thumb: snip.thumbnails.medium.url,
          link: 'https://www.youtube.com/watch?v=' + v.id.videoId
        };
      });
    })
  })
    
    .controller('SearchController', function($state) {
    var self = this;
    self.search = function() {
      $state.go('video.list', {
        query: self.query
      })
    }
  });
})();