EurodanceApp.controller('HomeController', [ '$scope', '$rootScope', 'HomeFactory', 'MusicFactory', function( $scope, $rootScope, HomeFactory, MusicFactory ) {

  // define methods
  // ---------------------------------------------

  $scope.showArtists = function() {

    HomeFactory.getArtist( $rootScope.currentPage ).then(function( response ) {
      HomeFactory.setScopeInfo( response.data.weeklyartistchart.artist );
    });

  };

  $scope.showPodcasts = function() {

    MusicFactory.getPodcasts().then(function( response ) {
      MusicFactory.setScopeInfo( response.data );
    });

  };

  $scope.loadMoreArtists = function() {

    $rootScope.currentPage = ( $rootScope.currentPage + 1 );

    HomeFactory.getArtist( $rootScope.currentPage ).then(function( response ) {
      HomeFactory.setScopeInfo( response.data.weeklyartistchart.artist );
    });

  };

  // start the app
  $scope.showPodcasts();
  $scope.showArtists();

}]);