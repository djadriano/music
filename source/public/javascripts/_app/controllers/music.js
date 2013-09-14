EurodanceApp.controller('MusicController', [ '$scope', '$rootScope', '$routeParams', 'ArtistsFactory', 'MusicFactory', 'AppFactory', function( $scope, $rootScope, $routeParams, ArtistsFactory, MusicFactory, AppFactory ) {

  // define methods
  // ---------------------------------------------

  $scope.artist_music           = [];
  $scope.artist_music_page      = 0;
  $scope.artist_music_next_href = '';

  $scope.checkExistArtistData = function() {

    if( !!$rootScope.artists === false ) {
      ArtistsFactory.getInfo().then(function( response ) {
        ArtistsFactory.setScopeInfo({
          name  : response.data.artist.name,
          photo : response.data.artist.image[ 2 ][ '#text' ]
        });
      });
    }

  };

  $scope.getMusic = function() {

    MusicFactory.getMusic( $scope.artist_music_page ).then(function( response ) {
      $scope.artist_music            = response.data.collection;
      $scope.artist_music_next_href  = response.data.next_href === undefined ? '' : response.data.next_href;

      if( !$rootScope.fbLikeButton ) {

        $timeout(function() {
          AppFactory.setUrlToFbLike();
        }, 500);

      }
    });

  };

  $scope.loadMoreMusic = function() {

    $scope.artist_music_page = $scope.artist_music_page + 1;

    MusicFactory.getMusic( $scope.artist_music_page ).then(function( response ) {
      $scope.artist_music           = $scope.artist_music.concat( response.data.collection );
      $scope.artist_music_next_href = response.data.next_href === undefined ? '' : response.data.next_href;
    });

  };

  $scope.openMusic = function( param ) {

    MusicFactory.selectedPodcast( param ).then(function( response ) {

      $scope.selectedPodcast = response.data;

      $rootScope.$broadcast( 'podcast:loaded', response.data.permalink_url );

      window.scrollTo(0);

    });


  };

  // start the app
  $scope.checkExistArtistData();
  $scope.getMusic();

}]);