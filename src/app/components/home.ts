import {Component,View} from 'angular2/angular2';

@Component({
    selector: 'home',
    template: `<div>{{name}}</div>`
})

export class HomeComponent{

    name = 'Bob';

}
