var router_1 = require('angular2/router');
var home_1 = require('./components/home');
var about_1 = require('./components/about');
exports.Routes = {
    home: new router_1.Route({ path: '/home', component: home_1.HomeComponent }),
    about: new router_1.Route({ path: '/about', component: about_1.AboutComponent })
};
exports.APP_ROUTES = [
    exports.Routes.home,
    exports.Routes.about
];
//# sourceMappingURL=route.config.js.map