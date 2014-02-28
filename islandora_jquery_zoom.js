(function($) {

Drupal.behaviors.islandorajqueryzoom = {
  attach: function(context) {
    $('.islandora-image-zoom').zoom();
  }
};

})(jQuery);