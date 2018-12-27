import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { MemberShiftsComponent } from './member-shifts/member-shifts.component';

const routes: Routes = [
  { path: '',
    component: MembersComponent },
  { path: 'memberShifts/:memberId',
    component: MemberShiftsComponent }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrewMemberRoutingModule { }
