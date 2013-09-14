EurodanceApp.factory( 'ArtistsFactory', [ '$rootScope', '$http', '$routeParams', function( $rootScope, $http, $routeParams ) {

  return {

    getInfo: function() {

      var artist_name = $routeParams.name;

      return $http({
        method : 'JSONP',
        url    : 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=4959ac7ccf2055437d47a70303cc0ee0&format=json&autocorrect=1&callback=JSON_CALLBACK',
        params : {
          artist : artist_name.replace( /-/g, ' ' )
        },
        cache  : true
      });

    },

    setScopeInfo: function( objInfo ) {

      $rootScope.artists = {
        infos : {
          name  : objInfo.name,
          photo : objInfo.photo,
          intro : objInfo.intro
        }
      };

    }

  }

}]);