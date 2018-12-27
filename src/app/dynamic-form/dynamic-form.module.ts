import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { AddShiftFormComponent } from './add-shift-form/add-shift-form.component';
import { DynamicShiftFormPropertyComponent } from './dynamic-shift-form-property/dynamic-shift-form-property.component';
import { UpdateShiftFormComponent } from './update-shift-form/update-shift-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddShiftFormComponent,
                DynamicShiftFormPropertyComponent,
                UpdateShiftFormComponent],
  exports: [AddShiftFormComponent,
           DynamicShiftFormPropertyComponent,
           UpdateShiftFormComponent]              
})
export class DynamicFormModule { }
