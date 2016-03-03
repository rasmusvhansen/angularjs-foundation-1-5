/*(function () {
  angular.module('myApp')
  .config(function($stateProvider, $urlRouterProvider) {
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
        videos: function(videoService, $stateParams) {
          return videoService.getVideos($stateParams.query);
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
  .run(function ($rootScope, $log) {
    $rootScope.$on('$stateChangeError', $log.info); 
  })
})();*/