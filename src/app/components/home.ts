import {Component,View} from 'angular2/angular2';

@Component({
    selector: 'home'
})

@View({
    templateUrl: './app/templates/home.html',
})

export class HomeComponent{

    public text:string = 'bob';

    constructor() {

    }
}
