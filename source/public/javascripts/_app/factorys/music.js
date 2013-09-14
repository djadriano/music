EurodanceApp.factory( 'MusicFactory', [ '$rootScope', '$http', '$routeParams', function( $rootScope, $http, $routeParams ) {

  return {

    getMusic: function( page ) {

      var artist_name = $routeParams.name;

      return $http({
        method : 'jsonp',
        url    : 'http://api.soundcloud.com/tracks.json?client_id=d614588ae977c9792c5211ef5ca27945&linked_partitioning=1&limit=20&tags=eurodance&callback=JSON_CALLBACK',
        params : {
          q      : artist_name.replace( /-/g, ' ' ),
          offset : page === '' ? 0 : ( page * 20 )
        },
        cache  : true
      });

    },

    getPodcasts: function() {

      return $http({
        method : 'jsonp',
        url    : 'http://api.soundcloud.com/users/djadrianofernandes/tracks.json?client_id=cd001908211e3eaa05d2f9212497182d&limit=6&callback=JSON_CALLBACK',
        cache  : true
      });

    },

    selectedPodcast: function( param ) {

      if( param ) {
        url_param = param;
      } else {
        var url_param = 'http://soundcloud.com/' + $routeParams.dj + '/' + $routeParams.permalink;
      }

      return $http({
        method : 'jsonp',
        url    : 'http://api.soundcloud.com/resolve.json?client_id=cd001908211e3eaa05d2f9212497182d&callback=JSON_CALLBACK',
        params : {
          url : url_param
        },
        cache  : true
      });

    },

    setScopeInfo: function( objInfo ) {
      $rootScope.podcasts = objInfo;
    }

  }

}]);