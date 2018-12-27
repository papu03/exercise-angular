import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateShiftsComponent } from './validate-shifts.component';

describe('ValidateShiftsComponent', () => {
  let component: ValidateShiftsComponent;
  let fixture: ComponentFixture<ValidateShiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateShiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
