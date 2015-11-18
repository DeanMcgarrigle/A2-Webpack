<<<<<<< HEAD
import {Component} from 'angular2/angular2';
import {RouteConfig, RouterLink, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config.ts';

=======
import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';
>>>>>>> refs/remotes/DeanMcgarrigle/master

@Component({
    selector: 'app'
})

@View({
    directives: [RouterLink, RouterOutlet],
    templateUrl: './app/templates/app.html',
})

@RouteConfig(APP_ROUTES)
export class AppComponent {
    public title = 'Test App';
    public routes = Routes;
}
