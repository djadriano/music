EurodanceApp.controller('ArtistsController', function( $scope, $rootScope, $routeParams, ArtistsFactory ) {

  // define methods
  // ---------------------------------------------

  $scope.getArtistInfo = function() {

    ArtistsFactory.getInfo( $routeParams.name ).then(function( response ) {

      $scope.artistsInfo = response.data.artist;

      ArtistsFactory.setScopeInfo({
        name  : response.data.artist.name,
        intro : response.data.artist.bio.content,
        photo : response.data.artist.image[ 2 ][ '#text' ]
      });

    });

  }

  // start the app
  $scope.getArtistInfo();

});