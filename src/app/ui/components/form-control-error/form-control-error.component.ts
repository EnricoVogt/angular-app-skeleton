import { Component, Input, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { FormErrorMessageComponent } from '../form-error-message/form-error-message.component'
import { FormControl, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'form-control-error',
  templateUrl: './form-control-error.component.html',
  styleUrls: ['./form-control-error.component.css']
})
export class FormControlErrorComponent implements  AfterContentInit {

  @ContentChildren(FormErrorMessageComponent) formErrorMessageComponents: QueryList<FormErrorMessageComponent>;

  @Input() control: FormControl;

  private constrolStatusSubscription;

  constructor() { }
  
  ngAfterContentInit() {
    this.constrolStatusSubscription = this.control.statusChanges.subscribe(x => {
      let arr = Object.keys(this.control.errors || {});
      this.formErrorMessageComponents.toArray().forEach(x => {
        x.show = false;
        if(arr.indexOf(x.forValidator) !== -1){
          x.show = true;
        }
      })
    })
  }

  ngOnDestroy(){
    this.constrolStatusSubscription.unsubscribe();
  }
}
