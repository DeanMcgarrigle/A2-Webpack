import {Route} from 'angular2/router';
import {HomeComponent} from './components/home';
import {AboutComponent} from './components/about';

export var Routes = {
  home: new Route({path: '/home', component: HomeComponent}),
  about: new Route({path: '/about', component: AboutComponent})
};

export const APP_ROUTES = [
	Routes.home,
    Routes.about
];
