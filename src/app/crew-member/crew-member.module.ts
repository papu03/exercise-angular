import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrewMemberRoutingModule } from './crew-member-routing.module';
import { MembersComponent } from './members/members.component';
import { MemberShiftsComponent } from './member-shifts/member-shifts.component';

@NgModule({
  imports: [
    CommonModule,
    CrewMemberRoutingModule
  ],
  declarations: [MembersComponent,
                 MemberShiftsComponent]
})
export class CrewMemberModule { }
