import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component'
import { MatUiModule } from './modules/mat-ui/mat-ui.module';
import { FormControlErrorComponent } from './components/form-control-error/form-control-error.component';
import { FormErrorMessageComponent } from './components/form-error-message/form-error-message.component'

@NgModule({
  imports: [
    CommonModule,
    MatUiModule
  ],
  exports: [ 
    MatUiModule,
    BaseLayoutComponent,
    FormControlErrorComponent,
    FormErrorMessageComponent
  ],
  declarations: [
    BaseLayoutComponent,
    FormControlErrorComponent,
    FormErrorMessageComponent
  ]
})
export class UiModule { }
