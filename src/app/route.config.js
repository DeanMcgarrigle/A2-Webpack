var home_1 = require('./components/home');
var about_1 = require('./components/about');
var router_1 = require('angular2/router');
exports.Routes = {
    home: new router_1.Route({ path: '/', name: 'Home', component: home_1.HomeComponent }),
    about: new router_1.Route({ path: '/about', name: 'About', component: about_1.AboutComponent })
};
exports.APP_ROUTES = [
    exports.Routes.home,
    exports.Routes.about
];
//# sourceMappingURL=route.config.js.map