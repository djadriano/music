var EurodanceApp = angular.module( 'eurodancecombr', [ 'ngRoute' ] );

EurodanceApp.config(['$routeProvider', '$locationProvider', '$sceProvider', function( $routeProvider, $locationProvider, $sceProvider ) {

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
    .when('/podcasts/:dj/:permalink', {
      templateUrl: 'partials/podcasts.html',
      controller : 'PodcastsController'
    })
    .when('/search/:value', {
      templateUrl: 'partials/search.html',
      controller : 'SearchController'
    });

    $locationProvider.html5Mode(true);

    $sceProvider.enabled( false );

}]);

EurodanceApp.run(['$rootScope', function( $rootScope ) {

  $rootScope.currentPage = 1;

  $rootScope.fb_title       = 'Eurodance.com.br - Temp Version';
  $rootScope.fb_url         = 'http://www.eurodance.com.br';
  $rootScope.fb_image       = 'http://www.eurodance.com.br/public/images/logo_social.gif';
  $rootScope.fb_description = 'O melhor da eurodance está volta. Aguarde que em breve teremos novidades!';

}]);