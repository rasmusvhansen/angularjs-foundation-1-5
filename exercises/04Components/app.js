(function() {
  'use strict';
  
  // TODO refactor this app into two components: an app component and a videoDetail component
  // see https://docs.angularjs.org/guide/component for help
  // 1. Create an app component that has a controller similar to the VideoListController - put template in app.html
  // 2. Create a videoDetail component which is responsible for rendering a single video - put template in videoDetails.html
  // 3. Change index.html to use the app component
  // 4. For bonus points, extract a search component from the app component and use output parameters on that to have app component orchestrate search and render
  
  angular.module('myApp', []).controller('VideoListController', function($http, $log) {
    var ctrl = this;
    ctrl.query = 'Rick Astley';
    
    ctrl.search = function() {
      return $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&q=' + ctrl.query + '&key=AIzaSyD4YJITOWdfQdFbcxHc6TgeCKmVS9yRuQ8')
        .then(function(res) {
          $log.info(res.data.items);
        
          ctrl.videos =  res.data.items.map(function (v) {
              var snip = v.snippet;
              return {
                  title: snip.title,
                  description: snip.description,
                  thumb: snip.thumbnails.medium.url,
                  link: 'https://www.youtube.com/watch?v=' + v.id.videoId
              };
          });
      });
    };
    
    ctrl.search();
  });
})();