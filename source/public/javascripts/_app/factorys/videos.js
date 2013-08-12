EurodanceApp.factory( 'VideosFactory', function( $http ) {

  return {

    getVideos: function( name, page ) {

      return $http({
        method : 'jsonp',
        url    : 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyCx4D657pfSo81Oj2-hFf38b0qpkG03aog&maxResults=50&callback=JSON_CALLBACK',
        params : {
          q         : name,
          pageToken : page
        },
        cache  : true
      });

    }

  }

});