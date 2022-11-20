import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    private _characters : Character[] = [
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

    get characters(){
        return [...this._characters];
    }

    constructor(){}
    
    addCharacter( character: Character){
        this._characters.push(character);
    }
}