import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlErrorComponent } from './form-control-error.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

describe('FormControlErrorComponent', () => {
  let component: FormControlErrorComponent;
  let fixture: ComponentFixture<FormControlErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ FormControlErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlErrorComponent);
    component = fixture.componentInstance;

    component.control = new FormControl('');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
