(function () {
  angular.module('myApp')
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /video
    $urlRouterProvider.otherwise('/video');
    //
    // Now set up the states
    $stateProvider.state('video', {
      url: '/video',
      templateUrl: 'templates/video.html',
      controller: 'SearchController as searchController'
    })
      
      .state('video.list', {
      url: '/list/:query',
      templateUrl: 'templates/video.list.html',
      // TODO instead of resolving query, use videoService to resolve a list of videos
      resolve: {
        query: function($stateParams) {
          return $stateParams.query;
        }
      },
      controller: 'VideoListController as list'
    });    
  })
  .run(function ($rootScope, $log) {
    $rootScope.$on('$stateChangeError', $log.info); 
  })
})();