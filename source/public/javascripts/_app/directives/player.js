EurodanceApp.directive('player', function() {
  return {
    restrict    : 'E',
    scope       : {
      type : '@',
      url  : '@'
    },
    templateUrl : 'partials/player.html'
  };
});