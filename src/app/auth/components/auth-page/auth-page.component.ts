import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthState } from '../../states/auth.state'
import * as AuthActions from '../../actions/actions';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  authForm: FormGroup
  matcher = new MyErrorStateMatcher();
  hasError = true

  constructor(
    private store: Store<AuthState>,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: [ '', Validators.compose([ Validators.required, Validators.email ]) ],
      password: [ '', Validators.required ],
      rememberLogin: [ true ]
    });
  }

  authFormSubmit() {
    if(this.authForm.valid) {
      this.store.dispatch(new AuthActions.Login(this.authForm.value));
    }
  }
}
