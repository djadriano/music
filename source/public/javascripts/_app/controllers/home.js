EurodanceApp.controller('HomeController', function( $scope, $rootScope, HomeFactory ) {

  // define methods
  // ---------------------------------------------

  $scope.showArtists = function() {

    HomeFactory.getArtist( $rootScope.currentPage ).then(function( response ) {
      $rootScope.home.artists = response.data.weeklyartistchart.artist;
    });

  }

  $scope.loadMoreArtists = function() {

    $rootScope.currentPage = ( $rootScope.currentPage + 1 );

    HomeFactory.getArtist( $rootScope.currentPage ).then(function( response ) {
      $rootScope.home.artists = response.data.weeklyartistchart.artist;
    });

  }

  // start the app
  $scope.showArtists();

});