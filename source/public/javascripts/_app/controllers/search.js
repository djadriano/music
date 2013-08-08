EurodanceApp.controller('SearchController', function( $scope, $rootScope, $routeParams, $location, ArtistsFactory ) {

  // define methods
  // ---------------------------------------------

  $scope.getArtists = function() {

    ArtistsFactory.getInfo( $routeParams.value ).then(function( response ) {
      $rootScope.search.artists = [response.data.artist];
    });

  };

  $scope.submit = function() {
    $location.url( 'search/' + $scope.searchName );
    $scope.getArtists();
  };

  // start the app
  $scope.getArtists();

});