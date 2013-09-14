EurodanceApp.controller('SearchController', [ '$scope', '$rootScope', '$routeParams', '$location', 'ArtistsFactory', function( $scope, $rootScope, $routeParams, $location, ArtistsFactory ) {

  $scope.artists = [];

  // define methods
  // ---------------------------------------------

  $scope.getArtists = function() {

    ArtistsFactory.getInfo( $routeParams.value ).then(function( response ) {
      $scope.artists.push( response.data.artist );
    });

  };

  $scope.submit = function() {
    $location.url( 'search/' + $scope.searchName );
    $scope.getArtists();
  };

  // start the app
  $scope.getArtists();

}]);