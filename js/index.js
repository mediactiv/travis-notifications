/*jslint */
$(function ($) {
    console.log('TRAVIS NOTIFICATIONS - Written and Designed by MParaiso <mparaiso@online.fr>');
    // get token from travis
    window.addEventListener("message", function (event) {
        console.log("received token: " + event.data.token);
    });
    window.addEventListener("error", function (event) {
        console.log("error", event);
    });

    var iframe = $('<iframe />').hide();
    iframe.appendTo('body');
    iframe.attr('src', "https://api.travis-ci.org/auth/post_message");
})
