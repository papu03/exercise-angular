import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AddShiftComponent } from './add-shift/add-shift.component';
import { ShiftDetailsComponent } from './shift-details/shift-details.component';

const routes: Routes = [
  { path: 'dashboard', 
    component: DashboardComponent },
  { path: 'add-shift', 
    component: AddShiftComponent },
  { path: 'shift-detail/:id', 
    component: ShiftDetailsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //default route 
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

