/*jslint */
$(function ($) {
    console.log('TRAVIS NOTIFICATIONS - Written and Designed by MParaiso <mparaiso@online.fr>');
    var channels, channel, pusher = new Pusher('5df8ac576dcccf4fd076')
    channel = pusher.subscribe('repo-5372376')
    pusher.bind_all(function (event,data) {
        console.log(event,arguments);
    });
})
