import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    DragDropModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    DragDropModule
  ]
})
export class AngularMaterialModule { }
