(function () {
  'use strict';
  angular.module('myApp', []).controller('VideoListController', function ($http, $log) {
    var ctrl = this;
    ctrl.query = 'Rick Astley';



    ctrl.search = function () {
      return $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&q=' + ctrl.query + '&key=AIzaSyD4YJITOWdfQdFbcxHc6TgeCKmVS9yRuQ8')
        .then(function (res) {
          $log.info(res.data.items);
          // 1. Look in console and figure out how to map the array of items to an array of objects with: title, description, link, thumb
          // 2. Expose this array on the controller (ctrl.videos)
          // 3. Complete the unit test that verifies this structure
          // 4. Adapt the view to display this list (use .video css class for each video div)
        });
    };

    ctrl.search();
  });
})();