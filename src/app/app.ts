import {Component} from 'angular2/angular2';
import {RouteConfig, RouterLink, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config.ts';


@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig(APP_ROUTES)
export class AppComponent { go() {} }

