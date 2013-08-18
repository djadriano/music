EurodanceApp.controller('HomeController', function( $scope, $rootScope, HomeFactory ) {

  // define methods
  // ---------------------------------------------

  $scope.showArtists = function() {

    HomeFactory.getArtist( $rootScope.currentPage ).then(function( response ) {
      HomeFactory.setScopeInfo( response.data.weeklyartistchart.artist );
    });

  }

  $scope.loadMoreArtists = function() {

    $rootScope.currentPage = ( $rootScope.currentPage + 1 );

    HomeFactory.getArtist( $rootScope.currentPage ).then(function( response ) {
      HomeFactory.setScopeInfo( response.data.weeklyartistchart.artist );
    });

  }

  // start the app
  $scope.showArtists();

})
.directive('menu', function() {
  return {
    restrict: 'A',
    link: function( scope, element, attrs ) {
      element.bind('click', function() {
        if( !scope.openMenu ) {
          scope.$apply(function() {
            scope.openMenu = true;
          });
        } else {
          scope.$apply(function() {
            scope.openMenu = false;
          });
        }
      });

    }
  };
});