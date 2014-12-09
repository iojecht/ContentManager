requirejs.config({
    paths: {
        'text':'../require/text',
        'durandal': '../durandal/js',
        'plugins': '../durandal/js/plugins',
        'transitions': '../durandal/js/transitions',
        'knockout': ['//ajax.aspnetcdn.com/ajax/knockout/knockout-3.1.0', '../knockout/knockout-3.1.0'],
        'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min', '../jquery/jquery']
    }
});

define(function(require) {
    var system = require('durandal/system'),
        app = require('durandal/app');

    system.debug(true);

    app.title = 'Content Manager';
    
    app.configurePlugins({
        router: true,
        dialog: true
    });

    app.start().then(function () {
        app.setRoot('shell');
    });
})