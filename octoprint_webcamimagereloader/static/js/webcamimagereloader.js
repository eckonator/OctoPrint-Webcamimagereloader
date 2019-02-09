/*
 * View model for OctoPrint-Webcamimagereloader
 *
 * Author: Markus Eckert
 * License: AGPLv3
 */
$(function() {
    function WebcamimagereloaderViewModel(parameters) {
        var self = this;

        // Reload the Webcam Image Source every 500ms

        imagePathAccessible = function(currentWebcamSource) {

            if (typeof currentWebcamSource === 'undefined') {
                var status = false;
            } else {
                var status = true;
            }

            return status;
        };

        reloadImage = function() {
                var currentWebcam = $('#webcam_image');
                var currentWebcamSource = currentWebcam.attr('src');

                if(imagePathAccessible(currentWebcamSource)) {
                    setInterval(function(){
                        if(currentWebcamSource.indexOf("?") > -1) {
                            currentWebcam.attr("src", currentWebcamSource+'&webcamimagereloader='+new Date().getTime());
                        } else {
                            currentWebcam.attr("src", currentWebcamSource+'&webcamimagereloader='+new Date().getTime());
                        }
                    }, 500);
                } else {
                    setTimeout(function() {
                        reloadImage();
                    }, 1000);
                }
        };

        self.onStartupComplete = function(controlViewModel) {
            reloadImage();
        };

    }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: WebcamimagereloaderViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ /* "loginStateViewModel", "settingsViewModel" */ ],
        // Elements to bind to, e.g. #settings_plugin_webcamimagereloader, #tab_plugin_webcamimagereloader, ...
        elements: [ /* ... */ ]
    });
});
