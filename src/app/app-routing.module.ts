import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AddShiftComponent } from './add-shift/add-shift.component';

const routes: Routes = [
  { path: 'dashboard', 
    component: DashboardComponent },
  { path: 'add-shift', 
    component: AddShiftComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //default route 
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

