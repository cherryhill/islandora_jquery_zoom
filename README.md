# Islandora Viewer: jQuery Zoom

## Introduction

A simpler (less-featured) alternative to OpenSeaDragon, [jQuery Zoom viewer](http://www.jacklmoore.com/zoom/) for Islandora image objects. Works only with web image mime types (jpg, gif, png, svg+xml). Currently implements the 'grab' functionality.

## Requirements

This module requires the following modules/libraries:

* [Islandora](https://github.com/islandora/islandora)
* [Tuque](https://github.com/islandora/tuque)
* [jQuery Zoom](https://github.com/jackmoore/zoom)

## Installation

For the jQuery zoom library, unzip the contents to a directory named 'zoom' (so the 'zoom' directory will contain 'jquery.zoom.min.js').

For the module, install as usual, see [this](https://drupal.org/documentation/install/modules-themes/modules-7) for further information.

## Configuration

Configured to work the same way as other image viewers (needs to be implemented in the actual solution pack - see implementation for chillco_islandora_large_image_solution pack).

## Troubleshooting

Having problems or solved a problem? Check out the Islandora google groups for a solution.

* [Islandora Group](https://groups.google.com/forum/?hl=en&fromgroups#!forum/islandora)
* [Islandora Dev Group](https://groups.google.com/forum/?hl=en&fromgroups#!forum/islandora-dev)

## FAQ

Doesn't OpenSeaDragon work with all image types? Why the alternative?

OpenSeaDragon does, but it comes at a cost:

* More server setup (installing djatoka - making sure it works correctly)
* More server tuning (images need to get processed to be viewable).

jQuery Zoom is clientside, meaning there is very little setup work required to get it to work correctly (and will put no overhead on your servers). However, it also only works with [Internet Image Types](http://en.wikipedia.org/wiki/Internet_media_type#Type_image). If you do not need the option to view the jp2/tiff assets directly (site viewers may be happy with wanting to view/zoom to a large web image) or need the option to view clips of images (depends on your requirements), then this might be a good alternative.

## Maintainers

[Ashok Modi](https://github.com/btmash)
