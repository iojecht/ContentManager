define(function (require) {
    var router = require('plugins/router');

    router.useConvention();

    return {
        router: router,
        activate: function () {
            router.map([
              { route: '', title: 'Home', moduleId: 'views/home', nav: true },
              { route: 'rainier', title: 'Mount Rainier', moduleId: 'rainier', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});