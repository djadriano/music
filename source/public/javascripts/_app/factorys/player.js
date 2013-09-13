EurodanceApp.factory( 'PlayerFactory', function( $http ) {

  return {

    getPlayer: function( url ) {

      return $http({
        method : 'post',
        url    : 'http://soundcloud.com/oembed?format=json',
        params : {
          url : url
        },
        cache  : true
      });

    },

  };

});