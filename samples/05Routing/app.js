(function() {
  'use strict';
  angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/state1");
    //
    // Now set up the states
    $stateProvider.state('state1', {
      url: "/state1",
      templateUrl: "templates/state1.html"
    })
      
      .state('state1.list', {
      url: "/list/:query",
      templateUrl: "templates/state1.list.html",
      resolve: {
        videos: function($http, $stateParams) {
          
          // http://survivejs.com/common_problems/pyramid.html          
          return $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&q=' + $stateParams.query + '&key=AIzaSyD4YJITOWdfQdFbcxHc6TgeCKmVS9yRuQ8')
            .then(function(res) {
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
      },
      controller: 'ListOneController as list'
    })
      
      .state('state2', {
      url: "/state2",
      templateUrl: "templates/state2.html"
    })
      
      .state('state2.list', {
      url: "/list",
      templateUrl: "templates/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });
  })
    
    .controller('ListOneController', function(videos) {
    this.items = videos;
  })
})();