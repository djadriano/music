EurodanceApp.controller('ArtistsController', function( $scope, $rootScope, $routeParams, ArtistsFactory ) {

  $scope.artistsInfo = [];

  // define methods
  // ---------------------------------------------

  $scope.getArtistInfo = function() {

    ArtistsFactory.getInfo( $routeParams.name ).then(function( response ) {

      $scope.artistsInfo.push( response.data.artist );

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