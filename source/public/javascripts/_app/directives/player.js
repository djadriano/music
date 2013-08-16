EurodanceApp.directive('player', function() {
  return {
    restrict: 'EA',
    scope: { type:'@', url:'@' },
    template: '<iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe>',
    link: function(scope, element, attrs) {
      console.log(attrs);
    }
  };
});