/*jslint */
$(function ($) {
    console.log('TRAVIS NOTIFICATIONS - Written and Designed by MParaiso <mparaiso@online.fr>');
    var channels,channel, token, pusher = new Pusher('5df8ac576dcccf4fd076')
    $('#token').on('change', function (event) {
        token = event.target.value
        $.ajax('https://api.travis-ci.org/users',
            {
                headers: {
                    Authorization: 'token "' + token + '"',
                    Accept: 'application/vnd.travis-ci.2+json'
                }
            }).then(function (data) {
                channels = data.user.channels;
                console.log(data);
                channel  = pusher.subscribe(channels[0])
                channel.bind_all(function(event){
                    console.log(event);
                });
            })
    })
    //var channel = pusher.subscribe('')
})
