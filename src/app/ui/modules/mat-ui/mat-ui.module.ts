import { NgModule } from '@angular/core';

import {
  MatButtonModule, 
  MatCheckboxModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: []
})
export class MatUiModule { }
