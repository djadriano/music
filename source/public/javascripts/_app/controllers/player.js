EurodanceApp.controller('PlayerController', [ '$scope', '$rootScope', 'PlayerFactory', function( $scope, $rootScope, PlayerFactory ) {

  $rootScope.$on( 'podcast:loaded', function( evt, args ) {
    $scope.showPlayer( args );
  });

  $rootScope.$on( 'video:loaded', function( evt, args ) {
    $scope.showPlayerVideo( args );
  });

  $scope.showPlayer = function( permalink ) {
    PlayerFactory.getPlayer( permalink ).then(function( response ) {
      $scope.player = response.data.html;
    });
  };

  $scope.showPlayerVideo = function( html ) {
    $scope.player = html;
  };

}]);