EurodanceApp.factory( 'VideosFactory', function( $http, $routeParams ) {

  return {

    getVideos: function( page ) {

      var artist_name = $routeParams.name;

      return $http({
        method : 'jsonp',
        url    : 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyCx4D657pfSo81Oj2-hFf38b0qpkG03aog&maxResults=50&callback=JSON_CALLBACK',
        params : {
          q         : artist_name,
          pageToken : page
        },
        cache  : true
      });

    }

  }

});