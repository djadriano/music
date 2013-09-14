EurodanceApp.controller('ArtistsController', [ '$scope', '$rootScope', '$routeParams', '$location', '$timeout', 'AppFactory', 'ArtistsFactory', function( $scope, $rootScope, $routeParams, $location, $timeout, AppFactory, ArtistsFactory ) {

  // define methods
  // ---------------------------------------------

  $scope.getArtistInfo = function() {

    ArtistsFactory.getInfo().then(function( response ) {

      $scope.artistsInfo = response.data.artist;

      ArtistsFactory.setScopeInfo({
        name  : response.data.artist.name,
        intro : response.data.artist.bio.content,
        photo : response.data.artist.image[ 2 ][ '#text' ]
      });

      if( !$rootScope.fbLikeButton ) {

        $timeout(function() {
          AppFactory.setUrlToFbLike();
        }, 500);

      }

    });

  }

  // start the app
  $scope.getArtistInfo();

}]);