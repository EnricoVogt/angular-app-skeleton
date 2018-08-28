import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthState } from '../../../auth/states/auth.state'
import * as AuthActions from '../../../auth/actions/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private store: Store<AuthState>) { 
    
  }

  ngOnInit() {

  }
  
  logout(){
    console.log("Logout")
    this.store.dispatch(new AuthActions.Logout());
  }

}
