import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicShiftFormPropertyComponent } from './dynamic-shift-form-property.component';

describe('DynamicShiftFormPropertyComponent', () => {
  let component: DynamicShiftFormPropertyComponent;
  let fixture: ComponentFixture<DynamicShiftFormPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicShiftFormPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicShiftFormPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
