import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddShiftComponent } from './add-shift/add-shift.component';
import { ShiftDetailsComponent } from './shift-details/shift-details.component';
import { ValidateShiftsComponent } from './validate-shifts/validate-shifts.component';

const routes: Routes = [
  { path: 'addshift',
    component: AddShiftComponent },
  { path: 'shift-detail/:id',
    component: ShiftDetailsComponent },
  { path: 'validate-shifts', 
    component: ValidateShiftsComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftRoutingModule { }
