EurodanceApp.factory( 'AppFactory', [ '$rootScope', '$http', '$routeParams', '$location', function( $rootScope, $http, $routeParams, $location ) {

  return {

    setUrlToFbLike: function() {
      var like_url = 'http://eurodance.com.br/artists/' + $routeParams.name;
      $rootScope.fbLikeButton = 'https://www.facebook.com/plugins/like.php?href='+ like_url +'&layout=button_count';
    },

    setMetaTagsFb: function( obj ) {

      $rootScope.fb_title       = obj.fb_title;
      $rootScope.fb_url         = obj.fb_url;
      $rootScope.fb_image       = obj.fb_image;
      $rootScope.fb_description = obj.fb_description;

    }

  }

}]);