import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AuthPageComponent } from './components/auth-page/auth-page.component'
 
const authRoutes: Routes = [
  { 
    path: 'auth',  
    component: AuthPageComponent
  },
];
 
@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }