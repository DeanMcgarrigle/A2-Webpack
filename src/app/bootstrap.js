require('../styles.scss');
require('reflect-metadata');
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var app_1 = require('./app');
angular2_1.bootstrap(app_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS
]).then(function (success) { return console.log('Bootstrap Success'); }, function (error) { return console.log(error); });
//# sourceMappingURL=bootstrap.js.map