import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{
  
  characters : Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 8500
    },
    {
      name: 'Skrill',
      power: 700
    },

  ]

  lastCharacter: Character = {
    name: '',
    power: 0
  }
  
  add(){
    if (this.lastCharacter.name.trim().length===0) {return;}
    this.characters.push(this.lastCharacter);
    this.lastCharacter = {
      name: '',
      power: 0
    }
  }

}
