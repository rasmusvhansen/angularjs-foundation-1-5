(function() {
  'use strict';
  angular.module('myApp', [])
    .component('videoDetails', {
      templateUrl: 'videoDetails.html',
      controller: function controller() {},
      bindings: {
        video: '<',
        onShow: '&'
      }
    })

  .component('app', {
    templateUrl: 'app.html',
    controller: function($http, $log) {
      var ctrl = this;
      ctrl.query = 'Rick';
      ctrl.videos = [];

      ctrl.show = function(video) {
        alert('Showing: ' + video.title);
      };

      $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&q=' + ctrl.query + '&key=AIzaSyD4YJITOWdfQdFbcxHc6TgeCKmVS9yRuQ8')
        .then(function(res) {
          $log.info(res.data.items);

          ctrl.videos = res.data.items.map(function(v) {
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
  });

})();