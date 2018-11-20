import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicShiftFormComponent } from './dynamic-shift-form.component';

describe('DynamicShiftFormComponent', () => {
  let component: DynamicShiftFormComponent;
  let fixture: ComponentFixture<DynamicShiftFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicShiftFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicShiftFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
