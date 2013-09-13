EurodanceApp.controller('PodcastsController', function( $scope, $rootScope, $routeParams, $sce, MusicFactory, PlayerFactory ) {

  $scope.selectedPodcast = [];

  $scope.selectedPodcast = function() {

    MusicFactory.selectedPodcast().then(function( response ) {

      $scope.selectedPodcast = response.data;

      $rootScope.$broadcast( 'podcast:loaded', response.data.permalink_url );

    });

  };

  $scope.selectedPodcast();

});