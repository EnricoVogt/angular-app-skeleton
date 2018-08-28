import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form-error-message',
  templateUrl: './form-error-message.component.html',
  styleUrls: ['./form-error-message.component.css']
})
export class FormErrorMessageComponent implements OnInit {

  @Input() forValidator: string;
  @Input() show: boolean;

  constructor() { }


  ngOnInit() {

    console.log(this.show)
    /*
    this.control.statusChanges.subscribe(x => {
      console.log(this.forValidator)
      console.log(this.control.errors)
    })*/
  }

  ngOnChanges() {
    console.log(this.show, 'sssss')
  }
}
