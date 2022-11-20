import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';
import { AddLogicComponent } from './add-logic/add-logic.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    AddLogicComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    MainPageComponent,
  ], 
  providers:[
    DbzService,
  ],
})

export class DbzModule { }
