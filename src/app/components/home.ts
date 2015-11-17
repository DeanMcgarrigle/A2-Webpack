import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Router, RouterLink} from 'angular2/router'

@Component({
    selector: 'home',
    templateUrl: './app/templates/home.html',
    directives: [CORE_DIRECTIVES, RouterLink]
})

export class HomeComponent {

    constructor() {
        console.log("Home Page Loaded");
    }

}
