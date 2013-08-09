EurodanceApp.factory( 'MusicFactory', function( $http ) {

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

    }

  }

});