import '../styles.scss';

import {bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app';

bootstrap(
    AppComponent,
    [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS
    ]

).then(
    success => console.log('Bootstrap Success'),
    error => console.log(error)
);
