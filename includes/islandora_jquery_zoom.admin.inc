<?php

/**
 * @file
 * Admin callbacks for Islandora OpenSeadragon
 */

/**
 * Admin form. Descriptions taken from the deepzoom module.
 */
function islandora_jquery_zoom_admin($form, &$form_state) {
  drupal_set_message("Empty form for now");
  return system_settings_form($form);
}
