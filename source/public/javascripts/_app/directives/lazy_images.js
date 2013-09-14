EurodanceApp.directive('lazyImages', function() {
  return {
    restrict    : 'A',
    scope       : {
      src          : '=src',
      alternative  : '=alternative',
    },
    link: function(scope, element, attrs) {

      var image = new Image();

      image.onload = function() {
        element.replaceWith( image );
      }

      !scope.src ? image.src = scope.alternative : image.src = scope.src;

    }
  };
});