import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config.ts';

@Component({
    selector: 'app'
})

@View({
    directives: [RouterLink, RouterOutlet],
    templateUrl: './app/templates/app.html',
})

@RouteConfig(APP_ROUTES)
export class AppComponent {
    title: string;
    routes: any;
    
    constructor() {
        this.title = 'App';
        this.routes = Routes;
    }
}
