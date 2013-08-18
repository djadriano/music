EurodanceApp.controller('ArtistsController', function( $scope, $rootScope, $routeParams, ArtistsFactory ) {

  $scope.artistsInfo = [];

  // define methods
  // ---------------------------------------------

  $scope.getArtistInfo = function() {

    ArtistsFactory.getInfo( $routeParams.name ).then(function( response ) {

      $scope.artistsInfo.push( response.data.artist );

      ArtistsFactory.setScopeInfo({
        name  : response.data.artist.name,
        photo : response.data.artist.image[ 3 ][ '#text' ]
      });

    });

  }

  // start the app
  $scope.getArtistInfo();

});