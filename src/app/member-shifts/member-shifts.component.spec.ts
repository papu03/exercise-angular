import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberShiftsComponent } from './member-shifts.component';

describe('MemberShiftsComponent', () => {
  let component: MemberShiftsComponent;
  let fixture: ComponentFixture<MemberShiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberShiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
