EurodanceApp.factory( 'PlayerFactory', function( $rootScope ) {

  return {

    play: function( id, type ) {

      switch( type ) {
        case 'video':
          var url = "http://www.youtube.com/embed/"+ id +"?autoplay=1";
        break;
        case 'music':
          var url = "https://w.soundcloud.com/player/?url=" + id;
        break;
      };

      $rootScope.player = {
        type : type,
        url  : url,
        show : true
      };

    }

  };

});