import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { combineReducers, StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/auth/reducers/reducers';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({'auth': combineReducers(reducers)}),
      ],
      providers: [AuthGuardService]
    });
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
