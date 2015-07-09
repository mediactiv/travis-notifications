/*jslint */
$(function ($) {
    console.log('TRAVIS NOTIFICATIONS - Written and Designed by MParaiso <mparaiso@online.fr>');
    var channels, channel, pusher = new Pusher('5df8ac576dcccf4fd076')
    channel = pusher.subscribe('repo-5372376')
    pusher.bind_all(function (event, data) {
        var notification;
        console.log(event, arguments);
        if (event === 'job:finished') {
            //show notification with data.finished_at,data.repository_slug,data.state
            if (Notification.permission === "granted") {
                createBuildNotification(data)
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission(function (permission) {
                    if (permission === 'granted') {
                        createBuildNotification(data)
                    }
                })
            }
        }
    });
    // creates a notification
    function createBuildNotification(data) {
        notification = new Notification("Build : " + data.repository_slug, {
            icon: "images/" + (data.state === 'passed' ? 'green_dot.png' : 'red_dot.png'),
            body: "Build for \"" + data.repository_slug + "\" finished at "
            + data.finished_at + " with state: " + data.state,
            tag: 'travis-ci.org',
            dir: 'rtl'

        })
        setTimeout(notification.close.bind(notification), 10000);
        return notification
    }
})
