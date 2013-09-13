EurodanceApp.filter('beautyUrlParam', function() {
  return function( value ) {

    var new_value = angular.lowercase( value );
    new_value     = new_value.replace( /\s+/g, '-' );

    return new_value;

  }
});