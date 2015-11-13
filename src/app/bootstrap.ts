import {bootstrap} from 'angular2/angular2';
import {AppComponent} from './components/app';

bootstrap(
    AppComponent

).then(
    success => console.log('Bootstrap Success'),
    error => console.log(error)
);
