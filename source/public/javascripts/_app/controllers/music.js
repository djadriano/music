EurodanceApp.controller('MusicController', function( $scope, $rootScope, $routeParams, ArtistsFactory, MusicFactory ) {

  // define methods
  // ---------------------------------------------

  $scope.artist_music           = [];
  $scope.artist_music_page      = 0;
  $scope.artist_music_next_href = '';

  $scope.checkExistArtistData = function() {

    if( $rootScope.artists.infos.length === 0 ) {
      ArtistsFactory.getInfo( $routeParams.name ).then(function( response ) {
        $rootScope.artists.infos = response.data.artist;
      });
    }

  };

  $scope.getMusic = function() {

    MusicFactory.getMusic( $routeParams.name, $scope.artist_music_page ).then(function( response ) {
      $scope.artist_music            = response.data.collection;
      $scope.artist_music_next_href  = response.data.next_href === undefined ? '' : response.data.next_href;
    });

  };

  $scope.loadMoreMusic = function() {

    $scope.artist_music_page = $scope.artist_music_page + 1;

    MusicFactory.getMusic( $routeParams.name, $scope.artist_music_page ).then(function( response ) {
      $scope.artist_music           = $scope.artist_music.concat( response.data.collection );
      $scope.artist_music_next_href = response.data.next_href === undefined ? '' : response.data.next_href;
    });

  };

  $scope.openMusic = function( param ) {
    $rootScope.video.playing = '';
    $rootScope.music.playing = param;
    window.scrollTo(0);
  };

  // start the app
  $scope.checkExistArtistData();
  $scope.getMusic();

});