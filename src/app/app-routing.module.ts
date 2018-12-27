import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'shift', 
    loadChildren: './shift/shift.module#ShiftModule'},
  { path: 'dashboard', 
    component: DashboardComponent },
  { path: 'crewMember', 
    loadChildren: './crew-member/crew-member.module#CrewMemberModule'},  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //default route 
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

