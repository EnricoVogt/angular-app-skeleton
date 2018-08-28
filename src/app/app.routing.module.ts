import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AuthGuardService } from './auth/services/auth-guard.service'

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
