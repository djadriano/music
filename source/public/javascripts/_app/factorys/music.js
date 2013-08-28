EurodanceApp.factory( 'MusicFactory', function( $rootScope, $http ) {

  return {

    getMusic: function( name, page ) {

      return $http({
        method : 'jsonp',
        url    : 'http://api.soundcloud.com/tracks.json?client_id=d614588ae977c9792c5211ef5ca27945&linked_partitioning=1&limit=20&tags=eurodance&callback=JSON_CALLBACK',
        params : {
          q      : name,
          offset : page === '' ? 0 : ( page * 20 )
        },
        cache  : true
      });

    },

    getPodcasts: function() {

      return $http({
        method : 'jsonp',
        url    : 'http://api.soundcloud.com/users/djadrianofernandes/tracks.json?client_id=cd001908211e3eaa05d2f9212497182d&limit=5&callback=JSON_CALLBACK',
        cache  : true
      });

    },

    setScopeInfo: function( objInfo ) {
      $rootScope.podcasts = objInfo;
    }

  }

});