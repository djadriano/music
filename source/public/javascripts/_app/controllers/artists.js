EurodanceApp.controller('ArtistsController', function( $scope, $rootScope, $routeParams, ArtistsFactory ) {

  // define methods
  // ---------------------------------------------

  $scope.getArtistInfo = function() {

    ArtistsFactory.getInfo( $routeParams.name ).then(function( response ) {
      $rootScope.artists.infos = response.data.artist;
    });

  }

  // start the app
  $scope.getArtistInfo();

});