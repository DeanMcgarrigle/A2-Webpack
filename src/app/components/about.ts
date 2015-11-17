import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Router} from 'angular2/router'

@Component({
    selector: 'about',
    templateUrl: './app/templates/about.html',
    directives: [CORE_DIRECTIVES]
})

export class AboutComponent {

    constructor() {
        console.log("About Page Loaded");
    }

}