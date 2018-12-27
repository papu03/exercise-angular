import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShiftPropertyBase } from '../dynamic-form/shift-form-property/shift-property-base';


@Injectable(
  {providedIn: 'root'}
)
export class ShiftPropertyControlService {

  constructor() { 
    console.log("ShiftPropertyControlService constructor")

  }

  toFormGroup(properties: ShiftPropertyBase<any>[] ) {
    let group: any = {};

    properties.forEach(property => {
      group[property.key] = property.required ? new FormControl(property.value || '', Validators.required)
                                              : new FormControl(property.value || '');
    });
    
    return new FormGroup(group);
  }
}
