var EurodanceApp = angular.module( 'eurodancecombr', [ 'ngRoute' ] );

EurodanceApp.config(['$routeProvider', '$sceProvider', function( $routeProvider, $sceProvider ) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller : 'HomeController'
    })
    .when('/artists/:name', {
      templateUrl: 'partials/artists.html',
      controller : 'ArtistsController'
    })
    .when('/artists/:name/videos', {
      templateUrl: 'partials/videos.html',
      controller : 'VideosController'
    })
    .when('/artists/:name/music', {
      templateUrl: 'partials/music.html',
      controller : 'MusicController'
    })
    .when('/search/:value', {
      templateUrl: 'partials/search.html',
      controller : 'SearchController'
    });

    $sceProvider.enabled( false );
}]);

EurodanceApp.run(['$rootScope', function( $rootScope ) {
  $rootScope.currentPage = 1;
}]);