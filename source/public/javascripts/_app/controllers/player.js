EurodanceApp.controller('PlayerController', function( $scope, $rootScope, PlayerFactory ) {

  $rootScope.$on( 'podcast:loaded', function( evt, args ) {

    $scope.showPlayer( args );

  });

  $scope.showPlayer = function( permalink ) {
    PlayerFactory.getPlayer( permalink ).then(function( response ) {
      $scope.player = response.data.html;
    });
  };

});