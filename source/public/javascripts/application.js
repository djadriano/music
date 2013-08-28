var EurodanceApp = angular.module( 'eurodancecombr', [ 'ngRoute' ] );

EurodanceApp.config(['$routeProvider', '$sceProvider', function( $routeProvider, $sceProvider ) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html'
    })
    .when('/artists/:name', {
      templateUrl: 'partials/artists.html'
    })
    .when('/artists/:name/videos', {
      templateUrl: 'partials/videos.html'
    })
    .when('/artists/:name/music', {
      templateUrl: 'partials/music.html'
    })
    .when('/search/:value', {
      templateUrl: 'partials/search.html'
    });

    $sceProvider.enabled( false );
}]);

EurodanceApp.run(['$rootScope', function( $rootScope ) {
  $rootScope.currentPage = 1;
}]);