EurodanceApp.controller('VideosController', function( $scope, $rootScope, $routeParams, ArtistsFactory, VideosFactory, PlayerFactory ) {

  // define methods
  // ---------------------------------------------

  $scope.artist_videos       = [];
  $scope.artist_videos_page  = '';
  $scope.artist_videos_total = 0;

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

  $scope.getVideos = function() {

    VideosFactory.getVideos( $scope.artist_videos_page ).then(function( response ) {
      console.log(response);
      $scope.artist_videos_total = response.data.pageInfo.totalResults;
      $scope.artist_videos       = response.data.items;
      $scope.artist_videos_page  = response.data.nextPageToken;
    });

  };

  $scope.loadMoreVideos = function() {

    VideosFactory.getVideos( $scope.artist_videos_page ).then(function( response ) {
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