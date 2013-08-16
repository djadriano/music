EurodanceApp.controller('VideosController', function( $scope, $rootScope, $routeParams, ArtistsFactory, VideosFactory, PlayerFactory ) {

  // define methods
  // ---------------------------------------------

  $scope.artist_videos       = [];
  $scope.artist_videos_page  = '';
  $scope.artist_videos_total = 0;

  $scope.checkExistArtistData = function() {

    if( $rootScope.artists.infos.length === 0 ) {
      ArtistsFactory.getInfo( $routeParams.name ).then(function( response ) {
        $rootScope.artists.infos = {
          name  : response.data.artist.name,
          photo : response.data.artist.image[ 3 ][ '#text' ]
        };
      });
    }

  };

  $scope.getVideos = function() {

    VideosFactory.getVideos( $routeParams.name, $scope.artist_videos_page ).then(function( response ) {
      $scope.artist_videos_total = response.data.pageInfo.totalResults;
      $scope.artist_videos       = response.data.items;
      $scope.artist_videos_page  = response.data.nextPageToken;
    });

  };

  $scope.loadMoreVideos = function() {

    VideosFactory.getVideos( $routeParams.name, $scope.artist_videos_page ).then(function( response ) {
      $scope.artist_videos       = $scope.artist_videos.concat( response.data.items );
      $scope.artist_videos_page  = response.data.nextPageToken;
    });

  };

  $scope.openVideo = function( param ) {

    PlayerFactory.play( param, 'video' );

    window.scrollTo(0);

  };

  // start the app
  $scope.checkExistArtistData();
  $scope.getVideos();

});