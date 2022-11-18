import { Component } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  heroes: string[] = ['Spiderman', 'Hulk', 'Thor'];
  erasedHero : string = "";
  eraseHero(index:number){
     this.erasedHero = this.heroes.splice(index, 1)[0];
  }


}
