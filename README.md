# OctoPrint-Webcamimagereloader

## Why i build this plugin?

Unfortunately my webcam has no MPEG stream, only a live snapshot url. With this plugin the path to the live snapshot can be entered as webcam. The plugin reloads the live snapshot every 500ms to create a moving image. Technically, a new timestamp is appended to the image source every 500ms. Feel free to use this plugin for yourself and develop it further.

## Setup

Install via the bundled [Plugin Manager](https://github.com/foosel/OctoPrint/wiki/Plugin:-Plugin-Manager)
or manually using this URL:

    https://github.com/eckonator/OctoPrint-Webcamimagereloader/archive/master.zip

## Configuration

Just install the Plugin and add a live image url path to the OctoPrint Stream-URL in webcam settings like this: "http://username:password@192.168.178.XX/tmpfs/auto.jpg"
