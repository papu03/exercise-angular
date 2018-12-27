import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftRoutingModule } from './shift-routing.module';
import { AddShiftComponent } from './add-shift/add-shift.component';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { ValidateShiftsComponent } from './validate-shifts/validate-shifts.component';
import { ShiftDetailsComponent } from './shift-details/shift-details.component';
import { ShiftListComponent } from './shift-list/shift-list.component';

@NgModule({
  imports: [
    CommonModule,
    ShiftRoutingModule,
    DynamicFormModule
  ],
  declarations: [AddShiftComponent,
                ValidateShiftsComponent,
                ShiftDetailsComponent,
                ShiftListComponent],
  exports: [ShiftListComponent]
})
export class ShiftModule { }
