EurodanceApp.factory( 'ArtistsFactory', function( $http ) {

  return {

    getInfo: function( name ) {

      return $http({
        method : 'JSONP',
        url    : 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=4959ac7ccf2055437d47a70303cc0ee0&format=json&autocorrect=1&callback=JSON_CALLBACK',
        params : {
          artist : name
        },
        cache  : true
      });

    }

  }

});