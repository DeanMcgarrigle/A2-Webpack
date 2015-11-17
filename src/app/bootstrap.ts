import '../styles.scss';
import 'reflect-metadata';

import {bootstrap, provide} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppComponent} from './app';

bootstrap(
    AppComponent,
    [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy})
    ]

).then(
    success => console.log('Bootstrap Success'),
    error => console.log(error)
);
