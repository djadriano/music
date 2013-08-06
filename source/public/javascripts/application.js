var EurodanceApp = angular.module( 'eurodancecombr', [] );

EurodanceApp.config(['$routeProvider', function( $routeProvider ) {
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
    });
}]);

EurodanceApp.run(['$rootScope', function( $rootScope ) {
  $rootScope.currentPage = 1;

  $rootScope.home = {
    artists : []
  };

  $rootScope.artists = {
    infos : []
  };

  $rootScope.video = {
    playing : ''
  }

  $rootScope.music = {
    playing : ''
  }
}]);