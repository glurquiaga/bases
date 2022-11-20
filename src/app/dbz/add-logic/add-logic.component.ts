import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-logic',
  templateUrl: './add-logic.component.html',
})
export class AddLogicComponent {

  // @Output() onNewCharacter = new EventEmitter<Character>();

  @Input()
  charToAdd: Character = {
    name: '',
    power: 0
  }
  constructor( private dbzService: DbzService){}
  add(){
    if (this.charToAdd.name.trim().length===0) {return;}
    this.dbzService.addCharacter(this.charToAdd);
    this.charToAdd = {
      name: '',
      power: 0
    }
  }
}
