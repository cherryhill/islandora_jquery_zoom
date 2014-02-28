(function($) {

Drupal.behaviors.islandorajqueryzoom = {
  attach: function(context) {
    $('.islandora-jquery-zoom').zoom({ on: 'grab' });
  }
};

})(jQuery);