import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AddShiftComponent } from './add-shift/add-shift.component';
import { ShiftDetailsComponent } from './shift-details/shift-details.component';
import { MembersComponent } from './members/members.component';
import { MemberShiftsComponent } from './member-shifts/member-shifts.component';
import { ValidateShiftsComponent } from './validate-shifts/validate-shifts.component';


const routes: Routes = [
  { path: 'dashboard', 
    component: DashboardComponent },
  { path: 'add-shift', 
    component: AddShiftComponent },
  { path: 'shift-detail/:id', 
    component: ShiftDetailsComponent },
  { path: 'members', 
    component: MembersComponent },
  { path: 'member-shifts/:memberId', 
    component: MemberShiftsComponent },
  { path: 'validate-shifts', 
    component: ValidateShiftsComponent },     
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //default route 
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

