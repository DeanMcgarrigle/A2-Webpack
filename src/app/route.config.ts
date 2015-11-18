import {HomeComponent} from './components/home.ts';
import {AboutComponent} from './components/about.ts';
import {Route, Router} from 'angular2/router';

export var Routes = {
  home:  new Route({path: '/', name: 'Home', component: HomeComponent}),
  about: new Route({path: '/about',name: 'About', component: AboutComponent})
};

export const APP_ROUTES = [
    Routes.home,
    Routes.about
];

