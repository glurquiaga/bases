import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: 'counter.component.html'
})
export class CounterComponent{
    title: string = 'Counter App';
    n: number = 0;
    base:number = 5;
  
    bump( base : number){
        this.n+=base;
    }
}