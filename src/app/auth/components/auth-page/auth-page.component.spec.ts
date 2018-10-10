import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageComponent } from './auth-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { UiModule } from '../../../ui/ui.module';
import { AuthRoutingModule } from '../../auth.routing.module';
import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../../effects/effects';
import {APP_BASE_HREF} from '@angular/common';

import { reducers } from '../../reducers/reducers'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { AppRoutingModule } from '../../../app.routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

export function createTranslateLoader(http: HttpClient) {
  console.log("auth")
  return new TranslateHttpLoader(http, './assets/i18n/auth/', '.json');
}

describe('AuthComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        CommonModule,
        TranslateModule.forRoot(
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
        AppRoutingModule,
        AuthRoutingModule,
        StoreModule.forRoot({'auth': combineReducers(reducers)}),
        EffectsModule.forRoot([AuthEffects]),
      ],
      declarations: [ AuthPageComponent ],
      providers: [
        AuthService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
