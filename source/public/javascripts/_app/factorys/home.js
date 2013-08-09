EurodanceApp.factory( 'HomeFactory', function( $http ) {

  return {

    getArtist: function( page ) {

      var limit = 50,
          page  = page || 1;

      return $http({
        method : 'JSONP',
        url    : 'http://ws.audioscrobbler.com/2.0/?method=tag.getweeklyartistchart&api_key=4959ac7ccf2055437d47a70303cc0ee0&format=json&callback=JSON_CALLBACK',
        params : {
          tag   : 'eurodance',
          page  : page,
          limit : ( limit * page )
        },
        cache  : true
      });

    }

  }

});