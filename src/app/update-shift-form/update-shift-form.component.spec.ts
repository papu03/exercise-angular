import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShiftFormComponent } from './update-shift-form.component';

describe('UpdateShiftFormComponent', () => {
  let component: UpdateShiftFormComponent;
  let fixture: ComponentFixture<UpdateShiftFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateShiftFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateShiftFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
