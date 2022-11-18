import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'heroes.component.html'
})
export class HeroComponent{
    name: string = 'IronMan';
    age: number = 40;

    getData():string{
        return `${this.name} is ${this.age} year old.`;
    }

    get capitalizedName (){
        return this.name.toUpperCase();
    }

    changeName():void{
        this.name='Spidy';
    }

    changeAge():void{
        this.age = 30;
    }
}

