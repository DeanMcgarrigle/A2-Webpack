import {Route} from 'angular2/router';
import {HomeComponent} from './components/home';

export var Routes = {
  home: new Route({path: '/', component: HomeComponent})
};

export const APP_ROUTES = [
	Routes.home
];
