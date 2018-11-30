import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { AddShiftFormComponent } from './add-shift-form/add-shift-form.component';
import { DynamicShiftFormPropertyComponent } from './dynamic-shift-form-property/dynamic-shift-form-property.component';
import { ReactiveFormsModule }          from '@angular/forms';
import { AddShiftComponent } from './add-shift/add-shift.component';
import { ShiftDetailsComponent } from './shift-details/shift-details.component';
import { MembersComponent } from './members/members.component';
import { MemberShiftsComponent } from './member-shifts/member-shifts.component';
import { UpdateShiftFormComponent } from './update-shift-form/update-shift-form.component';
import { ValidateShiftsComponent } from './validate-shifts/validate-shifts.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddShiftFormComponent,
    DynamicShiftFormPropertyComponent,
    AddShiftComponent,
    ShiftDetailsComponent,
    MembersComponent,
    MemberShiftsComponent,
    UpdateShiftFormComponent,
    ValidateShiftsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
