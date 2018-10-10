import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLayoutComponent } from './base-layout.component';
import { MatUiModule } from '../../modules/mat-ui/mat-ui.module';

describe('BaseLayoutComponent', () => {
  let component: BaseLayoutComponent;
  let fixture: ComponentFixture<BaseLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatUiModule
      ],
      declarations: [ BaseLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
