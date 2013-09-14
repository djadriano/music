EurodanceApp.controller('PodcastsController', [ '$scope', '$rootScope', '$routeParams', 'MusicFactory', 'PlayerFactory', function( $scope, $rootScope, $routeParams, MusicFactory, PlayerFactory ) {

  $scope.selectedPodcast = [];

  $scope.selectedPodcast = function() {

    MusicFactory.selectedPodcast().then(function( response ) {

      $scope.selectedPodcast = response.data;

      $rootScope.$broadcast( 'podcast:loaded', response.data.permalink_url );

      window.scrollTo(0);

    });

  };

  $scope.selectedPodcast();

}]);