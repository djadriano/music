EurodanceApp.filter('lineBreak', function() {
  return function( value ) {
    if( value ) {
      return value.replace( new RegExp('\r?\n', 'g'), '<br />' );
    }
  }
});