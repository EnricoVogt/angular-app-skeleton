import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './components/auth-page/auth-page.component'
import { AuthRoutingModule } from './auth.routing.module'
import { EffectsModule } from '@ngrx/effects';

import { AuthEffects } from './effects/effects';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import { UiModule } from '../ui/ui.module'
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers/reducers'
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  console.log("auth")
  return new TranslateHttpLoader(http, './assets/i18n/auth/', '.json');
}

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TranslateModule.forChild(
      {
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        },
        isolate: false
      }
    ),
    UiModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [
    AuthPageComponent
  ],
  /* providers: [ AuthService, AuthGuardService ] */
})
export class AuthModule {

  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [AuthService, AuthGuardService],
    };
  }
}
